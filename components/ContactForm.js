'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { getStoredAttribution, persistAttributionFromLocation, trackEvent } from '@/lib/analytics';
import {
  INTENT_OPTIONS,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  resolveIntent,
} from '@/lib/conversion.mjs';
import { siteConfig } from '@/lib/site-config';

const RAW_LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '';

function getLeadEndpoint() {
  if (!RAW_LEAD_ENDPOINT) return '';

  try {
    const url = new URL(RAW_LEAD_ENDPOINT);
    if (url.protocol === 'https:' || (url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
      return url.toString();
    }
  } catch {
    return '';
  }

  return '';
}

function createLeadId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `wd-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function persistLead(endpoint, payload) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'omit',
      mode: 'cors',
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`);

    const result = await response.json().catch(() => ({}));
    return { leadId: result.lead_id || payload.lead_id };
  } finally {
    window.clearTimeout(timeout);
  }
}

export default function ContactForm() {
  const [intentValue, setIntentValue] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [fallbackUrl, setFallbackUrl] = useState('');
  const startedRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intent = resolveIntent(params.get('interesse'));
    if (intent) setIntentValue(intent.value);
    persistAttributionFromLocation();
  }, []);

  const selectedIntent = resolveIntent(intentValue);

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent('form_start', {
      page_path: window.location.pathname,
      intent: selectedIntent?.value || 'nao_selecionado',
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFallbackUrl('');

    const form = new FormData(event.currentTarget);

    if (form.get('website')) {
      setStatus({ state: 'success', message: 'Recebemos seu contato.' });
      return;
    }

    const intent = resolveIntent(form.get('projectType')) || resolveIntent('outro');
    const attribution = { ...getStoredAttribution(), ...persistAttributionFromLocation() };
    const query = new URLSearchParams(window.location.search);
    const clientLeadId = createLeadId();
    const payload = {
      lead_id: clientLeadId,
      submitted_at: new Date().toISOString(),
      name: String(form.get('name') || '').trim(),
      company: String(form.get('company') || '').trim(),
      whatsapp: String(form.get('whatsapp') || '').trim(),
      intent: intent.value,
      intent_label: intent.label,
      message: String(form.get('message') || '').trim(),
      source_page: window.location.pathname,
      source_cta: query.get('cta') || '',
      source_case: query.get('case') || '',
      attribution,
    };

    const endpoint = getLeadEndpoint();
    let leadId = clientLeadId;
    let handoffWindow = null;

    if (endpoint) {
      handoffWindow = window.open('about:blank', '_blank');
      if (handoffWindow) handoffWindow.opener = null;
    }

    setStatus({ state: 'submitting', message: 'Preparando sua mensagem para o WhatsApp…' });

    try {
      if (endpoint) {
        const result = await persistLead(endpoint, payload);
        leadId = result.leadId;
        trackEvent('lead_submit', {
          lead_id: leadId,
          intent: intent.value,
          source_page: payload.source_page,
          source_cta: payload.source_cta,
          source_case: payload.source_case,
        });
      }

      const message = buildWhatsAppMessage({
        ...payload,
        leadId: endpoint ? leadId : '',
        sourcePage: payload.source_case ? `case ${payload.source_case}` : payload.source_page,
        utmSource: attribution.utm_source,
        utmMedium: attribution.utm_medium,
        utmCampaign: attribution.utm_campaign,
      });
      const whatsappUrl = buildWhatsAppUrl(siteConfig.phoneE164, message);

      setFallbackUrl(whatsappUrl);
      trackEvent('whatsapp_click', {
        placement: 'contact_form',
        page_path: payload.source_page,
        intent: intent.value,
        lead_id: endpoint ? leadId : undefined,
      });

      if (handoffWindow) {
        handoffWindow.location.replace(whatsappUrl);
      } else {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      setStatus({
        state: 'success',
        message: endpoint
          ? 'Contexto registrado. Abrimos o WhatsApp para você continuar a conversa.'
          : 'Abrimos o WhatsApp para você concluir o contato.',
      });
    } catch {
      if (handoffWindow && !handoffWindow.closed) handoffWindow.close();

      const message = buildWhatsAppMessage({
        ...payload,
        sourcePage: payload.source_case ? `case ${payload.source_case}` : payload.source_page,
        utmSource: attribution.utm_source,
        utmMedium: attribution.utm_medium,
        utmCampaign: attribution.utm_campaign,
      });
      const whatsappUrl = buildWhatsAppUrl(siteConfig.phoneE164, message);

      setFallbackUrl(whatsappUrl);
      trackEvent('lead_submit_error', {
        intent: intent.value,
        source_page: payload.source_page,
      });
      setStatus({
        state: 'error',
        message: 'Não conseguimos registrar automaticamente. Use o botão abaixo para continuar pelo WhatsApp.',
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} onFocusCapture={handleFormStart}>
      {selectedIntent && (
        <div className="contact-form__context">
          <span>Seu foco</span>
          <strong>{selectedIntent.shortLabel}</strong>
          <p>{selectedIntent.contactCopy}</p>
        </div>
      )}

      <label>
        Nome
        <input name="name" required autoComplete="name" />
      </label>

      <label>
        WhatsApp
        <input name="whatsapp" type="tel" required inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" />
      </label>

      <label>
        Empresa
        <input name="company" autoComplete="organization" />
      </label>

      <label>
        O que você quer destravar?
        <select name="projectType" required value={intentValue} onChange={(event) => setIntentValue(event.target.value)}>
          <option value="" disabled>Selecione uma opção</option>
          {INTENT_OPTIONS.map((intent) => <option value={intent.value} key={intent.value}>{intent.label}</option>)}
        </select>
      </label>

      <label>
        O que você precisa?
        <textarea name="message" rows="5" placeholder="Conte um pouco sobre o negócio, o problema ou a ideia." />
      </label>

      <label className="contact-form__consent">
        <input name="privacy" type="checkbox" required />
        <span>Autorizo o uso destes dados para responder ao meu contato e li o <Link href="/privacidade/">aviso de privacidade</Link>.</span>
      </label>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button className="button button--primary" type="submit" disabled={status.state === 'submitting'}>
        {status.state === 'submitting' ? 'Preparando…' : 'Mapear meu gargalo'} <span aria-hidden="true">↗</span>
      </button>

      <p className={`form-status form-status--${status.state}`} role="status">{status.message}</p>
      {fallbackUrl && (
        <a
          className="contact-form__fallback"
          href={fallbackUrl}
          target="_blank"
          rel="noreferrer"
          data-placement="contact_form_fallback"
        >
          O WhatsApp não abriu? Continuar por aqui ↗
        </a>
      )}
    </form>
  );
}

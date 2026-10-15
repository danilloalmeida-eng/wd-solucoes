'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  CONSENT_STORAGE_KEY,
  initializeDataLayer,
  persistAttributionFromLocation,
  setAnalyticsPermission,
  trackEvent,
} from '@/lib/analytics';
import { resolveIntent } from '@/lib/conversion.mjs';

const RAW_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
const GTM_ID = /^GTM-[A-Z0-9]+$/i.test(RAW_GTM_ID) ? RAW_GTM_ID.toUpperCase() : '';

function setGoogleConsent(value) {
  initializeDataLayer();
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', value === 'default' ? 'default' : 'update', {
    ad_storage: value === 'granted' ? 'granted' : 'denied',
    ad_user_data: value === 'granted' ? 'granted' : 'denied',
    ad_personalization: value === 'granted' ? 'granted' : 'denied',
    analytics_storage: value === 'granted' ? 'granted' : 'denied',
  });
}

function getPlacement(anchor) {
  if (anchor.dataset.placement) return anchor.dataset.placement;
  const section = anchor.closest('[data-tracking-section], section, header, footer, nav');
  return section?.dataset?.trackingSection || section?.id || section?.tagName?.toLowerCase() || 'site';
}

export default function ConversionAnalytics() {
  const [consent, setConsent] = useState(GTM_ID ? 'loading' : 'disabled');

  useEffect(() => {
    initializeDataLayer();
    persistAttributionFromLocation();

    if (GTM_ID) {
      setGoogleConsent('default');

      let storedConsent = '';
      try {
        storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY) || '';
      } catch {
        storedConsent = '';
      }

      if (storedConsent === 'granted') {
        setAnalyticsPermission(true);
        setGoogleConsent('granted');
        setConsent('granted');
      } else if (storedConsent === 'denied') {
        setAnalyticsPermission(false);
        setConsent('denied');
      } else {
        setAnalyticsPermission(false);
        setConsent('unset');
      }
    } else {
      setAnalyticsPermission(false);
    }

    function handleClick(event) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor?.href) return;

      const url = new URL(anchor.href, window.location.href);
      const placement = getPlacement(anchor);
      const common = { placement, page_path: window.location.pathname };

      if (url.protocol === 'tel:') {
        trackEvent('phone_click', common);
        return;
      }

      if (url.hostname === 'wa.me' || url.hostname.endsWith('.whatsapp.com')) {
        trackEvent('whatsapp_click', common);
        return;
      }

      if (anchor.dataset.trackEvent === 'view_case') {
        trackEvent('view_case', {
          ...common,
          case_slug: anchor.dataset.caseSlug,
          source_page: window.location.pathname,
        });
        return;
      }

      if (url.origin === window.location.origin && url.pathname.startsWith('/contato')) {
        const intent = resolveIntent(url.searchParams.get('interesse'));
        trackEvent('cta_click', {
          ...common,
          cta_text: anchor.textContent?.trim(),
          destination: `${url.pathname}${url.search}`,
          intent: intent?.value || 'geral',
        });
      }
    }

    function reopenConsent() {
      if (GTM_ID) setConsent('unset');
    }

    document.addEventListener('click', handleClick);
    window.addEventListener('wd:open-consent', reopenConsent);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('wd:open-consent', reopenConsent);
    };
  }, []);

  function chooseConsent(nextConsent) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      // The user's choice still applies to the current page when storage is unavailable.
    }

    const granted = nextConsent === 'granted';
    setAnalyticsPermission(granted);
    setGoogleConsent(granted ? 'granted' : 'denied');
    setConsent(nextConsent);
  }

  return (
    <>
      {GTM_ID && consent === 'granted' && (
        <Script id="wd-gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {GTM_ID && consent === 'unset' && (
        <aside className="consent-banner" aria-labelledby="consent-title" aria-live="polite">
          <div>
            <strong id="consent-title">Medição com transparência</strong>
            <p>Usamos medição opcional para entender quais páginas e ações geram contatos. Nenhum campo digitado no formulário é enviado para as ferramentas de análise.</p>
            <Link href="/privacidade/">Ver aviso de privacidade</Link>
          </div>
          <div className="consent-banner__actions">
            <button type="button" className="button button--quiet" onClick={() => chooseConsent('denied')}>Somente necessários</button>
            <button type="button" className="button button--primary" onClick={() => chooseConsent('granted')}>Aceitar medição</button>
          </div>
        </aside>
      )}

      {GTM_ID && !['loading', 'unset'].includes(consent) && (
        <button
          type="button"
          className="consent-reopen"
          onClick={() => setConsent('unset')}
          aria-label="Reabrir preferências de privacidade"
        >
          Privacidade
        </button>
      )}
    </>
  );
}

'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  CONSENT_STORAGE_KEY,
  initializeDataLayer,
  persistAttributionFromLocation,
  setAnalyticsPermission,
  trackEvent,
} from '@/lib/analytics';
import { resolveIntent } from '@/lib/conversion.mjs';

const RAW_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
const MEASUREMENT_ID = /^G-[A-Z0-9]+$/i.test(RAW_MEASUREMENT_ID)
  ? RAW_MEASUREMENT_ID.toUpperCase()
  : '';

function initializeGoogleTag() {
  if (!MEASUREMENT_ID) return;

  initializeDataLayer();
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };

  if (window.__wdGoogleTagConfigured) {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    });
    return;
  }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.__wdGoogleTagConfigured = true;
}

function revokeGoogleConsent() {
  if (typeof window.gtag !== 'function') return false;

  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  return Boolean(window.__wdGoogleTagConfigured);
}

function getPlacement(anchor) {
  if (anchor.dataset.placement) return anchor.dataset.placement;
  const section = anchor.closest('[data-tracking-section], section, header, footer, nav');
  return section?.dataset?.trackingSection || section?.id || section?.tagName?.toLowerCase() || 'site';
}

export default function ConversionAnalytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState(MEASUREMENT_ID ? 'loading' : 'disabled');

  useEffect(() => {
    initializeDataLayer();
    persistAttributionFromLocation();

    if (MEASUREMENT_ID) {
      let storedConsent = '';
      try {
        storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY) || '';
      } catch {
        storedConsent = '';
      }

      if (storedConsent === 'granted') {
        setAnalyticsPermission(true);
        initializeGoogleTag();
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
      if (MEASUREMENT_ID) setConsent('unset');
    }

    document.addEventListener('click', handleClick);
    window.addEventListener('wd:open-consent', reopenConsent);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('wd:open-consent', reopenConsent);
    };
  }, []);

  useEffect(() => {
    if (consent !== 'granted' || typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [consent, pathname]);

  function chooseConsent(nextConsent) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      // The user's choice still applies to the current page when storage is unavailable.
    }

    const granted = nextConsent === 'granted';
    setAnalyticsPermission(granted);

    if (granted) initializeGoogleTag();
    const shouldReload = !granted && revokeGoogleConsent();
    setConsent(nextConsent);

    if (shouldReload) window.location.reload();
  }

  return (
    <>
      {MEASUREMENT_ID && consent === 'granted' && (
        <Script
          id="wd-google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      )}

      {MEASUREMENT_ID && consent === 'unset' && (
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

      {MEASUREMENT_ID && !['loading', 'unset'].includes(consent) && (
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

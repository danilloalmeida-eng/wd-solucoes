import { ATTRIBUTION_KEYS } from '@/lib/conversion.mjs';

export const ATTRIBUTION_STORAGE_KEY = 'wd_attribution_v1';
export const CONSENT_STORAGE_KEY = 'wd_measurement_consent_v1';

const BLOCKED_ANALYTICS_KEYS = new Set([
  'name',
  'nome',
  'phone',
  'telefone',
  'whatsapp',
  'email',
  'company',
  'empresa',
  'message',
  'mensagem',
]);

function browserAvailable() {
  return typeof window !== 'undefined';
}

function safeSessionRead() {
  if (!browserAvailable()) return {};

  try {
    return JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function cleanAnalyticsParams(params) {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([key, value]) => !BLOCKED_ANALYTICS_KEYS.has(key.toLowerCase()) && value !== undefined && value !== null && value !== '')
      .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 240) : value]),
  );
}

export function initializeDataLayer() {
  if (!browserAvailable()) return;
  window.dataLayer = window.dataLayer || [];
}

export function setAnalyticsPermission(allowed) {
  if (!browserAvailable()) return;
  window.__wdAnalyticsAllowed = Boolean(allowed);
}

export function trackEvent(eventName, params = {}) {
  if (!browserAvailable()) return false;

  const event = {
    event: eventName,
    ...cleanAnalyticsParams(params),
  };

  window.__wdAnalyticsDebug = window.__wdAnalyticsDebug || [];
  window.__wdAnalyticsDebug.push(event);
  window.dispatchEvent(new CustomEvent('wd:analytics', { detail: event }));

  if (!window.__wdAnalyticsAllowed) return false;

  initializeDataLayer();
  window.dataLayer.push(event);
  return true;
}

export function persistAttributionFromLocation() {
  if (!browserAvailable()) return {};

  const params = new URLSearchParams(window.location.search);
  const stored = safeSessionRead();
  const attribution = { ...stored };

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value.slice(0, 240);
  }

  if (!attribution.landing_page) attribution.landing_page = window.location.pathname;
  if (!attribution.referrer && document.referrer) attribution.referrer = document.referrer.slice(0, 500);
  attribution.last_page = window.location.pathname;

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Browsing restrictions must not break the conversion flow.
  }

  return attribution;
}

export function getStoredAttribution() {
  return safeSessionRead();
}

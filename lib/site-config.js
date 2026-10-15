export const siteConfig = {
  name: 'W&D Soluções Integradas',
  shortName: 'W&D',
  url: 'https://wedsolucoes.com.br',
  phoneE164: '5511981527208',
  phoneHref: 'tel:+5511981527208',
  phoneDisplay: '(11) 98152-7208',
  location: 'São Paulo, SP',
  serviceArea: 'Brasil',
  locale: 'pt-BR',
  lastContentUpdate: '2026-10-13',
};

export function createDirectWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.phoneE164}?text=${encodeURIComponent(message)}`;
}

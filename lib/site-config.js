export const siteConfig = {
  name: 'W&D Soluções Integradas',
  legalName: 'W&D Soluções Integradas',
  cnpj: '63.402.907/0001-05',
  contactName: 'Danillo Almeida',
  shortName: 'W&D',
  url: 'https://wedsolucoes.com.br',
  phoneE164: '5511981527208',
  phoneHref: 'tel:+5511981527208',
  phoneDisplay: '(11) 98152-7208',
  location: 'São Paulo, SP — Zona Leste',
  serviceArea: 'São Paulo, SP — com foco na Zona Leste',
  locale: 'pt-BR',
  lastContentUpdate: '2026-10-15',
};

export function createDirectWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const INTENT_OPTIONS = [
  {
    value: 'gerar-demanda',
    label: 'Gerar demanda com site, mídia e conteúdo',
    shortLabel: 'Gerar mais demanda',
    contactCopy: 'Vamos entender como sua presença digital e sua aquisição podem gerar oportunidades mais qualificadas.',
  },
  {
    value: 'organizar-vendas',
    label: 'Organizar vendas e atendimento',
    shortLabel: 'Organizar vendas e atendimento',
    contactCopy: 'Vamos mapear captação, atendimento, responsáveis e próximos passos para reduzir oportunidades perdidas.',
  },
  {
    value: 'automatizar',
    label: 'Automatizar a operação com CRM e IA',
    shortLabel: 'Automatizar a operação',
    contactCopy: 'Vamos identificar tarefas repetitivas, integrações e fluxos em que a automação pode gerar retorno.',
  },
  {
    value: 'site-premium',
    label: 'Criar ou melhorar um site comercial',
    shortLabel: 'Site comercial',
    contactCopy: 'Vamos entender a oferta, a jornada e as integrações necessárias para o site apoiar a venda.',
  },
  {
    value: 'trafego-pago',
    label: 'Estruturar mídia e aquisição mensurável',
    shortLabel: 'Mídia e aquisição',
    contactCopy: 'Vamos avaliar oferta, página, mensuração e operação comercial antes de direcionar investimento em mídia.',
  },
  {
    value: 'crm-automacao',
    label: 'Implantar CRM e automação comercial',
    shortLabel: 'CRM e automação comercial',
    contactCopy: 'Vamos mapear o funil, as responsabilidades e os follow-ups que precisam continuar avançando.',
  },
  {
    value: 'agente-ia',
    label: 'Criar um agente de IA ou agente SDR',
    shortLabel: 'Agente de IA ou SDR',
    contactCopy: 'Vamos identificar entradas, regras, limites e resultados esperados antes de desenhar o agente.',
  },
  {
    value: 'dados-integracoes',
    label: 'Conectar dados, dashboards e integrações',
    shortLabel: 'Dados e integrações',
    contactCopy: 'Vamos entender onde os dados estão, quem precisa deles e quais decisões devem apoiar.',
  },
  {
    value: 'ecommerce-integracoes',
    label: 'E-commerce, catálogo e marketplaces',
    shortLabel: 'E-commerce e integrações',
    contactCopy: 'Vamos mapear catálogo, pedidos, estoque, canais e integrações necessárias para a operação.',
  },
  {
    value: 'conteudo-social',
    label: 'Conteúdo e presença nas redes sociais',
    shortLabel: 'Conteúdo para redes sociais',
    contactCopy: 'Vamos alinhar posicionamento, frequência e papel do conteúdo na geração de demanda.',
  },
  {
    value: 'solucao-completa',
    label: 'Conectar site, aquisição, CRM e automação',
    shortLabel: 'Solução digital completa',
    contactCopy: 'Vamos encontrar o gargalo prioritário e organizar uma evolução integrada, sem ferramentas soltas.',
  },
  {
    value: 'outro',
    label: 'Outro desafio digital',
    shortLabel: 'Outro desafio digital',
    contactCopy: 'Conte o contexto. A primeira etapa é entender o problema antes de escolher a tecnologia.',
  },
];

const INTENTS_BY_VALUE = new Map(INTENT_OPTIONS.map((intent) => [intent.value, intent]));

const INTENT_ALIASES = new Map([
  ['presenca-aquisicao', 'gerar-demanda'],
  ['presenca-e-aquisicao', 'gerar-demanda'],
  ['sites-premium', 'site-premium'],
  ['google-ads-meta-ads-ou-trafego-pago', 'trafego-pago'],
  ['crm-e-automacao-comercial', 'crm-automacao'],
  ['agentes-de-ia-e-atendimento', 'agente-ia'],
  ['agente-de-ia-ou-agente-sdr', 'agente-ia'],
  ['dados-e-commerce-e-integracoes', 'dados-integracoes'],
  ['dashboard-e-inteligencia-de-dados', 'dados-integracoes'],
  ['e-commerce-e-integracoes', 'ecommerce-integracoes'],
  ['conteudo-para-redes-sociais', 'conteudo-social'],
  ['solucao-digital-completa', 'solucao-completa'],
  ['solucao-completa-site-trafego-crm-automacao', 'solucao-completa'],
]);

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
];

function slugify(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' e ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function resolveIntent(value) {
  const normalized = slugify(value);
  const canonical = INTENT_ALIASES.get(normalized) || normalized;
  return INTENTS_BY_VALUE.get(canonical) || null;
}

export function createContactHref(intent, context = {}) {
  const params = new URLSearchParams();
  const resolved = resolveIntent(intent);

  if (resolved) params.set('interesse', resolved.value);
  if (context.cta) params.set('cta', context.cta);
  if (context.caseSlug) params.set('case', context.caseSlug);

  const query = params.toString();
  return query ? `/contato/?${query}` : '/contato/';
}

function cleanLine(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

export function buildWhatsAppMessage(lead) {
  const intent = resolveIntent(lead.intent);
  const lines = [
    `Olá, sou ${cleanLine(lead.name)}${lead.company ? `, da ${cleanLine(lead.company)}` : ''}.`,
    `Quero conversar sobre: ${intent?.shortLabel || 'um desafio digital'}.`,
  ];

  if (lead.message) lines.push(`Contexto: ${cleanLine(lead.message)}`);
  if (lead.leadId) lines.push(`Referência: ${cleanLine(lead.leadId)}`);
  if (lead.sourcePage) lines.push(`Origem: ${cleanLine(lead.sourcePage)}`);

  const campaign = [lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).map(cleanLine);
  if (campaign.length) lines.push(`Campanha: ${campaign.join(' / ')}`);

  return lines.join('\n\n');
}

export function buildWhatsAppUrl(phone, message) {
  return `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

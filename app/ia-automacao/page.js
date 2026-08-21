import Link from 'next/link';

export const metadata = { title: 'IA, CRM e automação comercial', description: 'Agentes SDR, CRM, dashboards e integrações aplicados à aquisição, ao atendimento e à operação.', alternates: { canonical: '/ia-automacao/' } };

const method = [['01', 'Analisar', 'Entender onde existe repetição, atraso, ruído ou informação difícil de acessar.'], ['02', 'Conectar', 'Integrar formulários, APIs, bancos de dados, dashboards e canais de atendimento.'], ['03', 'Automatizar', 'Desenhar um fluxo que reduz trabalho manual sem esconder decisões importantes.'], ['04', 'Acompanhar', 'Criar visibilidade para o processo continuar sendo ajustado com o uso.']];

const applications = [
  ['01', 'Agente SDR', 'Recebe, qualifica e encaminha leads com critérios definidos pela operação comercial.'],
  ['02', 'CRM & follow-up', 'Organiza contatos, etapas do funil, responsáveis, lembretes e próximas ações.'],
  ['03', 'Dashboards', 'Reúne indicadores comerciais e operacionais em uma visão clara para tomada de decisão.'],
  ['04', 'Integrações', 'Conecta site, formulários, WhatsApp, APIs, e-commerce, ERP e banco de dados.'],
];

export default function AutomationPage() {
  return <main className="split-page automation-page"><div className="container"><div className="split-page__intro"><div><p className="eyebrow">IA &amp; Automação</p><p className="back-link">Processos melhores começam com clareza.</p></div><div><h1>IA conectada ao CRM. <em>Trabalho que continua avançando.</em></h1><p className="split-page__lead">Criamos agentes, automações, dashboards e integrações para reduzir tarefas manuais, acelerar o atendimento e dar contexto a cada decisão comercial.</p></div></div><div className="flow-board" style={{ marginTop: '4rem' }}><div className="flow-board__top"><span>Workflow / commercial intelligence</span><span>Connected operation</span></div><div className="flow-track"><div className="flow-node"><b>Entrada</b><span>Lead ou dado</span></div><span className="flow-arrow">→</span><div className="flow-node"><b>Ação</b><span>CRM + agente</span></div><span className="flow-arrow">→</span><div className="flow-node"><b>Visibilidade</b><span>Dashboard</span></div></div><div className="flow-board__foot">Site e mídia → CRM → Agente SDR → Follow-up → Dashboard</div></div><section className="automation-applications"><div className="section-heading"><p className="eyebrow">Aplicações práticas</p><h2>Onde a automação entra para gerar resultado.</h2></div><div className="content-grid automation-grid">{applications.map(([number, title, text]) => <article className="feature-panel service-panel" key={number}><span className="feature-panel__no">{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section><div className="method-list">{method.map(([number, title, text]) => <div className="method-row" key={number}><strong>{number}</strong><h2>{title}</h2><p>{text}</p></div>)}</div><div style={{ marginTop: '3rem' }}><Link className="button button--primary" href="/contato/?interesse=crm-automacao">Mapear uma automação <span>↗</span></Link></div></div></main>;
}

import Link from 'next/link';

export const metadata = {
  title: 'Soluções digitais integradas',
  description: 'Sites, tráfego pago, CRM, agentes de IA, dashboards, e-commerce e automações conectados à operação do seu negócio.',
  alternates: { canonical: '/solucoes/' },
};

const pillars = [
  {
    number: '01',
    title: 'Presença & aquisição',
    text: 'Construímos a base digital e ativamos os canais que levam a empresa até as pessoas certas.',
    services: ['Sites institucionais e comerciais', 'Google Ads e Meta Ads', 'Gestão de tráfego pago', 'Google Meu Negócio', 'Carrosséis e conteúdos para redes'],
  },
  {
    number: '02',
    title: 'CRM & automação comercial',
    text: 'Organizamos a jornada do lead para que cada contato tenha contexto, responsável e próximo passo.',
    services: ['CRM sob medida', 'Automação de CRM', 'Funis de venda e atendimento', 'Follow-ups e notificações automáticas'],
  },
  {
    number: '03',
    title: 'Agentes de IA & atendimento',
    text: 'Aplicamos IA em pontos concretos da operação para responder, classificar e encaminhar oportunidades com velocidade.',
    services: ['Agente SDR', 'Qualificação de leads', 'Triagem e atendimento com IA', 'Integração com canais e bases internas'],
  },
  {
    number: '04',
    title: 'Dados, e-commerce & integrações',
    text: 'Conectamos vendas, produtos e sistemas para reduzir retrabalho e transformar dados em decisões.',
    services: ['Dashboards gerenciais e comerciais', 'Tracking de vendas e tráfego', 'Shopify e Nuvemshop', 'Bling, Shopee e Mercado Livre', 'Catálogo e publicação automática de produtos'],
  },
  {
    number: '05',
    title: 'Solução digital completa',
    text: 'Para empresas que precisam resolver aquisição, vendas e operação como partes do mesmo projeto.',
    services: ['Site premium', 'Tráfego pago', 'CRM', 'Automação e IA', 'Dashboard de acompanhamento'],
  },
];

export default function SolutionsPage() {
  return (
    <main className="split-page solutions-page">
      <div className="container">
        <div className="split-page__intro">
          <div>
            <p className="eyebrow">Soluções</p>
            <p className="back-link">Da aquisição à operação.</p>
          </div>
          <div>
            <h1>As partes certas, trabalhando como <em>uma única operação.</em></h1>
            <p className="split-page__lead">A W&amp;D conecta presença digital, mídia, CRM, dados e automação. Você pode começar por uma necessidade específica ou estruturar a jornada completa.</p>
          </div>
        </div>

        <div className="content-grid services-grid">
          {pillars.map(({ number, title, text, services }) => (
            <article className="feature-panel service-panel" key={number}>
              <span className="feature-panel__no">{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <ul className="service-panel__list">
                {services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              <Link className="service-panel__link" href={`/contato/?interesse=${encodeURIComponent(title.toLowerCase())}`}>Conversar sobre esta frente <span>↗</span></Link>
            </article>
          ))}
        </div>

        <section className="integrated-offer">
          <div>
            <p className="eyebrow">Operação completa</p>
            <h2>Site + tráfego + CRM + automação.</h2>
          </div>
          <div>
            <p>Quando o problema atravessa várias áreas, desenhamos uma solução integrada com uma estratégia, uma arquitetura e indicadores comuns.</p>
            <Link className="button button--primary" href="/contato/?interesse=solucao-completa">Solicitar diagnóstico <span>↗</span></Link>
          </div>
        </section>
      </div>
    </main>
  );
}

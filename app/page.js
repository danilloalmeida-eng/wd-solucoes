import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/lib/projects';
import { createContactHref } from '@/lib/conversion.mjs';

export const metadata = {
  title: 'Mais demanda, menos trabalho manual e uma operação conectada',
  description: 'A W&D conecta site, aquisição, CRM, automações e IA para empresas que querem gerar oportunidades, organizar vendas e operar com mais clareza.',
  alternates: { canonical: '/' },
};

const solutions = [
  {
    number: '01',
    slug: 'site-comercial',
    title: 'Presença & aquisição',
    description: 'Posicionamento, conteúdo e mídia trabalhando juntos para transformar atenção em oportunidades comerciais.',
    services: ['Sites premium', 'Google Ads', 'Meta Ads', 'Google Meu Negócio', 'Conteúdo para redes'],
  },
  {
    number: '02',
    slug: 'crm-automacao',
    title: 'CRM & automação comercial',
    description: 'Estrutura para captar, organizar e acompanhar cada oportunidade sem depender de controles improvisados.',
    services: ['CRM sob medida', 'Automação de CRM', 'Funil de vendas', 'Follow-up automático'],
  },
  {
    number: '03',
    slug: 'agente-sdr-ia',
    title: 'Agentes de IA & atendimento',
    description: 'Agentes conectados à operação para qualificar contatos, apoiar o atendimento e acelerar respostas.',
    services: ['Agente SDR', 'Triagem de leads', 'Atendimento com IA', 'Integrações de canais'],
  },
  {
    number: '04',
    slug: 'dados-integracoes',
    title: 'Dados, e-commerce & integrações',
    description: 'Dados que deixam de ficar espalhados e passam a orientar vendas, estoque, catálogo e performance.',
    services: ['Dashboards', 'Tracking de vendas', 'Shopify & Nuvemshop', 'Bling & marketplaces'],
  },
  {
    number: '05',
    slug: null,
    title: 'Solução digital completa',
    description: 'Uma operação integrada para negócios que precisam evoluir aquisição, vendas e processos ao mesmo tempo.',
    services: ['Site', 'Tráfego', 'CRM', 'Automação'],
  },
];

const process = [
  ['01', 'Entender', 'Negócio, problema, operação e objetivo antes de decidir a tecnologia.'],
  ['02', 'Estruturar', 'Arquitetura, experiência, dados e fluxos que fazem a ideia caber na realidade.'],
  ['03', 'Construir', 'Design e desenvolvimento trabalhando juntos, com espaço para validar cedo.'],
  ['04', 'Validar', 'Testes em diferentes dispositivos e cenários antes de colocar a solução no ar.'],
  ['05', 'Evoluir', 'Quando necessário, o produto continua crescendo com o negócio.'],
];

const questions = [
  ['A W&D desenvolve apenas sites?', 'Não. A mesma base de estratégia, design e engenharia pode resultar em um site, portal, sistema, automação ou produto digital completo.'],
  ['A W&D também cuida da geração de demanda?', 'Sim. Podemos conectar o site a Google Ads, Meta Ads, presença local e rastreamento para transformar a estrutura digital em uma operação de aquisição mensurável.'],
  ['É possível integrar CRM, atendimento e e-commerce?', 'Sim. Criamos fluxos sob medida com CRM, agentes de IA, dashboards, plataformas de e-commerce, ERPs e marketplaces.'],
  ['Como começa um projeto?', 'A primeira etapa é uma conversa para entender o negócio, o problema e o resultado que precisa ser destravado. A solução vem depois do contexto.'],
  ['O que acontece depois do primeiro contato?', 'Organizamos as informações principais, avaliamos o melhor caminho e alinhamos os próximos passos com clareza antes de construir.'],
];

export default function Home() {
  const moraes = projects.find((project) => project.slug === 'moraes-multimarcas');
  const autogestao = projects.find((project) => project.slug === 'autogestao-oficina');
  const supporting = projects.filter((project) => ['ediglebson-silva', 'vi-va-confeitaria'].includes(project.slug));

  return <main className="premium-home">
    <section className="hero premium-hero" data-tracking-section="home_hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Site · Aquisição · CRM · Automação</p>
          <h1>Mais demanda. Menos trabalho manual. <em>Uma operação conectada para crescer.</em></h1>
          <p className="hero__lead">A W&amp;D cria e integra site, mídia, CRM, automações e IA para empresas que não querem perder leads nem operar no improviso.</p>
          <div className="hero__actions">
            <Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'home_hero' })}>Mapear meu gargalo <span>↗</span></Link>
            <Link className="button button--quiet" href="#projetos">Ver soluções em clientes <span>↘</span></Link>
          </div>
        </div>

        <aside className="hero__aside premium-diagnostic">
          <div className="signal-card">
            <div className="signal-card__head"><span>Diagnóstico W&amp;D</span><span className="signal-card__status">01 minuto</span></div>
            <p className="signal-card__question">Qual resultado seu negócio precisa destravar primeiro?</p>
            <div className="signal-flow">
              <Link href={createContactHref('gerar-demanda', { cta: 'diagnostico_rapido' })} className="signal-flow__row"><span>01</span><b>Gerar mais demanda</b><i>↗</i></Link>
              <Link href={createContactHref('organizar-vendas', { cta: 'diagnostico_rapido' })} className="signal-flow__row"><span>02</span><b>Organizar vendas e atendimento</b><i>↗</i></Link>
              <Link href={createContactHref('automatizar', { cta: 'diagnostico_rapido' })} className="signal-flow__row"><span>03</span><b>Escalar com automação</b><i>↗</i></Link>
            </div>
          </div>
        </aside>

        <div className="hero__meta"><span>W&amp;D / Soluções integradas</span><span>Sites · Tráfego · CRM · Automação · IA</span></div>
      </div>
    </section>

    <section className="premium-proof" aria-label="Experiência apresentada pela W&D">
      <div className="container premium-proof__grid">
        <div><span>Portfólio verificável</span><strong>{projects.length} projetos apresentados</strong></div>
        <div><span>Experiência setorial</span><strong>Automotivo, jurídico, alimentação e eventos</strong></div>
        <div><span>Tipos de entrega</span><strong>Sites, portais e sistema em produção</strong></div>
        <div><span>Atendimento</span><strong>São Paulo · foco na Zona Leste</strong></div>
      </div>
    </section>

    <section className="home-section projects-section premium-projects" id="projetos" data-tracking-section="home_cases">
      <div className="container">
        <div className="projects-intro">
          <div className="projects-intro__copy">
            <p className="eyebrow">Prova antes da promessa</p>
            <h2>Trabalho real, apresentado como <em>produto de valor.</em></h2>
            <p>Um portal comercial. Um sistema de gestão. Um site jurídico. A melhor forma de entender nossa capacidade é ver a solução funcionando.</p>
          </div>
          <Link className="text-link" href="/projetos/">Ver todos os projetos <span>↗</span></Link>
        </div>
        <div className="projects-feature"><ProjectPreview project={moraes} featured /></div>
        <div className="projects-grid"><ProjectPreview project={autogestao} /><ProjectPreview project={supporting[0]} /></div>
        <div className="conversion-note"><div><p className="eyebrow">Depois de ver os projetos</p><h3>Agora imagine isso aplicado ao seu negócio.</h3></div><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'apos_cases' })}>Mapear meu gargalo <span>↗</span></Link></div>
      </div>
    </section>

    <section className="premium-intent" aria-label="Objetivos de negócio">
      <div className="container premium-intent__inner">
        <div><p className="eyebrow">Talvez você esteja aqui porque...</p><strong>o problema já ficou grande demais para continuar manual.</strong></div>
        <div className="premium-intent__choices">
          <Link href={createContactHref('gerar-demanda', { cta: 'faixa_intencao' })}><span>01</span><b>Preciso gerar demanda</b><i>↗</i></Link>
          <Link href={createContactHref('organizar-vendas', { cta: 'faixa_intencao' })}><span>02</span><b>Preciso organizar vendas</b><i>↗</i></Link>
          <Link href={createContactHref('automatizar', { cta: 'faixa_intencao' })}><span>03</span><b>Preciso automatizar a operação</b><i>↗</i></Link>
        </div>
      </div>
    </section>

    <section className="statement premium-statement"><div className="container"><p className="eyebrow">A ideia central</p><p className="statement__text">A empresa muda.<br /><span>A capacidade de resolver permanece.</span></p><p className="statement__caption">Da primeira campanha ao CRM, do atendimento ao dashboard: conectamos as partes que fazem o negócio vender e operar melhor.</p></div></section>

    <section className="home-section solutions-section premium-solutions" id="solucoes"><div className="container solutions-layout"><div className="section-heading"><p className="eyebrow">O que fazemos</p><h2>Cinco frentes. Uma operação conectada.</h2><p>Você pode contratar uma entrega específica ou conectar aquisição, vendas, dados e automação em uma solução completa.</p><Link className="text-link" href="/solucoes/">Explorar todas as entregas <span>↗</span></Link></div><div className="solutions-list">{solutions.map(({ number, slug, title, description, services }) => <Link className="solution-row" href={slug ? `/solucoes/${slug}/` : createContactHref('solucao-completa', { cta: 'home_solucoes' })} key={number}><span className="solution-row__number">{number}</span><div><h3>{title}</h3><p>{description}</p><div className="solution-row__tags">{services.map((service) => <span key={service}>{service}</span>)}</div></div><span className="solution-row__arrow">↗</span></Link>)}</div></div></section>

    <section className="home-section automation-section premium-automation" id="ia"><div className="container automation-layout"><div className="automation-copy"><p className="eyebrow">IA &amp; Automação</p><h2>Do lead ao follow-up.<br /><em>Menos trabalho perdido.</em></h2><p>Agentes SDR, CRM, integrações e dashboards podem atuar como uma única camada de operação — qualificando contatos, organizando informações e dando visibilidade ao que acontece.</p><Link className="text-link" href="/ia-automacao/">Explorar essa capacidade <span>↗</span></Link></div><div className="flow-board"><div className="flow-board__top"><span>Workflow / commercial operation</span><span>Connected by design</span></div><div className="flow-track"><div className="flow-node"><b>Aquisição</b><span>Site + mídia</span></div><span className="flow-arrow">→</span><div className="flow-node"><b>Conversão</b><span>CRM + agente</span></div><span className="flow-arrow">→</span><div className="flow-node"><b>Gestão</b><span>Dashboard</span></div></div><div className="flow-board__foot">Google &amp; Meta → Landing page → CRM → Agente SDR → Dashboard</div></div></div></section>

    <section className="home-section process-section premium-process" id="processo"><div className="container process-grid"><div className="process-intro"><p className="eyebrow">Nossa forma de construir</p><h2>O software começa <span>antes do código.</span></h2><p>Uma boa solução nasce de perguntas certas, decisões claras e validações frequentes.</p></div><div className="process-list">{process.map(([number, title, description]) => <div className="process-step" key={number}><span className="process-step__no">{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>

    <section className="premium-faq" aria-labelledby="faq-title"><div className="container premium-faq__layout"><div><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Clareza também faz parte do produto.</h2></div><div className="premium-faq__list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="home-cta premium-cta" data-tracking-section="home_cta_final"><div className="container home-cta__box"><p className="eyebrow">Começar uma conversa</p><h2>Seu negócio não precisa de ferramentas soltas.<br /><span>Precisa de uma operação conectada.</span></h2><p>Conte onde a venda ou a operação está travando. Vamos identificar a combinação certa entre presença, aquisição, CRM, dados e automação.</p><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'home_cta_final' })}>Mapear meu gargalo <span>↗</span></Link></div></section>
  </main>;
}

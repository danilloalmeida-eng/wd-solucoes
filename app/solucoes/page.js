import Link from 'next/link';
import { createContactHref } from '@/lib/conversion.mjs';
import { getProject } from '@/lib/projects';
import { services } from '@/lib/services';

export const metadata = {
  title: 'Soluções digitais integradas',
  description: 'Sites, tráfego pago, CRM, agentes de IA, dashboards, e-commerce e automações conectados à operação do seu negócio.',
  alternates: { canonical: '/solucoes/' },
};

export default function SolutionsPage() {
  const featuredCase = getProject('moraes-multimarcas');

  return (
    <main className="split-page solutions-page">
      <div className="container">
        <div className="split-page__intro solutions-page__intro">
          <div><p className="eyebrow">Soluções</p><p className="back-link">Da aquisição à operação.</p></div>
          <div>
            <h1>As partes certas, trabalhando como <em>uma única operação.</em></h1>
            <p className="split-page__lead">A W&amp;D conecta presença digital, mídia, CRM, dados e automação. Você pode começar por uma necessidade específica ou estruturar a jornada completa.</p>
            <div className="hero__actions"><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'solucoes_hero' })}>Mapear meu gargalo <span>↗</span></Link><Link className="button button--quiet" href={`/projetos/${featuredCase.slug}/`}>Ver um case <span>↘</span></Link></div>
          </div>
        </div>

        <aside className="pillar-proof" aria-label="Projeto relacionado"><div><span>Projeto em produção</span><strong>{featuredCase.title}</strong><p>{featuredCase.results[0]}</p></div><Link href={`/projetos/${featuredCase.slug}/`} data-track-event="view_case" data-case-slug={featuredCase.slug}>Explorar o case <span>↗</span></Link></aside>

        <div className="content-grid services-grid">
          {services.map((service, index) => (
            <article className="feature-panel service-panel" key={service.slug}>
              <span className="feature-panel__no">{String(index + 1).padStart(2, '0')}</span>
              <h2>{service.eyebrow}</h2>
              <p>{service.description}</p>
              <ul className="service-panel__list">{service.deliverables.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="service-panel__link" href={`/solucoes/${service.slug}/`}>Conhecer esta solução <span>↗</span></Link>
            </article>
          ))}
        </div>

        <section className="integrated-offer">
          <div><p className="eyebrow">Operação completa</p><h2>Site + tráfego + CRM + automação.</h2></div>
          <div><p>Quando o problema atravessa várias áreas, desenhamos uma solução integrada com uma estratégia, uma arquitetura e indicadores comuns.</p><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'solucoes_integrada' })}>Mapear meu gargalo <span>↗</span></Link></div>
        </section>
      </div>
    </main>
  );
}

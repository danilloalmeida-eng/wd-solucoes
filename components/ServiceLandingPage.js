import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';
import { createContactHref } from '@/lib/conversion.mjs';
import { getProject } from '@/lib/projects';

const process = [
  ['01', 'Entender', 'Contexto, objetivo, restrições e como a operação funciona hoje.'],
  ['02', 'Desenhar', 'Escopo, experiência, integrações e critérios que permitem validar a entrega.'],
  ['03', 'Construir e validar', 'Implementação acompanhada de testes e decisões visíveis antes da publicação.'],
  ['04', 'Entregar e evoluir', 'Publicação, documentação e próximos passos definidos conforme a realidade do projeto.'],
];

export default function ServiceLandingPage({ service }) {
  const relatedCase = getProject(service.caseSlug);
  const contactHref = createContactHref(service.intent, { cta: `landing_${service.slug}`, caseSlug: relatedCase?.slug });

  return (
    <main className="service-landing">
      <section className="service-landing__hero" data-tracking-section={`service_${service.slug}_hero`}>
        <div className="container service-landing__hero-grid">
          <div className="service-landing__copy">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="hero__actions">
              <Link className="button button--primary" href={contactHref}>Conversar sobre esta solução <span aria-hidden="true">↗</span></Link>
              {relatedCase && <Link className="button button--quiet" href={`/projetos/${relatedCase.slug}/`}>Ver case relacionado <span aria-hidden="true">↘</span></Link>}
            </div>
          </div>
          {relatedCase && <div className="service-landing__proof"><span>Projeto relacionado</span><ProjectPreview project={relatedCase} featured /></div>}
        </div>
      </section>

      <section className="service-landing__section service-landing__fit">
        <div className="container service-landing__two-columns">
          <div><p className="eyebrow">Quando faz sentido</p><h2>Uma entrega desenhada para o problema certo.</h2></div>
          <ul className="service-checklist">{service.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-landing__section service-landing__deliverables">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">O que pode compor o projeto</p><h2>Estratégia, execução e operação no mesmo escopo.</h2></div>
          <div className="service-cards">{service.deliverables.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div>
        </div>
      </section>

      <section className="service-landing__section service-landing__outcomes">
        <div className="container service-landing__two-columns">
          <div><p className="eyebrow">Resultado esperado</p><h2>Avanços que podem ser conferidos na entrega.</h2><p>Os indicadores quantitativos dependem da linha de base, do uso e dos dados disponíveis. Por isso, não prometemos números sem evidência.</p></div>
          <ul className="service-checklist">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-landing__section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Como trabalhamos</p><h2>Clareza antes da complexidade.</h2></div>
          <div className="service-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="service-landing__faq">
        <div className="container service-landing__two-columns">
          <div><p className="eyebrow">Antes de avançar</p><h2>Escopo e investimento vêm depois do diagnóstico.</h2></div>
          <div>
            <details><summary>Como começa?</summary><p>Com uma conversa para entender o contexto, o gargalo prioritário e o que já existe. Só então propomos um caminho.</p></details>
            <details><summary>Existe um pacote fechado?</summary><p>Não por padrão. A combinação de entregas muda conforme objetivo, integrações, conteúdo e maturidade da operação.</p></details>
            <details><summary>Como prazo e investimento são definidos?</summary><p>Depois de esclarecer escopo, dependências e critérios de aceite. Assim a proposta reflete o trabalho real.</p></details>
          </div>
        </div>
      </section>

      <section className="service-landing__cta" data-tracking-section={`service_${service.slug}_final`}>
        <div className="container"><p className="eyebrow">Próximo passo</p><h2>Vamos entender se esta é a solução certa para o seu gargalo.</h2><Link className="button button--light" href={contactHref}>Mapear meu contexto <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}

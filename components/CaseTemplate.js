import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';

export default function CaseTemplate({ project, nextProject }) {
  const caseScreens = [
    project.screenshot && { src: project.screenshot, alt: project.screenshotAlt },
    project.additionalScreenshot && { src: project.additionalScreenshot, alt: project.additionalScreenshotAlt },
  ].filter(Boolean);

  return (
    <main>
      <section className={`case-hero case-hero--${project.accent}`}>
        <div className="container case-hero__grid">
          <div>
            <Link href="/projetos/" className="back-link">← Todos os projetos</Link>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__lead">{project.description}</p>
            {project.url && <a className="button button--quiet" href={project.url} target="_blank" rel="noreferrer">Visitar projeto <span aria-hidden="true">↗</span></a>}
          </div>
          <ProjectPreview project={project} featured />
        </div>
      </section>

      <section className="case-narrative container">
        <div className="case-narrative__label">Contexto</div>
        <div><p className="eyebrow">O desafio</p><h2>Uma solução nasce da operação real.</h2><p>{project.challenge}</p></div>
        <div><p className="eyebrow">O que construímos</p><h2>{project.type}</h2><p>{project.solution}</p></div>
      </section>

      <section className="case-features container">
        <div><p className="eyebrow">Recursos confirmados</p><h2>Construído para resolver uma realidade específica.</h2></div>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}<span>↗</span></li>)}</ul>
      </section>

      <section className="case-screens container">
        <div className="section-heading"><p className="eyebrow">Experiência</p><h2>Telas que dão forma ao produto.</h2></div>
        {caseScreens.length ? (
          <div className={`case-screens__grid ${caseScreens.length > 1 ? 'case-screens__grid--gallery' : ''}`}>
            {caseScreens.map((screen) => <img key={screen.src} src={screen.src} alt={screen.alt} />)}
            {project.mobileScreenshot && <img src={project.mobileScreenshot} alt={`Versão mobile de ${project.title}`} />}
          </div>
        ) : (
          <div className="case-pending"><span>Capturas reais pendentes</span><p>{project.note}</p></div>
        )}
      </section>

      <section className="case-cta"><div className="container"><p className="eyebrow">O próximo projeto</p><h2>O seu negócio tem uma operação. A tecnologia certa pode dar escala a ela.</h2><Link href="/contato/" className="button button--light">Solicitar diagnóstico <span aria-hidden="true">↗</span></Link></div></section>

      {nextProject && <section className="container next-project"><p className="eyebrow">Continue explorando</p><ProjectPreview project={nextProject} /></section>}
    </main>
  );
}

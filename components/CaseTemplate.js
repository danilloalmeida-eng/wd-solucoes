import Link from 'next/link';
import Image from 'next/image';
import ProjectPreview from '@/components/ProjectPreview';
import { createContactHref } from '@/lib/conversion.mjs';

export default function CaseTemplate({ project, nextProject }) {
  const caseScreens = [
    project.screenshot && { src: project.screenshot, alt: project.screenshotAlt, width: project.screenshotWidth, height: project.screenshotHeight },
    project.additionalScreenshot && { src: project.additionalScreenshot, alt: project.additionalScreenshotAlt, width: project.additionalScreenshotWidth, height: project.additionalScreenshotHeight },
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
            {project.url && <a className="button button--quiet" href={project.url} target="_blank" rel="noreferrer" data-placement="case_hero">Visitar projeto <span aria-hidden="true">↗</span></a>}
          </div>
          <ProjectPreview project={project} featured />
        </div>
      </section>

      <section className="case-narrative container">
        <div className="case-narrative__label">Contexto</div>
        <div><p className="eyebrow">O desafio</p><h2>Uma solução nasce da operação real.</h2><p>{project.challenge}</p>{project.clientProfile && <p className="case-client-profile"><strong>Perfil atendido:</strong> {project.clientProfile}</p>}</div>
        <div><p className="eyebrow">O que construímos</p><h2>{project.type}</h2><p>{project.solution}</p></div>
      </section>

      {project.results?.length > 0 && (
        <section className="case-results container">
          <div><p className="eyebrow">Resultado verificável</p><h2>O que passou a existir com a entrega.</h2></div>
          <ul>{project.results.map((result) => <li key={result}><span aria-hidden="true">✓</span>{result}</li>)}</ul>
        </section>
      )}

      <section className="case-features container">
        <div><p className="eyebrow">Recursos confirmados</p><h2>Construído para resolver uma realidade específica.</h2></div>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}<span>↗</span></li>)}</ul>
      </section>

      <section className="case-screens container">
        <div className="section-heading"><p className="eyebrow">Experiência</p><h2>Telas que dão forma ao produto.</h2></div>
        {caseScreens.length ? (
          <div className={`case-screens__grid ${caseScreens.length > 1 ? 'case-screens__grid--gallery' : ''}`}>
            {caseScreens.map((screen) => <Image key={screen.src} src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} sizes="(max-width: 800px) 100vw, 70vw" />)}
            {project.mobileScreenshot && <Image src={project.mobileScreenshot} alt={`Versão mobile de ${project.title}`} width={project.mobileScreenshotWidth} height={project.mobileScreenshotHeight} sizes="(max-width: 800px) 70vw, 28vw" />}
          </div>
        ) : (
          <div className="case-pending"><span>Capturas reais pendentes</span><p>{project.note}</p></div>
        )}
      </section>

      <section className="case-cta" data-tracking-section="case_cta"><div className="container"><p className="eyebrow">O próximo projeto</p><h2>O seu negócio tem uma operação. A tecnologia certa pode dar escala a ela.</h2><Link href={createContactHref(project.intent, { cta: 'case_final', caseSlug: project.slug })} className="button button--light">Mapear meu gargalo <span aria-hidden="true">↗</span></Link></div></section>

      {nextProject && <section className="container next-project"><p className="eyebrow">Continue explorando</p><ProjectPreview project={nextProject} /></section>}
    </main>
  );
}

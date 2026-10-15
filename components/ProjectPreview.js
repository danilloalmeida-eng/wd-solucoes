import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPreview({ project, featured = false }) {
  return (
    <article className={`project-preview project-preview--${project.accent} ${featured ? 'project-preview--featured' : ''}`}>
      <div className="project-preview__visual">
        <div className="browser-frame">
          <div className="browser-frame__top"><i /><i /><i /><span>projeto em produção</span></div>
          {project.screenshot ? (
            <Image src={project.screenshot} alt={project.screenshotAlt} width={project.screenshotWidth} height={project.screenshotHeight} sizes={featured ? '(max-width: 800px) 92vw, 1100px' : '(max-width: 800px) 92vw, 560px'} loading={featured ? 'eager' : 'lazy'} />
          ) : (
            <div className="product-placeholder">
              <span className="product-placeholder__label">Produto protegido</span>
              <strong>Capturas internas<br />em preparação.</strong>
              <p>Funcionalidades confirmadas no código do produto.</p>
              <div className="product-placeholder__bars"><b /><b /><b /></div>
            </div>
          )}
        </div>
        {project.mobileScreenshot && <Image className="phone-shot" src={project.mobileScreenshot} alt={`Versão mobile: ${project.title}`} width={project.mobileScreenshotWidth} height={project.mobileScreenshotHeight} sizes="140px" loading="lazy" />}
      </div>
      <div className="project-preview__body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.results?.[0] && <p className="project-preview__result"><span>Resultado entregue</span>{project.results[0]}</p>}
        <Link href={`/projetos/${project.slug}/`} className="text-link" data-track-event="view_case" data-case-slug={project.slug}>Ver case <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

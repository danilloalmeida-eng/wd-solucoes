import Link from 'next/link';

export default function ProjectPreview({ project, featured = false }) {
  return (
    <article className={`project-preview project-preview--${project.accent} ${featured ? 'project-preview--featured' : ''}`}>
      <div className="project-preview__visual">
        <div className="browser-frame">
          <div className="browser-frame__top"><i /><i /><i /><span>projeto em produção</span></div>
          {project.screenshot ? (
            <img src={project.screenshot} alt={project.screenshotAlt} loading={featured ? 'eager' : 'lazy'} />
          ) : (
            <div className="product-placeholder">
              <span className="product-placeholder__label">Produto protegido</span>
              <strong>Capturas internas<br />em preparação.</strong>
              <p>Funcionalidades confirmadas no código do produto.</p>
              <div className="product-placeholder__bars"><b /><b /><b /></div>
            </div>
          )}
        </div>
        {project.mobileScreenshot && <img className="phone-shot" src={project.mobileScreenshot} alt={`Versão mobile: ${project.title}`} loading="lazy" />}
      </div>
      <div className="project-preview__body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link href={`/projetos/${project.slug}/`} className="text-link">Ver case <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

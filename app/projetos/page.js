import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/lib/projects';

export const metadata = { title: 'Projetos', description: 'Cases reais de sites, sistemas, portais e produtos digitais construídos pela W&D.', alternates: { canonical: '/projetos/' } };

export default function ProjectsPage() {
  return <main><section className="page-hero"><div className="container"><p className="eyebrow">Portfólio / prova de capacidade</p><h1>Projetos que<br /><em>saíram do papel.</em></h1><p className="page-hero__lead">Negócios diferentes. Problemas diferentes. Soluções construídas para cada realidade — da operação interna à presença digital.</p></div></section><section className="container projects-page-grid">{projects.map((project) => <ProjectPreview key={project.slug} project={project} featured={project.slug === 'moraes-multimarcas'} />)}</section></main>;
}

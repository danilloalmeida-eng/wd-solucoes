import { notFound } from 'next/navigation';
import CaseTemplate from '@/components/CaseTemplate';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/projetos/${project.slug}/` }, openGraph: { title: `${project.title} — Case W&D`, description: project.description, images: [{ url: project.screenshot || '/og-wd.svg', alt: project.screenshotAlt }] } };
}

export default async function ProjectCasePage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return <CaseTemplate project={project} nextProject={nextProject} />;
}

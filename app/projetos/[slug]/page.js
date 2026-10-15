import { notFound } from 'next/navigation';
import CaseTemplate from '@/components/CaseTemplate';
import { getProject, projects } from '@/lib/projects';
import { siteConfig } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/projetos/${project.slug}/` }, openGraph: { title: `${project.title} — Case W&D`, description: project.description, url: `/projetos/${project.slug}/`, images: [{ url: `/og/case-${project.slug}.png`, width: 1200, height: 630, alt: `${project.title} — Case W&D` }] } };
}

export default async function ProjectCasePage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const jsonLd = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, description: project.description, url: `${siteConfig.url}/projetos/${project.slug}/`, creator: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url }, about: project.type };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><CaseTemplate project={project} nextProject={nextProject} /></>;
}

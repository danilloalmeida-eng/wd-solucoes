import { projects } from '@/lib/projects';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://wedsolucoes.com.br';
  const staticRoutes = ['', '/projetos', '/solucoes', '/ia-automacao', '/processo', '/sobre', '/contato'];
  return [...staticRoutes.map((route) => ({ url: `${base}${route}/`, lastModified: new Date() })), ...projects.map((project) => ({ url: `${base}/projetos/${project.slug}/`, lastModified: new Date() }))];
}

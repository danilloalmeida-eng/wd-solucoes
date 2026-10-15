import { projects } from '@/lib/projects';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = siteConfig.url;
  const lastModified = new Date(siteConfig.lastContentUpdate);
  const staticRoutes = ['', '/projetos', '/solucoes', '/ia-automacao', '/processo', '/sobre', '/contato', '/privacidade'];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}/`, lastModified })),
    ...services.map((service) => ({ url: `${base}/solucoes/${service.slug}/`, lastModified })),
    ...projects.map((project) => ({ url: `${base}/projetos/${project.slug}/`, lastModified })),
  ];
}

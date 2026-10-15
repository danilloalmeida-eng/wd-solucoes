import { notFound } from 'next/navigation';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { getService, services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/solucoes/${service.slug}/` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/solucoes/${service.slug}/`,
      images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: `${service.eyebrow} — W&D` }],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.seoTitle,
    description: service.seoDescription,
    url: `${siteConfig.url}/solucoes/${service.slug}/`,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: siteConfig.serviceArea,
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><ServiceLandingPage service={service} /></>;
}

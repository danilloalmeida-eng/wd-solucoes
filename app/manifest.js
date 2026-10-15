import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: 'Site, aquisição, CRM, automações e IA conectados para gerar demanda e organizar a operação.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080b10',
    theme_color: '#080b10',
    lang: siteConfig.locale,
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}

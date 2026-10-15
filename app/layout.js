import './globals.css';
import './service-pages.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import ConversionAnalytics from '@/components/ConversionAnalytics';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'W&D — Engenharia digital para negócios reais', template: '%s | W&D' },
  description: 'Site, aquisição, CRM, automações e IA conectados para gerar demanda, organizar vendas e reduzir trabalho manual.',
  keywords: ['sites premium', 'Google Ads', 'Meta Ads', 'gestão de tráfego', 'CRM sob medida', 'agente SDR', 'automação comercial', 'dashboards', 'integração de e-commerce', 'inteligência artificial', 'W&D'],
  openGraph: { type: 'website', locale: 'pt_BR', siteName: siteConfig.name, url: '/', images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'W&D — Engenharia digital para negócios reais' }] },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image.png'] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#080b10', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    telephone: `+${siteConfig.phoneE164}`,
    areaServed: siteConfig.serviceArea,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  };

  return <html lang="pt-BR"><body><a className="skip-link" href="#main-content">Pular para o conteúdo</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><Navbar /><div id="main-content" tabIndex={-1}>{children}</div><Footer /><WhatsAppFab /><ConversionAnalytics /></body></html>;
}

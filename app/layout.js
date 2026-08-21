import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export const metadata = {
  metadataBase: new URL('https://wedsolucoes.com.br'),
  title: { default: 'W&D — Engenharia digital para negócios reais', template: '%s | W&D' },
  description: 'Sites premium, tráfego pago, CRM, sistemas, agentes de IA, dashboards e automação aplicados à realidade de cada negócio.',
  keywords: ['sites premium', 'Google Ads', 'Meta Ads', 'gestão de tráfego', 'CRM sob medida', 'agente SDR', 'automação comercial', 'dashboards', 'integração de e-commerce', 'inteligência artificial', 'W&D'],
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'W&D Soluções Integradas', url: '/', images: [{ url: '/og-wd.svg', width: 1200, height: 630, alt: 'W&D — Engenharia digital para negócios reais' }] },
  twitter: { card: 'summary_large_image', images: ['/og-wd.svg'] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#080b10', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body><Navbar />{children}<Footer /><WhatsAppFab /></body></html>;
}

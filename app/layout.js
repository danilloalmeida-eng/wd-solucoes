import './globals.css';
import WhatsAppFab from '@/components/WhatsAppFab';

export const metadata = {
  title: {
    default: 'W&D Soluções Integradas — Tecnologia, Automotivo e Frotas',
    template: '%s | W&D Soluções Integradas',
  },
  description: 'Um ecossistema de soluções integradas: Tecnologia & Marketing, Centro Automotivo e Locação de Frotas corporativas. Zona Leste de São Paulo.',
  keywords: ['tecnologia empresarial', 'centro automotivo', 'locação de frotas', 'gestão de frotas SP', 'W&D Soluções'],
  authors: [{ name: 'W&D Soluções Integradas' }],
  openGraph: {
    title: 'W&D Soluções Integradas',
    description: 'Ecossistema de soluções corporativas integradas: Tecnologia, Automotivo e Frotas.',
    url: 'https://wedsolucoes.com.br',
    siteName: 'W&D Soluções Integradas',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}

import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Solicitar diagnóstico', description: 'Conte à W&D onde sua aquisição, suas vendas ou sua operação precisam avançar.', alternates: { canonical: '/contato/' } };

export default function ContactPage() {
  return <main className="contact-page"><div className="container contact-layout"><div className="contact-page__copy"><p className="eyebrow">Solicitar diagnóstico</p><h1>Seu próximo avanço começa com uma <span>boa conversa.</span></h1><p>Conte onde o negócio está travando: geração de demanda, vendas, atendimento, dados ou operação. A primeira etapa é entender o problema e identificar a combinação certa de serviços.</p><div className="contact-details"><a href="https://wa.me/5511981527208?text=Olá!%20Quero%20solicitar%20um%20diagnóstico%20sobre%20um%20projeto%20digital." target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="tel:+5511981527208">(11) 98152-7208</a><span style={{ color: 'var(--subtle)', fontSize: '.8rem' }}>São Paulo, SP · atendimento digital</span></div></div><ContactForm /></div></main>;
}

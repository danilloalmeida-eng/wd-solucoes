import ContactForm from '@/components/ContactForm';
import { createDirectWhatsAppUrl, siteConfig } from '@/lib/site-config';

export const metadata = { title: 'Mapear um gargalo comercial ou operacional', description: 'Conte à W&D onde sua aquisição, suas vendas ou sua operação precisam avançar.', alternates: { canonical: '/contato/' } };

const nextSteps = [
  ['01', 'Você envia o contexto', 'Objetivo, cenário atual e o principal ponto que precisa avançar.'],
  ['02', 'Nós avaliamos o caminho', 'Organizamos as informações e identificamos quais perguntas precisam ser respondidas.'],
  ['03', 'Alinhamos o próximo passo', 'Se houver aderência, combinamos conversa, diagnóstico ou proposta conforme o escopo.'],
];

export default function ContactPage() {
  return <main className="contact-page" data-tracking-section="contato"><div className="container contact-layout"><div className="contact-page__copy"><p className="eyebrow">Mapear um gargalo</p><h1>Seu próximo avanço começa com uma <span>boa conversa.</span></h1><p>Conte onde o negócio está travando: geração de demanda, vendas, atendimento, dados ou operação. Vamos usar esse contexto para identificar o primeiro passo mais útil.</p><div className="contact-details"><a href={createDirectWhatsAppUrl('Olá! Quero mapear um gargalo comercial ou operacional.')} target="_blank" rel="noreferrer" data-placement="contact_direct">WhatsApp ↗</a><a href={siteConfig.phoneHref} data-placement="contact_direct">{siteConfig.phoneDisplay}</a><span>{siteConfig.location} · atendimento digital</span><span>Prazo de retorno: até 2 horas</span></div><div className="contact-next"><p className="eyebrow">O que acontece depois</p>{nextSteps.map(([number, title, text]) => <div key={number}><span>{number}</span><p><strong>{title}</strong>{text}</p></div>)}</div></div><ContactForm /></div></main>;
}

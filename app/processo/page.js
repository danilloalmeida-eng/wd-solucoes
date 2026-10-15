import Link from 'next/link';
import { createContactHref } from '@/lib/conversion.mjs';

export const metadata = { title: 'Processo', description: 'A forma como a W&D entende, estrutura, constrói, valida e evolui soluções digitais.', alternates: { canonical: '/processo/' } };

const steps = [
  ['01', 'Entender', 'Negócio, problema, operação e objetivo antes de escolher a solução.', 'Mapa de contexto e prioridade'],
  ['02', 'Estruturar', 'Arquitetura, experiência, dados e fluxo em uma base que aguenta crescer.', 'Escopo, jornada e critérios de aceite'],
  ['03', 'Construir', 'Design e desenvolvimento trabalhando juntos, com entregas que podem ser vistas e discutidas.', 'Versões demonstráveis da solução'],
  ['04', 'Validar', 'Testar em diferentes dispositivos e cenários para encontrar o que precisa ser refinado.', 'Registro de testes e ajustes'],
  ['05', 'Colocar no ar', 'Publicação, domínio e configuração com uma experiência pronta para receber pessoas reais.', 'Entrega publicada e documentada'],
  ['06', 'Evoluir', 'Quando o negócio muda, a solução pode continuar acompanhando.', 'Backlog orientado por uso e dados'],
];

export default function ProcessPage() { return <main className="split-page"><div className="container"><div className="split-page__intro"><div><p className="eyebrow">Nossa forma de construir</p><p className="back-link">O software começa antes do código.</p></div><div><h1>Clareza primeiro.<br /><em>Complexidade no lugar certo.</em></h1><p className="split-page__lead">Cada etapa existe para diminuir incerteza: sobre o negócio, sobre a experiência, sobre o produto e sobre o próximo passo. Prazo e cadência são definidos depois de conhecermos o escopo e suas dependências.</p><div className="hero__actions"><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'processo_hero' })}>Começar pelo problema <span>↗</span></Link><Link className="button button--quiet" href="/projetos/">Ver entregas reais <span>↘</span></Link></div></div></div><div className="method-list method-list--deliverables">{steps.map(([number, title, text, deliverable]) => <div className="method-row" key={number}><strong>{number}</strong><h2>{title}</h2><div><p>{text}</p><span>Entrega: {deliverable}</span></div></div>)}</div><div style={{ marginTop: '3rem' }}><Link className="button button--primary" href={createContactHref('solucao-completa', { cta: 'processo_final' })}>Mapear meu contexto <span>↗</span></Link></div></div></main>; }

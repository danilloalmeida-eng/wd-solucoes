import Link from 'next/link';
import { createContactHref } from '@/lib/conversion.mjs';

export const metadata = { title: 'Sobre a W&D', description: 'A W&D desenvolve soluções digitais partindo primeiro do negócio e depois da tecnologia.', alternates: { canonical: '/sobre/' } };

const principles = [
  ['Problema antes da ferramenta', 'A tecnologia é escolhida depois de entender o objetivo, a operação e as restrições.'],
  ['Evidência antes da promessa', 'Os cases mostram o que foi construído; números de resultado só entram quando podem ser comprovados.'],
  ['Decisões visíveis', 'Escopo, critérios e dependências são apresentados para que o projeto possa ser acompanhado.'],
  ['Entrega conectada', 'Design, engenharia, aquisição e automação são tratados como partes da mesma jornada quando necessário.'],
];

export default function AboutPage() {
  return <main><section className="about-manifesto"><div className="container"><p className="eyebrow">Sobre a W&amp;D</p><h1>O problema vem primeiro.<br /><span>A tecnologia vem depois.</span></h1><div className="about-copy"><p>A W&amp;D é um estúdio de engenharia digital. Desenvolve sites, sistemas, automações e experiências digitais a partir da realidade de cada negócio.</p><p>A análise parte de como a empresa trabalha, onde existem gargalos, como clientes chegam, como informações circulam e o que pode ser digitalizado. O objetivo não é simplesmente entregar páginas.</p></div></div></section><section className="about-principles"><div className="container"><div className="section-heading"><p className="eyebrow">Como trabalhamos</p><h2>Critérios que orientam cada projeto.</h2></div><div className="about-principles__grid">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="home-section"><div className="container split-page__intro about-capability"><div><p className="eyebrow">O que permanece</p></div><div><h2>O segmento muda.<br /><em>A capacidade permanece.</em></h2><p className="split-page__lead">Oficinas, comércio automotivo, advocacia, alimentação e festas aparecem nos cases por um motivo: mostram que uma boa solução não depende de um único mercado.</p><div className="hero__actions"><Link className="button button--primary" href="/projetos/">Explorar projetos <span>↗</span></Link><Link className="button button--quiet" href={createContactHref('solucao-completa', { cta: 'sobre_final' })}>Falar sobre um desafio <span>↗</span></Link></div></div></div></section></main>;
}

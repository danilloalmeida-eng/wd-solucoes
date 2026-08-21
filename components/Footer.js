import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}><div className={`container ${styles.grid}`}><div><Link href="/" className={styles.brand}>W<span>&amp;</span>D</Link><p>Engenharia digital para negócios que querem operar, vender e crescer com mais clareza.</p></div><div><p className={styles.label}>Navegação</p><Link href="/projetos/">Projetos</Link><Link href="/solucoes/">Soluções</Link><Link href="/ia-automacao/">IA & Automação</Link></div><div><p className={styles.label}>Contato</p><Link href="/contato/">Solicitar diagnóstico</Link><a href="https://wa.me/5511981527208?text=Olá!%20Quero%20conversar%20sobre%20um%20projeto%20digital." target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="tel:+5511981527208">(11) 98152-7208</a></div></div><div className={`container ${styles.bottom}`}><span>© {new Date().getFullYear()} W&D Soluções Integradas.</span><span>Construído para negócios reais.</span></div></footer>;
}

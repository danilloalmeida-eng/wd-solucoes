import Link from 'next/link';
import { createContactHref } from '@/lib/conversion.mjs';
import { createDirectWhatsAppUrl, siteConfig } from '@/lib/site-config';
import styles from './Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}><div className={`container ${styles.grid}`}><div><Link href="/" className={styles.brand}>W<span>&amp;</span>D</Link><p>Engenharia digital para negócios que querem operar, vender e crescer com mais clareza.</p></div><div><p className={styles.label}>Navegação</p><Link href="/projetos/">Projetos</Link><Link href="/solucoes/">Soluções</Link><Link href="/ia-automacao/">IA & Automação</Link></div><div><p className={styles.label}>Contato</p><Link href={createContactHref('solucao-completa', { cta: 'footer' })}>Mapear meu gargalo</Link><a href={createDirectWhatsAppUrl('Olá! Quero conversar sobre um projeto digital.')} target="_blank" rel="noreferrer" data-placement="footer">WhatsApp ↗</a><a href={siteConfig.phoneHref} data-placement="footer">{siteConfig.phoneDisplay}</a><Link href="/privacidade/">Privacidade</Link></div></div><div className={`container ${styles.bottom}`}><span>© {new Date().getFullYear()} {siteConfig.name}.</span><span>Construído para negócios reais.</span></div></footer>;
}

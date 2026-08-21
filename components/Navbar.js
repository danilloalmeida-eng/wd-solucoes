'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '/projetos/', label: 'Projetos' },
  { href: '/solucoes/', label: 'Soluções' },
  { href: '/ia-automacao/', label: 'IA & Automação' },
  { href: '/processo/', label: 'Processo' },
  { href: '/sobre/', label: 'Sobre' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="W&D — página inicial">W<span>&amp;</span>D<i>®</i></Link>
        <nav id="site-navigation" className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}
          <Link href="/contato/" className={styles.mobileCta} onClick={closeMenu}>Solicitar diagnóstico <span>↗</span></Link>
        </nav>
        <Link href="/contato/" className={styles.cta}>Solicitar diagnóstico <span>↗</span></Link>
        <button className={styles.menu} type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
    </header>
  );
}

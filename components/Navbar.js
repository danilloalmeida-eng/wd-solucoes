'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createContactHref } from '@/lib/conversion.mjs';
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
  const menuButtonRef = useRef(null);
  const closeMenu = () => setOpen(false);
  const contactHref = createContactHref('solucao-completa', { cta: 'navbar' });

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="W&D — página inicial">W<span>&amp;</span>D<i>®</i></Link>
        <nav id="site-navigation" className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}
          <Link href={contactHref} className={styles.mobileCta} onClick={closeMenu}>Mapear meu gargalo <span>↗</span></Link>
        </nav>
        <Link href={contactHref} className={styles.cta}>Mapear meu gargalo <span>↗</span></Link>
        <button ref={menuButtonRef} className={styles.menu} type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
    </header>
  );
}

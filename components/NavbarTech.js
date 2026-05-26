'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './NavbarTech.module.css';

export default function NavbarTech() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo / Back */}
        <Link href="/" className={styles.brand}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.backIcon}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className={styles.brandMark}>W&amp;D</span>
          <span className={styles.divider}>/</span>
          <span className={styles.vertical}>Tecnologia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.links}>
          <a href="#servicos">Serviços</a>
          <a href="#diferencial">Diferencial</a>
          <a href="/sobre">Sobre</a>
        </nav>

        <a
          href="https://wa.me/5511981527208?text=Olá!%20Tenho%20interesse%20em%20Agendar%20uma%20Consultoria%20Estratégica."
          target="_blank"
          rel="noopener"
          className={styles.cta}
        >
          Agendar Consultoria
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobile}>
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#diferencial" onClick={() => setOpen(false)}>Diferencial</a>
          <a href="/sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="/contato" onClick={() => setOpen(false)}>Contato</a>
          <a
            href="https://wa.me/5511981527208"
            target="_blank"
            rel="noopener"
            className={styles.mobileCta}
          >
            Agendar Consultoria
          </a>
        </div>
      )}
    </header>
  );
}

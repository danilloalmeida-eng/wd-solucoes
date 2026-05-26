'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './NavbarPortal.module.css';

export default function NavbarPortal() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>W&amp;D</span>
          <span className={styles.brandName}>Soluções Integradas</span>
        </Link>

        <nav className={styles.links}>
          <Link href="/tecnologia">Tecnologia</Link>
          <Link href="/automotivo">Automotivo</Link>
          <Link href="/frotas">Frotas</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <a
          href="https://wa.me/5511981527208"
          target="_blank"
          rel="noopener"
          className={styles.cta}
        >
          (11) 98152-7208
        </a>

        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          <Link href="/" onClick={() => setOpen(false)}>← Portal</Link>
          <Link href="/tecnologia" onClick={() => setOpen(false)}>Tecnologia</Link>
          <Link href="/automotivo" onClick={() => setOpen(false)}>Automotivo</Link>
          <Link href="/frotas" onClick={() => setOpen(false)}>Frotas</Link>
          <Link href="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link href="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
}

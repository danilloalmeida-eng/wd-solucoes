import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>W&amp;D</Link>
          <p>Soluções Integradas</p>
          <p className={styles.address}>
            Rua Rui Pirozzelli, 119 — Jardim Belém<br />
            São Paulo - SP · CEP 03811-020
          </p>
          <p className={styles.hours}>Seg–Sex 8h–18h · Sáb 8h–13h</p>
          <a href="https://wa.me/5511981527208" target="_blank" rel="noopener" className={styles.phone}>
            (11) 98152-7208
          </a>
        </div>

        <div className={styles.nav}>
          <div className={styles.col}>
            <span className={styles.colTitle}>Verticais</span>
            <Link href="/tecnologia">Tecnologia &amp; Marketing</Link>
            <Link href="/automotivo">Centro Automotivo</Link>
            <Link href="/frotas">Locação de Frotas</Link>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>Empresa</span>
            <Link href="/sobre">Sobre Nós</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© 2025 W&amp;D Soluções Integradas. Todos os direitos reservados.</p>
          <div className={styles.verticalLinks}>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/automotivo">Automotivo</Link>
            <Link href="/frotas">Frotas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

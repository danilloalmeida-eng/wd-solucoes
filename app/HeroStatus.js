'use client';

import styles from './page.module.css';

export default function HeroStatus() {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.stackedCards}>

        {/* Card: Frotas (fundo, mais rotacionado) */}
        <div className={`${styles.stackCard} ${styles.stackCard3}`}>
          <div className={styles.stackCardIcon} style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" rx="2"></rect>
              <path d="M16 8h4l3 3v5h-7V8z"></path>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div>
            <div className={styles.stackCardLabel}>Vertical C</div>
            <div className={styles.stackCardTitle}>Locação de Frotas</div>
          </div>
          <div className={styles.stackCardBadge} style={{ color: '#10B981', background: 'rgba(16,185,129,0.12)' }}>B2B</div>
        </div>

        {/* Card: Automotivo (meio) */}
        <div className={`${styles.stackCard} ${styles.stackCard2}`}>
          <div className={styles.stackCardIcon} style={{ background: 'rgba(46,134,171,0.15)', color: '#2E86AB' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
            </svg>
          </div>
          <div>
            <div className={styles.stackCardLabel}>Vertical A</div>
            <div className={styles.stackCardTitle}>Centro Automotivo</div>
          </div>
          <div className={styles.stackCardBadge} style={{ color: '#2E86AB', background: 'rgba(46,134,171,0.12)' }}>+30 anos</div>
        </div>

        {/* Card: Tecnologia (frente, no topo) */}
        <div className={`${styles.stackCard} ${styles.stackCard1}`}>
          <div className={styles.stackCardIcon} style={{ background: 'rgba(59,130,246,0.15)', color: '#3B82F6' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div>
            <div className={styles.stackCardLabel}>Vertical B</div>
            <div className={styles.stackCardTitle}>Tecnologia e Marketing</div>
          </div>
          <div className={styles.stackCardBadge} style={{ color: '#3B82F6', background: 'rgba(59,130,246,0.12)' }}>SaaS & IA</div>
        </div>

      </div>
    </div>
  );
}

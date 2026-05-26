import Link from 'next/link';
import styles from './page.module.css';
import HeroStatus from './HeroStatus';


export const metadata = {
  title: 'W&D Soluções Integradas — Portal Corporativo',
  description: 'Um ecossistema de soluções integradas desenhado para impulsionar o seu negócio. Tecnologia & Marketing, Centro Automotivo e Locação de Frotas.',
};

export default function PortalHome() {
  return (
    <main className={styles.portal}>

      {/* ===== HEADER EXECUTIVO ===== */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>W&amp;D</span>
            <div className={styles.logoInfo}>
              <span className={styles.logoName}>Soluções Integradas</span>
              <span className={styles.logoTagline}>Ecossistema Corporativo</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <Link href="/sobre" className={styles.headerLink}>Sobre</Link>
            <Link href="/contato" className={styles.headerLink}>Contato</Link>
            <a
              href="https://wa.me/5511981527208"
              target="_blank"
              rel="noopener"
              className={styles.headerCta}
            >
              (11) 98152-7208
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO (SPLIT LAYOUT) ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid}></div>
          <div className={styles.heroGlow1}></div>
          <div className={styles.heroGlow2}></div>
        </div>
        
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Ecossistema B2B</span>
            <h1 style={{ textWrap: 'balance' }}>
              Ecossistema de soluções integradas desenhado para <em>impulsionar o seu negócio.</em>
            </h1>
            <p>
              Tecnologia de ponta, excelência automotiva e mobilidade corporativa. Tudo em uma única parceria estratégica, desenhada para acelerar o seu crescimento.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contato" className="btn btn-primary">Falar com Consultor</Link>
              <a href="#solucoes" className="btn btn-outline">Conhecer Soluções</a>
            </div>
          </div>

          <HeroStatus />
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>+30</div>
            <div className={styles.statLabel}>Anos de Mercado</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>3</div>
            <div className={styles.statLabel}>Verticais Especializadas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>100%</div>
            <div className={styles.statLabel}>Foco Corporativo B2B</div>
          </div>
        </div>
      </section>

      {/* ===== VERTICALS (BENTO GRID) ===== */}
      <section id="solucoes" className={styles.verticalsSection}>
        <div className={styles.bentoContainer}>
          
          {/* Vertical A: Tecnologia (Featured) */}
          <Link href="/tecnologia" className={`${styles.bentoCard} ${styles.techCard}`}>
            <div className={styles.cardGlow}></div>
            <div className={styles.bentoContent}>
              <div className={styles.bentoHeader}>
                <div className={`${styles.bentoIcon} ${styles.techIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <span className="badge badge-tech">Vertical A</span>
              </div>
              <h2 className={styles.bentoTitle}>Tecnologia &amp; Marketing</h2>
              <p className={styles.bentoDesc}>Engenharia de software, SaaS e tráfego de alta performance para escalar o seu negócio e dominar o seu mercado.</p>
              
              <div className={styles.bentoFeatures}>
                <span className={styles.featureItem}>Desenvolvimento de Software & SaaS</span>
                <span className={styles.featureItem}>Gestão de Tráfego (Google Ads B2B)</span>
                <span className={styles.featureItem}>Automação de Processos com IA</span>
              </div>

              <div className={`${styles.bentoLink} ${styles.techLink}`}>
                Agendar Consultoria Estratégica
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </Link>

          {/* Vertical B: Automotivo */}
          <Link href="/automotivo" className={`${styles.bentoCard} ${styles.autoCard}`}>
            <div className={styles.cardGlow}></div>
            <div className={styles.bentoContent}>
              <div className={styles.bentoHeader}>
                <div className={`${styles.bentoIcon} ${styles.autoIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
                  </svg>
                </div>
                <span className="badge badge-auto">Vertical B</span>
              </div>
              <h2 className={styles.bentoTitle}>Centro Automotivo</h2>
              <p className={styles.bentoDesc}>Diagnóstico avançado e gestão de frotas com precisão tecnológica e expertise consolidada.</p>
              
              <div className={styles.bentoFeatures}>
                <span className={styles.featureItem}>Gestão de Frotas B2B com SLA</span>
                <span className={styles.featureItem}>Diagnóstico Computadorizado</span>
              </div>

              <div className={`${styles.bentoLink} ${styles.autoLink}`}>
                Solicitar Proposta para Frotas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </Link>

          {/* Vertical C: Frotas */}
          <Link href="/frotas" className={`${styles.bentoCard} ${styles.frotasCard}`}>
            <div className={styles.cardGlow}></div>
            <div className={styles.bentoContent}>
              <div className={styles.bentoHeader}>
                <div className={`${styles.bentoIcon} ${styles.frotasIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" rx="2"></rect>
                    <path d="M16 8h4l3 3v5h-7V8z"></path>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <span className="badge badge-frotas">Vertical C</span>
              </div>
              <h2 className={styles.bentoTitle}>Locação de Frotas</h2>
              <p className={styles.bentoDesc}>Terceirização de mobilidade corporativa com manutenção garantida pelo nosso Centro Automotivo.</p>
              
              <div className={styles.bentoFeatures}>
                <span className={styles.featureItem}>Terceirização de Frotas B2B</span>
                <span className={styles.featureItem}>Manutenção In-House Prioritária</span>
              </div>

              <div className={`${styles.bentoLink} ${styles.frotasLink}`}>
                Estruturar Frota Corporativa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ===== RODAPÉ PORTAL ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>W&amp;D</span>
            <p>Rua Rui Pirozzelli, 119 — Jardim Belém, São Paulo - SP</p>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/automotivo">Automotivo</Link>
            <Link href="/frotas">Frotas</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <p className={styles.footerCopy}>© 2025 W&amp;D Soluções Integradas</p>
        </div>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "W&D Soluções Integradas",
            "url": "https://wedsolucoes.com.br",
            "telephone": "+5511981527208",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Rui Pirozzelli, 119",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "03811-020",
              "addressCountry": "BR"
            }
          })
        }}
      />
    </main>
  );
}

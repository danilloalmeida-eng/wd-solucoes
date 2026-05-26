import styles from './page.module.css';

export const metadata = {
  title: 'Centro Automotivo — Diagnóstico Avançado e Gestão de Frotas',
  description: 'Gestão de frotas B2B com SLA rigoroso, diagnóstico computadorizado e mais de 30 anos de expertise técnica. A W&D redefine a manutenção automotiva corporativa.',
};

export default function AutomotivoPage() {
  return (
    <div className={styles.page}>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.carbonTexture}></div>
          <div className={styles.heroGlow}></div>
          <div className={styles.heroLine1}></div>
          <div className={styles.heroLine2}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>W&amp;D Centro Automotivo</span>
          <h1 style={{ textWrap: 'balance' }}>
            Diagnóstico Avançado e Gestão de Frotas com <span className={styles.accent}>Precisão Tecnológica.</span>
          </h1>
          <p className={styles.heroSub}>
            A W&amp;D Soluções Integradas redefine a manutenção automotiva. Mais do que reparos,
            entregamos confiabilidade logística e inteligência preventiva para veículos premium
            e frotas corporativas.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Gostaria%20de%20Solicitar%20uma%20Proposta%20para%20Gestão%20de%20Frotas."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtn}
            >
              Solicitar Proposta para Frotas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#servicos" className={styles.secondaryBtn}>
              Ver expertise ↓
            </a>
          </div>
          <div className={styles.metricRow}>
            <div className={styles.metric}>
              <span className={styles.metricNum}>30+</span>
              <span className={styles.metricLabel}>Anos de Expertise</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <span className={styles.metricNum}>SLA</span>
              <span className={styles.metricLabel}>Acordo de Nível de Serviço</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <span className={styles.metricNum}>B2B</span>
              <span className={styles.metricLabel}>Foco Corporativo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section id="servicos" className={styles.services}>
        <div className="container">
          <span className={styles.eyebrowAlt}>Excelência Técnica e Operacional</span>
          <h2 className={styles.sectionTitle}>Nossa <span className={styles.accent}>Expertise</span></h2>
          <div className={styles.serviceGrid}>
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Gestão de Frotas B2B</h3>
              <p>
                Sabemos que carro parado é prejuízo. Oferecemos planos de manutenção preventiva
                e corretiva com SLA rigoroso, garantindo que a sua frota esteja sempre na rua,
                rodando com segurança e eficiência.
              </p>
              <div className={styles.cardFooter}>
                <span>Manutenção Preventiva</span>
                <span>SLA Garantido</span>
                <span>Relatórios de Frota</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Diagnóstico Computadorizado Avançado</h3>
              <p>
                Equipamentos de última geração para leituras precisas. Não trabalhamos com
                achismos. Identificamos e resolvemos problemas complexos de injeção, eletrônica
                embarcada e mecânica pesada.
              </p>
              <div className={styles.cardFooter}>
                <span>Scanner Avançado</span>
                <span>Eletrônica Embarcada</span>
                <span>Injeção Eletrônica</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Especialização em Alta Complexidade</h3>
              <p>
                Nossa equipe domina a engenharia automotiva de ponta. Somos especialistas em
                diagnósticos e manutenções exigentes, incluindo vasta experiência com importados
                e a família Hyundai (Azera, Santa Fe e outros modelos de alto padrão).
              </p>
              <div className={styles.cardFooter}>
                <span>Importados</span>
                <span>Hyundai Especialista</span>
                <span>Alta Complexidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AUTORIDADE ===== */}
      <section id="autoridade" className={styles.autoridade}>
        <div className="container">
          <div className={styles.autGrid}>
            <div className={styles.autBig}>
              <span className={styles.bigNum}>30<sup>+</sup></span>
              <span className={styles.bigLabel}>Anos de bagagem técnica</span>
            </div>
            <div className={styles.autText}>
              <span className={styles.eyebrowAlt}>Mais de Três Décadas de Bagagem Técnica</span>
              <h2 className={styles.sectionTitle}>
                Experiência que não se <span className={styles.accent}>improvisa.</span>
              </h2>
              <div className={styles.rule}></div>
              <p>
                A W&amp;D Soluções Integradas é movida por experiência. Com a operação técnica
                liderada por nosso sócio <strong style={{color: 'var(--auto-accent)'}}>Wellington Machado</strong>, unimos mais de 30 anos
                de vivência no setor automotivo com uma gestão tecnológica e transparente.
                Aqui, o seu veículo ou a frota da sua empresa está nas mãos de quem realmente
                entende de engenharia mecânica.
              </p>
              <a
                href="https://wa.me/5511981527208?text=Olá!%20Gostaria%20de%20Solicitar%20uma%20Proposta."
                target="_blank"
                rel="noopener"
                className={styles.ctaBtn}
                style={{ marginTop: '2rem' }}
              >
                Solicitar Proposta para Frotas →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className={styles.eyebrowLight}>Próximo passo</span>
            <h2>Sua frota nas mãos certas.</h2>
            <p>
              Entre em contato e descubra como o nosso plano de gestão de frotas
              pode reduzir custos e garantir a operação da sua empresa.
            </p>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Gostaria%20de%20Solicitar%20uma%20Proposta%20para%20Gestão%20de%20Frotas."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtnLg}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Proposta para Frotas
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

import styles from './page.module.css';

export const metadata = {
  title: 'Locação de Frotas — Mobilidade Corporativa com Manutenção In-House',
  description: 'Terceirize a sua frota com quem garante a manutenção in-house. Planos flexíveis, SLA real e o diferencial exclusivo do nosso Centro Automotivo próprio.',
};

export default function FrotasPage() {
  return (
    <div className={styles.page}>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroGlow}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>Locação de Veículos &amp; Gestão de Frotas</span>
          <h1 style={{ textWrap: 'balance' }}>
            Inteligência em Mobilidade e Terceirização de <span className={styles.accent}>Frotas.</span>
          </h1>
          <p className={styles.heroSub}>
            Reduza custos operacionais e elimine a burocracia. Entregamos soluções de locação
            corporativa com um diferencial exclusivo: a manutenção e o controle de qualidade
            são garantidos pelo nosso próprio centro automotivo.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Gostaria%20de%20Estruturar%20uma%20Frota%20Corporativa."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtn}
            >
              Estruturar Frota Corporativa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#solucoes" className={styles.secondaryBtn}>
              Ver soluções ↓
            </a>
          </div>
          {/* Diferencial chip */}
          <div className={styles.differChip}>
            <div className={styles.differDot}></div>
            <span>Único diferencial: <strong>manutenção garantida in-house</strong> pelo nosso Centro Automotivo</span>
          </div>
        </div>
      </section>

      {/* ===== SOLUÇÕES ===== */}
      <section id="solucoes" className={styles.solutions}>
        <div className="container">
          <span className={styles.eyebrowAlt}>Nossas Soluções em Mobilidade</span>
          <h2 className={styles.sectionTitle} style={{ textWrap: 'balance' }}>
            Frota que <span className={styles.accent}>funciona</span>, não que para.
          </h2>
          <div className={styles.solutionGrid}>
            {/* Card 1 */}
            <div className={styles.solutionCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Terceirização de Frotas (B2B)</h3>
              <p>
                Focamos na eficiência da sua empresa. Assumimos a complexidade da aquisição,
                documentação e gestão dos veículos para que o seu time foque apenas no seu
                negócio principal (Core Business).
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.solutionCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Planos Flexíveis e Customizados</h3>
              <p>
                Adaptamos nossos contratos à realidade da sua operação, oferecendo locações
                de médio e longo prazo com veículos rigorosamente revisados e prontos para
                a exigência do trabalho diário.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.solutionCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Mobilidade de Apoio (Carro Reserva)</h3>
              <p>
                Condições especiais e disponibilidade imediata para garantir que operações
                críticas ou clientes premium não fiquem parados. Porque cada minuto conta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAL IN-HOUSE ===== */}
      <section id="diferencial" className={styles.diferencial}>
        <div className="container">
          <div className={styles.difBox}>
            <div className={styles.difLabel}>
              <div className={styles.difDot}></div>
              <span>Diferencial Exclusivo</span>
            </div>
            <h2 style={{ textWrap: 'balance' }}>O Fim do Veículo Parado <span className={styles.accent}>(Manutenção In-House)</span></h2>
            <div className={styles.rule}></div>
            <p>
              O maior gargalo na locação corporativa é a ineficiência e a demora das
              manutenções terceirizadas. Na nossa operação, <strong>esse problema não existe.</strong>
            </p>
            <p style={{ marginTop: '1rem' }}>
              Toda a frota locada possui manutenção garantida e prioritária executada dentro
              da W&amp;D Soluções Integradas. Temos o controle técnico absoluto sobre a mecânica
              de cada veículo, garantindo segurança impecável e o retorno mais rápido do
              mercado para as ruas.
            </p>
            <div className={styles.difHighlights}>
              <div className={styles.difHighlight}>
                <span className={styles.difIcon}>⚡</span>
                <div>
                  <strong>Retorno mais rápido</strong>
                  <span>Sem esperar terceiros. Oficina própria, prioridade absoluta.</span>
                </div>
              </div>
              <div className={styles.difHighlight}>
                <span className={styles.difIcon}>🔒</span>
                <div>
                  <strong>Controle técnico absoluto</strong>
                  <span>Conhecemos cada parafuso de cada veículo da frota.</span>
                </div>
              </div>
              <div className={styles.difHighlight}>
                <span className={styles.difIcon}>📊</span>
                <div>
                  <strong>Custo previsível</strong>
                  <span>Manutenção planejada elimina surpresas no orçamento.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow}></div>
            <span className={styles.eyebrowLight}>Próximo passo</span>
            <h2>Sua operação não pode parar.</h2>
            <p>
              Fale com a gente e vamos montar o plano ideal de terceirização de frotas
              para a realidade da sua empresa.
            </p>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Gostaria%20de%20Estruturar%20uma%20Frota%20Corporativa."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtnLg}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Estruturar Frota Corporativa
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

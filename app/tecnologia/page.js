import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Tecnologia & Marketing — Engenharia de Software e Tráfego B2B',
  description: 'Desenvolvemos sistemas sob medida, SaaS e gerenciamos tráfego de alta performance focado em ROI. Consultoria estratégica para empresas que querem escalar.',
};

export default function TecnologiaPage() {
  return (
    <div className={styles.page}>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowBlue}></div>
          <div className={styles.glowPurple}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>Tecnologia &amp; Marketing</span>
          <h1 style={{ textWrap: 'balance' }}>
            Engenharia de Software e Tráfego de <span className={styles.accent}>Alta Performance</span> para Escalar o seu Negócio.
          </h1>
          <p className={styles.heroSub}>
            Transformamos gargalos operacionais em soluções digitais escaláveis.
            Desenvolvimento de ponta e estratégias de aquisição focadas no retorno
            sobre o investimento (ROI) da sua empresa.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Quero%20Agendar%20uma%20Consultoria%20Estratégica."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtn}
            >
              Agendar Consultoria Estratégica
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#servicos" className={styles.secondaryBtn}>
              Ver serviços ↓
            </a>
          </div>
          {/* Trust chips */}
          <div className={styles.trustRow}>
            <span>React · Next.js · Supabase</span>
            <span>Google Ads B2B</span>
            <span>IA & Automação</span>
            <span>SaaS & APIs</span>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section id="servicos" className={styles.services}>
        <div className="container">
          <span className={styles.eyebrowAlt}>O que entregamos</span>
          <h2 className={styles.sectionTitle}>
            Soluções que geram <span className={styles.accent}>resultado</span>.
          </h2>
          <div className={styles.serviceGrid}>
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardTopLine}></div>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Desenvolvimento de Software &amp; SaaS</h3>
              <p>
                Criamos sistemas sob medida, plataformas web e produtos SaaS. Utilizamos
                arquiteturas modernas e robustas (React e Supabase) para garantir segurança,
                velocidade e escalabilidade desde a primeira linha de código até a entrega final.
              </p>
              <ul className={styles.featureList}>
                <li>Sistemas Web & Aplicações SaaS</li>
                <li>APIs e Integrações</li>
                <li>Arquitetura Escalável</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardTopLine}></div>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3>Gestão de Tráfego Corporativo</h3>
              <p>
                Não compramos apenas cliques, compramos dados e conversões. Estruturamos e
                otimizamos campanhas avançadas no Google Ads voltadas para o mercado B2B,
                garantindo que o seu orçamento de marketing vire receita.
              </p>
              <ul className={styles.featureList}>
                <li>Google Ads B2B</li>
                <li>Otimização por ROI</li>
                <li>Analytics & Data Studio</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardTopLine}></div>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Automação de Processos</h3>
              <p>
                Implementação de inteligência artificial e rotinas automatizadas para reduzir
                o trabalho manual da sua equipe, organizar fluxos logísticos e aumentar a
                eficiência da sua operação.
              </p>
              <ul className={styles.featureList}>
                <li>Fluxos com IA</li>
                <li>Automação de Processos</li>
                <li>Integração de Sistemas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAL ===== */}
      <section id="diferencial" className={styles.diferencial}>
        <div className="container">
          <div className={styles.difGrid}>
            <div className={styles.difText}>
              <span className={styles.eyebrowAlt}>Por que escolher</span>
              <h2>Por que escolher a nossa <span className={styles.accent}>engenharia?</span></h2>
              <div className={styles.rule}></div>
              <p>
                Unimos a visão estratégica de negócios com a execução técnica impecável.
                Entendemos a realidade da sua empresa, desenhamos a arquitetura do projeto
                e entregamos um ecossistema digital pronto para tracionar as suas vendas
                e otimizar a sua gestão.
              </p>
              <a
                href="https://wa.me/5511981527208?text=Olá!%20Quero%20Agendar%20uma%20Consultoria%20Estratégica."
                target="_blank"
                rel="noopener"
                className={styles.ctaBtn}
                style={{ marginTop: '2rem' }}
              >
                Agendar Consultoria Estratégica →
              </a>
            </div>
            <div className={styles.difStats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>B2B</span>
                <span className={styles.statLabel}>Foco exclusivo em empresas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>ROI</span>
                <span className={styles.statLabel}>Métrica central de todas as campanhas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>SaaS</span>
                <span className={styles.statLabel}>Produtos escaláveis e de alto valor</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>IA</span>
                <span className={styles.statLabel}>Inteligência aplicada à operação</span>
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
            <h2>Pronto para escalar?</h2>
            <p>Agende uma consultoria estratégica sem compromisso. Vamos analisar o seu negócio e apresentar um diagnóstico real.</p>
            <a
              href="https://wa.me/5511981527208?text=Olá!%20Quero%20Agendar%20uma%20Consultoria%20Estratégica."
              target="_blank"
              rel="noopener"
              className={styles.ctaBtnLg}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar Consultoria Estratégica
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

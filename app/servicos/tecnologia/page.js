import Image from 'next/image';
import styles from '../servicos.module.css';

export const metadata = {
  title: 'Tecnologia',
  description: 'Soluções de tecnologia para empresas: sistemas, anúncios online e automações. Tecnologia que faz sua empresa lucrar.',
};

export default function TecnologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/images/service-tech.png" alt="Soluções de tecnologia W&D" fill priority className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Tech</span>
          <h1>Tecnologia</h1>
          <p>Sistemas, anúncios online e automações. A tecnologia trabalhando pra sua empresa lucrar mais.</p>
          <a href="https://wa.me/5511981527208?text=Ol%C3%A1!%20Quero%20saber%20sobre%20os%20serviços%20de%20tecnologia." target="_blank" rel="noopener" className="btn btn-primary">
            Falar com a gente →
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">O que fazemos</span>
          <h2 className={styles.darkTitle}>Tecnologia que resolve problema real</h2>
          <div className={styles.rule}></div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Sites e landing pages</h3>
              <p>Sites profissionais que convertem visitante em cliente. Rápidos, bonitos e otimizados pro Google.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Google Ads e Meta Ads</h3>
              <p>Anúncios online que trazem cliente. Configuração, otimização e relatório. Você sabe onde cada real foi.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>Automações</h3>
              <p>Processos repetitivos viram automáticos. Menos trabalho manual, mais tempo pro que importa.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💻</div>
              <h3>Sistemas sob medida</h3>
              <p>Planilha não dá conta? A gente cria o sistema que sua operação precisa.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📷</div>
              <h3>Conteúdo pra redes</h3>
              <p>Posts, carrosséis e artes profissionais. A marca da sua empresa com cara de grande.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Suporte e manutenção</h3>
              <p>Seu site caiu? O sistema bugou? A gente resolve rápido. Suporte contínuo sem contrato longo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-brand">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Tecnologia boa é a que você nem percebe.<br/>Só vê o resultado.</h2>
          <p style={{ maxWidth: 500, margin: '1.5rem auto 2rem', color: 'rgba(255,255,255,0.85)' }}>
            Conta qual é o problema e a gente mostra a solução. Sem jargão, sem enrolação.
          </p>
          <a href="https://wa.me/5511981527208" target="_blank" rel="noopener" className="btn btn-white">
            Falar sobre meu projeto →
          </a>
        </div>
      </section>
    </>
  );
}

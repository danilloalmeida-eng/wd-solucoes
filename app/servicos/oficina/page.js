import Image from 'next/image';
import styles from '../servicos.module.css';

export const metadata = {
  title: 'Oficina Mecânica',
  description: 'Manutenção preventiva e corretiva com diagnóstico transparente. Oficina mecânica na zona leste de São Paulo.',
};

export default function OficinaPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/images/service-mechanic.png" alt="Oficina mecânica W&D" fill priority className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Mecânica</span>
          <h1>Oficina Mecânica</h1>
          <p>Diagnóstico transparente, manutenção preventiva e corretiva. Seu carro rodando sem surpresa no bolso.</p>
          <a href="https://wa.me/5511981527208?text=Ol%C3%A1!%20Preciso%20de%20manutenção%20no%20meu%20veículo." target="_blank" rel="noopener" className="btn btn-primary">
            Agendar pelo WhatsApp →
          </a>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">Nossos serviços</span>
          <h2 className={styles.darkTitle}>O que a gente faz na oficina</h2>
          <div className={styles.rule}></div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>Carros de Passeio (Linha Leve)</h3>
              <p>Mecânica completa. De revisão básica a motor e câmbio — se quebrou, a gente resolve 100%.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚐</div>
              <h3>Vans e Utilitários (Linha Pesada)</h3>
              <p>Focamos em agilidade pra você não parar. Fazemos freio, suspensão e embreagem leve (não abrimos motor).</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Diagnóstico transparente</h3>
              <p>Você sabe exatamente o que tem e quanto custa antes de qualquer serviço. Sem surpresa.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔌</div>
              <h3>Elétrica automotiva</h3>
              <p>Parte elétrica, injeção eletrônica, sensores. A eletrônica do seu carro em boas mãos.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>❄️</div>
              <h3>Ar-condicionado</h3>
              <p>Higienização, recarga de gás e reparo. Conforto térmico garantido o ano todo.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>Frotas empresariais</h3>
              <p>Manutenção recorrente com plano especial pra frotas. Desconto, prioridade e relatório mensal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">Diferenciais</span>
          <h2>Por que a W&D e não qualquer oficina?</h2>
          <div className={styles.rule}></div>
          <div className={styles.diffGrid}>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>01</span>
              <h4>Orçamento antes do serviço</h4>
              <p>Nada acontece sem você aprovar. Transparência total.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>02</span>
              <h4>Sem peça desnecessária</h4>
              <p>A gente só troca o que precisa. Não vendemos medo.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>03</span>
              <h4>Equipe fixa e de confiança</h4>
              <p>Willian e Tuca cuidam do seu carro como se fosse deles.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>04</span>
              <h4>Van disponível se precisar</h4>
              <p>Carro na oficina? A gente tem van pra você não parar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-brand">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Tá ouvindo um barulho estranho?<br/>Não espera piorar.</h2>
          <p style={{ maxWidth: 500, margin: '1.5rem auto 2rem', color: 'rgba(255,255,255,0.85)' }}>
            Chama no WhatsApp e agenda um diagnóstico. Se não tiver nada, você sai tranquilo.
          </p>
          <a href="https://wa.me/5511981527208" target="_blank" rel="noopener" className="btn btn-white">
            Agendar diagnóstico →
          </a>
        </div>
      </section>
    </>
  );
}

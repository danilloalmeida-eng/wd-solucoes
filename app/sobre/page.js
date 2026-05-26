import styles from './sobre.module.css';

export const metadata = {
  title: 'Sobre',
  description: 'Conheça a equipe da W&D Soluções Integradas. Oficina mecânica, vans e tecnologia na zona leste de SP.',
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Sobre a W&D</span>
          <h1 style={{ textWrap: 'balance' }}>A empresa que não deixa sua operação parar.</h1>
          <p>Nascemos da necessidade real: ajudar quem vive de movimento a nunca ficar parado. Oficina, van e tecnologia — tudo conectado num só lugar.</p>
        </div>
      </section>

      {/* Equipe */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">A equipe</span>
          <h2 className={styles.darkTitle}>Quem cuida da sua operação</h2>
          <div className={styles.rule}></div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>W</div>
              <h3>Willian</h3>
              <span className={styles.teamRole}>Mecânico pleno</span>
              <p>No dia a dia da oficina, cuidando de cada carro como se fosse dele.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>T</div>
              <h3>Welligton (Tuca)</h3>
              <span className={styles.teamRole}>Mecânico sênior</span>
              <p>Experiência de quem já viu de tudo. Diagnóstico rápido e certeiro.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>H</div>
              <h3>Henrique</h3>
              <span className={styles.teamRole}>Ajudante geral</span>
              <p>Apoio em tudo que precisa. Mantém a oficina organizada e funcionando.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>D</div>
              <h3>Danillo</h3>
              <span className={styles.teamRole}>Gestão e tecnologia</span>
              <p>Cuida da operação, atendimento, orçamentos e toda a parte digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">Como a gente pensa</span>
          <h2>Valores que guiam tudo</h2>
          <div className={styles.rule}></div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>Transparência</h3>
              <p>Orçamento claro, comunicação direta. Tudo no grupo pra todo mundo saber o que tá rolando.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Proatividade</h3>
              <p>A gente não espera o cliente reclamar. Se tem algo pra resolver, resolve antes.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Compromisso</h3>
              <p>O que foi combinado, é cumprido. Se disse que entrega tal dia, entrega.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Praticidade</h3>
              <p>Nada de burocracia. A gente resolve no WhatsApp, no aperto de mão, no dia a dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-brand">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Quer conhecer a gente pessoalmente?</h2>
          <p style={{ maxWidth: 500, margin: '1.5rem auto 2rem', color: 'rgba(255,255,255,0.85)' }}>
            Chama no WhatsApp ou passa na oficina. A porta tá sempre aberta.
          </p>
          <a href="https://wa.me/5511981527208" target="_blank" rel="noopener" className="btn btn-white">
            Chama no WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}

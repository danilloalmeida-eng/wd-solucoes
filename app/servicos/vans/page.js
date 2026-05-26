import Image from 'next/image';
import styles from '../servicos.module.css';

export const metadata = {
  title: 'Aluguel de Vans',
  description: 'Van por dia, semana ou mês com manutenção inclusa. Frota disponível para empresas na zona leste de SP.',
};

export default function VansPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/images/service-vans.png" alt="Aluguel de vans W&D" fill priority className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Frota</span>
          <h1>Aluguel de Vans</h1>
          <p>Nossa frota está rodando o Brasil. Com alta demanda, trabalhamos sob consulta de disponibilidade e lista de espera para locações avulsas ou mensais.</p>
          <a href="https://wa.me/5511981527208?text=Ol%C3%A1!%20Quero%20consultar%20a%20disponibilidade%20de%20vans." target="_blank" rel="noopener" className="btn btn-primary">
            Consultar disponibilidade →
          </a>
        </div>
      </section>

      {/* Planos */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">Planos</span>
          <h2 className={styles.darkTitle}>Planos flexíveis (mediante disponibilidade)</h2>
          <div className={styles.rule}></div>

          <div className={styles.planGrid}>
            <div className={styles.planCard}>
              <div className={styles.planTag}>Diária</div>
              <h3>Por dia</h3>
              <p>Pra quem precisa de uma van pontualmente. Ideal pra mudanças, eventos ou entregas especiais.</p>
              <ul className={styles.planFeatures}>
                <li>✓ Manutenção inclusa</li>
                <li>✓ Seguro básico</li>
                <li>✓ Retirada no local</li>
              </ul>
              <a href="https://wa.me/5511981527208?text=Quero%20alugar%20van%20por%20dia" target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consultar valor
              </a>
            </div>

            <div className={`${styles.planCard} ${styles.planFeatured}`}>
              <div className={styles.planTag}>Mais popular</div>
              <h3>Por semana</h3>
              <p>Pra projetos curtos ou quando a frota da empresa não dá conta. Valor melhor que a diária.</p>
              <ul className={styles.planFeatures}>
                <li>✓ Tudo da diária</li>
                <li>✓ Preço por km negociável</li>
                <li>✓ Suporte prioritário</li>
              </ul>
              <a href="https://wa.me/5511981527208?text=Quero%20alugar%20van%20por%20semana" target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consultar valor
              </a>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planTag}>Empresas</div>
              <h3>Por mês</h3>
              <p>Pra operação recorrente. Contrato flexível, manutenção inclusa e preço fechado. Sem surpresa.</p>
              <ul className={styles.planFeatures}>
                <li>✓ Tudo da semanal</li>
                <li>✓ Van reserva em caso de pane</li>
                <li>✓ Relatório de uso</li>
              </ul>
              <a href="https://wa.me/5511981527208?text=Quero%20alugar%20van%20mensal" target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consultar valor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">Vantagens</span>
          <h2>Por que alugar com a W&D?</h2>
          <div className={styles.rule}></div>
          <div className={styles.diffGrid}>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>01</span>
              <h4>Manutenção inclusa</h4>
              <p>Qualquer problema mecânico, a gente resolve. Você não gasta nada a mais.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>02</span>
              <h4>Sem burocracia</h4>
              <p>Contrato simples, direto ao ponto. Nada de cláusula escondida.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>03</span>
              <h4>Van reserva</h4>
              <p>No plano mensal, se der problema na van, você recebe outra. Operação não para.</p>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffNumber}>04</span>
              <h4>Frota própria + oficina própria</h4>
              <p>A gente cuida da frota na nossa oficina. Tempo de resposta muito mais rápido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-brand">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Frota parada é dinheiro jogado fora.</h2>
          <p style={{ maxWidth: 500, margin: '1.5rem auto 2rem', color: 'rgba(255,255,255,0.85)' }}>
            Chama no WhatsApp para verificar quais veículos vão vagar nos próximos dias ou entrar na nossa lista de prioridade.
          </p>
          <a href="https://wa.me/5511981527208?text=Ol%C3%A1!%20Gostaria%20de%20saber%20quando%20ter%C3%A3o%20vans%20dispon%C3%ADveis." target="_blank" rel="noopener" className="btn btn-white">
            Verificar agenda de vans →
          </a>
        </div>
      </section>
    </>
  );
}

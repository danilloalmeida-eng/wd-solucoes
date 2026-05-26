import styles from './blog.module.css';

export const metadata = {
  title: 'Blog',
  description: 'Dicas de mecânica, manutenção automotiva e tecnologia. Blog da W&D Soluções Integradas.',
};

export default function BlogPage() {
  const posts = [
    {
      slug: '#',
      tag: 'Mecânica',
      title: 'Os fluidos do seu carro: o que são e quando trocar',
      excerpt: 'Cada fluido do seu veículo tem uma função vital. Ignorar qualquer um deles é garantia de problema caro.',
      date: '23 Mai 2026',
    },
    {
      slug: '#',
      tag: 'Mecânica',
      title: 'Motor 3 cilindros: menor mas não mais fraco',
      excerpt: 'Entenda por que os motores menores estão dominando o mercado e o que isso significa pra manutenção.',
      date: '23 Mai 2026',
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Blog</span>
          <h1>Conteúdo que<br/>resolve dúvida.</h1>
          <p>Dicas de mecânica, frota e tecnologia pra você tomar decisão melhor.</p>
        </div>
      </section>

      <section className={`section section-light ${styles.blogSection}`}>
        <div className="container">
          {posts.length > 0 ? (
            <div className={styles.postGrid}>
              {posts.map((post, i) => (
                <article key={i} className={styles.postCard}>
                  <div className={styles.postMeta}>
                    <span className={styles.postTag}>{post.tag}</span>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className={styles.readMore}>Ler artigo →</span>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <h2>Em breve</h2>
              <p>Estamos preparando conteúdo novo. Acompanhe nosso Instagram enquanto isso.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

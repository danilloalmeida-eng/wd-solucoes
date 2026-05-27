import styles from './contato.module.css';

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a W&D Soluções Integradas. WhatsApp, endereço e formulário de contato.',
};

export default function ContatoPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Contato</span>
          <h1>Fala com a gente.</h1>
          <p>O jeito mais rápido é pelo WhatsApp. Mas se preferir, tem formulário e mapa aqui embaixo.</p>
        </div>
      </section>

      <section className={`section section-light ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <h3>📱 WhatsApp</h3>
                <p>Respondemos no horário comercial — Segunda a Sexta, 8h–18h.</p>
                <a href="https://wa.me/5511981527208" target="_blank" rel="noopener" className="btn btn-whatsapp">
                  (11) 98152-7208
                </a>
              </div>

              <div className={styles.infoCard}>
                <h3>📍 Endereço</h3>
                <p>
                  Rua Rui Pirozzelli, 119<br/>
                  Jardim Belém — São Paulo - SP<br/>
                  CEP 03811-020
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>🕐 Horário</h3>
                <p>
                  Segunda a Sexta: 8h – 18h<br/>
                  Sábado, domingo e feriados: fechado
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>📸 Instagram</h3>
                <p>Acompanha a gente no Insta pra dicas e novidades.</p>
                <a href="https://instagram.com/wdsolucoesintegradas" target="_blank" rel="noopener" className={styles.instaLink}>
                  @wdsolucoesintegradas →
                </a>
              </div>
            </div>

            {/* Map */}
            <div className={styles.mapSection}>
              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps?q=Rua+Rui+Pirozzelli,+119+-+Jardim+Belém,+São+Paulo+-+SP,+03811-020&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização W&D Soluções Integradas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

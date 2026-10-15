import { createDirectWhatsAppUrl, siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Aviso de privacidade',
  description: 'Como a W&D utiliza os dados enviados pelo site e as preferências de medição.',
  alternates: { canonical: '/privacidade/' },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <article className="container privacy-content">
        <p className="eyebrow">Privacidade e transparência</p>
        <h1>Como seus dados são utilizados.</h1>
        <p className="privacy-content__lead">Este aviso explica, de forma direta, quais informações o site da W&amp;D utiliza para responder contatos e medir a experiência digital.</p>

        <section>
          <h2>Dados enviados no formulário</h2>
          <p>Quando você solicita um contato, podemos receber nome, WhatsApp, empresa, interesse, mensagem e o contexto de origem da solicitação. Esses dados são utilizados para responder, entender a necessidade apresentada e organizar o atendimento comercial.</p>
        </section>

        <section>
          <h2>Origem e campanha</h2>
          <p>O site pode preservar, durante a sessão de navegação, parâmetros como origem, campanha, anúncio e página inicial. Essas informações acompanham o contato para ajudar a W&amp;D a entender como a conversa começou. Os campos digitados no formulário não são enviados às ferramentas de análise.</p>
        </section>

        <section>
          <h2>Medição opcional</h2>
          <p>Quando houver uma ferramenta de medição configurada, ela somente será carregada após sua escolha. A opção “Somente necessários” mantém a navegação e o formulário funcionando sem ativar a medição opcional. Você pode reabrir as preferências pelo botão “Privacidade”.</p>
        </section>

        <section>
          <h2>Compartilhamento e conservação</h2>
          <p>Os dados podem ser processados por provedores usados para receber leads, hospedar o site e medir a navegação, sempre de acordo com a finalidade informada. As informações são mantidas apenas pelo período necessário para o atendimento, relacionamento comercial e cumprimento de obrigações aplicáveis.</p>
        </section>

        <section>
          <h2>Seus direitos e contato</h2>
          <p>Você pode pedir confirmação, acesso, correção ou eliminação dos seus dados e esclarecer dúvidas pelo WhatsApp <a href={createDirectWhatsAppUrl('Olá! Quero falar sobre privacidade e meus dados.')} target="_blank" rel="noreferrer" data-placement="privacy_page">{siteConfig.phoneDisplay}</a>.</p>
        </section>

        <p className="privacy-content__updated">Última atualização: 13 de outubro de 2026.</p>
      </article>
    </main>
  );
}

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
          <p>Quando você preenche o formulário, o site prepara uma mensagem com seu nome, WhatsApp, empresa (se informada), interesse e mensagem. Ao continuar, o texto é encaminhado ao serviço do WhatsApp para abrir a conversa já preenchida. A mensagem só é enviada à W&amp;D se você pressionar “Enviar” no WhatsApp.</p>
        </section>

        <section>
          <h2>Responsável pelo atendimento</h2>
          <p>Controladora e razão social: {siteConfig.legalName} · CNPJ {siteConfig.cnpj}. O atendimento e as solicitações sobre dados pessoais são conduzidos por {siteConfig.contactName}, pelo WhatsApp {siteConfig.phoneDisplay}.</p>
        </section>

        <section>
          <h2>Origem e campanha</h2>
          <p>O site pode preservar, durante a sessão de navegação, parâmetros como origem, campanha, anúncio e página inicial. Quando você decide enviar a mensagem pelo WhatsApp, esse contexto pode ser incluído para ajudar a W&amp;D a entender como a conversa começou. Nome, telefone, empresa e mensagem não são enviados às ferramentas de análise.</p>
        </section>

        <section>
          <h2>Medição opcional</h2>
          <p>O site pode usar o Google Analytics 4 para medir páginas visitadas e ações como cliques em botões, sem enviar os campos preenchidos no formulário. A tag de medição só é carregada após sua escolha positiva. A opção “Somente necessários” mantém a navegação e o formulário funcionando sem enviar dados ao Google. Você pode reabrir as preferências pelo botão “Privacidade”.</p>
        </section>

        <section>
          <h2>Compartilhamento e conservação</h2>
          <p>No momento, o site não salva o formulário em CRM ou banco de dados. O WhatsApp/Meta recebe o texto pré-preenchido quando a conversa é aberta, conforme os próprios termos e políticas do serviço. A W&amp;D recebe a mensagem se você decidir enviá-la e conserva as conversas no histórico de atendimento por até 4 meses. Para solicitar acesso, correção ou eliminação, fale pelo canal indicado abaixo.</p>
        </section>

        <section>
          <h2>Seus direitos e contato</h2>
          <p>Você pode pedir confirmação, acesso, correção ou eliminação dos seus dados e esclarecer dúvidas pelo WhatsApp <a href={createDirectWhatsAppUrl('Olá! Quero falar sobre privacidade e meus dados.')} target="_blank" rel="noreferrer" data-placement="privacy_page">{siteConfig.phoneDisplay}</a>.</p>
        </section>

        <p className="privacy-content__updated">Última atualização: 16 de outubro de 2026.</p>
      </article>
    </main>
  );
}

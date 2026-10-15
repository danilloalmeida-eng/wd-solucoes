# Implementação das ações de impacto muito alto

**Data:** 13 de outubro de 2026\
**Escopo aprovado:** mensuração do funil, preservação de intenção e origem, persistência do lead antes do WhatsApp, cases orientados a resultado e proposta principal mais específica.

## Concluído no código

- Nova proposta principal orientada a demanda, eficiência e operação conectada.
- CTA principal padronizado como “Mapear meu gargalo”.
- Catálogo único de intenções e compatibilidade com os parâmetros antigos.
- Pré-seleção do interesse e contextualização do formulário conforme CTA ou case de origem.
- Preservação de UTMs, identificadores de clique, landing page e referenciador durante a sessão.
- Formulário com nome, WhatsApp, empresa opcional, intenção, mensagem opcional, consentimento e honeypot.
- Contrato para salvar o lead em endpoint externo antes do encaminhamento ao WhatsApp.
- `lead_id` para deduplicação e fallback visível quando o endpoint ou o WhatsApp falhar.
- Eventos sem dados pessoais para CTA, cases, início do formulário, lead persistido, WhatsApp, telefone e erro de persistência.
- Google Analytics 4 direto condicionado à autorização do visitante.
- Aviso de privacidade e mecanismo para reabrir a escolha de medição.
- Resultados operacionais verificáveis nos cinco cases, sem percentuais ou métricas inventadas.
- Workflows preparados para receber o ID de medição do GA4 e endpoint por secrets do GitHub.

## Pendente de ativação externa

O código não envia leads a um serviço externo nem carrega a tag do GA4 enquanto as variáveis estiverem vazias:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_LEAD_ENDPOINT=https://endpoint.exemplo.com/leads
```

Para concluir a ativação em produção ainda é necessário:

1. definir o destino real dos leads;
2. validar segurança, CORS, deduplicação e logs do endpoint;
3. criar a propriedade e o fluxo GA4 corretos;
4. configurar o ID `G-...` e validar os eventos diretamente no GA4;
5. testar um lead completo em ambiente controlado;
6. aprovar separadamente a publicação do contêiner ou alterações em Google Ads.

## Verificações realizadas

- testes dos helpers de conversão;
- build estático do Next.js;
- validação visual da home, contato, privacidade e case em desktop e mobile;
- validação do preenchimento de intenção por URL;
- validação dos campos obrigatórios sem transmitir dados externos;
- revisão da seção de resultados e do CTA contextual dos cases.

Detalhes técnicos de ativação: [MENSURACAO_E_LEADS.md](./MENSURACAO_E_LEADS.md).

# Mensuração e recebimento de leads

## Estado da implementação

O código está preparado para preservar intenção, origem e campanha, emitir eventos sem dados pessoais e, se no futuro a W&D aprovar um endpoint, salvar o lead antes de encaminhar a conversa ao WhatsApp.

Estado atual confirmado pela W&D em 15/10/2026: o formulário encaminha somente ao WhatsApp, sem CRM ou armazenamento persistente. A W&D optou por integrar o GA4 diretamente ao site, sem Google Tag Manager. O código está preparado para receber um ID `G-...`, mas a propriedade e o fluxo exclusivos de `wedsolucoes.com.br` ainda precisam ser criados e aprovados; a única propriedade hoje acessível aponta para outro domínio e não será reutilizada. `lead_submit` não é emitido no fluxo WhatsApp-only.

## Configuração opcional para o futuro

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_LEAD_ENDPOINT=https://endpoint.exemplo.com/leads
```

Esses valores são públicos e incorporados ao JavaScript durante o `next build`. Nunca usar chaves privadas nessas variáveis. O endpoint precisa aplicar autenticação apropriada no servidor, validação, limitação de requisições, proteção contra abuso e uma política de CORS restrita ao domínio do site.

Os workflows aceitam secrets do GitHub com os mesmos nomes. Cadastrar o ID público de medição habilita a tag direta do GA4 no próximo build; não há contêiner do Google Tag Manager neste projeto.

## Contrato do endpoint de leads

O navegador envia `POST` em JSON contendo:

- `lead_id`: UUID criado no navegador para deduplicação;
- `submitted_at`;
- `name`, `company`, `whatsapp` e `message`;
- `intent` e `intent_label`;
- `source_page`, `source_cta` e `source_case`;
- `attribution`: UTMs, identificadores de clique, landing page e referenciador quando disponíveis.

Resposta de sucesso esperada:

```json
{
  "lead_id": "uuid-confirmado-ou-gerado-pelo-servidor"
}
```

Qualquer resposta fora de `2xx`, erro de CORS ou demora superior a oito segundos aciona o fallback visível para WhatsApp. O evento `lead_submit` só é emitido após uma resposta de sucesso.

## Mapa de eventos

| Evento de analytics | Disparo | Parâmetros principais | Uso recomendado |
|---|---|---|---|
| `cta_click` | Clique em link para contato | `cta_text`, `placement`, `page_path`, `intent` | Análise de jornada |
| `view_case` | Clique para abrir um case | `case_slug`, `source_page` | Análise de prova |
| `form_start` | Primeiro foco no formulário | `page_path`, `intent` | Abandono do formulário |
| `lead_submit` | Lead salvo pelo endpoint, se essa integração for aprovada no futuro | `lead_id`, `intent`, origem | Não se aplica ao fluxo atual; não emitir como se o clique fosse um lead |
| `whatsapp_click` | Clique para abrir o WhatsApp | `placement`, `intent` | Proxy de encaminhamento para conversa; não confirma mensagem enviada nem lead qualificado |
| `phone_click` | Clique no telefone | `placement`, `page_path` | Microconversão |
| `lead_submit_error` | Falha no endpoint | `intent`, `source_page` | Monitoramento técnico |

Nome, telefone, empresa e mensagem são bloqueados na utilidade de analytics e não são enviados ao GA4.

## Configuração recomendada no GA4 direto

1. Criar uma propriedade GA4 exclusiva para a W&D, no fuso `America/Sao_Paulo` e moeda BRL.
2. Criar um fluxo web para `https://wedsolucoes.com.br` e obter seu ID de medição `G-...`.
3. Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no GitHub Actions e publicar um novo build.
4. O site envia diretamente ao GA4 apenas eventos de jornada sem dados pessoais, como `whatsapp_click`, `cta_click`, `form_start` e `view_case`.
5. Tratar `whatsapp_click` como microconversão/proxy de intenção. Não o renomear para `generate_lead` nem apresentá-lo como lead salvo.
6. Só avaliar importação no Google Ads depois de confirmar a conta W&D e aprovar a ação e sua classificação. Por padrão, manter como observação/secundária; uma ação primária afeta a otimização de lances.
7. Validar consentimento aceito e recusado, navegação e clique no WhatsApp no Tag Assistant, Realtime e DebugView.

O código usa consentimento básico: a tag do Google não é carregada antes de uma escolha positiva. Recusar a medição não bloqueia navegação ou formulário.

## Checklist de ativação

1. Aprovar o plano de criação da nova propriedade GA4 e da nova conta/campanha Google Ads.
2. Criar a propriedade e o fluxo web de `wedsolucoes.com.br`.
3. Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no ambiente de build e gerar/publicar o site.
4. Testar consentimento aceito/recusado, navegação, clique para WhatsApp e chegada dos eventos ao GA4.
5. Criar ou identificar uma conta Google Ads exclusiva da W&D e configurar faturamento.
6. Vincular GA4 e Google Ads e aprovar separadamente a conversão e o orçamento da campanha.

O endpoint, `lead_submit` e a deduplicação de leads não fazem parte do fluxo atual; só reabrir se a W&D optar por armazenar os contatos além do WhatsApp.

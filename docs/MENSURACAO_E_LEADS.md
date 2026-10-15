# Mensuração e recebimento de leads

## Estado da implementação

O código está preparado para preservar intenção, origem e campanha, emitir eventos sem dados pessoais e, se no futuro a W&D aprovar um endpoint, salvar o lead antes de encaminhar a conversa ao WhatsApp.

Estado atual confirmado pela W&D em 15/10/2026: o formulário deve encaminhar somente ao WhatsApp, sem CRM ou armazenamento persistente. O build está sem GTM e sem endpoint, então os eventos não são enviados a uma plataforma de analytics e `lead_submit` não é emitido. As integrações permanecem opcionais e desativadas até aprovação explícita.

## Configuração opcional para o futuro

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_LEAD_ENDPOINT=https://endpoint.exemplo.com/leads
```

Esses valores são públicos e incorporados ao JavaScript durante o `next build`. Nunca usar chaves privadas nessas variáveis. O endpoint precisa aplicar autenticação apropriada no servidor, validação, limitação de requisições, proteção contra abuso e uma política de CORS restrita ao domínio do site.

Os workflows aceitam secrets do GitHub com os mesmos nomes. Cadastrar os secrets não publica nem configura um contêiner do Google Tag Manager; apenas habilita o código preparado no próximo build.

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

| Evento no `dataLayer` | Disparo | Parâmetros principais | Uso recomendado |
|---|---|---|---|
| `cta_click` | Clique em link para contato | `cta_text`, `placement`, `page_path`, `intent` | Análise de jornada |
| `view_case` | Clique para abrir um case | `case_slug`, `source_page` | Análise de prova |
| `form_start` | Primeiro foco no formulário | `page_path`, `intent` | Abandono do formulário |
| `lead_submit` | Lead salvo pelo endpoint | `lead_id`, `intent`, origem | Enviar ao GA4 como `generate_lead` |
| `whatsapp_click` | Abertura do WhatsApp | `placement`, `intent`, `lead_id` quando houver | Microconversão |
| `phone_click` | Clique no telefone | `placement`, `page_path` | Microconversão |
| `lead_submit_error` | Falha no endpoint | `intent`, `source_page` | Monitoramento técnico |

Nome, telefone, empresa e mensagem são bloqueados na utilidade de analytics e não entram no `dataLayer`.

## Configuração recomendada no GTM

1. Criar variáveis da camada de dados para os parâmetros necessários.
2. Criar gatilhos de evento personalizado para os eventos acima.
3. Enviar `lead_submit` ao Google Analytics 4 com o nome recomendado `generate_lead`.
4. Manter `whatsapp_click` e `phone_click` como microconversões, não como a conversão comercial principal.
5. Importar para o Google Ads apenas a conversão que represente o objetivo aprovado, com deduplicação documentada.
6. Validar consentimento, eventos e duplicidade no Tag Assistant antes de publicar o contêiner.

O código usa consentimento básico: o contêiner não é carregado antes de uma escolha positiva. Recusar a medição não bloqueia navegação ou formulário.

## Checklist de ativação

1. Escolher e testar o destino real dos leads.
2. Configurar o endpoint e confirmar CORS, limitação de requisições e logs.
3. Inserir `NEXT_PUBLIC_LEAD_ENDPOINT` no ambiente de build.
4. Criar ou identificar o contêiner GTM correto.
5. Inserir `NEXT_PUBLIC_GTM_ID` no ambiente de build.
6. Configurar tags e gatilhos no workspace do GTM.
7. Testar em Preview/Tag Assistant com consentimento aceito e negado.
8. Testar um lead completo e verificar a deduplicação pelo `lead_id`.
9. Solicitar aprovação específica antes de publicar o contêiner ou alterar conversões do Google Ads.

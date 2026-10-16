# Status da implementação da auditoria

**Atualizado em:** 16 de outubro de 2026

| Frente da auditoria | Status | Evidência no repositório |
|---|---|---|
| GA4 direto e eventos de conversão | Código pronto para `G-...`; propriedade/fluxo pendentes. Conta W&D identificada, mas a conexão Composio é somente leitura e precisa de `analytics.edit` | `components/ConversionAnalytics.js`, `lib/analytics.js`, `docs/PENDENCIAS_ATIVACAO_CONVERSAO.md` |
| Interesse, UTMs e contexto do lead | Concluído | `lib/conversion.mjs`, `components/ContactForm.js` |
| Fluxo do contato | WhatsApp-only confirmado; sem persistência no site | escolha informada pela W&D em 15/10/2026; sem CRM, banco ou endpoint |
| Hero e mensagem principal | Concluído | `app/page.js` |
| Sobreposição nos títulos internos | Corrigido | `app/globals.css` |
| Vulnerabilidades de dependências | Corrigido | Next/React atualizados; `npm audit` sem vulnerabilidades |
| Cases como prova de resultado | Concluído com evidência qualitativa | `lib/projects.js`, `components/CaseTemplate.js` |
| Prova logo abaixo do hero | Concluído sem alegações não comprovadas | `app/page.js` |
| CTA e case acima da dobra em Soluções/IA | Concluído | `app/solucoes/page.js`, `app/ia-automacao/page.js` |
| Próximos passos após o contato | Concluído: prazo de resposta de até 2 horas informado pela W&D | `app/contato/page.js` |
| Landing pages de alta intenção | Concluído: 7 páginas estáticas | `app/solucoes/[slug]/`, `lib/services.js` |
| SEO técnico, JSON-LD, favicon e OG PNG | Concluído | `app/layout.js`, `app/manifest.js`, ativos em `app/` e `public/og/` |
| Acessibilidade, teclado e foco | Concluído no código | skip link, foco global e menu com Escape/scroll lock |
| Imagens responsivas e estabilidade visual | Concluído | `next/image` com dimensões e `sizes` |
| Headers de segurança e cache | Configurados e confirmados em produção | `public/.htaccess`; respostas reais do domínio incluem CSP, HSTS, X-Frame-Options e demais políticas |
| Publicação inicial | Concluída em produção | commit `83e82a6`; workflow GitHub Actions concluído; home e rotas críticas respondem HTTP 200 |
| Privacidade | Atualizada com razão social, CNPJ, Danillo Almeida, WhatsApp, fluxo WhatsApp-only e retenção de até 4 meses | `app/privacidade/page.js` |
| Limpeza de ativos e documentação | Concluído | ativos não usados removidos e README reescrito |
| Métricas, depoimentos, equipe e credenciais | Dependência externa | requer evidências e autorização da W&D/clientes |
| SLA e retenção de conversas | Concluído | retorno em até 2 horas; conversas mantidas por até 4 meses |
| Campanha Google Ads | Aprovada, bloqueada por conta incorreta no Composio | conexão ativa aponta para ViVa Confeitaria; reconectar/autorizar a conta W&D antes de criar a campanha de R$ 20/dia |
| Duração, suporte e condições comerciais | Dependência externa | requer definição operacional |
| Testes A/B e otimização por conversão | Dependência de tráfego | executar após publicação e volume de dados |

O que ainda precisa de ação humana ou acesso externo está detalhado em `PENDENCIAS_ATIVACAO_CONVERSAO.md`.

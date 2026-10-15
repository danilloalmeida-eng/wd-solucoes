# Status da implementação da auditoria

**Atualizado em:** 15 de outubro de 2026

| Frente da auditoria | Status | Evidência no repositório |
|---|---|---|
| GA4 direto e eventos de conversão | Código pronto para `G-...`; criação da propriedade/fluxo e ativação externa pendentes. A propriedade hoje acessível é de outro domínio e não será usada | `components/ConversionAnalytics.js`, `lib/analytics.js`, `docs/PENDENCIAS_ATIVACAO_CONVERSAO.md` |
| Interesse, UTMs e contexto do lead | Concluído | `lib/conversion.mjs`, `components/ContactForm.js` |
| Fluxo do contato | WhatsApp-only confirmado; sem persistência no site | escolha informada pela W&D em 15/10/2026; sem CRM, banco ou endpoint |
| Hero e mensagem principal | Concluído | `app/page.js` |
| Sobreposição nos títulos internos | Corrigido | `app/globals.css` |
| Vulnerabilidades de dependências | Corrigido | Next/React atualizados; `npm audit` sem vulnerabilidades |
| Cases como prova de resultado | Concluído com evidência qualitativa | `lib/projects.js`, `components/CaseTemplate.js` |
| Prova logo abaixo do hero | Concluído sem alegações não comprovadas | `app/page.js` |
| CTA e case acima da dobra em Soluções/IA | Concluído | `app/solucoes/page.js`, `app/ia-automacao/page.js` |
| Próximos passos após o contato | Concluído sem inventar SLA | `app/contato/page.js` |
| Landing pages de alta intenção | Concluído: 7 páginas estáticas | `app/solucoes/[slug]/`, `lib/services.js` |
| SEO técnico, JSON-LD, favicon e OG PNG | Concluído | `app/layout.js`, `app/manifest.js`, ativos em `app/` e `public/og/` |
| Acessibilidade, teclado e foco | Concluído no código | skip link, foco global e menu com Escape/scroll lock |
| Imagens responsivas e estabilidade visual | Concluído | `next/image` com dimensões e `sizes` |
| Headers de segurança e cache | Configurados e confirmados em produção | `public/.htaccess`; respostas reais do domínio incluem CSP, HSTS, X-Frame-Options e demais políticas |
| Publicação inicial | Concluída em produção | commit `83e82a6`; workflow GitHub Actions concluído; home e rotas críticas respondem HTTP 200 |
| Privacidade | Atualizada com razão social, CNPJ, Danillo Almeida, WhatsApp e fluxo WhatsApp-only | `app/privacidade/page.js`; falta apenas definir o prazo interno de retenção |
| Limpeza de ativos e documentação | Concluído | ativos não usados removidos e README reescrito |
| Métricas, depoimentos, equipe e credenciais | Dependência externa | requer evidências e autorização da W&D/clientes |
| SLA, duração, suporte e condições comerciais | Dependência externa | requer definição operacional |
| Testes A/B e otimização por conversão | Dependência de tráfego | executar após publicação e volume de dados |

O que ainda precisa de ação humana ou acesso externo está detalhado em `PENDENCIAS_ATIVACAO_CONVERSAO.md`.

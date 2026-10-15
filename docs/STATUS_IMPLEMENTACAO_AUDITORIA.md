# Status da implementação da auditoria

**Atualizado em:** 13 de outubro de 2026

| Frente da auditoria | Status | Evidência no repositório |
|---|---|---|
| GTM/GA4 e eventos de conversão | Código pronto; ativação externa pendente | `components/ConversionAnalytics.js`, `lib/analytics.js` |
| Interesse, UTMs e contexto do lead | Concluído | `lib/conversion.mjs`, `components/ContactForm.js` |
| Persistência do lead | Integração pronta; endpoint externo pendente | `NEXT_PUBLIC_LEAD_ENDPOINT` |
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
| Headers de segurança e cache | Configurados para Apache | `public/.htaccess`; validação em produção pendente |
| Limpeza de ativos e documentação | Concluído | ativos não usados removidos e README reescrito |
| Métricas, depoimentos, equipe e credenciais | Dependência externa | requer evidências e autorização da W&D/clientes |
| SLA, duração, suporte e condições comerciais | Dependência externa | requer definição operacional |
| Testes A/B e otimização por conversão | Dependência de tráfego | executar após publicação e volume de dados |

O que ainda precisa de ação humana ou acesso externo está detalhado em `PENDENCIAS_ATIVACAO_CONVERSAO.md`.

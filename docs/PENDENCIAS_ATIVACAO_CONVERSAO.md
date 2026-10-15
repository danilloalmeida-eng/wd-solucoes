# Dependências para concluir a ativação comercial

**Atualizado em:** 13 de outubro de 2026\
**Status:** implementação possível no repositório concluída; itens abaixo dependem de dados, acessos, evidências ou decisões externas.

## 1. Mensuração e contas externas

- [ ] Informar o ID do contêiner do Google Tag Manager, no formato `GTM-XXXXXXX`.
- [ ] Informar a propriedade do GA4 que deverá receber os eventos e quem pode publicá-los.
- [ ] Informar a conta do Google Ads, as ações de conversão desejadas e quem autoriza alterações.
- [ ] Configurar `NEXT_PUBLIC_GTM_ID` nos ambientes/secrets de build.
- [ ] Configurar no GTM os eventos documentados em `MENSURACAO_E_LEADS.md`.
- [ ] Mapear `lead_submit` para `generate_lead` no GA4 e, se aprovado, importar a conversão principal no Google Ads.
- [ ] Manter WhatsApp e telefone como microconversões, sem misturá-los ao lead persistido.
- [ ] Validar consentimento aceito e recusado no Tag Assistant e GA4 DebugView.

Nenhuma conta de GTM, GA4 ou Google Ads foi alterada pelo código deste repositório.

## 2. Destino e governança dos leads

- [ ] Escolher o destino: CRM, webhook, automação, banco de dados ou outro serviço.
- [ ] Disponibilizar a URL HTTPS do endpoint e configurar `NEXT_PUBLIC_LEAD_ENDPOINT`.
- [ ] Definir responsáveis pelo acesso, tratamento e retorno aos contatos.
- [ ] Definir prazo de resposta comercial que possa ser publicado no site.
- [ ] Definir retenção, correção e exclusão dos dados pessoais.
- [ ] Confirmar razão social, CNPJ e canal formal do controlador para completar o aviso de privacidade.
- [ ] Implementar no endpoint: CORS restrito ao domínio, rate limit, logs sem dados sensíveis, validação, deduplicação por `lead_id` e resposta JSON.
- [ ] Incluir a origem do endpoint em `connect-src` no `public/.htaccess`.
- [ ] Enviar um lead controlado em produção e conferir conteúdo, atribuição e ausência de duplicidade.

## 3. Provas comerciais que só a W&D pode fornecer

- [ ] Autorizações dos clientes para uso de nome, marca, telas e resultados.
- [ ] Depoimentos aprovados, com nome, função, empresa e texto final.
- [ ] Métricas com fonte e período: situação inicial, resultado posterior e como foi medido.
- [ ] Duração real de cada projeto e escopo contratado.
- [ ] Logotipos em formato adequado, somente após autorização.
- [ ] Nomes, funções, fotos e mini-biografias das pessoas que representam a W&D.
- [ ] Certificações, parceiros e credenciais que possam ser comprovados.

Até esses dados existirem, o site usa apenas entregas e resultados qualitativos verificáveis nos próprios produtos.

## 4. Oferta, foco e operação comercial

- [ ] Priorizar os segmentos e serviços com melhor margem, ticket e capacidade de entrega.
- [ ] Confirmar área geográfica de atendimento e eventual foco local.
- [ ] Definir se o primeiro diagnóstico é gratuito, pago ou condicionado a algum critério.
- [ ] Definir prazo médio de proposta, duração típica por tipo de serviço e formato de suporte pós-entrega.
- [ ] Confirmar canais sociais e perfil do Google Business para inclusão em `sameAs` nos dados estruturados.
- [ ] Definir orçamento, regiões, públicos e limites antes de criar campanhas de mídia.

## 5. Hosting, publicação e validação final

- [ ] Confirmar que a hospedagem é Apache/Hostinger e respeita o `.htaccess` publicado.
- [ ] Fazer backup da versão atualmente publicada antes da troca.
- [ ] Publicar o novo build após revisão do conteúdo.
- [ ] Confirmar em produção os headers CSP, HSTS, Permissions-Policy, Referrer-Policy e cache.
- [ ] Validar favicon, imagem social, sitemap, robots e dados estruturados nas ferramentas apropriadas.
- [ ] Executar o roteiro completo: anúncio/UTM → landing page → formulário → endpoint → WhatsApp → GA4/Ads.

## 6. Otimização contínua após lançamento

- [ ] Reunir volume suficiente por página e origem antes de concluir o que converte melhor.
- [ ] Criar testes A/B apenas com hipótese, evento principal e janela de decisão definidos.
- [ ] Revisar mensalmente termos de busca, taxa de avanço do lead, qualidade comercial e páginas de entrada.
- [ ] Substituir hipóteses de copy por aprendizados de conversas e dados reais.

## Variáveis necessárias

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_LEAD_ENDPOINT=https://endpoint.exemplo.com/leads
```

## Referências

- [Status da implementação](./STATUS_IMPLEMENTACAO_AUDITORIA.md)
- [Mensuração e recebimento de leads](./MENSURACAO_E_LEADS.md)
- [Auditoria completa](../RELATORIO_AUDITORIA_CONVERSAO_WD.md)

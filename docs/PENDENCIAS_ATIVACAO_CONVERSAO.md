# Dependências para concluir a ativação comercial

**Atualizado em:** 16 de outubro de 2026\
**Status:** implementação e publicação inicial concluídas; os itens abaixo dependem de dados, acessos, evidências ou decisões externas.

## O que ainda exige informação da W&D

- **GA4:** falta criar uma propriedade e fluxo exclusivos para o site e configurar o ID de medição. A conexão Composio atual não tem permissão de escrita (`analytics.edit`); o Google recusou a criação e nenhuma propriedade foi criada. Reconectar/autorizar a edição.
- **Google Ads:** a W&D confirmou que já existe conta e autorizou uma campanha nova e separada com R$ 20/dia; não criar conta. O Composio conectado só expõe a ViVa Confeitaria, portanto é preciso conectar/autorizar a conta W&D antes de criar a campanha.
- **Atendimento e privacidade:** concluído: retorno em até 2 horas e conversas mantidas por até 4 meses. Razão social, CNPJ, responsável e canal também estão confirmados.
- **Oferta e mídia:** definir serviço prioritário, formato do diagnóstico inicial e prazo de proposta/suporte. A região já foi definida como São Paulo capital, com foco na Zona Leste.
- **Opcional, para reforçar prova:** autorizações e evidências de resultados, perfis sociais/Google Business, equipe e credenciais. Depoimentos não são necessários agora; a W&D informou que ainda não tem.

O código e os textos já foram preparados com os dados fornecidos. A campanha separada e pausada está aprovada com orçamento médio de R$ 20/dia (limite mensal típico de R$ 608); a execução depende de acesso Composio à conta correta da W&D. Os itens de prova social podem ficar para depois.

## 1. Mensuração e contas externas

- [x] Definir uma propriedade GA4 exclusiva: `W&D Soluções Integradas — Site`, fuso `America/Sao_Paulo`, moeda BRL, dentro da conta Analytics W&D existente.
- [ ] Reconectar/autorizar Google Analytics no Composio com escopo `analytics.edit` (a conexão atual só permite leitura).
- [ ] Criar nessa propriedade um fluxo web para `https://wedsolucoes.com.br` e obter o ID `G-...`.
- [x] Substituir a dependência de Google Tag Manager por integração direta do GA4 no código, com consentimento básico.
- [ ] Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no GitHub e gerar/publicar novo build.
- [ ] Testar consentimento aceito/recusado, páginas vistas e `whatsapp_click` no Tag Assistant, Realtime e DebugView.
- [x] Definir que será usada a conta Google Ads existente via Composio, sem criar outra conta.
- [ ] Corrigir a conexão Composio para expor a conta W&D. Em 16/10/2026, o único cliente consultável era `4090819964` (“ViVa Confeitaria”); `4148821792` não está habilitado; a conta administradora `2696566125` lista somente a ViVa Confeitaria. Nenhuma conta ou campanha foi alterada.
- [ ] Criar a campanha aprovada `PESQ | Sites | São Paulo | 01`, pausada, com orçamento médio de R$ 20/dia, após confirmar nome e ID da conta W&D.
- [ ] Configurar faturamento e vincular GA4 e Google Ads na conta correta antes de qualquer veiculação.
- [ ] Manter `whatsapp_click` como evento-chave secundário inicialmente; só promovê-lo a conversão principal após validar qualidade comercial.

A autenticação Composio está ativa, mas o toolkit Google Ads está ligado ao cliente errado para este projeto: o ID consultável pertence à ViVa Confeitaria e não será usado. É necessário reconectar a conta certa ou conceder acesso ao usuário OAuth atual. A conta GA4 W&D está identificada, mas o token Composio é somente leitura; criar a propriedade requer autorizar o escopo `analytics.edit`. A propriedade existente tem fluxo web de outro domínio e não será reutilizada. O evento `whatsapp_click` confirma a abertura do WhatsApp, não o envio da mensagem nem a qualificação do contato.

## 2. Destino e governança dos leads

- [x] Definir o canal inicial: somente WhatsApp, sem CRM ou armazenamento de leads no site.
- [x] Responsável por conversas e pedidos de privacidade: Danillo Almeida, WhatsApp (11) 98152-7208.
- [x] Prazo de resposta publicado: até 2 horas.
- [x] Retenção definida: conversas mantidas por até 4 meses e informada no aviso de privacidade.
- [x] Razão social confirmada: W&D Soluções Integradas · CNPJ 63.402.907/0001-05.

O site prepara a mensagem, mas a W&D só recebe o conteúdo se a pessoa pressionar “Enviar” no WhatsApp. Integração com CRM/webhook, endpoint e persistência ficam fora do escopo atual. Reabrir apenas se a W&D decidir armazenar os leads além do histórico do WhatsApp; nesse caso, será necessário configurar endpoint HTTPS, CORS restrito, rate limit, validação, deduplicação, logs sem dados sensíveis e a origem em `connect-src`.

## 3. Provas comerciais que só a W&D pode fornecer

- [ ] Autorizações dos clientes para uso de nome, marca, telas e resultados.
- [ ] Depoimentos aprovados, com nome, função, empresa e texto final.
- [ ] Métricas com fonte e período: situação inicial, resultado posterior e como foi medido.
- [ ] Duração real de cada projeto e escopo contratado.
- [ ] Logotipos em formato adequado, somente após autorização.
- [ ] Nomes, funções, fotos e mini-biografias das pessoas que representam a W&D.
- [ ] Certificações, parceiros e credenciais que possam ser comprovados.

Até esses dados existirem, o site usa apenas entregas e resultados qualitativos verificáveis nos próprios produtos.

- [x] Situação informada: ainda não há depoimentos aprovados; nenhum foi inventado ou publicado.

Esses materiais não bloqueiam o site nem a ativação básica. Só publicar nomes, marcas, telas, métricas ou credenciais quando houver evidência e autorização correspondentes.

## 4. Oferta, foco e operação comercial

- [ ] Priorizar os segmentos e serviços com melhor margem, ticket e capacidade de entrega.
- [x] Área geográfica: São Paulo, capital, com foco preferencial na Zona Leste.
- [ ] Definir se o primeiro diagnóstico é gratuito, pago ou condicionado a algum critério.
- [ ] Definir prazo médio de proposta, duração típica por tipo de serviço e formato de suporte pós-entrega.
- [ ] Confirmar canais sociais e perfil do Google Business para inclusão em `sameAs` nos dados estruturados.
- [ ] Definir orçamento, regiões, públicos e limites antes de criar campanhas de mídia.

## 5. Hosting, publicação e validação final

- [x] Confirmar que a hospedagem é Hostinger/Apache e respeita o `.htaccess` publicado.
- [x] Publicar o novo build após revisão do conteúdo.
- [x] Confirmar em produção os headers CSP, HSTS, Permissions-Policy, Referrer-Policy e cache.
- [x] Validar em produção o status HTTP do sitemap, robots.txt, favicon, imagem social e a presença de dados estruturados.
- [ ] Depois de habilitar uma propriedade correta, validar o fluxo: anúncio/UTM → landing page → formulário/clique → abertura do WhatsApp → evento `whatsapp_click` no GA4. O evento mede o clique, não o envio da mensagem; Ads só após conta e ação de conversão aprovadas.

A publicação de 15/10/2026 foi concluída pelo [workflow do GitHub Actions](https://github.com/danilloalmeida-eng/wd-solucoes/actions/runs/38682133992), a partir do commit `83e82a6`. A produção respondeu com HTTP 200 na home, privacidade e landing page de serviço; os headers de segurança foram observados no domínio. Fazer backup antes de uma futura substituição de produção é uma etapa operacional condicional, não uma pendência ativa agora. A integração direta com GA4 só será ativada quando a nova propriedade fornecer o ID `G-...`.

## 6. Otimização contínua após lançamento

- [ ] Após ativar a mensuração correta e acumular tráfego suficiente, analisar desempenho por página/origem antes de concluir o que converte melhor.
- [ ] Planejar testes A/B com hipótese, métrica principal, métrica de proteção, amostra e janela de decisão; não iniciar sem rastreamento confiável.
- [ ] Em rotina mensal, revisar termos de busca, encaminhamentos ao WhatsApp, qualidade comercial e páginas de entrada.
- [ ] Substituir hipóteses de copy por aprendizados de conversas e dados reais, sem publicar alegações sem comprovação.

## Variáveis opcionais para integrações futuras

Nenhuma variável é necessária para o fluxo atual, que encaminha o usuário ao WhatsApp.

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_LEAD_ENDPOINT` só deve voltar a ser considerado se a W&D decidir mudar do fluxo WhatsApp-only para armazenar leads.

## Referências

- [Status da implementação](./STATUS_IMPLEMENTACAO_AUDITORIA.md)
- [Mensuração e recebimento de leads](./MENSURACAO_E_LEADS.md)
- [Auditoria completa](../RELATORIO_AUDITORIA_CONVERSAO_WD.md)

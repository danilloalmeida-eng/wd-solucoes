# Plano de ativação do GA4 e Google Ads

**Atualizado em:** 16 de outubro de 2026
**Modo:** execução solicitada; GA4 e campanha aguardam permissões/acesso corretos
**Escopo inicial recomendado:** geração de contatos para criação de sites comerciais em São Paulo, com foco de mensagem na Zona Leste

## 1. Estado atual e problema

- A conta Google Analytics conectada já possui uma propriedade cujo fluxo web aponta para outro domínio. Ela não será reutilizada.
- A conta Analytics é a da W&D (`accounts/403133078`), mas a conexão Composio atual não tem o escopo de escrita `analytics.edit`. A tentativa de criar a propriedade foi recusada pelo Google com `ACCESS_TOKEN_SCOPE_INSUFFICIENT`; nenhuma propriedade foi criada.
- O site está preparado para integrar o Google Analytics 4 diretamente, sem Google Tag Manager, mas ainda não possui um ID de medição `G-...` em produção.
- A W&D confirmou que já tem conta Google Ads e pediu para usar a conexão Composio existente, sem criar outra conta.
- A conexão Composio atualmente acessível não contém uma conta identificável como W&D: o cliente ativo consultável é `4090819964` (“ViVa Confeitaria”); `4148821792` está desativado/não habilitado; `2696566125` é um administrador cuja única subconta listada é “ViVa Confeitaria”. Nenhuma campanha foi criada ou alterada.
- O único resultado mensurável no site é a abertura do WhatsApp. Esse evento não confirma que a mensagem foi enviada nem que o contato é qualificado.

## 2. Alterações exatas no Google Analytics 4

| Item | Estado atual | Estado proposto |
|---|---|---|
| Conta | Conta Analytics existente da W&D | Manter |
| Propriedade | Nenhuma propriedade válida para o domínio | Criar `W&D Soluções Integradas — Site` |
| Fuso e moeda | Não aplicável | `America/Sao_Paulo` e BRL |
| Fluxo web | O fluxo acessível é de outro domínio | Criar `Site W&D Soluções Integradas` para `https://wedsolucoes.com.br` |
| Instalação | Sem tag ativa | Google tag direta pelo ID `G-...`, carregada apenas após consentimento |
| Medição automática | Não aplicável | Páginas, rolagens e cliques de saída; desativar interação automática de formulários para não duplicar os eventos próprios |
| Retenção | Não aplicável | 14 meses |
| Publicidade | Não aplicável | Google Signals, remarketing e personalização de anúncios desligados no lançamento |
| Evento-chave | Nenhum | Marcar `whatsapp_click` como evento-chave no GA4, identificado como proxy de intenção |

Depois de reconectar o Google Analytics pelo Composio com o escopo de edição, criar a propriedade e o fluxo web. Então, salvar o ID público como secret `NEXT_PUBLIC_GA_MEASUREMENT_ID`, republicar o site e testar o fluxo no Realtime, DebugView e Tag Assistant.

## 3. Conta e campanha Google Ads

### Conta

- Usar a conta existente da W&D acessível via Composio; não criar uma nova conta Google Ads.
- **Bloqueio atual:** o usuário/token conectado ao Composio não expõe uma conta W&D. Não usar a conta `4090819964` (“ViVa Confeitaria”) nem tocar em campanhas de terceiros.
- **Ação para destravar:** reconectar o toolkit Google Ads no Composio com o usuário Google que tenha acesso à conta W&D, ou conceder a esse usuário acesso à conta W&D. Depois, confirmar pelo nome e ID do cliente, moeda BRL e fuso `America/Sao_Paulo` antes de qualquer escrita.
- Perfil esperado: organização, razão social `W&D Soluções Integradas` e CNPJ `63.402.907/0001-05`.
- Responsável operacional: Danillo Almeida, WhatsApp `(11) 98152-7208`.
- A forma de pagamento será inserida pelo titular diretamente no Google; não será solicitada nem armazenada no projeto.

### Campanha inicial

| Configuração | Proposta |
|---|---|
| Nome | `PESQ | Sites | São Paulo | 01` |
| Status de criação | Pausada até validação final e nova confirmação para ativar |
| Objetivo | Visitas qualificadas e abertura do WhatsApp para orçamento de site |
| Tipo | Pesquisa |
| Redes | Apenas Pesquisa Google; parceiros de pesquisa e Display desligados |
| Localização | Município de São Paulo |
| Opção avançada | Presença: pessoas que estão ou costumam estar na região segmentada |
| Foco local | Zona Leste na mensagem e nas palavras-chave, sem excluir o restante da capital |
| Idioma | Português |
| Programação | Segunda a sexta, 08h–20h; sábado, 09h–13h; domingo desligado |
| Dispositivos | Todos, sem ajuste inicial |
| Lance | Maximizar cliques, com limite inicial de CPC de R$ 8,00 como hipótese de controle |
| Orçamento médio diário | R$ 20,00 (definido pelo titular em 16/10/2026) |
| Limite mensal de cobrança | R$ 608,00 (R$ 20 × 30,4, para a maioria das campanhas) |
| URL final principal | `https://wedsolucoes.com.br/solucoes/site-comercial/` |
| URL final automotiva | `https://wedsolucoes.com.br/solucoes/solucoes-automotivas/` |
| Conversão | `whatsapp_click` importada como secundária no Google Ads; não usada para lance até validar qualidade |
| Marcação | Marcação automática ligada e UTMs no sufixo da URL final |

O Google pode concentrar até duas vezes o orçamento médio diário em um dia (até R$ 40 em um dia de maior tráfego); para a maioria das campanhas, o limite mensal permanece em 30,4 vezes o orçamento médio diário. Fonte: [limites de gasto do Google Ads](https://support.google.com/google-ads/answer/10486637/about-spending-limits). A campanha será criada pausada e não poderá veicular nem consumir orçamento até validação e ativação autorizada.

### Grupos e palavras-chave

#### Grupo `Sites para empresas`

- `[criação de site são paulo]`
- `"criação de sites são paulo"`
- `[empresa de criação de sites]`
- `"site profissional para empresa"`
- `"desenvolvimento de site institucional"`
- `[criação de site zona leste]`

#### Grupo `Sites automotivos`

- `"site para oficina mecânica"`
- `[site para revenda de carros]`
- `"criação de site automotivo"`
- `"sistema para oficina mecânica"`
- `[site para loja de carros]`

#### Negativas iniciais

`grátis`, `gratuito`, `curso`, `aula`, `faculdade`, `vaga`, `emprego`, `salário`, `template`, `tema`, `download`, `como fazer`, `tutorial`, `pdf`, `gerador`, `login` e `suporte wix`.

### Anúncio responsivo principal

Títulos previstos:

1. Criação de Sites em SP
2. Site Profissional para Vender
3. Sites para Empresas
4. Atendimento na Zona Leste
5. Site Rápido e Responsivo
6. Projeto com Estratégia
7. SEO Técnico Incluído
8. Transforme Visitas em Contatos
9. Mostre Melhor Seu Negócio
10. Fale Direto no WhatsApp
11. Site Sob Medida para Sua Marca
12. W&D Soluções Integradas
13. Portfólio Real de Projetos
14. Experiência em Vários Setores
15. Comece com um Diagnóstico

Descrições previstas:

1. Criamos sites comerciais com estratégia, design responsivo, SEO técnico e contato claro.
2. Atendimento em São Paulo, com foco na Zona Leste. Converse direto com a W&D.
3. Apresente serviços, portfólio e diferenciais com clareza em celular e computador.
4. Conte seu objetivo pelo WhatsApp e receba uma avaliação do melhor próximo passo.

Ativos previstos:

- Sitelinks: Projetos, Como trabalhamos, Soluções automotivas e Fale no WhatsApp.
- Frases de destaque: `SEO técnico`, `Site responsivo`, `Foco em conversão` e `Atendimento em São Paulo`.
- Snippet de serviços: sites comerciais, landing pages, portais de estoque e integrações.
- Ativo de chamada: `(11) 98152-7208`, sujeito à verificação do Google.

Sufixo de URL final:

```text
utm_source=google&utm_medium=cpc&utm_campaign=pesq_sites_sp&utm_content={adgroupid}-{creative}&utm_term={keyword}
```

## 4. Benefício esperado, riscos e validação

Benefício esperado: começar com uma oferta de busca clara e duas páginas coerentes com a intenção, evitando diluir o orçamento entre todos os serviços da W&D antes de existir histórico real.

Riscos:

- o CPC real pode tornar o orçamento insuficiente ou reduzir o volume;
- `whatsapp_click` pode superestimar contatos, pois não confirma envio;
- termos genéricos podem atrair estudantes, fornecedores ou pessoas procurando soluções gratuitas;
- a preferência pela Zona Leste será uma mensagem comercial, não uma garantia de que todo clique virá dessa sub-região;
- a ausência de depoimentos e métricas limita prova social, mas não impede o teste inicial.

Métricas de validação nas primeiras duas semanas:

- impressões, cliques, CTR e CPC médio;
- termos de pesquisa e aderência à intenção de contratação;
- cliques no WhatsApp e taxa `whatsapp_click ÷ cliques`;
- conversas efetivamente recebidas e contatos qualificados, anotados por Danillo;
- custo por conversa recebida e custo por contato qualificado, calculados manualmente;
- desempenho por grupo, palavra-chave, horário, dispositivo e região.

Não haverá promessa de posição, volume de contatos, CPA ou vendas. O titular autorizou uma campanha separada com orçamento médio de R$ 20/dia, sem alterar outras campanhas. A criação continua pendente da identificação da conta W&D correta no Composio; depois, validar o estado pausado, o orçamento, o alvo geográfico e os demais parâmetros antes de qualquer ativação.

## 5. Reversão e itens fora do escopo

Reversão:

- manter a campanha pausada ou pausá-la a qualquer momento;
- remover o secret `NEXT_PUBLIC_GA_MEASUREMENT_ID` e republicar para desligar a tag;
- desmarcar o evento-chave ou desvincular GA4 e Google Ads;
- preservar a propriedade e o histórico para auditoria, sem excluir dados automaticamente.

Não serão alterados:

- as propriedades GA4 de outros sites;
- as campanhas, orçamentos e anúncios das contas já existentes;
- faturamento sem ação direta do titular;
- CRM, banco de dados ou armazenamento de leads;
- remarketing, públicos personalizados, listas de clientes ou personalização de anúncios;
- Meta Ads ou outras plataformas.

## 6. Ações necessárias do titular

1. **Destravar Google Ads:** reconectar o Composio com a conta W&D correta ou conceder acesso ao usuário Google já conectado. O acesso atual aponta para a ViVa Confeitaria e não será usado.
2. Inserir a forma de pagamento diretamente no Google quando a conta correta solicitar.
3. GA4: criar/indicar uma propriedade e fluxo exclusivos para `wedsolucoes.com.br` e fornecer o ID `G-...`; a propriedade disponível aponta para outro domínio e não será reutilizada.

Definições operacionais já confirmadas e aplicadas ao site/documentação: resposta em até 2 horas; conversas mantidas por até 4 meses. Para concluir o trabalho externo, são necessárias duas correções de acesso: escopo de edição no Analytics e a conta W&D no toolkit Google Ads do Composio.

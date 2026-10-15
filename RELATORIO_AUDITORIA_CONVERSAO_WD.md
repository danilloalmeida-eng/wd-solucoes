# Auditoria de conversão — W&D Soluções Integradas

**Data:** 12 de outubro de 2026\
**Escopo:** site publicado, código-fonte do GitHub, responsividade, arquitetura de conversão, copy, prova social, SEO, acessibilidade, performance e segurança técnica.\
**Site:** https://wedsolucoes.com.br/\
**Repositório analisado:** `danilloalmeida-eng/wd-solucoes` (`main`)

## 1. Resumo executivo

O site tem uma base visual muito boa: parece mais sofisticado do que a média das pequenas agências e software houses, funciona bem em desktop e mobile, comunica amplitude técnica e apresenta projetos reais com boa qualidade gráfica. A home tem hierarquia clara, o botão de diagnóstico é recorrente, o WhatsApp permanece acessível e a performance de laboratório é forte.

O principal limitador de conversão não é design. É a ausência de uma camada comercial e de mensuração equivalente à qualidade visual.

Hoje existem cinco problemas centrais:

1. **Não há mensuração de conversão.** Não foram encontrados GA4, Google Tag Manager, tag do Google Ads, Meta Pixel, Clarity/Hotjar ou eventos próprios. A W&D não consegue saber qual página, CTA, case ou intenção gera conversas.
2. **Os CTAs segmentados perdem o contexto.** Links como `?interesse=gerar-demanda` chegam à página de contato, mas o formulário ignora o parâmetro e mantém o seletor vazio.
3. **A proposta de valor é ampla demais para decisão rápida.** “Tecnologia sob medida” é elegante, mas o visitante ainda precisa interpretar sozinho se a W&D é a melhor opção para o problema dele.
4. **Os cases provam capacidade visual, mas não resultado de negócio.** Faltam números, depoimentos, antes/depois, escopo, prazo e efeito comercial ou operacional.
5. **As páginas internas têm uma falha visual no desktop e pouca conversão acima da dobra.** Em Soluções e IA & Automação, o texto de apoio encosta ou se sobrepõe ao título. Também não há CTA principal no primeiro viewport.

### Avaliação heurística

> As notas abaixo são uma avaliação de prontidão para conversão, não uma taxa de conversão observada. Sem analytics, não existe base quantitativa para medir o funil atual.

| Dimensão | Nota | Diagnóstico |
|---|---:|---|
| Identidade visual e percepção premium | 8,8/10 | Diferenciada, consistente e profissional |
| Responsividade | 8,5/10 | Mobile forte; poucos problemas de sobreposição e densidade |
| Performance | 9,2/10 | Lighthouse mobile 96; LCP 2,0 s; CLS 0 |
| Clareza da oferta | 6,3/10 | Ampla, mas pouco específica quanto a ICP, prioridade e resultado |
| Prova social | 5,2/10 | Bons projetos visuais; faltam resultados e voz do cliente |
| Captação de lead | 4,4/10 | Baixa fricção, porém dependente do WhatsApp e sem persistência |
| Mensuração e atribuição | 1,0/10 | Não há instrumentação detectável |
| SEO técnico | 7,8/10 | Base correta; faltam dados estruturados e páginas de intenção alta |
| Acessibilidade | 8,0/10 | Lighthouse 96; contraste falha em trechos importantes |
| **Prontidão geral para conversão** | **5,9/10** | Base excelente, funil ainda imaturo |

## 2. O que já está muito bom

### Visual e marca

- A paleta escura com azul e tons quentes transmite tecnologia sem parecer genérica.
- Tipografia, espaçamento, cards e mockups criam percepção premium.
- A home alterna fundos claros e escuros com boa cadência visual.
- O layout dos cases é o elemento mais convincente do site.
- O menu fixo e o CTA persistente mantêm a ação principal disponível.
- No mobile, os botões principais ocupam toda a largura e são fáceis de tocar.

### Estrutura de conteúdo

- A home segue uma sequência coerente: proposta → caminhos de problema → projetos → soluções → IA → processo → FAQ → CTA.
- A seção “Qual resultado seu negócio precisa destravar primeiro?” é uma boa ideia de segmentação por intenção.
- O FAQ reduz algumas objeções e explica que a W&D não trabalha somente com sites.
- Os cases têm páginas individuais, URLs canônicas e navegação para o próximo projeto.

### Base técnica

- O projeto compila sem erros em Next.js 16.2.6.
- As 16 rotas são geradas estaticamente.
- Existem `robots.txt`, `sitemap.xml`, canonical, metadata e Open Graph.
- Todos os cinco projetos externos estavam online e retornaram HTTP 200 no momento da auditoria.
- Lighthouse mobile da home:

| Categoria | Resultado |
|---|---:|
| Performance | 96 |
| Acessibilidade | 96 |
| Boas práticas | 96 |
| SEO | 100 |

| Métrica | Resultado |
|---|---:|
| FCP | 1,3 s |
| LCP | 2,0 s |
| Speed Index | 1,9 s |
| TBT | 210 ms |
| CLS | 0 |
| Resposta inicial | 10 ms |

Conclusão: **performance não é o gargalo principal de conversão**. É importante corrigir os pontos restantes, mas o maior retorno virá do funil, da prova e da mensuração.

## 3. Achados críticos — prioridade P0

### P0.1 — Instrumentar o funil antes de redesenhar

**Evidência:** não existem scripts ou referências a GA4, GTM, Google Ads, Meta Pixel, Clarity/Hotjar, `dataLayer`, UTMs, `gclid` ou `fbclid` no código ou no site publicado.

Sem essa camada, qualquer mudança de copy ou layout será opinião. Não será possível saber:

- qual CTA foi clicado;
- qual intenção trouxe o lead;
- qual case antecedeu a conversão;
- quantas pessoas começaram e abandonaram o formulário;
- quantas abriram o WhatsApp, telefonaram ou enviaram mensagem;
- qual campanha ou palavra-chave originou o contato;
- quais leads viraram reunião, proposta e venda.

**Implementação mínima recomendada:**

1. Google Analytics 4 com a tag do Google instalada diretamente no site, sem Google Tag Manager nesta fase.
2. GA4 com eventos próprios.
3. Google Ads com conversões separadas para lead real, clique no WhatsApp e clique no telefone.
4. Meta Pixel apenas se houver ou houver previsão de mídia na Meta.
5. Consentimento e política de privacidade compatíveis com a coleta adotada.
6. CRM ou planilha central para marcar lead qualificado, reunião, proposta e venda.
7. Importação de conversões offline para Google Ads quando houver volume e processo comercial estável.

**Eventos sugeridos:**

| Evento | Quando dispara | Parâmetros essenciais |
|---|---|---|
| `cta_click` | Qualquer CTA comercial | `cta_text`, `cta_position`, `page_path`, `intent` |
| `view_case` | Entrada em um case | `case_slug`, `source_page` |
| `form_start` | Primeiro foco no formulário | `page_path`, `intent`, `utm_*` |
| `lead_submit` | Lead persistido com sucesso | `lead_id`, `intent`, `source_page` |
| `whatsapp_click` | Abertura do WhatsApp | `placement`, `intent`, `case_slug` |
| `phone_click` | Clique no telefone | `placement`, `page_path` |
| `qualified_lead` | Qualificação no CRM | `lead_id`, `service`, `origin` |
| `meeting_booked` | Reunião confirmada | `lead_id`, `service`, `origin` |
| `sale` | Venda confirmada | `lead_id`, `service`, `value` |

**KPI principal:** leads qualificados / sessões únicas.\
**Não usar como KPI principal:** cliques no WhatsApp. Esse é apenas um microevento.

### P0.2 — Corrigir a perda do parâmetro `interesse`

**Evidência no código:**

- `app/page.js` envia `gerar-demanda`, `organizar-vendas` e `automatizar`.
- `app/solucoes/page.js` envia o título da frente ou `solucao-completa`.
- `app/ia-automacao/page.js` envia `crm-automacao`.
- `components/ContactForm.js` sempre inicia com `defaultValue=""` e não lê `searchParams`.

**Evidência no site publicado:** em `/contato/?interesse=gerar-demanda`, o seletor permaneceu em “Selecione uma opção”.

Isso quebra a promessa do “diagnóstico em 1 minuto” e força o visitante a repetir uma escolha já feita.

**Correção recomendada:**

- criar um mapa de valores canônicos para cada intenção;
- ler o parâmetro na página de contato;
- pré-selecionar a opção correta;
- adaptar título, texto e mensagem do WhatsApp à intenção;
- preservar `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `gclid` e `fbclid`;
- incluir página e CTA de origem na mensagem enviada ao CRM e ao WhatsApp.

Exemplo de contexto enviado:

> Interesse: organizar vendas e atendimento\
> Origem: home / diagnóstico 01 minuto\
> Campanha: google / cpc / crm-pme\
> Página anterior: case AutoGestão Oficina

### P0.3 — Persistir o lead antes de abrir o WhatsApp

O formulário atual apenas executa `window.open()` para o WhatsApp. Se a pessoa fechar a aba, tiver bloqueio de pop-up ou não enviar a mensagem, a W&D perde todo o contexto preenchido.

**Recomendação:**

1. Salvar o lead em CRM, endpoint ou banco antes do redirecionamento.
2. Gerar um `lead_id`.
3. Disparar `lead_submit` somente após sucesso do servidor.
4. Abrir o WhatsApp com a mensagem pronta e o `lead_id`.
5. Exibir um fallback visível: “O WhatsApp não abriu? Clique aqui”.
6. Informar expectativa de retorno: “Respondemos em até X horas úteis”, se isso for operacionalmente verdadeiro.

Uma alternativa de menor fricção é pedir somente:

- nome;
- WhatsApp;
- objetivo já pré-selecionado.

Empresa e mensagem podem ser opcionais ou aparecer em uma segunda etapa. Testar em vez de assumir.

### P0.4 — Corrigir a sobreposição nas páginas internas

Nas páginas **Soluções** e **IA & Automação**, em desktop, o parágrafo de apoio encosta e visualmente se sobrepõe ao final do H1. A combinação responsável é o H1 muito grande, `line-height: .88` e `.split-page__lead { margin: 0; }`.

**Impacto:** o primeiro viewport — a área mais importante da página — parece quebrado e reduz percepção de acabamento.

**Correção:**

- adicionar margem superior ao lead;
- limitar a largura e/ou o tamanho máximo do H1 nesses templates;
- revisar o breakpoint entre 1024 e 1440 px;
- validar Soluções, IA, Processo e Sobre em 1280×720, 1366×768 e 1440×900.

### P0.5 — Atualizar dependências vulneráveis

O build passou, mas `npm audit` encontrou **6 vulnerabilidades: 1 moderada, 4 altas e 1 crítica**. O pacote direto `next@16.2.6` concentra o alerta crítico. O próprio audit indicou `next@16.4.0` como correção sem mudança major.

Como o site é exportado estaticamente, várias falhas de servidor têm exposição limitada na produção atual. Ainda assim, a atualização é necessária para build, desenvolvimento local e futuras mudanças de arquitetura.

**Ação:** atualizar Next.js para 16.4.0 e React/React DOM para 19.3.0, rodar build, audit e regressão visual.

## 4. Achados de alto impacto — prioridade P1

### P1.1 — Tornar a proposta de valor mais específica

O H1 atual comunica qualidade, mas não diz com precisão:

- para quem a W&D é ideal;
- qual resultado prioritário entrega;
- por que escolher a W&D em vez de uma agência, freelancer ou software house;
- qual problema concreto é resolvido primeiro.

O site oferece sites, mídia, conteúdo, CRM, sistemas, IA, e-commerce, dashboards e integrações. Essa amplitude é uma força operacional, mas pode parecer falta de foco comercial.

**Direção recomendada:** posicionar a W&D como integradora da operação comercial digital, com três portas de entrada:

1. Gerar demanda.
2. Organizar vendas e atendimento.
3. Automatizar a operação.

Essas portas já existem na home. O trabalho é fazê-las dominar a mensagem, persistir até o contato e ter páginas/ofertas específicas.

**Exemplo de hipótese de copy — não publicar sem validar:**

> **Mais demanda. Menos trabalho manual. Uma operação conectada para crescer.**\
> A W&D cria e integra site, mídia, CRM, automações e IA para empresas que já não querem perder leads nem operar no improviso.

CTA: **Mapear meu gargalo**\
Secundário: **Ver resultados em clientes**

### P1.2 — Trocar “projetos bonitos” por cases de resultado

Os cases são a melhor prova do site, mas descrevem funcionalidade, não consequência.

Cada case deveria responder:

1. Qual era a situação anterior?
2. Qual métrica ou gargalo importava?
3. O que a W&D fez?
4. Quanto tempo levou?
5. Qual foi o resultado?
6. O que o cliente disse?

**Campos sugeridos em `lib/projects.js`:**

- `clientProfile`
- `challengeMetric`
- `scope`
- `duration`
- `results[]`
- `testimonial`
- `testimonialAuthor`
- `testimonialRole`
- `stack[]`
- `services[]`

Se não houver métricas comerciais confiáveis, usar resultados operacionais verificáveis, por exemplo:

- número de etapas manuais eliminadas;
- tempo de atendimento reduzido;
- quantidade de produtos/veículos gerenciados;
- páginas ou integrações entregues;
- melhoria de Lighthouse;
- centralização de dados antes espalhados.

Não inventar percentuais. Um número verificável vale mais do que uma promessa forte.

### P1.3 — Inserir prova social logo abaixo do hero

A faixa atual logo abaixo do hero lista capacidades, mas não é prova. Substituir ou complementar com sinais verificáveis:

- logos de clientes autorizados;
- “5 projetos em produção” — apenas enquanto esse número for mantido;
- setores atendidos;
- mini depoimento com nome e empresa;
- um resultado concreto de case;
- cidade e formato de atendimento.

Isso deve aparecer antes da seção longa de projetos.

### P1.4 — Adicionar CTA e prova no primeiro viewport das páginas de serviço

Soluções e IA & Automação começam com um manifesto visual, mas não oferecem ação direta no primeiro viewport. O primeiro CTA específico aparece muito mais abaixo.

Adicionar no hero:

- CTA alinhado ao serviço;
- uma frase sobre para quem é;
- um case relacionado;
- um resultado ou depoimento curto;
- alternativa “Ver como funciona”.

Exemplo para IA:

> **Mapear onde a automação gera retorno**\
> Para equipes que perdem tempo com triagem, follow-up, atualização de CRM ou consolidação de dados.

### P1.5 — Explicar o que acontece após o CTA

“Solicitar diagnóstico” é repetido muitas vezes, mas o visitante não sabe:

- se é gratuito;
- quanto dura;
- se é reunião, mensagem ou questionário;
- quando receberá retorno;
- quem participa;
- qual é o entregável.

Adicionar uma microcopy próxima ao CTA e na página de contato:

1. Você envia o contexto.
2. A W&D responde em até X horas úteis.
3. Fazemos uma conversa de X minutos.
4. Você recebe uma recomendação inicial e os próximos passos.

Usar somente prazos que a operação consiga cumprir.

### P1.6 — Criar páginas de alta intenção

As páginas atuais são institucionais e amplas. Criar páginas específicas para os problemas com maior demanda e margem:

- criação de site comercial integrado ao WhatsApp/CRM;
- gestão de tráfego com landing page e tracking;
- CRM e automação comercial para PMEs;
- agente SDR com IA;
- dashboard e integração de dados;
- solução digital para negócios automotivos;
- automação para e-commerce e marketplaces.

Cada landing page precisa ter:

- problema específico;
- público ideal;
- entregáveis;
- case relacionado;
- processo;
- objeções;
- CTA único;
- prova;
- metadata e conteúdo próprios.

Evitar páginas duplicadas ou SEO artificial.

## 5. Melhorias importantes — prioridade P2

### SEO e compartilhamento

- Adicionar `Organization` em JSON-LD com nome, URL, logo, telefone, área atendida e perfis oficiais.
- Criar favicon e manifest. Hoje `/favicon.ico` retorna 404 e gera erro no console.
- Gerar Open Graph em PNG/JPG 1200×630. O site usa SVG; diversas plataformas têm suporte inconsistente.
- Incluir marca no título da home, por exemplo: “Tecnologia sob medida para negócios que querem avançar | W&D”.
- No sitemap, usar data real de atualização. Hoje todas as URLs recebem `new Date()` a cada build.
- Criar metadata social específica para cada case com imagem dimensionada corretamente.
- Avaliar páginas locais somente se São Paulo for comercialmente prioritário.

### Acessibilidade

O Lighthouse encontrou contraste insuficiente em vários textos azuis/dourados sobre o fundo claro, incluindo:

- “Prova antes da promessa”;
- “Ver todos os projetos”;
- eyebrows dos cases;
- links “Ver case”;
- seção de processo.

Alguns contrastes ficaram entre 2,77:1 e 4,44:1, abaixo do mínimo de 4,5:1 para texto normal.

Também é recomendável:

- adicionar link “Pular para o conteúdo”;
- garantir foco visível consistente em todos os links e botões;
- fechar o menu mobile com Escape;
- bloquear o scroll do conteúdo enquanto o menu mobile estiver aberto;
- testar navegação somente por teclado.

### Imagens e carregamento

O Lighthouse estimou economia de aproximadamente 56 KiB na home com imagens responsivas. As imagens não têm `width` e `height` explícitos.

Recomendações:

- usar `next/image` com dimensões conhecidas, mesmo com `unoptimized` no export estático; ou `<picture>` com WebP/AVIF;
- gerar versões menores dos mockups de celular;
- definir `width`, `height`, `sizes` e carregamento prioritário somente para a imagem realmente acima da dobra;
- configurar cache `immutable` para assets versionados do Next;
- remover quatro imagens grandes não referenciadas (`public/images/*`) e capturas não utilizadas, após confirmar que não fazem parte de outro fluxo;
- não versionar `out.zip`; gerar o pacote no processo de deploy.

### Segurança e headers

O servidor publica apenas `Content-Security-Policy: upgrade-insecure-requests`. Não foram observados HSTS, `X-Content-Type-Options`, `Referrer-Policy` ou `Permissions-Policy`.

Adicionar, conforme compatibilidade da Hostinger:

- `Strict-Transport-Security`;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy` restritiva;
- CSP explícita quando analytics e integrações estiverem definidos.

### Manutenibilidade

- Centralizar telefone, URL do WhatsApp, mensagens e dados da empresa em um arquivo de configuração.
- Centralizar o catálogo de intenções em vez de espalhar strings por várias páginas.
- Criar um componente único para CTA com tracking.
- Quebrar `app/globals.css` em blocos ou módulos por página/componente.
- Substituir o README padrão do Create Next App por instruções reais de build, deploy, tracking e atualização de conteúdo.
- Remover `out.zip` do versionamento e documentar um deploy reproduzível.

## 6. Análise por página

### Home

**Pontos fortes:** excelente impacto visual, boa hierarquia, CTAs claros, cases cedo, ótima versão mobile.\
**Problemas:** proposta ampla, prova real só aparece depois da dobra, “diagnóstico em 1 minuto” perde contexto, página muito longa sem métricas, cards de solução não são clicáveis na home.\
**Ação:** posicionamento mais específico, prova logo após o hero, links nas frentes de solução, contexto persistente e tracking.

### Projetos e cases

**Pontos fortes:** melhor seção do site; mockups fortes; páginas externas funcionando.\
**Problemas:** textos genéricos, ausência de números e depoimentos, todos os cases terminam na mesma promessa. O case Moraes Multimarcas aponta para um subdomínio genérico da Hostinger, o que reduz levemente a percepção de maturidade.\
**Ação:** adicionar resultados, escopo, prazo, depoimento, serviços usados e CTA contextualizado.

### Soluções

**Pontos fortes:** organiza bem a amplitude dos serviços.\
**Problemas:** hero com sobreposição visual, nenhuma ação principal acima da dobra, cards muito descritivos e sem prova correspondente.\
**Ação:** corrigir layout, inserir CTA e associar cada frente a um case e a um resultado.

### IA & Automação

**Pontos fortes:** fluxo visual explica a integração.\
**Problemas:** hero sobreposto, promessa ainda abstrata, CTA aparece tarde, faltam exemplos concretos de automações com entrada, regra, saída e resultado.\
**Ação:** usar três casos de uso concretos e qualificados; CTA acima da dobra; mostrar integração real ou mini demo.

### Processo

**Pontos fortes:** transmite método e reduz risco.\
**Problemas:** não explica prazos, marcos de aprovação, comunicação, suporte ou o que o cliente recebe em cada etapa.\
**Ação:** transformar etapas em entregáveis claros e adicionar faixa de prazo por tipo de projeto, quando possível.

### Sobre

**Pontos fortes:** mensagem coerente com o posicionamento consultivo.\
**Problemas:** não mostra pessoas, fundadores, experiência, localização detalhada, parceiros ou credenciais. Para serviços de ticket relevante, isso reduz confiança.\
**Ação:** adicionar quem está por trás, experiência verificável, como trabalham e sinais reais de autoridade.

### Contato

**Pontos fortes:** simples, visualmente bom, poucos campos, formulário visível na primeira dobra do desktop.\
**Problemas:** interesse não é pré-preenchido; lead não é salvo; não há e-mail/WhatsApp capturado; não há SLA, política de privacidade, consentimento ou prova próxima ao formulário; não há mensuração.\
**Ação:** implementar captação persistente, contexto, tracking, confiança e fallback.

## 7. Arquitetura do código e gargalo do funil

O mapa do projeto mostra uma arquitetura simples e adequada:

```text
RootLayout
├── Navbar
├── páginas
│   ├── Home → ProjectPreview
│   ├── Projetos → ProjectPreview
│   ├── Case dinâmico → CaseTemplate → ProjectPreview
│   └── Contato → ContactForm → WhatsApp
├── Footer
└── WhatsAppFab
```

O ponto mais importante é o último trecho: **toda a conversão converge para um único componente, `ContactForm`, e esse componente não persiste dados nem recebe contexto**. Isso torna uma correção pequena potencialmente muito valiosa.

O grafo gerado contém 105 nós, 120 arestas e 23 comunidades. Houve aviso de quatro arestas com endpoint pendente e sete imagens omitidas pela extração semântica; o grafo foi usado como mapa estrutural, e todas as conclusões críticas foram confirmadas diretamente no código e no site publicado.

## 8. Backlog priorizado

| Prioridade | Ação | Impacto | Esforço |
|---|---|---:|---:|
| P0 | Instalar GA4 direto e eventos de conversão | Muito alto | Médio |
| P0 | Corrigir e preservar `interesse`/UTMs | Muito alto | Baixo |
| P0 | Salvar lead antes do WhatsApp | Muito alto | Médio |
| P0 | Corrigir sobreposição dos heros internos | Alto | Baixo |
| P0 | Atualizar Next/React e zerar vulnerabilidades críticas | Alto | Baixo–médio |
| P1 | Transformar cases em prova de resultado | Muito alto | Médio |
| P1 | Especificar ICP e promessa principal | Muito alto | Médio |
| P1 | Colocar prova social após o hero | Alto | Médio |
| P1 | CTA e case acima da dobra em Soluções/IA | Alto | Baixo |
| P1 | Explicar diagnóstico, prazo e próximo passo | Alto | Baixo |
| P1 | Criar landing pages de alta intenção | Alto | Alto |
| P2 | JSON-LD, favicon e OG PNG | Médio | Baixo |
| P2 | Corrigir contraste e foco | Médio | Baixo |
| P2 | Imagens responsivas e cache | Médio | Médio |
| P2 | Headers de segurança | Médio | Baixo |
| P2 | Limpar assets, `out.zip` e README | Baixo | Baixo |

## 9. Plano de 30/60/90 dias

### Primeiros 30 dias — fundação e correções rápidas

1. Instalar mensuração completa.
2. Corrigir interesse, UTMs e contexto.
3. Persistir leads antes do WhatsApp.
4. Corrigir os heros internos.
5. Atualizar dependências.
6. Resolver favicon, contraste e dimensões de imagem.
7. Definir o que conta como lead qualificado.
8. Criar dashboard simples: sessões → CTA → formulário → WhatsApp → qualificado → reunião → venda.

### 31–60 dias — prova e oferta

1. Entrevistar 3–5 clientes.
2. Reescrever os melhores cases com resultados.
3. Adicionar depoimentos e prova acima da dobra.
4. Definir a oferta principal e três portas de entrada.
5. Reescrever hero, microcopy e página de contato.
6. Criar uma landing page para a intenção com maior demanda/margem.

### 61–90 dias — experimentação

1. Rodar teste de hero atual vs. hero orientado a resultado.
2. Testar formulário direto vs. formulário em duas etapas.
3. Testar CTA “Solicitar diagnóstico” vs. “Mapear meu gargalo”.
4. Testar case quantitativo perto do hero.
5. Criar landing pages adicionais somente a partir de dados de busca, mídia e CRM.
6. Conectar leads qualificados e vendas às campanhas.

## 10. Hipóteses de teste

| Hipótese | Variante | Métrica de decisão |
|---|---|---|
| Resultado explícito converte melhor que abstração | Hero orientado a demanda/eficiência | Lead qualificado / sessão |
| Prova precoce reduz incerteza | Depoimento e resultado abaixo do hero | CTA → formulário |
| Contexto preservado reduz abandono | Select pré-preenchido e copy dinâmica | Form start → lead submit |
| Menos campos aumenta volume | Nome + WhatsApp + intenção | Leads e taxa de qualificação |
| Transparência melhora qualidade | Explicar prazo e próximo passo | Qualificados / leads |
| Case relacionado aumenta intenção | Case automotivo/IA por landing page | CTA e lead qualificado |

Não encerrar testes apenas com cliques. A decisão deve usar lead qualificado e, quando possível, proposta e venda.

## 11. Fontes e evidências

- [Home da W&D](https://wedsolucoes.com.br/)
- [Página de soluções](https://wedsolucoes.com.br/solucoes/)
- [Página de contato](https://wedsolucoes.com.br/contato/)
- [Documentação oficial do Google sobre conversões em cliques](https://support.google.com/google-ads/answer/6331304/track-clicks-on-your-website-as-conversions)
- [Documentação oficial do Google sobre Google tag](https://support.google.com/google-ads/answer/2476688)
- [Documentação oficial do Google sobre Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)

## 12. Conclusão

O site não precisa de uma reconstrução visual. A direção estética é boa e deve ser preservada. A maior oportunidade está em conectar quatro camadas que hoje estão separadas:

```text
PROMESSA ESPECÍFICA
        ↓
PROVA DE RESULTADO
        ↓
CAPTAÇÃO COM CONTEXTO
        ↓
MENSURAÇÃO ATÉ A VENDA
```

Se a W&D corrigir primeiro mensuração, persistência de contexto, prova quantitativa e clareza de oferta, o site tende a gerar não apenas mais contatos, mas contatos mais qualificados — sem perder a identidade premium que já funciona bem.

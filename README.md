# W&D Soluções Integradas

Site institucional e comercial da W&D, construído com Next.js e exportação estática. A experiência conecta portfólio, páginas de serviço, captação com atribuição, consentimento e preparação para GA4/GTM.

## Desenvolvimento

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Rotinas de validação:

```bash
npm test
npm run assets:generate
npm run build
npm run test:export
npm audit
```

O build estático é criado em `.next-build/`. O projeto usa `output: 'export'`; por isso não depende de servidor Node em produção.

## Estrutura principal

- `app/`: rotas, metadados, manifesto, sitemap e estilos.
- `app/solucoes/[slug]/`: landing pages estáticas de alta intenção.
- `components/`: navegação, formulário, analytics e componentes de cases.
- `lib/projects.js`: fonte única dos cases e evidências apresentadas.
- `lib/services.js`: fonte única das landing pages de serviço.
- `lib/site-config.js`: telefone, domínio e dados institucionais compartilhados.
- `scripts/`: testes de conteúdo/conversão e geração dos ativos sociais.
- `docs/`: mensuração, status e dependências de ativação.

## Variáveis públicas de build

Copie `.env.example` para `.env.local` quando as integrações estiverem disponíveis:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_LEAD_ENDPOINT=https://endpoint.exemplo.com/leads
```

Esses valores são incorporados ao JavaScript do navegador. Nunca use segredos privados nessas variáveis.

Sem `NEXT_PUBLIC_LEAD_ENDPOINT`, o formulário encaminha o contexto ao WhatsApp e não dispara a conversão final `lead_submit`. Sem `NEXT_PUBLIC_GTM_ID`, o site funciona normalmente, mas o contêiner de mensuração não é carregado.

## Publicação e segurança

Os workflows em `.github/workflows/` constroem o site e publicam o conteúdo estático. O arquivo `public/.htaccess` adiciona headers de segurança e cache em hospedagem Apache/Hostinger. Se o endpoint de leads estiver em outro domínio, inclua essa origem em `connect-src` na política CSP antes da ativação.

O deploy não deve ser considerado validado até conferir headers, consentimento, eventos e recebimento de um lead no ambiente de produção.

## Conteúdo verificável

Não publicar métricas, depoimentos, logotipos ou credenciais sem evidência e autorização. As pendências que exigem informação ou acesso externo estão em [docs/PENDENCIAS_ATIVACAO_CONVERSAO.md](docs/PENDENCIAS_ATIVACAO_CONVERSAO.md).

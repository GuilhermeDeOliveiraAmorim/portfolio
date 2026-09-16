---
name: revisao-projeto
description: Roda uma auditoria do estado atual do portfólio (estrutura, gaps, bugs, conteúdo hardcoded/de exemplo e pontos de melhoria) e consolida os achados em documentação versionada no repositório. Use quando o usuário pedir para "revisar o projeto", "analisar o estado do código", "levantar dívida técnica", "documentar o estado do projeto" ou equivalente.
---

# Revisão de projeto — auditoria e documentação do estado atual

Esta skill é executada diretamente pela coordenação (sessão principal), sem delegar a um agente do conselho: ela cruza todas as áreas (código, conteúdo, acessibilidade) e seu produto é diagnóstico, não implementação. Nenhuma correção é feita durante a execução desta skill, ela apenas levanta, avalia e documenta. Toda comunicação é em PT-BR.

## 1. Levantamento estrutural

- Mapear a árvore do projeto: `src/app/` (seções da home, `layout.tsx`, `resume-details/`, `api/sendmail/route.ts`), `src/components/` (navbar, footer, cards), `src/data/` (`experience.ts`, `resume.ts`), configs na raiz (`package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.js`, `.eslintrc.json`, `.github/workflows/nextjs.yml`).
- Rodar checagens reais em vez de supor: `pnpm install`, `pnpm lint`, `pnpm build` (o build de produção falhando é o sinal mais forte de regressão, já que não há suíte de testes automatizados no projeto). Reportar os erros/avisos efetivos, não hipóteses.
- Conferir dependências declaradas em `package.json` vs. de fato usadas no código (buscar import de cada dependência antes de sinalizar como não usada).
- Verificar se `README.md` (stack, scripts, estrutura) ainda bate com o código real, e se `.env`/variáveis documentadas (`POSTMARK_SERVER_API_TOKEN`) correspondem ao que `src/app/api/sendmail/route.ts` de fato usa.
- Se o projeto crescer e a varredura ultrapassar o que cabe em poucas buscas diretas, usar um agente `Explore` para mapear uma área específica em vez de navegar tudo manualmente.

## 2. Conteúdo de exemplo e atalhos temporários

Este é um site de conteúdo estático (sem banco de dados), então o equivalente a "dado mockado" aqui é texto de exemplo/placeholder do template original que não foi substituído por conteúdo real, ou conteúdo hardcoded num componente que deveria vir de `src/data/`.

- Procurar texto herdado do template Creative Tim (placeholders, lorem ipsum, links/imagens de exemplo) que não foi substituído por conteúdo real do Guilherme.
- Verificar se experiência/formação/projetos estão centralizados em `src/data/experience.ts` e `src/data/resume.ts`, ou se algum componente tem conteúdo factual hardcoded que deveria estar lá.
- Verificar se algum segredo (token, credencial) está hardcoded no código em vez de vir de variável de ambiente (`.env`, nunca commitado, já coberto por `.gitignore`).
- Reportar cada achado com: caminho do arquivo, evidência concreta, e o que precisa existir antes de remover/substituir.

## 3. Bugs e pontos de atenção

- Procurar sinais objetivos de problema: erro não tratado em `api/sendmail/route.ts` (chamada à Postmark sem tratamento de falha), estado de carregamento/erro ausente no `contact-form.tsx`, `TODO`/`FIXME`, uso de `any` no TypeScript sem justificativa, componente sem atributo de acessibilidade básico (`alt`, `aria-label`, contraste, foco visível).
- Rodar `pnpm lint` e `tsc --noEmit` (via `pnpm build` ou diretamente) e reportar avisos/erros reais.
- Priorizar achados confirmados por execução real (lint, build, leitura de código) sobre suposições.

## 4. Gaps estruturais

- Ausência de testes automatizados (o projeto não tem nenhum hoje), avaliar se vale propor uma primeira camada mínima (ex.: smoke test do build, teste do handler de `sendmail`) sem implementar aqui.
- CI (`.github/workflows/nextjs.yml`): hoje aponta para deploy em GitHub Pages a partir da branch `live-demo`, enquanto o deploy real do produto é via Vercel a partir de `main` (ver README e `CLAUDE.md`), confirmar se esse workflow ainda faz sentido ou está desatualizado/morto.
- Documentação viva (`README.md`, `CLAUDE.md`) desatualizada em relação ao código real.
- Não recomendar gaps genéricos de tutorial (ex.: "adicionar Kubernetes", "adicionar Storybook") sem relacionar ao que o projeto de fato precisa, cada gap deve vir com uma razão concreta ligada ao estado observado do repositório.

## 5. Sugestões de melhoria

- Listar sugestões priorizadas (rápidas/baixo esforço primeiro, depois as de maior esforço), sempre como diagnóstico, sem implementar nada nesta skill. Correções viram demandas novas, tratadas pelo fluxo normal da skill `demanda` e delegadas ao agente certo do conselho.

## 6. Determinar o ID desta execução

- Cada execução da skill recebe um ID sequencial (`#1`, `#2`, `#3`...), usado tanto no snapshot quanto no histórico, é o identificador comum que permite referenciar uma auditoria específica na conversa, em commits/PRs ou em issues ("o ponto X foi levantado na Auditoria #3"), em vez de depender só de datas.
- Calcular o próximo ID lendo a entrada mais recente (topo) de `docs/historico-auditorias.md` e somando 1 ao ID dela. Se o arquivo ainda não existir, esta é a `Auditoria #1`.
- Nunca reutilizar ou reordenar IDs já usados, mesmo que uma execução antiga seja removida do histórico por algum motivo excepcional.

## 7. Consolidar o snapshot atual

- Antes de sobrescrever, se `docs/auditoria-projeto.md` já existir, ler a versão anterior, ela é a base de comparação do passo 8.
- Escrever (ou sobrescrever) `docs/auditoria-projeto.md` na raiz do repositório, criando a pasta `docs/` se não existir, com seções: Visão geral da estrutura, Conteúdo de exemplo e atalhos temporários, Bugs encontrados, Pontos de atenção, Gaps estruturais, Sugestões de melhoria. Incluir no topo o ID desta execução (passo 6) e a data da análise, ex. `Auditoria #3 — 2026-09-16`.
- Este arquivo é um retrato do estado atual a cada execução, não um changelog cumulativo, pode ser sobrescrito. Se já existir uma versão anterior com contexto que a nova varredura não recupera sozinha (ex.: uma decisão registrada manualmente), preservar esse contexto em vez de apagar sem necessidade.

## 8. Registrar o histórico da execução

- Manter um segundo arquivo, `docs/historico-auditorias.md`, como log cumulativo e append-only (nunca sobrescrever entradas anteriores), é aqui que fica o rastro de cada vez que a skill rodou, já que o snapshot do passo 7 não guarda isso sozinho.
- A cada execução, comparar o snapshot anterior (lido no passo 7) com os achados novos e acrescentar uma entrada no topo do histórico (mais recente primeiro), com:
  - Cabeçalho no formato `## Auditoria #N — YYYY-MM-DD` (o ID definido no passo 6).
  - Achados resolvidos desde a última rodada, se a skill não tiver visibilidade de PRs/commits intermediários, inferir pela ausência do item no novo snapshot.
  - Achados novos que não existiam na rodada anterior.
  - Achados que persistem sem mudança (basta citar quantos, não repetir a lista inteira, que já está no snapshot).
- Se for a primeira execução (arquivo ainda não existe), criar o arquivo com a entrada `Auditoria #1` e uma observação de que é a linha de base.
- No chat, apresentar um resumo curto identificado pelo ID (ex. "Auditoria #3: ..."), com bullets por seção do snapshot + o que mudou desde a última execução, e informar os caminhos dos dois arquivos.

## 9. Commit e PR

- Trabalhar em branch própria a partir de `main` (ex.: `docs/auditoria-projeto`), nunca commitar direto em `main`.
- Commit único e atômico cobrindo os dois arquivos: `docs: auditoria do projeto #N` (Conventional Commits, mensagem em PT-BR, com o ID da execução), com o rodapé de atribuição padrão.
- Abrir PR para `main` com título incluindo o ID (ex. `docs: auditoria do projeto #N`) e descrição breve (o que foi analisado, achados principais, o que mudou desde a última auditoria). Como é documentação/diagnóstico, sem mudança de código ou UI, **não é necessário acionar `qa`** antes do PR.

## Fora do escopo desta skill

- Corrigir os problemas encontrados (segue o fluxo normal da skill `demanda`, com delegação ao agente correto).
- Rodar como etapa automática de outra skill, é independente, sob demanda do usuário.

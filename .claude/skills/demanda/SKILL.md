---
name: demanda
description: Avalia uma nova demanda para o conselho de agentes do portfólio pessoal de Guilherme Amorim, prepara o plano de execução (classificação, subtarefas e ordem entre os agentes) e executa via delegação aos subagentes especialistas, com QA sempre por último antes do PR. Use sempre que o usuário trouxer uma demanda nova (feature, ajuste visual, texto, bug etc.).
---

# Demanda — avaliar, preparar, executar

Esta skill formaliza o fluxo de triagem do conselho de agentes descrito em `CLAUDE.md`. Siga as três fases em ordem. Toda a comunicação com o usuário (e commits/PRs) é em PT-BR.

## 1. Avaliar

- Leia a demanda e identifique sua natureza predominante:
  - Visual/identidade/UX → `designer`
  - Texto/institucional/SEO on-page → `copy`
  - Interface/componente já especificado, integração com `api/sendmail` → `front-end`
  - Apenas validação/teste → `qa`
- Se a demanda cruzar áreas, quebre-a em subtarefas, uma por agente envolvido.
- Se for pequena e óbvia (ex.: typo já apontado, ajuste trivial de uma linha), resolva direto na coordenação, não delegue por delegar. Correções de bugs simples, erros de digitação ou ajustes de poucas linhas DEVEM ser feitos diretamente pela coordenação, sem delegar para subagentes.
- Se a demanda não se encaixa em nenhum papel do conselho, não force um encaixe: trate diretamente ou registre a lacuna para o usuário.
- Se faltar informação essencial para classificar ou dimensionar a demanda, pergunte ao usuário antes de prosseguir.

## 2. Preparar

- Defina a ordem de execução das subtarefas respeitando dependências: `designer` → `copy` → `front-end` → `qa`.
- Subtarefas sem dependência entre si podem ser delegadas em paralelo (ex.: `designer` e `copy` frequentemente podem rodar juntos).
- Para demandas não triviais, apresente ao usuário um resumo curto do plano (quais agentes, em que ordem, o que cada um entrega) antes de executar. Para demandas pequenas, pode pular direto para a execução.
- Defina a estratégia de commits: um commit atômico por subtarefa/agente, Conventional Commits, mensagem em PT-BR, nunca misturar mudanças de áreas diferentes no mesmo commit.

## 3. Executar

- Delegue cada subtarefa ao agente correspondente (via subagente), na ordem definida. Passe a cada agente apenas o contexto relevante à sua parte, não a demanda inteira sem filtro. NUNCA passe o histórico completo ou a transcrição da conversa para os subagentes. Ao delegar, forneça estritamente o objetivo da subtarefa e os nomes dos arquivos necessários. O contexto passado deve ser o mais enxuto possível.
- Após cada entrega de um agente, faça o commit atômico correspondente antes de seguir para a próxima subtarefa.
- Quando a mudança afeta código ou UI, acione o `qa` por último, sempre, antes de abrir PR. Se o QA encontrar problemas, devolva ao agente dono da área com passos de reprodução; não corrija por conta própria fora da especialidade.
- Só depois da aprovação do QA (quando aplicável), prepare o PR: descrição breve em PT-BR (o que mudou, por quê, plano de teste quando fizer sentido) com o rodapé de atribuição padrão, direcionada para `main`. Confirme com o usuário antes de efetivamente abrir o PR ou fazer push, salvo instrução prévia em contrário.

## 4. Registrar no histórico

- Ao final da rodada (depois de todos os commits da demanda, no mesmo trabalho que leva ao PR), registrar uma entrada em `docs/historico-demandas.md`, na raiz do repositório, log cumulativo e **append-only** (nunca reescrever entradas anteriores), para manter um histórico legível de tudo que passou pelo conselho, independente do log de commits do Git. Se o arquivo ainda não existir, criá-lo com um cabeçalho curto explicando o propósito antes da primeira entrada.
- Cada entrada tem um ID sequencial, `Demanda #N`: calculado lendo a entrada mais recente (topo) do arquivo e somando 1; se o arquivo ainda não existir, esta é a `Demanda #1`. Nunca reutilizar ou reordenar IDs já usados.
- Conteúdo mínimo por entrada (cabeçalho `## Demanda #N — YYYY-MM-DD`):
  - Resumo de uma linha da demanda original, na forma como o usuário trouxe.
  - Classificação: agente(s) acionados e ordem, ou "resolvida direto na coordenação" quando não coube delegação.
  - O que mudou, em poucos bullets por área (front-end, designer, copy, direto na coordenação).
  - Branch de trabalho e, se já houver, número da PR.
  - Se o QA encontrou e algo foi devolvido/corrigido antes do PR, mencionar brevemente.
- Uma demanda que gera mais de uma PR pode virar mais de uma entrada (uma por PR) ou uma entrada só cobrindo todas as PRs da rodada, escolher o que comunica melhor o que foi feito, sem duplicar informação.
- Esse registro entra no mesmo commit final da PR da demanda (ou em um commit `docs:` próprio, se a demanda já tiver commits atômicos por área), nunca abrir uma PR extra só para isso.
- Demandas pequenas resolvidas direto na coordenação (sem passar por agente nem PR) também geram entrada, só que mais curta.

## 5. Encerramento

- Se a sessão tiver se estendido muito após a aprovação do PR, sugira ao usuário rodar `/compact` ou `/clear` para reduzir o contexto acumulado antes de seguir para a próxima demanda.

# Histórico de demandas

Log cumulativo e append-only de tudo que passou pelo conselho de agentes do portfólio, independente do log de commits do Git.

## Demanda #1 — 2026-09-17

Resumo: "Remova qualquer travessão que ainda exista no site, fazendo a substituição adequada".

Classificação: resolvida direto na coordenação (ajuste mecânico de poucas linhas, sem delegação).

O que mudou:

- Substituídos todos os travessões (`—`) restantes em `src/app/hero.tsx`, `src/app/layout.tsx`, `src/app/projects.tsx`, `src/app/resume.tsx`, `src/app/skills.tsx`, `src/data/experience.ts` e `src/data/resume.ts` por vírgula, dois-pontos, parênteses ou "|", conforme o contexto de cada trecho.

Branch de trabalho: `fix/remove-travessao`, PR #5, mesclada em `main`.

## Demanda #2 — 2026-09-17

Resumo: aviso do editor sobre opções depreciadas no `tsconfig.json` ("target=ES5" e "moduleResolution=node10" deixarão de funcionar no TypeScript 7.0).

Classificação: resolvida direto na coordenação (ajuste de configuração, sem UI/copy envolvidos).

O que mudou:

- `tsconfig.json`: `target` de `es5` para `ES2017` e `moduleResolution` de `node` para `bundler`, eliminando o uso das opções depreciadas.

Branch de trabalho: `fix/tsconfig-deprecations`, PR #6.

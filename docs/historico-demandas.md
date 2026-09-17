# Histórico de demandas

Log cumulativo e append-only de tudo que passou pelo conselho de agentes do portfólio, independente do log de commits do Git.

## Demanda #2 — 2026-09-17

Resumo: aviso do editor sobre opções depreciadas no `tsconfig.json` ("target=ES5" e "moduleResolution=node10" deixarão de funcionar no TypeScript 7.0).

Classificação: resolvida direto na coordenação (ajuste de configuração, sem UI/copy envolvidos).

O que mudou:
- `tsconfig.json`: `target` de `es5` para `ES2017` e `moduleResolution` de `node` para `bundler`, eliminando o uso das opções depreciadas.

Branch de trabalho: `fix/tsconfig-deprecations`, criada a partir de `main` (paralela à `fix/remove-travessao`, ainda não mesclada). PR ainda não aberta.

Observação: como esta branch partiu de `main` antes da mescla da PR da Demanda #1, este arquivo pode gerar conflito de merge com o registro da Demanda #1; resolver mantendo as duas entradas.

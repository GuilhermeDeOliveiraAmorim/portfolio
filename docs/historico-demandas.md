# Histórico de demandas

Log cumulativo e append-only de tudo que passou pelo conselho de agentes do portfólio, independente do log de commits do Git.

## Demanda #1 — 2026-09-17

Resumo: "Remova qualquer travessão que ainda exista no site, fazendo a substituição adequada".

Classificação: resolvida direto na coordenação (ajuste mecânico de poucas linhas, sem delegação).

O que mudou:
- Substituídos todos os travessões (`—`) restantes em `src/app/hero.tsx`, `src/app/layout.tsx`, `src/app/projects.tsx`, `src/app/resume.tsx`, `src/app/skills.tsx`, `src/data/experience.ts` e `src/data/resume.ts` por vírgula, dois-pontos, parênteses ou "|", conforme o contexto de cada trecho.

Branch de trabalho: `fix/remove-travessao`. PR ainda não aberta.

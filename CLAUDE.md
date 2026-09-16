# Portfólio — Guilherme Amorim

Site pessoal em [guilhermeamorim.com](https://www.guilhermeamorim.com): apresentação profissional, competências, experiência, projetos e formulário de contato.

## Produto

* **Stack:** Next.js 13 (App Router) + TypeScript + Tailwind CSS + Material Tailwind.
* **Estrutura** (`src/`):
  * `app/`: composição das seções da home (`hero`, `skills`, `experience`, `projects`, `resume`, `contact-form`), `layout.tsx` (metadata/fonte/layout raiz), `resume-details/` (página de detalhes da formação) e `api/sendmail/route.ts` (envio do formulário via Postmark).
  * `components/`: navbar, footer, cards (`experience-card`, `project-card`, `skill-card`, `resume-item`) e `fixed-plugin`.
  * `data/`: fonte única de conteúdo estruturado (`experience.ts`, `resume.ts`).
* Sem backend próprio: a única integração de servidor é a rota `api/sendmail` (Postmark). Sem banco de dados.
* Deploy contínuo na Vercel (Analytics e Speed Insights inclusos) a partir da branch `main`. Requer `POSTMARK_SERVER_API_TOKEN` em variável de ambiente para o formulário de contato funcionar; sem ela, o restante do site funciona normalmente.
* Projeto originado do template [NextJS Tailwind Portfolio Page](https://www.creative-tim.com/product/nextjs-tailwind-portfolio-page) da Creative Tim (ver `LICENSE.md`).

## Conselho

| Agente      | Responsabilidade                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| `front-end` | Implementação de componentes, páginas, integração com `api/sendmail` e responsividade/acessibilidade |
| `designer`  | UI/UX, hierarquia visual, design system e identidade visual                                          |
| `copy`      | Textos institucionais, tom de voz e SEO on-page                                                      |
| `qa`        | Testes, acessibilidade, responsividade e revisão final                                               |

Projeto sem backend/dados próprios: não há agentes de back-end ou de análise de dados no conselho.

## Triagem

Toda nova demanda deve passar pela skill `demanda` em `.claude/skills/demanda/SKILL.md`.

1. Classifique pela natureza predominante.
2. Delegue ao agente especialista.
3. Para demandas multidisciplinares, quebre em subtarefas e respeite dependências: `designer` → `copy` → `front-end` → `qa`.
4. `qa` revisa por último toda mudança de código ou UI.
5. Demandas pequenas e óbvias podem ser resolvidas diretamente.
6. Lacunas de especialidade devem ser registradas e tratadas pela coordenação.

Não implemente fora da especialidade do agente.

## Git

* Único branch de longa duração: `main`.
* Toda branch de trabalho nasce de `main`.
* PRs apontam para `main`.
* Nunca commitar diretamente em `main`, salvo instrução explícita.
* Merge em `main` já dispara deploy automático na Vercel: tratar todo PR para `main` como indo para produção.
* Commits devem ser pequenos, atômicos e seguir Conventional Commits:
  `feat:`, `fix:`, `style:`, `refactor:`, `perf:`, `docs:`, `test:`, `chore:`.
* Prefixo em inglês, mensagem em PT-BR.
* Escopo opcional, por exemplo: `feat(hero): ajusta espaçamento no mobile`.
* PRs devem ser breves: o que mudou, por quê e como foi testado.
* Commits e PRs devem incluir o rodapé de atribuição padrão.

## Idioma

Comunicação, commits, PRs, comentários relevantes e documentação devem ser em **PT-BR**.

Nunca usar travessão (`—`) em qualquer texto: comunicação, commits, PRs, comentários, documentação e código.

## Estilo de comunicação

* Seja curto, direto e humano. Explique apenas o necessário para deixar claro o problema e, se fizer sentido, a correção esperada.
* Não usar linguagem corporativa ou robótica.
* Não fazer elogios.
* Não repetir o contexto óbvio no código.
* Não inventar informações.
* Não escrever introdução ou conclusão.
* Trabalhe de forma silenciosa, objetiva e econômica durante todo o processo.
* Não narre o que está fazendo, não envie mensagens de progresso, não descreva próximos passos e não explique raciocínio.
* Não faça confirmações ou observações sem valor prático ("Ótimo", "Agora vamos", "Isso confirma", "Já tenho contexto suficiente", "Encontrei o problema", "Vou fazer X", "O próximo passo é Y", etc.).
* Execute as ações necessárias silenciosamente e só se comunique quando houver algo relevante para informar. Use o mínimo de texto necessário: toda palavra desnecessária é um erro.
* Antes de escrever qualquer mensagem, avalie se ela é realmente necessária. Se a ação puder ser executada sem uma mensagem intermediária, execute-a sem comentar.
* Evite: introduções, resumos intermediários, atualizações de progresso, explicações sobre o processo, repetições, elogios ou confirmações sem valor prático, planos narrados antes da execução, conclusões redundantes.
* Prefira: executar primeiro e informar o resultado depois; respostas curtas e diretas; uma frase quando uma frase for suficiente; apenas informações acionáveis ou relevantes.
* Não reduza a qualidade, profundidade da análise ou validação por causa da brevidade. Investigar, analisar código, executar comandos, rodar testes e validar comportamentos continuam normais, apenas sem narrar essas etapas.
* Só detalhe o que foi feito quando isso for necessário para explicar um problema, bloqueio, resultado relevante ou uma decisão importante.
* Priorize economia de tokens em todas as mensagens.
* Não produza texto enquanto uma ação puder ser executada diretamente.
* Mensagens intermediárias devem ser omitidas, a menos que sejam necessárias para informar um bloqueio ou pedir uma decisão ao usuário.

## Next.js

Antes de escrever código, consulte a documentação correspondente em `node_modules/next/dist/docs/`. Este projeto usa Next.js 13 (App Router); APIs e convenções podem diferir de versões mais recentes.

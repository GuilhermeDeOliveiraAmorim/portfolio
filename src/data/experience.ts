export interface ExperienceItem {
  role: string;
  company: string;
  /** Início no formato ISO (AAAA-MM), usado para calcular a duração. */
  start: string;
  /** Fim no formato ISO (AAAA-MM). Ausente significa cargo atual. */
  end?: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Desenvolvedor Back-end Sênior / Líder Técnico",
    company: "MamutTV",
    start: "2024-11",
    location: "Remoto",
    summary:
      "Plataforma de streaming para Smart TVs (Samsung Tizen e Android TV). Respondo pela arquitetura e evolução do ecossistema de APIs que sustenta o player multi-sistema operacional.",
    highlights: [
      "Liderança técnica de uma equipe de seis pessoas (três de frontend, duas de back-end e uma de DevOps)",
      "Definição e evolução da arquitetura de três APIs independentes em Go",
      "Modelagem de domínio e aplicação de Clean Architecture",
      "Serviço de enriquecimento automático de metadados integrado ao TMDB",
      "Definição dos contratos entre frontend e back-end",
      "Estruturação de repositórios e padronização de código",
      "Refinamento de produto junto aos stakeholders, com gestão de backlog e priorização técnica",
    ],
    stack: [
      "Go",
      "PostgreSQL",
      "Docker",
      "Clean Architecture",
      "Padrão Repository",
      "APIs REST",
    ],
  },
];

const MONTHS = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

function parse(value: string) {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

function label(value: string) {
  const { year, month } = parse(value);
  return `${MONTHS[month - 1]} ${year}`;
}

/**
 * Monta "nov 2024 a atual · 1 ano e 10 meses".
 *
 * A duração é calculada em tempo de render, não escrita à mão, para não
 * envelhecer sozinha no cargo atual.
 */
export function formatPeriod(item: ExperienceItem, now = new Date()) {
  const from = parse(item.start);
  const to = item.end
    ? parse(item.end)
    : { year: now.getFullYear(), month: now.getMonth() + 1 };

  // Meses decorridos, não inclusivos: é melhor subestimar o tempo de casa
  // do que declarar um mês a mais do que se tem.
  const totalMonths = (to.year - from.year) * 12 + (to.month - from.month);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);

  const range = `${label(item.start)} a ${
    item.end ? label(item.end) : "atual"
  }`;

  return parts.length > 0 ? `${range} · ${parts.join(" e ")}` : range;
}

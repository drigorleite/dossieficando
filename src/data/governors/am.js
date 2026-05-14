// Candidatos ao Governo do Amazonas — Eleições 2026
export const amGovernorCandidates = [
  {
    id: "wilson-lima",
    slug: "wilson-lima",
    name: "Wilson Lima",
    party: "União Brasil",
    role: "Ex-Governador do Amazonas",
    image: "/images/governors/wilson-lima.jpg",
    status: "Ex-governador — pré-candidato ao retorno",
    statusType: "investigating",
    tags: ["União Brasil", "Zona Franca", "Pandemia", "Investigações"],
    summary:
      "Ex-governador do AM (2019–2022). Investigado por desvios na compra de respiradores durante a pandemia de COVID-19. Absolvido pelo STJ em 2023. Busca retornar ao governo em 2026.",
    electoralStrengths: [
      "Experiência como ex-governador",
      "Conhecimento da máquina pública estadual",
      "Base eleitoral consolidada no AM",
      "Absolvição pelo STJ",
    ],
    electoralWeaknesses: [
      "Investigações na pandemia mancharam imagem",
      "Desgaste por polêmicas durante gestão",
      "Oposição consolidada",
    ],
    policies: [
      {
        title: "Zona Franca de Manaus",
        description: "Defende a manutenção e ampliação dos incentivos fiscais da Zona Franca de Manaus.",
        arguments: ["ZFM é motor econômico do AM", "Gera empregos e renda na região", "Modelo de desenvolvimento sustentável para a Amazônia"],
        criticisms: ["Benefícios concentrados em Manaus", "Interior do AM ainda muito pobre"],
        defense: "Defende que a ZFM é estratégica para o desenvolvimento da Amazônia.",
        result: "POSITIVO",
        resultDetail: "ZFM mantida e expandida durante sua gestão.",
      },
    ],
    controversies: [
      {
        title: "Compra de respiradores na pandemia",
        description: "Investigado por desvios na compra de respiradores durante a crise de COVID-19 no AM em 2021.",
        status: "resolved",
        defense: "Absolvido pelo STJ em 2023. Afirma que agiu de boa-fé em situação de emergência.",
      },
    ],
    sources: [
      { title: "Wilson Lima absolvido pelo STJ — G1 AM", url: "https://g1.globo.com/am/amazonas/noticia/2023/wilson-lima-absolvido-stj.html", reliability: "press" },
    ],
    trustIndex: {
      score: 42,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 50, weight: 25, description: "Gestão com resultados mistos." },
        { name: "Investigações ativas", score: 40, weight: 20, description: "Histórico de investigações na pandemia." },
        { name: "Condenações", score: 55, weight: 20, description: "Absolvido pelo STJ." },
        { name: "Coerência de discurso", score: 45, weight: 15, description: "Mudança de partido gera questionamentos." },
        { name: "Presença em votações", score: 50, weight: 10, description: "Cargo executivo." },
        { name: "Transparência", score: 40, weight: 10, description: "Polêmicas na pandemia reduzem percepção." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas.",
      lastUpdated: "2026-05",
    },
  },
  {
    id: "david-almeida",
    slug: "david-almeida",
    name: "David Almeida",
    party: "Avante",
    role: "Governador do Amazonas",
    image: "/images/governors/david-almeida.jpg",
    status: "Governador atual — pré-candidato à reeleição",
    statusType: "clean",
    tags: ["Reeleição", "Avante", "Amazônia", "Manaus"],
    summary:
      "Atual governador do AM. Assumiu em 2022 após eleição direta. Foco em desenvolvimento econômico, preservação ambiental e fortalecimento da Zona Franca de Manaus.",
    electoralStrengths: [
      "Governador atual com vantagem da incumbência",
      "Foco em desenvolvimento econômico",
      "Gestão da ZFM",
      "Apoio de aliados locais",
    ],
    electoralWeaknesses: [
      "Partido com pouca estrutura nacional",
      "AM tem graves problemas sociais",
      "Concorrência com Wilson Lima",
    ],
    policies: [
      {
        title: "Preservação da Amazônia e Bioeconomia",
        description: "Propõe transformar a preservação ambiental em ativo econômico para o AM.",
        arguments: ["Amazônia tem valor global imenso", "Bioeconomia gera renda sem destruição", "Atrai investimentos internacionais"],
        criticisms: ["Desmatamento ainda é problema grave", "Bioeconomia ainda incipiente"],
        defense: "O governo investe em programas de bioeconomia e combate ao desmatamento.",
        result: "MISTO",
        resultDetail: "Avanços em bioeconomia, mas desmatamento persiste.",
      },
    ],
    controversies: [],
    sources: [
      { title: "David Almeida — Governo do Amazonas", url: "https://www.am.gov.br/governador", reliability: "official" },
    ],
    trustIndex: {
      score: 58,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 58, weight: 25, description: "Gestão em andamento com resultados razoáveis." },
        { name: "Investigações ativas", score: 70, weight: 20, description: "Sem investigações graves." },
        { name: "Condenações", score: 80, weight: 20, description: "Sem condenações." },
        { name: "Coerência de discurso", score: 58, weight: 15, description: "Discurso de desenvolvimento consistente." },
        { name: "Presença em votações", score: 50, weight: 10, description: "Cargo executivo." },
        { name: "Transparência", score: 55, weight: 10, description: "Dados públicos disponíveis." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas.",
      lastUpdated: "2026-05",
    },
  },
];

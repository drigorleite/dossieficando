// Candidatos ao Governo do Maranhão — Eleições 2026
export const maGovernorCandidates = [
  {
    id: "carlos-brandao",
    slug: "carlos-brandao",
    name: "Carlos Brandão",
    party: "PSB",
    role: "Governador do Maranhão",
    image: "/images/governors/carlos-brandao.jpg",
    status: "Governador atual — pré-candidato à reeleição",
    statusType: "clean",
    tags: ["Reeleição", "PSB", "Saúde", "Educação", "Nordeste"],
    summary:
      "Atual governador do Maranhão. Assumiu após a saída de Flávio Dino para o STF. Médico e político, busca consolidar a gestão e disputar a reeleição em 2026 com apoio do presidente Lula e da base governista federal.",
    electoralStrengths: [
      "Governador atual com vantagem da incumbência",
      "Apoio de Lula e do governo federal",
      "Perfil técnico como médico",
      "Continuidade de gestão com investimentos federais",
    ],
    electoralWeaknesses: [
      "MA tem graves déficits sociais históricos",
      "Dependência de transferências federais",
      "Herança de gestão Sarney/Dino com críticas",
    ],
    policies: [
      {
        title: "Saúde Pública e Atenção Básica",
        description: "Ampliação da rede de atenção básica e investimentos em hospitais regionais.",
        arguments: ["MA tem indicadores de saúde abaixo da média nacional", "Investimentos federais via PAC", "Experiência do governador como médico"],
        criticisms: ["Déficit histórico de infraestrutura de saúde", "Falta de médicos no interior"],
        defense: "O governo tem ampliado o número de UBSs e contratado profissionais de saúde.",
        result: "MISTO",
        resultDetail: "Avanços graduais, mas déficits históricos persistem.",
      },
    ],
    controversies: [],
    sources: [
      { title: "Carlos Brandão — Governo do Maranhão", url: "https://www.ma.gov.br/governador", reliability: "official" },
    ],
    trustIndex: {
      score: 55,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 55, weight: 25, description: "Gestão em andamento." },
        { name: "Investigações ativas", score: 70, weight: 20, description: "Sem investigações graves." },
        { name: "Condenações", score: 80, weight: 20, description: "Sem condenações." },
        { name: "Coerência de discurso", score: 55, weight: 15, description: "Alinhamento com Lula consistente." },
        { name: "Presença em votações", score: 50, weight: 10, description: "Cargo executivo." },
        { name: "Transparência", score: 50, weight: 10, description: "Dados públicos disponíveis." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas.",
      lastUpdated: "2026-05",
    },
  },
  {
    id: "othelino-neto",
    slug: "othelino-neto",
    name: "Othelino Neto",
    party: "PCdoB",
    role: "Deputado Federal",
    image: "/images/governors/othelino-neto.jpg",
    status: "Deputado federal — pré-candidato ao governo",
    statusType: "clean",
    tags: ["PCdoB", "Esquerda", "Trabalhadores", "Nordeste"],
    summary:
      "Deputado federal pelo PCdoB. Histórico de defesa dos trabalhadores e movimentos sociais no Maranhão. Pré-candidato ao governo do estado em 2026.",
    electoralStrengths: [
      "Histórico de defesa dos trabalhadores",
      "Base em movimentos sociais",
      "Experiência legislativa",
    ],
    electoralWeaknesses: [
      "PCdoB tem base limitada no MA",
      "Pouca projeção fora da capital",
    ],
    policies: [
      {
        title: "Direitos dos Trabalhadores e Reforma Agrária",
        description: "Defende ampliação dos direitos trabalhistas e reforma agrária no Maranhão.",
        arguments: ["MA tem alta concentração fundiária", "Trabalhadores rurais em condições precárias", "Reforma agrária geraria empregos e renda"],
        criticisms: ["Reforma agrária é competência federal", "Processo lento e conflituoso"],
        defense: "Defende que o estado pode pressionar o governo federal e criar políticas complementares.",
        result: "INCONCLUSIVO",
        resultDetail: "Proposta em construção.",
      },
    ],
    controversies: [],
    sources: [
      { title: "Othelino Neto — Câmara dos Deputados", url: "https://www.camara.leg.br/deputados/othelino-neto", reliability: "official" },
    ],
    trustIndex: {
      score: 52,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 55, weight: 25, description: "Atuação legislativa razoável." },
        { name: "Investigações ativas", score: 70, weight: 20, description: "Sem investigações graves." },
        { name: "Condenações", score: 80, weight: 20, description: "Sem condenações." },
        { name: "Coerência de discurso", score: 60, weight: 15, description: "Discurso de esquerda consistente." },
        { name: "Presença em votações", score: 60, weight: 10, description: "Boa presença na Câmara." },
        { name: "Transparência", score: 50, weight: 10, description: "Dados de mandato disponíveis." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas.",
      lastUpdated: "2026-05",
    },
  },
];

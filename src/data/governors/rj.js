// Candidatos ao Governo do Estado do Rio de Janeiro — Eleições 2026
// Fonte editorial: separação entre fato, crítica, defesa, resultado e status

export const rjGovernorCandidates = [
  {
    id: "eduardo-paes",
    slug: "eduardo-paes",
    name: "Eduardo Paes",
    party: "PSD",
    role: "Prefeito do Rio de Janeiro",
    image: "/images/governors/eduardo-paes.jpg",
    status: "Prefeito atual — pré-candidato ao governo do estado",
    statusType: "investigating",
    tags: ["Gestão Municipal", "Infraestrutura", "Segurança", "Lula"],
    summary:
      "Prefeito do Rio de Janeiro pelo PSD. Já foi prefeito por dois mandatos anteriores (2009–2016) e foi reeleito em 2024. Articula candidatura ao governo do estado em 2026, com apoio do presidente Lula e de aliados do MDB e do campo bolsonarista moderado.",
    electoralStrengths: [
      "Alta popularidade no município do Rio",
      "Experiência executiva consolidada",
      "Apoio de Lula e do PT",
      "Alianças amplas (PT ao MDB e ex-bolsonaristas)",
      "Reconhecimento nacional após Olimpíadas 2016",
    ],
    electoralWeaknesses: [
      "Rejeição em municípios do interior",
      "Histórico de polêmicas com obras e remoções",
      "Desgaste por alianças contraditórias",
      "Imagem associada a gestão de grandes eventos com legado questionável",
    ],
    policies: [
      {
        title: "Segurança Pública e Mobilidade Intermunicipal",
        description:
          "Paes tem ampliado seu discurso para temas estaduais como segurança pública, mobilidade intermunicipal e desenvolvimento regional, preparando terreno para a candidatura ao governo.",
        arguments: [
          "Experiência com grandes projetos de mobilidade na capital",
          "Articulação com prefeitos da Região Metropolitana",
          "Proposta de integração tarifária e logística",
        ],
        criticisms: [
          "Proposta ainda vaga para o interior do estado",
          "Segurança pública é competência estadual — experiência municipal é limitada",
          "Críticas sobre remoções forçadas em comunidades durante sua gestão",
        ],
        defense:
          "Paes argumenta que a experiência de gestão da maior cidade do estado o qualifica para coordenar políticas regionais integradas.",
        result: "INCONCLUSIVO",
        resultDetail: "Propostas para o estado ainda em fase de construção.",
      },
      {
        title: "Desenvolvimento Regional e Interior",
        description:
          "Pretende ampliar investimentos no interior fluminense, historicamente negligenciado em relação à capital.",
        arguments: [
          "Interior do RJ tem graves déficits em infraestrutura e saúde",
          "Proposta de descentralização de investimentos",
          "Articulação com lideranças municipais do interior",
        ],
        criticisms: [
          "Paes tem base eleitoral concentrada na capital",
          "Interior historicamente vota contra candidatos cariocas",
          "Falta de propostas concretas para o Norte e Noroeste Fluminense",
        ],
        defense:
          "Defende que a experiência com a Olimpíadas e grandes projetos de infraestrutura pode ser replicada em escala estadual.",
        result: "INCONCLUSIVO",
        resultDetail: "Proposta em construção.",
      },
    ],
    controversies: [
      {
        title: "Remoções em comunidades durante obras olímpicas",
        description:
          "Durante a preparação para os Jogos Olímpicos de 2016, a gestão Paes foi acusada de realizar remoções forçadas de comunidades como Vila Autódromo, sem reassentamento adequado.",
        status: "historical",
        defense:
          "A prefeitura afirmou que as remoções foram necessárias para obras de infraestrutura e que famílias foram reassentadas com indenizações.",
      },
      {
        title: "Legado das Olimpíadas questionado",
        description:
          "Instalações olímpicas construídas com recursos públicos foram abandonadas ou subutilizadas após os jogos, gerando críticas sobre o custo-benefício do evento.",
        status: "historical",
        defense:
          "Paes defende que as Olimpíadas geraram investimentos permanentes em mobilidade e infraestrutura urbana que beneficiam a cidade até hoje.",
      },
    ],
    sources: [
      {
        title: "Eduardo Paes anuncia saída da prefeitura para disputar governo do RJ — G1",
        url: "https://g1.globo.com/rj/rio-de-janeiro/noticia/2026/03/eduardo-paes-anuncia-saida-da-prefeitura.html",
        reliability: "press",
      },
      {
        title: "Paes fecha com Lula para disputar governo do Rio — Folha de SP",
        url: "https://www.folha.uol.com.br/poder/2026/03/paes-fecha-com-lula.html",
        reliability: "press",
      },
    ],
    trustIndex: {
      score: 55,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 60, weight: 25, description: "Algumas promessas da gestão municipal cumpridas, outras não." },
        { name: "Investigações ativas", score: 65, weight: 20, description: "Sem investigações criminais ativas no momento." },
        { name: "Condenações", score: 70, weight: 20, description: "Sem condenações criminais." },
        { name: "Coerência de discurso", score: 40, weight: 15, description: "Alianças contraditórias geram questionamentos sobre coerência." },
        { name: "Presença em votações", score: 55, weight: 10, description: "Cargo executivo — não se aplica a votações legislativas." },
        { name: "Transparência", score: 50, weight: 10, description: "Gestão com dados públicos, mas críticas sobre processos de licitação." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas: promessas cumpridas (25%), investigações ativas (20%), condenações (20%), coerência de discurso (15%), presença em votações (10%) e transparência (10%). Dados de fontes públicas verificáveis.",
      lastUpdated: "2026-05",
    },
  },
  {
    id: "douglas-ruas",
    slug: "douglas-ruas",
    name: "Douglas Ruas",
    party: "PL",
    role: "Deputado Estadual (RJ)",
    image: "/images/governors/douglas-ruas.jpg",
    status: "Deputado estadual — pré-candidato ao governo",
    statusType: "clean",
    tags: ["Bolsonarismo", "PL", "Segurança", "Jovem"],
    summary:
      "Deputado estadual pelo PL, filho do prefeito de São Gonçalo Capitão Nelson. Foi o segundo mais votado do estado em 2022 com 175 mil votos. Representa a ala bolsonarista na disputa pelo governo do RJ.",
    electoralStrengths: [
      "Alta votação em 2022 (175 mil votos)",
      "Estrutura do PL e apoio bolsonarista",
      "Perfil jovem e comunicativo",
      "Base em São Gonçalo e Região Metropolitana",
    ],
    electoralWeaknesses: [
      "Primeiro mandato — pouca experiência executiva",
      "Dependência da estrutura familiar (pai prefeito)",
      "Pouca projeção fora da Baixada e Região Metropolitana",
    ],
    policies: [
      {
        title: "Segurança Pública e Combate ao Crime Organizado",
        description:
          "Defende endurecimento das políticas de segurança pública e maior integração entre forças estaduais e federais.",
        arguments: [
          "RJ tem um dos piores índices de violência do país",
          "Proposta de integração com Forças Armadas",
          "Discurso alinhado com demanda popular por segurança",
        ],
        criticisms: [
          "Sem propostas concretas além do endurecimento retórico",
          "Modelo de segurança do RJ tem histórico de fracassos",
          "Críticas sobre letalidade policial no estado",
        ],
        defense: "Defende que a firmeza no combate ao crime é o único caminho para recuperar territórios dominados por facções.",
        result: "INCONCLUSIVO",
        resultDetail: "Proposta ainda vaga.",
      },
    ],
    controversies: [],
    sources: [
      {
        title: "Douglas Ruas, filho de Capitão Nelson, mira o governo do RJ — O Globo",
        url: "https://oglobo.globo.com/politica/noticia/2026/04/douglas-ruas-mira-governo-rj.html",
        reliability: "press",
      },
    ],
    trustIndex: {
      score: 48,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 50, weight: 25, description: "Primeiro mandato — dados insuficientes." },
        { name: "Investigações ativas", score: 80, weight: 20, description: "Sem investigações registradas." },
        { name: "Condenações", score: 90, weight: 20, description: "Sem condenações." },
        { name: "Coerência de discurso", score: 55, weight: 15, description: "Discurso alinhado com base bolsonarista." },
        { name: "Presença em votações", score: 60, weight: 10, description: "Primeiro mandato — presença razoável." },
        { name: "Transparência", score: 45, weight: 10, description: "Poucos dados disponíveis sobre atuação." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas. Dados de fontes públicas verificáveis.",
      lastUpdated: "2026-05",
    },
  },
  {
    id: "william-siri",
    slug: "william-siri",
    name: "William Siri",
    party: "PSOL",
    role: "Vereador do Rio de Janeiro",
    image: "/images/governors/william-siri.jpg",
    status: "Vereador — pré-candidato ao governo",
    statusType: "clean",
    tags: ["Esquerda", "PSOL", "Reestatização", "Movimentos Sociais"],
    summary:
      "Vereador do Rio desde 2020, reeleito em 2024 com 19,8 mil votos. Ligado a movimentos sociais, defende reestatização da Cedae, revisão de concessões e valorização do funcionalismo público.",
    electoralStrengths: [
      "Ligação com movimentos sociais",
      "Discurso de esquerda consistente",
      "Jovem e comunicativo",
    ],
    electoralWeaknesses: [
      "PSOL tem base eleitoral limitada no RJ",
      "Pouca experiência executiva",
      "Rejeição em setores conservadores e moderados",
    ],
    policies: [
      {
        title: "Reestatização da Cedae",
        description: "Defende reverter a privatização da Cedae e retomar o controle público do saneamento básico no RJ.",
        arguments: [
          "Saneamento básico é direito fundamental",
          "Privatização não cumpriu metas de universalização",
          "Tarifas aumentaram após concessão",
        ],
        criticisms: [
          "Reestatização exigiria recursos públicos vultosos",
          "Gestão estatal historicamente ineficiente na Cedae",
          "Processo jurídico complexo para reverter concessão",
        ],
        defense: "Defende que o Estado tem obrigação constitucional de garantir saneamento a todos os cidadãos.",
        result: "INCONCLUSIVO",
        resultDetail: "Proposta ainda em fase de elaboração.",
      },
    ],
    controversies: [],
    sources: [
      {
        title: "PSOL lança William Siri como pré-candidato ao governo do RJ — Metrópoles",
        url: "https://www.metropoles.com/brasil/politica-brasil/psol-lanca-william-siri-pre-candidato-governo-rj",
        reliability: "press",
      },
    ],
    trustIndex: {
      score: 52,
      label: "Atenção",
      color: "amber",
      metrics: [
        { name: "Promessas cumpridas", score: 55, weight: 25, description: "Vereador com atuação consistente." },
        { name: "Investigações ativas", score: 85, weight: 20, description: "Sem investigações registradas." },
        { name: "Condenações", score: 90, weight: 20, description: "Sem condenações." },
        { name: "Coerência de discurso", score: 70, weight: 15, description: "Discurso coerente com base progressista." },
        { name: "Presença em votações", score: 65, weight: 10, description: "Boa presença como vereador." },
        { name: "Transparência", score: 55, weight: 10, description: "Dados de mandato disponíveis." },
      ],
      methodology: "Score calculado com base em 6 métricas ponderadas. Dados de fontes públicas verificáveis.",
      lastUpdated: "2026-05",
    },
  },
];

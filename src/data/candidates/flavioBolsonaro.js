const flavioBolsonaro = {
  id: 'flavio-bolsonaro',
  name: 'Flávio Bolsonaro',
  slug: 'flavio-bolsonaro',

  profile: {
    role: 'Senador da República',
    party: 'PL',
    ideology: 'Direita',
  },

  trajectory: {
    roles: [
      {
        period: '2003–2018',
        title: 'Deputado Estadual pelo Rio de Janeiro (5 mandatos)',
        description:
          'Exerceu cinco mandatos consecutivos como deputado estadual no Rio de Janeiro. Durante esse período surgiram as investigações sobre o caso das "rachadinhas", envolvendo supostos desvios de salários de assessores parlamentares. Também foi presidente da Assembleia Legislativa do RJ (ALERJ).',
      },
      {
        period: '2019–presente',
        title: 'Senador da República pelo Rio de Janeiro',
        description:
          'Eleito senador em 2018 com 5,5 milhões de votos, tornou-se um dos principais defensores do legado do pai, ex-presidente Jair Bolsonaro, no Congresso Nacional. Integra a Comissão de Constituição e Justiça (CCJ) do Senado.',
      },
    ],
    keyPositions: [
      'Redução da maioridade penal para 16 anos em crimes hediondos',
      'Classificação do PCC e Comando Vermelho como organizações terroristas',
      'Privatização ampla das estatais federais (exceto minerais estratégicos)',
      'Reforma da Previdência mais profunda que a aprovada em 2019',
      'Anistia aos investigados pelos atos de 8 de janeiro de 2023',
      'Defesa do porte e posse de armas de fogo',
      'Oposição à descriminalização de qualquer droga',
      'Defesa do voto impresso auditável',
      'Contra o chamado "ativismo judicial" do STF',
      'Defesa do indulto ou anistia para Jair Bolsonaro',
    ],
    investigations: [
      {
        title: 'Caso das "rachadinhas" — desvio de salários de assessores',
        year: 2019,
        status: 'Investigação em curso — parte dos processos encerrada por questões processuais',
        description:
          'Investigado por suposto desvio de salários de assessores quando era deputado estadual no RJ. A prática consistia em contratar assessores que devolviam parte do salário ao parlamentar. Fabrício Queiroz, ex-assessor e amigo da família, foi preso em 2020 e tornou-se figura central do caso.',
      },
      {
        title: 'Caso Fabrício Queiroz — movimentação financeira suspeita',
        year: 2018,
        status: 'Queiroz preso em 2020 — caso em andamento',
        description:
          'O COAF identificou movimentações financeiras atípicas de Fabrício Queiroz, ex-assessor de Flávio, incluindo depósitos em conta da primeira-dama Michelle Bolsonaro. Queiroz foi preso em 2020 na casa do advogado Frederick Wassef, defensor da família Bolsonaro.',
      },
      {
        title: 'Investigação da ABIN paralela',
        year: 2023,
        status: 'Em investigação — PF apura uso ilegal da ABIN',
        description:
          'A Polícia Federal investiga o uso ilegal da Agência Brasileira de Inteligência (ABIN) para espionar adversários políticos, jornalistas e autoridades durante o governo Bolsonaro. Flávio Bolsonaro é citado como beneficiário de informações obtidas ilegalmente.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Imagem pública',
        before:
          'Alinhamento total ao estilo agressivo e polarizador do pai, Jair Bolsonaro. Discurso radical nas redes sociais.',
        after:
          'Tentativa de construir imagem mais moderada e pragmática, buscando ampliar apelo fora da base bolsonarista tradicional para a eleição de 2026.',
      },
      {
        theme: 'Apelo a mulheres e centro político',
        before:
          'Campanha voltada quase exclusivamente para a base conservadora masculina.',
        after:
          'Campanha tenta ampliar apelo entre mulheres e eleitores de centro, suavizando o discurso em alguns temas como violência doméstica e direitos das mulheres.',
      },
      {
        theme: 'Relação com o STF',
        before:
          'Discurso de confronto direto com o STF, defendendo impeachment de ministros.',
        after:
          'Discurso mais calculado, mantendo críticas ao "ativismo judicial" mas evitando ataques diretos que possam ser interpretados como antidemocráticos.',
      },
    ],
    politicalAlliances: [
      'PL (Valdemar Costa Neto — presidente do partido)',
      'Base evangélica (pastores e igrejas neopentecostais)',
      'Bolsonarismo em geral',
      'Governadores de direita (Zema, Caiado)',
      'Militares da reserva ligados ao governo Bolsonaro',
      'Setores do agronegócio conservador',
    ],
  },

  proposals: [
    {
      title: 'Redução da maioridade penal',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende reduzir a maioridade penal para 16 anos ou menos em crimes considerados graves, como homicídio, estupro e tráfico de drogas.',
      implementation:
        'Exigiria PEC no Congresso com aprovação em dois turnos em ambas as Casas. Já existem projetos tramitando no Senado.',
      feasibility: {
        political: 'Tem apoio de parcela significativa da população e da bancada conservadora. Resistência de partidos de esquerda e centro.',
        fiscal: 'Aumentaria o número de jovens no sistema prisional, com custo estimado de R$ 2.000–3.000/mês por interno.',
      },
      criticism:
        'Especialistas em segurança pública e criminologia apontam que a medida não reduz a criminalidade — países que adotaram a redução não registraram queda nos índices. A maioria dos adolescentes em conflito com a lei já cumpre medidas socioeducativas.',
    },
    {
      title: 'Classificação de facções criminosas como organizações terroristas',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Pretende classificar PCC, Comando Vermelho e outras facções como organizações terroristas, permitindo aplicar a Lei Antiterrorismo e penas mais severas.',
      implementation:
        'Projeto de lei já tramita no Congresso. Exigiria alteração da Lei Antiterrorismo (Lei 13.260/2016).',
      feasibility: {
        political: 'Apoio da bancada conservadora e de governadores de direita.',
        fiscal: 'Impacto fiscal indireto via aumento de presos em regime de segurança máxima.',
      },
      criticism:
        'Juristas alertam que a classificação como terrorismo pode dificultar investigações e processos, além de criar problemas de proporcionalidade penal. A ONU tem diretrizes específicas sobre o uso da legislação antiterrorismo.',
    },
    {
      title: 'Privatizações amplas com exceção para minerais estratégicos',
      category: 'Economia',
      detailLevel: 'medium',
      summary:
        'Em apresentação a investidores, a equipe de Flávio Bolsonaro sinalizou privatizar cerca de 95% das estatais federais, mantendo controle estatal apenas em setores de minerais estratégicos como terras raras e chips, onde o Brasil não domina a tecnologia.',
      implementation:
        'Programa de privatizações amplo, incluindo Petrobras, Correios, Banco do Brasil e Caixa Econômica Federal. Detalhes ainda não divulgados publicamente.',
      feasibility: {
        political: 'Forte resistência de sindicatos, partidos de esquerda e setores da sociedade civil. Aprovação exigiria maioria parlamentar robusta.',
        fiscal: 'Potencial de arrecadação de centenas de bilhões com a venda de estatais. Impacto de longo prazo depende da qualidade dos contratos.',
      },
      criticism:
        'Economistas alertam que a privatização de empresas estratégicas como Petrobras pode comprometer a soberania energética do Brasil. A experiência de privatizações anteriores (anos 1990) é controversa.',
    },
    {
      title: 'Nova reforma da Previdência',
      category: 'Previdência e Trabalho',
      detailLevel: 'medium',
      summary:
        'Segundo o coordenador de sua pré-campanha, senador Rogério Marinho, Flávio Bolsonaro defende uma reforma previdenciária mais profunda que a aprovada em 2019, com ênfase na sustentabilidade fiscal de longo prazo.',
      implementation:
        'Detalhes ainda não divulgados. Sinaliza aumento da idade mínima de aposentadoria e redução de benefícios para servidores públicos.',
      feasibility: {
        political: 'Historicamente impopular. Exigiria maioria parlamentar e capital político significativo.',
        fiscal: 'Potencial de economia de dezenas de bilhões por ano no longo prazo.',
      },
      criticism:
        'Trabalhadores e sindicatos se opõem a qualquer nova reforma. Especialistas divergem sobre a necessidade de nova reforma após a de 2019.',
    },
    {
      title: 'Atualização da legislação trabalhista',
      category: 'Previdência e Trabalho',
      detailLevel: 'medium',
      summary:
        'Marinho afirmou que a reforma trabalhista de 2017 foi "insuficiente" e que Flávio pretende aprofundá-la, com maior flexibilização das relações de trabalho e redução de encargos sobre as empresas.',
      implementation:
        'Propõe ampliar a prevalência do negociado sobre o legislado, reduzir encargos trabalhistas e facilitar a contratação por projetos.',
      feasibility: {
        political: 'Apoio do setor empresarial. Resistência de sindicatos e partidos de esquerda.',
        fiscal: 'Potencial de redução de custos para empresas, com impacto indireto na geração de empregos formais.',
      },
      criticism:
        'Especialistas alertam que maior flexibilização pode precarizar as relações de trabalho e reduzir direitos conquistados.',
    },
    {
      title: 'Novo arcabouço fiscal e rearranjo orçamentário',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'A equipe defende criar um novo arcabouço fiscal que substitua o atual, com regras mais rígidas para o crescimento dos gastos públicos e maior previsibilidade para o mercado.',
      implementation:
        'Revisão das regras fiscais vigentes, com possível retorno a um modelo de teto de gastos mais rígido.',
      feasibility: {
        political: 'Apoio do mercado financeiro. Resistência de partidos que defendem investimentos sociais.',
        fiscal: 'Dependeria da capacidade de cortar gastos sem comprometer serviços essenciais.',
      },
      criticism:
        'Economistas progressistas alertam que regras fiscais muito rígidas podem impedir investimentos necessários em infraestrutura e políticas sociais.',
    },
    {
      title: 'Redução de gastos, impostos e burocracia',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'low',
      summary:
        'Flávio Bolsonaro defendeu reduzir o gasto público e a burocracia, cortar cargos comissionados e despesas consideradas supérfluas (como publicidade oficial). Sinalizou que pretende diminuir a carga tributária e trazer "previsibilidade" aos investidores.',
      implementation:
        'Não detalhou quais impostos seriam reduzidos ou o montante de cortes de gastos. Proposta ainda em elaboração por equipe técnica.',
      feasibility: {
        political: 'Discurso com apelo popular, mas implementação é complexa.',
        fiscal: 'Sem detalhes suficientes para avaliação precisa.',
      },
      criticism:
        'Críticos apontam que propostas genéricas de "corte de gastos" sem especificação tendem a impactar desproporcionalmente serviços públicos essenciais.',
    },
    {
      title: 'Equipe econômica técnica e ministro da Fazenda',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'low',
      summary:
        'O pré-candidato disse que seu plano econômico está sendo preparado por uma equipe técnica e que pretende nomear um ministro da Fazenda "melhor do que o atual", sem divulgar nomes.',
      implementation:
        'Sem detalhes divulgados.',
      feasibility: {
        political: 'Depende da credibilidade dos nomes escolhidos junto ao mercado.',
        fiscal: 'Não avaliável sem mais informações.',
      },
      criticism:
        'Ausência de nomes e propostas concretas dificulta avaliação por especialistas e mercado.',
    },
    {
      title: 'Anistia aos investigados pelos atos de 8 de janeiro',
      category: 'Justiça e Democracia',
      detailLevel: 'medium',
      summary:
        'Defende anistia ou indulto para os condenados pelos ataques às sedes dos Três Poderes em 8 de janeiro de 2023, incluindo seu pai Jair Bolsonaro, que está inelegível por decisão do TSE.',
      implementation:
        'Projeto de lei de anistia já tramitou no Congresso. Exigiria aprovação parlamentar e sanção presidencial.',
      feasibility: {
        political: 'Apoio da base bolsonarista. Resistência de partidos democráticos e do STF.',
        fiscal: 'Sem impacto fiscal direto.',
      },
      criticism:
        'Juristas e especialistas em democracia alertam que a anistia enfraquece o Estado de Direito e incentiva futuras tentativas de ruptura institucional. O STF já sinalizou que pode barrar a medida.',
    },
    {
      title: 'Outras reformas em discussão (versões não confirmadas)',
      category: 'Agenda Legislativa',
      detailLevel: 'low',
      summary:
        'Segundo entrevistas e vazamentos não confirmados, seu entorno analisa reformas trabalhista e previdenciária mais profundas, contenção dos gastos mínimos em saúde e educação e anistia a investigados pelos atos de 8 de janeiro.',
      implementation:
        'Versões oficiais ainda são vagas. Aguarda lançamento formal do programa de governo.',
      feasibility: {
        political: 'Cada uma dessas medidas exigiria maioria parlamentar e capital político elevado.',
        fiscal: 'Impacto variável dependendo da proposta específica.',
      },
      criticism:
        'A contenção dos pisos constitucionais de saúde e educação seria inconstitucional sem aprovação de PEC.',
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Caso das "rachadinhas" — desvio de salários de assessores',
        year: 2019,
        evidenceLevel: 'investigation',
        sourceType: 'Ministério Público do RJ / COAF',
        status: 'Investigação em curso — parte dos processos encerrada por questões processuais',
        description:
          'O COAF identificou movimentações financeiras atípicas de Fabrício Queiroz, ex-assessor de Flávio. Investigações apontam para um esquema de devolução de parte dos salários de assessores ao parlamentar. Queiroz foi preso em 2020 na casa do advogado Frederick Wassef.',
        defense:
          'Flávio Bolsonaro sempre negou envolvimento no esquema. A defesa argumentou que as movimentações de Queiroz eram pessoais e não tinham relação com o gabinete. Parte dos processos foi encerrada por questões processuais.',
      },
      {
        title: 'ABIN paralela — espionagem de adversários',
        year: 2023,
        evidenceLevel: 'investigation',
        sourceType: 'Polícia Federal',
        status: 'Em investigação',
        description:
          'A PF investiga o uso ilegal da ABIN para espionar adversários políticos, jornalistas e autoridades durante o governo Bolsonaro. Flávio Bolsonaro é citado como beneficiário de informações obtidas ilegalmente pelo chamado "Núcleo de Inteligência Paralela".',
        defense:
          'Flávio Bolsonaro negou ter solicitado ou recebido informações ilegais da ABIN.',
      },
      {
        title: 'Financiamento de campanha por empresas suspeitas',
        year: 2018,
        evidenceLevel: 'allegation',
        sourceType: 'TSE / Imprensa',
        status: 'Investigação pelo TSE',
        description:
          'A campanha de Flávio Bolsonaro ao Senado em 2018 recebeu doações de empresas e pessoas físicas investigadas por lavagem de dinheiro e outros crimes. O TSE investigou possíveis irregularidades no financiamento.',
        defense:
          'A defesa argumentou que as doações foram feitas dentro das regras eleitorais vigentes e que o candidato não tinha conhecimento da origem dos recursos.',
      },
    ],
  },

  // ── Promessas vs Realidade ──
  promises: [
    {
      promise: 'Reduzir gastos públicos e cortar cargos comissionados',
      year: 2025,
      category: 'Fiscal',
      status: 'nao_cumprida',
      result: 'Ainda não assumiu cargo executivo. Proposta declarada em entrevistas, sem detalhamento de metas ou cronograma.',
      evidence: [
        { description: 'Entrevistas e declarações públicas — 2025', date: '2025' },
      ],
      context: 'Proposta de campanha ainda não testada na prática. Flávio Bolsonaro é senador, não tem poder executivo para implementar.',
    },
    {
      promise: 'Anistia aos envolvidos no 8 de janeiro',
      year: 2023,
      category: 'Ética / Judicial',
      status: 'parcial',
      result: 'O PL de anistia foi aprovado pela Câmara em 2024 mas enfrenta resistência no Senado e pode ser vetado pelo presidente Lula.',
      evidence: [
        { description: 'Aprovação do PL de anistia na Câmara — 2024', date: '2024' },
      ],
    },
  ],

  // ── Mudou de Posição? ──
  positionShifts: [
    {
      theme: 'Imagem pública e discurso',
      type: 'suavizacao',
      before: { year: 2018, quote: 'Somos a família Bolsonaro. Ou está conosco ou está contra nós.' },
      after: { year: 2025, quote: 'Quero ser o candidato de todos os brasileiros, não apenas dos que votaram em meu pai.' },
      explanation: 'Flávio Bolsonaro tem buscado suavizar o tom confrontacional da família para ampliar o eleitorado além da base bolsonarista mais radical.',
      sources: [
        { label: 'Entrevistas 2018 — campanha ao Senado', year: 2018 },
        { label: 'Entrevistas CNN Brasil e Jovem Pan — 2025', year: 2025 },
      ],
    },
    {
      theme: 'Relação com o STF',
      type: 'endurecimento',
      before: { year: 2019, quote: 'O STF é uma instituição que deve ser respeitada.' },
      after: { year: 2024, quote: 'O STF está extrapolando suas funções e interferindo na política.' },
      explanation: 'Após as condenações dos envolvidos no 8 de janeiro e as decisões do STF contra aliados, Flávio Bolsonaro adotou postura mais crítica à corte.',
      sources: [
        { label: 'Declarações públicas 2019–2024', year: 2024 },
      ],
    },
  ],

  // ── Índice de Confiabilidade ──
  trustIndex: {
    score: 38,
    lastUpdated: 'Mai/2026',
    notes: 'Pontuação afetada pelo caso das rachadinhas, investigação da ABIN paralela e pelo histórico de alianças familiares. Propostas ainda não testadas no executivo. Nota parlamentar no ranking.org.br é alta (8,30), refletindo presença e atuação no Senado, mas não considera investigações criminais.',
    metrics: {
      promises: 40,
      investigations: 20,
      convictions: 45,
      discourseCoherence: 35,
      votingPresence: 82,
      transparency: 30,
    },
    rankingOrg: {
      score: 8.30,
      position: 8,
      positionTotal: 81,
      state: 'RJ',
      statePosition: 1,
      stateTotalPositions: 3,
      awards: [
        'Prêmio Excelência Parlamentar 2023',
        'Prêmio Excelência Parlamentar 2024',
        'Prêmio Excelência Parlamentar 2025',
      ],
      scoresByYear: [
        { year: 2023, score: 7.53 },
        { year: 2024, score: 8.05 },
        { year: 2025, score: 7.63 },
        { year: 2026, score: 10.00 },
      ],
      url: 'https://ranking.org.br/perfil/flavio-nantes-bolsonaro',
      note: 'O Ranking dos Políticos avalia atuação parlamentar (presença, votações, projetos) — não considera investigações criminais ou escândalos.',
    },
  },

  // ── Linha do Tempo Interativa ──
  interactiveTimeline: [
    { year: 2003, type: 'eleicao', title: 'Eleito vereador no Rio de Janeiro', description: 'Primeiro mandato eletivo, eleito para a Câmara Municipal do Rio.' },
    { year: 2007, type: 'eleicao', title: 'Eleito deputado estadual no RJ', description: 'Primeiro de quatro mandatos consecutivos na Alerj.' },
    { year: 2018, type: 'eleicao', title: 'Eleito senador pelo RJ', description: 'Eleito com 5,8 milhões de votos, aproveitando a onda bolsonarista.' },
    { year: 2019, type: 'investigacao', title: 'Caso Queiroz — rachadinhas', description: 'Coaf aponta movimentações suspeitas de Fabrício Queiroz, ex-assessor de Flávio. Inquérito aberto no MPRJ.' },
    { year: 2020, type: 'operacao_pf', title: 'Queiroz é preso', description: 'Fabrício Queiroz foi preso em junho de 2020 na casa do advogado Frederick Wassef.' },
    { year: 2022, type: 'judicial', title: 'STJ encerra parte do processo', description: 'O STJ encerrou parte das investigações por questões processuais. Flávio não foi condenado.' },
    { year: 2023, type: 'investigacao', title: 'ABIN paralela', description: 'PF investiga uso ilegal da ABIN para espionar adversários. Flávio é citado como beneficiário.' },
    { year: 2024, type: 'eleicao', title: 'Reeleito senador', description: 'Reeleito para o Senado pelo RJ com ampla margem.' },
    { year: 2025, type: 'eleicao', title: 'Lançamento da pré-candidatura à Presidência', description: 'Flávio Bolsonaro se lança como pré-candidato para 2026.' },
  ],

  // ── Radar de Investigações ──
  investigationRadar: [
    {
      agency: 'STJ',
      title: 'Rachadinhas — Caso Queiroz',
      year: 2019,
      status: 'encerrado_parcial',
      description: 'Suspeita de desvio de parte dos salários de funcionários do gabinete de Flávio na Alerj, repassados a Fabrício Queiroz.',
      defense: 'Flávio Bolsonaro sempre negou envolvimento. A defesa argumentou que as movimentações de Queiroz eram pessoais.',
      chronology: [
        { date: 'Dez/2018', event: 'Coaf aponta movimentações suspeitas de Queiroz' },
        { date: '2019', event: 'Inquérito aberto no MPRJ' },
        { date: 'Jun/2020', event: 'Queiroz preso' },
        { date: '2022', event: 'STJ encerra parte do processo por questões processuais' },
      ],
    },
    {
      agency: 'PF',
      title: 'ABIN Paralela',
      year: 2023,
      status: 'ativo',
      description: 'Investigação sobre uso ilegal da ABIN para espionar adversários políticos durante o governo Bolsonaro.',
      defense: 'Flávio Bolsonaro negou ter solicitado ou recebido informações ilegais da ABIN.',
    },
  ],

  // ── Histórico de Votações ──
  votingHistory: [
    {
      bill: 'PL de Anistia aos envolvidos no 8 de janeiro',
      year: 2024,
      theme: 'judicial',
      vote: 'sim',
      description: 'Votou a favor do projeto de anistia aos condenados pelos atos de 8 de janeiro de 2023.',
      coherenceNote: 'Coerente com o discurso de defesa dos manifestantes do 8 de janeiro.',
    },
    {
      bill: 'Reforma da Previdência — EC 103/2019',
      year: 2019,
      theme: 'previdencia',
      vote: 'sim',
      description: 'Votou a favor da reforma da previdência do governo Bolsonaro.',
    },
    {
      bill: 'Arcabouço Fiscal — LC 200/2023',
      year: 2023,
      theme: 'gastos',
      vote: 'nao',
      description: 'Votou contra o arcabouço fiscal do governo Lula.',
    },
  ],

  // ── Político em Números ──
  politicianInNumbers: {
    globalStats: [
      { label: 'Anos como parlamentar', value: '22+', unit: 'anos', trend: null, higherIsBetter: null },
      { label: 'Votos na eleição ao Senado (2018)', value: '5,8', unit: 'milhões', trend: 'up', higherIsBetter: true },
      { label: 'Intenção de voto (pré-candidatura 2026)', value: '8–12', unit: '%', trend: null, higherIsBetter: null, note: 'Pesquisas Datafolha e Quaest — Abr/2025' },
    ],
    mandates: [
      {
        title: 'Senado Federal',
        period: '2019–presente',
        metrics: [
          { label: 'Presença em votações', value: '68', unit: '%', trend: null, higherIsBetter: true },
          { label: 'Projetos de lei apresentados', value: '47', unit: 'PLs', trend: null, higherIsBetter: null },
          { label: 'Projetos aprovados', value: '3', unit: 'PLs', trend: null, higherIsBetter: null },
        ],
      },
    ],
    note: 'Dados de presença pelo portal do Senado Federal.',
  },

  // ── Perfil Ideológico ──
  ideologyProfile: {
    summary: 'Flávio Bolsonaro representa a direita conservadora brasileira, com ênfase em liberalismo econômico, segurança pública e valores tradicionais.',
    axes: {
      economy: { value: 80, confidence: 'alta' },
      customs: { value: 80, confidence: 'alta' },
      state: { value: 25, confidence: 'alta' },
      security: { value: 85, confidence: 'alta' },
      privatization: { value: 85, confidence: 'alta' },
      taxes: { value: 80, confidence: 'alta' },
    },
  },

  // ── Mapa de Alianças ──
  allianceMap: [
    { name: 'PL', type: 'aliado', since: '2021', description: 'Partido de Jair Bolsonaro. Base principal de Flávio.' },
    { name: 'Valdemar Costa Neto', type: 'aliado', description: 'Presidente do PL. Controla a legenda e as indicações partidárias.' },
    { name: 'Jair Bolsonaro', type: 'aliado', description: 'Pai e principal apoiador. Inelegibilidade de Jair abre espaço para Flávio.' },
    { name: 'Pastores evangélicos', type: 'apoio', description: 'Base religiosa que apoiou o bolsonarismo.' },
    { name: 'Fabrício Queiroz', type: 'suspeito', description: 'Ex-assessor envolvido no caso das rachadinhas. Preso e solto em 2020.' },
  ],

  // ── Quem Indicou Quem ──
  appointments: [
    { name: 'Fabrício Queiroz', role: 'assessor', institution: 'Gabinete na Alerj', year: 2007, connection: 'Policial militar e amigo da família Bolsonaro.', suspicious: true, controversy: 'Centro do caso das rachadinhas. Preso pela PF em 2020.' },
  ],

  // ── Como Isso Afeta Você ──
  impacts: [
    {
      proposal: 'Redução de gastos e impostos',
      shortImpact: 'Corte de despesas públicas e redução da carga tributária',
      impacts: [
        { profile: 'empresario', level: 'positivo', description: 'Redução de impostos pode aumentar a competitividade e reduzir o custo de produção.' },
        { profile: 'investidor', level: 'positivo', description: 'Ambiente fiscal mais previsível pode atrair investimentos.' },
        { profile: 'clt', level: 'incerto', description: 'Corte de gastos pode afetar serviços públicos. Redução de impostos pode aumentar o salário líquido.' },
        { profile: 'mei', level: 'positivo', description: 'Redução da burocracia pode facilitar a formalização de pequenos negócios.' },
      ],
    },
  ],

  // ── O que Aconteceu Depois ──
  afterStories: [
    {
      year: 2018,
      category: 'Eleição',
      announcement: 'Eleito senador com 5,8 milhões de votos',
      whatWasSaid: 'Vou ser a voz do Rio de Janeiro no Senado e defender os valores da família brasileira.',
      whatHappened: 'Primeiro mandato marcado pelo caso das rachadinhas (2019) e pela investigação da ABIN paralela (2023).',
      outcome: 'misto',
      data: 'Presença em votações: 68%. 3 projetos aprovados em 6 anos de mandato.',
    },
  ],

  // ── Histórico de Corrupção Partidária ──
  corruptionHistory: [
    {
      scope: 'individuo',
      title: 'Rachadinhas — Caso Queiroz',
      year: 2019,
      operation: 'Inquérito MPRJ / STJ',
      description: 'Suspeita de desvio de parte dos salários de funcionários do gabinete de Flávio na Alerj, repassados a Fabrício Queiroz.',
      involved: ['Fabrício Queiroz', 'Flávio Bolsonaro (citado)'],
      outcome: 'Processo encerrado parcialmente pelo STJ. Sem condenação definitiva.',
      candidateRelation: 'Flávio é o principal investigado. A defesa sempre negou envolvimento.',
    },
    {
      scope: 'partido',
      title: 'Atos de 8 de janeiro — envolvimento do PL',
      year: 2023,
      description: 'Membros e apoiadores do PL participaram dos atos de vandalismo de 8 de janeiro de 2023.',
      involved: ['Apoiadores do PL', 'Militantes bolsonaristas'],
      outcome: 'Centenas de condenados pelo STF. Jair Bolsonaro tornou-se inelegível.',
      candidateRelation: 'Flávio Bolsonaro defendeu os manifestantes e votou pelo PL de anistia. Não foi investigado por participação direta.',
    },
  ],

  // ── Termos econômicos relevantes ──
  economicTerms: ['inflacao', 'juros', 'deficit', 'divida_publica', 'pib', 'iof'],
};

export default flavioBolsonaro;

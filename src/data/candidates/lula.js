const lula = {
  id: 'lula',
  name: 'Luiz Inácio Lula da Silva',
  slug: 'lula',

  profile: {
    role: 'Presidente do Brasil',
    party: 'PT',
    ideology: 'Centro-esquerda',
  },

  trajectory: {
    roles: [
      {
        period: 'Anos 1970–1980',
        title: 'Líder sindical no ABC paulista',
        description:
          'Fundou e liderou o Sindicato dos Metalúrgicos do ABC, organizando greves históricas que marcaram a resistência operária durante a ditadura militar. Tornou-se o principal nome do movimento operário brasileiro e símbolo da redemocratização.',
      },
      {
        period: '1980',
        title: 'Cofundador do PT',
        description:
          'Participou da fundação do Partido dos Trabalhadores em fevereiro de 1980, junto a sindicalistas, intelectuais e movimentos sociais. O PT nasceu como alternativa à esquerda tradicional e às oligarquias políticas.',
      },
      {
        period: '1987–1991',
        title: 'Deputado Federal Constituinte',
        description:
          'Participou da Assembleia Nacional Constituinte, contribuindo para a elaboração da Constituição de 1988 com foco em direitos trabalhistas e sociais.',
      },
      {
        period: '1989, 1994, 1998',
        title: 'Candidato derrotado à Presidência (três vezes)',
        description:
          'Perdeu três eleições presidenciais consecutivas. Em 1989, foi derrotado por Fernando Collor no segundo turno. Em 1994 e 1998, foi derrotado por Fernando Henrique Cardoso já no primeiro turno.',
      },
      {
        period: '2003–2010',
        title: '1º e 2º mandatos como Presidente do Brasil',
        description:
          'Dois mandatos marcados pela expansão de programas sociais (Bolsa Família, PAC), crescimento econômico sustentado, redução da pobreza extrema e projeção internacional do Brasil. Deixou o cargo com 87% de aprovação popular.',
      },
      {
        period: '2018',
        title: 'Preso e impedido de concorrer',
        description:
          'Condenado pela Lava Jato e preso em abril de 2018. Ficou 580 dias detido. O STF anulou as condenações em 2021 por incompetência jurisdicional do juiz Sergio Moro, que depois virou ministro de Bolsonaro.',
      },
      {
        period: '2023–presente',
        title: '3º mandato como Presidente do Brasil',
        description:
          'Retornou à presidência após vencer Jair Bolsonaro no segundo turno de 2022 com 50,9% dos votos. Foco em reconstrução institucional, programas sociais, agenda ambiental e reposicionamento do Brasil no cenário geopolítico.',
      },
    ],
    keyPositions: [
      'Criação e expansão do Bolsa Família — hoje Bolsa Família reestruturado',
      'Valorização real do salário mínimo acima da inflação (política iniciada em 2004)',
      'Expansão do ensino superior público (REUNI, PROUNI, FIES)',
      'Fortalecimento de estatais estratégicas (Petrobras, BNDES, Embraer)',
      'Política externa Sul-Sul e protagonismo no BRICS',
      'Aprovação da Lei Maria da Penha (2006)',
      'Aprovação do Estatuto do Desarmamento',
      'Política de cotas raciais e sociais nas universidades federais',
      'Defesa da reforma tributária progressiva (imposto sobre grandes fortunas)',
      'Isenção do IR para quem ganha até R$ 5.000 (proposta para 2026)',
    ],
    investigations: [
      {
        title: 'Caso Tríplex do Guarujá (Lava Jato)',
        year: 2017,
        status: 'Anulado pelo STF em 2021 — incompetência jurisdicional',
        description:
          'Condenado em primeira e segunda instância por corrupção passiva e lavagem de dinheiro relacionada a um apartamento triplex no Guarujá. Ficou preso 580 dias. As condenações foram anuladas pelo STF em março de 2021 por incompetência de jurisdição da 13ª Vara Federal de Curitiba. O juiz Sergio Moro foi posteriormente considerado parcial pelo STF.',
      },
      {
        title: 'Caso Sítio de Atibaia (Lava Jato)',
        year: 2019,
        status: 'Anulado pelo STF em 2021',
        description:
          'Condenado por corrupção e lavagem de dinheiro relacionada a reformas em um sítio em Atibaia. As condenações foram anuladas pelo STF em 2021 por incompetência jurisdicional. Tentativas de reabrir o caso foram rejeitadas pela Justiça Federal de Brasília.',
      },
      {
        title: 'Mensalão (2005)',
        year: 2005,
        status: 'Lula não foi indiciado — dirigentes do PT foram condenados',
        description:
          'Escândalo de compra de votos de parlamentares com dinheiro do PT e de empresas estatais. Lula afirmou que não sabia do esquema. O STF condenou o então ministro José Dirceu, o tesoureiro Delúbio Soares e outros dirigentes do PT. Lula nunca foi formalmente indiciado no caso.',
      },
      {
        title: 'Irregularidades no INSS (2025)',
        year: 2025,
        status: 'Em investigação',
        description:
          'Investigações da Polícia Federal descobriram desconto ilegal de contribuições sindicais nas aposentadorias de beneficiários do INSS, com suspeita de envolvimento de servidores e entidades ligadas ao governo. O caso gerou pressão política sobre o governo Lula em 2025.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Economia e mercado financeiro',
        before:
          'Discurso sindical forte contra o mercado financeiro e o capital especulativo. Defendia estatização e controle estatal da economia.',
        after:
          'Maior pragmatismo fiscal em 2002 com a "Carta ao Povo Brasileiro", sinalizando compromisso com contratos e estabilidade econômica. Aliou-se a banqueiros e ao agronegócio.',
      },
      {
        theme: 'Responsabilidade fiscal',
        before:
          'Crítica forte ao "mercado" e às políticas de ajuste. Defendia moratória da dívida externa.',
        after:
          'Manteve superávit primário, pagou dívida com o FMI antecipadamente e adotou políticas fiscais ortodoxas em momentos de pressão.',
      },
      {
        theme: 'Reforma da Previdência',
        before:
          'Criticou duramente a reforma da previdência de FHC, prometendo revertê-la.',
        after:
          'Aproveitou o início do governo para aprovar sua própria reforma da previdência dos servidores públicos em 2003, gerando crise interna no PT.',
      },
      {
        theme: 'Segurança pública',
        before:
          'Discurso mais progressista, com foco nas causas sociais da violência. Contra o endurecimento penal.',
        after:
          'Lançou o programa "Brasil Contra o Crime Organizado" com R$ 11 bilhões em 2026, defendendo presídios de segurança máxima e integração das forças de segurança.',
      },
      {
        theme: 'Relação com o Centrão',
        before:
          'PT se fundou como alternativa às oligarquias e ao fisiologismo político.',
        after:
          'Governou com ampla base de partidos do Centrão, distribuindo ministérios e cargos para partidos como MDB, PSD, PP e outros historicamente criticados pelo PT.',
      },
    ],
    politicalAlliances: [
      'MDB (Michel Temer — ex-adversário político)',
      'PSD (Gilberto Kassab)',
      'PP (Arthur Lira)',
      'Centrão em geral',
      'Agronegócio (aliança com setores antes criticados pelo PT)',
      'Geraldo Alckmin (PSDB — ex-adversário, hoje vice-presidente)',
      'Simone Tebet (MDB — ex-adversária)',
    ],
  },

  proposals: [
    {
      title: 'Isenção do Imposto de Renda até R$ 5.000',
      category: 'Economia e Tributação',
      detailLevel: 'high',
      summary:
        'Proposta de isenção total do IR para quem ganha até R$ 5.000 mensais, com alíquota reduzida para rendimentos entre R$ 5.000 e R$ 7.350. A medida beneficiaria cerca de 10 milhões de contribuintes da classe média.',
      implementation:
        'Projeto de lei enviado ao Congresso em 2025. Prevê compensação parcial com tributação mínima de 10% sobre rendimentos acima de R$ 50 mil mensais (imposto sobre super-ricos). Implementação prevista para 2026.',
      feasibility: {
        political: 'Aprovação popular elevada. Resistência de parlamentares ligados a setores de alta renda.',
        fiscal: 'Renúncia fiscal estimada em R$ 30–40 bilhões anuais. Compensação parcial prevista com tributação de super-ricos.',
      },
      criticism:
        'Economistas alertam que a compensação via tributação dos mais ricos pode não cobrir integralmente a renúncia fiscal, pressionando o arcabouço fiscal. Críticos apontam que a medida pode gerar pressão inflacionária ao aumentar o consumo.',
    },
    {
      title: 'SUS do Transporte — Tarifa Zero',
      category: 'Mobilidade Urbana',
      detailLevel: 'medium',
      summary:
        'Proposta de reestruturação do financiamento do transporte público para viabilizar a tarifa zero em todo o Brasil, inspirada no modelo do SUS. Aliviaria o orçamento familiar e ampliaria o acesso a direitos básicos.',
      implementation:
        'Criação de fundo nacional financiado por empregadores (substituindo o vale-transporte). Projeto de lei em discussão no Congresso. Implantação já é realidade em 145 municípios brasileiros.',
      feasibility: {
        political: 'Alta aceitação popular. Envolve negociação com municípios, estados e empresas de transporte.',
        fiscal: 'Custo estimado em R$ 65 bilhões para nível municipal. Injeção de R$ 45,6 bilhões na economia das capitais e regiões metropolitanas.',
      },
      criticism:
        'Levanta dúvidas sobre os custos em cenário de contas públicas pressionadas. Críticos argumentam que a tarifa zero deve vir acompanhada de mudanças estruturais nos contratos com empresas de transporte.',
    },
    {
      title: 'Programa Brasil Contra o Crime Organizado',
      category: 'Segurança Pública',
      detailLevel: 'high',
      summary:
        'Ofensiva nacional com investimento de R$ 11 bilhões para combater o crime organizado, milícias e grupos paramilitares, focando na asfixia financeira, segurança prisional, investigação de homicídios e tráfico de armas.',
      implementation:
        'Quatro eixos: 1) Asfixia financeira (FICCOs, CIFRAs, alienação antecipada de bens); 2) Segurança máxima em 138 presídios (CNIP, bloqueadores de celular); 3) Qualificação da investigação de homicídios (polícias científicas); 4) Enfrentamento ao tráfico de armas (Renarme). R$ 1,06 bilhão direto + R$ 10 bilhões via BNDES para estados e municípios.',
      feasibility: {
        political: 'Depende da adesão dos governos estaduais e municipais. Lula sinalizou criação do Ministério da Segurança Pública.',
        fiscal: 'R$ 11 bilhões já anunciados. Linha de crédito via BNDES reduz impacto direto no orçamento federal.',
      },
      criticism:
        'Oposição questiona se o governo federal tem autoridade para impor padrões de segurança aos estados. Governadores de direita como Caiado e Zema criticam a centralização federal.',
    },
    {
      title: 'Plano de soberania nacional',
      category: 'Infraestrutura e Soberania',
      detailLevel: 'medium',
      summary:
        'Articula plano de soberania nacional com investimentos em infraestrutura que reduzam a dependência externa do Brasil em setores estratégicos: exploração mineral, segurança alimentar, fortalecimento militar e independência digital.',
      implementation:
        'Elaboração de projeto nacional de médio e longo prazos em colaboração com os ministros Fernando Haddad, Geraldo Alckmin e Simone Tebet.',
      feasibility: {
        political: 'Agenda de soberania tem apelo amplo; implementação depende de articulação ministerial e aprovação orçamentária.',
        fiscal: 'Exige investimentos públicos significativos e atração de capital privado para setores estratégicos.',
      },
    },
    {
      title: 'Minha Casa Minha Vida — expansão histórica',
      category: 'Habitação',
      detailLevel: 'high',
      summary:
        'Relançamento e expansão do programa habitacional com orçamento recorde de R$ 180 bilhões em 2025 e meta de 3 milhões de unidades até 2026. Ampliação das faixas de renda e do valor máximo dos imóveis.',
      implementation:
        'Ampliação das faixas de renda elegíveis, aumento do valor máximo dos imóveis financiados, expansão para cidades médias e pequenas, parceria com estados e municípios.',
      feasibility: {
        political: 'Programa com amplo apoio popular e histórico de sucesso. Apoio bipartidário no Congresso.',
        fiscal: 'Orçamento de R$ 180 bilhões em 2025. Parte via subsídios diretos, parte via financiamento da Caixa Econômica.',
      },
      criticism:
        'Economistas alertam para o impacto no endividamento da Caixa Econômica Federal e no déficit público. Críticos apontam que o programa não resolve o problema estrutural de acesso à terra.',
    },
    {
      title: 'Redução da jornada de trabalho — fim do 6x1',
      category: 'Trabalho',
      detailLevel: 'low',
      summary:
        'Defende a redução da jornada de trabalho e o fim do modelo 6x1, em linha com a PEC apresentada pela deputada Érika Hilton (PSOL).',
      implementation:
        'Dependeria de aprovação de PEC no Congresso. Governo ainda não apresentou proposta formal.',
      feasibility: {
        political: 'Exigiria negociação ampla no Congresso e forte reação empresarial.',
        fiscal: 'Impacto indireto sobre produtividade e folha de pagamento.',
      },
      criticism:
        'Setor empresarial alerta para impacto na competitividade. Economistas divergem sobre os efeitos na produtividade.',
    },
    {
      title: 'Crédito do Trabalhador — FGTS como garantia',
      category: 'Trabalho e Crédito',
      detailLevel: 'high',
      summary:
        'Programa que permite ao trabalhador usar o saldo do FGTS como garantia para obter crédito com juros mais baixos, reduzindo o custo do endividamento das famílias.',
      implementation:
        'Operacionalizado via Caixa Econômica Federal e bancos privados. Meta de R$ 134 bilhões em novas operações em 2026.',
      feasibility: {
        political: 'Aprovação popular elevada. Suporte do setor financeiro.',
        fiscal: 'Não implica gasto direto do Tesouro. Risco de inadimplência recai sobre o FGTS.',
      },
      criticism:
        'Especialistas alertam que o uso do FGTS como garantia pode comprometer a reserva de emergência dos trabalhadores em caso de demissão.',
    },
    {
      title: '2026 como "ano de colher" — entrega de resultados',
      category: 'Comunicação e Campanha',
      detailLevel: 'medium',
      summary:
        'Em reunião ministerial de dezembro de 2025, Lula afirmou que 2026 seria o "ano de colher o que plantamos". Eixo de campanha centrado em comparativos de resultados com o governo anterior.',
      implementation:
        'Comunicação institucional baseada em indicadores de programas em andamento (Bolsa Família, PAC, MCMV, transição energética) com comparativos do período 2019–2022.',
      feasibility: {
        political: 'Eficácia depende de indicadores favoráveis até outubro de 2026.',
        fiscal: 'Não implica novos gastos; é uma diretriz de comunicação.',
      },
    },
  ],

  sections: {
    partyCorruption: [
      {
        title: 'Mensalão (2005)',
        year: 2005,
        evidenceLevel: 'conviction',
        sourceType: 'STF',
        status: 'Dirigentes do PT condenados — Lula não foi indiciado',
        description:
          'Escândalo de compra de votos de parlamentares com dinheiro do PT e de empresas estatais. O STF condenou o ministro José Dirceu, o tesoureiro Delúbio Soares e outros. Lula afirmou que não sabia do esquema e nunca foi formalmente indiciado.',
        defense:
          'Lula negou conhecimento do esquema. O STF não o incluiu como réu no processo. Apoiadores argumentam que o escândalo foi uma armação política.',
      },
      {
        title: 'Lava Jato — Petrobras e empreiteiras (2014–2021)',
        year: 2014,
        evidenceLevel: 'investigation',
        sourceType: 'Operação Federal / STF',
        status: 'Condenações de Lula anuladas pelo STF em 2021',
        description:
          'Investigação revelou esquemas de corrupção envolvendo Petrobras, empreiteiras e partidos políticos. Lula foi condenado em dois processos (Tríplex e Sítio de Atibaia), ficou preso 580 dias, mas as condenações foram anuladas pelo STF por incompetência jurisdicional do juiz Sergio Moro.',
        defense:
          'O STF reconheceu que o juiz Sergio Moro era parcial e que a 13ª Vara de Curitiba não tinha competência para julgar Lula. As condenações foram anuladas, não absolvições no mérito.',
      },
      {
        title: 'Irregularidades no INSS (2025)',
        year: 2025,
        evidenceLevel: 'investigation',
        sourceType: 'Polícia Federal',
        status: 'Em investigação',
        description:
          'Investigações da PF descobriram desconto ilegal de contribuições sindicais nas aposentadorias de beneficiários do INSS, com suspeita de envolvimento de entidades ligadas ao governo e ao PT. O caso gerou pressão política sobre o governo Lula em 2025.',
        defense:
          'O governo afirmou que tomou medidas imediatas ao descobrir as irregularidades e que os responsáveis seriam punidos.',
      },
    ],
    suspicions: [
      {
        title: 'Aliança com o Centrão e distribuição de cargos',
        year: 2023,
        evidenceLevel: 'allegation',
        sourceType: 'Imprensa / Oposição',
        status: 'Prática política documentada',
        description:
          'O governo Lula distribuiu ministérios e cargos para partidos do Centrão (PP, MDB, PSD, União Brasil) em troca de apoio parlamentar, repetindo prática criticada pelo PT quando era oposição.',
        defense:
          'O governo argumenta que a construção de maioria parlamentar é necessária para governar e que a distribuição de cargos é prática comum em democracias presidencialistas.',
      },
      {
        title: 'Relação com Odebrecht e outras empreiteiras',
        year: 2014,
        evidenceLevel: 'investigation',
        sourceType: 'Lava Jato',
        status: 'Processos anulados — sem condenação definitiva',
        description:
          'A Lava Jato investigou contratos entre o governo Lula e grandes empreiteiras como Odebrecht, OAS e Camargo Corrêa, com suspeita de pagamento de propinas em troca de contratos com a Petrobras.',
        defense:
          'As condenações foram anuladas pelo STF. A defesa de Lula sempre negou que ele tenha recebido propinas ou que tenha conhecimento dos esquemas.',
      },
    ],
  },

  // ── Promessas vs Realidade ──
  promises: [
    {
      promise: 'Isenção do IR para quem ganha até R$ 5.000',
      year: 2022,
      category: 'Tributação',
      status: 'parcial',
      result: 'O projeto foi enviado ao Congresso em 2024. A isenção foi aprovada para rendas até R$ 2.824 em 2024. A ampliação para R$ 5.000 está prevista para 2026, condicionada à aprovação do pacote fiscal.',
      evidence: [
        { description: 'Projeto de lei enviado ao Congresso em novembro de 2024', date: 'Nov/2024' },
        { description: 'Aprovação da isenção até R$ 2.824 — vigência 2024', date: '2024' },
      ],
      context: 'A proposta original previa isenção total até R$ 5.000 a partir de 2026, mas foi condicionada à aprovação de medidas de contenção de gastos.',
    },
    {
      promise: 'Acabar com o teto de gastos e criar novo arcabouço fiscal',
      year: 2022,
      category: 'Fiscal',
      status: 'cumprida',
      result: 'O arcabouço fiscal foi aprovado pelo Congresso em agosto de 2023 (LC 200/2023), substituindo o teto de gastos.',
      evidence: [
        { description: 'Aprovação do arcabouço fiscal — Lei Complementar 200/2023', date: 'Ago/2023' },
      ],
    },
    {
      promise: 'Reconstruir o Bolsa Família e ampliar para R$ 600',
      year: 2022,
      category: 'Social',
      status: 'cumprida',
      result: 'O Bolsa Família foi reestruturado em março de 2023 com benefício mínimo de R$ 600 e adicional de R$ 150 por criança de 0 a 6 anos. Em 2024, o benefício médio superou R$ 680.',
      evidence: [
        { description: 'Reestruturação do Bolsa Família — MP 1164/2023', date: 'Mar/2023' },
        { description: 'Benefício médio de R$ 682 em 2024 — MDS', date: '2024' },
      ],
    },
    {
      promise: 'Retomar obras do PAC e investir em infraestrutura',
      year: 2022,
      category: 'Infraestrutura',
      status: 'parcial',
      result: 'O PAC foi relançado em agosto de 2023 com R$ 1,7 trilhão em investimentos previstos. A execução até 2024 ficou abaixo do previsto em algumas áreas.',
      evidence: [
        { description: 'Lançamento do novo PAC — agosto de 2023', date: 'Ago/2023' },
      ],
    },
    {
      promise: 'Zerar o desmatamento na Amazônia até 2030',
      year: 2022,
      category: 'Meio Ambiente',
      status: 'parcial',
      result: 'O desmatamento na Amazônia caiu 50% em 2023 em relação a 2022. Em 2024, a queda continuou, mas a meta de desmatamento zero até 2030 ainda é considerada desafiadora.',
      evidence: [
        { description: 'Queda de 50% no desmatamento em 2023 — INPE', date: '2023' },
      ],
    },
  ],

  // ── Mudou de Posição? ──
  positionShifts: [
    {
      theme: 'Responsabilidade fiscal',
      type: 'virada',
      before: { year: 2002, quote: 'O povo não pode pagar a conta de uma dívida que não fez.' },
      after: { year: 2023, quote: 'Vamos cumprir o arcabouço fiscal. Não vou gastar mais do que arrecado.' },
      explanation: 'Lula passou de crítico do ajuste fiscal para defensor do arcabouço fiscal. A mudança foi gradual e se acentuou após a crise de confiança no mercado financeiro no início do 3º mandato.',
      sources: [
        { label: 'Carta ao Povo Brasileiro — 2002', year: 2002 },
        { label: 'Discurso na aprovação do arcabouço fiscal — 2023', year: 2023 },
      ],
    },
    {
      theme: 'Privatizações',
      type: 'suavizacao',
      before: { year: 1994, quote: 'Privatização é entregar o patrimônio do povo para o capital estrangeiro.' },
      after: { year: 2023, quote: 'Não somos contra concessões e parcerias com o setor privado.' },
      explanation: 'O PT passou de oposição radical às privatizações para aceitar concessões e PPPs em infraestrutura. A posição oficial ainda é contrária a privatizações de estatais estratégicas.',
      sources: [
        { label: 'Discurso de campanha 1994', year: 1994 },
        { label: 'Entrevista CNN Brasil — 2023', year: 2023 },
      ],
    },
    {
      theme: 'Segurança pública',
      type: 'endurecimento',
      before: { year: 2003, quote: 'Segurança pública não se faz com mais armas e mais prisões.' },
      after: { year: 2024, quote: 'Vamos criar o Programa Brasil Contra o Crime Organizado com R$ 11 bilhões.' },
      explanation: 'Após anos de crítica ao punitivismo, o governo Lula lançou em 2024 um pacote de segurança pública com foco em combate ao crime organizado.',
      sources: [
        { label: 'Discurso de posse — 2003', year: 2003 },
        { label: 'Lançamento do Programa Brasil Contra o Crime — 2024', year: 2024 },
      ],
    },
    {
      theme: 'Relação com o Centrão',
      type: 'virada',
      before: { year: 2005, quote: 'O PT não vai se aliar ao fisiologismo e ao clientelismo do Centrão.' },
      after: { year: 2023, quote: 'Governar é construir maioria. Precisamos do apoio de todos os partidos.' },
      explanation: 'O escândalo do Mensalão em 2005 expôs a contradição entre o discurso anti-Centrão do PT e a prática de distribuição de cargos para garantir governabilidade.',
      sources: [
        { label: 'Declarações do PT pré-2005', year: 2005 },
        { label: 'Entrevista Folha de S.Paulo — 2023', year: 2023 },
      ],
    },
  ],

  // ── Índice de Confiabilidade ──
  trustIndex: {
    score: 52,
    lastUpdated: 'Mai/2026',
    notes: 'Pontuação afetada pelas investigações da Lava Jato (anuladas) e pelo histórico de alianças com o Centrão. Promessas sociais têm alto índice de cumprimento.',
    metrics: {
      promises: 65,
      investigations: 35,
      convictions: 60,
      discourseCoherence: 45,
      votingPresence: 70,
      transparency: 55,
    },
  },

  // ── Linha do Tempo Interativa ──
  interactiveTimeline: [
    { year: 1975, type: 'alianca', title: 'Presidente do Sindicato dos Metalúrgicos do ABC', description: 'Assume a presidência do sindicato e organiza as primeiras greves contra a ditadura.' },
    { year: 1980, type: 'partido', title: 'Fundação do PT', description: 'Cofunda o Partido dos Trabalhadores junto a sindicalistas, intelectuais e movimentos sociais.' },
    { year: 1989, type: 'eleicao', title: 'Derrota para Fernando Collor no 2º turno', description: 'Primeira candidatura presidencial. Perdeu por 4,5 pontos percentuais.' },
    { year: 2002, type: 'eleicao', title: 'Eleito Presidente — 1ª vez', description: 'Venceu José Serra com 61,3% dos votos no 2º turno.' },
    { year: 2005, type: 'investigacao', title: 'Escândalo do Mensalão', description: 'Esquema de compra de votos de parlamentares exposto. Dirigentes do PT foram condenados. Lula não foi indiciado.', detail: 'O STF condenou 25 pessoas, incluindo o ex-ministro José Dirceu. Lula afirmou desconhecer o esquema.' },
    { year: 2006, type: 'eleicao', title: 'Reeleito Presidente', description: 'Venceu Geraldo Alckmin com 60,8% dos votos no 2º turno, mesmo após o Mensalão.' },
    { year: 2010, type: 'eleicao', title: 'Fim do 2º mandato com 87% de aprovação', description: 'Deixou o cargo com a maior aprovação de um presidente na história do Brasil.' },
    { year: 2016, type: 'operacao_pf', title: 'Condução coercitiva pela PF', description: 'Levado coercitivamente para depor na Operação Lava Jato. O STF declarou a condução ilegal em 2018.' },
    { year: 2018, type: 'judicial', title: 'Preso pela Lava Jato', description: 'Condenado pelo juiz Sergio Moro no caso do tríplex do Guarujá. Ficou 580 dias preso.', detail: 'Em 2021, o STF anulou todas as condenações por incompetência jurisdicional do juízo de Curitiba.' },
    { year: 2021, type: 'judicial', title: 'STF anula condenações', description: 'O STF decidiu que o juízo de Curitiba era incompetente para julgar os casos. Lula recuperou direitos políticos.' },
    { year: 2022, type: 'eleicao', title: 'Eleito Presidente — 3ª vez', description: 'Venceu Jair Bolsonaro com 50,9% dos votos no 2º turno.' },
    { year: 2023, type: 'alianca', title: 'Aliança com o Centrão', description: 'Formou governo com MDB, PSD, PP, União Brasil e outros partidos do Centrão, distribuindo ministérios.' },
    { year: 2024, type: 'investigacao', title: 'Irregularidades no INSS', description: 'Fraudes no INSS envolvendo descontos indevidos em benefícios de aposentados.' },
    { year: 2025, type: 'fala', title: 'Declaração sobre taxação de importações dos EUA', description: 'Lula criticou as tarifas de Trump e defendeu o BRICS como alternativa à dependência dos EUA.' },
  ],

  // ── Radar de Investigações ──
  investigationRadar: [
    {
      agency: 'STF',
      title: 'Tríplex do Guarujá',
      year: 2016,
      status: 'anulado',
      description: 'Lula foi condenado por Sergio Moro por suposto recebimento de propina da OAS. O STF anulou a condenação em 2021 por incompetência jurisdicional.',
      defense: 'A defesa sempre negou que o apartamento pertencesse a Lula. O STF confirmou que o juízo de Curitiba era incompetente para julgar o caso.',
      chronology: [
        { date: '2016', event: 'Abertura do processo na 13ª Vara Federal de Curitiba' },
        { date: 'Jul/2017', event: 'Condenado por Sergio Moro a 9 anos e 6 meses' },
        { date: 'Abr/2018', event: 'Preso em Curitiba' },
        { date: 'Nov/2019', event: 'Solto após STF derrubar prisão em 2ª instância' },
        { date: 'Mar/2021', event: 'STF anula condenações por incompetência jurisdicional' },
      ],
    },
    {
      agency: 'PF',
      title: 'Irregularidades no INSS — 2025',
      year: 2025,
      status: 'ativo',
      description: 'Investigação sobre fraudes no INSS envolvendo descontos indevidos em benefícios de aposentados e pensionistas.',
      defense: 'O governo Lula afirmou que tomou medidas imediatas ao descobrir as irregularidades e acionou os órgãos de controle.',
    },
    {
      agency: 'MPF',
      title: 'Mensalão — Responsabilidade do Presidente',
      year: 2005,
      status: 'arquivado',
      description: 'O MPF investigou se Lula tinha conhecimento do esquema de compra de votos de parlamentares. Lula não foi indiciado.',
      defense: 'Lula sempre afirmou desconhecer o esquema. O STF não encontrou provas de envolvimento direto do presidente.',
    },
  ],

  // ── Histórico de Votações ──
  votingHistory: [
    {
      bill: 'Constituição Federal — Capítulo dos Direitos Trabalhistas',
      year: 1988,
      theme: 'trabalhista',
      vote: 'sim',
      description: 'Como deputado constituinte, votou pela inclusão dos direitos trabalhistas na Constituição, incluindo 13º salário, FGTS, licença-maternidade e direito de greve.',
    },
    {
      bill: 'Reforma da Previdência — EC 103/2019 (governo Bolsonaro)',
      year: 2019,
      theme: 'previdencia',
      vote: 'nao',
      description: 'O PT votou contra a reforma da previdência do governo Bolsonaro, que aumentou a idade mínima para aposentadoria.',
      coherenceNote: 'Lula havia aprovado a reforma da previdência de 2003 (EC 41), que também aumentou a idade mínima para servidores públicos.',
    },
    {
      bill: 'Arcabouço Fiscal — LC 200/2023',
      year: 2023,
      theme: 'gastos',
      vote: 'sim',
      description: 'O governo Lula enviou e aprovou o arcabouço fiscal, substituindo o teto de gastos por um sistema de bandas de crescimento de despesas.',
      coherenceNote: 'O PT criticou o teto de gastos de Temer como "emenda da morte" e prometeu revogá-lo. O arcabouço mantém limites fiscais, apenas com regras diferentes.',
    },
  ],

  // ── Político em Números ──
  politicianInNumbers: {
    globalStats: [
      { label: 'Anos no poder (total)', value: '12+', unit: 'anos', trend: null, higherIsBetter: null },
      { label: 'Aprovação ao deixar o 2º mandato', value: '87', unit: '%', trend: 'up', higherIsBetter: true, comparison: 'Maior aprovação de um presidente na história do Brasil' },
      { label: 'Aprovação atual (3º mandato)', value: '35', unit: '%', trend: 'down', higherIsBetter: true, comparison: 'Queda significativa em relação ao pico do 3º mandato', note: 'Pesquisa Datafolha — Abr/2025' },
    ],
    mandates: [
      {
        title: '1º e 2º mandatos',
        period: '2003–2010',
        metrics: [
          { label: 'Crescimento médio do PIB', value: '4,0', unit: '%/ano', trend: 'up', higherIsBetter: true, comparison: 'Acima da média histórica de 2,5%' },
          { label: 'Inflação média (IPCA)', value: '5,8', unit: '%/ano', trend: null, higherIsBetter: false },
          { label: 'Desemprego (2010)', value: '5,3', unit: '%', trend: 'down', higherIsBetter: false, comparison: 'Menor desemprego da história até então' },
          { label: 'Redução da pobreza extrema', value: '68', unit: '%', trend: 'down', higherIsBetter: true, comparison: 'Queda de 68% na pobreza extrema entre 2003 e 2010' },
        ],
      },
      {
        title: '3º mandato',
        period: '2023–presente',
        metrics: [
          { label: 'Crescimento do PIB (2024)', value: '3,4', unit: '%', trend: 'up', higherIsBetter: true, comparison: 'Acima das expectativas iniciais' },
          { label: 'Inflação (IPCA 2024)', value: '4,8', unit: '%', trend: 'up', higherIsBetter: false, comparison: 'Acima do teto da meta (4,5%)' },
          { label: 'Desemprego (2024)', value: '6,2', unit: '%', trend: 'down', higherIsBetter: false },
          { label: 'Dívida pública / PIB', value: '91', unit: '%', trend: 'up', higherIsBetter: false, note: 'Preocupação crescente do mercado financeiro' },
        ],
      },
    ],
    note: 'Dados de desemprego pelo IBGE (PNAD). PIB pelo IBGE. Inflação pelo IPCA/IBGE. Aprovação pelo Datafolha.',
  },

  // ── Perfil Ideológico ──
  ideologyProfile: {
    summary: 'Lula representa a centro-esquerda brasileira, com forte ênfase em programas sociais e papel ativo do Estado na economia. No 3º mandato, adotou postura mais moderada em relação ao mercado financeiro.',
    axes: {
      economy: { value: 25, confidence: 'alta' },
      customs: { value: 30, confidence: 'alta' },
      state: { value: 65, confidence: 'alta' },
      security: { value: 40, confidence: 'media' },
      privatization: { value: 20, confidence: 'alta' },
      taxes: { value: 25, confidence: 'alta' },
    },
  },

  // ── Mapa de Alianças ──
  allianceMap: [
    { name: 'PT', type: 'aliado', since: '1980', description: 'Partido fundado por Lula. Base principal do governo.' },
    { name: 'MDB', party: 'MDB', type: 'aliado', since: '2022', description: 'Aliança para governabilidade. MDB ocupa ministérios estratégicos.' },
    { name: 'PSD', party: 'PSD', type: 'aliado', since: '2022', description: 'Partido de Gilberto Kassab, aliado do governo com cargos no segundo escalão.' },
    { name: 'PP', party: 'PP', type: 'aliado', since: '2022', description: 'Partido do Centrão com histórico de apoio a governos de diferentes espectros.' },
    { name: 'PSDB', party: 'PSDB', type: 'rompimento', since: '1994', description: 'Adversário histórico. Lula derrotou FHC em 2002.', breakReason: 'Disputa eleitoral histórica. O PSDB apoiou Bolsonaro em 2022.' },
    { name: 'Odebrecht / Grandes empreiteiras', type: 'suspeito', description: 'Investigações da Lava Jato apontaram relações entre o governo Lula e empreiteiras. Condenações anuladas pelo STF.' },
    { name: 'MST', type: 'apoio', description: 'Movimento dos Trabalhadores Rurais Sem Terra. Apoio histórico ao PT.' },
    { name: 'CUT', type: 'apoio', description: 'Central Única dos Trabalhadores. Base sindical histórica do PT.' },
  ],

  // ── Quem Indicou Quem ──
  appointments: [
    { name: 'Fernando Haddad', role: 'ministro', institution: 'Ministério da Fazenda', year: 2023, connection: 'Ex-prefeito de SP e candidato presidencial pelo PT em 2018. Aliado histórico de Lula.' },
    { name: 'Alexandre Padilha', role: 'ministro', institution: 'Ministério das Relações Institucionais', year: 2023, connection: 'Articulação política com o Congresso. Ex-ministro da Saúde no 2º mandato de Lula.' },
    { name: 'Lula Marques', role: 'cargo_comissionado', institution: 'Agência Brasil', year: 2023, connection: 'Fotógrafo pessoal de Lula por décadas.', suspicious: true, controversy: 'Indicação de fotógrafo pessoal para cargo de direção em agência pública foi criticada por especialistas em governança.' },
    { name: 'Jean Paul Prates', role: 'presidente_estatal', institution: 'Petrobras', year: 2023, connection: 'Senador pelo PT do RN. Indicação política para a presidência da maior estatal brasileira.', controversy: 'Demitido em 2024 após divergências com o governo sobre política de dividendos e preço de combustíveis.' },
  ],

  // ── Como Isso Afeta Você ──
  impacts: [
    {
      proposal: 'Isenção do IR até R$ 5.000',
      shortImpact: 'Redução do imposto de renda para trabalhadores de renda média',
      impacts: [
        { profile: 'clt', level: 'positivo', description: 'Trabalhadores com salário até R$ 5.000 deixariam de pagar IR, com ganho líquido de até R$ 400/mês.' },
        { profile: 'empresario', level: 'negativo', description: 'A renúncia fiscal de R$ 30–40 bilhões pode pressionar o governo a aumentar impostos sobre empresas ou dividendos.' },
        { profile: 'investidor', level: 'negativo', description: 'A incerteza fiscal gerada pela proposta pode pressionar o câmbio e os juros.' },
      ],
    },
    {
      proposal: 'Programa Brasil Contra o Crime Organizado (R$ 11 bi)',
      shortImpact: 'Investimento em segurança pública federal',
      impacts: [
        { profile: 'clt', level: 'positivo', description: 'Redução da criminalidade pode melhorar a qualidade de vida nas regiões mais afetadas pelo crime organizado.' },
        { profile: 'empresario', level: 'positivo', description: 'Ambiente mais seguro pode reduzir custos com segurança privada e perdas por furtos.' },
        { profile: 'mei', level: 'positivo', description: 'Pequenos negócios são desproporcionalmente afetados por roubos e extorsões do crime organizado.' },
      ],
    },
  ],

  // ── O que Aconteceu Depois ──
  afterStories: [
    {
      year: 2003,
      category: 'Economia',
      announcement: 'Carta ao Povo Brasileiro — promessa de responsabilidade fiscal',
      whatWasSaid: 'O Brasil quer mudar. Mas quer mudar com segurança, sem aventuras.',
      whatHappened: 'O 1º mandato manteve o tripé macroeconômico herdado de FHC. O mercado financeiro aprovou a postura.',
      outcome: 'positivo',
      data: 'PIB cresceu 4% ao ano em média. Inflação controlada.',
    },
    {
      year: 2005,
      category: 'Ética',
      announcement: 'Promessa de governo ético e transparente',
      whatWasSaid: 'Nunca antes na história deste país um governo foi tão honesto.',
      whatHappened: 'O escândalo do Mensalão em 2005 expôs um esquema de compra de votos de parlamentares coordenado por dirigentes do PT.',
      outcome: 'negativo',
      data: '25 condenados pelo STF no caso do Mensalão em 2012.',
    },
    {
      year: 2022,
      category: 'Social',
      announcement: 'Promessa de reconstrução e retomada do crescimento',
      whatWasSaid: 'Vou reconstruir o Brasil que foi destruído.',
      whatHappened: 'O PIB cresceu 2,9% em 2023 e 3,4% em 2024. O Bolsa Família foi reestruturado. Mas a inflação e os juros altos limitaram o poder de compra.',
      outcome: 'misto',
      data: 'PIB 2024: +3,4%. Inflação 2024: 4,8%. Aprovação: caiu de 53% para 35%.',
    },
  ],

  // ── Histórico de Corrupção Partidária ──
  corruptionHistory: [
    {
      scope: 'partido',
      title: 'Mensalão (2005)',
      year: 2005,
      operation: 'Ação Penal 470',
      description: 'Esquema de compra de votos de parlamentares coordenado pelo PT e aliados.',
      involved: ['José Dirceu', 'José Genoíno', 'Delúbio Soares', 'Marcos Valério'],
      outcome: '25 condenados pelo STF em 2012. Lula não foi indiciado.',
      candidateRelation: 'Lula afirmou desconhecer o esquema. O STF não encontrou provas de envolvimento direto do presidente.',
    },
    {
      scope: 'governo',
      title: 'Petrolão / Lava Jato (2014–2021)',
      year: 2014,
      operation: 'Operação Lava Jato',
      description: 'Esquema de corrupção na Petrobras envolvendo empreiteiras, partidos políticos e funcionários da estatal. Estimativa de R$ 6,4 bilhões desviados.',
      involved: ['Odebrecht', 'OAS', 'Camargo Corrêa', 'PT', 'PMDB', 'PP'],
      outcome: 'Centenas de condenações. Condenações de Lula anuladas pelo STF em 2021.',
      candidateRelation: 'Lula foi condenado por Sergio Moro no caso do tríplex e do sítio de Atibaia. O STF anulou ambas as condenações por incompetência jurisdicional.',
    },
  ],

  // ── Termos econômicos relevantes ──
  economicTerms: ['inflacao', 'juros', 'deficit', 'divida_publica', 'pib', 'reforma_tributaria'],
};

export default lula;

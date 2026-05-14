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
};

export default lula;

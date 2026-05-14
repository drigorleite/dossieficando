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
};

export default flavioBolsonaro;

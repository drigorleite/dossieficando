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
          'Fundou e liderou o Sindicato dos Metalúrgicos do ABC, organizando greves históricas que marcaram a resistência operária durante a ditadura militar e impulsionaram a redemocratização.',
      },
      {
        period: '1987–1991',
        title: 'Deputado Federal Constituinte',
        description:
          'Participou da Assembleia Nacional Constituinte, contribuindo para a elaboração da Constituição de 1988 com foco em direitos trabalhistas e sociais.',
      },
      {
        period: '2003–2010',
        title: '1º e 2º mandatos como Presidente do Brasil',
        description:
          'Dois mandatos marcados pela expansão de programas sociais (Bolsa Família, PAC), crescimento econômico sustentado, redução da pobreza extrema e projeção internacional do Brasil.',
      },
      {
        period: '2023–presente',
        title: '3º mandato como Presidente do Brasil',
        description:
          'Retornou à presidência após vencer Jair Bolsonaro no segundo turno de 2022, com foco em reconstrução institucional, programas sociais, agenda ambiental e reposicionamento do Brasil no cenário geopolítico.',
      },
    ],
    keyPositions: [
      'Expansão de programas sociais (Bolsa Família, PAC, Minha Casa Minha Vida)',
      'Fortalecimento do papel estatal na economia',
      'Defesa histórica de estatais estratégicas (Petrobras, BNDES)',
      'Maior aproximação com BRICS e China',
      'Revisão parcial da reforma trabalhista de 2017',
    ],
    investigations: [
      {
        title: 'Operação Lava Jato — caso Triplex e sítio de Atibaia',
        year: 2016,
        status: 'Condenações anuladas pelo STF por questões de competência jurisdicional',
        description:
          'Condenado em processos ligados ao caso Triplex (Guarujá) e ao sítio de Atibaia. As condenações foram posteriormente anuladas pelo STF por questões processuais de competência jurisdicional. Nunca foi absolvido no mérito em alguns pontos — tema altamente polarizado politicamente.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Economia',
        before:
          'Discurso sindical forte contra o mercado financeiro e o capital especulativo.',
        after:
          'Maior pragmatismo fiscal em 2002 com a "Carta ao Povo Brasileiro", sinalizando compromisso com contratos e estabilidade econômica.',
      },
      {
        theme: 'Responsabilidade fiscal',
        before: 'Crítica forte ao "mercado" e às políticas de ajuste.',
        after:
          'Alianças com banqueiros, agronegócio e centro político; adoção de políticas fiscais mais ortodoxas em momentos de pressão.',
      },
      {
        theme: 'Segurança pública',
        before: 'Discurso mais progressista, com foco nas causas sociais da violência.',
        after:
          'Defesa maior de combate ao crime organizado após crescimento da violência urbana e pressão eleitoral.',
      },
    ],
    politicalAlliances: [
      'MDB',
      'PSD',
      'Centrão',
      'PSB',
      'Alianças históricas com setores antes criticados pelo PT (agronegócio, banqueiros)',
    ],
  },

  proposals: [
    {
      title: 'Redução da jornada de trabalho',
      category: 'Trabalho',
      detailLevel: 'low',
      summary: 'Defende a redução da jornada de trabalho e o fim do modelo 6x1.',
      implementation: '',
      feasibility: {
        political: 'Exigiria negociação ampla no Congresso e forte reação empresarial.',
        fiscal: 'Impacto indireto sobre produtividade e folha de pagamento.',
      },
    },
    {
      title: 'Transporte público gratuito',
      category: 'Mobilidade',
      detailLevel: 'slogan',
      summary: 'O partido defende expansão e possível gratuidade do transporte público.',
      implementation: '',
      feasibility: {
        political: 'Dependeria de articulação federativa entre União, estados e municípios.',
        fiscal: 'Alto impacto fiscal sem fonte de custeio apresentada.',
      },
    },
    {
      title: 'Plano de soberania nacional',
      category: 'Infraestrutura e Soberania',
      detailLevel: 'medium',
      summary:
        'Articula plano de soberania nacional com investimentos em infraestrutura que reduzam a dependência externa do Brasil em setores estratégicos: exploração mineral, segurança alimentar, fortalecimento militar e independência digital. O discurso contrapõe a direita e ressalta que o Brasil precisa de liderança capaz de enfrentar disputas geopolíticas.',
      implementation:
        'Elaboração de projeto nacional de médio e longo prazos em colaboração com os ministros Fernando Haddad, Geraldo Alckmin e Simone Tebet, com foco em diversificação econômica e fortalecimento de cadeias produtivas estratégicas.',
      feasibility: {
        political:
          'Agenda de soberania tem apelo amplo; implementação depende de articulação ministerial e aprovação orçamentária.',
        fiscal:
          'Exige investimentos públicos significativos e atração de capital privado para setores estratégicos.',
      },
    },
    {
      title: 'Legado de infraestrutura para um quarto mandato',
      category: 'Infraestrutura e Soberania',
      detailLevel: 'medium',
      summary:
        'Lula sinalizou que um eventual quarto mandato precisaria deixar um legado além dos programas sociais, com projeto nacional de médio e longo prazos para fortalecer a infraestrutura, diversificar a economia e sustentar a soberania com ênfase em desenvolvimento tecnológico.',
      implementation:
        'Elaboração conjunta com os ministros Haddad, Alckmin e Tebet de um plano de infraestrutura e tecnologia de longo prazo.',
      feasibility: {
        political: 'Depende de coalizão parlamentar estável e continuidade do governo.',
        fiscal: 'Escopo e custo não detalhados publicamente.',
      },
    },
    {
      title: '2026 como "ano de colher" — entrega de resultados',
      category: 'Infraestrutura e Soberania',
      detailLevel: 'medium',
      summary:
        'Em reunião ministerial de dezembro de 2025, Lula afirmou que 2026 seria o "ano de colher o que plantamos". Cobrou resultados dos programas já lançados e sinalizou que pretende apresentar comparações entre a situação atual e a deixada pelo governo anterior como eixo central da campanha.',
      implementation:
        'Comunicação institucional baseada em indicadores de programas em andamento (Bolsa Família, PAC, Minha Casa Minha Vida, transição energética) com comparativos do período anterior.',
      feasibility: {
        political:
          'Estratégia de campanha centrada em resultados concretos; eficácia depende de indicadores favoráveis até outubro de 2026.',
        fiscal:
          'Não implica novos gastos; é uma diretriz de comunicação e entrega de programas já financiados.',
      },
    },
    {
      title: 'Manutenção e ampliação dos programas sociais',
      category: 'Política Social',
      detailLevel: 'medium',
      summary:
        'Defende a manutenção do Bolsa Família, a valorização do salário mínimo acima da inflação, a redução dos juros e o controle dos preços dos alimentos como pontos centrais da agenda econômica.',
      implementation:
        'Continuidade do Bolsa Família com reajuste anual, política de valorização real do salário mínimo e pressão sobre o Banco Central para redução da taxa Selic.',
      feasibility: {
        political: 'Base de apoio consolidada; valorização do salário mínimo tem respaldo histórico.',
        fiscal:
          'Reajuste real do salário mínimo impacta benefícios previdenciários e assistenciais indexados ao piso.',
      },
    },
  ],

  sections: {
    partyCorruption: [
      {
        title: 'Mensalão',
        year: 2005,
        evidenceLevel: 'conviction',
        sourceType: 'Investigação / STF',
        status: 'Condenações ocorreram',
        description:
          'Escândalo envolvendo compra de apoio parlamentar com participação de dirigentes partidários ligados ao PT.',
      },
      {
        title: 'Lava Jato',
        year: 2014,
        evidenceLevel: 'investigation',
        sourceType: 'Operação Federal',
        status: 'Parte das condenações anuladas posteriormente',
        description:
          'Investigação revelou esquemas de corrupção envolvendo Petrobras, empreiteiras e partidos políticos.',
      },
    ],
  },
};

export default lula;

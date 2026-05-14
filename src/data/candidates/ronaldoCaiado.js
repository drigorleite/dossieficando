const ronaldoCaiado = {
  id: 'ronaldo-caiado',
  name: 'Ronaldo Caiado',
  slug: 'ronaldo-caiado',

  profile: {
    role: 'Governador de Goiás',
    party: 'PSD',
    ideology: 'Centro-direita / Conservador',
  },

  trajectory: {
    roles: [
      {
        period: 'Décadas de 1980–1990',
        title: 'Médico e líder ruralista',
        description:
          'Formado em medicina, construiu carreira política ligada ao setor ruralista e à defesa do agronegócio. Tornou-se presidente da União Democrática Ruralista (UDR), entidade que se opôs à reforma agrária na Constituinte de 1988 e foi acusada de financiar milícias rurais.',
      },
      {
        period: '1991–2018',
        title: 'Deputado Federal e Senador da República',
        description:
          'Exerceu mandatos como deputado federal e senador por Goiás, consolidando posições conservadoras em segurança pública, agronegócio e endurecimento penal. Foi candidato à presidência em 1989 pelo PSD, obtendo 0,7% dos votos.',
      },
      {
        period: '2019–presente',
        title: 'Governador de Goiás (dois mandatos)',
        description:
          'Eleito governador em 2018 e reeleito em 2022 com 59,5% dos votos no segundo turno. Usa os índices de redução de criminalidade de Goiás como principal cartaz de sua pré-candidatura à presidência.',
      },
    ],
    keyPositions: [
      'Modelo de segurança pública de Goiás como referência nacional',
      'Classificação de facções criminosas como organizações terroristas',
      'Defesa histórica do agronegócio e do setor ruralista',
      'Endurecimento penal e presídios de segurança máxima',
      'Defesa do porte rural de armas de fogo',
      'Posições conservadoras em costumes e valores',
      'Combate ao crime organizado com uso de tecnologia (câmeras, drones, IA)',
      'Exploração estratégica de terras raras em Goiás',
      'Defesa de anistia aos envolvidos no 8 de janeiro',
      'Oposição à PEC da Segurança Pública (SUSP) — centralização federal',
    ],
    investigations: [
      {
        title: 'Relação com a UDR e acusações de financiamento de milícias rurais',
        year: 1988,
        status: 'Sem condenação criminal — investigações históricas',
        description:
          'Como presidente da UDR (União Democrática Ruralista), Caiado liderou a resistência à reforma agrária na Constituinte. A entidade foi acusada de financiar grupos de pistoleiros e milícias rurais para intimidar trabalhadores rurais sem-terra. Caiado nunca foi formalmente indiciado.',
      },
      {
        title: 'Histórico de embates violentos com o MST',
        year: 2019,
        status: 'Sem condenação criminal nacional até maio de 2026',
        description:
          'Acumula histórico de conflitos com o Movimento dos Trabalhadores Rurais Sem Terra (MST). Como governador, adotou postura de confronto com acampamentos do MST em Goiás, com acusações de uso desproporcional da força policial.',
      },
      {
        title: 'Suspeitas de irregularidades em contratos de segurança pública em GO',
        year: 2022,
        status: 'Sem denúncia formal até maio de 2026',
        description:
          'Investigações jornalísticas apontaram possíveis irregularidades em contratos de tecnologia de segurança pública em Goiás, incluindo câmeras de monitoramento e sistemas de reconhecimento facial.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Relação com o bolsonarismo',
        before:
          'Aliado próximo de Bolsonaro durante o governo federal (2019–2022). Participou ativamente da campanha de reeleição de Bolsonaro em 2022.',
        after:
          'Busca construir identidade própria de direita "mais técnica e institucional", mantendo aproximação parcial com o bolsonarismo sem dependência total. Defende anistia para Bolsonaro mas tenta se distanciar dos radicais.',
      },
      {
        theme: 'Economia',
        before:
          'Discurso centrado em agronegócio e pautas conservadoras. Pouca ênfase em política econômica.',
        after:
          'Discurso hoje mais focado em gestão, tecnologia e resultados concretos da administração de Goiás. Apresenta indicadores econômicos do estado como modelo.',
      },
      {
        theme: 'Segurança pública',
        before:
          'Discurso de endurecimento penal e confronto com o crime, sem ênfase em tecnologia.',
        after:
          'Incorporou o uso de tecnologia (câmeras, drones, IA, reconhecimento facial) como diferencial do modelo de segurança de Goiás.',
      },
    ],
    politicalAlliances: [
      'PSD (Gilberto Kassab)',
      'Agronegócio e bancada ruralista',
      'Direita conservadora',
      'Aproximação parcial com bolsonarismo',
      'Governadores de direita (Zema, Cláudio Castro)',
      'Militares da reserva',
    ],
  },

  proposals: [
    {
      title: 'Modelo de segurança de Goiás como referência nacional',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Caiado usa os índices de redução de criminalidade de Goiás — queda de homicídios, latrocínios e outros crimes — como cartão de visita e propõe replicar o modelo em âmbito nacional, integrando forças estaduais com apoio das Forças Armadas.',
      implementation:
        'Expansão do modelo de integração das forças de segurança (CISP — Centro Integrado de Segurança Pública), com uso intensivo de tecnologia: câmeras de reconhecimento facial, drones, inteligência artificial para análise de dados criminais.',
      feasibility: {
        political: 'Modelo tem credibilidade pelos resultados apresentados em Goiás. Replicação nacional exige adesão dos estados.',
        fiscal: 'Investimento em tecnologia de segurança pública é elevado. Goiás investiu centenas de milhões em infraestrutura tecnológica.',
      },
      criticism:
        'Especialistas questionam se a queda nos índices de Goiás é sustentável e se pode ser atribuída exclusivamente ao modelo de segurança ou a outros fatores socioeconômicos. Também há críticas ao uso de reconhecimento facial por questões de privacidade e racismo algorítmico.',
    },
    {
      title: 'Classificar facções criminosas como organizações terroristas',
      category: 'Segurança Pública',
      detailLevel: 'high',
      summary:
        'Propõe classificar facções como PCC e Comando Vermelho como organizações terroristas, aplicando a Lei Antiterrorismo para permitir penas mais severas, bloqueio de ativos e cooperação internacional.',
      implementation:
        'Alteração da Lei Antiterrorismo (Lei 13.260/2016) via projeto de lei no Congresso. Criação de unidades especializadas no combate ao terrorismo interno.',
      feasibility: {
        political: 'Apoio da bancada conservadora e de governadores de direita.',
        fiscal: 'Criação de unidades especializadas exigiria investimento em treinamento e equipamentos.',
      },
      criticism:
        'Juristas alertam que a classificação como terrorismo pode dificultar investigações e criar problemas de proporcionalidade penal. A ONU tem diretrizes específicas sobre o uso da legislação antiterrorismo que podem ser violadas.',
    },
    {
      title: 'Oposição à PEC da Segurança Pública (SUSP)',
      category: 'Segurança Pública',
      detailLevel: 'high',
      summary:
        'Caiado critica a Proposta de Emenda à Constituição que cria o Sistema Único de Segurança Pública (SUSP), argumentando que centraliza demais o controle federal sobre as polícias estaduais e viola a autonomia dos estados.',
      implementation:
        'Articulação política contra a aprovação da PEC no Congresso. Propõe modelo alternativo de integração que preserve a autonomia estadual.',
      feasibility: {
        political: 'Apoio de governadores de direita. Resistência do governo federal e de estados com altos índices de violência.',
        fiscal: 'Sem impacto fiscal direto.',
      },
      criticism:
        'Especialistas em segurança pública argumentam que a fragmentação das forças de segurança é um dos principais problemas do Brasil, e que a integração federal é necessária para combater organizações criminosas que atuam em múltiplos estados.',
    },
    {
      title: 'Integração das forças de segurança',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende atuação integrada entre polícias estaduais, Polícia Federal, Polícia Rodoviária Federal e Forças Armadas no combate ao crime organizado, com compartilhamento de inteligência e bancos de dados.',
      implementation:
        'Criação de centros integrados de segurança em todos os estados, com protocolos de compartilhamento de informações e operações conjuntas.',
      feasibility: {
        political: 'Depende da adesão dos estados e da coordenação federal.',
        fiscal: 'Investimento em infraestrutura de comunicação e tecnologia.',
      },
      criticism:
        'Críticos apontam que a integração sem clara definição de comando pode gerar conflitos de competência entre as forças.',
    },
    {
      title: 'Controle de presídios e endurecimento de penas',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Critica o domínio de facções dentro de presídios e propõe presídios federais de segurança máxima para líderes de organizações criminosas, com bloqueio total de comunicação e isolamento de lideranças.',
      implementation:
        'Expansão do sistema penitenciário federal de segurança máxima. Transferência de líderes de facções para presídios federais.',
      feasibility: {
        political: 'Apoio da bancada conservadora.',
        fiscal: 'Custo de construção e manutenção de presídios federais é elevado (R$ 3.000–5.000/mês por preso).',
      },
      criticism:
        'Especialistas em segurança penitenciária alertam que o isolamento total pode ser considerado tortura e que a expansão do encarceramento não reduz a criminalidade.',
    },
    {
      title: 'Maior autonomia dos estados na segurança pública',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende maior autonomia dos estados para definir suas políticas de segurança pública, com menos interferência federal. Usa Goiás como exemplo de que estados podem resolver seus problemas sem tutela da União.',
      implementation:
        'Revisão do marco legal da segurança pública para ampliar as competências estaduais.',
      feasibility: {
        political: 'Apoio de governadores de direita. Resistência do governo federal.',
        fiscal: 'Sem impacto fiscal federal direto.',
      },
      criticism:
        'Especialistas alertam que a fragmentação das políticas de segurança dificulta o combate a organizações criminosas que atuam em múltiplos estados.',
    },
    {
      title: 'Exploração estratégica de terras raras em Goiás',
      category: 'Economia e Soberania',
      detailLevel: 'medium',
      summary:
        'Goiás possui uma das maiores reservas de terras raras do Brasil. Caiado propõe uma política nacional de exploração estratégica desses minerais, com participação estatal para garantir soberania tecnológica.',
      implementation:
        'Criação de empresa estatal ou parceria público-privada para exploração de terras raras. Atração de investimentos estrangeiros com garantia de participação nacional.',
      feasibility: {
        political: 'Agenda de soberania tecnológica tem apelo amplo.',
        fiscal: 'Potencial de receita significativa com a exploração de minerais estratégicos.',
      },
      criticism:
        'Ambientalistas alertam para os impactos da mineração de terras raras no meio ambiente e nas comunidades locais.',
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'UDR e acusações de financiamento de milícias rurais',
        year: 1988,
        evidenceLevel: 'allegation',
        sourceType: 'Imprensa / Movimentos sociais',
        status: 'Sem condenação criminal — investigações históricas',
        description:
          'Como presidente da UDR (União Democrática Ruralista), Caiado liderou a resistência à reforma agrária na Constituinte de 1988. A entidade foi acusada de financiar grupos de pistoleiros e milícias rurais para intimidar trabalhadores rurais sem-terra. Caiado nunca foi formalmente indiciado.',
        defense:
          'Caiado sempre negou que a UDR financiasse grupos armados. Argumentou que a entidade defendia os direitos dos proprietários rurais dentro da lei.',
      },
      {
        title: 'Suspeitas de irregularidades em contratos de tecnologia de segurança',
        year: 2022,
        evidenceLevel: 'allegation',
        sourceType: 'Investigação jornalística',
        status: 'Sem denúncia formal',
        description:
          'Investigações jornalísticas apontaram possíveis irregularidades em contratos de tecnologia de segurança pública em Goiás, incluindo câmeras de monitoramento e sistemas de reconhecimento facial, com suspeitas de sobrepreço.',
        defense:
          'O governo de Goiás afirmou que todos os contratos seguiram os procedimentos legais de licitação.',
      },
    ],
  },
};

export default ronaldoCaiado;

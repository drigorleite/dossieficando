const romeuZema = {
  id: 'romeu-zema',
  name: 'Romeu Zema',
  slug: 'romeu-zema',

  profile: {
    role: 'Governador de Minas Gerais',
    party: 'NOVO',
    ideology: 'Direita liberal / Conservador fiscal',
  },

  trajectory: {
    roles: [
      {
        period: 'Antes de 2019',
        title: 'Empresário — Grupo Zema',
        description:
          'Construiu carreira no setor empresarial à frente do Grupo Zema, rede varejista de eletrodomésticos e serviços financeiros com presença em vários estados do Centro-Oeste e Sudeste.',
      },
      {
        period: '2019–2026',
        title: 'Governador de Minas Gerais (dois mandatos)',
        description:
          'Eleito pelo Partido NOVO em 2018 e reeleito em 2022, tornou-se o primeiro governador do estado pelo partido. Implementou política de austeridade fiscal e privatizações em Minas Gerais.',
      },
    ],
    keyPositions: [
      'Privatizações e redução do tamanho do Estado',
      'Redução do gasto público e austeridade fiscal',
      'Agenda liberal econômica com flexibilização trabalhista',
      'Defesa de reforma da previdência e corte de privilégios do funcionalismo',
      'Abertura comercial e redução de tarifas de importação',
    ],
    investigations: [
      {
        title: 'Questionamentos sobre privatizações e gestão da saúde em MG',
        year: 2022,
        status: 'Sem grande escândalo nacional até maio de 2026',
        description:
          'Recebeu críticas por cortes na saúde pública e questionamentos sobre os critérios de privatizações realizadas durante sua gestão em Minas Gerais.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Relação com o bolsonarismo',
        before: 'Tentou construir imagem mais independente, distanciando-se de Bolsonaro em alguns momentos.',
        after:
          'Aproximação maior da direita bolsonarista; defesa pública de anistia/indulto para Bolsonaro e alinhamento com a base conservadora.',
      },
      {
        theme: 'Segurança pública',
        before: 'Foco quase exclusivo em agenda econômica liberal.',
        after:
          'Passou a usar o modelo Bukele/El Salvador como referência para segurança pública, adotando discurso mais duro sobre crime organizado.',
      },
    ],
    politicalAlliances: [
      'Partido NOVO',
      'Aproximação com bolsonarismo e Nikolas Ferreira',
      'Governadores de direita',
      'Setores liberais econômicos',
    ],
  },

  proposals: [
    // --- Plano de 5 pilares ---
    {
      title: 'Eliminar o "Custo Brasil" (Pilar 1)',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'high',
      summary:
        'O coordenador da campanha, Carlos da Costa, divulgou que o primeiro eixo do plano de governo de Zema é atacar burocracias e ineficiências que somariam R$ 1,7 trilhão por ano — o chamado "Custo Brasil".',
      implementation:
        'Desburocratização de processos regulatórios, simplificação tributária, redução de exigências administrativas para empresas e revisão de normas que encarecem a produção.',
      feasibility: {
        political: 'Agenda de desburocratização tem apelo amplo; implementação exige reformas em múltiplos ministérios e agências.',
        fiscal: 'Potencial de ganho de eficiência significativo; estimativa de R$ 1,7 tri é contestada por economistas.',
      },
    },

    {
      title: 'Flexibilização trabalhista e poupança para recém-nascidos (Pilar 2)',
      category: 'Trabalho e Previdência',
      detailLevel: 'high',
      summary:
        'O segundo pilar prevê contratos mais flexíveis (negociação de jornada por hora ou por mês) e a criação de uma poupança de R$ 1.000 depositada pelo Estado para cada recém-nascido, aplicada em fundo de ações até a maioridade.',
      implementation:
        'Atualização da CLT para novas modalidades de trabalho e criação de fundo soberano de poupança infantil com aporte único do governo federal por nascimento.',
      feasibility: {
        political: 'Flexibilização trabalhista enfrenta resistência sindical; poupança infantil é proposta inovadora com apelo eleitoral.',
        fiscal: 'Custo da poupança infantil depende do número de nascimentos (~2,5 milhões/ano): impacto de ~R$ 2,5 bi/ano.',
      },
    },

    {
      title: 'Privatização de todas as estatais federais e reforma previdenciária permanente (Pilar 3)',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'high',
      summary:
        'O terceiro pilar prevê privatizar todas as estatais federais (Petrobras, Caixa, Banco do Brasil, Correios etc.) e realizar uma reforma previdenciária permanente com ajustes automáticos conforme a expectativa de vida.',
      implementation:
        'Venda de todas as estatais federais via leilões e ofertas públicas; mecanismo automático de ajuste da idade de aposentadoria indexado à expectativa de vida publicada pelo IBGE.',
      feasibility: {
        political: 'Privatização de Petrobras, BB e CEF enfrenta resistência intensa no Congresso e na sociedade.',
        fiscal: 'Receita expressiva de curto prazo; ajuste previdenciário automático reduziria pressão fiscal de longo prazo.',
      },
      criticism:
        'Opositores argumentam que a venda de estatais estratégicas compromete soberania nacional e pode elevar preços de serviços essenciais.',
    },

    {
      title: 'Queda dos juros via coordenação fiscal-monetária e uso do FGTS (Pilar 4)',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'O quarto pilar prevê promover a queda dos juros e da inadimplência por meio da coordenação entre política fiscal e monetária e da utilização de garantias como o FGTS nos empréstimos.',
      implementation:
        'Uso do saldo do FGTS como garantia em operações de crédito para reduzir spread bancário e inadimplência; ajuste fiscal para criar condições para redução da Selic.',
      feasibility: {
        political: 'Uso do FGTS como garantia já tem precedente (crédito consignado privado); ampliação exige regulamentação.',
        fiscal: 'Risco de descapitalização do FGTS se as garantias forem executadas em larga escala.',
      },
    },

    {
      title: 'Abertura comercial e integração ao comércio global (Pilar 5)',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'O quinto pilar prevê reduzir tarifas de importação e integrar o Brasil ao comércio global, com saída do BRICS e adoção de perfil de política externa alinhado ao Ocidente.',
      implementation:
        'Redução unilateral e negociada de tarifas de importação, conclusão de acordos comerciais (Mercosul-UE, acordos bilaterais) e reposicionamento do Brasil no BRICS.',
      feasibility: {
        political: 'Saída do BRICS é altamente controversa; abertura comercial pode ter apoio empresarial em setores importadores.',
        fiscal: 'Redução de tarifas implica perda de receita aduaneira; ganhos de eficiência dependem da competitividade da indústria nacional.',
      },
      criticism:
        'Economistas alertam que abertura comercial sem política industrial pode desindustrializar setores vulneráveis.',
    },

    // --- Outras posições ---
    {
      title: 'Postura anti-STF e governo com perfil empresarial',
      category: 'Judiciário',
      detailLevel: 'medium',
      summary:
        'No lançamento de sua pré-candidatura, Zema adotou discurso "anti-STF" e prometeu um governo com perfil empresarial. Propõe impor mandatos aos ministros do Supremo Tribunal Federal, acabar com decisões monocráticas e modificar os critérios de nomeação.',
      implementation:
        'PEC para estabelecer mandatos fixos, exigir aprovação colegiada de decisões relevantes e diversificar critérios de indicação ao STF.',
      feasibility: {
        political: 'Tema polêmico; exige PEC com maioria qualificada e enfrenta resistência do próprio STF.',
        constitutional: 'Alteração na composição e funcionamento do STF requer emenda constitucional.',
      },
    },

    {
      title: 'Reforma administrativa e corte de privilégios',
      category: 'Reforma do Estado',
      detailLevel: 'high',
      summary:
        'Pretende reduzir o gasto estrutural do governo por meio de reforma administrativa que diminua o número de servidores e combata privilégios, revisando despesas obrigatórias.',
      implementation:
        'Reforma administrativa via PEC, revisão de estabilidade, benefícios e progressões automáticas do funcionalismo público.',
      feasibility: {
        political: 'Resistência intensa de servidores e sindicatos; exige ampla coalizão parlamentar.',
        fiscal: 'Potencial de redução significativa do gasto de pessoal no médio prazo.',
      },
    },

    {
      title: 'Focalização de programas sociais e combate a fraudes',
      category: 'Política Social',
      detailLevel: 'medium',
      summary:
        'Defende focalizar programas sociais em quem mais precisa, combatendo fraudes e desvios para garantir eficiência do gasto.',
      implementation:
        'Auditoria e cruzamento de dados cadastrais para eliminar beneficiários indevidos e redirecionar recursos aos mais vulneráveis.',
      feasibility: {
        political: 'Discurso de eficiência tem apelo amplo; implementação depende de capacidade técnica do governo federal.',
        fiscal: 'Potencial de economia com eliminação de fraudes, mas escala real é disputada.',
      },
    },

    {
      title: 'Combate às facções criminosas e maior autonomia dos estados',
      category: 'Segurança Pública',
      detailLevel: 'low',
      summary:
        'Defende maior autonomia dos estados para gerir suas polícias e políticas de segurança, com penas mais severas para crimes violentos e combate às facções criminosas.',
      implementation: '',
      feasibility: {
        political: 'Alinhado com governadores de centro-direita; exige revisão do Código Penal.',
        fiscal: 'Penas mais severas aumentam custo do sistema penitenciário.',
      },
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Suspeitas de corrupção ambiental',
        year: 2022,
        evidenceLevel: 'investigation',
        sourceType: 'Reportagens investigativas',
        status: 'Sem denúncia formal até maio de 2026',
        description:
          'Zema foi alvo de suspeitas relacionadas a irregularidades ambientais no estado de Minas Gerais, incluindo questionamentos sobre licenciamentos e fiscalização ambiental durante sua gestão.',
      },
      {
        title: 'Irregularidades em empréstimos consignados da empresa da família',
        year: 2023,
        evidenceLevel: 'allegation',
        sourceType: 'Reportagens / Investigações jornalísticas',
        status: 'Sem denúncia formal até maio de 2026',
        description:
          'Reportagens apontaram irregularidades em empréstimos consignados ligados à empresa da família Zema (Rede Zema), sem que houvesse denúncia formal ou processo judicial aberto até maio de 2026.',
      },
    ],
  },
};

export default romeuZema;

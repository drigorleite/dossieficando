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
          'Construiu carreira no setor empresarial à frente do Grupo Zema, rede varejista de eletrodomésticos e serviços financeiros com mais de 400 lojas em 11 estados do Centro-Oeste e Sudeste. Nunca havia exercido cargo público antes de se candidatar ao governo de Minas.',
      },
      {
        period: '2019–2022',
        title: '1º mandato como Governador de Minas Gerais',
        description:
          'Eleito pelo Partido NOVO em 2018, tornou-se o primeiro governador do estado pelo partido. Implementou política de austeridade fiscal, privatizações e tentativa de renegociação da dívida de Minas com a União (R$ 160 bilhões).',
      },
      {
        period: '2023–2026',
        title: '2º mandato como Governador de Minas Gerais',
        description:
          'Reeleito em 2022 com 56,2% dos votos no segundo turno. Continuou a agenda de privatizações e austeridade. Lançou pré-candidatura à presidência em 2025, usando Minas como vitrine de gestão.',
      },
    ],
    keyPositions: [
      'Privatização de todas as estatais federais (incluindo Petrobras e Banco do Brasil)',
      'Reforma administrativa com corte de cargos e privilégios do funcionalismo',
      'Reforma da Previdência automática vinculada à expectativa de vida',
      'Abertura comercial e redução de tarifas de importação',
      'Saída do BRICS',
      'Mandatos fixos para ministros do STF',
      'Flexibilização trabalhista ampla',
      'Poupança de R$ 1.000 para cada recém-nascido',
      'Combate ao "Custo Brasil" (R$ 1,7 tri/ano em ineficiências)',
      'Defesa de anistia/indulto para Jair Bolsonaro',
    ],
    investigations: [
      {
        title: 'Consignado do Grupo Zema — irregularidades em empréstimos',
        year: 2022,
        status: 'Investigação em andamento — sem denúncia formal até maio de 2026',
        description:
          'O Grupo Zema, empresa da família do governador, foi investigado por irregularidades em empréstimos consignados oferecidos a servidores públicos de Minas Gerais. Suspeitas de uso da posição do governador para favorecer os negócios da família.',
      },
      {
        title: 'Suspeitas de corrupção ambiental — mineração em MG',
        year: 2021,
        status: 'Sem denúncia formal até maio de 2026',
        description:
          'Zema foi acusado de favorecer empresas de mineração em Minas Gerais, com suspeitas de licenciamentos ambientais irregulares e de que a política ambiental do estado beneficiaria empresas com relações com o governo.',
      },
      {
        title: 'Dívida de Minas com a União — negociação controversa',
        year: 2019,
        status: 'Disputas judiciais em andamento',
        description:
          'Minas Gerais tem uma dívida de mais de R$ 160 bilhões com a União. Zema entrou em conflito com o governo federal sobre os termos da renegociação, chegando a suspender pagamentos unilateralmente, gerando disputas judiciais.',
      },
    ],
    discourseChanges: [
      {
        theme: 'Relação com o bolsonarismo',
        before:
          'Tentou construir imagem mais independente, distanciando-se de Bolsonaro em alguns momentos durante o governo federal (2019–2022).',
        after:
          'Aproximação maior da direita bolsonarista; defesa pública de anistia/indulto para Bolsonaro e alinhamento com a base conservadora para a eleição de 2026.',
      },
      {
        theme: 'Segurança pública',
        before:
          'Foco quase exclusivo em agenda econômica liberal. Segurança pública era tema secundário.',
        after:
          'Passou a usar o modelo Bukele/El Salvador como referência para segurança pública, adotando discurso mais duro sobre crime organizado para ampliar apelo eleitoral.',
      },
      {
        theme: 'STF e democracia',
        before:
          'Críticas pontuais ao STF, mantendo postura mais institucional.',
        after:
          'Discurso mais agressivo contra o STF, defendendo mandatos fixos para ministros e questionando decisões do tribunal.',
      },
    ],
    politicalAlliances: [
      'Partido NOVO',
      'Nikolas Ferreira (PL) — aproximação para 2026',
      'Governadores de direita',
      'Setores liberais econômicos e mercado financeiro',
      'Empresariado conservador',
      'Base bolsonarista (aproximação crescente)',
    ],
  },

  proposals: [
    {
      title: 'Eliminar o "Custo Brasil" (Pilar 1)',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'high',
      summary:
        'O coordenador da campanha, Carlos da Costa, divulgou que o primeiro eixo do plano de governo de Zema é atacar burocracias e ineficiências que somariam R$ 1,7 trilhão por ano — o chamado "Custo Brasil". Inclui simplificação tributária, desburocratização e digitalização de processos.',
      implementation:
        'Revisão de regulações, simplificação do sistema tributário, digitalização de processos governamentais, redução de exigências para abertura de empresas e licenciamentos.',
      feasibility: {
        political: 'Agenda de desburocratização tem apoio amplo. Implementação exige reforma administrativa e tributária.',
        fiscal: 'Potencial de redução de custos para empresas e aumento da competitividade. Impacto fiscal de curto prazo pode ser neutro ou positivo.',
      },
      criticism:
        'Especialistas questionam a metodologia de cálculo dos R$ 1,7 trilhão. Parte das "ineficiências" identificadas são, na verdade, proteções trabalhistas e ambientais.',
    },
    {
      title: 'Flexibilização trabalhista e poupança para recém-nascidos (Pilar 2)',
      category: 'Trabalho e Social',
      detailLevel: 'high',
      summary:
        'O segundo pilar prevê consolidar e aprofundar a reforma trabalhista de 2017, com maior prevalência do negociado sobre o legislado. Inclui também a criação de uma poupança de R$ 1.000 para cada criança ao nascer, inspirada em modelos de países nórdicos.',
      implementation:
        'Ampliação da reforma trabalhista via legislação ordinária. A poupança seria gerida pelo governo federal e resgatável na maioridade.',
      feasibility: {
        political: 'Reforma trabalhista tem apoio empresarial. Poupança para recém-nascidos tem apelo popular.',
        fiscal: 'A poupança custaria aproximadamente R$ 2,8 bilhões por ano (2,8 milhões de nascimentos x R$ 1.000).',
      },
      criticism:
        'Sindicatos e partidos de esquerda se opõem à flexibilização trabalhista. Economistas questionam se R$ 1.000 tem impacto real no longo prazo.',
    },
    {
      title: 'Privatização de todas as estatais federais e reforma previdenciária permanente (Pilar 3)',
      category: 'Privatizações e Previdência',
      detailLevel: 'high',
      summary:
        'O terceiro pilar prevê privatizar todas as estatais federais, incluindo Petrobras, Banco do Brasil e Caixa Econômica Federal. Também propõe uma reforma previdenciária automática, vinculando a idade mínima de aposentadoria à expectativa de vida da população.',
      implementation:
        'Programa de privatizações em fases. Reforma previdenciária via PEC com mecanismo automático de ajuste.',
      feasibility: {
        political: 'Forte resistência de sindicatos, partidos de esquerda e setores da sociedade. Exigiria maioria parlamentar robusta.',
        fiscal: 'Arrecadação potencial de centenas de bilhões com privatizações. Reforma previdenciária geraria economia de longo prazo.',
      },
      criticism:
        'Privatização da Petrobras é considerada por especialistas como risco à soberania energética. A privatização da Caixa comprometeria o acesso ao crédito habitacional para baixa renda.',
    },
    {
      title: 'Queda dos juros via coordenação fiscal-monetária e uso do FGTS (Pilar 4)',
      category: 'Economia e Crédito',
      detailLevel: 'medium',
      summary:
        'O quarto pilar prevê reduzir a taxa de juros através de maior disciplina fiscal (que reduziria o prêmio de risco) e permitir o uso do FGTS como garantia em empréstimos, reduzindo o custo do crédito para trabalhadores.',
      implementation:
        'Disciplina fiscal para reduzir o risco-país e pressionar o Banco Central a reduzir a Selic. Regulamentação do uso do FGTS como garantia.',
      feasibility: {
        political: 'Depende da credibilidade fiscal do governo e da independência do Banco Central.',
        fiscal: 'A redução dos juros geraria economia significativa no serviço da dívida pública.',
      },
      criticism:
        'Economistas alertam que o uso do FGTS como garantia pode comprometer a reserva de emergência dos trabalhadores.',
    },
    {
      title: 'Abertura comercial e integração ao comércio global (Pilar 5)',
      category: 'Comércio Exterior',
      detailLevel: 'medium',
      summary:
        'O quinto pilar prevê reduzir tarifas de importação, assinar acordos de livre-comércio com países desenvolvidos e sair do BRICS, aproximando o Brasil dos Estados Unidos e da Europa.',
      implementation:
        'Redução unilateral de tarifas, negociação de acordos bilaterais e multilaterais de livre-comércio.',
      feasibility: {
        political: 'Apoio do setor exportador e do agronegócio. Resistência da indústria nacional que depende de proteção tarifária.',
        fiscal: 'Redução de tarifas pode reduzir arrecadação de curto prazo, mas potencialmente aumentar a eficiência econômica.',
      },
      criticism:
        'Economistas industriais alertam que a abertura comercial sem proteção pode desindustrializar o Brasil. A saída do BRICS é vista como perda de influência geopolítica.',
    },
    {
      title: 'Reforma administrativa e corte de privilégios',
      category: 'Administração Pública',
      detailLevel: 'high',
      summary:
        'Pretende reduzir o gasto estrutural do governo federal com funcionalismo, cortando cargos comissionados, benefícios considerados excessivos e reformando o regime jurídico dos servidores públicos.',
      implementation:
        'PEC de reforma administrativa. Revisão de benefícios como auxílio-moradia, diárias e outros penduricalhos.',
      feasibility: {
        political: 'Resistência dos servidores públicos e de seus sindicatos. Apoio do mercado financeiro.',
        fiscal: 'Potencial de economia de dezenas de bilhões por ano.',
      },
      criticism:
        'Servidores públicos alertam que a reforma pode comprometer a qualidade dos serviços públicos e a independência funcional de órgãos de controle.',
    },
    {
      title: 'Postura anti-STF e governo com perfil empresarial',
      category: 'Reforma Institucional',
      detailLevel: 'medium',
      summary:
        'No lançamento de sua pré-candidatura, Zema defendeu mandatos fixos para ministros do STF e criticou o "ativismo judicial". Propõe um governo com perfil empresarial, com ministros técnicos sem filiação partidária.',
      implementation:
        'Mandatos fixos para ministros do STF exigiriam PEC. Governo técnico dependeria da capacidade de atrair nomes qualificados.',
      feasibility: {
        political: 'Mandatos fixos têm apoio da direita. Resistência do STF e de partidos democráticos.',
        fiscal: 'Sem impacto fiscal direto.',
      },
      criticism:
        'Juristas alertam que mandatos fixos para ministros do STF podem comprometer a independência do Judiciário.',
    },
    {
      title: 'Focalização de programas sociais e combate a fraudes',
      category: 'Política Social',
      detailLevel: 'medium',
      summary:
        'Defende focalizar programas sociais como o Bolsa Família nos mais pobres, combatendo fraudes e beneficiários indevidos. Não propõe extinção do programa, mas revisão dos critérios de elegibilidade.',
      implementation:
        'Auditoria dos cadastros de beneficiários, cruzamento de dados e revisão periódica dos critérios de elegibilidade.',
      feasibility: {
        political: 'Discurso de combate a fraudes tem apelo popular. Implementação é tecnicamente complexa.',
        fiscal: 'Potencial de economia com a exclusão de beneficiários indevidos.',
      },
      criticism:
        'Especialistas alertam que revisões muito rígidas podem excluir beneficiários legítimos em situação de vulnerabilidade.',
    },
    {
      title: 'Combate às facções criminosas e maior autonomia dos estados',
      category: 'Segurança Pública',
      detailLevel: 'low',
      summary:
        'Defende maior autonomia dos estados no combate ao crime organizado, com menos interferência federal. Usa o modelo de segurança de Minas Gerais como referência.',
      implementation:
        'Revisão da PEC da Segurança Pública para garantir maior autonomia estadual. Integração de bancos de dados policiais.',
      feasibility: {
        political: 'Apoio de governadores de direita. Resistência do governo federal.',
        fiscal: 'Sem impacto fiscal federal direto.',
      },
      criticism:
        'Especialistas em segurança pública alertam que a fragmentação das forças de segurança dificulta o combate a organizações criminosas que atuam em múltiplos estados.',
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Consignado do Grupo Zema — conflito de interesses',
        year: 2022,
        evidenceLevel: 'allegation',
        sourceType: 'Imprensa / Ministério Público',
        status: 'Investigação em andamento — sem denúncia formal',
        description:
          'O Grupo Zema, empresa da família do governador, oferece empréstimos consignados a servidores públicos de Minas Gerais. Há suspeitas de que a posição do governador favoreceu os negócios da família, com acesso privilegiado à folha de pagamento dos servidores estaduais.',
        defense:
          'Zema afirmou que o Grupo Zema opera de forma independente e que não há conflito de interesses. A empresa teria iniciado as operações de consignado antes de sua eleição.',
      },
      {
        title: 'Licenciamentos ambientais irregulares — mineração',
        year: 2021,
        evidenceLevel: 'allegation',
        sourceType: 'ONGs ambientais / Imprensa',
        status: 'Sem denúncia formal',
        description:
          'Organizações ambientais acusaram o governo Zema de facilitar licenciamentos ambientais para empresas de mineração em Minas Gerais, estado com histórico de tragédias como Mariana (2015) e Brumadinho (2019).',
        defense:
          'O governo Zema afirmou que os licenciamentos seguiram todos os procedimentos legais e que o estado tem um dos sistemas de fiscalização ambiental mais rigorosos do país.',
      },
      {
        title: 'Suspensão unilateral do pagamento da dívida com a União',
        year: 2019,
        evidenceLevel: 'fact',
        sourceType: 'STF / Imprensa',
        status: 'Disputas judiciais em andamento',
        description:
          'Zema suspendeu unilateralmente o pagamento da dívida de Minas com a União (R$ 160 bilhões), alegando que os termos eram injustos. O governo federal contestou judicialmente e o STF interveio para garantir os pagamentos.',
        defense:
          'Zema argumentou que a dívida foi contraída em condições desfavoráveis e que os juros cobrados pela União são abusivos.',
      },
    ],
  },
};

export default romeuZema;

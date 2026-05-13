const flavioBolsonaro = {
  id: 'flavio-bolsonaro',
  name: 'Flávio Bolsonaro',
  slug: 'flavio-bolsonaro',

  profile: {
    role: 'Senador da República',
    party: 'PL',
    ideology: 'Direita',
  },

  proposals: [
    {
      title: 'Redução da maioridade penal',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende reduzir a maioridade penal para 16 anos ou menos em crimes considerados graves.',
      implementation:
        'Necessitaria de Proposta de Emenda Constitucional aprovada pelo Congresso Nacional.',

      feasibility: {
        political: 'Possui apoio relevante em setores conservadores.',
        fiscal: 'Exigiria expansão do sistema prisional e socioeducativo.',
      },
    },

    {
      title: 'Classificação de facções como terrorismo',
      category: 'Segurança Pública',
      detailLevel: 'low',
      summary:
        'Pretende classificar PCC e Comando Vermelho como organizações terroristas.',
      implementation: '',

      feasibility: {
        political: 'Tema possui apoio em parte do Congresso.',
        fiscal: 'Impacto operacional não detalhado.',
      },
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Caso da rachadinha',
        year: 2019,
        evidenceLevel: 'investigation',
        sourceType: 'Ministério Público / COAF',
        status: 'Investigação em andamento',
        description:
          'Investigação apura suposto esquema de devolução de salários de assessores quando deputado estadual.',
      },
    ],

    partyCorruption: [
      {
        title: 'Escândalo do Ministério dos Transportes',
        year: 2011,
        evidenceLevel: 'investigation',
        sourceType: 'Reportagens e investigações',
        status: 'Cúpula afastada à época',
        description:
          'Denúncias envolveram suposto esquema de cobrança de propina em contratos ligados ao antigo PR, atual PL.',
      },
    ],
  },
};

export default flavioBolsonaro;

const lula = {
  id: 'lula',
  name: 'Luiz Inácio Lula da Silva',
  slug: 'lula',

  profile: {
    role: 'Presidente do Brasil',
    party: 'PT',
    ideology: 'Centro-esquerda',
  },

  proposals: [
    {
      title: 'Redução da jornada de trabalho',
      category: 'Trabalho',
      detailLevel: 'low',
      summary:
        'Defende a redução da jornada de trabalho e o fim do modelo 6x1.',
      implementation:
        '',

      feasibility: {
        political: 'Exigiria negociação ampla no Congresso e forte reação empresarial.',
        fiscal: 'Impacto indireto sobre produtividade e folha de pagamento.',
      },
    },

    {
      title: 'Transporte público gratuito',
      category: 'Mobilidade',
      detailLevel: 'slogan',
      summary:
        'O partido defende expansão e possível gratuidade do transporte público.',
      implementation: '',

      feasibility: {
        political: 'Dependeria de articulação federativa entre União, estados e municípios.',
        fiscal: 'Alto impacto fiscal sem fonte de custeio apresentada.',
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

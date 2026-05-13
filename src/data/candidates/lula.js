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
      summary:
        'O partido defende expansão e possível gratuidade do transporte público.',
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
        'Articula plano de soberania nacional com investimentos em infraestrutura que reduzam a dependência externa do Brasil em setores estratégicos: exploração mineral, segurança alimentar, fortalecimento militar e independência digital.',
      implementation:
        'Elaboração de projeto nacional de médio e longo prazos em colaboração com os ministros Fernando Haddad, Geraldo Alckmin e Simone Tebet, com foco em diversificação econômica e fortalecimento de cadeias produtivas estratégicas.',
      feasibility: {
        political: 'Agenda de soberania tem apelo amplo; implementação depende de articulação ministerial e aprovação orçamentária.',
        fiscal: 'Exige investimentos públicos significativos e atração de capital privado para setores estratégicos.',
      },
    },

    {
      title: 'Legado de infraestrutura para um quarto mandato',
      category: 'Infraestrutura e Soberania',
      detailLevel: 'low',
      summary:
        'Lula sinalizou que um eventual quarto mandato precisaria deixar um legado além dos programas sociais, com projeto nacional de médio e longo prazos para fortalecer a infraestrutura e diversificar a economia.',
      implementation: '',
      feasibility: {
        political: 'Depende de coalizão parlamentar estável e continuidade do governo.',
        fiscal: 'Escopo e custo não detalhados publicamente.',
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
        fiscal: 'Reajuste real do salário mínimo impacta benefícios previdenciários e assistenciais indexados ao piso.',
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

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

    {
      title: 'Nova reforma da Previdência',
      category: 'Trabalho e Previdência',
      detailLevel: 'medium',
      summary:
        'Segundo o coordenador de sua pré-campanha, senador Rogério Marinho, um eventual governo de Flávio pretende promover uma nova reforma da Previdência porque o modelo atual "está estourando".',
      implementation:
        'Revisão das regras de correção das aposentadorias, possível desvinculação do reajuste do salário mínimo dos benefícios previdenciários e ajuste automático conforme expectativa de vida.',
      feasibility: {
        political: 'Enfrenta forte resistência de sindicatos e partidos de esquerda; exige coalizão ampla no Congresso.',
        fiscal: 'Potencial de redução da pressão fiscal de longo prazo sobre o INSS.',
      },
      criticism:
        'Sindicalistas e analistas criticam o plano, afirmando que essas mudanças poderiam congelar o poder de compra dos aposentados.',
    },

    {
      title: 'Atualização da legislação trabalhista',
      category: 'Trabalho e Previdência',
      detailLevel: 'medium',
      summary:
        'Marinho afirmou que a reforma trabalhista de 2017 precisa ser atualizada para contemplar inovações tecnológicas e novas formas de trabalho. A campanha discute mudanças na jornada 6×1, com compensações às empresas via desoneração da folha salarial.',
      implementation:
        'Atualização da CLT para novas modalidades de trabalho (plataformas digitais, trabalho remoto) e revisão da jornada 6×1 com contrapartidas de desoneração para empresas.',
      feasibility: {
        political: 'Reforma trabalhista de 2017 já criou precedente; atualização pode ter apoio empresarial.',
        fiscal: 'Desoneração da folha implica compensação de receita previdenciária.',
      },
    },

    {
      title: 'Novo arcabouço fiscal e rearranjo orçamentário',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'A equipe defende criar um novo arcabouço fiscal para substituir a regra vigente. Marinho criticou o arcabouço atual, dizendo que ele "é uma peneira", e que será preciso flexibilizar a vinculação e indexação do orçamento.',
      implementation:
        'Substituição do arcabouço fiscal atual por nova regra; desvinculação do piso constitucional de gastos em saúde e educação; separação do reajuste do salário mínimo dos benefícios previdenciários.',
      feasibility: {
        political: 'Desvinculações constitucionais exigem PEC com maioria qualificada; tema politicamente sensível.',
        fiscal: 'Ajuste equivalente a cerca de 2% do PIB discutido entre aliados; impacto depende das medidas adotadas.',
      },
      criticism:
        'Sindicalistas e analistas criticam o plano, afirmando que essas mudanças poderiam limitar investimentos sociais.',
    },

    {
      title: 'Privatizações amplas',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'low',
      summary:
        'Textos críticos ao plano afirmam que ele prevê a privatização de até 95% das empresas estatais, incluindo Petrobras, Banco do Brasil e Caixa Econômica Federal.',
      implementation: '',
      feasibility: {
        political: 'Privatização de Petrobras, BB e CEF enfrenta resistência intensa no Congresso e na sociedade.',
        fiscal: 'Receita expressiva de curto prazo; perda de dividendos no longo prazo.',
      },
      criticism:
        'Fontes críticas ao plano alertam que a venda de estatais estratégicas comprometeria soberania econômica e acesso a serviços financeiros em regiões remotas.',
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Caso das "rachadinhas"',
        year: 2019,
        evidenceLevel: 'investigation',
        sourceType: 'Ministério Público / COAF / STJ',
        status: 'Investigação suspensa pelo STJ',
        description:
          'Flávio é investigado por suposto desvio de salários de assessores quando era deputado estadual no Rio de Janeiro. A investigação foi suspensa pelo Superior Tribunal de Justiça (STJ), que considerou inválidas as provas obtidas na primeira instância.',
        defense:
          'Após a decisão do STJ, o senador declarou em nota que, após quase três anos de investigação, "nada foi encontrado" contra ele. Afirmou ser vítima de perseguição de alguns membros do Ministério Público e agradeceu aos que o apoiaram.',
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

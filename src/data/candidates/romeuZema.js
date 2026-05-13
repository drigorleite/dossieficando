const romeuZema = {
  id: 'romeu-zema',
  name: 'Romeu Zema',
  slug: 'romeu-zema',

  profile: {
    role: 'Governador de Minas Gerais',
    party: 'NOVO',
    ideology: 'Direita liberal / Conservador fiscal',
  },

  proposals: [
    {
      title: 'Estado menor e privatizações',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'high',
      summary:
        'Defende reduzir o tamanho do Estado e vender estatais consideradas ineficientes, ampliando concessões e parcerias público-privadas, incluindo a privatização de grandes empresas estatais.',
      implementation:
        'Ampliar concessões e PPPs, privatizar estatais federais ineficientes, reduzir participação direta do Estado na economia.',
      feasibility: {
        political: 'Privatizações de grandes estatais (Petrobras, Banco do Brasil) exigem maioria qualificada no Congresso e enfrentam forte oposição.',
        fiscal: 'Receita de curto prazo com venda de ativos; ganhos de eficiência dependem da qualidade das concessões.',
      },
      criticism:
        'Opositores argumentam que privatizações de empresas estratégicas comprometem soberania nacional e podem elevar preços de serviços essenciais.',
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
      title: 'Simplificação tributária',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'Defende simplificar o sistema tributário, com redução gradual de impostos e incentivos a empreendedores e pequenas empresas.',
      implementation:
        'Apoio à reforma tributária em curso, com ênfase em redução de alíquotas e desburocratização para pequenas empresas.',
      feasibility: {
        political: 'Reforma tributária aprovada em 2023 já encaminha parte dessa agenda.',
        fiscal: 'Redução de alíquotas exige compensação de receita ou corte de gastos equivalente.',
      },
    },

    {
      title: 'Flexibilização trabalhista e nova reforma da Previdência',
      category: 'Trabalho e Previdência',
      detailLevel: 'medium',
      summary:
        'Apoia maior flexibilidade nas leis trabalhistas (pagamento por hora, contratos flexíveis) e defende nova reforma da Previdência que ajuste benefícios automaticamente conforme a expectativa de vida.',
      implementation:
        'Atualização da CLT para novas modalidades de trabalho e mecanismo automático de ajuste da idade de aposentadoria à expectativa de vida.',
      feasibility: {
        political: 'Nova reforma previdenciária enfrenta forte resistência de sindicatos e partidos de esquerda.',
        fiscal: 'Ajuste automático à expectativa de vida reduziria pressão fiscal de longo prazo sobre o INSS.',
      },
      criticism:
        'Críticos argumentam que a indexação automática penaliza trabalhadores em regiões com menor expectativa de vida.',
    },

    {
      title: 'Mandatos para ministros do STF e fim de decisões monocráticas',
      category: 'Judiciário',
      detailLevel: 'medium',
      summary:
        'Propõe impor mandatos aos ministros do Supremo Tribunal Federal, acabar com decisões monocráticas e modificar os critérios de nomeação.',
      implementation:
        'PEC para estabelecer mandatos fixos, exigir aprovação colegiada de decisões relevantes e diversificar critérios de indicação ao STF.',
      feasibility: {
        political: 'Tema polêmico; exige PEC com maioria qualificada e enfrenta resistência do próprio STF.',
        constitutional: 'Alteração na composição e funcionamento do STF requer emenda constitucional.',
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
      title: 'Maior autonomia dos estados e penas mais severas na segurança pública',
      category: 'Segurança Pública',
      detailLevel: 'low',
      summary:
        'Defende maior autonomia dos estados para gerir suas polícias e políticas de segurança, com penas mais severas para crimes violentos.',
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

const ronaldoCaiado = {
  id: 'ronaldo-caiado',
  name: 'Ronaldo Caiado',
  slug: 'ronaldo-caiado',

  profile: {
    role: 'Governador de Goiás',
    party: 'PSD',
    ideology: 'Centro-direita / Conservador',
  },

  proposals: [
    {
      title: 'Classificar facções criminosas como organizações terroristas',
      category: 'Segurança Pública',
      detailLevel: 'high',
      summary:
        'Propõe classificar facções como PCC e Comando Vermelho como organizações terroristas, possibilitando o uso de instrumentos legais mais duros, inclusive a atuação das Forças Armadas no combate ao crime organizado.',
      implementation:
        'Aprovação de legislação antiterrorismo específica que enquadre facções criminosas, permitindo uso de legislação de segurança nacional e atuação das Forças Armadas.',
      feasibility: {
        political: 'Tema com apoio crescente em setores conservadores do Congresso; pode encontrar resistência por questões de direitos humanos.',
        constitutional: 'Exigiria revisão da Lei Antiterrorismo (Lei 13.260/2016) e possivelmente PEC para autorizar atuação das Forças Armadas.',
      },
      criticism:
        'Especialistas alertam que a classificação como terrorismo pode ser usada de forma abusiva e não resolve as causas estruturais do crime organizado.',
    },

    {
      title: 'Integração das forças de segurança',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende atuação integrada entre polícias estaduais, forças federais e Forças Armadas, com interoperabilidade de sistemas e foco na retomada de territórios controlados pelo crime.',
      implementation:
        'Criação de sistema integrado de inteligência e operações entre as diferentes forças de segurança, com comando unificado em situações de crise.',
      feasibility: {
        political: 'Exige cooperação entre governos estaduais e federal; Caiado já implementou modelo em Goiás.',
        fiscal: 'Investimento em tecnologia de interoperabilidade e treinamento conjunto.',
      },
    },

    {
      title: 'Controle de presídios e endurecimento de penas',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Critica o domínio de facções dentro de prisões e pretende reforçar a gestão penitenciária, endurecer penas e impedir que líderes criminosos continuem comandando organizações de dentro das cadeias.',
      implementation:
        'Reformas no sistema penitenciário com isolamento de lideranças de facções, tecnologia de bloqueio de celulares e revisão do regime de progressão de penas.',
      feasibility: {
        political: 'Amplo apoio político; implementação depende de investimento federal no sistema prisional.',
        fiscal: 'Custo elevado de modernização do sistema penitenciário nacional.',
      },
    },

    {
      title: 'Maior autonomia dos estados na segurança pública',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende maior autonomia dos estados para gerir suas polícias e políticas de segurança, com menos interferência federal e penas mais severas para crimes violentos.',
      implementation:
        'Revisão do pacto federativo em segurança pública, com transferência de recursos e competências para os estados.',
      feasibility: {
        political: 'Alinhado com outros governadores de centro-direita; exige negociação com o governo federal.',
        fiscal: 'Redistribuição de recursos do Fundo Nacional de Segurança Pública.',
      },
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Venda de mineradora a estrangeiros',
        year: 2023,
        evidenceLevel: 'investigation',
        sourceType: 'Pedidos de investigação / Reportagens',
        status: 'Sem acusações formais até maio de 2026',
        description:
          'Caiado foi alvo de pedidos de investigação sobre a venda de uma mineradora a investidores estrangeiros, com questionamentos sobre os critérios e condições da transação.',
      },
      {
        title: 'Contratos com empresário investigado pelo PCC',
        year: 2023,
        evidenceLevel: 'allegation',
        sourceType: 'Reportagens investigativas',
        status: 'Sem acusações formais até maio de 2026',
        description:
          'Reportagens apontaram contratos do governo de Goiás com empresário que teria ligações com investigações envolvendo o PCC, sem que houvesse acusação formal contra Caiado até maio de 2026.',
      },
    ],
  },
};

export default ronaldoCaiado;

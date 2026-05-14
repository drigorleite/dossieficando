const renanSantos = {
  id: 'renan-santos',
  name: 'Renan Santos',
  slug: 'renan-santos',

  profile: {
    role: 'Fundador do MBL / Pré-candidato',
    party: 'Missão',
    ideology: 'Direita liberal',
  },

  proposals: [
    {
      title: 'Cidade-Estado do Rio de Janeiro (recriar a Guanabara)',
      category: 'Reforma Político-Administrativa',
      detailLevel: 'high',
      summary:
        'Renan Santos propõe recriar a antiga Guanabara e transformar a cidade do Rio de Janeiro em um estado autônomo. Afirma que a capital fluminense vive um "colapso estrutural" e defende usar as Forças Armadas como instrumento auxiliar para reconquistar territórios dominados por facções. A nova unidade teria autonomia para controlar suas próprias forças de segurança, "destruir o crime organizado" e implementar um amplo processo de "desfavelização".',
      implementation:
        'Separação constitucional da cidade do Rio de Janeiro do estado homônimo, criando uma nova unidade federativa autônoma com orçamento próprio, polícia própria e políticas públicas independentes de interferências do restante do estado. A nova cidade-estado seria reposicionada como hub de tecnologia, mercado financeiro e turismo.',
      feasibility: {
        political: 'Exigiria PEC aprovada por maioria qualificada no Congresso e referendo popular; altamente controverso politicamente.',
        constitutional: 'A criação de um novo estado exige aprovação da população diretamente interessada (plebiscito) e do Congresso Nacional, conforme art. 18 da Constituição.',
        fiscal: 'Impacto fiscal complexo: redistribuição de receitas de ICMS, FPE e dívidas entre o novo estado e o Rio de Janeiro remanescente.',
      },
      criticism:
        'Críticos apontam que a separação criaria disputas jurídicas e financeiras complexas e não resolveria as causas estruturais da violência sem políticas sociais complementares.',
    },

    {
      title: 'Guerra às facções e reocupação de territórios',
      category: 'Segurança Pública',
      detailLevel: 'medium',
      summary:
        'Defende declarar guerra às facções criminosas e "reocupar" territórios controlados pelo crime com forças de segurança permanentes nas comunidades.',
      implementation:
        'Presença permanente de forças de segurança nas comunidades, com estrutura de Estado instalada nos territórios retomados.',
      feasibility: {
        political: 'Tema com apelo popular, mas implementação exigiria coordenação federativa e legislação específica.',
        fiscal: 'Custo operacional elevado para manutenção permanente de efetivo nas comunidades.',
      },
      criticism:
        'Críticos apontam que a militarização de favelas sem política social complementar tende a aumentar violência sem resolver causas estruturais.',
    },

    {
      title: 'Desfavelização e urbanização',
      category: 'Habitação',
      detailLevel: 'medium',
      summary:
        'Propõe eliminar favelas através de programas habitacionais que transformem esses territórios em bairros regulares, com investimentos em infraestrutura.',
      implementation:
        'Programas habitacionais de realocação e urbanização, com regularização fundiária e provisão de serviços públicos.',
      feasibility: {
        political: 'Depende de articulação entre União, estados e municípios e de orçamento robusto.',
        fiscal: 'Custo elevado; experiências anteriores (PAC, Minha Casa Minha Vida) mostram escala do desafio.',
      },
    },

    {
      title: 'Industrialização do Nordeste',
      category: 'Desenvolvimento Regional',
      detailLevel: 'low',
      summary:
        'Defende a industrialização do Nordeste como prioridade para reduzir desigualdades regionais.',
      implementation: '',
      feasibility: {
        political: 'Objetivo amplamente compartilhado, mas mecanismos específicos não foram detalhados.',
        fiscal: 'Exigiria incentivos fiscais, infraestrutura logística e atração de investimentos privados.',
      },
    },

    {
      title: 'Fim de privilégios e responsabilidade fiscal',
      category: 'Economia e Finanças Públicas',
      detailLevel: 'medium',
      summary:
        'O Livro Amarelo propõe acabar com privilégios de servidores, reduzir gastos públicos, adotar responsabilidade fiscal, simplificar impostos e incentivar o empreendedorismo. O financiamento do plano programático viria da venda do próprio "Livro Amarelo".',
      implementation:
        'Reforma administrativa para cortar benefícios excessivos do funcionalismo, simplificação tributária e corte de despesas não essenciais.',
      feasibility: {
        political: 'Reforma administrativa enfrenta resistência de servidores e de bancadas no Congresso.',
        fiscal: 'Potencial de redução do déficit estrutural, mas impacto depende da amplitude das medidas.',
      },
    },

    {
      title: 'Combate à poluição, desmatamento e melhoria da saúde pública',
      category: 'Meio Ambiente e Saúde',
      detailLevel: 'low',
      summary:
        'O plano menciona intensificar o combate à poluição e ao desmatamento e melhorar a qualidade do serviço público de saúde.',
      implementation: '',
      feasibility: {
        political: 'Agenda ambiental e de saúde com amplo apoio retórico, mas sem instrumentos específicos apresentados.',
        fiscal: 'Impacto fiscal não estimado.',
      },
    },
  ],

  sections: {
    suspicions: [
      {
        title: 'Ligação alegada com influenciador neonazista',
        year: 2024,
        evidenceLevel: 'allegation',
        sourceType: 'Reportagens / Prints em redes sociais',
        status: 'Negado pelo candidato',
        description:
          'Artigos apontaram que um influenciador norte-americano que se identifica como neonazista publicou elogios ao Missão e ao MBL e teria apresentado Renan Santos a setores da extrema direita internacional. As reportagens reproduziram prints de publicações em que o influenciador faz apologia ao genocídio e se diz próximo do pré-candidato.',
        defense:
          'Em entrevista ao portal Política Alagoana, Renan Santos afirmou não conhecer o influenciador e negou qualquer vínculo com o perfil. Disse que o conteúdo divulgado não representa o Missão e que ninguém está autorizado a falar em nome da legenda, ressaltando que manifestações de terceiros não refletem a posição do partido.',
      },
    ],
  },
};

export default renanSantos;

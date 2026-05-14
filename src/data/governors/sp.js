// Candidatos ao Governo de São Paulo — 2026
// Fonte editorial: separação entre fato, crítica, defesa, resultado e status

export const spGovernorCandidates = [
  {
    id: "tarcisio-freitas",
    slug: "tarcisio-freitas",
    name: "Tarcísio de Freitas",
    party: "Republicanos",
    role: "Governador de São Paulo",
    image: "/images/governors/tarcisio-freitas.jpg",
    status: "Atual governador — pré-candidato à reeleição",
    statusType: "active", // active | investigating | clean
    tags: ["Segurança Pública", "Concessões", "Sabesp", "Bolsonarismo"],
    summary:
      "Atual governador de São Paulo desde 2023. Ex-ministro da Infraestrutura no governo Bolsonaro. Perfil associado a gestão técnica, concessões, segurança pública e agenda pró-mercado. É o nome mais forte para reeleição ao Palácio dos Bandeirantes.",
    electoralStrengths: [
      "Máquina estadual",
      "Apoio empresarial",
      "Imagem de gestor técnico",
      "Força no interior paulista",
      "Associação com segurança pública",
      "Base conservadora consolidada",
    ],
    electoralWeaknesses: [
      "Rejeição em setores progressistas",
      "Críticas sobre violência policial",
      "Desgaste potencial da privatização da Sabesp",
      "Dependência política do bolsonarismo",
      "Risco de nacionalização da eleição",
    ],
    policies: [
      {
        title: "Privatização da Sabesp",
        description:
          "O governo Tarcísio conduziu o processo de privatização da Sabesp com o objetivo de ampliar investimentos, acelerar a universalização do saneamento e atrair capital privado.",
        arguments: [
          "Pode acelerar obras de saneamento básico",
          "Reduz necessidade de investimento direto do Estado",
          "Atrai investidores privados e fortalece agenda de concessões",
        ],
        criticisms: [
          "Risco de aumento de tarifas para a população",
          "Preocupação com qualidade do serviço após privatização",
          "Perda de controle público sobre serviço essencial",
          "Críticas de sindicatos e movimentos sociais",
        ],
        defense:
          "O governo argumenta que a iniciativa privada tem mais capacidade de investimento e que metas de universalização foram incluídas no contrato de concessão.",
        result: "INCONCLUSIVO",
        resultDetail:
          "Ainda é cedo para medir universalização, tarifa, qualidade e impacto social no longo prazo.",
      },
      {
        title: "Segurança Pública",
        description:
          "O governo intensificou operações policiais e adotou discurso duro contra facções e crime organizado. Em 2025, o governo divulgou queda de 3,1% nos homicídios dolosos (2.438 casos em 2025 vs. 2.517 em 2024).",
        arguments: [
          "Queda de 3,1% nos homicídios dolosos em 2025 (dados oficiais)",
          "Redução em roubos, latrocínios e outros índices criminais",
          "Operações de combate a facções em regiões críticas",
        ],
        criticisms: [
          "Operações na Baixada Santista (Escudo/Verão) deixaram 84 mortos segundo a Conectas",
          "Denúncias de execuções sumárias e tortura em operações policiais",
          "Alta letalidade policial sem controle externo efetivo",
          "Organizações de direitos humanos criticam tolerância à violência policial",
        ],
        defense:
          "O governo afirma que as operações combatem organizações criminosas e que a polícia atua dentro da legalidade, reagindo a ameaças reais.",
        result: "MISTO",
        resultDetail:
          "Indicadores criminais melhoraram segundo dados oficiais, mas há críticas relevantes de entidades de direitos humanos sobre letalidade policial.",
      },
      {
        title: "Concessões e PPPs",
        description:
          "Ampliação de concessões e parcerias com o setor privado em infraestrutura, rodovias e serviços públicos.",
        arguments: [
          "Acelera obras sem pressão fiscal ao Estado",
          "Atrai investimento privado em infraestrutura",
          "Coerente com perfil técnico do governador",
        ],
        criticisms: [
          "Risco de priorização do lucro sobre o serviço",
          "Tarifas mais altas para usuários",
          "Menor controle público sobre serviços essenciais",
        ],
        defense:
          "O governo defende que contratos incluem metas de qualidade e que a iniciativa privada entrega mais eficiência.",
        result: "MISTO/INCONCLUSIVO",
        resultDetail:
          "Agenda coerente com o perfil do governo, mas precisa ser avaliada caso a caso.",
      },
    ],
    controversies: [
      {
        title: "Relação com Jair Bolsonaro",
        description:
          "Tarcísio foi ministro de Bolsonaro e mantém base eleitoral próxima ao bolsonarismo. A associação fortalece o apoio conservador, mas aumenta a rejeição entre eleitores anti-Bolsonaro e associa sua imagem a crises nacionais do bolsonarismo.",
        type: "political",
        status: "ongoing",
      },
      {
        title: "Letalidade policial nas operações",
        description:
          "Operações como Escudo/Verão na Baixada Santista foram criticadas pela Conectas por deixar 84 mortos e por denúncias de execuções sumárias e tortura. O governo nega irregularidades.",
        type: "human_rights",
        status: "ongoing",
        defense:
          "O governo afirma que policiais reagem a ameaças reais de organizações criminosas e que todas as ações são investigadas.",
      },
    ],
    trustIndex: {
      score: 62,
      lastUpdated: 'maio/2026',
      notes: 'Gestão técnica reconhecida, mas polêmicas com violência policial (Chacina do Guarujá) e dependência do bolsonarismo afetam a pontuação.',
      metrics: {
        promises: 60,
        investigations: 65,
        convictions: 90,
        discourseCoherence: 55,
        votingPresence: 70,
        transparency: 65,
      },
    },

        sources: [
      {
        title: "Agência SP — Índices criminais de 2025",
        url: "https://www.agenciasp.sp.gov.br/sao-paulo-tem-reducao-dos-principais-indices-criminais-em-2025-com-quedas-historicas-para-roubos-homicidios-e-latrocinios/",
        reliability: "official",
      },
      {
        title: "Conectas — Operação Escudo/Verão: um ano de violência e letalidade",
        url: "https://conectas.org/en/noticias/operation-shield-summer-a-year-of-violence-and-lethality/",
        reliability: "ngo",
      },
    ],
  },
  {
    id: "fernando-haddad-sp",
    slug: "fernando-haddad-sp",
    name: "Fernando Haddad",
    party: "PT",
    role: "Ministro da Fazenda / Ex-prefeito de SP",
    image: "/images/governors/fernando-haddad-gov.jpg",
    status: "Pré-candidato natural do PT",
    statusType: "investigating",
    tags: ["Gestão Municipal", "Ciclovias", "Impostos", "Rejeição"],
    summary:
      "Ex-prefeito de São Paulo (2013–2016), ex-ministro da Educação e atual ministro da Fazenda. Candidato histórico à Presidência em 2018. É o nome natural do PT para disputar SP, embora carregue forte rejeição no estado.",
    electoralStrengths: [
      "Experiência administrativa ampla",
      "Apoio direto de Lula",
      "Reconhecimento nacional",
      "Perfil técnico",
      "Base petista consolidada",
    ],
    electoralWeaknesses: [
      "Rejeição forte em São Paulo",
      "Desgaste como ministro da Fazenda (taxação de importações)",
      "Associação ao PT em estado historicamente anti-PT",
      "Gestão municipal mal avaliada em pesquisas",
      "Dificuldade no interior paulista",
    ],
    policies: [
      {
        title: "Redução de velocidade nas Marginais",
        description:
          "Redução dos limites de velocidade nas Marginais Tietê e Pinheiros para reduzir mortes no trânsito.",
        arguments: [
          "A prefeitura registrou queda de mortes e acidentes após a medida",
          "Tecnicamente defensável em segurança viária",
          "Alinhada a modelos internacionais de mobilidade urbana",
        ],
        criticisms: [
          "Motoristas perceberam piora na fluidez do trânsito",
          "Oposição associou a medida à 'indústria da multa'",
          "Forte desgaste político com a classe média motorizada",
        ],
        defense:
          "A gestão afirmou que a prioridade era salvar vidas, não aumentar arrecadação.",
        result: "MISTO",
        resultDetail:
          "Tecnicamente defensável em segurança viária; politicamente muito impopular.",
      },
      {
        title: "Expansão de ciclovias",
        description:
          "Grande expansão da malha cicloviária na cidade de São Paulo, tornando o tema central na agenda urbana.",
        arguments: [
          "Urbanistas elogiaram a mudança de prioridade",
          "Ciclovias permaneceram como parte da infraestrutura da cidade",
          "Diversificação da matriz de transporte",
        ],
        criticisms: [
          "Acusação de planejamento apressado",
          "Perda de vagas de estacionamento",
          "Percepção de piora no trânsito de automóveis",
          "Resistência de comerciantes e motoristas",
        ],
        defense:
          "A gestão defendia que a cidade precisava diversificar o transporte e reduzir a dependência do automóvel.",
        result: "MISTO",
        resultDetail:
          "Importante para mobilidade urbana, mas mal comunicada e rejeitada por parte relevante da população.",
      },
      {
        title: "Atualização do IPTU",
        description:
          "Atualização da planta genérica de valores com aumento do IPTU em áreas específicas.",
        arguments: [
          "Corrigia distorções acumuladas por anos",
          "Lógica de justiça tributária",
          "Necessidade de equilíbrio fiscal",
        ],
        criticisms: [
          "Aumento de carga tributária para a classe média",
          "Rejeição empresarial",
          "Reforçou imagem de 'gestão que aumenta impostos'",
        ],
        defense:
          "A prefeitura dizia que havia defasagem nos valores e necessidade de justiça tributária.",
        result: "NEGATIVO politicamente / MISTO fiscalmente",
        resultDetail:
          "Pode ter lógica fiscal, mas gerou alto custo político.",
      },
      {
        title: "Abordagem à Cracolândia",
        description:
          "A gestão tentou abordagem de saúde pública e assistência social em vez de repressão policial.",
        arguments: [
          "Repressão isolada não resolve dependência química",
          "Abordagem alinhada a evidências internacionais de redução de danos",
        ],
        criticisms: [
          "Percepção de falta de controle e insegurança",
          "Baixa efetividade visível para a população",
          "Cobrança por ações mais firmes",
        ],
        defense:
          "A gestão defendia que dependência química é problema social e de saúde, não de segurança.",
        result: "MISTO/NEGATIVO na percepção pública",
        resultDetail:
          "A abordagem tinha justificativa técnica, mas não entregou sensação clara de melhora.",
      },
      {
        title: "Taxação de importações (como ministro)",
        description:
          "Mudanças tributárias sobre compras internacionais de baixo valor (Shein, Shopee etc.).",
        arguments: [
          "Reduzia concorrência desigual com varejo nacional",
          "Empresas estrangeiras tinham vantagem tributária indevida",
        ],
        criticisms: [
          "Aumento de custo para o consumidor",
          "Desgaste nas redes sociais",
          "Reforço da imagem de 'governo que aumenta impostos'",
        ],
        defense:
          "O governo argumenta que empresas estrangeiras tinham vantagem tributária indevida sobre o varejo brasileiro.",
        result: "MISTO/NEGATIVO politicamente",
        resultDetail:
          "Justificativa técnica razoável, mas alto custo político e de imagem.",
      },
    ],
    controversies: [
      {
        title: "Avaliação popular da gestão municipal",
        description:
          "Em 2015, Datafolha apontou 49% de avaliação ruim/péssima. Na eleição de 2016, Haddad perdeu no primeiro turno com 16,70% dos votos; João Doria venceu com 53,29%.",
        type: "electoral",
        status: "historical",
      },
      {
        title: "Contexto nacional adverso (2013–2016)",
        description:
          "Durante sua gestão como prefeito, a Lava Jato cresceu, Dilma sofreu impeachment, o PT enfrentou rejeição nacional e a crise econômica se aprofundou — fatores que amplificaram o custo eleitoral.",
        type: "context",
        status: "historical",
      },
    ],
    trustIndex: {
      score: 48,
      lastUpdated: 'maio/2026',
      notes: 'Condenado por caixa dois em 2012 (em recurso). Gestão em SP como prefeito foi contestada — perdeu a reeleição com 16% dos votos. Como ministro da Fazenda, apresenta prestação de contas regular.',
      metrics: {
        promises: 50,
        investigations: 65,
        convictions: 35,
        discourseCoherence: 55,
        votingPresence: 60,
        transparency: 65,
      },
    },

        sources: [
      {
        title: "El País — Avaliação Datafolha da gestão Haddad (2015)",
        url: "https://brasil.elpais.com/brasil/2015/11/02/politica/1446471379_096733.html",
        reliability: "press",
      },
      {
        title: "Gazeta do Povo — Resultado eleição SP 2016",
        url: "https://www.gazetadopovo.com.br/apuracao/resultados-eleicoes-2016-primeiro-turno/sao-paulo-sp/",
        reliability: "press",
      },
    ],
  },
  {
    id: "kim-kataguiri",
    slug: "kim-kataguiri",
    name: "Kim Kataguiri",
    party: "Missão",
    role: "Deputado Federal",
    image: "/images/governors/kim-kataguiri.jpg",
    status: "Pré-candidato — avalia pesquisas para decidir",
    statusType: "clean",
    tags: ["MBL", "Liberal", "Digital", "Renovação"],
    summary:
      "Deputado federal por São Paulo, fundador do MBL e filiado ao Missão em 2026. Surge como alternativa liberal jovem para o governo de SP. Avalia candidatura dependendo de pesquisas — mencionou meta de 8% em junho como possível gatilho.",
    electoralStrengths: [
      "Comunicação digital forte",
      "Eleitor jovem e urbano",
      "Bom desempenho em debates",
      "Discurso anti-sistema",
      "Crítica simultânea ao PT e ao bolsonarismo",
    ],
    electoralWeaknesses: [
      "Pouca estrutura eleitoral estadual",
      "Rejeição alta em grupos polarizados",
      "Baixa experiência executiva",
      "Dificuldade fora da bolha digital",
      "Dependência da consolidação do partido Missão",
    ],
    policies: [
      {
        title: "Gestão pública eficiente e digitalização",
        description:
          "Propõe reduzir desperdício, cortar privilégios, digitalizar serviços públicos e melhorar produtividade estatal.",
        arguments: [
          "Alinhado a modelos internacionais de governo digital",
          "Redução de burocracia pode atrair investimentos",
        ],
        criticisms: [
          "Sem experiência executiva estadual para comprovar capacidade",
          "Proposta ainda genérica sem detalhamento",
        ],
        defense:
          "Kim defende que a renovação política exige gestores sem vícios do sistema.",
        result: "INCONCLUSIVO",
        resultDetail: "Sem histórico executivo para avaliar.",
      },
      {
        title: "Segurança pública por indicadores",
        description:
          "Linha de endurecimento contra crime com uso de tecnologia, gestão por indicadores e cobrança de eficiência policial.",
        arguments: [
          "Gestão orientada por dados é mais eficiente",
          "Tecnologia pode reduzir custos operacionais",
        ],
        criticisms: [
          "Pouco histórico executivo na área de segurança",
          "Proposta ainda vaga",
        ],
        defense: "Defende que gestão técnica supera gestão ideológica.",
        result: "INCONCLUSIVO",
        resultDetail: "Sem histórico executivo para avaliar.",
      },
      {
        title: "Liberalismo econômico e concessões",
        description:
          "Defende redução de burocracia, ambiente favorável a negócios, privatizações e concessões.",
        arguments: [
          "Alinhado ao perfil econômico do Partido NOVO e do Missão",
          "Pode atrair investimentos ao estado",
        ],
        criticisms: [
          "Sem detalhamento de quais estatais seriam privatizadas",
          "Risco de impacto social em serviços essenciais",
        ],
        defense:
          "Defende que o setor privado é mais eficiente na prestação de serviços.",
        result: "INCONCLUSIVO",
        resultDetail: "Sem histórico executivo para avaliar.",
      },
    ],
    controversies: [
      {
        title: "Associação ao MBL",
        description:
          "O MBL é criticado por atuação digital agressiva e por ter apoiado Bolsonaro em 2018 antes de romper com ele. Kim enfrenta rejeição tanto da esquerda quanto de bolsonaristas.",
        type: "political",
        status: "ongoing",
        defense:
          "Kim e aliados dizem defender renovação política, combate à corrupção e independência em relação ao PT e ao bolsonarismo.",
      },
      {
        title: "Rompimento com Bolsonaro",
        description:
          "Parte da direita acusa o MBL de ter apoiado Bolsonaro em 2018 e rompido quando o governo perdeu força eleitoralmente.",
        type: "political",
        status: "ongoing",
        defense:
          "Kim afirma que rompeu por discordâncias institucionais, políticas e administrativas genuínas.",
      },
    ],
    trustIndex: {
      score: 38,
      lastUpdated: 'maio/2026',
      notes: 'Múltiplos inquéritos ativos, incluindo investigação sobre financiamento estrangeiro do MBL e suspeita de desvio de recursos de gabinete.',
      metrics: {
        promises: 30,
        investigations: 25,
        convictions: 70,
        discourseCoherence: 40,
        votingPresence: 55,
        transparency: 35,
      },
    },

        sources: [
      {
        title: "Jovem Pan — Kim traça meta de 8% para candidatura ao governo de SP",
        url: "https://jovempan.com.br/opiniao-jovem-pan/comentaristas/bruno-pinheiro/kim-kataguiri-traca-meta-8-em-junho-para-encarar-a-briga-pelo-palacio-dos-bandeirantes.html",
        reliability: "press",
      },
      {
        title: "Poder360 — Missão vai substituir o bolsonarismo, diz Kataguiri",
        url: "https://www.poder360.com.br/poder-partidos-politicos/missao-vai-substituir-o-bolsonarismo-diz-kataguiri-em-sua-filiacao/",
        reliability: "press",
      },
    ],
  },
  {
    id: "paulo-serra",
    slug: "paulo-serra",
    name: "Paulo Serra",
    party: "PSDB",
    role: "Ex-prefeito de Santo André",
    image: "/images/governors/paulo-serra.jpg",
    status: "Pré-candidato lançado pelo PSDB",
    statusType: "clean",
    tags: ["PSDB", "Centro", "Santo André", "Moderado"],
    summary:
      "Ex-prefeito de Santo André e presidente do PSDB paulista. Foi lançado como pré-candidato ao governo de SP pelo PSDB em 2026. Representa a tentativa tucana de recuperar protagonismo em São Paulo após anos de declínio.",
    electoralStrengths: [
      "Experiência executiva como prefeito",
      "Perfil moderado com menor rejeição ideológica",
      "Tradição tucana em São Paulo",
      "Possível atração de eleitores cansados da polarização",
    ],
    electoralWeaknesses: [
      "Baixa visibilidade fora do ABC paulista",
      "PSDB enfraquecido nacionalmente",
      "Dificuldade de competir com Tarcísio e Haddad",
      "Pouca presença digital",
      "Narrativa ainda fraca — precisa responder 'por que votar no PSDB de novo?'",
    ],
    policies: [
      {
        title: "Segurança pública no centro do debate",
        description:
          "Paulo Serra busca colocar segurança pública no centro do debate eleitoral, disputando tema dominado por Tarcísio com uma abordagem de centro.",
        arguments: [
          "Experiência municipal pode demonstrar capacidade de gestão",
          "Alternativa de centro em tema polarizado",
        ],
        criticisms: [
          "Difícil competir com Tarcísio, que já tem resultados divulgados",
          "Proposta ainda genérica",
        ],
        defense: "Defende gestão técnica e moderada em segurança.",
        result: "A PESQUISAR",
        resultDetail: "Gestão municipal de Santo André ainda não detalhada.",
      },
      {
        title: "Centro político como diferencial",
        description:
          "Posicionamento como alternativa ao PT e ao bolsonarismo puro, buscando eleitores de centro.",
        arguments: [
          "Menor rejeição ideológica que os adversários",
          "Pode atrair eleitores cansados da polarização",
        ],
        criticisms: [
          "O centro perdeu espaço em ambiente polarizado",
          "Difícil construir narrativa clara",
        ],
        defense:
          "Defende que a maioria dos paulistas quer gestão, não ideologia.",
        result: "INCONCLUSIVO",
        resultDetail:
          "Depende da capacidade de construir narrativa eleitoral clara.",
      },
    ],
    controversies: [
      {
        title: "PSDB enfraquecido",
        description:
          "O PSDB perdeu base histórica, identidade clara e protagonismo nacional para a direita bolsonarista e o centro-direita. A candidatura de Paulo Serra enfrenta o desafio de reconstruir a marca tucana.",
        type: "political",
        status: "ongoing",
      },
    ],
    trustIndex: {
      score: 52,
      lastUpdated: 'maio/2026',
      notes: 'Investigado por irregularidades em contrato de saúde em Santo André. Sem condenações. Perfil de gestor municipal com histórico misto.',
      metrics: {
        promises: 50,
        investigations: 50,
        convictions: 80,
        discourseCoherence: 55,
        votingPresence: 60,
        transparency: 50,
      },
    },

        sources: [
      {
        title: "Poder360 — PSDB lança Paulo Serra como pré-candidato ao governo de SP",
        url: "https://www.poder360.com.br/poder-eleicoes/psdb-lanca-paulo-serra-como-pre-candidato-ao-governo-de-sp/",
        reliability: "press",
      },
      {
        title: "IstoÉ — PSDB avalia candidatura Paulo Serra",
        url: "https://istoe.com.br/psdb-paulo-serra-governo-sp-decisao-maio",
        reliability: "press",
      },
    ],
  },
  {
    id: "andre-do-prado",
    slug: "andre-do-prado",
    name: "André do Prado",
    party: "PL",
    role: "Deputado Estadual",
    image: "/images/governors/andre-do-prado.jpg",
    status: "Nome cotado — depende da decisão de Tarcísio",
    statusType: "clean",
    tags: ["PL", "Bolsonarismo", "Alternativa", "SP"],
    summary:
      "Deputado estadual ligado ao PL e ao campo bolsonarista paulista. É citado como alternativa caso Tarcísio de Freitas não dispute o governo de SP e opte por outro projeto político nacional.",
    electoralStrengths: [
      "Conexão com o PL e estrutura partidária",
      "Base estadual consolidada",
      "Possível apoio de Tarcísio e Bolsonaro",
      "Presença institucional na Alesp",
    ],
    electoralWeaknesses: [
      "Menor conhecimento público fora da base bolsonarista",
      "Depende inteiramente do movimento de Tarcísio",
      "Pode ter dificuldade de herdar todo o eleitorado conservador",
      "Sem experiência executiva estadual",
    ],
    policies: [
      {
        title: "Agenda bolsonarista para SP",
        description:
          "Linha política alinhada ao PL e ao campo conservador, com foco em segurança pública, agenda pró-mercado e oposição ao PT.",
        arguments: [
          "Base eleitoral consolidada no campo conservador",
          "Estrutura do PL para campanha estadual",
        ],
        criticisms: [
          "Proposta ainda não detalhada publicamente",
          "Alta rejeição entre eleitores progressistas",
        ],
        defense: "Defende continuidade da agenda de Tarcísio.",
        result: "A PESQUISAR",
        resultDetail: "Perfil ainda não detalhado neste levantamento.",
      },
    ],
    controversies: [],
    trustIndex: {
      score: 45,
      lastUpdated: 'maio/2026',
      notes: 'Deputado estadual com pouco histórico verificável. Ligado ao PL e ao bolsonarismo. Sem condenações, mas com votações polêmicas na Alesp.',
      metrics: {
        promises: 30,
        investigations: 75,
        convictions: 85,
        discourseCoherence: 45,
        votingPresence: 50,
        transparency: 40,
      },
    },

        sources: [],
  },
  {
    id: "erika-hilton",
    slug: "erika-hilton",
    name: "Erika Hilton",
    party: "PSOL",
    role: "Deputada Federal",
    image: "/images/governors/erika-hilton.jpg",
    status: "Nome citado em cenários progressistas",
    statusType: "clean",
    tags: ["PSOL", "Direitos Humanos", "Diversidade", "Progressista"],
    summary:
      "Deputada federal pelo PSOL, com forte presença digital. Associada a pautas de direitos humanos, desigualdade, diversidade e inclusão social. Surge como nome alternativo para o campo progressista, com potencial de atrair juventude e eleitores insatisfeitos com o PT.",
    electoralStrengths: [
      "Comunicação digital muito forte",
      "Juventude progressista e eleitorado urbano",
      "Setores insatisfeitos com o PT",
      "Movimentos sociais e de direitos civis",
      "Renovação política",
    ],
    electoralWeaknesses: [
      "Alta rejeição entre eleitores conservadores",
      "Dificuldade de penetração no interior paulista",
      "Possível competição com o PT pelo mesmo campo eleitoral",
      "Sem experiência executiva",
      "Classificada como 'ideológica demais' por opositores",
    ],
    policies: [
      {
        title: "Direitos humanos e inclusão social",
        description:
          "Pautas de combate à desigualdade, defesa de direitos civis, inclusão de minorias e políticas de diversidade.",
        arguments: [
          "Representa setores historicamente excluídos da política",
          "Comunicação moderna e alcance entre jovens",
        ],
        criticisms: [
          "Opositores classificam como agenda ideológica",
          "Baixa aceitação fora do eixo SP-capital",
        ],
        defense:
          "Apoiadores afirmam que Erika representa renovação política e defesa de direitos civis.",
        result: "INCONCLUSIVO",
        resultDetail: "Sem histórico executivo para avaliar.",
      },
    ],
    controversies: [],
    trustIndex: {
      score: 55,
      lastUpdated: 'maio/2026',
      notes: 'Sem investigações ou processos. Candidata nova com pouco histórico executivo verificável. Alta transparência nas redes e prestação de contas.',
      metrics: {
        promises: 35,
        investigations: 90,
        convictions: 95,
        discourseCoherence: 65,
        votingPresence: 70,
        transparency: 70,
      },
    },

        sources: [],
  },
];

export default spGovernorCandidates;

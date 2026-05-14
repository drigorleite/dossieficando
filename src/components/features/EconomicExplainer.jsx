import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const GLOSSARY = {
  inflacao: {
    term: 'Inflação',
    simple: 'Quando os preços sobem e seu dinheiro compra menos.',
    detailed: 'A inflação é medida pelo IPCA (Índice de Preços ao Consumidor Amplo). Quando o governo gasta mais do que arrecada, pode gerar inflação. Juros altos ajudam a controlar a inflação, mas encarecem o crédito.',
    example: 'Se a inflação é 5% ao ano e você tem R$ 1.000, no final do ano esse dinheiro compra o equivalente a R$ 952.',
  },
  juros: {
    term: 'Taxa de Juros (Selic)',
    simple: 'O "preço" do dinheiro. Juros altos = crédito caro. Juros baixos = crédito barato.',
    detailed: 'A Selic é a taxa básica de juros definida pelo Banco Central. Ela influencia todas as outras taxas: financiamento de casa, carro, cartão de crédito. Juros altos atraem investimento estrangeiro mas freiam o crescimento.',
    example: 'Com Selic a 13%, um empréstimo de R$ 10.000 pode custar R$ 11.300 em um ano.',
  },
  iof: {
    term: 'IOF',
    simple: 'Imposto sobre operações financeiras. Você paga ao usar cartão de crédito no exterior, fazer empréstimos ou comprar dólar.',
    detailed: 'O IOF é um imposto federal que incide sobre operações de crédito, câmbio, seguros e títulos. O governo pode alterar o IOF por decreto, sem precisar do Congresso — por isso é usado como instrumento de arrecadação emergencial.',
    example: 'Ao comprar US$ 1.000 para viagem, você paga IOF de 1,1% sobre o valor convertido.',
  },
  dolar: {
    term: 'Câmbio / Dólar',
    simple: 'Quanto vale o real em relação ao dólar. Dólar alto = importados mais caros, exportações mais competitivas.',
    detailed: 'O câmbio é determinado pelo mercado, mas influenciado pela política econômica. Incerteza política, déficit fiscal e fuga de capitais tendem a desvalorizar o real. Um real desvalorizado encarece importações (eletrônicos, remédios) mas beneficia exportadores.',
    example: 'Com dólar a R$ 6, um iPhone de US$ 1.000 custa R$ 6.000 antes dos impostos. Com dólar a R$ 5, custaria R$ 5.000.',
  },
  deficit: {
    term: 'Déficit Fiscal',
    simple: 'Quando o governo gasta mais do que arrecada.',
    detailed: 'O déficit fiscal é a diferença entre o que o governo arrecada (impostos) e o que gasta (salários, programas sociais, investimentos). Déficit persistente aumenta a dívida pública e pode gerar inflação e desconfiança dos mercados.',
    example: 'Se o governo arrecada R$ 2 trilhões mas gasta R$ 2,3 trilhões, o déficit é de R$ 300 bilhões.',
  },
  divida_publica: {
    term: 'Dívida Pública',
    simple: 'Tudo que o governo deve. Quanto maior, mais caro fica pagar os juros.',
    detailed: 'A dívida pública brasileira supera 90% do PIB. O governo paga juros sobre essa dívida — em 2024, foram mais de R$ 800 bilhões só em juros. Isso reduz o dinheiro disponível para saúde, educação e infraestrutura.',
    example: 'Imagine que você ganha R$ 5.000/mês mas deve R$ 50.000. Boa parte do seu salário vai para pagar os juros da dívida.',
  },
  pib: {
    term: 'PIB',
    simple: 'O tamanho total da economia. Quanto mais cresce, mais empregos e renda.',
    detailed: 'O PIB (Produto Interno Bruto) é a soma de tudo que o Brasil produz em um ano. Crescimento do PIB indica expansão econômica. O Brasil cresceu ~3% em 2024, acima da média histórica.',
    example: 'Se o PIB cresce 3% e a população cresce 0,7%, a renda per capita aumenta cerca de 2,3%.',
  },
  reforma_tributaria: {
    term: 'Reforma Tributária',
    simple: 'Mudança nas regras de impostos. Pode simplificar ou redistribuir a carga tributária.',
    detailed: 'A reforma tributária aprovada em 2023 unifica PIS, Cofins, IPI, ICMS e ISS em dois novos impostos (CBS e IBS) e cria o Imposto Seletivo. O objetivo é simplificar, mas os impactos variam por setor.',
    example: 'Um produto que hoje tem 5 impostos diferentes passará a ter 2. Isso pode reduzir burocracia mas pode aumentar ou diminuir a carga dependendo do setor.',
  },
};

function GlossaryCard({ entry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white mb-1">{entry.term}</h4>
          <p className="text-xs text-neutral-400 leading-relaxed">{entry.simple}</p>
        </div>
        <div className="shrink-0 mt-1">
          {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
          <p className="text-sm text-neutral-300 leading-relaxed">{entry.detailed}</p>
          {entry.example && (
            <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600 mb-1">Exemplo prático</p>
              <p className="text-xs text-neutral-400 leading-relaxed">{entry.example}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function EconomicExplainer({ relevantTerms = [] }) {
  const [search, setSearch] = useState('');

  // Show relevant terms for this candidate, or all if none specified
  const termsToShow = relevantTerms.length > 0
    ? relevantTerms.filter(t => GLOSSARY[t])
    : Object.keys(GLOSSARY);

  const filtered = termsToShow
    .map(key => ({ key, ...GLOSSARY[key] }))
    .filter(entry =>
      !search ||
      entry.term.toLowerCase().includes(search.toLowerCase()) ||
      entry.simple.toLowerCase().includes(search.toLowerCase())
    );

  if (!filtered.length && !relevantTerms.length) return null;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Explicador Econômico
        </h3>
        <p className="text-sm text-neutral-400">
          Termos econômicos relevantes para entender as propostas deste candidato. Em linguagem simples.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <BookOpen size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
        <input
          type="text"
          placeholder="Buscar termo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none focus:border-white/20 transition"
        />
      </div>

      {/* Cards */}
      <div className="space-y-2">
        {filtered.map(entry => (
          <GlossaryCard key={entry.key} entry={entry} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-neutral-600 py-4 text-center">Nenhum termo encontrado.</p>
        )}
      </div>
    </div>
  );
}

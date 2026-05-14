import { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const METRICS = [
  {
    key: 'promises',
    label: 'Promessas cumpridas',
    description: 'Percentual de promessas eleitorais verificadas que foram cumpridas ou parcialmente cumpridas.',
    weight: 25,
    higherIsBetter: true,
  },
  {
    key: 'investigations',
    label: 'Investigações ativas',
    description: 'Número de investigações abertas por órgãos oficiais (PF, MPF, CGU, STF, TSE). Mais investigações = menor pontuação.',
    weight: 20,
    higherIsBetter: false,
  },
  {
    key: 'convictions',
    label: 'Condenações',
    description: 'Condenações em instâncias judiciais. Condenações anuladas por vício processual são identificadas separadamente.',
    weight: 20,
    higherIsBetter: false,
  },
  {
    key: 'discourseCoherence',
    label: 'Coerência de discurso',
    description: 'Consistência entre declarações ao longo do tempo. Avalia viradas completas vs. evoluções naturais.',
    weight: 15,
    higherIsBetter: true,
  },
  {
    key: 'votingPresence',
    label: 'Presença em votações',
    description: 'Para parlamentares: percentual de presença em votações nominais relevantes.',
    weight: 10,
    higherIsBetter: true,
  },
  {
    key: 'transparency',
    label: 'Transparência',
    description: 'Disponibilidade de declarações de bens, prestação de contas e respostas a pedidos de informação (LAI).',
    weight: 10,
    higherIsBetter: true,
  },
];

function GaugeBar({ value, higherIsBetter }) {
  const pct = Math.max(0, Math.min(100, value));
  const color = higherIsBetter
    ? pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500'
    : pct <= 30 ? 'bg-emerald-500' : pct <= 60 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function ScoreCircle({ score }) {
  const color = score >= 70 ? 'text-emerald-400' : score >= 40 ? 'text-amber-400' : 'text-red-400';
  const ring = score >= 70 ? 'border-emerald-500/40' : score >= 40 ? 'border-amber-500/40' : 'border-red-500/40';
  const label = score >= 70 ? 'Confiável' : score >= 55 ? 'Moderado' : score >= 40 ? 'Atenção' : 'Crítico';

  return (
    <div className={`flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 ${ring} bg-white/[0.03]`}>
      <span className={`text-3xl font-bold ${color}`}>{score}</span>
      <span className="text-[10px] text-neutral-500 mt-0.5">{label}</span>
    </div>
  );
}

export default function TrustIndex({ trustIndex }) {
  const [showMethodology, setShowMethodology] = useState(false);

  if (!trustIndex) return null;

  const { score, metrics, notes, lastUpdated } = trustIndex;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Índice de Confiabilidade Política
        </h3>
        <p className="text-sm text-neutral-400">
          Pontuação composta baseada em 6 métricas objetivas e verificáveis.
        </p>
      </div>

      {/* Score + metrics */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex items-center gap-8 mb-6">
          <ScoreCircle score={score} />
          <div className="flex-1">
            <p className="text-sm text-neutral-400 leading-relaxed">
              Pontuação calculada a partir de {METRICS.length} métricas ponderadas.
              {lastUpdated && (
                <span className="text-neutral-600"> Atualizado em {lastUpdated}.</span>
              )}
            </p>
            {notes && (
              <p className="mt-2 text-xs text-neutral-500 italic">{notes}</p>
            )}
          </div>
        </div>

        {/* Metrics breakdown */}
        <div className="space-y-4">
          {METRICS.map(metric => {
            const val = metrics?.[metric.key];
            if (val === undefined || val === null) return null;
            return (
              <div key={metric.key}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-neutral-300">{metric.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-600">peso {metric.weight}%</span>
                    <span className="text-xs font-semibold text-white">{val}/100</span>
                  </div>
                </div>
                <GaugeBar value={val} higherIsBetter={metric.higherIsBetter} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Methodology toggle */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-5 py-4 text-left"
          onClick={() => setShowMethodology(v => !v)}
        >
          <div className="flex items-center gap-2">
            <Info size={14} className="text-neutral-500" />
            <span className="text-xs font-semibold text-neutral-400">Metodologia e limitações</span>
          </div>
          {showMethodology
            ? <ChevronUp size={13} className="text-neutral-600" />
            : <ChevronDown size={13} className="text-neutral-600" />
          }
        </button>

        {showMethodology && (
          <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
            <p className="text-xs text-neutral-500 leading-relaxed">
              O Índice de Confiabilidade Política é uma ferramenta editorial, não científica.
              Ele busca agregar dados públicos verificáveis em uma pontuação única para facilitar a comparação.
            </p>
            <div className="space-y-2">
              {METRICS.map(m => (
                <div key={m.key} className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold text-neutral-600 mt-0.5 shrink-0 w-16">{m.weight}%</span>
                  <div>
                    <p className="text-xs font-medium text-neutral-400">{m.label}</p>
                    <p className="text-[10px] text-neutral-600">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 px-3 py-2.5">
              <p className="text-[10px] text-amber-400/80 leading-relaxed">
                ⚠️ Este índice NÃO deve ser usado como único critério de avaliação.
                Candidatos sem histórico parlamentar (ex: empresários) têm métricas como "presença em votações" marcadas como N/A,
                o que pode distorcer a pontuação. Leia sempre a metodologia antes de comparar candidatos de perfis diferentes.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

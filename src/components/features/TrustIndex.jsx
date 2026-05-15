import { useState } from 'react';
import { Info, ChevronDown, ChevronUp, ExternalLink, Award, TrendingUp } from 'lucide-react';

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
    <div className={`flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 ${ring} backdrop-blur-sm`} style={{ background: 'rgba(255,255,255,0.04)' }}>
      <span className={`text-3xl font-bold ${color}`}>{score}</span>
      <span className="text-[10px] text-neutral-500 mt-0.5">{label}</span>
    </div>
  );
}

function RankingOrgBadge({ rankingOrg }) {
  if (!rankingOrg) return null;
  const { score, position, positionTotal, state, statePosition, stateTotalPositions, awards, scoresByYear, url } = rankingOrg;

  const scoreColor = score >= 8 ? 'text-emerald-400' : score >= 6 ? 'text-amber-400' : 'text-red-400';
  const scoreBg = score >= 8 ? 'bg-emerald-500/10 border-emerald-500/30' : score >= 6 ? 'bg-amber-500/10 border-amber-500/30' : 'bg-red-500/10 border-red-500/30';

  return (
      <div className={`rounded-2xl border p-5 backdrop-blur-sm ${scoreBg}`} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.04) inset' }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={14} className="text-neutral-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
              Ranking dos Políticos
            </span>
          </div>
          <p className="text-[11px] text-neutral-600">ranking.org.br — avaliação independente de parlamentares</p>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Ver perfil <ExternalLink size={10} />
          </a>
        )}
      </div>

      <div className="flex items-center gap-6 mb-4">
        <div className="text-center">
          <span className={`text-4xl font-bold ${scoreColor}`}>{score.toFixed(2).replace('.', ',')}</span>
          <p className="text-[10px] text-neutral-600 mt-0.5">nota (0–10)</p>
        </div>
        <div className="flex gap-4">
          {position && positionTotal && (
            <div className="text-center">
              <span className="text-xl font-bold text-white">{position}º</span>
              <p className="text-[10px] text-neutral-600">de {positionTotal}</p>
            </div>
          )}
          {state && statePosition && (
            <div className="text-center">
              <span className="text-xl font-bold text-white">{statePosition}º</span>
              <p className="text-[10px] text-neutral-600">{state} de {stateTotalPositions}</p>
            </div>
          )}
        </div>
      </div>

      {scoresByYear && scoresByYear.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] text-neutral-600 mb-2 uppercase tracking-wider">Notas por ano</p>
          <div className="flex gap-2 flex-wrap">
            {scoresByYear.map(({ year, score: s }) => (
              <div key={year} className="text-center rounded-xl border border-white/8 px-3 py-1.5 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[10px] text-neutral-500">{year}</p>
                <p className={`text-sm font-bold ${s >= 8 ? 'text-emerald-400' : s >= 6 ? 'text-amber-400' : 'text-red-400'}`}>
                  {s.toFixed(2).replace('.', ',')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {awards && awards.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {awards.map((award, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-1">
              <Award size={10} className="text-amber-400" />
              <span className="text-[10px] text-amber-300">{award}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TrustIndex({ trustIndex }) {
  const [showMethodology, setShowMethodology] = useState(false);

  if (!trustIndex) return null;

  const { score, metrics, notes, lastUpdated, rankingOrg } = trustIndex;

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
      <div className="rounded-2xl border border-white/10 p-6 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.05) inset' }}>
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

      {/* Ranking dos Políticos — dados externos */}
      {rankingOrg && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-3">
            Avaliação externa independente
          </h4>
          <RankingOrgBadge rankingOrg={rankingOrg} />
        </div>
      )}

      {/* Methodology toggle */}
      <div className="rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.03)' }}>
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
            <div className="rounded-xl border border-amber-500/20 px-3 py-2.5 backdrop-blur-sm" style={{ background: 'rgba(245,158,11,0.05)' }}>
              <p className="text-[10px] text-amber-400/80 leading-relaxed">
                ⚠️ Este índice NÃO deve ser usado como único critério de avaliação.
                Candidatos sem histórico parlamentar (ex: empresários) têm métricas como "presença em votações" marcadas como N/A,
                o que pode distorcer a pontuação. Leia sempre a metodologia antes de comparar candidatos de perfis diferentes.
              </p>
            </div>
            {rankingOrg && (
              <div className="rounded-xl border border-blue-500/20 px-3 py-2.5 backdrop-blur-sm" style={{ background: 'rgba(59,130,246,0.05)' }}>
                <p className="text-[10px] text-blue-400/80 leading-relaxed">
                  ℹ️ Os dados do <strong>Ranking dos Políticos</strong> (ranking.org.br) são independentes e avaliam exclusivamente parlamentares federais em exercício.
                  Governadores, ministros e pré-candidatos sem mandato ativo não são avaliados por essa fonte.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

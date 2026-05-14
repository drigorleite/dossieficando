import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { useState } from 'react';

function NumberCard({ metric }) {
  const [showInfo, setShowInfo] = useState(false);

  const trend = metric.trend;
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = metric.higherIsBetter
    ? trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-neutral-400'
    : trend === 'down' ? 'text-emerald-400' : trend === 'up' ? 'text-red-400' : 'text-neutral-400';

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 relative">
      <div className="flex items-start justify-between mb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 leading-tight pr-4">
          {metric.label}
        </p>
        {metric.note && (
          <button
            className="shrink-0 text-neutral-700 hover:text-neutral-400 transition"
            onClick={() => setShowInfo(v => !v)}
          >
            <Info size={12} />
          </button>
        )}
      </div>

      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white">{metric.value}</span>
        {metric.unit && <span className="text-sm text-neutral-500 mb-0.5">{metric.unit}</span>}
        {trend && (
          <TrendIcon size={16} className={`mb-0.5 ${trendColor}`} />
        )}
      </div>

      {metric.period && (
        <p className="text-[10px] text-neutral-600 mt-1">{metric.period}</p>
      )}

      {metric.comparison && (
        <p className="text-[10px] text-neutral-500 mt-1.5 border-t border-white/5 pt-1.5">
          {metric.comparison}
        </p>
      )}

      {showInfo && metric.note && (
        <div className="mt-2 rounded-lg bg-white/5 px-2.5 py-2 border border-white/10">
          <p className="text-[10px] text-neutral-400 leading-relaxed">{metric.note}</p>
        </div>
      )}
    </div>
  );
}

export default function PoliticianInNumbers({ numbers }) {
  if (!numbers) return null;

  const { mandates = [], globalStats = [], note } = numbers;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Político em Números
        </h3>
        <p className="text-sm text-neutral-400">
          Indicadores objetivos dos períodos de gestão e atuação parlamentar.
        </p>
      </div>

      {/* Global stats */}
      {globalStats.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {globalStats.map((stat, i) => (
            <NumberCard key={i} metric={stat} />
          ))}
        </div>
      )}

      {/* Per mandate */}
      {mandates.map((mandate, mi) => (
        <div key={mi}>
          <h4 className="text-xs font-semibold text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            {mandate.title}
            <span className="text-neutral-600">{mandate.period}</span>
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {mandate.metrics.map((metric, i) => (
              <NumberCard key={i} metric={metric} />
            ))}
          </div>
        </div>
      ))}

      {note && (
        <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
          <p className="text-[10px] text-neutral-600 leading-relaxed">⚠️ {note}</p>
        </div>
      )}
    </div>
  );
}

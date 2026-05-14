import { useState } from 'react';
import { ArrowRight, TrendingUp, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SHIFT_TYPES = {
  virada: { label: 'Virada completa', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  suavizacao: { label: 'Suavização', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  endurecimento: { label: 'Endurecimento', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  evolucao: { label: 'Evolução natural', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  contexto: { label: 'Mudança contextual', color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' },
};

function ShiftCard({ shift }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = SHIFT_TYPES[shift.type] || SHIFT_TYPES.contexto;

  return (
    <div className={`rounded-2xl border ${cfg.border} overflow-hidden`}>
      {/* Header */}
      <button
        className="w-full text-left px-5 py-4"
        onClick={() => setExpanded(v => !v)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className={cfg.color} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {shift.theme}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
              {cfg.label}
            </span>
            {expanded
              ? <ChevronUp size={13} className="text-neutral-600" />
              : <ChevronDown size={13} className="text-neutral-600" />
            }
          </div>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600 mb-1.5">
              Antes · {shift.before.year}
            </p>
            <p className="text-sm text-neutral-300 leading-snug italic">"{shift.before.quote}"</p>
          </div>

          <div className="flex items-center justify-center pt-6">
            <ArrowRight size={16} className={cfg.color} />
          </div>

          <div className={`rounded-xl border p-3 ${cfg.bg} ${cfg.border}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-1.5">
              Depois · {shift.after.year}
            </p>
            <p className={`text-sm leading-snug italic font-medium ${cfg.color}`}>"{shift.after.quote}"</p>
          </div>
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
          {shift.explanation && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1.5">
                Análise
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">{shift.explanation}</p>
            </div>
          )}

          {shift.sources && shift.sources.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Fontes
              </p>
              <div className="space-y-1.5">
                {shift.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition"
                  >
                    <ExternalLink size={11} className="shrink-0" />
                    <span>{src.label}</span>
                    {src.year && <span className="text-neutral-600">({src.year})</span>}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PositionShifts({ shifts = [] }) {
  const [filter, setFilter] = useState('all');

  if (!shifts.length) return null;

  const types = [...new Set(shifts.map(s => s.type))];
  const filtered = filter === 'all' ? shifts : shifts.filter(s => s.type === filter);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Mudou de Posição?
        </h3>
        <p className="text-sm text-neutral-400">
          Comparativo de discurso ao longo do tempo. Fatos documentados com fontes.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'
          }`}
        >
          Todos ({shifts.length})
        </button>
        {types.map(type => {
          const cfg = SHIFT_TYPES[type] || SHIFT_TYPES.contexto;
          const count = shifts.filter(s => s.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === type ? `${cfg.bg} ${cfg.color} border ${cfg.border}` : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((shift, i) => (
          <ShiftCard key={i} shift={shift} />
        ))}
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <p className="text-[10px] text-neutral-600 leading-relaxed">
          ⚠️ As citações são retiradas de fontes públicas verificáveis. A classificação do tipo de mudança
          (virada, suavização, etc.) é editorial e baseada na distância entre as posições declaradas.
          Mudanças de contexto (ex: oposição → governo) são identificadas separadamente.
        </p>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { CheckCircle2, XCircle, MinusCircle, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Calendar, FileText } from 'lucide-react';

const STATUS_CONFIG = {
  cumprida: {
    label: 'Cumpriu',
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
  parcial: {
    label: 'Parcialmente cumpriu',
    icon: MinusCircle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    dot: 'bg-amber-400',
  },
  nao_cumprida: {
    label: 'Não cumpriu',
    icon: XCircle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    dot: 'bg-red-400',
  },
  inconclusivo: {
    label: 'Inconclusivo',
    icon: HelpCircle,
    color: 'text-neutral-400',
    bg: 'bg-white/5',
    border: 'border-white/10',
    dot: 'bg-neutral-400',
  },
};

function PromiseCard({ promise }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = STATUS_CONFIG[promise.status] || STATUS_CONFIG.inconclusivo;
  const Icon = cfg.icon;

  return (
    <div className={`rounded-2xl border ${cfg.border} ${cfg.bg} overflow-hidden transition-all`}>
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        onClick={() => setExpanded(v => !v)}
      >
        {/* Status icon */}
        <div className="mt-0.5 shrink-0">
          <Icon size={20} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Category + year */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {promise.category && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {promise.category}
              </span>
            )}
            {promise.year && (
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <Calendar size={9} />
                {promise.year}
              </span>
            )}
          </div>

          {/* Promise text */}
          <p className="text-sm font-semibold text-white leading-snug mb-1">
            "{promise.promise}"
          </p>

          {/* Status badge */}
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${cfg.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
          </span>
        </div>

        <div className="shrink-0 mt-1">
          {expanded
            ? <ChevronUp size={14} className="text-neutral-500" />
            : <ChevronDown size={14} className="text-neutral-500" />
          }
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-4">
          {/* Result */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1.5">
              O que aconteceu
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">{promise.result}</p>
          </div>

          {/* Evidence */}
          {promise.evidence && promise.evidence.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Evidências
              </p>
              <div className="space-y-2">
                {promise.evidence.map((ev, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2.5">
                    <FileText size={13} className="mt-0.5 shrink-0 text-neutral-500" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-300">{ev.description}</p>
                      {ev.date && (
                        <p className="text-[10px] text-neutral-600 mt-0.5">{ev.date}</p>
                      )}
                    </div>
                    {ev.url && (
                      <a
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-neutral-500 hover:text-white transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Context note */}
          {promise.context && (
            <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600 mb-1">Contexto</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{promise.context}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PromisesVsReality({ promises = [] }) {
  const [filter, setFilter] = useState('all');

  if (!promises.length) return null;

  const counts = {
    all: promises.length,
    cumprida: promises.filter(p => p.status === 'cumprida').length,
    parcial: promises.filter(p => p.status === 'parcial').length,
    nao_cumprida: promises.filter(p => p.status === 'nao_cumprida').length,
    inconclusivo: promises.filter(p => p.status === 'inconclusivo').length,
  };

  const filtered = filter === 'all' ? promises : promises.filter(p => p.status === filter);

  const cumprimentoRate = promises.length > 0
    ? Math.round(((counts.cumprida + counts.parcial * 0.5) / promises.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Promessas vs Realidade
        </h3>
        <p className="text-sm text-neutral-400">
          {promises.length} promessa{promises.length !== 1 ? 's' : ''} verificada{promises.length !== 1 ? 's' : ''} com fontes e evidências.
        </p>
      </div>

      {/* Summary bar */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-neutral-500">Taxa de cumprimento estimada</span>
          <span className={`text-lg font-bold ${cumprimentoRate >= 60 ? 'text-emerald-400' : cumprimentoRate >= 30 ? 'text-amber-400' : 'text-red-400'}`}>
            {cumprimentoRate}%
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
          {counts.cumprida > 0 && (
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${(counts.cumprida / promises.length) * 100}%` }}
            />
          )}
          {counts.parcial > 0 && (
            <div
              className="h-full bg-amber-500 transition-all"
              style={{ width: `${(counts.parcial / promises.length) * 100}%` }}
            />
          )}
          {counts.nao_cumprida > 0 && (
            <div
              className="h-full bg-red-500 transition-all"
              style={{ width: `${(counts.nao_cumprida / promises.length) * 100}%` }}
            />
          )}
        </div>
        {/* Legend */}
        <div className="mt-3 flex flex-wrap gap-4">
          {[
            { key: 'cumprida', label: 'Cumpriu', color: 'bg-emerald-500' },
            { key: 'parcial', label: 'Parcial', color: 'bg-amber-500' },
            { key: 'nao_cumprida', label: 'Não cumpriu', color: 'bg-red-500' },
            { key: 'inconclusivo', label: 'Inconclusivo', color: 'bg-neutral-500' },
          ].map(({ key, label, color }) => counts[key] > 0 && (
            <div key={key} className="flex items-center gap-1.5 text-xs text-neutral-400">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              {counts[key]} {label}
            </div>
          ))}
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'Todas' },
          { key: 'cumprida', label: 'Cumpridas' },
          { key: 'parcial', label: 'Parciais' },
          { key: 'nao_cumprida', label: 'Não cumpridas' },
          { key: 'inconclusivo', label: 'Inconclusivo' },
        ].filter(f => f.key === 'all' || counts[f.key] > 0).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === key
                ? 'bg-white text-neutral-900'
                : 'bg-white/5 text-neutral-400 hover:bg-white/10'
            }`}
          >
            {label} {key !== 'all' && counts[key] > 0 && `(${counts[key]})`}
          </button>
        ))}
      </div>

      {/* Promise cards */}
      <div className="space-y-3">
        {filtered.map((promise, i) => (
          <PromiseCard key={i} promise={promise} />
        ))}
      </div>

      {/* Methodology note */}
      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <p className="text-[10px] text-neutral-600 leading-relaxed">
          ⚠️ A classificação de cumprimento é baseada em fontes jornalísticas e documentos públicos verificáveis.
          Promessas em mandatos em curso são marcadas como "inconclusivo" até o término do período.
          A taxa de cumprimento é uma estimativa — promessas parciais contam como 50%.
        </p>
      </div>
    </div>
  );
}

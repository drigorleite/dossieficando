import { useState } from 'react';
import { Megaphone, CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const OUTCOME_CONFIG = {
  positivo: { label: 'Resultado positivo', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  negativo: { label: 'Resultado negativo', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  misto: { label: 'Resultado misto', icon: HelpCircle, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  em_andamento: { label: 'Em andamento', icon: HelpCircle, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  inconclusivo: { label: 'Inconclusivo', icon: HelpCircle, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' },
};

function AfterCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = OUTCOME_CONFIG[item.outcome] || OUTCOME_CONFIG.inconclusivo;
  const Icon = cfg.icon;

  return (
    <div className={`rounded-2xl border ${cfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        onClick={() => setExpanded(v => !v)}
      >
        {/* Type icon */}
        <div className={`w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center shrink-0`}>
          <Megaphone size={15} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {item.year && <span className="text-xs font-bold text-white">{item.year}</span>}
            {item.category && (
              <span className="text-[10px] text-neutral-500 uppercase tracking-[0.15em]">{item.category}</span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-white leading-snug">{item.announcement}</h4>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Icon size={11} className={cfg.color} />
            <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
          </div>
        </div>

        <div className="shrink-0 mt-1">
          {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
          {item.whatWasSaid && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1.5">O que foi anunciado</p>
              <p className="text-sm text-neutral-300 italic leading-relaxed">"{item.whatWasSaid}"</p>
            </div>
          )}
          {item.whatHappened && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1.5">O que aconteceu</p>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.whatHappened}</p>
            </div>
          )}
          {item.data && (
            <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600 mb-1">Dados</p>
              <p className="text-xs text-neutral-400">{item.data}</p>
            </div>
          )}
          {item.sources && item.sources.length > 0 && (
            <div className="space-y-1.5">
              {item.sources.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] text-neutral-500 hover:text-white transition"
                >
                  <ExternalLink size={10} />
                  {src.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhatHappenedAfter({ afterStories = [] }) {
  const [filter, setFilter] = useState('all');

  if (!afterStories.length) return null;

  const outcomes = [...new Set(afterStories.map(s => s.outcome))];
  const filtered = filter === 'all' ? afterStories : afterStories.filter(s => s.outcome === filter);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          O que Aconteceu Depois?
        </h3>
        <p className="text-sm text-neutral-400">
          Anúncios, promessas e escândalos — e o que realmente se seguiu.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
        >
          Todos ({afterStories.length})
        </button>
        {outcomes.map(outcome => {
          const cfg = OUTCOME_CONFIG[outcome] || OUTCOME_CONFIG.inconclusivo;
          const count = afterStories.filter(s => s.outcome === outcome).length;
          return (
            <button
              key={outcome}
              onClick={() => setFilter(outcome)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === outcome
                  ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((item, i) => <AfterCard key={i} item={item} />)}
      </div>
    </div>
  );
}

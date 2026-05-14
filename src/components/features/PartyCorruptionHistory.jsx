import { useState } from 'react';
import { Building2, User, Users, Landmark, AlertTriangle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SCOPE_CONFIG = {
  individuo: { label: 'Indivíduo', icon: User, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  partido: { label: 'Partido', icon: Building2, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  governo: { label: 'Governo', icon: Landmark, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  aliados: { label: 'Aliados', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
};

function CorruptionCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = SCOPE_CONFIG[item.scope] || SCOPE_CONFIG.individuo;
  const Icon = cfg.icon;

  return (
    <div className={`rounded-2xl border ${cfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        onClick={() => setExpanded(v => !v)}
      >
        <div className={`w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center shrink-0`}>
          <Icon size={15} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${cfg.color}`}>
              {cfg.label}
            </span>
            {item.year && <span className="text-[10px] text-neutral-600">{item.year}</span>}
            {item.operation && (
              <span className="text-[10px] text-neutral-500 bg-white/5 rounded px-1.5 py-0.5">
                {item.operation}
              </span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-white leading-snug">{item.title}</h4>
          <p className="text-xs text-neutral-500 mt-1 leading-relaxed line-clamp-2">{item.description}</p>
        </div>

        <div className="shrink-0 mt-1">
          {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
          <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>

          {item.involved && item.involved.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">Envolvidos</p>
              <div className="flex flex-wrap gap-2">
                {item.involved.map((person, i) => (
                  <span key={i} className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-neutral-400">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.outcome && (
            <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600 mb-1">Desfecho</p>
              <p className="text-xs text-neutral-400">{item.outcome}</p>
            </div>
          )}

          {item.candidateRelation && (
            <div className={`rounded-xl ${cfg.bg} border ${cfg.border} px-3 py-2.5`}>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] mb-1 ${cfg.color}`}>
                Relação com o candidato
              </p>
              <p className="text-xs text-neutral-400">{item.candidateRelation}</p>
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

export default function PartyCorruptionHistory({ corruptionHistory = [] }) {
  const [filter, setFilter] = useState('all');

  if (!corruptionHistory.length) return null;

  const scopes = [...new Set(corruptionHistory.map(c => c.scope))];
  const filtered = filter === 'all' ? corruptionHistory : corruptionHistory.filter(c => c.scope === filter);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Histórico de Corrupção Partidária
        </h3>
        <p className="text-sm text-neutral-400">
          Separado por indivíduo, partido, governo e aliados. Inclui a relação com o candidato.
        </p>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 rounded-xl bg-amber-500/5 border border-amber-500/20 px-4 py-3">
        <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-xs text-amber-400/80 leading-relaxed">
          A presença de escândalos no partido ou entorno não implica responsabilidade direta do candidato.
          A relação de cada caso com o candidato é descrita individualmente.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
        >
          Todos ({corruptionHistory.length})
        </button>
        {scopes.map(scope => {
          const cfg = SCOPE_CONFIG[scope] || SCOPE_CONFIG.individuo;
          const count = corruptionHistory.filter(c => c.scope === scope).length;
          return (
            <button
              key={scope}
              onClick={() => setFilter(scope)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === scope
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
        {filtered.map((item, i) => <CorruptionCard key={i} item={item} />)}
      </div>
    </div>
  );
}

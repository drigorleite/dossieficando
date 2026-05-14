import { useState } from 'react';
import { Users, TrendingDown, DollarSign, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const ALLIANCE_TYPES = {
  aliado: { label: 'Aliado atual', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
  ex_aliado: { label: 'Ex-aliado', color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10', dot: 'bg-neutral-500' },
  rompimento: { label: 'Rompimento', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', dot: 'bg-red-500' },
  financiador: { label: 'Financiador', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', dot: 'bg-amber-500' },
  apoio: { label: 'Grupo de apoio', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', dot: 'bg-blue-500' },
  suspeito: { label: 'Ligação suspeita', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', dot: 'bg-orange-500' },
};

const TYPE_ICONS = {
  aliado: Users,
  ex_aliado: Users,
  rompimento: TrendingDown,
  financiador: DollarSign,
  apoio: Heart,
  suspeito: Users,
};

function AllianceNode({ alliance }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = ALLIANCE_TYPES[alliance.type] || ALLIANCE_TYPES.aliado;
  const Icon = TYPE_ICONS[alliance.type] || Users;

  return (
    <div className={`rounded-2xl border ${cfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-4 py-3 flex items-center gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <div className={`w-8 h-8 rounded-xl ${cfg.bg} flex items-center justify-center shrink-0`}>
          <Icon size={14} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-white">{alliance.name}</span>
            {alliance.party && (
              <span className="text-[10px] text-neutral-600 bg-white/5 rounded px-1.5 py-0.5">{alliance.party}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`flex items-center gap-1 text-[10px] font-medium ${cfg.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </span>
            {alliance.since && (
              <span className="text-[10px] text-neutral-600">desde {alliance.since}</span>
            )}
          </div>
        </div>

        {alliance.description && (
          <div className="shrink-0">
            {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
          </div>
        )}
      </button>

      {expanded && alliance.description && (
        <div className="px-4 pb-4 border-t border-white/5 pt-3">
          <p className="text-xs text-neutral-400 leading-relaxed">{alliance.description}</p>
          {alliance.breakReason && (
            <div className="mt-2 rounded-lg bg-red-500/5 border border-red-500/20 px-3 py-2">
              <p className="text-[10px] font-semibold text-red-500 mb-1">Motivo do rompimento</p>
              <p className="text-xs text-neutral-400">{alliance.breakReason}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AllianceMap({ alliances = [] }) {
  const [filter, setFilter] = useState('all');

  if (!alliances.length) return null;

  const types = [...new Set(alliances.map(a => a.type))];
  const filtered = filter === 'all' ? alliances : alliances.filter(a => a.type === filter);

  // Group by type for visual organization
  const grouped = {};
  filtered.forEach(a => {
    if (!grouped[a.type]) grouped[a.type] = [];
    grouped[a.type].push(a);
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Mapa de Alianças Políticas
        </h3>
        <p className="text-sm text-neutral-400">
          Partidos, grupos, financiadores e rompimentos documentados.
        </p>
      </div>

      {/* Visual summary — alliance web */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-wrap gap-3 justify-center">
          {alliances.map((a, i) => {
            const cfg = ALLIANCE_TYPES[a.type] || ALLIANCE_TYPES.aliado;
            return (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border ${cfg.border} ${cfg.bg}`}
              >
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                <span className={`text-xs font-medium ${cfg.color}`}>{a.name}</span>
                {a.party && <span className="text-[10px] text-neutral-600">{a.party}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'
          }`}
        >
          Todos ({alliances.length})
        </button>
        {types.map(type => {
          const cfg = ALLIANCE_TYPES[type] || ALLIANCE_TYPES.aliado;
          const count = alliances.filter(a => a.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === type
                  ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards grouped by type */}
      {Object.entries(grouped).map(([type, items]) => {
        const cfg = ALLIANCE_TYPES[type] || ALLIANCE_TYPES.aliado;
        return (
          <div key={type}>
            <h4 className={`text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 ${cfg.color}`}>
              {cfg.label} ({items.length})
            </h4>
            <div className="space-y-2">
              {items.map((a, i) => <AllianceNode key={i} alliance={a} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

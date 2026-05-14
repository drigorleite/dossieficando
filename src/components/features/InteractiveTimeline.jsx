import { useState } from 'react';
import { Shield, Vote, Users, ArrowLeftRight, Zap, MessageSquare, Scale, Search, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const EVENT_TYPES = {
  investigacao: { label: 'Investigação', icon: Search, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', dot: 'bg-red-500' },
  eleicao: { label: 'Eleição', icon: Vote, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', dot: 'bg-blue-500' },
  alianca: { label: 'Aliança', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', dot: 'bg-purple-500' },
  partido: { label: 'Mudança partidária', icon: ArrowLeftRight, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', dot: 'bg-orange-500' },
  operacao_pf: { label: 'Operação PF', icon: Shield, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', dot: 'bg-amber-500' },
  votacao: { label: 'Votação', icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', dot: 'bg-cyan-500' },
  fala: { label: 'Fala polêmica', icon: MessageSquare, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30', dot: 'bg-pink-500' },
  judicial: { label: 'Decisão judicial', icon: Scale, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
};

function TimelineEvent({ event, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = EVENT_TYPES[event.type] || EVENT_TYPES.judicial;
  const Icon = cfg.icon;

  return (
    <div className="flex gap-4">
      {/* Left: dot + line */}
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full ${cfg.bg} border ${cfg.border} flex items-center justify-center shrink-0 z-10`}>
          <Icon size={14} className={cfg.color} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-white/10 mt-1" />}
      </div>

      {/* Right: content */}
      <div className={`flex-1 pb-6 ${isLast ? '' : ''}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">{event.year}</span>
              {event.month && <span className="text-[10px] text-neutral-600">{event.month}</span>}
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
                {cfg.label}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-white leading-snug">{event.title}</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{event.description}</p>
          </div>

          {(event.detail || event.source) && (
            <button
              onClick={() => setExpanded(v => !v)}
              className="shrink-0 mt-1 text-neutral-600 hover:text-neutral-400 transition"
            >
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          )}
        </div>

        {expanded && (
          <div className="mt-3 space-y-2">
            {event.detail && (
              <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
                <p className="text-xs text-neutral-400 leading-relaxed">{event.detail}</p>
              </div>
            )}
            {event.source && (
              <a
                href={event.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-neutral-500 hover:text-white transition"
              >
                <ExternalLink size={10} />
                {event.source.label}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function InteractiveTimeline({ events = [] }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [yearRange, setYearRange] = useState('all');

  if (!events.length) return null;

  const years = [...new Set(events.map(e => e.year))].sort();
  const minYear = years[0];
  const maxYear = years[years.length - 1];

  const presentTypes = [...new Set(events.map(e => e.type))];

  const toggleFilter = (type) => {
    setActiveFilters(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const YEAR_RANGES = [
    { key: 'all', label: 'Tudo' },
    { key: '5', label: 'Últimos 5 anos' },
    { key: '10', label: 'Últimos 10 anos' },
    { key: '20', label: 'Últimos 20 anos' },
  ];

  const now = new Date().getFullYear();
  const filtered = events
    .filter(e => activeFilters.length === 0 || activeFilters.includes(e.type))
    .filter(e => {
      if (yearRange === 'all') return true;
      return e.year >= now - parseInt(yearRange);
    })
    .sort((a, b) => b.year - a.year || (b.month || '').localeCompare(a.month || ''));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Linha do Tempo Interativa
        </h3>
        <p className="text-sm text-neutral-400">
          {events.length} eventos documentados de {minYear} a {maxYear}.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        {/* Type filters */}
        <div className="flex flex-wrap gap-2">
          {presentTypes.map(type => {
            const cfg = EVENT_TYPES[type];
            if (!cfg) return null;
            const active = activeFilters.includes(type);
            const count = events.filter(e => e.type === type).length;
            return (
              <button
                key={type}
                onClick={() => toggleFilter(type)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active
                    ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                    : 'bg-white/5 text-neutral-500 hover:bg-white/10'
                }`}
              >
                <cfg.icon size={10} />
                {cfg.label} ({count})
              </button>
            );
          })}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="px-3 py-1.5 rounded-full text-xs text-neutral-600 hover:text-neutral-400 transition"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Year range */}
        <div className="flex flex-wrap gap-2">
          {YEAR_RANGES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setYearRange(key)}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                yearRange === key
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-600 hover:text-neutral-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-neutral-600">
        Exibindo {filtered.length} de {events.length} eventos
      </p>

      {/* Timeline */}
      <div className="space-y-0">
        {filtered.map((event, i) => (
          <TimelineEvent key={i} event={event} isLast={i === filtered.length - 1} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-neutral-600 py-8 text-center">
            Nenhum evento encontrado com os filtros selecionados.
          </p>
        )}
      </div>
    </div>
  );
}

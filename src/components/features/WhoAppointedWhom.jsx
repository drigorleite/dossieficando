import { useState } from 'react';
import { UserCheck, Building2, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

const ROLE_TYPES = {
  ministro: { label: 'Ministro', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  presidente_estatal: { label: 'Presidente de Estatal', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  diretor: { label: 'Diretor', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  secretario: { label: 'Secretário', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  assessor: { label: 'Assessor', color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' },
  cargo_comissionado: { label: 'Cargo comissionado', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
};

function AppointmentCard({ appointment }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = ROLE_TYPES[appointment.role] || ROLE_TYPES.cargo_comissionado;

  return (
    <div className={`rounded-2xl border ${cfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-4 py-3 flex items-start gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <div className={`w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center shrink-0`}>
          <UserCheck size={15} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span className="text-sm font-semibold text-white">{appointment.name}</span>
            {appointment.suspicious && (
              <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-2 py-0.5">
                <AlertTriangle size={9} />
                Suspeito
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[10px] font-medium ${cfg.color}`}>{cfg.label}</span>
            {appointment.institution && (
              <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                <Building2 size={9} />
                {appointment.institution}
              </span>
            )}
            {appointment.year && (
              <span className="text-[10px] text-neutral-600">{appointment.year}</span>
            )}
          </div>
        </div>

        {(appointment.description || appointment.connection) && (
          <div className="shrink-0 mt-1">
            {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
          </div>
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-white/5 pt-3 space-y-2.5">
          {appointment.connection && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-1">Ligação com o político</p>
              <p className="text-xs text-neutral-400 leading-relaxed">{appointment.connection}</p>
            </div>
          )}
          {appointment.description && (
            <p className="text-xs text-neutral-400 leading-relaxed">{appointment.description}</p>
          )}
          {appointment.controversy && (
            <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 px-3 py-2">
              <p className="text-[10px] font-semibold text-amber-500 mb-1">Controvérsia</p>
              <p className="text-xs text-neutral-400">{appointment.controversy}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhoAppointedWhom({ appointments = [] }) {
  const [filter, setFilter] = useState('all');

  if (!appointments.length) return null;

  const roles = [...new Set(appointments.map(a => a.role))];
  const suspicious = appointments.filter(a => a.suspicious).length;
  const filtered = filter === 'all' ? appointments : filter === 'suspicious' ? appointments.filter(a => a.suspicious) : appointments.filter(a => a.role === filter);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Quem Indicou Quem?
        </h3>
        <p className="text-sm text-neutral-400">
          Ministros, presidentes de estatais, diretores e cargos de confiança indicados por este político.
        </p>
      </div>

      {/* Summary */}
      <div className="flex flex-wrap gap-3">
        <div className="rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5">
          <p className="text-lg font-bold text-white">{appointments.length}</p>
          <p className="text-[10px] text-neutral-500">Indicações</p>
        </div>
        {suspicious > 0 && (
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-2.5">
            <p className="text-lg font-bold text-amber-400">{suspicious}</p>
            <p className="text-[10px] text-neutral-500">Suspeitas</p>
          </div>
        )}
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
        >
          Todos
        </button>
        {suspicious > 0 && (
          <button
            onClick={() => setFilter('suspicious')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === 'suspicious' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
          >
            Suspeitos ({suspicious})
          </button>
        )}
        {roles.map(role => {
          const cfg = ROLE_TYPES[role] || ROLE_TYPES.cargo_comissionado;
          const count = appointments.filter(a => a.role === role).length;
          return (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === role ? `${cfg.bg} ${cfg.color} border ${cfg.border}` : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-2">
        {filtered.map((a, i) => <AppointmentCard key={i} appointment={a} />)}
      </div>
    </div>
  );
}

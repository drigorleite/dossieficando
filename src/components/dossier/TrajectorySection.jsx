import { Briefcase, Star, AlertTriangle, TrendingUp, Users, ChevronRight, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';

function RoleTimeline({ roles }) {
  if (!roles?.length) return null;
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
      <div className="space-y-6">
        {roles.map((role, i) => (
          <div key={i} className="relative flex gap-4 pl-10">
            {/* dot */}
            <div className="absolute left-[13px] top-1.5 h-3 w-3 rounded-full border-2 border-white/30 bg-neutral-950" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
                {role.period}
              </p>
              <h4 className="text-base font-semibold text-white">{role.title}</h4>
              {role.description && (
                <p className="mt-1.5 text-sm leading-6 text-neutral-400">{role.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagList({ items, color = 'neutral' }) {
  if (!items?.length) return null;
  const colorMap = {
    neutral: 'border-white/10 bg-white/5 text-neutral-300',
    amber: 'border-amber-500/20 bg-amber-500/10 text-amber-300',
    blue: 'border-blue-500/20 bg-blue-500/10 text-blue-300',
    emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  };
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className={`rounded-full border px-2.5 py-0.5 text-xs ${colorMap[color]}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function DiscourseChange({ change }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {change.theme}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-red-500/15 bg-red-500/5 p-3">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-400">Antes</p>
          <p className="text-sm leading-5 text-neutral-300">{change.before}</p>
        </div>
        <div className="flex items-start gap-2">
          <ArrowRight size={14} className="mt-3 shrink-0 text-neutral-600 hidden sm:block" />
          <div className="rounded-lg border border-emerald-500/15 bg-emerald-500/5 p-3 flex-1">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Depois</p>
            <p className="text-sm leading-5 text-neutral-300">{change.after}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestigationItem({ item }) {
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {item.year && (
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            {item.year}
          </span>
        )}
        {item.status && (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
            {item.status}
          </span>
        )}
      </div>
      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
      <p className="text-sm leading-6 text-neutral-400">{item.description}</p>
    </div>
  );
}

export default function TrajectorySection({ trajectory }) {
  if (!trajectory) return null;

  const { roles, keyPositions, investigations, discourseChanges, politicalAlliances } = trajectory;

  const hasContent = [roles, keyPositions, investigations, discourseChanges, politicalAlliances]
    .some((arr) => arr?.length > 0);

  if (!hasContent) return null;

  return (
    <div className="space-y-8">

      {/* Cargos e mandatos */}
      {roles?.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={16} className="text-blue-400" />
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Cargos e Mandatos
            </h4>
          </div>
          <RoleTimeline roles={roles} />
        </Card>
      )}

      {/* Posições marcantes */}
      {keyPositions?.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Star size={16} className="text-purple-400" />
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Posições e Votações Marcantes
            </h4>
          </div>
          <div className="space-y-2">
            {keyPositions.map((pos, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                <ChevronRight size={14} className="mt-0.5 shrink-0 text-neutral-600" />
                <span>{pos}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Investigações e polêmicas */}
      {investigations?.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-amber-400" />
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Investigações e Polêmicas
            </h4>
          </div>
          <div className="space-y-3">
            {investigations.map((inv, i) => (
              <InvestigationItem key={i} item={inv} />
            ))}
          </div>
        </div>
      )}

      {/* Mudanças de discurso */}
      {discourseChanges?.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-neutral-400" />
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Mudanças de Discurso
            </h4>
          </div>
          <div className="space-y-3">
            {discourseChanges.map((change, i) => (
              <DiscourseChange key={i} change={change} />
            ))}
          </div>
        </div>
      )}

      {/* Alianças políticas */}
      {politicalAlliances?.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Users size={16} className="text-emerald-400" />
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Alianças Políticas
            </h4>
          </div>
          <TagList items={politicalAlliances} color="emerald" />
        </Card>
      )}

    </div>
  );
}

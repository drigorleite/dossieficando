import React from "react";
import { Shield, AlertTriangle, CheckCircle, ChevronRight, Building2 } from "lucide-react";

const statusConfig = {
  active: {
    label: "Investigações ativas",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    dot: "bg-red-400",
    Icon: AlertTriangle,
  },
  investigating: {
    label: "Suspeitas / processos",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    Icon: Shield,
  },
  clean: {
    label: "Sem processos relevantes",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    Icon: CheckCircle,
  },
};

export default function GovernorCard({ candidate, onClick }) {
  const cfg = statusConfig[candidate.statusType] || statusConfig.clean;
  const { Icon } = cfg;

  return (
    <button
      onClick={() => onClick(candidate)}
      className="group relative w-full text-left rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Status indicator strip */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${cfg.dot}`} />

      {/* Photo area */}
      <div className="relative h-52 overflow-hidden bg-zinc-800">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("flex", "items-center", "justify-center");
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

        {/* Party badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-bold text-white">
          {candidate.party}
        </div>

        {/* Status badge */}
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-sm text-xs font-medium ${cfg.bg} ${cfg.color}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          <Icon size={10} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-base font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
            {candidate.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
            <Building2 size={10} />
            {candidate.role}
          </p>
        </div>

        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 mb-3">
          {candidate.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {candidate.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <div className="flex gap-4 text-xs">
            <span className="text-zinc-500">
              <span className="text-white font-semibold">{candidate.policies?.length || 0}</span> políticas
            </span>
            <span className="text-zinc-500">
              <span className="text-white font-semibold">{candidate.controversies?.length || 0}</span> polêmicas
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
            Ver dossiê
            <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
}

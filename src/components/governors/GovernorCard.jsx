import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, MinusCircle, Lightbulb, Building2 } from "lucide-react";

function riskAccent(statusType = "") {
  if (statusType === "active") return { dot: "bg-red-500", text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/20", icon: XCircle, label: "Investigações ativas" };
  if (statusType === "investigating") return { dot: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/20", icon: AlertTriangle, label: "Suspeitas / processos" };
  if (statusType === "clean") return { dot: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/20", icon: CheckCircle, label: "Sem processos relevantes" };
  return { dot: "bg-neutral-500", text: "text-neutral-400", border: "border-neutral-500/30", bg: "bg-neutral-500/20", icon: MinusCircle, label: "Status desconhecido" };
}

export default function GovernorCard({ candidate, onClick }) {
  const { dot, text, border, bg, icon: RiskIcon, label } = riskAccent(candidate.statusType);
  const trustScore = candidate.trustIndex?.score;

  return (
    <motion.button
      onClick={() => onClick(candidate)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative min-h-96 w-full overflow-hidden rounded-3xl border border-white/10 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/40"
      style={{ background: 'rgba(18,18,22,0.95)', boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset' }}
    >
      {/* Background image — full card */}
      <div className="absolute inset-0">
        <img
          src={candidate.image}
          alt={candidate.name}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.12) 100%)' }} />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)' }} aria-hidden="true" />
      </div>

      {/* Top badges */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between gap-2">
        {/* Risk indicator */}
        <div className={`flex items-center gap-1.5 rounded-full border ${border} px-2.5 py-1 backdrop-blur-md`} style={{ background: 'rgba(0,0,0,0.55)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}>
          <span className={`h-1.5 w-1.5 rounded-full ${dot} shrink-0`} />
          <RiskIcon size={10} className={text} />
          <span className={`text-[10px] font-medium ${text} leading-none hidden sm:block`}>{label}</span>
        </div>

        {/* Party badge */}
        <span className="inline-flex items-center rounded-full border border-white/12 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.60)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}>
          {candidate.party}
        </span>
      </div>

      {/* Content — bottom overlay */}
      <div className="relative flex h-full min-h-96 flex-col justify-end p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {candidate.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-neutral-300 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold leading-tight text-white">{candidate.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <Building2 size={11} className="text-neutral-400 shrink-0" />
          <p className="text-xs text-neutral-400 truncate">{candidate.role}</p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="rounded-2xl border border-white/10 p-2.5 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.08)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}>
            <p className="text-[9px] text-neutral-400">Políticas</p>
            <p className="text-base font-semibold text-white">{candidate.policies?.length || 0}</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-2.5 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.08)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}>
            <p className="text-[9px] text-neutral-400">Polêmicas</p>
            <p className="text-base font-semibold text-white">{candidate.controversies?.length || 0}</p>
          </div>
          <div className={`rounded-2xl border p-2.5 backdrop-blur-md ${
            trustScore >= 70 ? "border-emerald-500/30 bg-emerald-500/20" :
            trustScore >= 40 ? "border-amber-500/30 bg-amber-500/20" :
            "border-red-500/30 bg-red-500/20"
          }`}>
            <p className="text-[9px] text-neutral-400">Confiança</p>
            <p className={`text-base font-semibold ${
              trustScore >= 70 ? "text-emerald-300" :
              trustScore >= 40 ? "text-amber-300" :
              "text-red-300"
            }`}>{trustScore ?? "—"}</p>
          </div>
        </div>

        <p className="line-clamp-2 text-xs leading-5 text-neutral-300">{candidate.summary}</p>

        <div className="mt-4 flex items-center justify-end border-t border-white/10 pt-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition group-hover:bg-neutral-200">
            Ver dossiê <ExternalLink size={12} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

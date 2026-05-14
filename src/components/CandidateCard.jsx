import { motion } from 'framer-motion';
import { ExternalLink, Lightbulb, AlertTriangle, CheckCircle, XCircle, MinusCircle } from 'lucide-react';
import Badge from './ui/Badge';
import { modularCandidates } from '../data/candidates/index';

function riskAccent(riskLevel = '') {
  const r = riskLevel.toLowerCase();
  if (r.includes('condenação') || r.includes('múltiplas')) return { dot: 'bg-red-500', text: 'text-red-400', icon: XCircle };
  if (r.includes('suspeita') || r.includes('inquérito') || r.includes('investigação')) return { dot: 'bg-amber-500', text: 'text-amber-400', icon: MinusCircle };
  if (r.includes('sem processos') || r.includes('sem acusações')) return { dot: 'bg-emerald-500', text: 'text-emerald-400', icon: CheckCircle };
  return { dot: 'bg-neutral-500', text: 'text-neutral-400', icon: AlertTriangle };
}

export default function CandidateCard({ candidate, onOpen }) {
  const modular = modularCandidates.find((m) => m.slug === candidate.slug);
  const proposalCount = modular?.proposals?.length ?? 0;
  const { dot, text, icon: RiskIcon } = riskAccent(candidate.riskLevel);

  return (
    <motion.button
      layoutId={`candidate-${candidate.slug}`}
      onClick={() => onOpen(candidate)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative min-h-97.5 w-full overflow-hidden rounded-4xl border border-white/10 bg-neutral-900 text-left shadow-2xl shadow-black/20 outline-none transition focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={candidate.image}
          alt={candidate.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10" />
      </div>

      {/* Top badges */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between gap-2">
        {/* Risk indicator */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${dot} shrink-0`} />
          <span className={`text-[10px] font-medium ${text} leading-none`}>{candidate.riskLevel}</span>
        </div>

        {/* Proposal count */}
        {proposalCount > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
            <Lightbulb size={11} />
            {proposalCount}
          </span>
        )}
      </div>

      <div className="relative flex h-full min-h-97.5 flex-col justify-end p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {candidate.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="text-2xl font-bold leading-tight text-white">{candidate.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-sm text-neutral-400">{candidate.role}</p>
          <span className="rounded border border-white/10 bg-white/10 px-1.5 py-0.5 text-xs font-medium text-neutral-300">
            {candidate.party}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <p className="text-[10px] text-neutral-400">Casos</p>
            <p className="text-lg font-semibold text-white">{candidate.cases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <p className="text-[10px] text-neutral-400">Fontes</p>
            <p className="text-lg font-semibold text-white">{candidate.sources}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <p className="text-[10px] text-neutral-400">Propostas</p>
            <p className={`text-lg font-semibold ${proposalCount > 0 ? 'text-emerald-300' : 'text-neutral-500'}`}>
              {proposalCount}
            </p>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-neutral-300">{candidate.summary}</p>

        <div className="mt-5 flex items-center justify-end border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition group-hover:bg-neutral-200">
            Ver dossiê <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

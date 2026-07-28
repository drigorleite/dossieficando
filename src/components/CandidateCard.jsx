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
  const { dot, text } = riskAccent(candidate.riskLevel);

  return (
    <motion.button
      layoutId={`candidate-${candidate.slug}`}
      onClick={() => onOpen(candidate)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      className="group relative min-h-[31rem] w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/40 sm:min-h-[32rem] sm:rounded-3xl"
      style={{ background: 'rgba(18,18,22,0.95)', boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset' }}
    >
      <div className="absolute inset-0">
        <img
          src={candidate.image}
          alt={candidate.name}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.68) 48%, rgba(0,0,0,0.12) 100%)' }} />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)' }} aria-hidden="true" />
      </div>

      <div className="absolute left-3 right-3 top-3 z-10 flex min-w-0 items-start justify-between gap-2 sm:left-4 sm:right-4 sm:top-4">
        <div className="flex min-w-0 max-w-[calc(100%-3.25rem)] items-center gap-1.5 rounded-full border border-white/12 bg-black/65 px-2.5 py-1.5 backdrop-blur-md" style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}>
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span className={`truncate text-[10px] font-medium leading-none ${text}`}>{candidate.riskLevel}</span>
        </div>

        {proposalCount > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md" style={{ boxShadow: '0 1px 0 rgba(52,211,153,0.08) inset' }}>
            <Lightbulb size={11} aria-hidden="true" />
            {proposalCount}
          </span>
        )}
      </div>

      <div className="relative flex h-full min-h-[31rem] min-w-0 flex-col justify-end p-4 pt-20 min-[390px]:p-5 min-[390px]:pt-20 sm:min-h-[32rem] sm:p-6 sm:pt-24">
        <div className="mb-3 flex min-w-0 flex-wrap gap-1.5 sm:gap-2">
          {candidate.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="break-words text-[clamp(1.35rem,6vw,1.75rem)] font-bold leading-[1.08] tracking-tight text-white">
          {candidate.name}
        </h3>

        <div className="mt-2 flex min-w-0 flex-wrap items-center gap-2">
          <p className="min-w-0 break-words text-sm leading-5 text-neutral-400">{candidate.role}</p>
          <span className="shrink-0 rounded border border-white/10 bg-white/10 px-1.5 py-0.5 text-xs font-medium text-neutral-300">
            {candidate.party}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 py-4 min-[390px]:gap-2">
          {[
            ['Casos', candidate.cases, 'text-white'],
            ['Fontes', candidate.sources, 'text-white'],
            ['Propostas', proposalCount, proposalCount > 0 ? 'text-emerald-300' : 'text-neutral-500'],
          ].map(([label, value, valueClass]) => (
            <div
              key={label}
              className="min-w-0 rounded-xl border border-white/10 p-2.5 backdrop-blur-md min-[390px]:rounded-2xl min-[390px]:p-3"
              style={{ background: 'rgba(255,255,255,0.08)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}
            >
              <p className="truncate text-[9px] text-neutral-400 min-[390px]:text-[10px]">{label}</p>
              <p className={`mt-0.5 text-base font-semibold min-[390px]:text-lg ${valueClass}`}>{value}</p>
            </div>
          ))}
        </div>

        <p className="line-clamp-3 break-words text-[13px] leading-5 text-neutral-300 min-[390px]:text-sm min-[390px]:leading-6">
          {candidate.summary}
        </p>

        <div className="mt-4 flex items-center justify-end border-t border-white/10 pt-4 sm:mt-5">
          <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition group-hover:bg-neutral-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Ver dossiê <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

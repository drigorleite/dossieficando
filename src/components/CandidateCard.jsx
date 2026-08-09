import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Badge from './ui/Badge';

export default function CandidateCard({ candidate, onOpen, priority = false }) {
  return (
    <motion.button
      layoutId={`candidate-${candidate.slug}`}
      onClick={() => onOpen(candidate)}
      data-candidate={candidate.slug}
      aria-label={`Abrir dossiê de ${candidate.name}`}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative min-h-85 w-full overflow-hidden rounded-4xl border border-white/10 bg-neutral-900 text-left shadow-2xl shadow-black/20 outline-none transition focus-visible:ring-2 focus-visible:ring-white/40 sm:min-h-97.5"
    >
      <div className="absolute inset-0">
        <img
          src={candidate.image}
          alt={candidate.name}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/10" />
      </div>

      <div className="relative flex h-full min-h-85 flex-col justify-end p-5 sm:min-h-97.5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {candidate.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="text-2xl font-bold leading-tight text-white">{candidate.name}</h3>
        <p className="mt-1 text-sm text-neutral-400">{candidate.role}</p>

        <div className="grid grid-cols-2 gap-3 py-4 sm:py-5">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <p className="text-xs text-neutral-400">Casos</p>
            <p className="text-xl font-semibold text-white">{candidate.cases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <p className="text-xs text-neutral-400">Fontes</p>
            <p className="text-xl font-semibold text-white">{candidate.sources}</p>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-neutral-300 sm:line-clamp-3">{candidate.summary}</p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs text-neutral-400">{candidate.riskLevel}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition group-hover:bg-neutral-200">
            Ver mais <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

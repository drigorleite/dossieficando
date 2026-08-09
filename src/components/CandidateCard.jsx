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
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm outline-none transition hover:border-neutral-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-900/40"
    >
      <div className="relative h-52 overflow-hidden border-b border-neutral-200 sm:h-60">
        <img
          src={candidate.image}
          alt={candidate.name}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {candidate.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} className="border-white/70 bg-white/90 text-neutral-900 shadow-sm">{tag}</Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        {candidate.candidacyStatus && (
          <span
            className={`mb-3 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${
              candidate.candidacyStatusType === 'official'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-amber-200 bg-amber-50 text-amber-900'
            }`}
          >
            {candidate.candidacyStatus}
          </span>
        )}
        <h3 className="text-2xl font-bold leading-tight text-neutral-950">{candidate.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{candidate.role}</p>

        <div className="grid grid-cols-2 gap-3 py-4 sm:py-5">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
            <p className="text-xs text-neutral-500">Registros</p>
            <p className="text-xl font-semibold text-neutral-950">{candidate.cases}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
            <p className="text-xs text-neutral-500">Fontes</p>
            <p className="text-xl font-semibold text-neutral-950">{candidate.sources}</p>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-neutral-600">{candidate.summary}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
          <span className="line-clamp-2 text-xs leading-5 text-neutral-500">{candidate.riskLevel}</span>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-800">
            Ver mais <ExternalLink size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  MessageSquareWarning,
  ExternalLink,
} from 'lucide-react';
import ProposalDetailBadge from './ProposalDetailBadge';

const feasibilityIcon = (text) => {
  if (!text) return null;
  const lower = text.toLowerCase();
  if (lower.includes('alto') || lower.includes('viável') || lower.includes('apoio')) {
    return <CheckCircle size={13} className="shrink-0 text-emerald-400" />;
  }
  if (lower.includes('baixo') || lower.includes('impacto') || lower.includes('exigiria') || lower.includes('depende') || lower.includes('enfrenta')) {
    return <AlertCircle size={13} className="shrink-0 text-amber-400" />;
  }
  if (lower.includes('não') || lower.includes('sem fonte') || lower.includes('não detalhado')) {
    return <XCircle size={13} className="shrink-0 text-red-400" />;
  }
  return <Info size={13} className="shrink-0 text-neutral-400" />;
};

const feasibilityFields = [
  { key: 'political', label: 'Viabilidade Política' },
  { key: 'fiscal', label: 'Viabilidade Fiscal' },
  { key: 'technical', label: 'Viabilidade Técnica' },
  { key: 'constitutional', label: 'Impacto Constitucional' },
];

export default function ProposalCard({ proposal }) {
  const hasImplementation = proposal.implementation && proposal.implementation.trim().length > 0;
  const activeFeasibility = feasibilityFields.filter(
    ({ key }) => proposal.feasibility?.[key]
  );

  return (
    <article className="flex min-w-0 flex-col gap-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-neutral-900/80 p-4 min-[390px]:p-5 sm:gap-5 sm:rounded-3xl sm:p-6">
      <div className="min-w-0">
        <div className="mb-3 flex min-w-0 flex-wrap items-center gap-2">
          {proposal.detailLevel && (
            <ProposalDetailBadge level={proposal.detailLevel} />
          )}
          {proposal.category && (
            <span className="max-w-full break-words rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
              {proposal.category}
            </span>
          )}
        </div>

        <h3 className="break-words text-[clamp(1.1rem,5vw,1.25rem)] font-bold leading-snug text-white">
          {proposal.title}
        </h3>

        <p className="mt-3 break-words text-[13px] leading-6 text-neutral-300 sm:text-sm sm:leading-7">
          {proposal.summary}
        </p>
      </div>

      {hasImplementation ? (
        <div className="min-w-0 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 sm:p-4">
          <h4 className="mb-2 break-words text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-emerald-400 sm:text-xs sm:tracking-[0.15em]">
            Como seria implementado
          </h4>
          <p className="break-words text-[13px] leading-6 text-neutral-300 sm:text-sm sm:leading-7">
            {proposal.implementation}
          </p>
        </div>
      ) : (
        <div className="flex min-w-0 items-start gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-3.5 sm:p-4">
          <XCircle size={15} className="mt-0.5 shrink-0 text-red-400" />
          <p className="min-w-0 break-words text-[13px] leading-5 text-red-200 sm:text-sm">
            Mecanismo de implementação não explicado pelo candidato.
          </p>
        </div>
      )}

      {activeFeasibility.length > 0 && (
        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {activeFeasibility.map(({ key, label }) => (
            <div key={key} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
              <span className="mb-2 block break-words text-[10px] uppercase leading-4 tracking-[0.12em] text-neutral-500 sm:text-xs sm:tracking-[0.15em]">
                {label}
              </span>
              <div className="flex min-w-0 items-start gap-2">
                {feasibilityIcon(proposal.feasibility[key])}
                <p className="min-w-0 break-words text-[13px] leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  {proposal.feasibility[key]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {proposal.criticism && (
        <div className="flex min-w-0 items-start gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3.5 sm:p-4">
          <MessageSquareWarning size={15} className="mt-0.5 shrink-0 text-amber-400" />
          <div className="min-w-0">
            <p className="mb-1 break-words text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-amber-400 sm:tracking-[0.15em]">
              Críticas e contestações
            </p>
            <p className="break-words text-[13px] leading-5 text-neutral-300 sm:text-sm sm:leading-6">{proposal.criticism}</p>
          </div>
        </div>
      )}

      {(proposal.sourceName || proposal.sourceUrl) && (
        <div className="min-w-0 border-t border-white/10 pt-4">
          {proposal.sourceUrl ? (
            <a
              href={proposal.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <span className="min-w-0 truncate">Fonte: {proposal.sourceName ?? 'Documento público'}</span>
              <ExternalLink size={13} className="shrink-0" aria-hidden="true" />
            </a>
          ) : (
            <p className="break-words text-xs leading-5 text-neutral-500">
              Fonte: {proposal.sourceName}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import ProposalDetailBadge from './ProposalDetailBadge';

const feasibilityIcon = (text) => {
  if (!text) return null;
  const lower = text.toLowerCase();
  if (lower.includes('alto') || lower.includes('viável') || lower.includes('apoio')) {
    return <CheckCircle size={13} className="text-emerald-400 shrink-0" />;
  }
  if (lower.includes('baixo') || lower.includes('impacto') || lower.includes('exigiria') || lower.includes('depende')) {
    return <AlertCircle size={13} className="text-amber-400 shrink-0" />;
  }
  if (lower.includes('não') || lower.includes('sem fonte') || lower.includes('não detalhado')) {
    return <XCircle size={13} className="text-red-400 shrink-0" />;
  }
  return <Info size={13} className="text-neutral-400 shrink-0" />;
};

export default function ProposalCard({ proposal }) {
  const hasImplementation = proposal.implementation && proposal.implementation.trim().length > 0;

  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-neutral-900/80 p-6 gap-5">
      {/* Header */}
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {proposal.detailLevel && (
            <ProposalDetailBadge level={proposal.detailLevel} />
          )}
          {proposal.category && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {proposal.category}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white leading-snug">
          {proposal.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-neutral-300">
          {proposal.summary}
        </p>
      </div>

      {/* Implementation */}
      {hasImplementation ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400">
            Como seria implementado
          </h4>
          <p className="text-sm leading-7 text-neutral-300">
            {proposal.implementation}
          </p>
        </div>
      ) : (
        <div className="flex items-start gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
          <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
          <p className="text-sm text-red-200">
            Mecanismo de implementação não explicado pelo candidato.
          </p>
        </div>
      )}

      {/* Feasibility */}
      {proposal.feasibility && (
        <div className="grid gap-3 sm:grid-cols-2">
          {proposal.feasibility.political && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-neutral-500">
                Viabilidade Política
              </span>
              <div className="flex items-start gap-2">
                {feasibilityIcon(proposal.feasibility.political)}
                <p className="text-sm leading-6 text-neutral-300">
                  {proposal.feasibility.political}
                </p>
              </div>
            </div>
          )}
          {proposal.feasibility.fiscal && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-neutral-500">
                Viabilidade Fiscal
              </span>
              <div className="flex items-start gap-2">
                {feasibilityIcon(proposal.feasibility.fiscal)}
                <p className="text-sm leading-6 text-neutral-300">
                  {proposal.feasibility.fiscal}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

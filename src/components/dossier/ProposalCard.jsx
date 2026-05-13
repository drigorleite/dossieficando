import ProposalDetailBadge from './ProposalDetailBadge';

export default function ProposalCard({ proposal }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-neutral-900/80 p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {proposal.detailLevel && (
          <ProposalDetailBadge level={proposal.detailLevel} />
        )}

        {proposal.category && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {proposal.category}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white">
        {proposal.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-neutral-300">
        {proposal.summary}
      </p>

      {proposal.implementation && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-400">
            Como seria implementado
          </h4>

          <p className="mt-3 text-sm leading-7 text-neutral-300">
            {proposal.implementation}
          </p>
        </div>
      )}

      {!proposal.implementation && (
        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
          Mecanismo de implementação não explicado.
        </div>
      )}

      {proposal.feasibility && (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-4">
            <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Viabilidade Política
            </span>

            <p className="mt-2 text-sm text-neutral-300">
              {proposal.feasibility.political}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-4">
            <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Viabilidade Fiscal
            </span>

            <p className="mt-2 text-sm text-neutral-300">
              {proposal.feasibility.fiscal}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

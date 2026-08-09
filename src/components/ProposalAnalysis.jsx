import { ArrowUpRight, CircleAlert, Cog, Landmark, Target } from 'lucide-react';
import Badge from './ui/Badge';
import Card from './ui/Card';

const feasibilityStyles = {
  parcial: 'border-amber-300 bg-amber-50 text-amber-800',
  insuficiente: 'border-orange-300 bg-orange-50 text-orange-800',
  crítica: 'border-red-300 bg-red-50 text-red-800',
  detalhada: 'border-emerald-300 bg-emerald-50 text-emerald-800',
};

export default function ProposalAnalysis({ proposals, note }) {
  if (!proposals?.length && !note) return null;

  return (
    <Card>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">
            Promessa versus execução
          </p>
          <h3 className="mt-2 text-2xl font-bold text-neutral-950">Propostas: qual é o “como”?</h3>
        </div>
        <Badge>Análise até 9 ago. 2026</Badge>
      </div>

      {note && (
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
          <p className="text-sm leading-6 text-neutral-700">{note}</p>
        </div>
      )}

      {!proposals?.length ? (
        <div className="mt-5 flex gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
          <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={18} />
          <p className="text-sm leading-6 text-neutral-700">
            Sem material executivo suficiente para uma avaliação proposta por proposta.
            Promessas soltas não foram tratadas como plano de governo.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {proposals.map((proposal) => (
            <article key={`${proposal.area}-${proposal.title}`} className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{proposal.area}</Badge>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                    feasibilityStyles[proposal.feasibility] ?? feasibilityStyles.insuficiente
                  }`}
                >
                  {proposal.feasibilityLabel}
                </span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-neutral-950">{proposal.title}</h4>

              <div className="mt-5 grid gap-4">
                <div className="flex gap-3">
                  <Target className="mt-1 shrink-0 text-neutral-500" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      O que promete
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">{proposal.promise}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Cog className="mt-1 shrink-0 text-blue-800" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                      Como pretende fazer
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">{proposal.how}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                  <Landmark className="mt-1 shrink-0 text-red-700" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-800">
                      O que falta demonstrar
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">{proposal.gaps}</p>
                  </div>
                </div>
              </div>

              <a
                href={proposal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-medium text-blue-800 transition hover:bg-blue-50 hover:text-blue-950"
              >
                {proposal.sourceLabel}
                <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      )}
    </Card>
  );
}

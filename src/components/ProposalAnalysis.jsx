import { ArrowUpRight, CircleAlert, Cog, Landmark, Target } from 'lucide-react';
import Badge from './ui/Badge';
import Card from './ui/Card';

const feasibilityStyles = {
  parcial: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  insuficiente: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
  crítica: 'border-red-500/30 bg-red-500/10 text-red-300',
  detalhada: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
};

export default function ProposalAnalysis({ proposals, note }) {
  if (!proposals?.length && !note) return null;

  return (
    <Card>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Promessa versus execução
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">Propostas: qual é o “como”?</h3>
        </div>
        <Badge>Análise até 9 ago. 2026</Badge>
      </div>

      {note && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-6 text-neutral-300">{note}</p>
        </div>
      )}

      {!proposals?.length ? (
        <div className="mt-5 flex gap-3 rounded-2xl border border-orange-500/25 bg-orange-500/5 p-4">
          <CircleAlert className="mt-0.5 shrink-0 text-orange-400" size={18} />
          <p className="text-sm leading-6 text-neutral-300">
            Sem material executivo suficiente para uma avaliação proposta por proposta.
            Promessas soltas não foram tratadas como plano de governo.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {proposals.map((proposal) => (
            <article key={`${proposal.area}-${proposal.title}`} className="rounded-2xl border border-white/10 p-5">
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
              <h4 className="mt-3 text-lg font-semibold text-white">{proposal.title}</h4>

              <div className="mt-5 grid gap-4">
                <div className="flex gap-3">
                  <Target className="mt-1 shrink-0 text-neutral-500" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      O que promete
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">{proposal.promise}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Cog className="mt-1 shrink-0 text-cyan-400" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      Como pretende fazer
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">{proposal.how}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <Landmark className="mt-1 shrink-0 text-red-400" size={17} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                      O que falta demonstrar
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">{proposal.gaps}</p>
                  </div>
                </div>
              </div>

              <a
                href={proposal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white"
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

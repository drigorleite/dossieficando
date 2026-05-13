import { Lightbulb, ChevronRight } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { modularCandidates } from '../data/candidates/index';
import { candidatesWithImages } from '../data/candidatesWithImages';

// Build a flat list of all proposals with candidate info
const allProposals = modularCandidates.flatMap((modular) => {
  const candidateInfo = candidatesWithImages.find((c) => c.slug === modular.slug);
  return (modular.proposals ?? []).map((p) => ({
    ...p,
    candidateName: modular.name,
    candidateParty: modular.profile?.party ?? '',
    candidateImage: candidateInfo?.image ?? null,
    candidateSlug: modular.slug,
  }));
});

// Group by category
const byCategory = allProposals.reduce((acc, p) => {
  const cat = p.category ?? 'Outros';
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(p);
  return acc;
}, {});

const detailColors = {
  high: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  medium: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  low: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  slogan: 'border-neutral-500/30 bg-neutral-500/10 text-neutral-400',
};

const detailLabels = {
  high: 'Alto detalhe',
  medium: 'Médio detalhe',
  low: 'Baixo detalhe',
  slogan: 'Apenas slogan',
};

export default function ProposalsComparisonSection({ onOpenCandidate }) {
  if (allProposals.length === 0) return null;

  return (
    <section id="propostas" className="border-t border-white/10 bg-neutral-950 py-14">
      <Container>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Propostas"
            heading="O que cada candidato propõe."
          />
          <p className="text-sm text-neutral-500">
            {allProposals.length} proposta{allProposals.length > 1 ? 's' : ''} de{' '}
            {modularCandidates.filter((m) => m.proposals?.length > 0).length} candidatos
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(byCategory).map(([category, proposals]) => (
            <div key={category}>
              <div className="mb-5 flex items-center gap-3">
                <Lightbulb size={15} className="text-neutral-500" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {proposals.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const candidate = candidatesWithImages.find((c) => c.slug === p.candidateSlug);
                      if (candidate) onOpenCandidate(candidate);
                    }}
                    className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:bg-white/[0.07] hover:border-white/20"
                  >
                    {/* Candidate info */}
                    <div className="flex items-center gap-2">
                      {p.candidateImage && (
                        <img
                          src={p.candidateImage}
                          alt={p.candidateName}
                          className="h-7 w-7 rounded-full object-cover grayscale"
                        />
                      )}
                      <div>
                        <p className="text-xs font-semibold text-white leading-tight">{p.candidateName}</p>
                        <p className="text-[10px] text-neutral-500">{p.candidateParty}</p>
                      </div>
                    </div>

                    {/* Proposal */}
                    <div>
                      <div className="mb-2">
                        {p.detailLevel && (
                          <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${detailColors[p.detailLevel] ?? ''}`}>
                            {detailLabels[p.detailLevel] ?? p.detailLevel}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-white leading-snug">{p.title}</p>
                      <p className="mt-1.5 text-xs leading-5 text-neutral-400 line-clamp-2">{p.summary}</p>
                    </div>

                    <div className="mt-auto flex items-center gap-1 text-xs text-neutral-600 group-hover:text-neutral-400 transition">
                      Ver dossiê completo <ChevronRight size={12} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

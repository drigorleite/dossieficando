import { ExternalLink } from 'lucide-react';
import { candidateScope } from '../data/candidates';
import Container from './ui/Container';
import CandidateCard from './CandidateCard';

export default function CandidateGrid({ filteredCandidates, setSelectedCandidate }) {
  return (
    <section id="candidatos" className="bg-neutral-50 py-12 lg:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900">Candidatos</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950">
              Cinco líderes nas pesquisas
            </h2>
          </div>
          <p className="text-sm text-neutral-500" aria-live="polite">
            {filteredCandidates.length} {filteredCandidates.length === 1 ? 'resultado' : 'resultados'}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-base font-semibold text-neutral-950">{candidateScope.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {candidateScope.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <a
                href={candidateScope.tseUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40"
              >
                Base oficial do TSE <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                href={candidateScope.referenceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40"
              >
                Critério: agregador do UOL <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <details className="mt-4 border-t border-neutral-200 pt-4 text-sm">
            <summary className="min-h-11 cursor-pointer select-none py-2 font-medium text-neutral-700 hover:text-blue-950">
              {candidateScope.excludedLabel}
            </summary>
            <ul className="mt-2 space-y-3 text-neutral-600">
              {candidateScope.excluded.map((item) => (
                <li key={item.name} className="leading-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:text-blue-900"
                  >
                    {item.name}
                  </a>{' '}
                  — {item.reason}.
                </li>
              ))}
            </ul>
          </details>
        </div>

        {filteredCandidates.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCandidates.map((candidate, index) => (
              <CandidateCard
                key={candidate.slug}
                candidate={candidate}
                onOpen={setSelectedCandidate}
                priority={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <p className="text-neutral-600">Nenhum candidato encontrado para essa busca.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

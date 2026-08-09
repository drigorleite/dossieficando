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
              Presidenciáveis mapeados
            </h2>
          </div>
          <p className="text-sm text-neutral-500" aria-live="polite">
            {filteredCandidates.length} {filteredCandidates.length === 1 ? 'resultado' : 'resultados'}
          </p>
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

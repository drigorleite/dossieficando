import Container from './ui/Container';
import CandidateCard from './CandidateCard';

export default function CandidateGrid({ filteredCandidates, setSelectedCandidate }) {
  return (
    <section id="candidatos" className="bg-neutral-950 py-10 lg:py-14">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Candidatos</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Pré-candidatos mapeados
            </h2>
          </div>
          <p className="text-sm text-neutral-500">{filteredCandidates.length} resultado(s)</p>
        </div>

        {filteredCandidates.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.slug}
                candidate={candidate}
                onOpen={setSelectedCandidate}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-4xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-neutral-400">Nenhum candidato encontrado para essa busca.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

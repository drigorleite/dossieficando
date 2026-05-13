import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Container from './ui/Container';
import CandidateCard from './CandidateCard';

const SORT_OPTIONS = [
  { value: 'default', label: 'Padrão' },
  { value: 'cases_desc', label: 'Mais casos' },
  { value: 'sources_desc', label: 'Mais fontes' },
  { value: 'name_asc', label: 'A–Z' },
];

export default function CandidateGrid({ filteredCandidates, setSelectedCandidate }) {
  const [partyFilter, setPartyFilter] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Build unique party list from all candidates
  const parties = useMemo(() => {
    const set = new Set(filteredCandidates.map((c) => c.party));
    return ['', ...Array.from(set).sort()];
  }, [filteredCandidates]);

  const displayed = useMemo(() => {
    let list = partyFilter
      ? filteredCandidates.filter((c) => c.party === partyFilter)
      : filteredCandidates;

    switch (sortBy) {
      case 'cases_desc':
        list = [...list].sort((a, b) => b.cases - a.cases);
        break;
      case 'sources_desc':
        list = [...list].sort((a, b) => b.sources - a.sources);
        break;
      case 'name_asc':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }, [filteredCandidates, partyFilter, sortBy]);

  return (
    <section id="candidatos" className="bg-neutral-950 py-10 lg:py-14">
      <Container>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Candidatos</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Pré-candidatos mapeados
            </h2>
          </div>
          <p className="text-sm text-neutral-500">{displayed.length} resultado(s)</p>
        </div>

        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <SlidersHorizontal size={15} className="text-neutral-500" />

          {/* Party filter pills */}
          <div className="flex flex-wrap gap-2">
            {parties.map((party) => (
              <button
                key={party || 'all'}
                onClick={() => setPartyFilter(party)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  partyFilter === party
                    ? 'bg-white text-neutral-950'
                    : 'border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {party || 'Todos os partidos'}
              </button>
            ))}
          </div>

          {/* Sort select */}
          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 outline-none focus:border-white/30"
            >
              {SORT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value} className="bg-neutral-900">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {displayed.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayed.map((candidate) => (
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

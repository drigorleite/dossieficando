import { useState, useMemo } from 'react';
import { SlidersHorizontal, GitCompare } from 'lucide-react';
import Container from './ui/Container';
import CandidateCard from './CandidateCard';

const SORT_OPTIONS = [
  { value: 'default', label: 'Padrão' },
  { value: 'cases_desc', label: 'Mais casos' },
  { value: 'sources_desc', label: 'Mais fontes' },
  { value: 'name_asc', label: 'A–Z' },
];

export default function CandidateGrid({ filteredCandidates, setSelectedCandidate, onOpenComparison }) {
  const [partyFilter, setPartyFilter] = useState('');
  const [sortBy, setSortBy] = useState('default');

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
    <section id="candidatos" className="py-8 sm:py-10 lg:py-14" style={{ background: '#0a0a0c' }}>
      <Container>
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500 sm:text-xs sm:tracking-[0.35em]">Candidatos</p>
            <h2 className="mt-2 break-words text-[clamp(1.75rem,8vw,2.25rem)] font-bold leading-tight tracking-tight text-white">
              Pré-candidatos mapeados
            </h2>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-3">
            <p className="text-sm text-neutral-500">{displayed.length} resultado{displayed.length !== 1 ? 's' : ''}</p>
            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <GitCompare size={13} aria-hidden="true" />
                Comparar
              </button>
            )}
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 p-3 backdrop-blur-md sm:mb-8" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}>
          <div className="flex min-w-0 items-center gap-2">
            <SlidersHorizontal size={15} className="shrink-0 text-neutral-500" aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-500 sm:hidden">Filtros</span>

            <div className="ml-auto shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Ordenar candidatos"
                className="min-h-11 max-w-[9rem] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 outline-none backdrop-blur-sm focus:border-white/25 sm:max-w-none sm:rounded-2xl"
              >
                {SORT_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value} className="bg-neutral-900">
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="-mx-1 mt-3 flex snap-x gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
            {parties.map((party) => (
              <button
                key={party || 'all'}
                onClick={() => setPartyFilter(party)}
                className={`min-h-11 shrink-0 snap-start whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition ${
                  partyFilter === party
                    ? 'bg-white text-neutral-950'
                    : 'border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
                }`}
              >
                {party || 'Todos os partidos'}
              </button>
            ))}
          </div>
        </div>

        {displayed.length > 0 ? (
          <div className="grid min-w-0 grid-cols-1 gap-4 min-[700px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {displayed.map((candidate) => (
              <CandidateCard
                key={candidate.slug}
                candidate={candidate}
                onOpen={setSelectedCandidate}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 p-6 text-center backdrop-blur-md sm:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="break-words text-sm text-neutral-400 sm:text-base">Nenhum candidato encontrado para essa busca.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

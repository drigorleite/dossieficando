import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { candidates } from '../data/candidates';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CandidateGrid from '../components/CandidateGrid';
import CandidateExpanded from '../components/CandidateExpanded';
import PurposeSection from '../components/PurposeSection';
import MethodSection from '../components/MethodSection';
import RecentScandals from '../components/RecentScandals';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [query, setQuery] = useState('');

  const filteredCandidates = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return candidates;
    return candidates.filter((c) => {
      const searchable = [
        c.name,
        c.role,
        c.party,
        c.summary,
        ...c.tags,
        ...c.timeline.flatMap((item) => [item.title, item.text, item.legalStatus]),
        ...(c.proposals?.flatMap((proposal) => [
          proposal.area,
          proposal.title,
          proposal.promise,
          proposal.how,
          proposal.gaps,
        ]) ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(q);
    });
  }, [query]);

  const closeCandidate = () => {
    const slug = selectedCandidate?.slug;
    setSelectedCandidate(null);
    if (window.location.hash.includes('-candidato')) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    window.requestAnimationFrame(() => {
      document.querySelector(`[data-candidate="${slug}"]`)?.focus();
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-3 z-100 -translate-y-20 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <div
        aria-hidden={selectedCandidate ? true : undefined}
        inert={selectedCandidate ? true : undefined}
      >
        <Header />
        <main id="conteudo-principal">
          <Hero query={query} setQuery={setQuery} />
          <CandidateGrid
            filteredCandidates={filteredCandidates}
            setSelectedCandidate={setSelectedCandidate}
          />
          <RecentScandals />
          <PurposeSection />
          <MethodSection />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {selectedCandidate && (
          <CandidateExpanded
            candidate={selectedCandidate}
            onClose={closeCandidate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

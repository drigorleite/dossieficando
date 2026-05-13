import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { candidatesWithImages as candidates } from '../data/candidatesWithImages';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CandidateGrid from '../components/CandidateGrid';
import CandidateExpanded from '../components/CandidateExpanded';
import PurposeSection from '../components/PurposeSection';
import MethodSection from '../components/MethodSection';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [query, setQuery] = useState('');

  const filteredCandidates = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return candidates;
    return candidates.filter((c) => {
      const searchable = [c.name, c.role, c.party, c.summary, ...c.tags]
        .join(' ')
        .toLowerCase();
      return searchable.includes(q);
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <Header />
      <Hero query={query} setQuery={setQuery} />
      <CandidateGrid
        filteredCandidates={filteredCandidates}
        setSelectedCandidate={setSelectedCandidate}
      />
      <PurposeSection />
      <MethodSection />
      <Footer />

      <AnimatePresence>
        {selectedCandidate && (
          <CandidateExpanded
            candidate={selectedCandidate}
            onClose={() => setSelectedCandidate(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { candidatesWithImages as candidates } from '../data/candidatesWithImages';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CandidateGrid from '../components/CandidateGrid';
import CandidateExpanded from '../components/CandidateExpanded';
import CandidateComparison from '../components/CandidateComparison';
import ProposalsComparisonSection from '../components/ProposalsComparisonSection';
import PurposeSection from '../components/PurposeSection';
import AboutSection from '../components/AboutSection';
import MethodSection from '../components/MethodSection';
import MethodologyPage from '../components/MethodologyPage';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';
import GovernorSection from '../components/governors/GovernorSection';

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [comparisonOpen, setComparisonOpen] = useState(false);
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
    <div className="min-h-screen bg-neutral-950 font-sans text-white pt-[64px]">
      <Header
        onOpenComparison={() => setComparisonOpen(true)}
        onOpenCandidate={setSelectedCandidate}
      />
      <Hero query={query} setQuery={setQuery} onOpenComparison={() => setComparisonOpen(true)} />
      <CandidateGrid
        filteredCandidates={filteredCandidates}
        setSelectedCandidate={setSelectedCandidate}
        onOpenComparison={() => setComparisonOpen(true)}
      />
      <GovernorSection />
      <ProposalsComparisonSection onOpenCandidate={setSelectedCandidate} />
      <AboutSection />
      <PurposeSection />
      <MethodSection />
      <MethodologyPage />
      <FeedbackSection />
      <Footer />

      <AnimatePresence>
        {selectedCandidate && (
          <CandidateExpanded
            candidate={selectedCandidate}
            onClose={() => setSelectedCandidate(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {comparisonOpen && (
          <CandidateComparison
            candidates={candidates}
            onClose={() => setComparisonOpen(false)}
            onOpenCandidate={(c) => {
              setComparisonOpen(false);
              setSelectedCandidate(c);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

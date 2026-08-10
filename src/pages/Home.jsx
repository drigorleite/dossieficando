import { lazy, Suspense, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { candidatesWithImages as candidates } from '../data/candidatesWithImages';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CandidateGrid from '../components/CandidateGrid';
import ProposalsComparisonSection from '../components/ProposalsComparisonSection';
import PurposeSection from '../components/PurposeSection';
import AboutSection from '../components/AboutSection';
import MethodSection from '../components/MethodSection';
import MethodologyPage from '../components/MethodologyPage';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';
import LazyFallback from '../components/ui/LazyFallback';

// Overlays pesados — carregados sob demanda (só ao abrir).
const CandidateExpanded = lazy(() => import('../components/CandidateExpanded'));
const CandidateComparison = lazy(() => import('../components/CandidateComparison'));

/* Barra de progresso de leitura no topo da página. */
function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  if (reduce) return null;
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
      style={{ scaleX, background: 'linear-gradient(90deg, var(--accent), #34d399)' }}
      aria-hidden="true"
    />
  );
}

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
      <ScrollProgress />
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
      <ProposalsComparisonSection onOpenCandidate={setSelectedCandidate} />
      <AboutSection />
      <PurposeSection />
      <MethodSection />
      <MethodologyPage />
      <FeedbackSection />
      <Footer />

      {/* Suspense envolve o AnimatePresence para não quebrar a coordenação de saída
          (o filho direto do AnimatePresence precisa ser o componente motion). */}
      <Suspense fallback={<LazyFallback variant="overlay" />}>
        <AnimatePresence>
          {selectedCandidate && (
            <CandidateExpanded
              candidate={selectedCandidate}
              onClose={() => setSelectedCandidate(null)}
            />
          )}
        </AnimatePresence>
      </Suspense>

      <Suspense fallback={<LazyFallback variant="overlay" />}>
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
      </Suspense>
    </div>
  );
}

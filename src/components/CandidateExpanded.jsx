import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, Newspaper } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';
import InfoCard from './InfoCard';
import Timeline from './Timeline';
import SourcesList from './SourcesList';
import EditorialNotice from './EditorialNotice';
import ProposalAnalysis from './ProposalAnalysis';

const candidacyStatusClasses = {
  official: 'border-emerald-200 bg-emerald-50 text-emerald-950 hover:bg-emerald-100',
  filed: 'border-blue-200 bg-blue-50 text-blue-950 hover:bg-blue-100',
  pending: 'border-amber-200 bg-amber-50 text-amber-950 hover:bg-amber-100',
};

const CATEGORIES = [
  { type: 'suspeita', label: 'Apurações e alegações', accent: 'text-amber-700' },
  { type: 'fato', label: 'Fatos e decisões documentados', accent: 'text-blue-900' },
  { type: 'curiosidade', label: 'Contexto público relevante', accent: 'text-violet-700' },
  { type: 'ligação', label: 'Relações relevantes', accent: 'text-neutral-600' },
];

export default function CandidateExpanded({ candidate, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = [...dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )].filter((element) => !element.hasAttribute('hidden'));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`candidate-title-${candidate.slug}`}
      aria-describedby={`candidate-summary-${candidate.slug}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-white text-neutral-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div layoutId={`candidate-${candidate.slug}`} className="min-h-screen bg-neutral-50">
        <div className="relative min-h-[58vh] overflow-hidden border-b border-neutral-200 bg-white">
          <img
            src={candidate.image}
            alt={candidate.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover grayscale opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/94 to-white/25" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />

          <Button
            ref={closeButtonRef}
            variant="icon"
            onClick={onClose}
            className="fixed left-4 top-4 z-50"
            aria-label="Voltar"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </Button>

          <Container className="relative flex min-h-[58vh] flex-col justify-end pb-10 pt-24">
            <div className="mb-4 flex flex-wrap gap-2">
              {candidate.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">{candidate.party}</p>
            {candidate.candidacyStatus && (
              <a
                href={candidate.candidacyUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-3 inline-flex min-h-11 w-fit items-center rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40 ${candidacyStatusClasses[candidate.candidacyStatusType] ?? candidacyStatusClasses.pending}`}
              >
                {candidate.candidacyStatus}
              </a>
            )}
            <h2
              id={`candidate-title-${candidate.slug}`}
              className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl"
            >
              {candidate.name}
            </h2>
            <p
              id={`candidate-summary-${candidate.slug}`}
              className="mt-4 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg"
            >
              {candidate.summary}
            </p>
            {candidate.updatedAt && (
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Verificado até {candidate.updatedAt}
              </p>
            )}
          </Container>
        </div>

        <nav
          aria-label="Seções do dossiê"
          className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-xl"
        >
          <Container className="flex gap-2 overflow-x-auto py-2 pl-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pl-6 lg:pl-8">
            <a href="#resumo-candidato" className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-blue-900">
              Resumo
            </a>
            {(candidate.proposals?.length > 0 || candidate.proposalNote) && (
              <a href="#propostas-candidato" className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-blue-900">
                Propostas
              </a>
            )}
            {candidate.timeline?.length > 0 && (
              <a href="#dossie-candidato" className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-blue-900">
                Dossiê
              </a>
            )}
            {candidate.sourceLinks?.length > 0 && (
              <a href="#fontes-candidato" className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-blue-900">
                Fontes
              </a>
            )}
          </Container>
        </nav>

        <Container className="grid gap-8 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-14">
          <aside className="order-2 space-y-4 lg:order-1">
            <InfoCard
              icon={<FileText size={18} aria-hidden="true" />}
              label="Casos catalogados"
              value={`${candidate.cases} registros`}
            />
            <InfoCard
              icon={<Newspaper size={18} aria-hidden="true" />}
              label="Fontes mapeadas"
              value={`${candidate.sources} referências`}
            />
            <InfoCard
              icon={<Scale size={18} aria-hidden="true" />}
              label="Situação jurídica"
              value={candidate.riskLevel}
            />
            <EditorialNotice note={candidate.editorialNote} />
          </aside>

          <main className="order-1 space-y-6 lg:order-2">
            <Card id="resumo-candidato" className="scroll-mt-20">
              <h3 className="text-2xl font-bold text-neutral-950">Resumo do dossiê</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                {candidate.summary}
              </p>
            </Card>

            {(candidate.proposals?.length > 0 || candidate.proposalNote) && (
              <div id="propostas-candidato" className="scroll-mt-20">
                <ProposalAnalysis proposals={candidate.proposals} note={candidate.proposalNote} />
              </div>
            )}

            {candidate.timeline?.length > 0 && (
              <Card id="dossie-candidato" className="scroll-mt-20">
                <h3 className="mb-6 text-2xl font-bold text-neutral-950">Dossiê</h3>
                <div className="space-y-8">
                  {CATEGORIES.map(({ type, label, accent }) => {
                    const items = candidate.timeline.filter((item) => item.type === type);
                    if (!items.length) return null;
                    return (
                      <div key={type}>
                        <h4 className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>
                          {label}
                        </h4>
                        <Timeline items={items} />
                      </div>
                    );
                  })}
                </div>
              </Card>
            )}

            {candidate.sourceLinks?.length > 0 && (
              <Card id="fontes-candidato" className="scroll-mt-20">
                <h3 className="mb-5 text-2xl font-bold text-neutral-950">Fontes e documentos</h3>
                <SourcesList sources={candidate.sourceLinks} />
              </Card>
            )}
          </main>
        </Container>
      </motion.div>
    </motion.div>
  );
}

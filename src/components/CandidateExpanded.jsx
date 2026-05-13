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

const CATEGORIES = [
  { type: 'suspeita', label: 'Suspeitas', accent: 'text-amber-400' },
  { type: 'fato', label: 'Fatos Concretos', accent: 'text-blue-400' },
  { type: 'curiosidade', label: 'Casos Curiosos', accent: 'text-purple-400' },
  { type: 'ligação', label: 'Ligações (Entorno)', accent: 'text-neutral-400' },
];

export default function CandidateExpanded({ candidate, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div layoutId={`candidate-${candidate.slug}`} className="min-h-screen bg-neutral-950">
        <div className="relative min-h-[58vh] overflow-hidden border-b border-white/10">
          <img
            src={candidate.image}
            alt={candidate.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-black/40" />

          <Button
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
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">{candidate.party}</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {candidate.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              {candidate.summary}
            </p>
          </Container>
        </div>

        <Container className="grid gap-8 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-14">
          <aside className="space-y-4">
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
              label="Classificação"
              value={candidate.riskLevel}
            />
            <EditorialNotice note={candidate.editorialNote} />
          </aside>

          <main className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-white">Resumo do dossiê</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
                {candidate.summary}
              </p>
            </Card>

            {candidate.timeline?.length > 0 && (
              <Card>
                <h3 className="mb-6 text-2xl font-bold text-white">Dossiê</h3>
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
              <Card>
                <h3 className="mb-5 text-2xl font-bold text-white">Fontes e documentos</h3>
                <SourcesList sources={candidate.sourceLinks} />
              </Card>
            )}
          </main>
        </Container>
      </motion.div>
    </motion.div>
  );
}

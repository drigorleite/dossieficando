import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, Newspaper, Lightbulb, BookOpen, AlertTriangle, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';
import InfoCard from './InfoCard';
import Timeline from './Timeline';
import SourcesList from './SourcesList';
import EditorialNotice from './EditorialNotice';
import LegalNotice from './dossier/LegalNotice';
import ProposalCard from './dossier/ProposalCard';
import SectionRenderer from './dossier/SectionRenderer';
import { modularCandidates } from '../data/candidates/index';
import { SECTION_TYPES } from '../constants/sectionTypes';

const CATEGORIES = [
  { type: 'suspeita', label: 'Suspeitas', accent: 'text-amber-400' },
  { type: 'fato', label: 'Fatos Concretos', accent: 'text-blue-400' },
  { type: 'curiosidade', label: 'Casos Curiosos', accent: 'text-purple-400' },
  { type: 'ligação', label: 'Ligações (Entorno)', accent: 'text-neutral-400' },
];

const TABS = [
  { id: 'dossie', label: 'Dossiê', icon: BookOpen },
  { id: 'propostas', label: 'Propostas', icon: Lightbulb },
  { id: 'secoes', label: 'Partido & Contexto', icon: AlertTriangle },
  { id: 'fontes', label: 'Fontes', icon: FileText },
];

function CategoryBlock({ type, label, accent, items }) {
  const [expanded, setExpanded] = useState(true);
  const filtered = items.filter((item) => item.type === type);
  if (!filtered.length) return null;

  return (
    <div className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-3 mb-4 group"
      >
        <h4 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>
          {label} <span className="text-neutral-600">({filtered.length})</span>
        </h4>
        {expanded
          ? <ChevronUp size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
          : <ChevronDown size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
        }
      </button>
      {expanded && <Timeline items={filtered} />}
    </div>
  );
}

export default function CandidateExpanded({ candidate, onClose }) {
  const [activeTab, setActiveTab] = useState('dossie');

  // Enrich with modular data if available
  const modular = modularCandidates.find((m) => m.slug === candidate.slug);
  const proposals = modular?.proposals ?? [];
  const sections = modular?.sections ?? {};
  const ideology = modular?.profile?.ideology ?? null;

  const hasSections = Object.values(sections).some((arr) => arr?.length > 0);
  const hasProposals = proposals.length > 0;

  const availableTabs = TABS.filter((tab) => {
    if (tab.id === 'propostas') return hasProposals;
    if (tab.id === 'secoes') return hasSections;
    return true;
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div layoutId={`candidate-${candidate.slug}`} className="min-h-screen bg-neutral-950">

        {/* ── Hero / Header ── */}
        <div className="relative min-h-[52vh] overflow-hidden border-b border-white/10">
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

          <Container className="relative flex min-h-[52vh] flex-col justify-end pb-8 pt-24">
            <div className="mb-4 flex flex-wrap gap-2">
              {candidate.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">{candidate.party}</p>
              {ideology && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-400">
                  {ideology}
                </span>
              )}
            </div>
            <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {candidate.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              {candidate.summary}
            </p>

            {hasProposals && (
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <Lightbulb size={12} />
                  {proposals.length} proposta{proposals.length > 1 ? 's' : ''} mapeada{proposals.length > 1 ? 's' : ''}
                </span>
              </div>
            )}
          </Container>
        </div>

        {/* ── Stats bar ── */}
        <div className="border-b border-white/10 bg-neutral-900/40">
          <Container className="flex flex-wrap gap-6 py-4">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <FileText size={15} className="text-neutral-500" />
              <span><strong className="text-white">{candidate.cases}</strong> casos catalogados</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Newspaper size={15} className="text-neutral-500" />
              <span><strong className="text-white">{candidate.sources}</strong> fontes mapeadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Scale size={15} className="text-neutral-500" />
              <span className="text-white">{candidate.riskLevel}</span>
            </div>
          </Container>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <Container>
            <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Seções do dossiê">
              {availableTabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === id
                      ? 'bg-white text-neutral-950'
                      : 'text-neutral-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                  {id === 'propostas' && hasProposals && (
                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                      activeTab === id ? 'bg-neutral-950/20 text-neutral-800' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {proposals.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </Container>
        </div>

        {/* ── Tab Content ── */}
        <Container className="py-10 lg:py-14">

          {/* ── DOSSIÊ TAB ── */}
          {activeTab === 'dossie' && (
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
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
                {candidate.relatedPeople?.length > 0 && (
                  <Card>
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={16} className="text-neutral-400" />
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                        Pessoas relacionadas
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.relatedPeople.map((person) => (
                        <span
                          key={person}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-300"
                        >
                          {person}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
                {candidate.relatedCompanies?.length > 0 && (
                  <Card>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      Empresas / Órgãos
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.relatedCompanies.map((company) => (
                        <span
                          key={company}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-300"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
                {candidate.relatedCases?.length > 0 && (
                  <Card>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      Casos / Operações
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.relatedCases.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs text-amber-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}
                <EditorialNotice note={candidate.editorialNote} />
              </aside>

              <main className="space-y-6">
                {candidate.timeline?.length > 0 ? (
                  <Card>
                    <h3 className="mb-6 text-2xl font-bold text-white">Linha do tempo</h3>
                    <div className="space-y-6">
                      {CATEGORIES.map(({ type, label, accent }) => (
                        <CategoryBlock
                          key={type}
                          type={type}
                          label={label}
                          accent={accent}
                          items={candidate.timeline}
                        />
                      ))}
                    </div>
                  </Card>
                ) : (
                  <Card>
                    <p className="text-sm text-neutral-400">Nenhum evento registrado na linha do tempo.</p>
                  </Card>
                )}
              </main>
            </div>
          )}

          {/* ── PROPOSTAS TAB ── */}
          {activeTab === 'propostas' && (
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Propostas e Plataforma</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Propostas identificadas com base em declarações públicas, programas partidários e entrevistas.
                  O nível de detalhe indica o grau de especificidade apresentado pelo candidato.
                </p>
              </div>

              {/* Detail level legend */}
              <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs text-neutral-500">
                <span className="font-semibold text-neutral-400 mr-1">Legenda:</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Alto detalhamento</span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-blue-300">Médio detalhamento</span>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-amber-300">Baixo detalhamento</span>
                <span className="rounded-full border border-neutral-500/30 bg-neutral-500/10 px-2 py-0.5 text-neutral-400">Apenas slogan</span>
              </div>

              {proposals.length === 0 ? (
                <Card>
                  <p className="text-sm text-neutral-400">Nenhuma proposta mapeada para este candidato.</p>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {proposals.map((proposal, i) => (
                    <ProposalCard key={i} proposal={proposal} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── SEÇÕES MODULARES TAB ── */}
          {activeTab === 'secoes' && (
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Partido & Contexto</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Informações sobre o histórico partidário, escândalos associados e contexto político mais amplo.
                </p>
              </div>

              {Object.entries(sections).map(([key, items]) => {
                const sectionMeta = SECTION_TYPES[key];
                if (!items?.length) return null;
                return (
                  <SectionRenderer
                    key={key}
                    title={sectionMeta?.title ?? key}
                    description={sectionMeta?.description}
                    items={items}
                  />
                );
              })}
            </div>
          )}

          {/* ── FONTES TAB ── */}
          {activeTab === 'fontes' && (
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Fontes e Documentos</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Referências utilizadas na construção deste dossiê, ordenadas por tipo e relevância.
                </p>
              </div>

              <LegalNotice />

              {candidate.sourceLinks?.length > 0 ? (
                <Card>
                  <SourcesList sources={candidate.sourceLinks} />
                </Card>
              ) : (
                <Card>
                  <p className="text-sm text-neutral-400">Nenhuma fonte catalogada para este candidato.</p>
                </Card>
              )}
            </div>
          )}

        </Container>
      </motion.div>
    </motion.div>
  );
}

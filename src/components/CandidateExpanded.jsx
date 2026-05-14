import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, FileText, Scale, Newspaper, Lightbulb, BookOpen,
  AlertTriangle, Users, ChevronDown, ChevronUp, Clock,
  Building2, Briefcase, GitCompare,
} from 'lucide-react';
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
import TrajectorySection from './dossier/TrajectorySection';
import { modularCandidates } from '../data/candidates/index';
import { SECTION_TYPES } from '../constants/sectionTypes';

const CATEGORIES = [
  { type: 'suspeita', label: 'Suspeitas', accent: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5' },
  { type: 'fato', label: 'Fatos Concretos', accent: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
  { type: 'curiosidade', label: 'Casos Curiosos', accent: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5' },
  { type: 'ligação', label: 'Ligações (Entorno)', accent: 'text-neutral-400', border: 'border-white/10', bg: 'bg-white/[0.02]' },
];

const TABS = [
  { id: 'dossie', label: 'Dossiê', icon: BookOpen },
  { id: 'trajetoria', label: 'Trajetória', icon: Clock },
  { id: 'propostas', label: 'Propostas', icon: Lightbulb },
  { id: 'secoes', label: 'Partido & Contexto', icon: AlertTriangle },
  { id: 'fontes', label: 'Fontes', icon: FileText },
];

function CategoryBlock({ type, label, accent, border, bg, items }) {
  const [expanded, setExpanded] = useState(true);
  const filtered = items.filter((item) => item.type === type);
  if (!filtered.length) return null;

  return (
    <div className={`rounded-2xl border ${border} ${bg} overflow-hidden`}>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 group"
      >
        <h4 className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>
          {label}
          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-white/60">
            {filtered.length}
          </span>
        </h4>
        {expanded
          ? <ChevronUp size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
          : <ChevronDown size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
        }
      </button>
      {expanded && (
        <div className="px-5 pb-5">
          <Timeline items={filtered} />
        </div>
      )}
    </div>
  );
}

function TabContent({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default function CandidateExpanded({ candidate, onClose }) {
  const [activeTab, setActiveTab] = useState('dossie');

  // Enrich with modular data if available
  const modular = modularCandidates.find((m) => m.slug === candidate.slug);
  const proposals = modular?.proposals ?? [];
  const sections = modular?.sections ?? {};
  const ideology = modular?.profile?.ideology ?? null;
  const trajectory = modular?.trajectory ?? null;

  const hasSections = Object.values(sections).some((arr) => arr?.length > 0);
  const hasProposals = proposals.length > 0;
  const hasTrajectory = trajectory && Object.values(trajectory).some((arr) => arr?.length > 0);

  const availableTabs = TABS.filter((tab) => {
    if (tab.id === 'propostas') return hasProposals;
    if (tab.id === 'secoes') return hasSections;
    if (tab.id === 'trajetoria') return hasTrajectory;
    return true;
  });

  // Count timeline items by type
  const suspeitasCount = candidate.timeline?.filter((t) => t.type === 'suspeita').length ?? 0;
  const fatosCount = candidate.timeline?.filter((t) => t.type === 'fato').length ?? 0;

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
        <div className="relative min-h-[56vh] overflow-hidden border-b border-white/10">
          <img
            src={candidate.image}
            alt={candidate.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'grayscale(0.7) brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/60 to-black/30" />

          {/* Back button */}
          <button
            onClick={onClose}
            className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-neutral-950/80 text-white backdrop-blur transition hover:bg-white/10"
            aria-label="Voltar"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>

          <Container className="relative flex min-h-[56vh] flex-col justify-end pb-8 pt-24">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {candidate.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {/* Party + ideology */}
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-300">{candidate.party}</p>
              {ideology && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-neutral-400 backdrop-blur">
                  {ideology}
                </span>
              )}
            </div>

            {/* Name */}
            <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {candidate.name}
            </h2>

            {/* Role */}
            <p className="mt-1 text-sm text-neutral-400">{candidate.role}</p>

            {/* Summary */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              {candidate.summary}
            </p>

            {/* Quick stats pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {suspeitasCount > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  <AlertTriangle size={11} />
                  {suspeitasCount} suspeita{suspeitasCount > 1 ? 's' : ''}
                </span>
              )}
              {fatosCount > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  <FileText size={11} />
                  {fatosCount} fato{fatosCount > 1 ? 's' : ''} documentado{fatosCount > 1 ? 's' : ''}
                </span>
              )}
              {hasProposals && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <Lightbulb size={11} />
                  {proposals.length} proposta{proposals.length > 1 ? 's' : ''} mapeada{proposals.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
          </Container>
        </div>

        {/* ── Stats bar ── */}
        <div className="border-b border-white/10 bg-neutral-900/50 backdrop-blur">
          <Container className="flex flex-wrap gap-6 py-3">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <FileText size={14} className="text-neutral-500" />
              <span><strong className="text-white">{candidate.cases}</strong> casos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Newspaper size={14} className="text-neutral-500" />
              <span><strong className="text-white">{candidate.sources}</strong> fontes</span>
            </div>
            {hasProposals && (
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Lightbulb size={14} className="text-neutral-500" />
                <span><strong className="text-white">{proposals.length}</strong> propostas</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-neutral-400 ml-auto">
              <Scale size={14} className="text-neutral-500" />
              <span className="text-neutral-300">{candidate.riskLevel}</span>
            </div>
          </Container>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <Container>
            <nav className="flex gap-1 overflow-x-auto py-2 scrollbar-none" aria-label="Seções do dossiê">
              {availableTabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === id
                      ? 'bg-white text-neutral-950 shadow-sm'
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
                  {id === 'dossie' && candidate.timeline?.length > 0 && (
                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                      activeTab === id ? 'bg-neutral-950/20 text-neutral-800' : 'bg-white/10 text-neutral-400'
                    }`}>
                      {candidate.timeline.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </Container>
        </div>

        {/* ── Tab Content ── */}
        <Container className="py-10 lg:py-14">
          <AnimatePresence mode="wait">

            {/* ── DOSSIÊ TAB ── */}
            {activeTab === 'dossie' && (
              <TabContent key="dossie">
                <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                  {/* Sidebar */}
                  <aside className="space-y-4">
                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Casos</p>
                        <p className="text-2xl font-bold text-white">{candidate.cases}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Fontes</p>
                        <p className="text-2xl font-bold text-white">{candidate.sources}</p>
                      </div>
                    </div>

                    {/* Risk level */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Classificação</p>
                      <div className="flex items-center gap-2">
                        <Scale size={14} className="text-neutral-400 shrink-0" />
                        <p className="text-sm font-medium text-white">{candidate.riskLevel}</p>
                      </div>
                    </div>

                    {/* Related people */}
                    {candidate.relatedPeople?.length > 0 && (
                      <Card>
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={14} className="text-neutral-400" />
                          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                            Pessoas relacionadas
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {candidate.relatedPeople.map((person) => (
                            <span
                              key={person}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                            >
                              {person}
                            </span>
                          ))}
                        </div>
                      </Card>
                    )}

                    {/* Related companies */}
                    {candidate.relatedCompanies?.length > 0 && (
                      <Card>
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 size={14} className="text-neutral-400" />
                          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                            Empresas / Órgãos
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {candidate.relatedCompanies.map((company) => (
                            <span
                              key={company}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </Card>
                    )}

                    {/* Related cases */}
                    {candidate.relatedCases?.length > 0 && (
                      <Card>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase size={14} className="text-neutral-400" />
                          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                            Casos / Operações
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {candidate.relatedCases.map((c) => (
                            <span
                              key={c}
                              className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-300"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </Card>
                    )}

                    <EditorialNotice note={candidate.editorialNote} />
                  </aside>

                  {/* Main content */}
                  <main className="space-y-4">
                    {candidate.timeline?.length > 0 ? (
                      <>
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-white">Linha do tempo</h3>
                          <p className="mt-1 text-sm text-neutral-500">
                            {candidate.timeline.length} evento{candidate.timeline.length > 1 ? 's' : ''} registrado{candidate.timeline.length > 1 ? 's' : ''}
                          </p>
                        </div>
                        {CATEGORIES.map(({ type, label, accent, border, bg }) => (
                          <CategoryBlock
                            key={type}
                            type={type}
                            label={label}
                            accent={accent}
                            border={border}
                            bg={bg}
                            items={candidate.timeline}
                          />
                        ))}
                      </>
                    ) : (
                      <Card>
                        <p className="text-sm text-neutral-400">Nenhum evento registrado na linha do tempo.</p>
                      </Card>
                    )}
                  </main>
                </div>
              </TabContent>
            )}

            {/* ── TRAJETÓRIA TAB ── */}
            {activeTab === 'trajetoria' && (
              <TabContent key="trajetoria">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Trajetória Política</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Cargos exercidos, posições marcantes, investigações, mudanças de discurso e alianças políticas ao longo da carreira.
                  </p>
                </div>
                <TrajectorySection trajectory={trajectory} />
              </TabContent>
            )}

            {/* ── PROPOSTAS TAB ── */}
            {activeTab === 'propostas' && (
              <TabContent key="propostas">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Propostas e Plataforma</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Propostas identificadas com base em declarações públicas, programas partidários e entrevistas.
                    O nível de detalhe indica o grau de especificidade apresentado pelo candidato.
                  </p>
                </div>

                {/* Detail level legend */}
                <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs text-neutral-500">
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
              </TabContent>
            )}

            {/* ── SEÇÕES MODULARES TAB ── */}
            {activeTab === 'secoes' && (
              <TabContent key="secoes">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Partido & Contexto</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Informações sobre o histórico partidário, escândalos associados e contexto político mais amplo.
                  </p>
                </div>

                <div className="space-y-6">
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
              </TabContent>
            )}

            {/* ── FONTES TAB ── */}
            {activeTab === 'fontes' && (
              <TabContent key="fontes">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Fontes e Documentos</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Referências utilizadas na construção deste dossiê, ordenadas por tipo e relevância.
                  </p>
                </div>

                <LegalNotice />

                {candidate.sourceLinks?.length > 0 ? (
                  <Card className="mt-6">
                    <SourcesList sources={candidate.sourceLinks} />
                  </Card>
                ) : (
                  <Card className="mt-6">
                    <p className="text-sm text-neutral-400">Nenhuma fonte catalogada para este candidato.</p>
                  </Card>
                )}
              </TabContent>
            )}

          </AnimatePresence>
        </Container>
      </motion.div>
    </motion.div>
  );
}

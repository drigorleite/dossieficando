import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, FileText, Scale, Newspaper, Lightbulb, BookOpen,
  AlertTriangle, Users, ChevronDown, ChevronUp, Clock,
  Building2, Briefcase, GitCompare, CheckSquare, TrendingUp,
  ShieldAlert, Vote, BarChart2, Compass, Network, UserCheck,
  Zap, RotateCcw, DollarSign, Star,
} from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Card from './ui/Card';
import InfoCard from './InfoCard';
import Timeline from './Timeline';
import SourcesList from './SourcesList';
import EditorialNotice from './EditorialNotice';
import LegalNotice from './dossier/LegalNotice';
import ProposalCard from './dossier/ProposalCard';
import SectionRenderer from './dossier/SectionRenderer';
import TrajectorySection from './dossier/TrajectorySection';
import PromisesVsReality from './features/PromisesVsReality';
import PositionShifts from './features/PositionShifts';
import TrustIndex from './features/TrustIndex';
import InteractiveTimeline from './features/InteractiveTimeline';
import InvestigationRadar from './features/InvestigationRadar';
import VotingHistory from './features/VotingHistory';
import PoliticianInNumbers from './features/PoliticianInNumbers';
import IdeologyProfile from './features/IdeologyProfile';
import AllianceMap from './features/AllianceMap';
import WhoAppointedWhom from './features/WhoAppointedWhom';
import HowItAffectsYou from './features/HowItAffectsYou';
import WhatHappenedAfter from './features/WhatHappenedAfter';
import EconomicExplainer from './features/EconomicExplainer';
import PartyCorruptionHistory from './features/PartyCorruptionHistory';
import { modularCandidates } from '../data/candidates/index';
import { SECTION_TYPES } from '../constants/sectionTypes';

const CATEGORIES = [
  { type: 'suspeita', label: 'Suspeitas', accent: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5' },
  { type: 'fato', label: 'Fatos Concretos', accent: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
  { type: 'curiosidade', label: 'Casos Curiosos', accent: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5' },
  { type: 'ligação', label: 'Ligações (Entorno)', accent: 'text-neutral-400', border: 'border-white/10', bg: 'bg-white/[0.02]' },
];

// Tab groups for better organization
const TAB_GROUPS = [
  {
    label: 'Dossiê',
    tabs: [
      { id: 'dossie', label: 'Linha do Tempo', icon: BookOpen, always: true },
      { id: 'trajetoria', label: 'Trajetória', icon: Clock, requires: 'trajectory' },
      { id: 'timeline_interativa', label: 'Cronologia', icon: TrendingUp, requires: 'interactiveTimeline' },
    ],
  },
  {
    label: 'Análise',
    tabs: [
      { id: 'propostas', label: 'Propostas', icon: Lightbulb, requires: 'proposals' },
      { id: 'promessas', label: 'Promessas vs Realidade', icon: CheckSquare, requires: 'promises' },
      { id: 'mudancas', label: 'Mudou de Posição?', icon: RotateCcw, requires: 'positionShifts' },
      { id: 'votacoes', label: 'Votações', icon: Vote, requires: 'votingHistory' },
    ],
  },
  {
    label: 'Investigações',
    tabs: [
      { id: 'radar', label: 'Radar de Investigações', icon: ShieldAlert, requires: 'investigationRadar' },
      { id: 'secoes', label: 'Partido & Contexto', icon: AlertTriangle, requires: 'sections' },
      { id: 'corrupcao', label: 'Histórico Partidário', icon: Briefcase, requires: 'corruptionHistory' },
    ],
  },
  {
    label: 'Perfil',
    tabs: [
      { id: 'numeros', label: 'Político em Números', icon: BarChart2, requires: 'politicianInNumbers' },
      { id: 'ideologia', label: 'Perfil Ideológico', icon: Compass, requires: 'ideologyProfile' },
      { id: 'aliancas', label: 'Mapa de Alianças', icon: Network, requires: 'allianceMap' },
      { id: 'indicacoes', label: 'Quem Indicou Quem', icon: UserCheck, requires: 'appointments' },
      { id: 'confiabilidade', label: 'Índice de Confiabilidade', icon: Star, requires: 'trustIndex' },
    ],
  },
  {
    label: 'Impacto',
    tabs: [
      { id: 'impacto', label: 'Como Afeta Você', icon: Zap, requires: 'impacts' },
      { id: 'depois', label: 'O que Aconteceu Depois', icon: GitCompare, requires: 'afterStories' },
      { id: 'economico', label: 'Explicador Econômico', icon: DollarSign, requires: 'economicTerms' },
    ],
  },
  {
    label: 'Fontes',
    tabs: [
      { id: 'fontes', label: 'Fontes', icon: FileText, always: true },
    ],
  },
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

function TabGroupNav({ groups, activeTab, onTabChange }) {
  // Flatten all visible tabs with group separators
  const allTabs = [];
  groups.forEach((group, gi) => {
    const visibleTabs = group.tabs.filter((t) => t._visible);
    if (!visibleTabs.length) return;
    if (gi > 0 && allTabs.length > 0) {
      allTabs.push({ separator: true, key: `sep-${gi}` });
    }
    visibleTabs.forEach((tab) => allTabs.push({ ...tab, groupLabel: group.label }));
  });

  return (
    <div className="flex items-center gap-0.5">
      {allTabs.map((item) => {
        if (item.separator) {
          return <span key={item.key} className="mx-1 h-4 w-px bg-white/10 shrink-0" />;
        }
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
              activeTab === item.id
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={13} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
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
  const trajectory = modular?.trajectory ?? null;
  const promises = modular?.promises ?? [];
  const positionShifts = modular?.positionShifts ?? [];
  const trustIndex = modular?.trustIndex ?? null;
  const interactiveTimeline = modular?.interactiveTimeline ?? [];
  const investigationRadar = modular?.investigationRadar ?? [];
  const votingHistory = modular?.votingHistory ?? [];
  const politicianInNumbers = modular?.politicianInNumbers ?? null;
  const ideologyProfile = modular?.ideologyProfile ?? null;
  const allianceMap = modular?.allianceMap ?? [];
  const appointments = modular?.appointments ?? [];
  const impacts = modular?.impacts ?? [];
  const afterStories = modular?.afterStories ?? [];
  const corruptionHistory = modular?.corruptionHistory ?? [];
  const economicTerms = modular?.economicTerms ?? [];

  const hasSections = Object.values(sections).some((arr) => arr?.length > 0);
  const hasProposals = proposals.length > 0;
  const hasTrajectory = trajectory && Object.values(trajectory).some((arr) => arr?.length > 0);

  // Mark which tabs are visible
  const processedGroups = TAB_GROUPS.map((group) => ({
    ...group,
    tabs: group.tabs.map((tab) => ({
      ...tab,
      _visible:
        tab.always ||
        (tab.requires === 'proposals' && hasProposals) ||
        (tab.requires === 'trajectory' && hasTrajectory) ||
        (tab.requires === 'sections' && hasSections) ||
        (tab.requires === 'interactiveTimeline' && interactiveTimeline.length > 0) ||
        (tab.requires === 'promises' && promises.length > 0) ||
        (tab.requires === 'positionShifts' && positionShifts.length > 0) ||
        (tab.requires === 'trustIndex' && trustIndex !== null) ||
        (tab.requires === 'investigationRadar' && investigationRadar.length > 0) ||
        (tab.requires === 'votingHistory' && votingHistory.length > 0) ||
        (tab.requires === 'politicianInNumbers' && politicianInNumbers !== null) ||
        (tab.requires === 'ideologyProfile' && ideologyProfile !== null) ||
        (tab.requires === 'allianceMap' && allianceMap.length > 0) ||
        (tab.requires === 'appointments' && appointments.length > 0) ||
        (tab.requires === 'impacts' && impacts.length > 0) ||
        (tab.requires === 'afterStories' && afterStories.length > 0) ||
        (tab.requires === 'corruptionHistory' && corruptionHistory.length > 0) ||
        (tab.requires === 'economicTerms' && economicTerms.length > 0),
    })),
  }));

  // Count timeline items by type
  const suspeitasCount = candidate.timeline?.filter((t) => t.type === 'suspeita').length ?? 0;
  const fatosCount = candidate.timeline?.filter((t) => t.type === 'fato').length ?? 0;

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto text-white"
      style={{ background: '#0d0d0f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div layoutId={`candidate-${candidate.slug}`} className="min-h-screen" style={{ background: '#0d0d0f' }}>

        {/* ── Hero / Header ── */}
        <div className="relative min-h-[56vh] overflow-hidden border-b border-white/10">
          <img
            src={candidate.image}
            alt={candidate.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'grayscale(0.7) brightness(0.6)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d0d0f 0%, rgba(13,13,15,0.65) 40%, rgba(0,0,0,0.25) 100%)' }} />

          {/* Back button */}
          <button
            onClick={onClose}
            className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/20"
            style={{ background: 'rgba(13,13,15,0.80)', boxShadow: '0 4px 16px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset' }}
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
              {promises.length > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  <CheckSquare size={11} />
                  {promises.length} promessa{promises.length > 1 ? 's' : ''} auditada{promises.length > 1 ? 's' : ''}
                </span>
              )}
              {trustIndex && (
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                  trustIndex.score >= 60
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : trustIndex.score >= 40
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-300'
                    : 'border-red-500/30 bg-red-500/10 text-red-300'
                }`}>
                  <Star size={11} />
                  Confiabilidade: {trustIndex.score}/100
                </span>
              )}
            </div>
          </Container>
        </div>

        {/* ── Stats bar ── */}
        <div className="border-b border-white/8 backdrop-blur-md" style={{ background: 'rgba(18,18,22,0.70)' }}>
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
            {promises.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <CheckSquare size={14} className="text-neutral-500" />
                <span><strong className="text-white">{promises.length}</strong> promessas</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-neutral-400 ml-auto">
              <Scale size={14} className="text-neutral-500" />
              <span className="text-neutral-300">{candidate.riskLevel}</span>
            </div>
          </Container>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="sticky top-0 z-30 border-b border-white/8 backdrop-blur-xl" style={{ background: 'rgba(13,13,15,0.92)', boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}>
          <Container>
            <nav className="overflow-x-auto py-2 scrollbar-none" aria-label="Seções do dossiê">
              <TabGroupNav
                groups={processedGroups}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
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
                      <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset' }}>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Casos</p>
                        <p className="text-2xl font-bold text-white">{candidate.cases}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset' }}>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Fontes</p>
                        <p className="text-2xl font-bold text-white">{candidate.sources}</p>
                      </div>
                    </div>

                    {/* Risk level */}
                    <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset' }}>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Classificação</p>
                      <div className="flex items-center gap-2">
                        <Scale size={14} className="text-neutral-400 shrink-0" />
                        <p className="text-sm font-medium text-white">{candidate.riskLevel}</p>
                      </div>
                    </div>

                    {/* Trust index mini */}
                    {trustIndex && (
                      <div className={`rounded-2xl border p-4 ${
                        trustIndex.score >= 60 ? 'border-emerald-500/20 bg-emerald-500/5' :
                        trustIndex.score >= 40 ? 'border-amber-500/20 bg-amber-500/5' :
                        'border-red-500/20 bg-red-500/5'
                      }`}>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Índice de Confiabilidade</p>
                        <div className="flex items-end gap-2">
                          <p className={`text-3xl font-bold ${
                            trustIndex.score >= 60 ? 'text-emerald-400' :
                            trustIndex.score >= 40 ? 'text-amber-400' : 'text-red-400'
                          }`}>{trustIndex.score}</p>
                          <p className="text-sm text-neutral-500 mb-1">/100</p>
                        </div>
                        <button
                          onClick={() => setActiveTab('confiabilidade')}
                          className="mt-2 text-xs text-neutral-400 hover:text-white transition underline underline-offset-2"
                        >
                          Ver metodologia →
                        </button>
                      </div>
                    )}

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

            {/* ── CRONOLOGIA INTERATIVA TAB ── */}
            {activeTab === 'timeline_interativa' && (
              <TabContent key="timeline_interativa">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Cronologia Interativa</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Investigações, eleições, alianças, operações da PF, votações e decisões judiciais — filtráveis por tipo e período.
                  </p>
                </div>
                <InteractiveTimeline events={interactiveTimeline} />
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

            {/* ── PROMESSAS VS REALIDADE TAB ── */}
            {activeTab === 'promessas' && (
              <TabContent key="promessas">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Promessas vs Realidade</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Auditoria das promessas feitas pelo candidato, com resultado verificado, evidências e cronologia.
                  </p>
                </div>
                <PromisesVsReality promises={promises} />
              </TabContent>
            )}

            {/* ── MUDOU DE POSIÇÃO TAB ── */}
            {activeTab === 'mudancas' && (
              <TabContent key="mudancas">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Mudou de Posição?</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Comparativo de declarações e posições ao longo do tempo. Mostra incoerências e evoluções sem editorializar.
                  </p>
                </div>
                <PositionShifts shifts={positionShifts} />
              </TabContent>
            )}

            {/* ── VOTAÇÕES TAB ── */}
            {activeTab === 'votacoes' && (
              <TabContent key="votacoes">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Histórico de Votações</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Como o candidato votou em pautas importantes: previdência, impostos, segurança, armas, gastos públicos.
                    Inclui análise de coerência entre voto e discurso.
                  </p>
                </div>
                <VotingHistory votes={votingHistory} />
              </TabContent>
            )}

            {/* ── RADAR DE INVESTIGAÇÕES TAB ── */}
            {activeTab === 'radar' && (
              <TabContent key="radar">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Radar de Investigações</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Investigações separadas por órgão (PF, STF, TSE, MPF, CGU), com status, cronologia e documentos.
                  </p>
                </div>
                <InvestigationRadar investigations={investigationRadar} />
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

            {/* ── HISTÓRICO DE CORRUPÇÃO PARTIDÁRIA TAB ── */}
            {activeTab === 'corrupcao' && (
              <TabContent key="corrupcao">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Histórico de Corrupção Partidária</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Separado por indivíduo, partido, governo e aliados. Escândalos do partido não implicam automaticamente o candidato.
                  </p>
                </div>
                <PartyCorruptionHistory corruptionHistory={corruptionHistory} />
              </TabContent>
            )}

            {/* ── POLÍTICO EM NÚMEROS TAB ── */}
            {activeTab === 'numeros' && (
              <TabContent key="numeros">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Político em Números</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Indicadores objetivos: anos no poder, indicadores econômicos durante mandatos, presença em votações.
                  </p>
                </div>
                <PoliticianInNumbers numbers={politicianInNumbers} />
              </TabContent>
            )}

            {/* ── PERFIL IDEOLÓGICO TAB ── */}
            {activeTab === 'ideologia' && (
              <TabContent key="ideologia">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Perfil Ideológico</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Posicionamento em 6 eixos: economia, costumes, Estado, segurança, privatização e impostos.
                    Baseado em votações e declarações públicas verificadas.
                  </p>
                </div>
                <IdeologyProfile ideologyProfile={ideologyProfile} />
              </TabContent>
            )}

            {/* ── MAPA DE ALIANÇAS TAB ── */}
            {activeTab === 'aliancas' && (
              <TabContent key="aliancas">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Mapa de Alianças Políticas</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Partidos aliados, ex-aliados, rompimentos, financiadores e grupos de apoio.
                  </p>
                </div>
                <AllianceMap alliances={allianceMap} />
              </TabContent>
            )}

            {/* ── QUEM INDICOU QUEM TAB ── */}
            {activeTab === 'indicacoes' && (
              <TabContent key="indicacoes">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Quem Indicou Quem?</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Ministros, presidentes de estatais, diretores e assessores indicados pelo candidato ou por aliados.
                    Muita gente governa por indicação indireta.
                  </p>
                </div>
                <WhoAppointedWhom appointments={appointments} />
              </TabContent>
            )}

            {/* ── ÍNDICE DE CONFIABILIDADE TAB ── */}
            {activeTab === 'confiabilidade' && (
              <TabContent key="confiabilidade">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Índice de Confiabilidade Política</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Pontuação baseada em 6 métricas verificáveis. Metodologia transparente e auditável.
                    Este índice é editorial — não substitui julgamento próprio.
                  </p>
                </div>
                <TrustIndex trustIndex={trustIndex} />
              </TabContent>
            )}

            {/* ── COMO AFETA VOCÊ TAB ── */}
            {activeTab === 'impacto' && (
              <TabContent key="impacto">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Como Isso Afeta Você?</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Impacto das propostas por perfil: MEI, CLT, empresário, investidor, importação, aluguel, carro, mercado.
                  </p>
                </div>
                <HowItAffectsYou impacts={impacts} />
              </TabContent>
            )}

            {/* ── O QUE ACONTECEU DEPOIS TAB ── */}
            {activeTab === 'depois' && (
              <TabContent key="depois">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">O que Aconteceu Depois?</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Anúncios, promessas e escândalos — e o que realmente aconteceu no final.
                    O diferencial que a internet política raramente mostra.
                  </p>
                </div>
                <WhatHappenedAfter afterStories={afterStories} />
              </TabContent>
            )}

            {/* ── EXPLICADOR ECONÔMICO TAB ── */}
            {activeTab === 'economico' && (
              <TabContent key="economico">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Explicador Econômico</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Termos econômicos relevantes para entender as propostas deste candidato, em linguagem simples.
                  </p>
                </div>
                <EconomicExplainer relevantTerms={economicTerms} />
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

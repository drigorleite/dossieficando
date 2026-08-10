import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModalBehavior } from '../hooks/useModalBehavior';
import {
  X,
  GitCompare,
  FileText,
  Newspaper,
  Scale,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MinusCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Building2,
} from 'lucide-react';
import Container from './ui/Container';
import { modularCandidates } from '../data/candidates/index';

// ── helpers ──────────────────────────────────────────────────────────────────

function riskColor(riskLevel = '') {
  const r = riskLevel.toLowerCase();
  if (r.includes('condenação') || r.includes('múltiplas')) return 'text-red-400';
  if (r.includes('suspeita') || r.includes('inquérito') || r.includes('investigação')) return 'text-amber-400';
  if (r.includes('sem processos') || r.includes('sem acusações')) return 'text-emerald-400';
  return 'text-neutral-400';
}

function riskIcon(riskLevel = '') {
  const r = riskLevel.toLowerCase();
  if (r.includes('condenação') || r.includes('múltiplas')) return <XCircle size={14} className="text-red-400" />;
  if (r.includes('suspeita') || r.includes('inquérito') || r.includes('investigação')) return <MinusCircle size={14} className="text-amber-400" />;
  return <CheckCircle size={14} className="text-emerald-400" />;
}

// ── sub-components ────────────────────────────────────────────────────────────

function CandidateSelector({ label, candidates, value, onChange, exclude }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{label}</label>
      <select
        value={value?.slug ?? ''}
        onChange={(e) => {
          const found = candidates.find((c) => c.slug === e.target.value);
          onChange(found ?? null);
        }}
        className="w-full rounded-2xl border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-white/25 focus:ring-1 focus:ring-white/20 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <option value="">— Selecionar candidato —</option>
        {candidates
          .filter((c) => !exclude || c.slug !== exclude.slug)
          .map((c) => (
            <option key={c.slug} value={c.slug} className="bg-neutral-900">
              {c.name} ({c.party})
            </option>
          ))}
      </select>
    </div>
  );
}

function StatRow({ label, a, b }) {
  const numA = Number(a);
  const numB = Number(b);
  const isNum = !isNaN(numA) && !isNaN(numB);
  const aWins = isNum && numA > numB;
  const bWins = isNum && numB > numA;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 py-2.5 border-b border-white/5 last:border-0">
      <div className={`text-right text-sm font-medium ${aWins ? 'text-amber-300' : 'text-white'}`}>{a}</div>
      <div className="text-center text-[10px] uppercase tracking-widest text-neutral-600 w-20 shrink-0">{label}</div>
      <div className={`text-left text-sm font-medium ${bWins ? 'text-amber-300' : 'text-white'}`}>{b}</div>
    </div>
  );
}

function ProposalComparison({ proposalsA, proposalsB, nameA, nameB }) {
  const [expanded, setExpanded] = useState(true);

  // Collect unique categories
  const categories = useMemo(() => {
    const cats = new Set([
      ...(proposalsA?.map((p) => p.category) ?? []),
      ...(proposalsB?.map((p) => p.category) ?? []),
    ]);
    return Array.from(cats).filter(Boolean);
  }, [proposalsA, proposalsB]);

  if (!categories.length) return null;

  return (
    <div className="mt-6">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between mb-4 group"
      >
        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <Lightbulb size={13} />
          Comparação de Propostas
        </h4>
        {expanded
          ? <ChevronUp size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
          : <ChevronDown size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
        }
      </button>

      {expanded && (
        <div className="space-y-4">
          {categories.map((cat) => {
            const pA = proposalsA?.filter((p) => p.category === cat) ?? [];
            const pB = proposalsB?.filter((p) => p.category === cat) ?? [];
            return (
              <div key={cat} className="rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="px-4 py-2 border-b border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">{cat}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  <div className="p-4 space-y-3">
                    {pA.length > 0 ? pA.map((p, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-white leading-snug">{p.title}</p>
                        {p.summary && <p className="mt-1 text-xs text-neutral-400 leading-relaxed line-clamp-3">{p.summary}</p>}
                      </div>
                    )) : (
                      <p className="text-xs text-neutral-600 italic">Sem proposta nesta categoria</p>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    {pB.length > 0 ? pB.map((p, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-white leading-snug">{p.title}</p>
                        {p.summary && <p className="mt-1 text-xs text-neutral-400 leading-relaxed line-clamp-3">{p.summary}</p>}
                      </div>
                    )) : (
                      <p className="text-xs text-neutral-600 italic">Sem proposta nesta categoria</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TimelineComparison({ timelineA, timelineB }) {
  const [expanded, setExpanded] = useState(false);

  const suspeitasA = timelineA?.filter((t) => t.type === 'suspeita' || t.type === 'fato') ?? [];
  const suspeitasB = timelineB?.filter((t) => t.type === 'suspeita' || t.type === 'fato') ?? [];

  if (!suspeitasA.length && !suspeitasB.length) return null;

  const typeColor = (type) => {
    if (type === 'suspeita') return 'text-amber-400 border-amber-500/20 bg-amber-500/10';
    if (type === 'fato') return 'text-blue-400 border-blue-500/20 bg-blue-500/10';
    return 'text-neutral-400 border-white/10 bg-white/5';
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between mb-4 group"
      >
        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          <AlertTriangle size={13} />
          Casos e Suspeitas
        </h4>
        {expanded
          ? <ChevronUp size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
          : <ChevronDown size={14} className="text-neutral-600 group-hover:text-neutral-400 transition" />
        }
      </button>

      {expanded && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            {suspeitasA.length > 0 ? suspeitasA.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-start gap-2">
                  {item.year && <span className="shrink-0 text-[10px] text-neutral-600 mt-0.5">{item.year}</span>}
                  <div>
                    <span className={`inline-block rounded-full border px-1.5 py-0.5 text-[10px] font-medium mb-1 ${typeColor(item.type)}`}>
                      {item.type}
                    </span>
                    <p className="text-xs font-semibold text-white leading-snug">{item.title}</p>
                    <p className="mt-1 text-xs text-neutral-400 leading-relaxed line-clamp-2">{item.text}</p>
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-xs text-neutral-600 italic p-3">Nenhum caso registrado</p>
            )}
          </div>
          <div className="space-y-3">
            {suspeitasB.length > 0 ? suspeitasB.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-start gap-2">
                  {item.year && <span className="shrink-0 text-[10px] text-neutral-600 mt-0.5">{item.year}</span>}
                  <div>
                    <span className={`inline-block rounded-full border px-1.5 py-0.5 text-[10px] font-medium mb-1 ${typeColor(item.type)}`}>
                      {item.type}
                    </span>
                    <p className="text-xs font-semibold text-white leading-snug">{item.title}</p>
                    <p className="mt-1 text-xs text-neutral-400 leading-relaxed line-clamp-2">{item.text}</p>
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-xs text-neutral-600 italic p-3">Nenhum caso registrado</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── main component ────────────────────────────────────────────────────────────

export default function CandidateComparison({ candidates, onClose, onOpenCandidate }) {
  const [candidateA, setCandidateA] = useState(null);
  const [candidateB, setCandidateB] = useState(null);
  const closeBtnRef = useRef(null);
  useModalBehavior(onClose, closeBtnRef);

  const modularA = candidateA ? modularCandidates.find((m) => m.slug === candidateA.slug) : null;
  const modularB = candidateB ? modularCandidates.find((m) => m.slug === candidateB.slug) : null;

  const proposalsA = modularA?.proposals ?? [];
  const proposalsB = modularB?.proposals ?? [];

  const canCompare = candidateA && candidateB;

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto text-white"
      style={{ background: 'rgba(13,13,15,0.96)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-white/8 backdrop-blur-xl" style={{ background: 'rgba(13,13,15,0.92)', boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}>
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/12 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <GitCompare size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Comparar Candidatos</h2>
              <p className="text-xs text-neutral-500">Selecione dois candidatos para comparar lado a lado</p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white/10 hover:text-white hover:border-white/20"
            aria-label="Fechar comparação (Esc)"
          >
            <X size={18} />
          </button>
        </Container>
      </div>

      <Container className="py-8">
        {/* Selector row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <CandidateSelector
            label="Candidato A"
            candidates={candidates}
            value={candidateA}
            onChange={setCandidateA}
            exclude={candidateB}
          />
          <CandidateSelector
            label="Candidato B"
            candidates={candidates}
            value={candidateB}
            onChange={setCandidateB}
            exclude={candidateA}
          />
        </div>

        {/* Candidate headers */}
        {canCompare && (
          <AnimatePresence>
            <motion.div
              key={`${candidateA.slug}-${candidateB.slug}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Photo + name row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { candidate: candidateA, modular: modularA, proposals: proposalsA },
                  { candidate: candidateB, modular: modularB, proposals: proposalsB },
                ].map(({ candidate, modular, proposals }, idx) => (
                  <div
                    key={candidate.slug}
                    className="relative overflow-hidden rounded-3xl border border-white/10"
                    style={{ background: 'rgba(20,20,26,0.95)', boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset' }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="h-full w-full object-cover grayscale"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,20,26,1) 0%, rgba(20,20,26,0.45) 50%, transparent 100%)' }} />
                      <div className="absolute bottom-3 left-4">
                        <span className="rounded border border-white/10 bg-white/10 px-2 py-0.5 text-xs font-medium text-neutral-300 backdrop-blur">
                          {candidate.party}
                        </span>
                      </div>
                      {idx === 0 && (
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">A</span>
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">B</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-white leading-tight">{candidate.name}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">{candidate.role}</p>
                      <div className="mt-3 flex items-center gap-1.5">
                        {riskIcon(candidate.riskLevel)}
                        <span className={`text-xs font-medium ${riskColor(candidate.riskLevel)}`}>
                          {candidate.riskLevel}
                        </span>
                      </div>
                      {proposals.length > 0 && (
                        <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                          <Lightbulb size={10} />
                          {proposals.length} proposta{proposals.length > 1 ? 's' : ''}
                        </div>
                      )}
                      <button
                        onClick={() => {
                          onClose();
                          onOpenCandidate(candidate);
                        }}
                        className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 py-1.5 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
                      >
                        Ver dossiê completo →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats comparison */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4 text-center">
                  Métricas Comparativas
                </h4>

                {/* Column labels */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mb-2">
                  <div className="text-right text-xs font-bold text-white truncate">{candidateA.name.split(' ')[0]}</div>
                  <div className="w-20" />
                  <div className="text-left text-xs font-bold text-white truncate">{candidateB.name.split(' ')[0]}</div>
                </div>

                <StatRow label="Casos" a={candidateA.cases} b={candidateB.cases} />
                <StatRow label="Fontes" a={candidateA.sources} b={candidateB.sources} />
                <StatRow label="Propostas" a={proposalsA.length} b={proposalsB.length} />
                <StatRow label="Partido" a={candidateA.party} b={candidateB.party} />
                <StatRow label="Cargo" a={candidateA.role} b={candidateB.role} />

                {/* Related people */}
                {(candidateA.relatedPeople?.length > 0 || candidateB.relatedPeople?.length > 0) && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 text-center mb-3">
                      <Users size={10} className="inline mr-1" />
                      Pessoas relacionadas
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-wrap gap-1 justify-end">
                        {candidateA.relatedPeople?.map((p) => (
                          <span key={p} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400">{p}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {candidateB.relatedPeople?.map((p) => (
                          <span key={p} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Related companies */}
                {(candidateA.relatedCompanies?.length > 0 || candidateB.relatedCompanies?.length > 0) && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 text-center mb-3">
                      <Building2 size={10} className="inline mr-1" />
                      Empresas / Órgãos
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-wrap gap-1 justify-end">
                        {candidateA.relatedCompanies?.map((c) => (
                          <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400">{c}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {candidateB.relatedCompanies?.map((c) => (
                          <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags comparison */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4 text-center">Tags / Temas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {candidateA.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {candidateB.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proposals comparison */}
              {(proposalsA.length > 0 || proposalsB.length > 0) && (
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 mb-6">
                  <ProposalComparison
                    proposalsA={proposalsA}
                    proposalsB={proposalsB}
                    nameA={candidateA.name}
                    nameB={candidateB.name}
                  />
                </div>
              )}

              {/* Timeline / cases comparison */}
              {(candidateA.timeline?.length > 0 || candidateB.timeline?.length > 0) && (
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <TimelineComparison
                    timelineA={candidateA.timeline}
                    timelineB={candidateB.timeline}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty state */}
        {!canCompare && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <GitCompare size={28} className="text-neutral-600" />
            </div>
            <p className="text-neutral-400 text-sm">Selecione dois candidatos acima para ver a comparação</p>
            <p className="mt-1 text-neutral-600 text-xs">Você pode comparar propostas, casos, fontes e trajetória</p>
          </div>
        )}
      </Container>
    </motion.div>
  );
}

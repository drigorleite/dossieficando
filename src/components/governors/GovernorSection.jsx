import React, { useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Info, Map, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GovernorCard from "./GovernorCard";
import GovernorExpanded from "./GovernorExpanded";

// Import all state data
import { spGovernorCandidates } from "../../data/governors/sp";
import { rjGovernorCandidates } from "../../data/governors/rj";
import { scGovernorCandidates } from "../../data/governors/sc";
import { mgGovernorCandidates } from "../../data/governors/mg";
import { msGovernorCandidates } from "../../data/governors/ms";
import { mtGovernorCandidates } from "../../data/governors/mt";
import { maGovernorCandidates } from "../../data/governors/ma";
import { amGovernorCandidates } from "../../data/governors/am";
import { paGovernorCandidates } from "../../data/governors/pa";
import { prGovernorCandidates } from "../../data/governors/pr";
import { peGovernorCandidates } from "../../data/governors/pe";

// Region groupings
const REGIONS = [
  {
    id: "sudeste",
    label: "Sudeste",
    color: "blue",
    states: [
      { id: "sp", label: "São Paulo", abbr: "SP", candidates: spGovernorCandidates },
      { id: "rj", label: "Rio de Janeiro", abbr: "RJ", candidates: rjGovernorCandidates },
      { id: "mg", label: "Minas Gerais", abbr: "MG", candidates: mgGovernorCandidates },
    ],
  },
  {
    id: "sul",
    label: "Sul",
    color: "emerald",
    states: [
      { id: "sc", label: "Santa Catarina", abbr: "SC", candidates: scGovernorCandidates },
      { id: "pr", label: "Paraná", abbr: "PR", candidates: prGovernorCandidates },
    ],
  },
  {
    id: "centro-oeste",
    label: "Centro-Oeste",
    color: "amber",
    states: [
      { id: "ms", label: "Mato Grosso do Sul", abbr: "MS", candidates: msGovernorCandidates },
      { id: "mt", label: "Mato Grosso", abbr: "MT", candidates: mtGovernorCandidates },
    ],
  },
  {
    id: "nordeste",
    label: "Nordeste",
    color: "orange",
    states: [
      { id: "ma", label: "Maranhão", abbr: "MA", candidates: maGovernorCandidates },
      { id: "pe", label: "Pernambuco", abbr: "PE", candidates: peGovernorCandidates },
    ],
  },
  {
    id: "norte",
    label: "Norte",
    color: "teal",
    states: [
      { id: "am", label: "Amazonas", abbr: "AM", candidates: amGovernorCandidates },
      { id: "pa", label: "Pará", abbr: "PA", candidates: paGovernorCandidates },
    ],
  },
];

const regionColorMap = {
  blue: { pill: "bg-blue-500/20 border-blue-500/40 text-blue-300", active: "bg-blue-500/30 border-blue-400/60 text-blue-200", dot: "bg-blue-400" },
  emerald: { pill: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300", active: "bg-emerald-500/30 border-emerald-400/60 text-emerald-200", dot: "bg-emerald-400" },
  amber: { pill: "bg-amber-500/20 border-amber-500/40 text-amber-300", active: "bg-amber-500/30 border-amber-400/60 text-amber-200", dot: "bg-amber-400" },
  orange: { pill: "bg-orange-500/20 border-orange-500/40 text-orange-300", active: "bg-orange-500/30 border-orange-400/60 text-orange-200", dot: "bg-orange-400" },
  teal: { pill: "bg-teal-500/20 border-teal-500/40 text-teal-300", active: "bg-teal-500/30 border-teal-400/60 text-teal-200", dot: "bg-teal-400" },
};

export default function GovernorSection() {
  const [selectedStateId, setSelectedStateId] = useState("sp");
  const [expandedRegions, setExpandedRegions] = useState({ sudeste: true, sul: false, "centro-oeste": false, nordeste: false, norte: false });
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // Find current state across all regions
  const allStates = REGIONS.flatMap((r) => r.states);
  const currentState = allStates.find((s) => s.id === selectedStateId);
  const candidates = currentState?.candidates || [];

  const totalCandidates = allStates.reduce((sum, s) => sum + (s.candidates?.length || 0), 0);
  const totalStates = allStates.length;

  function toggleRegion(regionId) {
    setExpandedRegions((prev) => ({ ...prev, [regionId]: !prev[regionId] }));
  }

  function selectState(stateId, regionId) {
    setSelectedStateId(stateId);
    // Auto-expand the region of the selected state
    setExpandedRegions((prev) => ({ ...prev, [regionId]: true }));
  }

  return (
    <section id="governadores" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            <MapPin size={12} />
            GOVERNADORES 2026
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Candidatos ao governo estadual
              </h2>
              <p className="text-zinc-400 mt-2 max-w-xl">
                Histórico administrativo, políticas, resultados e polêmicas dos pré-candidatos ao governo de cada estado.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Map size={12} />
                  <span><strong className="text-zinc-300">{totalStates}</strong> estados mapeados</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Users size={12} />
                  <span><strong className="text-zinc-300">{totalCandidates}</strong> pré-candidatos</span>
                </div>
              </div>
            </div>

            {/* Editorial note toggle */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-400 transition-colors self-start md:self-auto"
            >
              <Info size={12} />
              Critério editorial
              {showInfo ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 leading-relaxed max-w-2xl">
                  Para cada candidato, separamos: <strong className="text-zinc-300">fato</strong> (o que foi feito), <strong className="text-zinc-300">crítica</strong> (o que opositores e especialistas apontam), <strong className="text-zinc-300">defesa</strong> (o que o candidato ou governo responde) e <strong className="text-zinc-300">resultado</strong> classificado como positivo, negativo, misto ou inconclusivo. O Índice de Confiabilidade é calculado com 6 métricas ponderadas — metodologia completa disponível em cada dossiê.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main layout: sidebar nav + content */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left sidebar — region/state navigator */}
          <div className="lg:w-64 shrink-0">
            <div className="sticky top-4 space-y-2">
              <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-1 mb-3">Selecione o estado</p>
              {REGIONS.map((region) => {
                const colors = regionColorMap[region.color];
                const isExpanded = expandedRegions[region.id];
                const hasSelectedState = region.states.some((s) => s.id === selectedStateId);

                return (
                  <div key={region.id} className="rounded-xl border border-zinc-800 overflow-hidden">
                    {/* Region header */}
                    <button
                      onClick={() => toggleRegion(region.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold transition-colors ${
                        hasSelectedState
                          ? `${colors.pill} border-b border-zinc-700`
                          : "bg-zinc-900 text-zinc-400 hover:text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {hasSelectedState && <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />}
                        {region.label}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-500">{region.states.length}</span>
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </div>
                    </button>

                    {/* State list */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-zinc-950"
                        >
                          {region.states.map((state) => {
                            const isSelected = state.id === selectedStateId;
                            return (
                              <button
                                key={state.id}
                                onClick={() => selectState(state.id, region.id)}
                                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors border-b border-zinc-900 last:border-0 ${
                                  isSelected
                                    ? `${colors.active} font-semibold`
                                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? "bg-white/20" : "bg-zinc-800"}`}>
                                    {state.abbr}
                                  </span>
                                  <span className="text-xs">{state.label}</span>
                                </div>
                                <span className="text-[10px] text-zinc-600">{state.candidates?.length || 0}</span>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right content — candidates grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStateId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* State header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentState?.label}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{candidates.length} pré-candidatos mapeados</p>
                  </div>
                  <span className="text-3xl font-black text-zinc-700 font-mono">{currentState?.abbr}</span>
                </div>

                {/* Cards grid */}
                {candidates.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {candidates.map((candidate, i) => (
                      <motion.div
                        key={candidate.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <GovernorCard
                          candidate={candidate}
                          onClick={setSelectedCandidate}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <MapPin size={32} className="text-zinc-700 mb-3" />
                    <p className="text-zinc-500 text-sm">Dados em construção para este estado.</p>
                    <p className="text-zinc-600 text-xs mt-1">Contribuições via GitHub são bem-vindas.</p>
                  </div>
                )}

                {/* Comparative summary table — only when there are candidates */}
                {candidates.length > 1 && (
                  <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/80">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Candidato</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Partido</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Força principal</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Confiança</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map((c) => (
                          <tr
                            key={c.id}
                            className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedCandidate(c)}
                          >
                            <td className="py-3 px-4 font-medium text-zinc-200">{c.name}</td>
                            <td className="py-3 px-4 text-zinc-400 hidden md:table-cell">{c.party}</td>
                            <td className="py-3 px-4 text-zinc-400 hidden lg:table-cell text-xs">{c.electoralStrengths?.[0] || "—"}</td>
                            <td className="py-3 px-4">
                              {c.trustIndex ? (
                                <span className={`text-xs font-bold ${
                                  c.trustIndex.score >= 70 ? "text-emerald-400" :
                                  c.trustIndex.score >= 40 ? "text-amber-400" :
                                  "text-red-400"
                                }`}>{c.trustIndex.score}/100</span>
                              ) : "—"}
                            </td>
                            <td className="py-3 px-4 hidden md:table-cell">
                              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                                c.statusType === "clean" ? "bg-emerald-500/20 text-emerald-400" :
                                c.statusType === "investigating" ? "bg-amber-500/20 text-amber-400" :
                                "bg-red-500/20 text-red-400"
                              }`}>{c.status?.split("—")[0]?.trim() || c.statusType}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <GovernorExpanded
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </section>
  );
}

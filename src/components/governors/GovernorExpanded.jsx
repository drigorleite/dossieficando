import React, { useState, useEffect } from "react";
import {
  X,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Shield,
  TrendingUp,
  TrendingDown,
  Minus,
  ExternalLink,
  Building2,
  Users,
  FileText,
  Star,
  AlertCircle,
  BarChart2,
} from "lucide-react";
import TrustIndex from '../features/TrustIndex';

const TABS = [
  { id: "overview", label: "Visão Geral" },
  { id: "policies", label: "Políticas" },
  { id: "controversies", label: "Polêmicas" },
  { id: "trust", label: "Índice de Confiabilidade" },
  { id: "sources", label: "Fontes" },
];

const resultConfig = {
  POSITIVO: { color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", Icon: TrendingUp },
  NEGATIVO: { color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", Icon: TrendingDown },
  MISTO: { color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", Icon: Minus },
  INCONCLUSIVO: { color: "text-zinc-400", bg: "bg-zinc-500/10 border-zinc-500/20", Icon: AlertCircle },
  "A PESQUISAR": { color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", Icon: FileText },
};

function getResultConfig(result) {
  if (!result) return resultConfig["INCONCLUSIVO"];
  const key = Object.keys(resultConfig).find((k) => result.toUpperCase().startsWith(k));
  return resultConfig[key] || resultConfig["INCONCLUSIVO"];
}

const reliabilityConfig = {
  official: { label: "Fonte oficial", color: "text-blue-400", bg: "bg-blue-500/10" },
  press: { label: "Imprensa", color: "text-zinc-400", bg: "bg-zinc-500/10" },
  ngo: { label: "ONG / Sociedade civil", color: "text-purple-400", bg: "bg-purple-500/10" },
  academic: { label: "Acadêmico", color: "text-emerald-400", bg: "bg-emerald-500/10" },
};

export default function GovernorExpanded({ candidate, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{ background: 'rgba(0,0,0,0.75)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: 'rgba(15,15,18,0.96)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset' }}>
        {/* Header */}
        <div className="relative flex-shrink-0">
          {/* Background photo */}
          <div className="h-48 overflow-hidden" style={{ background: 'rgba(30,30,35,0.80)' }}>
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-full h-full object-cover object-top opacity-40"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(15,15,18,0.65) 60%, rgba(15,15,18,1) 100%)' }} />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-2xl border border-white/12 text-zinc-400 hover:text-white transition-all backdrop-blur-md"
            style={{ background: 'rgba(0,0,0,0.60)', boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}
          >
            <X size={18} />
          </button>

          {/* Candidate info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/20 flex-shrink-0 shadow-xl" style={{ background: 'rgba(40,40,48,0.80)' }}>
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold text-blue-300">
                  {candidate.party}
                </span>
                <span className="text-xs text-zinc-500">Candidato ao Gov. SP 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{candidate.name}</h2>
              <p className="text-sm text-zinc-400 flex items-center gap-1 mt-0.5">
                <Building2 size={12} />
                {candidate.role}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex-shrink-0 flex gap-1 px-6 pt-4 pb-0 border-b border-white/8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "text-white border-blue-400 bg-blue-500/8"
                  : "text-zinc-500 border-transparent hover:text-zinc-300 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Summary */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Perfil</h3>
                <p className="text-zinc-300 leading-relaxed">{candidate.summary}</p>
              </div>

              {/* Status */}
              <div className="p-4 rounded-2xl border border-white/10 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <p className="text-xs text-zinc-500 mb-1">Status eleitoral</p>
                <p className="text-sm text-zinc-200 font-medium">{candidate.status}</p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-emerald-500/15 backdrop-blur-sm" style={{ background: 'rgba(52,211,153,0.05)' }}>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                    <TrendingUp size={14} />
                    Pontos fortes eleitorais
                  </h4>
                  <ul className="space-y-1.5">
                    {candidate.electoralStrengths?.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle size={12} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-red-500/15 backdrop-blur-sm" style={{ background: 'rgba(239,68,68,0.05)' }}>
                  <h4 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <TrendingDown size={14} />
                    Pontos fracos eleitorais
                  </h4>
                  <ul className="space-y-1.5">
                    {candidate.electoralWeaknesses?.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <XCircle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Temas associados</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-sm text-zinc-300 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* POLICIES TAB */}
          {activeTab === "policies" && (
            <div className="space-y-4">
              {candidate.policies?.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                  <FileText size={32} className="mx-auto mb-3 opacity-40" />
                  <p>Políticas ainda não detalhadas neste levantamento.</p>
                </div>
              )}
              {candidate.policies?.map((policy, i) => {
                const cfg = getResultConfig(policy.result);
                const { Icon: ResultIcon } = cfg;
                return (
                  <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                    {/* Policy header */}
                    <div className="p-4 border-b border-zinc-800">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold text-white">{policy.title}</h4>
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium flex-shrink-0 ${cfg.bg} ${cfg.color}`}>
                          <ResultIcon size={10} />
                          {policy.result}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{policy.description}</p>
                      {policy.resultDetail && (
                        <p className="text-xs text-zinc-500 mt-2 italic">{policy.resultDetail}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                      {/* Arguments */}
                      {policy.arguments?.length > 0 && (
                        <div className="p-4">
                          <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Argumentos favoráveis</h5>
                          <ul className="space-y-1.5">
                            {policy.arguments.map((a, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-zinc-300">
                                <CheckCircle size={11} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Criticisms */}
                      {policy.criticisms?.length > 0 && (
                        <div className="p-4">
                          <h5 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Críticas</h5>
                          <ul className="space-y-1.5">
                            {policy.criticisms.map((c, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-zinc-300">
                                <XCircle size={11} className="text-red-500 mt-0.5 flex-shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Defense */}
                    {policy.defense && (
                      <div className="px-4 pb-4 pt-0">
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                          <p className="text-xs font-semibold text-emerald-400 mb-1">Resposta / Defesa</p>
                          <p className="text-xs text-zinc-300">{policy.defense}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* CONTROVERSIES TAB */}
          {activeTab === "controversies" && (
            <div className="space-y-4">
              {candidate.controversies?.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                  <Shield size={32} className="mx-auto mb-3 opacity-40" />
                  <p>Nenhuma polêmica relevante registrada neste levantamento.</p>
                </div>
              )}
              {candidate.controversies?.map((c, i) => (
                <div key={i} className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-white">{c.title}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          c.status === "ongoing"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-zinc-500/20 text-zinc-400"
                        }`}>
                          {c.status === "ongoing" ? "Em andamento" : "Histórico"}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">{c.description}</p>
                      {c.defense && (
                        <div className="mt-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                          <p className="text-xs font-semibold text-emerald-400 mb-1">Defesa do candidato</p>
                          <p className="text-xs text-zinc-300">{c.defense}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TRUST INDEX TAB */}
          {activeTab === "trust" && (
            <div className="space-y-4">
              {candidate.trustIndex ? (
                <TrustIndex trustIndex={candidate.trustIndex} />
              ) : (
                <div className="text-center py-12 text-zinc-500">
                  <BarChart2 size={32} className="mx-auto mb-3 opacity-40" />
                  <p>Índice de confiabilidade ainda não calculado para este candidato.</p>
                </div>
              )}
            </div>
          )}

          {/* SOURCES TAB */}
          {activeTab === "sources" && (
            <div className="space-y-3">
              {candidate.sources?.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                  <FileText size={32} className="mx-auto mb-3 opacity-40" />
                  <p>Fontes ainda não catalogadas para este candidato.</p>
                </div>
              )}
              {candidate.sources?.map((source, i) => {
                const rel = reliabilityConfig[source.reliability] || reliabilityConfig.press;
                return (
                  <a
                    key={i}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all group"
                  >
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex-shrink-0 ${rel.bg} ${rel.color}`}>
                      {rel.label}
                    </div>
                    <span className="flex-1 text-sm text-zinc-300 group-hover:text-white transition-colors">
                      {source.title}
                    </span>
                    <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400 flex-shrink-0 transition-colors" />
                  </a>
                );
              })}

              {/* Editorial notice */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-500 leading-relaxed">
                <p className="font-semibold text-zinc-400 mb-1">Aviso editorial</p>
                <p>
                  Este dossiê reúne informações de fontes públicas com o objetivo de informar o eleitor. Críticas e defesas são apresentadas lado a lado para garantir o contraditório. Resultados classificados como "inconclusivo" ou "a pesquisar" indicam ausência de dados suficientes para avaliação definitiva.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

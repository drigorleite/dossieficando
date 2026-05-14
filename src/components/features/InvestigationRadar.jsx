import { useState } from 'react';
import { Shield, Scale, Vote, Building2, FileSearch, ChevronDown, ChevronUp, ExternalLink, Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const AGENCIES = {
  PF: { label: 'Polícia Federal', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  STF: { label: 'Supremo Tribunal Federal', icon: Scale, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  TSE: { label: 'Tribunal Superior Eleitoral', icon: Vote, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  MPF: { label: 'Ministério Público Federal', icon: FileSearch, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  CGU: { label: 'Controladoria-Geral da União', icon: Building2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  TCU: { label: 'Tribunal de Contas da União', icon: Building2, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  COAF: { label: 'COAF / UIF', icon: FileSearch, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
};

const STATUS_CONFIG = {
  ativo: { label: 'Em andamento', icon: Clock, color: 'text-amber-400' },
  arquivado: { label: 'Arquivado', icon: XCircle, color: 'text-neutral-500' },
  condenado: { label: 'Condenado', icon: AlertTriangle, color: 'text-red-400' },
  absolvido: { label: 'Absolvido', icon: CheckCircle2, color: 'text-emerald-400' },
  anulado: { label: 'Anulado por vício processual', icon: CheckCircle2, color: 'text-blue-400' },
  suspenso: { label: 'Suspenso', icon: Clock, color: 'text-neutral-400' },
};

function InvestigationCard({ inv }) {
  const [expanded, setExpanded] = useState(false);
  const agencyCfg = AGENCIES[inv.agency] || { label: inv.agency, icon: FileSearch, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' };
  const statusCfg = STATUS_CONFIG[inv.status] || STATUS_CONFIG.ativo;
  const AgencyIcon = agencyCfg.icon;
  const StatusIcon = statusCfg.icon;

  return (
    <div className={`rounded-2xl border ${agencyCfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        onClick={() => setExpanded(v => !v)}
      >
        <div className={`w-9 h-9 rounded-xl ${agencyCfg.bg} flex items-center justify-center shrink-0`}>
          <AgencyIcon size={16} className={agencyCfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${agencyCfg.color}`}>
              {agencyCfg.label}
            </span>
            {inv.year && (
              <span className="text-[10px] text-neutral-600">{inv.year}</span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-white leading-snug">{inv.title}</h4>
          <div className="flex items-center gap-1.5 mt-1.5">
            <StatusIcon size={11} className={statusCfg.color} />
            <span className={`text-xs ${statusCfg.color}`}>{statusCfg.label}</span>
          </div>
        </div>

        {(inv.description || inv.documents) && (
          <div className="shrink-0 mt-1">
            {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
          </div>
        )}
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
          {inv.description && (
            <p className="text-sm text-neutral-400 leading-relaxed">{inv.description}</p>
          )}

          {/* Chronology */}
          {inv.chronology && inv.chronology.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">Cronologia</p>
              <div className="space-y-1.5">
                {inv.chronology.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="shrink-0 text-neutral-600 font-mono">{step.date}</span>
                    <span>{step.event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents */}
          {inv.documents && inv.documents.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">Documentos</p>
              <div className="space-y-1.5">
                {inv.documents.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition"
                  >
                    <ExternalLink size={10} className="shrink-0" />
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Defense */}
          {inv.defense && (
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-600 mb-1">
                Resposta / Defesa
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">{inv.defense}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function InvestigationRadar({ investigations = [] }) {
  const [selectedAgency, setSelectedAgency] = useState('all');

  if (!investigations.length) return null;

  const agenciesPresent = [...new Set(investigations.map(i => i.agency))];
  const filtered = selectedAgency === 'all'
    ? investigations
    : investigations.filter(i => i.agency === selectedAgency);

  const activeCount = investigations.filter(i => i.status === 'ativo').length;
  const closedCount = investigations.filter(i => ['arquivado', 'absolvido', 'anulado'].includes(i.status)).length;
  const convictedCount = investigations.filter(i => i.status === 'condenado').length;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Radar de Investigações
        </h3>
        <p className="text-sm text-neutral-400">
          {investigations.length} investigação{investigations.length !== 1 ? 'ões' : ''} mapeada{investigations.length !== 1 ? 's' : ''} por órgão, status e cronologia.
        </p>
      </div>

      {/* Summary pills */}
      <div className="flex flex-wrap gap-3">
        {activeCount > 0 && (
          <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-2">
            <Clock size={13} className="text-amber-400" />
            <span className="text-xs font-semibold text-amber-300">{activeCount} ativas</span>
          </div>
        )}
        {convictedCount > 0 && (
          <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-3 py-2">
            <AlertTriangle size={13} className="text-red-400" />
            <span className="text-xs font-semibold text-red-300">{convictedCount} condenação{convictedCount !== 1 ? 'ões' : ''}</span>
          </div>
        )}
        {closedCount > 0 && (
          <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2">
            <CheckCircle2 size={13} className="text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-400">{closedCount} encerrada{closedCount !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Agency filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedAgency('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedAgency === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'
          }`}
        >
          Todos os órgãos
        </button>
        {agenciesPresent.map(agency => {
          const cfg = AGENCIES[agency] || { label: agency, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' };
          const count = investigations.filter(i => i.agency === agency).length;
          return (
            <button
              key={agency}
              onClick={() => setSelectedAgency(agency)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedAgency === agency
                  ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              {agency} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((inv, i) => (
          <InvestigationCard key={i} inv={inv} />
        ))}
      </div>
    </div>
  );
}

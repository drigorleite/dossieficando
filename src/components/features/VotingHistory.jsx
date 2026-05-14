import { useState } from 'react';
import { CheckCircle2, XCircle, MinusCircle, AlertTriangle, ExternalLink } from 'lucide-react';

const VOTE_CONFIG = {
  sim: { label: 'Sim', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  nao: { label: 'Não', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  abstencao: { label: 'Abstenção', icon: MinusCircle, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' },
  ausente: { label: 'Ausente', icon: MinusCircle, color: 'text-neutral-600', bg: 'bg-white/[0.02]', border: 'border-white/5' },
  obstrucao: { label: 'Obstrução', icon: MinusCircle, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
};

const THEMES = {
  previdencia: 'Previdência',
  impostos: 'Impostos',
  seguranca: 'Segurança',
  aborto: 'Aborto',
  armas: 'Armas',
  gastos: 'Gastos públicos',
  trabalhista: 'Trabalhista',
  ambiental: 'Ambiental',
  educacao: 'Educação',
  saude: 'Saúde',
  outros: 'Outros',
};

function VoteRow({ vote }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = VOTE_CONFIG[vote.vote] || VOTE_CONFIG.abstencao;
  const Icon = cfg.icon;

  const hasCoherenceIssue = vote.coherenceNote;

  return (
    <div className={`rounded-xl border ${cfg.border} overflow-hidden`}>
      <button
        className="w-full text-left px-4 py-3 flex items-center gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <div className={`w-8 h-8 rounded-lg ${cfg.bg} flex items-center justify-center shrink-0`}>
          <Icon size={14} className={cfg.color} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-white truncate">{vote.bill}</span>
            {hasCoherenceIssue && (
              <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-2 py-0.5">
                <AlertTriangle size={9} />
                Incoerência
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-xs text-neutral-500">{vote.year}</span>
            <span className={`text-xs font-semibold ${cfg.color}`}>{cfg.label}</span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-white/5 pt-3 space-y-2.5">
          {vote.description && (
            <p className="text-xs text-neutral-400 leading-relaxed">{vote.description}</p>
          )}
          {vote.coherenceNote && (
            <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 px-3 py-2">
              <p className="text-[10px] font-semibold text-amber-500 mb-1">⚠️ Coerência com discurso</p>
              <p className="text-xs text-neutral-400">{vote.coherenceNote}</p>
            </div>
          )}
          {vote.source && (
            <a
              href={vote.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] text-neutral-500 hover:text-white transition"
            >
              <ExternalLink size={10} />
              {vote.source.label}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function VotingHistory({ votes = [] }) {
  const [activeTheme, setActiveTheme] = useState('all');

  if (!votes.length) return null;

  const presentThemes = [...new Set(votes.map(v => v.theme))];
  const filtered = activeTheme === 'all' ? votes : votes.filter(v => v.theme === activeTheme);

  const coherenceIssues = votes.filter(v => v.coherenceNote).length;
  const presenceRate = votes.length > 0
    ? Math.round((votes.filter(v => !['ausente'].includes(v.vote)).length / votes.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Histórico de Votações
        </h3>
        <p className="text-sm text-neutral-400">
          {votes.length} votação{votes.length !== 1 ? 'ões' : ''} documentada{votes.length !== 1 ? 's' : ''} com análise de coerência de discurso.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
          <p className="text-lg font-bold text-white">{votes.length}</p>
          <p className="text-[10px] text-neutral-500">Votações</p>
        </div>
        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
          <p className={`text-lg font-bold ${presenceRate >= 80 ? 'text-emerald-400' : presenceRate >= 60 ? 'text-amber-400' : 'text-red-400'}`}>
            {presenceRate}%
          </p>
          <p className="text-[10px] text-neutral-500">Presença</p>
        </div>
        <div className={`rounded-xl border p-3 text-center ${coherenceIssues > 0 ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/[0.03] border-white/10'}`}>
          <p className={`text-lg font-bold ${coherenceIssues > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
            {coherenceIssues}
          </p>
          <p className="text-[10px] text-neutral-500">Incoerências</p>
        </div>
      </div>

      {/* Theme filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTheme('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeTheme === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'
          }`}
        >
          Todos os temas
        </button>
        {presentThemes.map(theme => (
          <button
            key={theme}
            onClick={() => setActiveTheme(theme)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTheme === theme ? 'bg-white/10 text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10'
            }`}
          >
            {THEMES[theme] || theme} ({votes.filter(v => v.theme === theme).length})
          </button>
        ))}
      </div>

      {/* Votes */}
      <div className="space-y-2">
        {filtered.map((vote, i) => (
          <VoteRow key={i} vote={vote} />
        ))}
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <p className="text-[10px] text-neutral-600 leading-relaxed">
          ⚠️ Dados extraídos do portal da Câmara dos Deputados, Senado Federal e Diário Oficial.
          A análise de coerência compara o voto com declarações públicas do parlamentar sobre o mesmo tema.
        </p>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Briefcase, Building2, ShoppingCart, Car, Home, TrendingUp, Users, ChevronDown, ChevronUp } from 'lucide-react';

const PROFILES = {
  mei: { label: 'MEI', icon: Briefcase, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  clt: { label: 'CLT', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  empresario: { label: 'Empresário', icon: Building2, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  importacao: { label: 'Importação', icon: ShoppingCart, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  aluguel: { label: 'Proprietário / Inquilino', icon: Home, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  carro: { label: 'Motorista / Carro', icon: Car, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  investidor: { label: 'Investidor', icon: TrendingUp, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  mercado: { label: 'Consumidor', icon: ShoppingCart, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' },
};

const IMPACT_LEVELS = {
  positivo: { label: 'Impacto positivo', color: 'text-emerald-400', dot: 'bg-emerald-500' },
  negativo: { label: 'Impacto negativo', color: 'text-red-400', dot: 'bg-red-500' },
  neutro: { label: 'Neutro / Misto', color: 'text-neutral-400', dot: 'bg-neutral-500' },
  incerto: { label: 'Incerto', color: 'text-amber-400', dot: 'bg-amber-500' },
};

function PolicyImpactCard({ policy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <div>
          <p className="text-sm font-semibold text-white">{policy.proposal}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{policy.shortImpact}</p>
        </div>
        {expanded ? <ChevronUp size={13} className="text-neutral-600" /> : <ChevronDown size={13} className="text-neutral-600" />}
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-white/5 pt-3">
          <div className="space-y-2">
            {policy.impacts.map((impact, i) => {
              const profileCfg = PROFILES[impact.profile] || { label: impact.profile, icon: Users, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' };
              const impactCfg = IMPACT_LEVELS[impact.level] || IMPACT_LEVELS.incerto;
              const ProfileIcon = profileCfg.icon;
              return (
                <div key={i} className={`flex items-start gap-3 rounded-lg ${profileCfg.bg} border ${profileCfg.border} px-3 py-2.5`}>
                  <ProfileIcon size={14} className={`mt-0.5 shrink-0 ${profileCfg.color}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[10px] font-semibold ${profileCfg.color}`}>{profileCfg.label}</span>
                      <span className={`flex items-center gap-1 text-[10px] ${impactCfg.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${impactCfg.dot}`} />
                        {impactCfg.label}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function HowItAffectsYou({ impacts = [] }) {
  const [selectedProfile, setSelectedProfile] = useState('all');

  if (!impacts.length) return null;

  const presentProfiles = [...new Set(impacts.flatMap(p => p.impacts?.map(i => i.profile) || []))];

  const filteredPolicies = selectedProfile === 'all'
    ? impacts
    : impacts.filter(p => p.impacts?.some(i => i.profile === selectedProfile));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Como Isso Afeta Você?
        </h3>
        <p className="text-sm text-neutral-400">
          Impacto prático das propostas e políticas por perfil de cidadão.
        </p>
      </div>

      {/* Profile filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedProfile('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedProfile === 'all' ? 'bg-white text-neutral-900' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
        >
          Todos os perfis
        </button>
        {presentProfiles.map(profile => {
          const cfg = PROFILES[profile] || { label: profile, color: 'text-neutral-400', bg: 'bg-white/5', border: 'border-white/10' };
          return (
            <button
              key={profile}
              onClick={() => setSelectedProfile(profile)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedProfile === profile
                  ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Policy cards */}
      <div className="space-y-3">
        {filteredPolicies.map((policy, i) => (
          <PolicyImpactCard key={i} policy={policy} />
        ))}
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <p className="text-[10px] text-neutral-600 leading-relaxed">
          ⚠️ Os impactos são estimativas baseadas em análises econômicas e jurídicas disponíveis publicamente.
          Impactos reais dependem de implementação, contexto macroeconômico e decisões do Congresso.
        </p>
      </div>
    </div>
  );
}

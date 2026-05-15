import { motion } from 'framer-motion';
import { ShieldCheck, Users, FileSearch, Lightbulb, GitCompare } from 'lucide-react';
import Container from './ui/Container';
import SearchInput from './ui/SearchInput';
import { candidates } from '../data/candidates';
import { modularCandidates } from '../data/candidates/index';

const totalCases = candidates.reduce((sum, c) => sum + (c.cases ?? 0), 0);
const totalSources = candidates.reduce((sum, c) => sum + (c.sources ?? 0), 0);
const totalProposals = modularCandidates.reduce((sum, c) => sum + (c.proposals?.length ?? 0), 0);

const stats = [
  { icon: Users,      label: 'Políticos mapeados',  value: candidates.length, accent: 'text-blue-400',    glow: 'rgba(59,130,246,0.15)' },
  { icon: FileSearch, label: 'Casos catalogados',    value: totalCases,        accent: 'text-amber-400',   glow: 'rgba(245,158,11,0.15)' },
  { icon: ShieldCheck,label: 'Fontes verificadas',   value: totalSources,      accent: 'text-emerald-400', glow: 'rgba(52,211,153,0.15)' },
  { icon: Lightbulb,  label: 'Propostas analisadas', value: totalProposals,    accent: 'text-purple-400',  glow: 'rgba(168,85,247,0.15)' },
];

export default function Hero({ query, setQuery, onOpenComparison }) {
  return (
    <section
      className="relative overflow-hidden py-16 text-white lg:py-24"
      style={{ background: 'linear-gradient(180deg, #0d0d0f 0%, #0a0a0c 100%)' }}
    >
      {/* Ambient radial glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 10%, rgba(99,102,241,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 10% 80%, rgba(52,211,153,0.05) 0%, transparent 55%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,12,0.9))' }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-300 backdrop-blur-sm"
            style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}
          >
            <ShieldCheck size={14} aria-hidden="true" /> Pesquisa pública verificável
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Políticos, fatos e fontes.{' '}
            <span className="text-neutral-500">Sem torcida.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg"
          >
            Uma interface limpa para consultar históricos públicos, controvérsias, decisões
            judiciais, notícias e documentos relacionados a figuras políticas brasileiras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex-1 max-w-xl">
              <label className="sr-only" htmlFor="hero-search">
                Buscar candidato
              </label>
              <SearchInput
                id="hero-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nome, partido, tema..."
              />
            </div>
            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-white hover:border-white/20 sm:py-2.5"
                style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset' }}
              >
                <GitCompare size={15} aria-hidden="true" />
                Comparar candidatos
              </button>
            )}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map(({ icon: Icon, label, value, accent, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.06) inset' }}
            >
              {/* Specular top highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 rounded-t-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)' }} aria-hidden="true" />
              {/* Ambient glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 70%)` }} aria-hidden="true" />
              <Icon size={18} className={`mb-3 relative ${accent}`} aria-hidden="true" />
              <p className="relative text-2xl font-bold text-white tabular-nums">{value}</p>
              <p className="relative mt-1 text-xs text-neutral-500">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

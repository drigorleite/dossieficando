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
  { icon: Users, label: 'Políticos mapeados', value: candidates.length, accent: 'text-blue-400' },
  { icon: FileSearch, label: 'Casos catalogados', value: totalCases, accent: 'text-amber-400' },
  { icon: ShieldCheck, label: 'Fontes verificadas', value: totalSources, accent: 'text-emerald-400' },
  { icon: Lightbulb, label: 'Propostas analisadas', value: totalProposals, accent: 'text-purple-400' },
];

export default function Hero({ query, setQuery, onOpenComparison }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950 py-12 text-white lg:py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(10,10,10,0.8))]" />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-neutral-300"
          >
            <ShieldCheck size={14} aria-hidden="true" /> Pesquisa pública verificável
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Políticos, fatos e fontes.{' '}
            <span className="text-neutral-500">Sem torcida.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg"
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
                className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white sm:py-2.5"
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
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map(({ icon: Icon, label, value, accent }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <Icon size={16} className={`mb-2 ${accent}`} aria-hidden="true" />
              <p className="text-2xl font-bold text-white tabular-nums">{value}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

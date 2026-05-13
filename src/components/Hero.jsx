import { motion } from 'framer-motion';
import { ShieldCheck, Users, FileSearch, Lightbulb } from 'lucide-react';
import Container from './ui/Container';
import SearchInput from './ui/SearchInput';
import { candidates } from '../data/candidates';
import { modularCandidates } from '../data/candidates/index';

const totalCases = candidates.reduce((sum, c) => sum + (c.cases ?? 0), 0);
const totalSources = candidates.reduce((sum, c) => sum + (c.sources ?? 0), 0);
const totalProposals = modularCandidates.reduce((sum, c) => sum + (c.proposals?.length ?? 0), 0);

const stats = [
  { icon: Users, label: 'Políticos mapeados', value: candidates.length },
  { icon: FileSearch, label: 'Casos catalogados', value: totalCases },
  { icon: ShieldCheck, label: 'Fontes verificadas', value: totalSources },
  { icon: Lightbulb, label: 'Propostas analisadas', value: totalProposals },
];

export default function Hero({ query, setQuery }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950 py-12 text-white lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

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
            Políticos, fatos e fontes. Sem torcida.
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
            className="mt-8 max-w-xl"
          >
            <label className="sr-only" htmlFor="hero-search">
              Buscar candidato
            </label>
            <SearchInput
              id="hero-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome, partido, tema..."
            />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
            >
              <Icon size={16} className="mb-2 text-neutral-400" aria-hidden="true" />
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

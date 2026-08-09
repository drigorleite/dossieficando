import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Container from './ui/Container';
import SearchInput from './ui/SearchInput';

export default function Hero({ query, setQuery }) {
  return (
    <section id="topo" className="relative scroll-mt-20 overflow-hidden border-b border-white/10 bg-neutral-950 py-10 text-white sm:py-12 lg:py-20">
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
              onClear={() => setQuery('')}
              placeholder="Buscar por nome, partido, tema..."
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Container from './ui/Container';
import SearchInput from './ui/SearchInput';

export default function Hero({ query, setQuery }) {
  return (
    <section id="topo" className="relative scroll-mt-20 overflow-hidden border-b border-neutral-200 bg-white py-12 text-neutral-950 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.09),transparent_32%),linear-gradient(to_right,rgba(229,229,229,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,229,0.45)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-900"
          >
            <ShieldCheck size={14} aria-hidden="true" /> Pesquisa pública verificável
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-7xl"
          >
            Políticos, fatos e fontes. Sem torcida.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg"
          >
            Consulte históricos públicos, decisões judiciais, respostas dos citados e planos de
            governo. Cada afirmação relevante aponta para uma fonte verificável.
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

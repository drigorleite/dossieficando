import { useState } from 'react';
import { Menu, X, Scale, GitCompare } from 'lucide-react';
import Container from './ui/Container';

const navLinks = [
  { href: '#candidatos', label: 'Candidatos' },
  { href: '#governadores', label: 'Governadores' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#proposito', label: 'Propósito' },
  { href: '#metodo', label: 'Método' },
];

export default function Header({ onOpenComparison }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:bg-white/10">
              <Scale size={16} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Dossiê Público</p>
              <h1 className="text-base font-semibold tracking-tight text-white sm:text-lg leading-tight">
                Sem lente ideológica
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                className="ml-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
              >
                <GitCompare size={14} aria-hidden="true" />
                Comparar
              </button>
            )}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Comparar candidatos"
              >
                <GitCompare size={16} />
              </button>
            )}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-neutral-950/98 px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-1 text-sm text-neutral-400" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            {onOpenComparison && (
              <button
                onClick={() => { setMobileOpen(false); onOpenComparison(); }}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-left text-neutral-300 transition hover:bg-white/5 hover:text-white"
              >
                <GitCompare size={14} />
                Comparar candidatos
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

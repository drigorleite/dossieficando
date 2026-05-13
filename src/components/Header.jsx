import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';

const navLinks = [
  { href: '#candidatos', label: 'Candidatos' },
  { href: '#proposito', label: 'Propósito' },
  { href: '#metodo', label: 'Método' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Dossiê Público</p>
            <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Sem lente ideológica
            </h1>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-400 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-5 text-sm text-neutral-400" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

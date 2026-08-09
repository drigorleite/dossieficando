import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';

const navLinks = [
  { href: '#candidatos', label: 'Candidatos' },
  { href: '#escandalos-recentes', label: 'Escândalos recentes' },
  { href: '#proposito', label: 'Propósito' },
  { href: '#metodo', label: 'Método' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <a href="#topo" className="rounded-lg" aria-label="Dossiê Público — início">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900">Dossiê Público</p>
            <h1 className="text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
              Fatos, decisões e fontes
            </h1>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="transition hover:text-blue-900">
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 transition hover:bg-neutral-100 md:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div id="menu-mobile" className="border-t border-neutral-200 bg-white px-4 py-3 shadow-lg md:hidden">
          <nav className="flex flex-col text-sm font-medium text-neutral-700" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-2 transition hover:bg-neutral-100 hover:text-blue-900"
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

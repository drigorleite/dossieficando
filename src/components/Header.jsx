import { useState, useRef, useEffect } from 'react';
import { Menu, X, Scale, GitCompare, ChevronDown, MapPin } from 'lucide-react';
import Container from './ui/Container';

const STATES_QUICK = [
  { abbr: "SP", label: "São Paulo" },
  { abbr: "RJ", label: "Rio de Janeiro" },
  { abbr: "MG", label: "Minas Gerais" },
  { abbr: "SC", label: "Santa Catarina" },
  { abbr: "PR", label: "Paraná" },
  { abbr: "MS", label: "Mato Grosso do Sul" },
  { abbr: "MT", label: "Mato Grosso" },
  { abbr: "MA", label: "Maranhão" },
  { abbr: "PE", label: "Pernambuco" },
  { abbr: "AM", label: "Amazonas" },
  { abbr: "PA", label: "Pará" },
];

const navLinks = [
  { href: '#candidatos', label: 'Presidenciais' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Método' },
];

function GovernorsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white"
      >
        <MapPin size={13} />
        Governadores
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-white/10 bg-neutral-900/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Selecione o estado</p>
          </div>
          <div className="py-2 max-h-72 overflow-y-auto">
            {STATES_QUICK.map((state) => (
              <a
                key={state.abbr}
                href="#governadores"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 min-w-[28px] text-center">
                  {state.abbr}
                </span>
                {state.label}
              </a>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-white/10">
            <a
              href="#governadores"
              onClick={() => setOpen(false)}
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver todos os estados →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ onOpenComparison }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop nav */}
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

            {/* Governors dropdown */}
            <GovernorsDropdown />

            {/* Compare button */}
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

          {/* Mobile controls */}
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

      {/* Mobile menu */}
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

            {/* Governors section in mobile */}
            <div className="mt-2 mb-1 px-4">
              <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">Governadores por estado</p>
            </div>
            <div className="grid grid-cols-3 gap-1 px-1 mb-2">
              {STATES_QUICK.map((state) => (
                <a
                  key={state.abbr}
                  href="#governadores"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center transition hover:bg-white/5"
                >
                  <span className="text-xs font-mono font-bold text-zinc-300">{state.abbr}</span>
                  <span className="text-[9px] text-zinc-600 leading-tight">{state.label.split(' ')[0]}</span>
                </a>
              ))}
            </div>

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

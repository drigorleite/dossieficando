import { useState, useRef, useEffect } from 'react';
import { Menu, X, Scale, GitCompare, ChevronDown, MapPin, Search } from 'lucide-react';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';
import { candidates } from '../data/candidates';
import { modularCandidates } from '../data/candidates/index';
import { governorsByState } from '../data/governors/index';

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

function buildSearchIndex() {
  const items = [];
  // Presidential candidates
  candidates.forEach((c) => {
    items.push({
      id: c.slug,
      name: c.name,
      party: c.party,
      role: c.role,
      type: 'presidential',
      href: '#candidatos',
      slug: c.slug,
    });
  });
  // Governor candidates
  Object.entries(governorsByState || {}).forEach(([state, govs]) => {
    (govs || []).forEach((g) => {
      items.push({
        id: `gov-${state}-${g.slug}`,
        name: g.name,
        party: g.party,
        role: `Candidato ao governo de ${state.toUpperCase()}`,
        type: 'governor',
        href: '#governadores',
        state: state.toUpperCase(),
      });
    });
  });
  return items;
}

function GlobalSearch({ onSelectCandidate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);
  const searchIndex = useRef(buildSearchIndex());

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setFocused(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = searchIndex.current
      .filter((item) =>
        item.name.toLowerCase().includes(q) ||
        item.party?.toLowerCase().includes(q) ||
        item.role?.toLowerCase().includes(q)
      )
      .slice(0, 8);
    setResults(filtered);
  }, [query]);

  const handleSelect = (item) => {
    setQuery('');
    setResults([]);
    setFocused(false);
    if (item.type === 'presidential' && onSelectCandidate) {
      const candidate = candidates.find((c) => c.slug === item.slug);
      if (candidate) onSelectCandidate(candidate);
    } else {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setFocused(false); setQuery(''); }
  };

  return (
    <div ref={ref} className="relative hidden md:block">
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar candidato, partido..."
          aria-label="Busca global de candidatos"
          aria-autocomplete="list"
          aria-expanded={results.length > 0}
          className="w-52 rounded-xl border border-white/10 bg-white/5 py-2 pl-8 pr-3 text-sm text-neutral-300 placeholder-neutral-600 transition focus:border-white/20 focus:bg-white/8 focus:outline-none focus:w-64 lg:w-64"
        />
      </div>
      {focused && results.length > 0 && (
        <div
          role="listbox"
          aria-label="Resultados da busca"
          className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-white/10 bg-neutral-900/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden"
        >
          {results.map((item) => (
            <button
              key={item.id}
              role="option"
              onClick={() => handleSelect(item)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-white/5"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{item.name}</p>
                <p className="text-xs text-neutral-500 truncate">{item.role}</p>
              </div>
              {item.party && (
                <span className="shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
                  {item.party}
                </span>
              )}
              {item.state && (
                <span className="shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono font-bold text-neutral-400">
                  {item.state}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white"
      >
        <MapPin size={13} aria-hidden="true" />
        Governadores
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-white/10 bg-neutral-900/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden"
        >
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Selecione o estado</p>
          </div>
          <div className="py-2 max-h-72 overflow-y-auto">
            {STATES_QUICK.map((state) => (
              <a
                key={state.abbr}
                href="#governadores"
                role="menuitem"
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

export default function Header({ onOpenComparison, onOpenCandidate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full" style={{ background: 'rgba(13,13,15,0.80)', backdropFilter: 'blur(24px) saturate(180%)', WebkitBackdropFilter: 'blur(24px) saturate(180%)', borderBottom: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.3)' }}>
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          {/* Specular top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }} aria-hidden="true" />
          <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Dossiê Público — página inicial">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/12 bg-white/6 backdrop-blur-sm transition group-hover:bg-white/12">
              <Scale size={16} className="text-white" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Dossiê Público</p>
              <p className="text-sm font-semibold tracking-tight text-white leading-tight">Sem lente ideológica</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-2xl px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/6 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                {label}
              </a>
            ))}
            <GovernorsDropdown />
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Global search */}
            <GlobalSearch onSelectCandidate={onOpenCandidate} />

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Compare button */}
            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                aria-label="Comparar candidatos"
                className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white hover:border-white/20 focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                <GitCompare size={14} aria-hidden="true" />
                Comparar
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 hover:border-white/20 md:hidden"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-white/8 px-4 py-5 md:hidden" style={{ background: 'rgba(13,13,15,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
          {/* Mobile search */}
          <div className="mb-4 relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar candidato, partido..."
              aria-label="Busca de candidatos"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-8 pr-3 text-sm text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-white/20"
            />
          </div>

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
                <GitCompare size={14} aria-hidden="true" />
                Comparar candidatos
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, X, Scale, GitCompare, ChevronDown, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';
import { candidates } from '../data/candidates';
import { governorsByState } from '../data/governors/index';

/* ─── constants ─────────────────────────────────────────────────────────── */
const STATES_QUICK = [
  { abbr: 'SP', label: 'São Paulo' },
  { abbr: 'RJ', label: 'Rio de Janeiro' },
  { abbr: 'MG', label: 'Minas Gerais' },
  { abbr: 'SC', label: 'Santa Catarina' },
  { abbr: 'PR', label: 'Paraná' },
  { abbr: 'MS', label: 'Mato Grosso do Sul' },
  { abbr: 'MT', label: 'Mato Grosso' },
  { abbr: 'MA', label: 'Maranhão' },
  { abbr: 'PE', label: 'Pernambuco' },
  { abbr: 'AM', label: 'Amazonas' },
  { abbr: 'PA', label: 'Pará' },
];

const navLinks = [
  { href: '#candidatos', label: 'Presidenciais' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Método' },
];

/* ─── search index ───────────────────────────────────────────────────────── */
function buildSearchIndex() {
  const items = [];
  candidates.forEach((c) => {
    items.push({ id: c.slug, name: c.name, party: c.party, role: c.role, type: 'presidential', href: '#candidatos', slug: c.slug });
  });
  Object.entries(governorsByState || {}).forEach(([state, govs]) => {
    (govs || []).forEach((g) => {
      items.push({ id: `gov-${state}-${g.slug}`, name: g.name, party: g.party, role: `Gov. ${state.toUpperCase()}`, type: 'governor', href: '#governadores', state: state.toUpperCase() });
    });
  });
  return items;
}

/* ─── GlobalSearch ───────────────────────────────────────────────────────── */
function GlobalSearch({ onSelectCandidate, compact }) {
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
    setResults(searchIndex.current.filter((item) =>
      item.name.toLowerCase().includes(q) ||
      item.party?.toLowerCase().includes(q) ||
      item.role?.toLowerCase().includes(q)
    ).slice(0, 8));
  }, [query]);

  const handleSelect = (item) => {
    setQuery(''); setResults([]); setFocused(false);
    if (item.type === 'presidential' && onSelectCandidate) {
      const candidate = candidates.find((c) => c.slug === item.slug);
      if (candidate) onSelectCandidate(candidate);
    } else {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className="relative hidden md:block">
      <div className="relative">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => { if (e.key === 'Escape') { setFocused(false); setQuery(''); } }}
          placeholder="Buscar candidato, partido..."
          aria-label="Busca global de candidatos"
          aria-autocomplete="list"
          aria-expanded={results.length > 0}
          className={`rounded-full border border-white/10 bg-white/5 py-1.5 pl-8 pr-3 text-sm text-neutral-300 placeholder-neutral-600 transition-all duration-300 focus:border-white/20 focus:bg-white/8 focus:outline-none ${compact ? 'w-36 focus:w-52' : 'w-48 focus:w-64'}`}
        />
      </div>
      {focused && results.length > 0 && (
        <div
          role="listbox"
          aria-label="Resultados da busca"
          className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden"
          style={{ background: 'rgba(15,15,18,0.98)' }}
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
                <span className="shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">{item.party}</span>
              )}
              {item.state && (
                <span className="shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono font-bold text-neutral-400">{item.state}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── GovernorsDropdown ──────────────────────────────────────────────────── */
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
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-neutral-400 transition hover:bg-white/8 hover:text-white"
      >
        <MapPin size={12} aria-hidden="true" />
        Governadores
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="menu"
            className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden"
            style={{ background: 'rgba(15,15,18,0.98)' }}
          >
            <div className="px-4 py-3 border-b border-white/8">
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
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/8 text-zinc-300 min-w-[28px] text-center">{state.abbr}</span>
                  {state.label}
                </a>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-white/8">
              <a href="#governadores" onClick={() => setOpen(false)} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                Ver todos os estados →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── MobileMenu ─────────────────────────────────────────────────────────── */
function MobileMenu({ open, onClose, onOpenComparison }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          id="mobile-menu"
          className="absolute top-full left-4 right-4 mt-2 rounded-3xl border border-white/10 overflow-hidden z-50"
          style={{ background: 'rgba(13,13,15,0.98)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset' }}
        >
          {/* Mobile search */}
          <div className="p-4 border-b border-white/8">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar candidato, partido..."
                aria-label="Busca de candidatos"
                className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-8 pr-3 text-sm text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-white/20"
              />
            </div>
          </div>

          <nav className="flex flex-col p-3 gap-1 text-sm text-neutral-400" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={onClose} className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-white">
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
                  onClick={onClose}
                  className="flex flex-col items-center gap-0.5 rounded-2xl px-2 py-2.5 text-center transition hover:bg-white/5"
                >
                  <span className="text-xs font-mono font-bold text-zinc-300">{state.abbr}</span>
                  <span className="text-[9px] text-zinc-600 leading-tight">{state.label.split(' ')[0]}</span>
                </a>
              ))}
            </div>

            {onOpenComparison && (
              <button
                onClick={() => { onClose(); onOpenComparison(); }}
                className="flex items-center gap-2 rounded-2xl px-4 py-3 text-left text-neutral-300 transition hover:bg-white/5 hover:text-white"
              >
                <GitCompare size={14} aria-hidden="true" />
                Comparar candidatos
              </button>
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Header (Dynamic Island) ────────────────────────────────────────────── */
export default function Header({ onOpenComparison, onOpenCandidate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  return (
    /* Outer wrapper: fixed, full-width, no background — just positions the island */
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* ── Dynamic Island pill ── */}
      <motion.header
        ref={headerRef}
        layout
        layoutId="dynamic-island"
        transition={{ type: 'spring', stiffness: 380, damping: 38, mass: 0.8 }}
        className="pointer-events-auto relative overflow-visible"
        style={{
          marginTop: scrolled ? '10px' : '0px',
          borderRadius: scrolled ? '9999px' : '0px',
          width: scrolled ? 'auto' : 'calc(100vw - 0px)',
          maxWidth: scrolled ? '740px' : '100vw',
          background: scrolled
            ? 'rgba(12,12,14,0.92)'
            : 'rgba(13,13,15,0.80)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.07)',
          border: scrolled ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.07) inset'
            : '0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Specular top highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }}
          aria-hidden="true"
        />

        <div
          className="flex items-center justify-between gap-3"
          style={{
            padding: scrolled ? '7px 14px' : '10px 24px',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Dossiê Público — página inicial"
          >
            <motion.div
              layout
              className="flex items-center justify-center rounded-full border border-white/12 bg-white/6 backdrop-blur-sm transition group-hover:bg-white/12"
              style={{ width: scrolled ? 30 : 36, height: scrolled ? 30 : 36 }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            >
              <Scale size={scrolled ? 13 : 16} className="text-white" aria-hidden="true" />
            </motion.div>

            <AnimatePresence mode="wait">
              {!scrolled && (
                <motion.div
                  key="logo-text"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden sm:block overflow-hidden"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 whitespace-nowrap">Dossiê Público</p>
                  <p className="text-sm font-semibold tracking-tight text-white leading-tight whitespace-nowrap">Sem lente ideológica</p>
                </motion.div>
              )}
              {scrolled && (
                <motion.p
                  key="logo-compact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="hidden sm:block text-sm font-semibold text-white whitespace-nowrap"
                >
                  Dossiê
                </motion.p>
              )}
            </AnimatePresence>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-1.5 text-sm text-neutral-400 transition hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400 whitespace-nowrap"
              >
                {label}
              </a>
            ))}
            <GovernorsDropdown />
          </nav>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-1.5">
            <GlobalSearch onSelectCandidate={onOpenCandidate} compact={scrolled} />
            <ThemeToggle />

            {onOpenComparison && (
              <button
                onClick={onOpenComparison}
                aria-label="Comparar candidatos"
                className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white hover:border-white/20 focus-visible:outline-2 focus-visible:outline-blue-400 whitespace-nowrap"
              >
                <GitCompare size={13} aria-hidden="true" />
                Comparar
              </button>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 hover:border-white/20 md:hidden"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={16} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={16} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu — rendered inside the island when expanded */}
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onOpenComparison={onOpenComparison} />
      </motion.header>
    </div>
  );
}

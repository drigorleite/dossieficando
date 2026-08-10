import { Loader2 } from 'lucide-react';

/**
 * Placeholder discreto para limites de Suspense (lazy loading).
 * `variant="overlay"` cobre a tela toda (modais); `"inline"` ocupa a área de conteúdo.
 */
export default function LazyFallback({ variant = 'inline', label = 'Carregando…' }) {
  if (variant === 'overlay') {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: '#0d0d0f' }}
        role="status"
        aria-live="polite"
      >
        <Loader2 size={22} className="animate-spin text-neutral-500" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-[240px] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <Loader2 size={20} className="animate-spin text-neutral-600" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

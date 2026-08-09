import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function SearchInput({ className = '', onClear, ...props }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur transition duration-200 focus-within:border-white/20 focus-within:bg-white/[0.07]',
        className
      )}
    >
      <Search className="shrink-0 text-neutral-500" size={20} aria-hidden="true" />
      <input
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        className="min-h-6 w-full bg-transparent text-base text-white outline-none placeholder:text-neutral-500 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
        {...props}
      />
      {props.value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-neutral-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Limpar busca"
        >
          <X size={18} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

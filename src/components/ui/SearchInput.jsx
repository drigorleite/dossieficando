import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function SearchInput({ className = '', onClear, ...props }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl border border-neutral-300 bg-white px-4 py-3 shadow-lg shadow-neutral-900/5 transition duration-200 focus-within:border-blue-800 focus-within:ring-4 focus-within:ring-blue-100',
        className
      )}
    >
      <Search className="shrink-0 text-neutral-500" size={20} aria-hidden="true" />
      <input
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        className="min-h-6 w-full bg-transparent text-base text-neutral-950 outline-none placeholder:text-neutral-500 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
        {...props}
      />
      {props.value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
          aria-label="Limpar busca"
        >
          <X size={18} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

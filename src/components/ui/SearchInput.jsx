import { Search } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function SearchInput({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur transition duration-200 focus-within:border-white/20 focus-within:bg-white/[0.07]',
        className
      )}
    >
      <Search className="shrink-0 text-neutral-500" size={20} aria-hidden="true" />
      <input
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
        {...props}
      />
    </div>
  );
}

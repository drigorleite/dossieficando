import { cn } from '../../utils/cn';

const legalStatusStyles = {
  investigação: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  denúncia: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  condenação: 'border-red-500/30 bg-red-500/10 text-red-400',
  absolvição: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  arquivamento: 'border-zinc-500/30 bg-zinc-500/10 text-zinc-400',
  anulação: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  prescrição: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  const statusStyle = legalStatusStyles[variant];
  const defaultStyle = 'border-white/10 bg-white/10 text-neutral-200';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur',
        statusStyle ?? defaultStyle,
        className
      )}
    >
      {children}
    </span>
  );
}

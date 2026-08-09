import { cn } from '../../utils/cn';

const legalStatusStyles = {
  investigação: 'border-amber-300 bg-amber-50 text-amber-800',
  denúncia: 'border-orange-300 bg-orange-50 text-orange-800',
  condenação: 'border-red-300 bg-red-50 text-red-800',
  absolvição: 'border-emerald-300 bg-emerald-50 text-emerald-800',
  arquivamento: 'border-neutral-300 bg-neutral-100 text-neutral-700',
  anulação: 'border-blue-300 bg-blue-50 text-blue-800',
  prescrição: 'border-purple-300 bg-purple-50 text-purple-800',
  liminar: 'border-sky-300 bg-sky-50 text-sky-800',
  'ação em curso': 'border-amber-300 bg-amber-50 text-amber-800',
  'denúncia rejeitada': 'border-emerald-300 bg-emerald-50 text-emerald-800',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  const statusStyle = legalStatusStyles[variant];
  const defaultStyle = 'border-neutral-200 bg-neutral-100 text-neutral-700';

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

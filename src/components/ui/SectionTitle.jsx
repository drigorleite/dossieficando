import { cn } from '../../utils/cn';

export default function SectionTitle({ eyebrow, heading, description, className = '' }) {
  return (
    <div className={cn('', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          {heading}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

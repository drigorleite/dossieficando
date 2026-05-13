import Card from '../ui/Card';
import EvidenceBadge from '../EvidenceBadge';

export default function SectionRenderer({ title, description, items = [] }) {
  if (!items.length) return null;

  return (
    <Card>
      <div className="mb-6 border-b border-white/10 pb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
        )}
      </div>

      <div className="space-y-5">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              {item.evidenceLevel && <EvidenceBadge level={item.evidenceLevel} />}

              {item.year && (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {item.year}
                </span>
              )}
            </div>

            <h4 className="text-lg font-semibold text-white">{item.title}</h4>

            <p className="mt-3 text-sm leading-7 text-neutral-300">
              {item.description}
            </p>

            {(item.sourceType || item.status) && (
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-500">
                {item.sourceType && (
                  <span className="rounded-full border border-white/10 px-2 py-0.5">
                    {item.sourceType}
                  </span>
                )}
                {item.status && (
                  <span className="rounded-full border border-white/10 px-2 py-0.5">
                    {item.status}
                  </span>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Card>
  );
}

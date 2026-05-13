import { ExternalLink, FileText, Newspaper, Scale, Link, ShieldCheck, ShieldAlert, Shield } from 'lucide-react';
import Badge from './ui/Badge';

const typeIcons = {
  notícia: Newspaper,
  documento: FileText,
  judicial: Scale,
};

const reliabilityConfig = {
  alta: { label: 'Confiabilidade alta', icon: ShieldCheck, color: 'text-emerald-400' },
  média: { label: 'Confiabilidade média', icon: ShieldAlert, color: 'text-amber-400' },
  baixa: { label: 'Confiabilidade baixa', icon: Shield, color: 'text-red-400' },
};

export default function SourceCard({ source }) {
  const Icon = typeIcons[source.type] ?? Link;
  const isLink = Boolean(source.url);
  const reliability = reliabilityConfig[source.reliability];

  const Wrapper = isLink ? 'a' : 'div';
  const wrapperProps = isLink
    ? { href: source.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.07]"
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className="mt-0.5 shrink-0 text-neutral-500 transition group-hover:text-neutral-300">
          <Icon size={16} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-neutral-200 transition group-hover:text-white leading-snug">
            {source.title}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            {source.vehicle && <span className="font-medium text-neutral-400">{source.vehicle}</span>}
            {source.vehicle && source.date && <span>·</span>}
            {source.date && <span>{source.date}</span>}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {source.type && <Badge className="text-[10px]">{source.type}</Badge>}
            {reliability && (
              <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${reliability.color}`}>
                <reliability.icon size={11} />
                {reliability.label}
              </span>
            )}
          </div>

          {source.notes && (
            <p className="mt-2 text-xs leading-5 text-neutral-500 italic">{source.notes}</p>
          )}
        </div>
      </div>

      {isLink && (
        <ExternalLink
          size={15}
          className="shrink-0 text-neutral-600 transition group-hover:text-neutral-300 mt-0.5"
          aria-hidden="true"
        />
      )}
    </Wrapper>
  );
}

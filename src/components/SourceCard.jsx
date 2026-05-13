import { ExternalLink, FileText, Newspaper, Scale, Link } from 'lucide-react';
import Badge from './ui/Badge';

const typeIcons = {
  notícia: Newspaper,
  documento: FileText,
  judicial: Scale,
};

export default function SourceCard({ source }) {
  const Icon = typeIcons[source.type] ?? Link;
  const isLink = Boolean(source.url);

  const Wrapper = isLink ? 'a' : 'div';
  const wrapperProps = isLink
    ? { href: source.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:bg-white/[0.07]"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 text-neutral-500 transition group-hover:text-neutral-300">
          <Icon size={16} aria-hidden="true" />
        </div>
        <div>
          <p className="font-medium text-neutral-200 transition group-hover:text-white">
            {source.title}
          </p>
          {(source.vehicle || source.date) && (
            <p className="mt-1 text-xs text-neutral-500">
              {source.vehicle}
              {source.vehicle && source.date ? ' · ' : ''}
              {source.date}
            </p>
          )}
          {source.type && <Badge className="mt-2">{source.type}</Badge>}
        </div>
      </div>

      {isLink && (
        <ExternalLink
          size={16}
          className="shrink-0 text-neutral-600 transition group-hover:text-neutral-300"
          aria-hidden="true"
        />
      )}
    </Wrapper>
  );
}

import { motion } from 'framer-motion';
import { staggerItem } from '../animations/fadeAnimations';
import Badge from './ui/Badge';

export default function TimelineItem({ item }) {
  return (
    <motion.div variants={staggerItem} className="relative border-l border-white/10 pl-6">
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-white" />

      <div className="flex flex-wrap items-center gap-2">
        {item.year && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            {item.year}
          </p>
        )}
        {item.legalStatus && (
          <Badge variant={item.legalStatus}>{item.legalStatus}</Badge>
        )}
      </div>

      <h4 className="mt-2 text-base font-semibold text-white sm:text-lg">{item.title}</h4>
      <p className="mt-2 text-sm leading-6 text-neutral-400">{item.text}</p>

      {item.source && (
        <p className="mt-2 text-xs text-neutral-600">
          Fonte:{' '}
          {item.sourceUrl ? (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline hover:text-neutral-300 transition"
            >
              {item.source}
            </a>
          ) : (
            <span className="text-neutral-500">{item.source}</span>
          )}
        </p>
      )}
    </motion.div>
  );
}

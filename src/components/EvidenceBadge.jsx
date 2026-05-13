import { EVIDENCE_LEVELS } from '../constants/evidenceLevels';

export default function EvidenceBadge({ level }) {
  const config = EVIDENCE_LEVELS[level];
  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${config.color}`}
    >
      {config.label}
    </span>
  );
}

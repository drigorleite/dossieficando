import { PROPOSAL_DETAIL_LEVELS } from '../../constants/proposalDetailLevels';

export default function ProposalDetailBadge({ level }) {
  const config = PROPOSAL_DETAIL_LEVELS[level];

  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${config.color}`}
    >
      {config.label}
    </span>
  );
}

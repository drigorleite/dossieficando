import lula from './lula';
import flavioBolsonaro from './flavioBolsonaro';
import renanSantos from './renanSantos';
import romeuZema from './romeuZema';
import ronaldoCaiado from './ronaldoCaiado';
import { campaignProposals2026 } from './campaignProposals2026';

const baseCandidates = [
  lula,
  flavioBolsonaro,
  renanSantos,
  romeuZema,
  ronaldoCaiado,
];

const enrichedCandidates = baseCandidates.map((candidate) => {
  const campaign = campaignProposals2026[candidate.slug];

  if (!campaign) return candidate;

  return {
    ...candidate,
    campaign2026: {
      candidacyStatus: campaign.candidacyStatus,
      programStatus: campaign.programStatus,
      lastVerified: campaign.lastVerified,
    },
    proposals: campaign.proposals,
  };
});

const additionalCandidates = Object.entries(campaignProposals2026)
  .filter(([slug]) => !baseCandidates.some((candidate) => candidate.slug === slug))
  .map(([slug, campaign]) => ({
    id: slug,
    slug,
    name: slug === 'rui-costa-pimenta' ? 'Rui Costa Pimenta' : slug,
    profile: {},
    campaign2026: {
      candidacyStatus: campaign.candidacyStatus,
      programStatus: campaign.programStatus,
      lastVerified: campaign.lastVerified,
    },
    proposals: campaign.proposals,
    sections: {},
  }));

export const modularCandidates = [
  ...enrichedCandidates,
  ...additionalCandidates,
];

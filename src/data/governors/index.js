import { spGovernorCandidates } from './sp';
import { rjGovernorCandidates } from './rj';
import { mgGovernorCandidates } from './mg';
import { scGovernorCandidates } from './sc';
import { prGovernorCandidates } from './pr';
import { msGovernorCandidates } from './ms';
import { mtGovernorCandidates } from './mt';
import { maGovernorCandidates } from './ma';
import { amGovernorCandidates } from './am';
import { paGovernorCandidates } from './pa';
import { peGovernorCandidates } from './pe';

export const governorsByState = {
  sp: spGovernorCandidates,
  rj: rjGovernorCandidates,
  mg: mgGovernorCandidates,
  sc: scGovernorCandidates,
  pr: prGovernorCandidates,
  ms: msGovernorCandidates,
  mt: mtGovernorCandidates,
  ma: maGovernorCandidates,
  am: amGovernorCandidates,
  pa: paGovernorCandidates,
  pe: peGovernorCandidates,
};

export const allGovernors = Object.values(governorsByState).flat();

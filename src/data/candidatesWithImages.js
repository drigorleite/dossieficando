import { candidates } from './candidates';
import { getCandidateImage } from '../utils/candidateImages';

export const candidatesWithImages = candidates.map((candidate) => ({
  ...candidate,
  image: getCandidateImage(candidate),
}));

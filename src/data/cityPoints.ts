import { avilaPoints } from '@/pages/Avila/avilaPoints';
import { cataniaPoints } from '@/pages/Catania/cataniaPoints';
import type { PointOfInterest } from '@/types/tour';

export interface CityDataset {
  countrySlug: string;
  points: PointOfInterest[];
}

export const cityDatasets: Record<string, CityDataset> = {
  avila: {
    countrySlug: 'spain',
    points: avilaPoints,
  },
  catania: {
    countrySlug: 'italy',
    points: cataniaPoints,
  },
};

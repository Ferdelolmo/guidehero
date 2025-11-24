import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';
import { cataniaPoints } from '@/pages/Catania/cataniaPoints';
import type { PointOfInterest } from '@/types/tour';

export interface CataniaPlacesContent {
  heading: string;
  loading: string;
  locationActive: string;
  locationError: string;
  points: PointOfInterest[];
}

export const getCataniaPlacesContent = (language: Language): CataniaPlacesContent => {
  const { catania } = getTranslations(language);

  return {
    heading: catania.listHeading,
    loading: catania.loading,
    locationActive: catania.locationActive,
    locationError: catania.locationError,
    points: cataniaPoints,
  };
};

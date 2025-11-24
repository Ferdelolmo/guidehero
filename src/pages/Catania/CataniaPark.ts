import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export interface CataniaParkContent {
  title: string;
  description: string;
}

export const getCataniaParkContent = (language: Language): CataniaParkContent => {
  const { catania } = getTranslations(language);

  return {
    title: catania.parkAndGoTitle,
    description: catania.parkAndGoDescription,
  };
};

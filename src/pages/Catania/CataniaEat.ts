import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export interface CataniaEatContent {
  title: string;
  description: string;
}

export const getCataniaEatContent = (language: Language): CataniaEatContent => {
  const { catania } = getTranslations(language);

  return {
    title: catania.foodTitle,
    description: catania.foodDescription,
  };
};

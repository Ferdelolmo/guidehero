import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export interface AvilaEatContent {
  title: string;
  description: string;
}

export const getAvilaEatContent = (language: Language): AvilaEatContent => {
  const { avila } = getTranslations(language);

  return {
    title: avila.foodTitle,
    description: avila.foodDescription,
  };
};

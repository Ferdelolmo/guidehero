import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export interface AvilaParkContent {
  title: string;
  description: string;
}

export const getAvilaParkContent = (language: Language): AvilaParkContent => {
  const { avila } = getTranslations(language);

  return {
    title: avila.parkAndGoTitle,
    description: avila.parkAndGoDescription,
  };
};

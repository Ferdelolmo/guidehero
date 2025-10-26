import type { LocalizedText } from '@/types/i18n';

export interface PointOfInterest {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  extendedSections?: POIExtendedSection[];
  coordinates: [number, number]; // [latitude, longitude]
  images: string[];
  videoUrl?: string;
  audioUrl?: LocalizedText;
  category: 'monument' | 'church' | 'museum' | 'viewpoint' | 'square';
  duration: number; // minutes
  order: number;
}

export interface POIExtendedSection {
  title?: LocalizedText;
  paragraphs: LocalizedText[];
  listItems?: LocalizedText[];
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

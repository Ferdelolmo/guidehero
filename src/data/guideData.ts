export interface CityGuide {
  name: string;
  description: string;
  citySlug: string;
  imageUrl: string;
  available: boolean;
  buttonLabel?: string;
}

export interface CountryGuide {
  name: string;
  description: string;
  countrySlug: string;
  backgroundImageUrl: string;
  flagImageUrl: string;
  cities: CityGuide[];
}

export const guideData: CountryGuide[] = [
  {
    name: 'Spain',
    description: 'Mediterranean heritage, vibrant architecture, and sun-drenched plazas.',
    countrySlug: 'spain',
    backgroundImageUrl: 'https://www.insightvacations.com/media/xqom1ben/highlights-spain-guided-tour-62.jpg?center=0.447776661558679%2C0.574375067265142&format=webp&mode=crop&width=1200&height=600&quality=80',
    flagImageUrl: 'https://placehold.co/96x64?text=ES',
    cities: [
      {
        name: 'Ávila',
        description: 'Medieval walls, UNESCO heritage, and a curated walking tour.',
        citySlug: 'avila',
        imageUrl: 'https://www.hola.com/horizon/landscape/ca3e997be14f-avila-murallas-panoramica-t.jpg',
        available: true,
        buttonLabel: 'Start Exploring',
      },
      {
        name: 'Barcelona',
        description: 'Gaudí landmarks, Gothic quarters, and seaside promenades.',
        citySlug: 'barcelona',
        imageUrl: 'https://catalonia.com/documents/176177/209064/catalonia-trade-and-investment-barcelona-ranked-8th-best-city-in-the-world.jpg/bfab1a81-b42b-fc40-4a2d-73034301fb02?t=1717594354035',
        available: false,
        buttonLabel: 'Coming Soon',
      },
    ],
  },
  {
    name: 'Ireland',
    description: 'Coastal cliffs, literary traditions, and a warm céad míle fáilte.',
    countrySlug: 'ireland',
    backgroundImageUrl: 'https://delivery.gfobcontent.com/api/public/content/41f974e0066e4042938460a94a844067?v=0dac6c64',
    flagImageUrl: 'https://placehold.co/96x64?text=IE',
    cities: [
      {
        name: 'Dublin',
        description: 'Crafting an audio-guided walk through the heart of Dublin.',
        citySlug: 'dublin',
        imageUrl: 'https://assets.cityexperiences.com/wp-content/uploads/2023/03/Temple-Bar-Dublin.jpg',
        available: false,
        buttonLabel: 'Coming Soon',
      },
    ],
  },
];

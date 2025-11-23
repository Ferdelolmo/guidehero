import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export type PriceCategory = 'economic' | 'fair' | 'upscale';

interface TypicalDish {
  name: string;
  description: string;
}

export interface RestaurantRecommendation {
  name: string;
  description: string;
  priceCategory: PriceCategory;
  priceLabel: string;
  mapUrl: string;
}

export interface CataniaEatContent {
  title: string;
  description: string;
  heroImage: string;
  cuisineDescription: string;
  typicalDishes: TypicalDish[];
  restaurants: RestaurantRecommendation[];
}

const priceLabels: Record<PriceCategory, string> = {
  economic: 'Economic',
  fair: 'Fair',
  upscale: 'Upscale',
};

const typicalDishes: TypicalDish[] = [
  {
    name: 'Pasta alla Norma',
    description:
      'Rigatoni or maccheroni tossed with tomato sauce, silky fried eggplant, salty ricotta salata, and basil—a love letter to composer Vincenzo Bellini.',
  },
  {
    name: 'Arancini',
    description:
      'Crispy fried rice cones stuffed with ragù, mozzarella, and peas (or pistachio cream if you crave something different).',
  },
  {
    name: 'Pesce Spada alla Ghiotta',
    description:
      'Swordfish seared with capers, olives, tomato, and plenty of Sicilian olive oil, channeling Catania’s waterfront grills.',
  },
  {
    name: 'Granita con Brioche',
    description:
      'Breakfast of champions: almond or pistachio granita paired with a warm brioche “col tuppo”, perfect in the morning heat.',
  },
];

const restaurantRecommendations: RestaurantRecommendation[] = [
  {
    name: 'Trattoria da Antonio',
    description:
      'A beloved trattoria steps from Piazza del Duomo serving market-fresh seafood pastas and hearty secondi in a casual setting.',
    priceCategory: 'fair',
    priceLabel: priceLabels.fair,
    mapUrl: 'https://maps.google.com/?q=Trattoria+da+Antonio+Catania',
  },
  {
    name: 'Osteria Antica Marina',
    description:
      'Inside La Pescheria market, this osteria builds menus around the day’s catch—expect crudo platters, grilled calamari, and killer arancini.',
    priceCategory: 'fair',
    priceLabel: priceLabels.fair,
    mapUrl: 'https://maps.google.com/?q=Osteria+Antica+Marina+Catania',
  },
  {
    name: 'Me Cumpari Turiddu',
    description:
      'Retro Sicilian vibes, vintage ceramics, and slow-food storytelling with recipes that highlight Mount Etna’s volcanic terroir.',
    priceCategory: 'upscale',
    priceLabel: priceLabels.upscale,
    mapUrl: 'https://maps.google.com/?q=Me+Cumpari+Turiddu+Catania',
  },
  {
    name: 'Scirocco Sicilian Fish Lab',
    description:
      'Street-food counter next to the fish market frying up nero di seppia arancini, tuna burgers, and cones of piping-hot fritto misto.',
    priceCategory: 'economic',
    priceLabel: priceLabels.economic,
    mapUrl: 'https://maps.google.com/?q=Scirocco+Sicilian+Fish+Lab',
  },
  {
    name: 'Il Sale Art Cafe',
    description:
      'Contemporary bistro near Via Santa Filomena offering creative takes on classics plus natural wines from Etna and the Aeolian Islands.',
    priceCategory: 'upscale',
    priceLabel: priceLabels.upscale,
    mapUrl: 'https://maps.google.com/?q=Il+Sale+Art+Cafe+Catania',
  },
];

export const getCataniaEatContent = (language: Language): CataniaEatContent => {
  const { catania } = getTranslations(language);

  return {
    title: catania.foodTitle,
    description: catania.foodDescription,
    heroImage:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
    cuisineDescription:
      'Sicilian cuisine is a crossroads of cultures—Arab citrus, Spanish chocolate, Norman wheat, and the ever-present flavors of the Mediterranean. Meals begin with sun-drenched produce, continue with seafood hauled from the Ionian Sea, and end with sweets perfumed by pistachio, almond, and citrus blossom honey.',
    typicalDishes,
    restaurants: restaurantRecommendations,
  };
};

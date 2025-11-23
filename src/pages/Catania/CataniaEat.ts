import type { Language } from '@/types/i18n';

export type PriceCategory = 'economic' | 'fair' | 'upscale';
type DishKey = 'pastaAllaNorma' | 'arancini' | 'pesceSpadaAllaGhiotta' | 'granitaConBrioche';
type RestaurantKey =
  | 'trattoriaDaAntonio'
  | 'osteriaAnticaMarina'
  | 'meCumpariTuriddu'
  | 'sciroccoSicilianFishLab'
  | 'ilSaleArtCafe';

export interface TypicalDish {
  name: string;
  description: string;
  image: string;
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
  heroAlt: string;
  cuisineHeading: string;
  cuisineDescription: string;
  typicalDishesHeading: string;
  restaurantsHeading: string;
  viewOnMapsLabel: string;
  typicalDishes: TypicalDish[];
  restaurants: RestaurantRecommendation[];
}

const heroImage =
  'https://i.imgur.com/U773qtH.jpeg';

const dishMetadata: Array<{ key: DishKey; image: string }> = [
  {
    key: 'pastaAllaNorma',
    image: 'https://imag.bonviveur.com/pasta-alla-norma.jpg',
  },
  {
    key: 'arancini',
    image: 'https://arancinotto.com/cdn/shop/articles/Ricette-71_f58f7b03-18f3-4ce2-9312-1c6aa3835025.jpg?v=1758552148',
  },
  {
    key: 'pesceSpadaAllaGhiotta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMnSvbuLpmTbLGa5OATHSyBc67RiE9sk1Ag&s',
  },
  {
    key: 'granitaConBrioche',
    image: 'https://www.coravin.com.es/cdn/shop/articles/AdobeStock_245883896_222f3921-ebc9-4369-b7f5-e642e7352796.jpg?v=1750420421',
  },
];

const restaurantMetadata: Array<{ key: RestaurantKey; priceCategory: PriceCategory; mapUrl: string }> = [
  {
    key: 'trattoriaDaAntonio',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Trattoria+da+Antonio+Catania',
  },
  {
    key: 'osteriaAnticaMarina',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Osteria+Antica+Marina+Catania',
  },
  {
    key: 'meCumpariTuriddu',
    priceCategory: 'upscale',
    mapUrl: 'https://maps.google.com/?q=Me+Cumpari+Turiddu+Catania',
  },
  {
    key: 'sciroccoSicilianFishLab',
    priceCategory: 'economic',
    mapUrl: 'https://maps.google.com/?q=Scirocco+Sicilian+Fish+Lab',
  },
  {
    key: 'ilSaleArtCafe',
    priceCategory: 'upscale',
    mapUrl: 'https://maps.google.com/?q=Il+Sale+Art+Cafe+Catania',
  },
];

const translations: Record<
  Language,
  {
    title: string;
    description: string;
    heroAlt: string;
    cuisineHeading: string;
    cuisineDescription: string;
    typicalDishesHeading: string;
    restaurantsHeading: string;
    viewOnMapsLabel: string;
    typicalDishes: Record<DishKey, { name: string; description: string }>;
    restaurants: Record<RestaurantKey, { name: string; description: string }>;
    priceLabels: Record<PriceCategory, string>;
  }
> = {
  en: {
    title: 'Taste the city: where and what to eat',
    description: 'Sample Sicily’s markets, trattorias, and bold flavours with hand-picked recommendations.',
    heroAlt: 'Traditional Sicilian pranzo spread',
    cuisineHeading: 'Sicilian cuisine essentials',
    cuisineDescription:
      'Sicilian food reflects a collision of cultures—Arab citrus, Norman grains, and Spanish chocolate—anchored by vibrant seafood and embraceable sweets.',
    typicalDishesHeading: 'Typical dishes',
    restaurantsHeading: 'Restaurant recommendations',
    viewOnMapsLabel: 'View on Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni or maccheroni with tomato sauce, fried eggplant, ricotta salata, and basil—a tribute to Vincenzo Bellini.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Crispy fried rice cones filled with ragù, mozzarella, and peas (or pistachio cream for a twist).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Swordfish seared with capers, olives, tomatoes, and generous Sicilian olive oil.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Almond or pistachio granita paired with warm brioche “col tuppo,” perfect in the morning heat.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'A beloved trattoria steps from Piazza del Duomo serving market-fresh seafood pastas and hearty secondi.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Inside La Pescheria market, this osteria builds menus around the day’s catch—crudo platters, grilled calamari, and killer arancini.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Retro Sicilian vibes, vintage ceramics, and slow-food storytelling with recipes steeped in Etna’s volcanic terroir.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Street-food counter next to the fish market frying up nero di seppia arancini, tuna burgers, and cones of fritto misto.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Contemporary bistro near Via Santa Filomena offering creative takes on classics plus natural wines.',
      },
    },
    priceLabels: {
      economic: 'Economic',
      fair: 'Fair',
      upscale: 'Upscale',
    },
  },
  es: {
    title: 'Saborea la ciudad: dónde y qué comer',
    description: 'Descubre mercados, trattorías y delicias que cuentan la historia gastronómica de Sicilia.',
    heroAlt: 'Mesa tradicional de un pranzo siciliano',
    cuisineHeading: 'Esenciales de la cocina siciliana',
    cuisineDescription:
      'La cocina siciliana mezcla cítricos árabes, chocolate español y trigo normando con mariscos al grill y postres perfumados.',
    typicalDishesHeading: 'Platos típicos',
    restaurantsHeading: 'Recomendaciones gastronómicas',
    viewOnMapsLabel: 'Ver en Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rellena de historia: pasta larga con salsa de tomate, berenjenas fritas y ricotta salada.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Conos de arroz crujientes rellenos de ragú, mozzarella y guisantes (o crema de pistacho).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Pescado espada sellado con alcaparras, aceitunas, tomate y mucho aceite siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita de almendra o pistacho acompañada de brioche “col tuppo”, ideal para el calor.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria frente a Piazza del Duomo con pastas y platos principales recién pescados.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Dentro de La Pescheria, se sirve la pesca del día con crudos y calamari a la parrilla.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Ambiente retro con recetas familiares que celebran el terroir volcánico de Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Puesto informal cerca del mercado con arancini negros y frituras variadas.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Bistró moderno cerca de Via Santa Filomena con platos creativos y vinos naturales.',
      },
    },
    priceLabels: {
      economic: 'Económico',
      fair: 'Moderado',
      upscale: 'Exclusivo',
    },
  },
  it: {
    title: 'A Napoli che in Spagna, basta che si mangia',
    description: 'Scopri mercati, trattorie e street food imperdibili per assaporare Catania.',
    heroAlt: 'Tavola tradizionale di un pranzo siciliano',
    cuisineHeading: 'Essenziali della cucina siciliana',
    cuisineDescription:
      'La cucina siciliana fonde agrumi arabi, cioccolato spagnolo e grano normanno con antipasti saporiti e pesci grigliati.',
    typicalDishesHeading: 'Piatti tipici',
    restaurantsHeading: 'Raccomandazioni gastronomiche',
    viewOnMapsLabel: 'Visualizza su Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni o maccheroni avvolti nel sugo di pomodoro, melanzane fritte e ricotta salata.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Coni di riso croccanti ripieni di ragù, mozzarella e piselli (o crema di pistacchio).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Pesce spada scottato con capperi, olive, pomodoro e tanto olio d’oliva siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita di mandorla o pistacchio accompagnata da brioche “col tuppo”, perfetta al mattino.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria amata vicino a Piazza del Duomo con pasta di mare e secondi sostanziosi.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'All’interno della Pescheria propone il pescato del giorno, crudi e calamari alla griglia.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Atmosfere retrò con ricette lente che esaltano il territorio vulcanico dell’Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Chiosco vicino al mercato con arancini al nero di seppia e fritti vari.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Bistrot moderno vicino a Via Santa Filomena con rivisitazioni e vini naturali.',
      },
    },
    priceLabels: {
      economic: 'Economico',
      fair: 'Giusto',
      upscale: 'Elegante',
    },
  },
  fr: {
    title: 'Savourez la ville : où et quoi manger',
    description: 'Nos conseils gourmands pour les spécialités, cafés et douceurs incontournables de Catane.',
    heroAlt: 'Table traditionnelle d’un pranzo sicilien',
    cuisineHeading: 'Essentiels de la cuisine sicilienne',
    cuisineDescription:
      'La cuisine sicilienne combine agrumes arabes, chocolat espagnol et blé normand avec antipasti relevés et poissons grillés.',
    typicalDishesHeading: 'Plats typiques',
    restaurantsHeading: 'Recommandations gourmandes',
    viewOnMapsLabel: 'Voir sur Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni ou maccheroni enrobés de sauce tomate, aubergines frits et ricotta salée.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Cônes de riz croustillants farcis de ragù, mozzarella et petits pois.',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Espadon saisi avec câpres, olives, tomates et beaucoup d’huile sicilienne.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita d’amande ou de pistache accompagnée d’un brioche “col tuppo”, parfaite le matin.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria prisée près de la Piazza del Duomo avec des pâtes de la mer et des plats copieux.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Située dans La Pescheria, elle met en valeur les poissons du jour avec frutti di mare grillés.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Ambiance rétro et recettes lentes célébrant le terroir volcanique de l’Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Tremplin de street-food près du marché avec arancini noirs et fritures variées.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Bistrot contemporain proche de la Via Santa Filomena, revisitant les classiques.',
      },
    },
    priceLabels: {
      economic: 'Économique',
      fair: 'Juste',
      upscale: 'Gastronomique',
    },
  },
  pt: {
    title: 'Saboreie a cidade: onde e o que comer',
    description: 'Conheça mercados, trattorias e petiscos que revelam a essência de Catânia.',
    heroAlt: 'Mesa tradicional de um pranzo siciliano',
    cuisineHeading: 'Essenciais da culinária siciliana',
    cuisineDescription:
      'A culinária siciliana mistura cítricos árabes, chocolate espanhol e trigo normando com antepastos marcantes e peixes no Jônico.',
    typicalDishesHeading: 'Pratos típicos',
    restaurantsHeading: 'Recomendações gastronômicas',
    viewOnMapsLabel: 'Ver no Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni ou maccheroni envolvidos em molho de tomate, berinjela frita e ricota salgada.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Cones crocantes de arroz recheados com ragù, mussarela e ervilhas.',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Peixe espada dourado com alcaparras, azeitonas e muito azeite siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita com Brioche',
        description:
          'Granita de amêndoa ou pistache servida com brioche “col tuppo” quente.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria querida perto da Piazza del Duomo com massas do mar e pratos principais generosos.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Dentro da Pescheria, menus baseados no peixe do dia, crudi e calamares grelhados.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Vibrações retrô que exaltam receitas lentas do Etna vulcânico.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Ponto informal com arancini negros e frituras mistas.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Bistrô moderno na Via Santa Filomena com criações autorais e vinhos naturais.',
      },
    },
    priceLabels: {
      economic: 'Econômico',
      fair: 'Justo',
      upscale: 'Fino',
    },
  },
};

export const getCataniaEatContent = (language: Language): CataniaEatContent => {
  const locale = translations[language] ?? translations.en;

  const typicalDishes: TypicalDish[] = dishMetadata.map(({ key, image }) => ({
    name: locale.typicalDishes[key].name,
    description: locale.typicalDishes[key].description,
    image,
  }));

  const restaurants: RestaurantRecommendation[] = restaurantMetadata.map((restaurant) => ({
    name: locale.restaurants[restaurant.key].name,
    description: locale.restaurants[restaurant.key].description,
    priceCategory: restaurant.priceCategory,
    priceLabel: locale.priceLabels[restaurant.priceCategory],
    mapUrl: restaurant.mapUrl,
  }));

  return {
    title: locale.title,
    description: locale.description,
    heroImage,
    heroAlt: locale.heroAlt,
    cuisineHeading: locale.cuisineHeading,
    cuisineDescription: locale.cuisineDescription,
    typicalDishesHeading: locale.typicalDishesHeading,
    restaurantsHeading: locale.restaurantsHeading,
    typicalDishes,
    restaurants,
    viewOnMapsLabel: locale.viewOnMapsLabel,
  };
};

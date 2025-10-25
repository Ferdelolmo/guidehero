import type { LocalizedText } from '@/types/i18n';

export interface CityGuide {
  name: LocalizedText;
  description: LocalizedText;
  citySlug: string;
  imageUrl: string;
  available: boolean;
}

export interface CountryGuide {
  name: LocalizedText;
  description: LocalizedText;
  countrySlug: string;
  backgroundImageUrl: string;
  flagImageUrl: string;
  cities: CityGuide[];
}

const createText = (values: LocalizedText): LocalizedText => values;

export const guideData: CountryGuide[] = [
  {
    name: createText({
      en: 'Spain',
      es: 'España',
      it: 'Spagna',
      pt: 'Espanha',
      fr: 'Espagne',
    }),
    description: createText({
      en: 'Mediterranean heritage, vibrant architecture, and sun-drenched plazas.',
      es: 'Herencia mediterránea, arquitectura vibrante y plazas bañadas por el sol.',
      it: 'Eredità mediterranea, architettura vibrante e piazze baciate dal sole.',
      pt: 'Herança mediterrânea, arquitetura vibrante e praças banhadas de sol.',
      fr: 'Héritage méditerranéen, architecture vibrante et places baignées de soleil.',
    }),
    countrySlug: 'spain',
    backgroundImageUrl: 'https://www.insightvacations.com/media/xqom1ben/highlights-spain-guided-tour-62.jpg?center=0.447776661558679%2C0.574375067265142&format=webp&mode=crop&width=1200&height=600&quality=80',
    flagImageUrl: 'https://placehold.co/96x64?text=ES',
    cities: [
      {
        name: createText({
          en: 'Ávila',
          es: 'Ávila',
          it: 'Ávila',
          pt: 'Ávila',
          fr: 'Ávila',
        }),
        description: createText({
          en: 'Medieval walls, UNESCO heritage, and a curated walking tour.',
          es: 'Murallas medievales, patrimonio de la UNESCO y un recorrido a pie cuidadosamente diseñado.',
          it: 'Mura medievali, patrimonio UNESCO e un percorso a piedi curato nei dettagli.',
          pt: 'Muralhas medievais, patrimônio da UNESCO e um roteiro a pé cuidadosamente curado.',
          fr: 'Remparts médiévaux, site classé à l\'UNESCO et une promenade guidée soigneusement élaborée.',
        }),
        citySlug: 'avila',
        imageUrl: 'https://www.pilgrimagetraveler.com/images/44-avila-at-night.jpg',
        available: true,
      },
      {
        name: createText({
          en: 'Barcelona',
          es: 'Barcelona',
          it: 'Barcellona',
          pt: 'Barcelona',
          fr: 'Barcelone',
        }),
        description: createText({
          en: 'Gaudí landmarks, Gothic quarters, and seaside promenades arriving soon.',
          es: 'Los iconos de Gaudí, los barrios góticos y los paseos marítimos llegarán muy pronto.',
          it: 'I luoghi simbolo di Gaudí, i quartieri gotici e le passeggiate sul mare arriveranno presto.',
          pt: 'Os marcos de Gaudí, os bairros góticos e os passeios à beira-mar chegam em breve.',
          fr: 'Les sites de Gaudí, les quartiers gothiques et les promenades en bord de mer arrivent bientôt.',
        }),
        citySlug: 'barcelona',
        imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg',
        available: false,
      },
    ],
  },
  {
    name: createText({
      en: 'Ireland',
      es: 'Irlanda',
      it: 'Irlanda',
      pt: 'Irlanda',
      fr: 'Irlande',
    }),
    description: createText({
      en: 'Coastal cliffs, literary traditions, and a warm céad míle fáilte.',
      es: 'Acantilados costeros, tradiciones literarias y una cálida céad míle fáilte.',
      it: 'Scogliere costiere, tradizioni letterarie e un caloroso céad míle fáilte.',
      pt: 'Falésias costeiras, tradições literárias e um caloroso céad míle fáilte.',
      fr: 'Falaises côtières, traditions littéraires et un chaleureux céad míle fáilte.',
    }),
    countrySlug: 'ireland',
    backgroundImageUrl: 'https://images.squarespace-cdn.com/content/v1/5b963169620b851ee93f9abf/1536571024201-QAGH4VNH175JMNMHLG4D/ireland-castle.jpg',
    flagImageUrl: 'https://placehold.co/96x64?text=IE',
    cities: [
      {
        name: createText({
          en: 'Dublin',
          es: 'Dublín',
          it: 'Dublino',
          pt: 'Dublin',
          fr: 'Dublin',
        }),
        description: createText({
          en: 'Crafting an audio-guided walk through the heart of Dublin.',
          es: 'Diseñando un recorrido con audio por el corazón de Dublín.',
          it: 'Stiamo creando una passeggiata con audioguida nel cuore di Dublino.',
          pt: 'Estamos criando um passeio com áudio pelo coração de Dublin.',
          fr: 'Nous concevons une promenade audio-guidée au cœur de Dublin.',
        }),
        citySlug: 'dublin',
        imageUrl: 'https://placehold.co/600x400?text=Ha%27penny+Bridge',
        available: false,
      },
    ],
  },
  {
    name: createText({
      en: 'Italy',
      es: 'Italia',
      it: 'Italia',
      pt: 'Itália',
      fr: 'Italie',
    }),
    description: createText({
      en: 'Sicilian baroque, volcanic energy, and seaside piazzas bursting with life.',
      es: 'Barroco siciliano, energía volcánica y piazzas costeras llenas de vida.',
      it: 'Barocco siciliano, energia vulcanica e piazze sul mare piene di vita.',
      pt: 'Barroco siciliano, energia vulcânica e praças à beira-mar cheias de vida.',
      fr: 'Baroque sicilien, énergie volcanique et piazzas côtières pleines de vie.',
    }),
    countrySlug: 'italy',
    backgroundImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Catania_-_Piazza_Duomo_e_Via_Etnea.jpg',
    flagImageUrl: 'https://placehold.co/96x64?text=IT',
    cities: [
      {
        name: createText({
          en: 'Catania',
          es: 'Catania',
          it: 'Catania',
          pt: 'Catânia',
          fr: 'Catane',
        }),
        description: createText({
          en: 'Baroque palaces, bustling markets, and Etna views shape this Sicilian port.',
          es: 'Palacios barrocos, mercados bulliciosos y vistas del Etna dan forma a este puerto siciliano.',
          it: 'Palazzi barocchi, mercati vivaci e scorci dell\'Etna plasmano questo porto siciliano.',
          pt: 'Palácios barrocos, mercados animados e vistas do Etna moldam este porto siciliano.',
          fr: 'Palais baroques, marchés animés et vues sur l\'Etna façonnent ce port sicilien.',
        }),
        citySlug: 'catania',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Catania%2C_Piazza_del_Duomo_e_Cattedrale_di_Sant%27Agata.jpg',
        available: true,
      },
    ],
  },
];

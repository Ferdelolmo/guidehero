import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export type ParkingType = 'free' | 'paid';

export interface ParkSpot {
  name: string;
  description: string;
  type: ParkingType;
}

export interface ParkSection {
  title: string;
  type: ParkingType;
  hints: string[];
  spots: ParkSpot[];
}

export interface CataniaParkContent {
  title: string;
  description: string;
  sections: ParkSection[];
  labels: Record<ParkingType, string>;
}

interface ParkSectionBuilderParams {
  freeTitle: string;
  freeHints: [string, string];
  freeSpotName: string;
  freeSpotDescription: string;
  paidTitle: string;
  paidHints: [string, string];
  paidSpots: Array<{ name: string; description: string }>;
}

const buildSections = (params: ParkSectionBuilderParams): ParkSection[] => [
  {
    title: params.freeTitle,
    type: 'free',
    hints: params.freeHints,
    spots: [
      {
        name: params.freeSpotName,
        description: params.freeSpotDescription,
        type: 'free',
      },
    ],
  },
  {
    title: params.paidTitle,
    type: 'paid',
    hints: params.paidHints,
    spots: params.paidSpots.map((spot) => ({ ...spot, type: 'paid' })),
  },
];

const parkSectionsByLanguage: Record<Language, ParkSection[]> = {
  en: buildSections({
    freeTitle: 'Streets/Areas with Free Parking',
    freeHints: [
      'Areas with white lines on the street generally indicate free parking; these are less common in the city center and more on the outskirts.',
      'Streets outside the ZTL (Limited Traffic Zone) of the historic center have more free parking spots.',
    ],
    freeSpotName: 'Via Fischetti (off Via Antonino di Sangiuliano)',
    freeSpotDescription: 'Near the center, no lines or signs, free parking available for quieter strolls around the historic core.',
    paidTitle: 'Streets/Areas with Paid Parking',
    paidHints: [
      'Streets with blue lines generally require payment between 8:30–13:30 and 15:00–20:00; this is most common in busy central areas.',
      'Historic center perimeter streets such as Via A. di Sangiuliano, Via Monsignor Ventimiglia, Via Vittorio Emanuele, and Via Raddusa surround the ZTL with regulated paid parking.',
    ],
    paidSpots: [
      {
        name: 'Corso Italia and Via XX Settembre',
        description:
          'Blue-lined spaces close to the center and main attractions offer paid parking with easy walking access to the historic core.',
      },
      {
        name: "Via Sant'Euplio / Parcheggio Saba Catania Centro",
        description:
          'Secure paid parking garage favored for longer stays near the northern edge of the historic center.',
      },
      {
        name: 'Piazza Borsellino (Porto area)',
        description:
          'Underground paid parking facility with direct access to the waterfront and Mercato del Pesce.',
      },
    ],
  }),
  es: buildSections({
    freeTitle: 'Calles/Áreas con Estacionamiento Gratuito',
    freeHints: [
      'Las zonas con líneas blancas en la calle generalmente indican estacionamiento gratuito; son menos comunes en el centro y más frecuentes en las afueras.',
      'Las calles fuera de la ZTL (Zona de Tráfico Limitado) del centro histórico tienen más plazas gratuitas.',
    ],
    freeSpotName: 'Via Fischetti (cerca de Via Antonino di Sangiuliano)',
    freeSpotDescription:
      'Cerca del centro, sin líneas ni señales, estacionamiento gratuito disponible para paseos tranquilos por el núcleo histórico.',
    paidTitle: 'Calles/Áreas con Estacionamiento de Pago',
    paidHints: [
      'Las calles con líneas azules suelen requerir pago entre las 8:30–13:30 y 15:00–20:00; es habitual en áreas céntricas concurridas.',
      'Las calles perimetrales del centro histórico como Via A. di Sangiuliano, Via Monsignor Ventimiglia, Via Vittorio Emanuele y Via Raddusa rodean la ZTL con estacionamiento regulado.',
    ],
    paidSpots: [
      {
        name: 'Corso Italia y Via XX Settembre',
        description:
          'Las plazas con líneas azules cerca del centro y las principales atracciones ofrecen estacionamiento de pago con acceso a pie al casco histórico.',
      },
      {
        name: 'Via Sant\'Euplio / Parcheggio Saba Catania Centro',
        description:
          'Aparcamiento seguro de pago preferido para estancias largas al borde norte del centro histórico.',
      },
      {
        name: 'Piazza Borsellino (zona del Puerto)',
        description:
          'Instalación subterránea de pago con acceso directo al frente marítimo y al Mercato del Pesce.',
      },
    ],
  }),
  fr: buildSections({
    freeTitle: 'Rues/Quartiers avec stationnement gratuit',
    freeHints: [
      'Les zones marquées de lignes blanches dans la rue indiquent généralement un stationnement gratuit ; elles sont moins fréquentes au centre-ville et plus en périphérie.',
      'Les rues hors de la ZTL (zone à circulation limitée) du centre historique offrent davantage de places gratuites.',
    ],
    freeSpotName: 'Via Fischetti (près de Via Antonino di Sangiuliano)',
    freeSpotDescription:
      'Près du centre, sans lignes ni panneaux, un stationnement gratuit permet de profiter d’une balade calme autour du cœur historique.',
    paidTitle: 'Rues/Quartiers avec stationnement payant',
    paidHints: [
      'Les rues avec des lignes bleues demandent généralement un paiement entre 8h30–13h30 et 15h00–20h00 ; c’est courant dans les zones centrales animées.',
      'Les rues périphériques du centre historique comme Via A. di Sangiuliano, Via Monsignor Ventimiglia, Via Vittorio Emanuele et Via Raddusa entourent la ZTL avec un stationnement réglementé.',
    ],
    paidSpots: [
      {
        name: 'Corso Italia et Via XX Settembre',
        description:
          'Les places à lignes bleues proches du centre et des principales attractions proposent un stationnement payant avec un accès piéton facile au cœur historique.',
      },
      {
        name: 'Via Sant\'Euplio / Parcheggio Saba Catania Centro',
        description:
          'Parking sécurisé payant apprécié pour les séjours plus longs au nord du centre historique.',
      },
      {
        name: 'Piazza Borsellino (quartier du Port)',
        description:
          'Parking souterrain payant avec un accès direct au front de mer et au Mercato del Pesce.',
      },
    ],
  }),
  it: buildSections({
    freeTitle: 'Strade/aree con parcheggio gratuito',
    freeHints: [
      'Le zone con linee bianche sulla strada indicano generalmente parcheggio gratuito; sono meno comuni in centro e più frequenti in periferia.',
      'Le strade fuori dalla ZTL (Zona a Traffico Limitato) del centro storico offrono più posti gratuiti.',
    ],
    freeSpotName: 'Via Fischetti (nei pressi di Via Antonino di Sangiuliano)',
    freeSpotDescription:
      'Vicino al centro, senza linee o segnaletica, parcheggio gratuito disponibile per passeggiate tranquille nel cuore storico.',
    paidTitle: 'Strade/aree con parcheggio a pagamento',
    paidHints: [
      'Le strade con linee blu richiedono solitamente pagamento tra le 8:30–13:30 e le 15:00–20:00; è comune nelle zone centrali più affollate.',
      'Le strade perimetrali del centro storico come Via A. di Sangiuliano, Via Monsignor Ventimiglia, Via Vittorio Emanuele e Via Raddusa circondano la ZTL con parcheggi regolamentati.',
    ],
    paidSpots: [
      {
        name: 'Corso Italia e Via XX Settembre',
        description:
          'Spazi con linee blu vicino al centro e alle attrazioni principali offrono parcheggio a pagamento con accesso pedonale al centro storico.',
      },
      {
        name: 'Via Sant\'Euplio / Parcheggio Saba Catania Centro',
        description:
          'Garage sicuro a pagamento ideale per soste più lunghe lungo il bordo nord del centro storico.',
      },
      {
        name: 'Piazza Borsellino (area Porto)',
        description:
          'Parcheggio sotterraneo a pagamento con accesso diretto al lungomare e al Mercato del Pesce.',
      },
    ],
  }),
  pt: buildSections({
    freeTitle: 'Ruas/Áreas com Estacionamento Gratuito',
    freeHints: [
      'Áreas com linhas brancas na rua geralmente indicam estacionamento gratuito; são menos comuns no centro e mais frequentes nos arredores.',
      'As ruas fora da ZTL (Zona de Tráfego Limitado) do centro histórico têm mais vagas gratuitas.',
    ],
    freeSpotName: 'Via Fischetti (próximo à Via Antonino di Sangiuliano)',
    freeSpotDescription:
      'Perto do centro, sem linhas nem sinais, estacionamento gratuito disponível para passeios tranquilos pelo núcleo histórico.',
    paidTitle: 'Ruas/Áreas com Estacionamento Pago',
    paidHints: [
      'Ruas com linhas azuis geralmente exigem pagamento entre 8h30–13h30 e 15h00–20h00; comum em áreas centrais movimentadas.',
      'As ruas na periferia do centro histórico como Via A. di Sangiuliano, Via Monsignor Ventimiglia, Via Vittorio Emanuele e Via Raddusa cercam a ZTL com estacionamento regulado.',
    ],
    paidSpots: [
      {
        name: 'Corso Italia e Via XX Settembre',
        description:
          'Vagas com linhas azuis próximas ao centro e às principais atrações oferecem estacionamento pago com fácil acesso a pé ao núcleo histórico.',
      },
      {
        name: 'Via Sant\'Euplio / Parcheggio Saba Catania Centro',
        description:
          'Estacionamento pago e seguro preferido para estadias mais longas na borda norte do centro histórico.',
      },
      {
        name: 'Piazza Borsellino (área do Porto)',
        description:
          'Garagem subterrânea paga com acesso direto ao calçadão e ao Mercato del Pesce.',
      },
    ],
  }),
};

const parkingLabelsByLanguage: Record<Language, Record<ParkingType, string>> = {
  en: { free: 'Free', paid: 'Paid' },
  es: { free: 'Gratis', paid: 'De pago' },
  fr: { free: 'Gratuit', paid: 'Payant' },
  it: { free: 'Gratuito', paid: 'A pagamento' },
  pt: { free: 'Gratuito', paid: 'Pago' },
};

export const getCataniaParkContent = (language: Language): CataniaParkContent => {
  const { catania } = getTranslations(language);
  const sections = parkSectionsByLanguage[language] ?? parkSectionsByLanguage.en;
  const labels = parkingLabelsByLanguage[language] ?? parkingLabelsByLanguage.en;

  return {
    title: catania.parkAndGoTitle,
    description: catania.parkAndGoDescription,
    sections,
    labels,
  };
};

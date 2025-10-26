import type { Language } from '@/types/i18n';

type CategoryKey = 'monument' | 'church' | 'museum' | 'viewpoint' | 'square';

interface HomeCopy {
  tagline: string;
  countryGuideLabel: string;
  viewCitiesCta: string;
}

interface CountryCopy {
  back: string;
  notFoundTitle: string;
  notFoundMessage: string;
  notFoundCta: string;
  heroTitle: string;
  heroSubtitle: string;
  cityCount: (count: number) => string;
  availableMessage: string;
  comingSoonMessage: string;
  ctaAvailable: string;
  ctaUnavailable: string;
}

interface AvilaCopy {
  listHeading: string;
  loading: string;
  locationActive: string;
  locationError: string;
  stopLabel: (order: number) => string;
  mapSummary: (count: number) => string;
  mapHintActive: string;
  infoHeroTitle: string;
  infoHeroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  features: {
    poiCount: (count: number) => string;
    gps: string;
    audio: string;
    gallery: string;
    totalDuration: (minutes: number) => string;
  };
  howToUseTitle: string;
  howToUseSteps: string[];
  parkAndGoTitle: string;
  parkAndGoDescription: string;
  foodTitle: string;
  foodDescription: string;
}

interface PoiDetailCopy {
  notFoundTitle: string;
  notFoundCta: string;
  stopOf: (order: number, total: number) => string;
  previous: string;
  next: string;
  audioGuideTitle: (name: string) => string;
  durationLabel: (minutes: number) => string;
  locationHeading: string;
  deepDiveHeading: string;
  youLabel: string;
  enableLocationPrompt: string;
}

interface NotFoundCopy {
  title: string;
  message: string;
  cta: string;
}

interface BottomNavCopy {
  map: string;
  list: string;
  park: string;
  eat: string;
  info: string;
}

interface UiCopy {
  home: HomeCopy;
  country: CountryCopy;
  avila: AvilaCopy;
  catania: AvilaCopy;
  poiDetail: PoiDetailCopy;
  notFound: NotFoundCopy;
  bottomNav: BottomNavCopy;
  categories: Record<CategoryKey, string>;
  general: {
    minutesShort: string;
    geolocationNotSupported: string;
    geolocationToast: string;
  };
  audioPlayer: {
    play: string;
    pause: string;
  };
}

const pluralize = (count: number, singular: string, plural: string) =>
  count === 1 ? singular : plural;

export const translations: Record<Language, UiCopy> = {
  en: {
    home: {
      tagline: 'Choose your city and unlock curated walking tours with maps, audio, and insider tips.',
      countryGuideLabel: 'Country Guide',
      viewCitiesCta: 'View Cities',
    },
    country: {
      back: 'Back',
      notFoundTitle: "We can't find that country yet.",
      notFoundMessage: 'Head back to the GuideHero home page and choose another destination.',
      notFoundCta: 'Back to GuideHero',
      heroTitle: 'City Guides',
      heroSubtitle: 'Choose a city to explore curated routes, insider tips, and on-the-ground audio.',
      cityCount: (count) => `${count} ${pluralize(count, 'city', 'cities')} available soon`,
      availableMessage: 'Tap to enter the full interactive experience with maps, audio, and stops.',
      comingSoonMessage: 'This guide is under construction. Keep an eye out for updates soon.',
      ctaAvailable: 'Start Exploring',
      ctaUnavailable: 'Coming Soon',
    },
    avila: {
      listHeading: 'Explore Ávila',
      loading: 'Getting your location...',
      locationActive: 'Showing locations nearest to you',
      locationError: 'We could not access your location. Some features may be limited.',
      stopLabel: (order) => `Stop ${order}`,
      mapSummary: (count) => `${count} ${pluralize(count, 'Point of Interest', 'Points of Interest')}`,
      mapHintActive: 'GPS location active - Tap any location to explore',
      infoHeroTitle: 'Autonomous Guided Tours',
      infoHeroSubtitle: 'Discover the medieval beauty of Ávila, Spain',
      aboutTitle: 'About This Tour',
      aboutDescription:
        'Welcome to your interactive guided tour of Ávila! This UNESCO World Heritage site is home to the best-preserved medieval walls in Spain and countless historical treasures.',
      features: {
        poiCount: (count) => `${count} carefully selected points of interest`,
        gps: 'GPS-based location tracking and routing',
        audio: 'Audio guides for key locations',
        gallery: 'Beautiful image galleries',
        totalDuration: (minutes) => `Estimated total duration: ${minutes} minutes`,
      },
      howToUseTitle: 'How to Use',
      howToUseSteps: [
        'Enable GPS location access for the best experience',
        'Browse points of interest in the Places tab',
        'View locations on the Map tab',
        'Tap any location to see details, photos, and audio guides',
        'Follow the suggested route or explore at your own pace',
      ],
      parkAndGoTitle: 'Park and go',
      parkAndGoDescription: 'Find convenient parking options and set off through Ávila with ease.',
      foodTitle: 'Taste the city: where and what to eat',
      foodDescription: 'Discover beloved local dishes, cafés, and sweets to try while you explore Ávila.',
    },
    catania: {
      listHeading: 'Explore Catania',
      loading: 'Getting your location...',
      locationActive: 'Showing locations nearest to you',
      locationError: 'We could not access your location. Some features may be limited.',
      stopLabel: (order) => `Stop ${order}`,
      mapSummary: (count) => `${count} ${pluralize(count, 'Point of Interest', 'Points of Interest')}`,
      mapHintActive: 'GPS location active - Tap any location to explore',
      infoHeroTitle: 'Catania Guided Tour',
      infoHeroSubtitle: 'Experience the baroque heartbeat of Catania, Sicily',
      aboutTitle: 'About This Tour',
      aboutDescription:
        'Welcome to your interactive guided tour of Catania! Discover Sicilian Baroque palaces, lively markets, and sweeping views of Mount Etna.',
      features: {
        poiCount: (count) => `${count} carefully selected points of interest`,
        gps: 'GPS-based location tracking and routing',
        audio: 'Audio guides for key locations',
        gallery: 'Beautiful image galleries',
        totalDuration: (minutes) => `Estimated total duration: ${minutes} minutes`,
      },
      howToUseTitle: 'How to Use',
      howToUseSteps: [
        'Enable GPS location access for the best experience',
        'Browse points of interest in the Places tab',
        'View locations on the Map tab',
        'Tap any location to see details, photos, and audio guides',
        'Follow the suggested route or explore at your own pace',
      ],
      parkAndGoTitle: 'Park and go',
      parkAndGoDescription: 'Locate trusted parking areas and begin your Catania adventure straight away.',
      foodTitle: 'Taste the city: where and what to eat',
      foodDescription: 'Sample Catania\'s markets and must-try dishes with hand-picked food tips.',
    },
    poiDetail: {
      notFoundTitle: 'Location not found',
      notFoundCta: 'Back to Tour',
      stopOf: (order, total) => `Stop ${order} of ${total}`,
      previous: 'Previous Stop',
      next: 'Next Stop',
      audioGuideTitle: (name) => `Audio guide: ${name}`,
      durationLabel: (minutes) => `${minutes} ${pluralize(minutes, 'minute', 'minutes')}`,
      locationHeading: 'Location',
      deepDiveHeading: 'Immersive Story Spotlight',
      youLabel: 'You',
      enableLocationPrompt: 'Enable location to see your position',
    },
    notFound: {
      title: 'Oops! Page not found',
      message: 'The page you are looking for does not exist or has been moved.',
      cta: 'Return to Home',
    },
    bottomNav: {
      map: 'Map',
      list: 'Places',
      park: 'Park',
      eat: 'Eat',
      info: 'Info',
    },
    categories: {
      monument: 'Monument',
      church: 'Church',
      museum: 'Museum',
      viewpoint: 'Viewpoint',
      square: 'Square',
    },
    general: {
      minutesShort: 'min',
      geolocationNotSupported: 'Geolocation is not supported by your browser.',
      geolocationToast: 'Unable to get your location. Please enable GPS access.',
    },
    audioPlayer: {
      play: 'Play Audio Guide',
      pause: 'Pause',
    },
  },
  es: {
    home: {
      tagline: 'Elige tu ciudad y disfruta de rutas guiadas con mapas, audio y consejos locales.',
      countryGuideLabel: 'Guía por país',
      viewCitiesCta: 'Ver ciudades',
    },
    country: {
      back: 'Atrás',
      notFoundTitle: 'Aún no encontramos ese país.',
      notFoundMessage: 'Vuelve a la página principal de GuideHero y elige otro destino.',
      notFoundCta: 'Volver a GuideHero',
      heroTitle: 'Guías de ciudades',
      heroSubtitle: 'Elige una ciudad para explorar rutas seleccionadas, consejos locales y audio in situ.',
      cityCount: (count) => `${count} ${count === 1 ? 'ciudad disponible pronto' : 'ciudades disponibles pronto'}`,
      availableMessage: 'Ingresa a la experiencia interactiva con mapas, audio y paradas.',
      comingSoonMessage: 'Esta guía está en construcción. Muy pronto habrá novedades.',
      ctaAvailable: 'Comenzar',
      ctaUnavailable: 'Próximamente',
    },
    avila: {
      listHeading: 'Explora Ávila',
      loading: 'Obteniendo tu ubicación...',
      locationActive: 'Mostrando los lugares más cercanos a ti',
      locationError: 'No pudimos acceder a tu ubicación. Algunas funciones pueden estar limitadas.',
      stopLabel: (order) => `Parada ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'punto de interés' : 'puntos de interés'}`,
      mapHintActive: 'Ubicación GPS activa - Toca un lugar para explorar',
      infoHeroTitle: 'Visita guiada por Ávila',
      infoHeroSubtitle: 'Descubre la belleza medieval de Ávila, España',
      aboutTitle: 'Sobre este tour',
      aboutDescription:
        'Bienvenido a tu visita guiada interactiva por Ávila. Este sitio Patrimonio Mundial de la UNESCO conserva las murallas medievales mejor preservadas de España y un sinfín de tesoros históricos.',
      features: {
        poiCount: (count) => `${count} puntos de interés seleccionados`,
        gps: 'Seguimiento por GPS y rutas sugeridas',
        audio: 'Audioguías para los puntos clave',
        gallery: 'Galerías de imágenes espectaculares',
        totalDuration: (minutes) => `Duración total estimada: ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      },
      howToUseTitle: 'Cómo usarla',
      howToUseSteps: [
        'Activa el acceso a tu ubicación para una mejor experiencia',
        'Explora los puntos de interés en la pestaña Lugares',
        'Consulta el mapa en la pestaña Mapa',
        'Toca cualquier lugar para ver detalles, fotos y audioguías',
        'Sigue la ruta sugerida o explora a tu ritmo',
      ],
      parkAndGoTitle: 'Aparca y arranca',
      parkAndGoDescription: 'Encuentra dónde aparcar en Ávila y comienza tu recorrido sin complicaciones.',
      foodTitle: 'Saborea la ciudad: dónde y qué comer',
      foodDescription: 'Descubre qué platos, bares y dulces no puedes perderte mientras exploras Ávila.',
    },
    catania: {
      listHeading: 'Explora Catania',
      loading: 'Obteniendo tu ubicación...',
      locationActive: 'Mostrando los lugares más cercanos a ti',
      locationError: 'No pudimos acceder a tu ubicación. Algunas funciones pueden estar limitadas.',
      stopLabel: (order) => `Parada ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'punto de interés' : 'puntos de interés'}`,
      mapHintActive: 'Ubicación GPS activa - Toca un lugar para explorar',
      infoHeroTitle: 'Recorrido guiado por Catania',
      infoHeroSubtitle: 'Descubre el latido barroco de Catania, Sicilia',
      aboutTitle: 'Sobre este tour',
      aboutDescription:
        'Bienvenido a tu recorrido interactivo por Catania. Recorre palacios barrocos sicilianos, mercados vibrantes y miradores con vistas al Etna.',
      features: {
        poiCount: (count) => `${count} puntos de interés seleccionados`,
        gps: 'Seguimiento por GPS y rutas sugeridas',
        audio: 'Audioguías para los puntos clave',
        gallery: 'Galerías de imágenes espectaculares',
        totalDuration: (minutes) => `Duración total estimada: ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      },
      howToUseTitle: 'Cómo usarla',
      howToUseSteps: [
        'Activa el acceso a tu ubicación para una mejor experiencia',
        'Explora los puntos de interés en la pestaña Lugares',
        'Consulta el mapa en la pestaña Mapa',
        'Toca cualquier lugar para ver detalles, fotos y audioguías',
        'Sigue la ruta sugerida o explora a tu ritmo',
      ],
      parkAndGoTitle: 'Aparca y arranca',
      parkAndGoDescription: 'Descubre dónde estacionar en Catania y lánzate a explorar sin estrés.',
      foodTitle: 'Saborea la ciudad: dónde y qué comer',
      foodDescription: 'Te guiamos por mercados, trattorias y delicias imprescindibles para saborear Catania.',
    },
    poiDetail: {
      notFoundTitle: 'No encontramos este lugar',
      notFoundCta: 'Volver al tour',
      stopOf: (order, total) => `Parada ${order} de ${total}`,
      previous: 'Parada anterior',
      next: 'Siguiente parada',
      audioGuideTitle: (name) => `Audioguía: ${name}`,
      durationLabel: (minutes) => `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      locationHeading: 'Ubicación',
      deepDiveHeading: 'Historia inmersiva',
      youLabel: 'Tú',
      enableLocationPrompt: 'Activa la ubicación para ver tu posición',
    },
    notFound: {
      title: '¡Ups! Página no encontrada',
      message: 'La página que buscas no existe o ha sido movida.',
      cta: 'Volver al inicio',
    },
    bottomNav: {
      map: 'Mapa',
      list: 'Lugares',
      park: 'Aparcar',
      eat: 'Comer',
      info: 'Info',
    },
    categories: {
      monument: 'Monumento',
      church: 'Iglesia',
      museum: 'Museo',
      viewpoint: 'Mirador',
      square: 'Plaza',
    },
    general: {
      minutesShort: 'min',
      geolocationNotSupported: 'La geolocalización no es compatible con tu navegador.',
      geolocationToast: 'No pudimos obtener tu ubicación. Activa el acceso al GPS.',
    },
    audioPlayer: {
      play: 'Reproducir audioguía',
      pause: 'Pausa',
    },
  },
  it: {
    home: {
      tagline: 'Scegli la tua città e vivi tour a piedi curati con mappe, audio e consigli locali.',
      countryGuideLabel: 'Guida per paese',
      viewCitiesCta: 'Vedi città',
    },
    country: {
      back: 'Indietro',
      notFoundTitle: 'Non abbiamo ancora quella nazione.',
      notFoundMessage: "Torna alla home di GuideHero e scegli un'altra destinazione.",
      notFoundCta: 'Torna a GuideHero',
      heroTitle: 'Guide cittadine',
      heroSubtitle: 'Scegli una città per esplorare percorsi curati, consigli locali e audio sul posto.',
      cityCount: (count) => `${count} ${count === 1 ? 'città disponibile a breve' : 'città disponibili a breve'}`,
      availableMessage: "Accedi all'esperienza interattiva con mappe, audio e tappe.",
      comingSoonMessage: 'Questa guida è in costruzione. Restate sintonizzati per gli aggiornamenti.',
      ctaAvailable: 'Inizia',
      ctaUnavailable: 'In arrivo',
    },
    avila: {
      listHeading: 'Esplora Ávila',
      loading: 'Sto recuperando la tua posizione...',
      locationActive: 'Mostriamo i luoghi più vicini a te',
      locationError: 'Non è stato possibile accedere alla tua posizione. Alcune funzioni potrebbero essere limitate.',
      stopLabel: (order) => `Tappa ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'punto di interesse' : 'punti di interesse'}`,
      mapHintActive: 'GPS attivo - Tocca un luogo per esplorare',
      infoHeroTitle: 'Tour guidato di Ávila',
      infoHeroSubtitle: 'Scopri la bellezza medievale di Ávila, Spagna',
      aboutTitle: 'Informazioni sul tour',
      aboutDescription:
        'Benvenuto nel tuo tour guidato interattivo di Ávila! Questo sito patrimonio mondiale UNESCO ospita le mura medievali meglio conservate di Spagna e numerosi tesori storici.',
      features: {
        poiCount: (count) => `${count} punti di interesse selezionati`,
        gps: 'Tracciamento GPS e itinerari suggeriti',
        audio: 'Audioguide per i punti principali',
        gallery: 'Splendide gallerie fotografiche',
        totalDuration: (minutes) => `Durata totale stimata: ${minutes} ${minutes === 1 ? 'minuto' : 'minuti'}`,
      },
      howToUseTitle: 'Come funziona',
      howToUseSteps: [
        "Abilita il GPS per un'esperienza ottimale",
        'Sfoglia i punti di interesse nella scheda Luoghi',
        'Guarda le posizioni nella scheda Mappa',
        'Tocca qualsiasi luogo per dettagli, foto e audioguide',
        'Segui il percorso consigliato o esplora al tuo ritmo',
      ],
      parkAndGoTitle: 'Parcheggia e via',
      parkAndGoDescription: "Scopri dove lasciare l'auto ad Ávila e parti subito all'avventura.",
      foodTitle: 'A Napoli che in Spagna, basta che si mangia',
      foodDescription: 'Suggerimenti su piatti tipici, taverne e dolci da provare durante il tuo soggiorno ad Ávila.',
    },
    catania: {
      listHeading: 'Esplora Catania',
      loading: 'Sto recuperando la tua posizione...',
      locationActive: 'Mostriamo i luoghi più vicini a te',
      locationError: 'Non è stato possibile accedere alla tua posizione. Alcune funzioni potrebbero essere limitate.',
      stopLabel: (order) => `Tappa ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'punto di interesse' : 'punti di interesse'}`,
      mapHintActive: 'GPS attivo - Tocca un luogo per esplorare',
      infoHeroTitle: 'Tour guidato di Catania',
      infoHeroSubtitle: 'Vivi il cuore barocco di Catania, Sicilia',
      aboutTitle: 'Informazioni sul tour',
      aboutDescription:
        'Benvenuto nel tuo tour guidato interattivo di Catania! Scopri palazzi barocchi siciliani, mercati vivaci e viste spettacolari sull\'Etna.',
      features: {
        poiCount: (count) => `${count} punti di interesse selezionati`,
        gps: 'Tracciamento GPS e itinerari suggeriti',
        audio: 'Audioguide per i punti principali',
        gallery: 'Splendide gallerie fotografiche',
        totalDuration: (minutes) => `Durata totale stimata: ${minutes} ${minutes === 1 ? 'minuto' : 'minuti'}`,
      },
      howToUseTitle: 'Come funziona',
      howToUseSteps: [
        "Abilita il GPS per un'esperienza ottimale",
        'Sfoglia i punti di interesse nella scheda Luoghi',
        'Guarda le posizioni nella scheda Mappa',
        'Tocca qualsiasi luogo per dettagli, foto e audioguide',
        'Segui il percorso consigliato o esplora al tuo ritmo',
      ],
      parkAndGoTitle: 'Parcheggia e via',
      parkAndGoDescription: 'Trova le aree consigliate dove parcheggiare a Catania e inizia subito la visita.',
      foodTitle: 'A Napoli che in Spagna, basta che si mangia',
      foodDescription: 'Scopri mercati, trattorie e street food imperdibili per assaporare Catania.',
    },
    poiDetail: {
      notFoundTitle: 'Luogo non trovato',
      notFoundCta: 'Torna al tour',
      stopOf: (order, total) => `Tappa ${order} di ${total}`,
      previous: 'Tappa precedente',
      next: 'Tappa successiva',
      audioGuideTitle: (name) => `Audioguida: ${name}`,
      durationLabel: (minutes) => `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'}`,
      locationHeading: 'Posizione',
      deepDiveHeading: 'Storia immersiva',
      youLabel: 'Tu',
      enableLocationPrompt: 'Abilita la posizione per vedere dove ti trovi',
    },
    notFound: {
      title: 'Ops! Pagina non trovata',
      message: 'La pagina che cerchi non esiste o è stata spostata.',
      cta: 'Torna alla home',
    },
    bottomNav: {
      map: 'Mappa',
      list: 'Luoghi',
      park: 'Parcheggio',
      eat: 'Cibo',
      info: 'Info',
    },
    categories: {
      monument: 'Monumento',
      church: 'Chiesa',
      museum: 'Museo',
      viewpoint: 'Belvedere',
      square: 'Piazza',
    },
    general: {
      minutesShort: 'min',
      geolocationNotSupported: 'La geolocalizzazione non è supportata dal tuo browser.',
      geolocationToast: 'Impossibile ottenere la tua posizione. Abilita l\'accesso al GPS.',
    },
    audioPlayer: {
      play: 'Avvia audioguida',
      pause: 'Pausa',
    },
  },
  pt: {
    home: {
      tagline: 'Escolha sua cidade e descubra passeios a pé com mapas, áudio e dicas locais.',
      countryGuideLabel: 'Guia por país',
      viewCitiesCta: 'Ver cidades',
    },
    country: {
      back: 'Voltar',
      notFoundTitle: 'Ainda não encontramos esse país.',
      notFoundMessage: 'Volte para a página inicial da GuideHero e escolha outro destino.',
      notFoundCta: 'Voltar à GuideHero',
      heroTitle: 'Guias de cidades',
      heroSubtitle: 'Escolha uma cidade para explorar rotas selecionadas, dicas locais e áudio em campo.',
      cityCount: (count) => `${count} ${count === 1 ? 'cidade disponível em breve' : 'cidades disponíveis em breve'}`,
      availableMessage: 'Entre na experiência interativa com mapas, áudio e paradas.',
      comingSoonMessage: 'Este guia está em construção. Novidades em breve.',
      ctaAvailable: 'Começar',
      ctaUnavailable: 'Em breve',
    },
    avila: {
      listHeading: 'Explore Ávila',
      loading: 'Obtendo sua localização...',
      locationActive: 'Mostrando os locais mais próximos de você',
      locationError: 'Não foi possível acessar sua localização. Alguns recursos podem ficar limitados.',
      stopLabel: (order) => `Parada ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'ponto de interesse' : 'pontos de interesse'}`,
      mapHintActive: 'Localização GPS ativa - Toque em um ponto para explorar',
      infoHeroTitle: 'Tour guiado por Ávila',
      infoHeroSubtitle: 'Descubra a beleza medieval de Ávila, Espanha',
      aboutTitle: 'Sobre este tour',
      aboutDescription:
        'Bem-vindo ao seu tour guiado interativo por Ávila! Este Patrimônio Mundial da UNESCO abriga as muralhas medievais mais bem preservadas da Espanha e inúmeros tesouros históricos.',
      features: {
        poiCount: (count) => `${count} pontos de interesse selecionados`,
        gps: 'Rastreamento por GPS e rotas sugeridas',
        audio: 'Audioguias para os locais principais',
        gallery: 'Belas galerias de imagens',
        totalDuration: (minutes) => `Duração total estimada: ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      },
      howToUseTitle: 'Como usar',
      howToUseSteps: [
        'Ative o acesso à localização para a melhor experiência',
        'Veja os pontos de interesse na aba Lugares',
        'Confira os locais no mapa na aba Mapa',
        'Toque em qualquer ponto para ver detalhes, fotos e audioguias',
        'Siga o percurso sugerido ou explore no seu ritmo',
      ],
      parkAndGoTitle: 'Estacione e siga',
      parkAndGoDescription: 'Saiba onde deixar o carro em Ávila e comece o passeio sem transtornos.',
      foodTitle: 'Saboreie a cidade: onde e o que comer',
      foodDescription: 'Conheça pratos típicos, cafés e doces imperdíveis para aproveitar Ávila ao máximo.',
    },
    catania: {
      listHeading: 'Explore Catânia',
      loading: 'Obtendo sua localização...',
      locationActive: 'Mostrando os locais mais próximos de você',
      locationError: 'Não foi possível acessar sua localização. Alguns recursos podem ficar limitados.',
      stopLabel: (order) => `Parada ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? 'ponto de interesse' : 'pontos de interesse'}`,
      mapHintActive: 'Localização GPS ativa - Toque em um ponto para explorar',
      infoHeroTitle: 'Tour guiado por Catânia',
      infoHeroSubtitle: 'Sinta o coração barroco de Catânia, Sicília',
      aboutTitle: 'Sobre este tour',
      aboutDescription:
        'Bem-vindo ao seu tour guiado interativo por Catânia! Explore palácios barrocos sicilianos, mercados vibrantes e mirantes com vista para o Etna.',
      features: {
        poiCount: (count) => `${count} pontos de interesse selecionados`,
        gps: 'Rastreamento por GPS e rotas sugeridas',
        audio: 'Audioguias para os locais principais',
        gallery: 'Belas galerias de imagens',
        totalDuration: (minutes) => `Duração total estimada: ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      },
      howToUseTitle: 'Como usar',
      howToUseSteps: [
        'Ative o acesso à localização para a melhor experiência',
        'Veja os pontos de interesse na aba Lugares',
        'Confira os locais no mapa na aba Mapa',
        'Toque em qualquer ponto para ver detalhes, fotos e audioguias',
        'Siga o percurso sugerido ou explore no seu ritmo',
      ],
      parkAndGoTitle: 'Estacione e siga',
      parkAndGoDescription: 'Descubra os melhores lugares para estacionar em Catânia e iniciar a visita com tranquilidade.',
      foodTitle: 'Saboreie a cidade: onde e o que comer',
      foodDescription: 'Receba indicações de mercados, trattorias e petiscos que revelam os sabores de Catânia.',
    },
    poiDetail: {
      notFoundTitle: 'Local não encontrado',
      notFoundCta: 'Voltar ao tour',
      stopOf: (order, total) => `Parada ${order} de ${total}`,
      previous: 'Parada anterior',
      next: 'Próxima parada',
      audioGuideTitle: (name) => `Audioguia: ${name}`,
      durationLabel: (minutes) => `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
      locationHeading: 'Localização',
      deepDiveHeading: 'História imersiva',
      youLabel: 'Você',
      enableLocationPrompt: 'Ative a localização para ver sua posição',
    },
    notFound: {
      title: 'Ops! Página não encontrada',
      message: 'A página que você procura não existe ou foi movida.',
      cta: 'Voltar para o início',
    },
    bottomNav: {
      map: 'Mapa',
      list: 'Lugares',
      park: 'Estacionar',
      eat: 'Comer',
      info: 'Info',
    },
    categories: {
      monument: 'Monumento',
      church: 'Igreja',
      museum: 'Museu',
      viewpoint: 'Mirante',
      square: 'Praça',
    },
    general: {
      minutesShort: 'min',
      geolocationNotSupported: 'A geolocalização não é compatível com o seu navegador.',
      geolocationToast: 'Não foi possível obter sua localização. Ative o acesso ao GPS.',
    },
    audioPlayer: {
      play: 'Reproduzir audioguia',
      pause: 'Pausar',
    },
  },
  fr: {
    home: {
      tagline: 'Choisissez votre ville et profitez de parcours à pied avec cartes, audio et conseils locaux.',
      countryGuideLabel: 'Guide par pays',
      viewCitiesCta: 'Voir les villes',
    },
    country: {
      back: 'Retour',
      notFoundTitle: 'Nous ne trouvons pas encore ce pays.',
      notFoundMessage: "Revenez à la page d'accueil de GuideHero et choisissez une autre destination.",
      notFoundCta: 'Retour à GuideHero',
      heroTitle: 'Guides des villes',
      heroSubtitle: "Choisissez une ville pour explorer des itinéraires sélectionnés, des conseils locaux et de l'audio sur place.",
      cityCount: (count) => `${count} ${count === 1 ? "ville disponible bientôt" : "villes disponibles bientôt"}`,
      availableMessage: "Accédez à l'expérience interactive avec cartes, audio et étapes.",
      comingSoonMessage: "Ce guide est en préparation. Restez à l'écoute des nouveautés.",
      ctaAvailable: 'Commencer',
      ctaUnavailable: 'Bientôt',
    },
    avila: {
      listHeading: 'Explorez Ávila',
      loading: 'Récupération de votre position...',
      locationActive: 'Affichage des lieux les plus proches',
      locationError: "Impossible d'accéder à votre position. Certaines fonctions peuvent être limitées.",
      stopLabel: (order) => `Étape ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? "point d'intérêt" : "points d'intérêt"}`,
      mapHintActive: 'Localisation GPS active - Touchez un lieu pour explorer',
      infoHeroTitle: "Visite guidée d'Ávila",
      infoHeroSubtitle: "Découvrez la beauté médiévale d'Ávila, en Espagne",
      aboutTitle: 'À propos de cette visite',
      aboutDescription:
        "Bienvenue dans votre visite guidée interactive d'Ávila ! Ce site classé au patrimoine mondial de l'UNESCO abrite les murailles médiévales les mieux conservées d'Espagne et de nombreux trésors historiques.",
      features: {
        poiCount: (count) => `${count} points d'intérêt soigneusement sélectionnés`,
        gps: 'Suivi GPS et itinéraires suggérés',
        audio: 'Audioguides pour les lieux clés',
        gallery: "Superbes galeries d'images",
        totalDuration: (minutes) => `Durée totale estimée : ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`,
      },
      howToUseTitle: "Mode d'emploi",
      howToUseSteps: [
        "Activez la localisation GPS pour une expérience optimale",
        "Parcourez les points d'intérêt dans l'onglet Lieux",
        "Visualisez les sites sur l'onglet Carte",
        "Touchez un lieu pour découvrir détails, photos et audioguides",
        "Suivez l'itinéraire suggéré ou explorez à votre rythme",
      ],
      parkAndGoTitle: 'Garez-vous et partez',
      parkAndGoDescription: 'Repérez les parkings recommandés à Ávila et commencez votre visite sereinement.',
      foodTitle: 'Savourez la ville : où et quoi manger',
      foodDescription: 'Nos conseils gourmands pour les spécialités, cafés et douceurs incontournables d’Ávila.',
    },
    catania: {
      listHeading: 'Explorez Catane',
      loading: 'Récupération de votre position...',
      locationActive: 'Affichage des lieux les plus proches',
      locationError: "Impossible d'accéder à votre position. Certaines fonctions peuvent être limitées.",
      stopLabel: (order) => `Étape ${order}`,
      mapSummary: (count) => `${count} ${count === 1 ? "point d'intérêt" : "points d'intérêt"}`,
      mapHintActive: 'Localisation GPS active - Touchez un lieu pour explorer',
      infoHeroTitle: 'Visite guidée de Catane',
      infoHeroSubtitle: 'Vivez le battement baroque de Catane, en Sicile',
      aboutTitle: 'À propos de cette visite',
      aboutDescription:
        "Bienvenue dans votre visite guidée interactive de Catane ! Explorez les palais baroques siciliens, les marchés animés et les panoramas sur l'Etna.",
      features: {
        poiCount: (count) => `${count} points d'intérêt soigneusement sélectionnés`,
        gps: 'Suivi GPS et itinéraires suggérés',
        audio: 'Audioguides pour les lieux clés',
        gallery: "Superbes galeries d'images",
        totalDuration: (minutes) => `Durée totale estimée : ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`,
      },
      howToUseTitle: "Mode d'emploi",
      howToUseSteps: [
        "Activez la localisation GPS pour une expérience optimale",
        "Parcourez les points d'intérêt dans l'onglet Lieux",
        "Visualisez les sites sur l'onglet Carte",
        "Touchez un lieu pour découvrir détails, photos et audioguides",
        "Suivez l'itinéraire suggéré ou explorez à votre rythme",
      ],
      parkAndGoTitle: 'Garez-vous et partez',
      parkAndGoDescription: 'Trouvez facilement où stationner à Catane et partez explorer sans attendre.',
      foodTitle: 'Savourez la ville : où et quoi manger',
      foodDescription: 'Découvrez marchés, trattorie et gourmandises à ne pas manquer pour savourer Catane.',
    },
    poiDetail: {
      notFoundTitle: 'Lieu introuvable',
      notFoundCta: 'Retour à la visite',
      stopOf: (order, total) => `Étape ${order} sur ${total}`,
      previous: 'Étape précédente',
      next: 'Étape suivante',
      audioGuideTitle: (name) => `Audioguide : ${name}`,
      durationLabel: (minutes) => `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`,
      locationHeading: 'Localisation',
      deepDiveHeading: 'Histoire immersive',
      youLabel: 'Vous',
      enableLocationPrompt: 'Activez la localisation pour voir votre position',
    },
    notFound: {
      title: 'Oups ! Page introuvable',
      message: "La page que vous cherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    bottomNav: {
      map: 'Carte',
      list: 'Lieux',
      park: 'Parking',
      eat: 'Gastronomie',
      info: 'Infos',
    },
    categories: {
      monument: 'Monument',
      church: 'Église',
      museum: 'Musée',
      viewpoint: 'Point de vue',
      square: 'Place',
    },
    general: {
      minutesShort: 'min',
      geolocationNotSupported: 'La géolocalisation n\'est pas prise en charge par votre navigateur.',
      geolocationToast: 'Impossible d\'obtenir votre position. Veuillez activer l\'accès au GPS.',
    },
    audioPlayer: {
      play: 'Lancer l\'audioguide',
      pause: 'Pause',
    },
  },
};

export const getTranslations = (language: Language): UiCopy => translations[language];

import type { LocalizedText } from '@/types/i18n';
import { PointOfInterest } from '@/types/tour';

const text = (values: LocalizedText): LocalizedText => values;

export const avilaPoints: PointOfInterest[] = [
  {
    id: 'murallas',
    name: text({
      en: 'Medieval City Walls',
      es: 'Murallas medievales',
      it: 'Mura medievali',
      pt: 'Muralhas medievais',
      fr: 'Remparts médiévaux',
    }),
    description: text({
      en: 'The magnificent 11th-century walls of Ávila are the best-preserved medieval fortifications in Spain. Walk atop these 2.5 km walls for breathtaking views of the city and surrounding landscapes.',
      es: 'La magnífica muralla del siglo XI de Ávila es la fortificación medieval mejor conservada de España. Camina por sus 2,5 km para disfrutar de vistas impresionantes de la ciudad y del paisaje circundante.',
      it: 'Le magnifiche mura dell\'XI secolo di Ávila sono le fortificazioni medievali meglio conservate di Spagna. Cammina lungo i suoi 2,5 km per ammirare viste mozzafiato sulla città e sui paesaggi circostanti.',
      pt: 'As magníficas muralhas do século XI de Ávila são as fortificações medievais mais bem preservadas da Espanha. Caminhe pelos seus 2,5 km para apreciar vistas deslumbrantes da cidade e dos arredores.',
      fr: 'Les magnifiques remparts du XIe siècle d\'Ávila sont les fortifications médiévales les mieux conservées d\'Espagne. Parcourez leurs 2,5 km pour admirer des vues imprenables sur la ville et les paysages environnants.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'The construction of the walls is closely linked to the Christian Reconquista of the Iberian Peninsula. After the conquest of Toledo in 1085, King Alfonso VI of León and Castile needed to protect and consolidate the Toledan kingdom against possible Muslim counter-attacks, especially after the Almoravid invasion and the Christian defeats in the battles of Sagrajas and Uclés. At the end of the 11th century, Alfonso VI entrusted his son-in-law, Count Raymond of Burgundy—married to his daughter, the Infanta Doña Urraca—with the repopulation and fortification of the territories of the central peninsula, including the cities of Ávila, Segovia and Salamanca.',
            es: 'La construcción de las murallas está íntimamente ligada al proceso de Reconquista cristiana de la península ibérica. Tras la conquista de Toledo en 1085, el rey Alfonso VI de León y Castilla necesitaba proteger y consolidar el reino toledano frente a posibles contraataques musulmanes, especialmente después de la invasión almorávide y las derrotas cristianas en las batallas de Sagrajas y Uclés. A finales del siglo XI, Alfonso VI encargó a su yerno, el conde Raimundo de Borgoña—casado con su hija la infanta doña Urraca—la repoblación y fortificación de los territorios del centro peninsular, incluyendo las ciudades de Ávila, Segovia y Salamanca.',
            it: 'La costruzione delle mura è strettamente legata al processo di Riconquista cristiana della penisola iberica. Dopo la conquista di Toledo nel 1085, il re Alfonso VI di León e Castiglia aveva bisogno di proteggere e consolidare il regno toledano da possibili contrattacchi musulmani, soprattutto dopo l\'invasione almoravide e le sconfitte cristiane nelle battaglie di Sagrajas e Uclés. Alla fine dell\'XI secolo, Alfonso VI affidò a suo genero, il conte Raimondo di Borgogna, sposato con sua figlia, l\'infanta doña Urraca, il ripopolamento e la fortificazione dei territori del centro della penisola, comprese le città di Ávila, Segovia e Salamanca.',
            pt: 'A construção das muralhas está intimamente ligada ao processo de Reconquista cristã da Península Ibérica. Após a conquista de Toledo em 1085, o rei Afonso VI de Leão e Castela precisava de proteger e consolidar o reino toledano contra possíveis contra-ataques muçulmanos, especialmente após a invasão almorávida e as derrotas cristãs nas batalhas de Sagrajas e Uclés. No final do século XI, Afonso VI confiou ao seu genro, o conde Raimundo de Borgonha, casado com a sua filha, a infanta Dona Urraca, o repovoamento e a fortificação dos territórios do centro da península, incluindo as cidades de Ávila, Segóvia e Salamanca.',
            fr: 'La construction des murailles est étroitement liée au processus de Reconquista chrétienne de la péninsule ibérique. Après la conquête de Tolède en 1085, le roi Alphonse VI de León et Castille avait besoin de protéger et de consolider le royaume de Tolède contre d\'éventuelles contre-attaques musulmanes, surtout après l\'invasion almoravide et les défaites chrétiennes aux batailles de Sagrajas et Uclés. À la fin du XIe siècle, Alphonse VI confia à son gendre, le comte Raymond de Bourgogne, marié à sa fille l\'infante Doña Urraca, le repeuplement et la fortification des territoires du centre de la péninsule, y compris les villes d\'Ávila, Ségovie et Salamanque.',
          }),
          text({
            en: 'According to historiographical tradition, work began on May 3, 1090, when Bishop Pelayo blessed the start of construction. The technical direction fell to two masters of geometry: Casandro Colonio (or Casandro Romano) of Roman origin, and Florín de Pituenga, of French origin. More than 2,000 men from all over Spain—including Navarrese, Franks, Aragonese, Mozarabs, Basques, Cantabrians and Asturians—participated in the repopulation and construction. Traditional historiography states that the work lasted nine years, ending in 1099.',
            es: 'Según la tradición historiográfica, las obras comenzaron el 3 de mayo de 1090, cuando el obispo Pelayo bendijo el inicio de la construcción. La dirección técnica recayó en dos maestres de geometría: Casandro Colonio (o Casandro Romano) de origen romano, y Florín de Pituenga, de origen francés. Más de 2.000 hombres procedentes de toda España—incluyendo navarros, francos, aragoneses, mozárabes, vascos, cántabros y asturianos—participaron en la repoblación y construcción. La historiografía tradicional afirma que las obras duraron nueve años, finalizando en 1099.',
            it: 'Secondo la tradizione storiografica, i lavori iniziarono il 3 maggio 1090, quando il vescovo Pelayo benedisse l\'inizio della costruzione. La direzione tecnica ricadde su due maestri di geometria: Casandro Colonio (o Casandro Romano) di origine romana, e Florín de Pituenga, di origine francese. Più di 2.000 uomini provenienti da tutta la Spagna, tra cui navarresi, franchi, aragonesi, mozarabi, baschi, cantabrici e asturiani, parteciparono al ripopolamento e alla costruzione. La storiografia tradizionale afferma che i lavori durarono nove anni, terminando nel 1099.',
            pt: 'Segundo a tradição historiográfica, as obras começaram a 3 de maio de 1090, quando o bispo Pelayo abençoou o início da construção. A direção técnica coube a dois mestres de geometria: Casandro Colonio (ou Casandro Romano) de origem romana, e Florín de Pituenga, de origem francesa. Mais de 2.000 homens de toda a Espanha — incluindo navarros, francos, aragoneses, moçárabes, bascos, cantábricos e asturianos — participaram no repovoamento e na construção. A historiografia tradicional afirma que as obras duraram nove anos, terminando em 1099.',
            fr: 'Selon la tradition historiographique, les travaux commencèrent le 3 mai 1090, lorsque l\'évêque Pelayo bénit le début de la construction. La direction technique fut confiée à deux maîtres de géométrie : Casandro Colonio (ou Casandro Romano) d\'origine romaine, et Florín de Pituenga, d\'origine française. Plus de 2 000 hommes de toute l\'Espagne — y compris des Navarrais, des Francs, des Aragonais, des Mozarabes, des Basques, des Cantabres et des Asturiens — participèrent au repeuplement et à la construction. L\'historiographie traditionnelle affirme que les travaux durèrent neuf ans, se terminant en 1099.',
          }),
          text({
            en: 'However, more recent research questions this precise chronology. Numerous scholars postulate that the current wall actually dates from the second half of the 12th century, based on its architectural morphology and historical documentation. The Hispano-Muslim geographer al-Idrisi, in the first half of the 12th century, described Ávila simply as "a group of villages, populated by vigorous horsemen and with abundant livestock", without mentioning any wall, which suggests that the construction may have been later than traditionally accepted. It is most likely that there was a first Roman wall of a smaller perimeter on which the current medieval one was built, being a "living" building with numerous extensions, reconstructions and repairs over the centuries.',
            es: 'Sin embargo, investigaciones más recientes cuestionan esta cronología tan precisa. Numerosos estudiosos postulan que la actual muralla data realmente de la segunda mitad del siglo XII, basándose en su morfología arquitectónica y documentación histórica. El geógrafo hispano-musulmán al-Idrisi, en la primera mitad del siglo XII, describió Ávila simplemente como "un conjunto de aldeas, pobladas por jinetes vigorosos y con abundante ganado", sin mencionar muralla alguna, lo que sugiere que la construcción pudo ser posterior a lo tradicionalmente aceptado. Lo más probable es que existiera una primera muralla romana de menor perímetro sobre la cual se edificó la medieval actual, tratándose de un edificio "vivo" con numerosas ampliaciones, reconstrucciones y reparaciones a lo largo de los siglos.',
            it: 'Tuttavia, ricerche più recenti mettono in discussione questa cronologia così precisa. Numerosi studiosi ipotizzano che le mura attuali risalgano in realtà alla seconda metà del XII secolo, basandosi sulla loro morfologia architettonica e sulla documentazione storica. Il geografo ispano-musulmano al-Idrisi, nella prima metà del XII secolo, descrisse Ávila semplicemente come "un insieme di villaggi, popolati da cavalieri vigorosi e con abbondante bestiame", senza menzionare alcuna cinta muraria, il che suggerisce che la costruzione potrebbe essere stata successiva a quella tradizionalmente accettata. È molto probabile che esistesse una prima cinta muraria romana di perimetro inferiore su cui fu costruita quella medievale attuale, trattandosi di un edificio "vivo" con numerosi ampliamenti, ricostruzioni e riparazioni nel corso dei secoli.',
            pt: 'No entanto, pesquisas mais recentes questionam essa cronologia precisa. Numerosos estudiosos postulam que a muralha atual data, na verdade, da segunda metade do século XII, com base em sua morfologia arquitetônica e documentação histórica. O geógrafo hispano-muçulmano al-Idrisi, na primeira metade do século XII, descreveu Ávila simplesmente como "um conjunto de aldeias, povoadas por cavaleiros vigorosos e com gado abundante", sem mencionar nenhuma muralha, o que sugere que a construção pode ter sido posterior à tradicionalmente aceita. O mais provável é que tenha existido uma primeira muralha romana de menor perímetro sobre a qual foi construída a atual medieval, tratando-se de um edifício "vivo" com numerosas ampliações, reconstruções e reparações ao longo dos séculos.',
            fr: 'Cependant, des recherches plus récentes remettent en question cette chronologie précise. De nombreux chercheurs postulent que la muraille actuelle date en réalité de la seconde moitié du XIIe siècle, en se basant sur sa morphologie architecturale et la documentation historique. Le géographe hispano-musulman al-Idrisi, dans la première moitié du XIIe siècle, a décrit Ávila simplement comme "un ensemble de villages, peuplés de cavaliers vigoureux et avec un bétail abondant", sans mentionner aucune muraille, ce qui suggère que la construction a pu être postérieure à ce qui est traditionnellement accepté. Le plus probable est qu\'il existait une première muraille romaine d\'un périmètre plus petit sur laquelle a été construite la muraille médiévale actuelle, s\'agissant d\'un édifice "vivant" avec de nombreuses extensions, reconstructions et réparations au fil des siècles.',
          }),
          text({
            en: 'The walls present truly imposing dimensions. The full perimeter reaches 2,516 meters, enclosing an irregular surface of about 31–33 hectares. The average thickness is 3 meters (ranging from 2.6 to 4.1 meters depending on the sector), and the height varies between 12 and 15 meters along the wall sections, reaching up to 17 meters in some towers and over 20 meters in towers flanking the main gates. The defensive structure contains 2,500 merlons, 87–88 towers, and 9 main gates. The towers are distributed as follows: 30 on the north side, 25 on the south, 21 on the east, and 12 on the west. Most towers are semicircular, but there are also square and pentagonal ones, all providing strategic points for surveillance and defense.',
            es: 'Las murallas presentan unas dimensiones verdaderamente imponentes. El perímetro completo alcanza los 2.516 metros, encerrando una superficie irregular de aproximadamente 31–33 hectáreas. El grosor medio es de 3 metros (variando entre 2,6 y 4,1 metros según el sector), y la altura varía entre los 12 y 15 metros en los lienzos, llegando a los 17 metros en algunas torres y superando los 20 metros en las torres que flanquean las puertas principales. La estructura defensiva cuenta con 2.500 almenas, 87–88 torreones y 9 puertas principales. Los torreones se distribuyen así: 30 en el norte, 25 en el sur, 21 en el este y 12 en el oeste. La mayoría de los torreones son semicirculares, aunque también los hay cuadrados y pentagonales, todos aportando puntos estratégicos de vigilancia y defensa.',
            it: 'Le mura presentano dimensioni davvero imponenti. Il perimetro totale raggiunge i 2.516 metri, racchiudendo una superficie irregolare di circa 31-33 ettari. Lo spessore medio è di 3 metri (variando tra 2,6 e 4,1 metri a seconda del settore) e l\'altezza varia tra i 12 e i 15 metri lungo le sezioni murarie, arrivando fino a 17 metri in alcune torri e superando i 20 metri nelle torri che affiancano le porte principali. La struttura difensiva contiene 2.500 merli, 87–88 torri e 9 porte principali. Le torri sono distribuite così: 30 sul lato nord, 25 a sud, 21 a est e 12 a ovest. La maggior parte delle torri è semicircolare, ma ce ne sono anche di quadrate e pentagonali, tutte strategiche per la sorveglianza e la difesa.',
            pt: 'As muralhas apresentam dimensões verdadeiramente impressionantes. O perímetro total atinge 2.516 metros, encerrando uma superfície irregular de cerca de 31–33 hectares. A espessura média é de 3 metros (variando entre 2,6 e 4,1 metros conforme o sector), e a altura varia entre 12 e 15 metros nas seções murais, chegando aos 17 metros em algumas torres e superando os 20 metros nas torres que ladeiam os portões principais. A estrutura defensiva possui 2.500 merlões, 87–88 torres e 9 portas principais. As torres estão distribuídas assim: 30 a norte, 25 a sul, 21 a leste e 12 a oeste. A maioria das torres é semicircular, mas existem também quadradas e pentagonais, todas proporcionando pontos estratégicos de vigilância e defesa.',
            fr: 'Les murailles présentent des dimensions véritablement imposantes. Le périmètre total atteint 2 516 mètres, englobant une surface irrégulière de 31 à 33 hectares. L\'épaisseur moyenne est de 3 mètres (variant entre 2,6 et 4,1 mètres selon le secteur) et la hauteur varie entre 12 et 15 mètres le long des sections murales, atteignant jusqu\'à 17 mètres dans certaines tours et dépassant 20 mètres dans les tours qui flanquent les portes principales. La structure défensive comprend 2 500 merlons, 87 à 88 tours et 9 portes principales. Les tours sont réparties ainsi : 30 au nord, 25 au sud, 21 à l\'est et 12 à l\'ouest. La plupart des tours sont semi-circulaires, mais il en existe également des carrées et pentagonales, toutes offrant des points stratégiques de surveillance et de défense.'
          }),
          text({
            en: 'Construction followed a logical sequence determined by defensive needs. The eastern section was built first, as it was the most vulnerable being situated on flat terrain easily accessible to attackers; it therefore presents the largest height (12 meters) and thickness (3 meters), with robust towers. The walls show a variety of stone types and building techniques reflecting the different construction stages and centuries of repair. The main materials are grey granite ashlars reused from Roman and older buildings, unworked orange granite, and additions of limestone and mortar. Builders even took Roman funerary steles and architectural fragments from ancient civil and religious buildings. The eastern section especially displays reused stones, while upper parts and some towers were built with orange granite and filled with smaller wedges. Towers are generally solid masses, although a few are hollow to house a guard post.',
            es: 'La construcción siguió una secuencia lógica determinada por las necesidades defensivas. Se construyó primero el lienzo oriental, al ser el más vulnerable por situarse en terreno llano y de fácil acceso para posibles atacantes; por eso presenta mayor altura (12 metros) y grosor (3 metros), con torres robustas. Las murallas muestran variedad de tipos de piedra y técnicas constructivas que reflejan los diferentes períodos y siglos de reparación. Los principales materiales son sillares de granito gris reutilizados de edificaciones romanas y anteriores, granito anaranjado sin labrar, y añadidos de mortero y piedra caliza. Los constructores reutilizaron estelas funerarias romanas y fragmentos arquitectónicos de edificaciones antiguas. El lienzo oriental muestra especialmente piedras reutilizadas, mientras que las partes superiores y algunas torres se edificaron con granito anaranjado y rellenos de cuñas menores. Los torreones son, en general, macizos, aunque algunos están huecos para albergar puestos de guardia.',
            it: 'La costruzione seguì una sequenza logica determinata dalle esigenze difensive. La sezione orientale fu costruita per prima, poiché era la più vulnerabile situata su terreno piano facilmente accessibile agli invasori; perciò presenta maggiore altezza (12 metri) e spessore (3 metri), con torri robuste. Le mura mostrano varietà di tipi di pietra e tecniche costruttive riflettenti i diversi periodi e secoli di riparazione. I principali materiali sono blocchi di granito grigio riutilizzati da edifici romani e più antichi, granito arancione non lavorato, e aggiunte di pietra calcarea e malta. I costruttori riutilizzarono anche stele funerarie romane e frammenti architettonici da edifici civili e religiosi antichi. La sezione orientale soprattutto mostra pietre riutilizzate, mentre le parti superiori e alcune torri sono costruite con granito arancione e riempite con cunei minori. Le torri sono generalmente masse solide, anche se alcune sono vuote per ospitare una postazione di guardia.',
            pt: 'A construção seguiu uma sequência lógica determinada por necessidades defensivas. A seção oriental foi construída primeiro, pois era a mais vulnerável situada em terreno plano e facilmente acessível aos atacantes; daí apresenta maior altura (12 metros) e espessura (3 metros), com torres robustas. As muralhas mostram variedade de tipos de pedra e técnicas construtivas, refletindo diferentes fases e séculos de reparação. Os materiais principais são blocos de granito cinza reutilizados de construções romanas e antigas, granito laranja não trabalhado, e adições de calcário e argamassa. Os construtores até reutilizaram estelas funerárias romanas e fragmentos arquitetónicos de edifícios antigos civis e religiosos. A seção oriental mostra especialmente pedras reutilizadas, enquanto as partes superiores e algumas torres foram construídas com granito laranja e preenchidas com cunhas menores. As torres são geralmente maciças, embora algumas sejam ocas para posto de vigia.',
            fr: 'La construction a suivi une séquence logique déterminée par les besoins défensifs. La section orientale fut édifiée en premier, car elle était la plus vulnérable, située sur un terrain plat et facilement accessible aux attaquants ; elle présente donc la plus grande hauteur (12 mètres) et épaisseur (3 mètres), avec des tours robustes. Les murailles présentent une variété de types de pierres et de techniques de construction, reflétant les différentes phases et siècles de réparations. Les principaux matériaux sont des blocs de granit gris réutilisés provenant de bâtiments romains et anciens, du granit orange non taillé, et des ajouts de calcaire et de mortier. Les constructeurs ont même réutilisé des stèles funéraires romaines et des fragments architecturaux issus d\'anciens édifices civils et religieux. La section orientale montre spécialement les pierres réutilisées, tandis que les parties supérieures et certaines tours furent édifiées avec du granit orange et remplies de petites cales. Les tours sont généralement pleines, bien que certaines soient creuses pour accueillir des postes de garde.'
          }),
          text({
            en: 'The architectural ensemble is crowned by rows of masonry merlons on the wall-tops, most standardised with a double-pitched roof during 20th-century restorations. Nine main gates and several secondary posterns open through the wall, each with a distinct history. The most monumental entrances, Alcázar Gate and San Vicente Gate, are flanked by twin towers over 20 meters high joined by semicircular arches. The fortress-like apse of the Cathedral of Ávila integrates with the wall, merging religious and military functions. Guard duties and maintenance were the responsibility of various noble families and the local people over centuries.',
            es: 'El conjunto arquitectónico está coronado por hileras de almenas de mampostería en la parte superior de la muralla, la mayoría estandarizadas con tejado doble durante las restauraciones del siglo XX. Nueve puertas principales y varias poternas secundarias se abren en la muralla, cada una con historia propia. Los accesos más monumentales, la Puerta del Alcázar y la Puerta de San Vicente, están flanqueados por torres gemelas de más de 20 metros unidas por arcos semicirculares. El ábside fortificado de la Catedral de Ávila se integra con la muralla, fusionando las funciones religiosa y militar. Las tareas de vigilancia y el mantenimiento fueron responsabilidad de diversas familias nobles y del pueblo a lo largo de los siglos.',
            it: 'L\'insieme architettonico è coronato da file di merli in muratura sulla sommità delle mura, per lo più standardizzati con tetto a doppia falda durante i restauri del XX secolo. Nove porte principali e diverse poterne secondarie si aprono nelle mura, ciascuna con una storia distinta. Gli ingressi più monumentali, Porta dell\'Alcázar e Porta di San Vicente, sono affiancati da torri gemelle alte oltre 20 metri unite da archi semicircolari. L\'abside-fortezza della Cattedrale di Ávila si integra con le mura, fondendo funzioni religiose e militari. I compiti di guardia e di manutenzione furono affidati nel tempo alle varie famiglie nobili e alla gente del luogo.',
            pt: 'O conjunto arquitetônico é coroado por fileiras de merlões de alvenaria no topo das muralhas, grande parte padronizadas com telhado de duas águas durante as restaurações do século XX. Nove portas principais e várias poternas secundárias se abrem nas muralhas, cada uma com sua história distinta. Os acessos mais monumentais, o Portão do Alcázar e o Portão de San Vicente, são ladeados por torres gêmeas de mais de 20 metros unidas por arcos semicirculares. O ábside-fortaleza da Catedral de Ávila integra-se às muralhas, fundindo funções religiosas e militares. As tarefas de vigilância e manutenção foram responsabilidade de diversas famílias nobres e do povo ao longo dos séculos.',
            fr: 'L\'ensemble architectural est couronné par des rangées de merlons maçonnés sur le sommet des murailles, la plupart uniformisés avec un toit à double pente lors des restaurations du XXe siècle. Neuf portes principales et plusieurs poternes secondaires percent la muraille, chacune ayant une histoire distincte. Les entrées les plus monumentales, la porte de l\'Alcázar et la porte San Vicente, sont flanquées de tours jumelles de plus de 20 mètres reliées par des arcs semi-circulaires. L\'abside fortifiée de la cathédrale d\'Ávila s\'intègre aux murailles, mêlant fonctions religieuses et militaires. Les devoirs de garde et d\'entretien étaient la responsabilité de diverses familles nobles et du peuple local au fil des siècles.'
          }),
          text({
            en: 'The Walls of Ávila have served not only as a defensive structure but also as a physical and symbolic boundary between urban life and the surrounding territory. During the Middle Ages, their upkeep depended on all social classes, and over time their purely military function decreased. Today, the walls are considered the best-preserved Romanesque monument in Europe. Declared a National Monument in 1884 and a UNESCO World Heritage Site in 1985, they remain the city\'s universal symbol and offer visitors a tangible connection to more than nine centuries of history.',
            es: 'Las murallas de Ávila han servido no solo como defensa sino también como límite físico y simbólico entre la vida urbana y el territorio circundante. En la Edad Media, su mantenimiento dependió de todas las clases sociales, y con el tiempo disminuyó su función puramente militar. Actualmente, se consideran el monumento románico mejor conservado de Europa. Declaradas Monumento Nacional en 1884 y Patrimonio Mundial de la UNESCO en 1985, siguen siendo el símbolo universal de la ciudad y ofrecen a los visitantes una conexión tangible con más de nueve siglos de historia.',
            it: 'Le mura di Ávila hanno servito non solo da struttura difensiva, ma anche come confine fisico e simbolico tra la vita urbana e il territorio circostante. Nel Medioevo, la loro manutenzione dipendeva da tutte le classi sociali, e col tempo la funzione prettamente militare diminuì. Oggi sono considerate il monumento romanico meglio conservato d\'Europa. Dichiarate Monumento Nazionale nel 1884 e Patrimonio Mondiale UNESCO nel 1985, restano il simbolo universale della città e offrono ai visitatori un contatto tangibile con oltre nove secoli di storia.',
            pt: 'As muralhas de Ávila serviram não apenas como defesa, mas também como limite físico e simbólico entre a vida urbana e o território circundante. Na Idade Média, sua manutenção dependia de todas as classes sociais, e com o tempo sua função estritamente militar diminuiu. Atualmente, são consideradas o monumento românico mais bem preservado da Europa. Declaradas Monumento Nacional em 1884 e Patrimônio Mundial pela UNESCO em 1985, continuam sendo o símbolo universal da cidade e oferecem aos visitantes uma ligação tangível com mais de nove séculos de história.',
            fr: 'Les murailles d\'Ávila ont servi non seulement de défense, mais aussi de limite physique et symbolique entre la vie urbaine et le territoire environnant. Au Moyen Âge, leur entretien dépendait de toutes les classes sociales et, avec le temps, leur fonction militaire diminua. Aujourd\'hui, elles sont considérées comme le monument roman le mieux conservé d\'Europe. Déclarées Monument National en 1884 et Patrimoine Mondial de l\'UNESCO en 1985, elles demeurent le symbole universel de la ville et offrent aux visiteurs une connexion tangible avec plus de neuf siècles d\'histoire.'
          }),
        ],
      },
    ],
    coordinates: [40.6567, -4.6995],
    images: [
      'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2007/08/07/661642a.jpg',
      'https://www.turismocastillayleon.com/es/patrimonio-cultura/murallas-puertas/subida-muralla-avila.ficheros/39877-37177_SX_1_bic.jpg/g,39877-37177_SX_1_bic.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/murallas-en.mp3',
      es: 'https://example.com/audio/murallas-es.mp3',
      it: 'https://example.com/audio/murallas-it.mp3',
      pt: 'https://example.com/audio/murallas-pt.mp3',
      fr: 'https://example.com/audio/murallas-fr.mp3',
    }),
    category: 'monument',
    duration: 45,
    order: 1,
  },
  {
    id: 'catedral',
    name: text({
      en: 'Ávila Cathedral',
      es: 'Catedral de Ávila',
      it: 'Cattedrale di Ávila',
      pt: 'Catedral de Ávila',
      fr: 'Cathédrale d\'Ávila',
    }),
    description: text({
      en: 'Built into the city walls, this unique cathedral fortress dates from the 12th century. It showcases stunning Gothic architecture and houses important religious artworks.',
      es: 'Integrada en las murallas, esta singular catedral-fortaleza data del siglo XII. Exhibe una impresionante arquitectura gótica y alberga valiosas obras de arte sacro.',
      it: 'Incorporata nelle mura cittadine, questa singolare cattedrale-fortezza risale al XII secolo. Mostra una straordinaria architettura gotica e custodisce importanti opere sacre.',
      pt: 'Construída junto às muralhas, esta singular catedral-fortaleza é do século XII. Ostenta uma arquitetura gótica deslumbrante e guarda importantes obras sacras.',
      fr: 'Intégrée aux remparts, cette cathédrale-forteresse unique date du XIIe siècle. Elle dévoile une architecture gothique remarquable et abrite d\'importantes œuvres religieuses.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'Built into the city walls, this unique cathedral fortress dates from the 12th century. It showcases stunning Gothic architecture and houses important religious artworks.',
            es: 'Integrada en las murallas, esta singular catedral-fortaleza data del siglo XII. Exhibe una impresionante arquitectura gótica y alberga valiosas obras de arte sacro.',
            it: 'Incorporata nelle mura cittadine, questa singolare cattedrale-fortezza risale al XII secolo. Mostra una straordinaria architettura gotica e custodisce importanti opere sacre.',
            pt: 'Construída junto às muralhas, esta singular catedral-fortaleza é do século XII. Ostenta uma arquitetura gótica deslumbrante e guarda importantes obras sacras.',
            fr: 'Intégrée aux remparts, cette cathédrale-forteresse unique date du XIIe siècle. Elle dévoile une architecture gothique remarquable et abrite d\'importantes œuvres religieuses.',
          }),
        ],
      },
    ],
    coordinates: [40.6561, -4.6989],
    images: [
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/224000/224942-Avila-Cathedral.jpg',
      'https://megaconstrucciones.net/images/edificios-religiosos/foto5/avila-catedral.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/catedral-en.mp3',
      es: 'https://example.com/audio/catedral-es.mp3',
      it: 'https://example.com/audio/catedral-it.mp3',
      pt: 'https://example.com/audio/catedral-pt.mp3',
      fr: 'https://example.com/audio/catedral-fr.mp3',
    }),
    category: 'church',
    duration: 30,
    order: 2,
  },
  {
    id: 'plaza-mercado',
    name: text({
      en: 'Plaza del Mercado Chico',
      es: 'Plaza del Mercado Chico',
      it: 'Plaza del Mercado Chico',
      pt: 'Plaza del Mercado Chico',
      fr: 'Plaza del Mercado Chico',
    }),
    description: text({
      en: 'The heart of Ávila since medieval times, this charming square is surrounded by arcaded buildings and home to the impressive City Hall.',
      es: 'El corazón de Ávila desde la Edad Media, esta encantadora plaza está rodeada de soportales y alberga el imponente Ayuntamiento.',
      it: 'Il cuore di Ávila fin dal Medioevo, questa piazza incantevole è circondata da portici ed è sede dell\'imponente municipio.',
      pt: 'O coração de Ávila desde a Idade Média, esta charmosa praça é cercada por arcadas e abriga o imponente edifício da câmara municipal.',
      fr: 'Cœur d\'Ávila depuis le Moyen Âge, cette place charmante est bordée d\'arcades et accueille l\'imposant hôtel de ville.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'The heart of Ávila since medieval times, this charming square is surrounded by arcaded buildings and home to the impressive City Hall.',
            es: 'El corazón de Ávila desde la Edad Media, esta encantadora plaza está rodeada de soportales y alberga el imponente Ayuntamiento.',
            it: 'Il cuore di Ávila fin dal Medioevo, questa piazza incantevole è circondata da portici ed è sede dell\'imponente municipio.',
            pt: 'O coração de Ávila desde a Idade Média, esta charmosa praça é cercada por arcadas e abriga o imponente edifício da câmara municipal.',
            fr: 'Cœur d\'Ávila depuis le Moyen Âge, cette place charmante est bordée d\'arcades et accueille l\'imposant hôtel de ville.',
          }),
        ],
      },
    ],
    coordinates: [40.6565, -4.6978],
    images: [
      'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2025-04/images/avila_-_46939602825_plaza_del_mercado_chico_edited.jpg?VersionId=.7L8Ss_svGksZCOAr0JW2cenRPKTUoSz&h=29c25d84&itok=L4aTYqFr',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/plaza-mercado-en.mp3',
      es: 'https://example.com/audio/plaza-mercado-es.mp3',
      it: 'https://example.com/audio/plaza-mercado-it.mp3',
      pt: 'https://example.com/audio/plaza-mercado-pt.mp3',
      fr: 'https://example.com/audio/plaza-mercado-fr.mp3',
    }),
    category: 'square',
    duration: 20,
    order: 3,
  },
  {
    id: 'basilica-vicente',
    name: text({
      en: 'Basilica de San Vicente',
      es: 'Basílica de San Vicente',
      it: 'Basilica di San Vicente',
      pt: 'Basílica de São Vicente',
      fr: 'Basilique San Vicente',
    }),
    description: text({
      en: 'This Romanesque masterpiece honors the martyr San Vicente. Its elaborate western portal and sculpted tomb are remarkable examples of 12th-century art.',
      es: 'Esta joya románica honra al mártir San Vicente. Su elaborado pórtico occidental y el sepulcro esculpido son ejemplos sobresalientes del arte del siglo XII.',
      it: 'Questo capolavoro romanico celebra il martire San Vicente. Il portale occidentale riccamente decorato e il sepolcro scolpito sono splendidi esempi di arte del XII secolo.',
      pt: 'Esta obra-prima românica homenageia o mártir São Vicente. O elaborado portal ocidental e o túmulo esculpido são notáveis exemplos de arte do século XII.',
      fr: 'Ce chef-d\'oeuvre roman rend hommage au martyr Saint Vincent. Son portail occidental orné et son tombeau sculpté sont d\'extraordinaires témoins de l\'art du XIIe siècle.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'This Romanesque masterpiece honors the martyr San Vicente. Its elaborate western portal and sculpted tomb are remarkable examples of 12th-century art.',
            es: 'Esta joya románica honra al mártir San Vicente. Su elaborado pórtico occidental y el sepulcro esculpido son ejemplos sobresalientes del arte del siglo XII.',
            it: 'Questo capolavoro romanico celebra il martire San Vicente. Il portale occidentale riccamente decorato e il sepolcro scolpito sono splendidi esempi di arte del XII secolo.',
            pt: 'Esta obra-prima românica homenageia o mártir São Vicente. O elaborado portal ocidental e o túmulo esculpido são notáveis exemplos de arte do século XII.',
            fr: 'Ce chef-d\'oeuvre roman rend hommage au martyr Saint Vincent. Son portail occidental orné et son tombeau sculpté sont d\'extraordinaires témoins de l\'art du XIIe siècle.',
          }),
        ],
      },
    ],
    coordinates: [40.6577, -4.6985],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Basilica_of_San_Vicente%2C_%C3%81vila%2C_Espa%C3%B1a.jpg/1200px-Basilica_of_San_Vicente%2C_%C3%81vila%2C_Espa%C3%B1a.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/basilica-vicente-en.mp3',
      es: 'https://example.com/audio/basilica-vicente-es.mp3',
      it: 'https://example.com/audio/basilica-vicente-it.mp3',
      pt: 'https://example.com/audio/basilica-vicente-pt.mp3',
      fr: 'https://example.com/audio/basilica-vicente-fr.mp3',
    }),
    category: 'church',
    duration: 25,
    order: 4,
  },
  {
    id: 'cuatro-postes',
    name: text({
      en: 'Los Cuatro Postes',
      es: 'Los Cuatro Postes',
      it: 'Los Cuatro Postes',
      pt: 'Los Cuatro Postes',
      fr: 'Los Cuatro Postes',
    }),
    description: text({
      en: 'This iconic monument offers the most photographed view of Ávila. The four columns monument provides spectacular panoramic views of the walled city.',
      es: 'Este monumento icónico ofrece la vista más fotografiada de Ávila. Sus cuatro columnas brindan panorámicas espectaculares de la ciudad amurallada.',
      it: 'Questo monumento iconico offre la vista più fotografata di Ávila. Le quattro colonne regalano panorami spettacolari sulla città murata.',
      pt: 'Este monumento icônico oferece a vista mais fotografada de Ávila. As quatro colunas proporcionam panoramas espetaculares da cidade murada.',
      fr: 'Ce monument emblématique offre la vue la plus photographiée d\'Ávila. Ses quatre colonnes dévoilent des panoramas spectaculaires sur la ville fortifiée.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'This iconic monument offers the most photographed view of Ávila. The four columns monument provides spectacular panoramic views of the walled city.',
            es: 'Este monumento icónico ofrece la vista más fotografiada de Ávila. Sus cuatro columnas brindan panorámicas espectaculares de la ciudad amurallada.',
            it: 'Questo monumento iconico offre la vista più fotografata di Ávila. Le quattro colonne regalano panorami spettacolari sulla città murata.',
            pt: 'Este monumento icônico oferece a vista mais fotografada de Ávila. As quatro colunas proporcionam panoramas espetaculares da cidade murada.',
            fr: 'Ce monument emblématique offre la vue la plus photographiée d\'Ávila. Ses quatre colonnes dévoilent des panoramas spectaculaires sur la ville fortifiée.',
          }),
        ],
      },
    ],
    coordinates: [40.6532, -4.7087],
    images: [
      'https://www.kevmrc.com/wp-content/uploads/2016/12/mirador-los-cuatro-postes-avila-spain.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/cuatro-postes-en.mp3',
      es: 'https://example.com/audio/cuatro-postes-es.mp3',
      it: 'https://example.com/audio/cuatro-postes-it.mp3',
      pt: 'https://example.com/audio/cuatro-postes-pt.mp3',
      fr: 'https://example.com/audio/cuatro-postes-fr.mp3',
    }),
    category: 'viewpoint',
    duration: 15,
    order: 5,
  },
  {
    id: 'convento-teresa',
    name: text({
      en: 'Convent of Saint Teresa',
      es: 'Convento de Santa Teresa',
      it: 'Convento di Santa Teresa',
      pt: 'Convento de Santa Teresa',
      fr: 'Couvent Sainte Thérèse',
    }),
    description: text({
      en: 'Built on the birthplace of Saint Teresa of Ávila, this baroque convent is a major pilgrimage site. Explore the museum dedicated to her life and legacy.',
      es: 'Construido sobre la casa natal de Santa Teresa de Jesús, este convento barroco es un importante lugar de peregrinación. Explora el museo dedicado a su vida y legado.',
      it: 'Costruito sul luogo natale di Santa Teresa d\'Ávila, questo convento barocco è un importante luogo di pellegrinaggio. Esplora il museo dedicato alla sua vita e alla sua eredità.',
      pt: 'Erguido sobre o local de nascimento de Santa Teresa de Ávila, este convento barroco é um importante destino de peregrinação. Visite o museu dedicado à sua vida e legado.',
      fr: 'Édifié sur le lieu de naissance de Sainte Thérèse d\'Ávila, ce couvent baroque est un lieu de pèlerinage majeur. Découvrez le musée consacré à sa vie et à son héritage.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'Built on the birthplace of Saint Teresa of Ávila, this baroque convent is a major pilgrimage site. Explore the museum dedicated to her life and legacy.',
            es: 'Construido sobre la casa natal de Santa Teresa de Jesús, este convento barroco es un importante lugar de peregrinación. Explora el museo dedicado a su vida y legado.',
            it: 'Costruito sul luogo natale di Santa Teresa d\'Ávila, questo convento barocco è un importante luogo di pellegrinaggio. Esplora il museo dedicato alla sua vita e alla sua eredità.',
            pt: 'Erguido sobre o local de nascimento de Santa Teresa de Ávila, este convento barroco é um importante destino de peregrinação. Visite o museu dedicado à sua vida e legado.',
            fr: 'Édifié sur le lieu de naissance de Sainte Thérèse d\'Ávila, ce couvent baroque est un lieu de pèlerinage majeur. Découvrez le musée consacré à sa vie e à son héritage.',
          }),
        ],
      },
    ],
    coordinates: [40.6554, -4.6967],
    images: [
      'https://queverenelmundo.com/wp-content/uploads/Convento-Santa-Teresa-Avila.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/convento-teresa-en.mp3',
      es: 'https://example.com/audio/convento-teresa-es.mp3',
      it: 'https://example.com/audio/convento-teresa-it.mp3',
      pt: 'https://example.com/audio/convento-teresa-pt.mp3',
      fr: 'https://example.com/audio/convento-teresa-fr.mp3',
    }),
    category: 'church',
    duration: 30,
    order: 6,
  },
  {
    id: 'monasterio-santo-tomas',
    name: text({
      en: 'Monasterio de Santo Tomás',
      es: 'Monasterio de Santo Tomás',
      it: 'Monasterio de Santo Tomás',
      pt: 'Monasterio de Santo Tomás',
      fr: 'Monasterio de Santo Tomás',
    }),
    description: text({
      en: 'A magnificent Dominican monastery from the 15th century, housing the tomb of Prince Juan, son of the Catholic Monarchs. Features three beautiful cloisters and impressive Gothic architecture.',
      es: 'Magnífico monasterio dominico del siglo XV que conserva la tumba del príncipe Juan, hijo de los Reyes Católicos. Cuenta con tres bellos claustros y una impresionante arquitectura gótica.',
      it: 'Magnifico monastero domenicano del XV secolo che custodisce la tomba del principe Juan, figlio dei Re Cattolici. Presenta tre splendidi chiostri e una notevole architettura gotica.',
      pt: 'Magnífico mosteiro dominicano do século XV que abriga o túmulo do príncipe João, filho dos Reis Católicos. Possui três belos claustros e impressionante arquitetura gótica.',
      fr: 'Magnifique monastère dominicain du XVe siècle abritant le tombeau du prince Jean, fils des Rois Catholiques. Il compte trois beaux cloîtres et une architecture gothique remarquable.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'Welcome to one of the brightest jewels of Spanish Isabelline Gothic! The Royal Monastery of Santo Tomás in Ávila, recognized as a UNESCO World Heritage Site in 1985, is not only an arresting architectural complex but also a vital witness to the era of the Catholic Monarchs and a treasure chest of captivating stories.',
            es: '\¡Bienvenidos a una de las joyas más destacadas del gótico isabelino español! El Real Monasterio de Santo Tomás de Ávila, declarado Patrimonio de la Humanidad en 1985, no es solo un conjunto arquitectónico impresionante, sino un testigo fundamental de la época de los Reyes Católicos y un cofre de historias cautivadoras.',
            it: 'Benvenuti in una delle gemme più luminose del gotico isabellino spagnolo! Il Real Monastero di Santo Tomás di Ávila, dichiarato Patrimonio dell\'Umanità nel 1985, non è solo un insieme architettonico sorprendente, ma anche un testimone fondamentale dell\'epoca dei Re Cattolici e scrigno di storie avvincenti.',
            pt: 'Bem-vindos a uma das joias mais brilhantes do gótico isabelino espanhol! O Real Mosteiro de Santo Tomás de Ávila, declarado Patrimônio da Humanidade em 1985, não é apenas um conjunto arquitetônico impressionante, mas também uma testemunha essencial da época dos Reis Católicos e um cofre de histórias fascinantes.',
            fr: 'Bienvenue dans l\'une des perles les plus éclatantes du gothique isabellin espagnol ! Le Real Monasterio de Santo Tomás d\'Ávila, inscrit au patrimoine mondial en 1985, n\'est pas seulement un ensemble architectural saisissant, c\'est aussi un témoin essentiel de l\'époque des Rois Catholiques et un coffre rempli d\'histoires captivantes.',
          }),
          text({
            en: 'Get ready to step into a unique enclosure celebrated for its three magnificent cloisters—a feature that makes it an exceptional architectural ensemble.',
            es: 'Prepárense para adentrarse en un recinto único, célebre por sus tres claustros magníficos, una característica que lo convierte en un conjunto arquitectónico excepcional.',
            it: 'Preparatevi a entrare in un complesso unico, celebre per i suoi tre magnifici chiostri: un tratto che lo rende un insieme architettonico eccezionale.',
            pt: 'Prepare-se para entrar em um recinto singular, célebre pelos seus três claustros magníficos — uma característica que o transforma em um conjunto arquitetônico excepcional.',
            fr: 'Préparez-vous à pénétrer dans un ensemble unique, renommé pour ses trois cloîtres magnifiques — un trait qui en fait un ensemble architectural exceptionnel.',
          }),
        ],
      },
      {
        title: text({
            en: 'A Look at the Origins: Monarchs, Friars, and Torquemada',
            es: 'Un vistazo a los orígenes: reyes, frailes y Torquemada',
            it: 'Uno sguardo alle origini: sovrani, frati e Torquemada',
            pt: 'Um olhar sobre as origens: reis, frades e Torquemada',
            fr: 'Un regard sur les origines : rois, frères et Torquemada',
          }),
        paragraphs: [
          text({
            en: 'The story of the monastery begins in 1480, when Hernán Núñez Arnalte, treasurer and secretary to the Catholic Monarchs, conceived it. Although he died before construction began, he entrusted his wife, Doña María Dávila, and friar Tomás de Torquemada with the project: to raise a Dominican convent dedicated to Saint Thomas Aquinas.',
            es: 'La historia del monasterio comienza en 1480, cuando D. Hernán Núñez Arnalte, tesorero y secretario de los Reyes Católicos, lo concibió. Aunque falleció antes de iniciar las obras, encargó a su esposa Doña María Dávila y a fray Tomás de Torquemada continuar el proyecto: levantar un convento dominico dedicado a Santo Tomás de Aquino.',
            it: 'La storia del monastero inizia nel 1480, quando Hernán Núñez Arnalte, tesoriere e segretario dei Re Cattolici, lo ideò. Sebbene morisse prima dell\'avvio dei lavori, incaricò la moglie, Doña María Dávila, e frate Tomás de Torquemada di portare avanti il progetto: erigere un convento domenicano dedicato a San Tommaso d\'Aquino.',
            pt: 'A história do mosteiro começa em 1480, quando Hernán Núñez Arnalte, tesoureiro e secretário dos Reis Católicos, o idealizou. Embora tenha falecido antes do início das obras, encarregou a esposa, Dona María Dávila, e o frade Tomás de Torquemada de prosseguir com o projeto: erguer um convento dominicano dedicado a São Tomás de Aquino.',
            fr: 'L\'histoire du monastère débute en 1480, lorsque Hernán Núñez Arnalte, trésorier et secrétaire des Rois Catholiques, en eut l\'idée. Bien qu\'il soit mort avant le début des travaux, il chargea son épouse Doña María Dávila et le frère Tomás de Torquemada de poursuivre le projet : édifier un couvent dominicain dédié à Saint Thomas d\'Aquin.',
          }),
          text({
            en: 'Work began in 1482 under the direction of Martín de Solórzano and concluded in 1493 thanks to the generous funding of the Catholic Monarchs, who chose the new convent as their summer residence and, most importantly, as the burial place for their heir.',
            es: 'Las obras arrancaron en 1482 bajo la dirección de Martín de Solórzano y concluyeron en 1493 gracias a la generosa financiación de los Reyes Católicos, que eligieron el nuevo convento como residencia de verano y, lo más importante, como lugar de sepultura para su heredero.',
            it: 'I lavori iniziarono nel 1482 sotto la direzione di Martín de Solórzano e si conclusero nel 1493 grazie alla generosa partecipazione dei Re Cattolici, che scelsero il nuovo convento come residenza estiva e, soprattutto, come luogo di sepoltura per il loro erede.',
            pt: 'As obras começaram em 1482 sob a direção de Martín de Solórzano e terminaram em 1493 graças ao apoio generoso dos Reis Católicos, que escolheram o novo convento como residência de verão e, sobretudo, como lugar de sepultura para o herdeiro.',
            fr: 'Les travaux commencèrent en 1482 sous la direction de Martín de Solórzano et s\'achevèrent en 1493 grâce au financement généreux des Rois Catholiques, qui choisirent le nouveau couvent comme résidence d\'été et, surtout, comme lieu de sépulture pour leur héritier.',
          }),
          text({
            en: 'Beyond its religious and courtly role, the convent played a decisive part in history: the tribunal of the Inquisition was installed here, and friar Tomás de Torquemada, the first grand inquisitor, lived within its walls until his death on 16 September 1498.',
            es: 'Además de su función religiosa y cortesana, el convento tuvo un capítulo decisivo en la historia: aquí se instaló el tribunal de la Inquisición y residió fray Tomás de Torquemada, primer inquisidor general, hasta su fallecimiento el 16 de septiembre de 1498.',
            it: 'Oltre alla funzione religiosa e di corte, il convento ebbe un ruolo decisivo nella storia: vi fu insediato il tribunale dell\'Inquisizione e vi abitò frate Tomás de Torquemada, primo inquisitore generale, fino alla sua morte il 16 settembre 1498.',
            pt: 'Além do papel religioso e cortesão, o convento teve um capítulo decisivo na história: aqui se instalou o tribunal da Inquisição e viveu o frade Tomás de Torquemada, primeiro inquisidor-geral, até sua morte em 16 de setembro de 1498.',
            fr: 'Au-delà de son rôle religieux et courtois, le couvent joua un rôle décisif dans l\'histoire : le tribunal de l\'Inquisition y fut établi et le frère Tomás de Torquemada, premier inquisiteur général, y résida jusqu\'à sa mort le 16 septembre 1498.',
          }),
        ],
      },
      {
        title: text({
            en: 'Royal Memory: The Tomb of Prince Don Juan',
            es: 'La memoria real: el sepulcro del infante don Juan',
            it: 'La memoria reale: il sepolcro dell\'infante don Juan',
            pt: 'Memória real: o sepulcro do infante Dom João',
            fr: 'Mémoire royale : le tombeau de l\'infant don Juan',
          }),
        paragraphs: [
          text({
            en: 'One of the most moving spaces is the tomb of Prince Don Juan, the only male heir of the Catholic Monarchs, who died prematurely at the age of 19 in 1497.',
            es: 'Uno de los espacios más conmovedores es el sepulcro del príncipe don Juan, único hijo varón de los Reyes Católicos, que murió prematuramente a los 19 años en 1497.',
            it: 'Uno degli spazi più toccanti è il sepolcro del principe don Juan, unico figlio maschio dei Re Cattolici, morto prematuramente a 19 anni nel 1497.',
            pt: 'Um dos espaços mais comoventes é o túmulo do príncipe Dom João, único filho homem dos Reis Católicos, que morreu prematuramente aos 19 anos em 1497.',
            fr: 'L\'un des lieux les plus émouvants est le tombeau du prince don Juan, unique fils des Rois Catholiques, mort prématurément à 19 ans en 1497.',
          }),
          text({
            en: 'By express wish of Queen Isabella, his remains rest here in a Renaissance marble sarcophagus carved by the Florentine sculptor Domenico Fancelli between 1511 and 1512, inspired by the royal tombs of Granada.',
            es: 'Por expreso deseo de la reina Isabel, sus restos reposan aquí en un sarcófago renacentista tallado en mármol por el florentino Doménico Fancelli entre 1511 y 1512, inspirado en los sepulcros reales de Granada.',
            it: 'Per espresso desiderio della regina Isabella, le sue spoglie riposano qui in un sarcofago rinascimentale in marmo scolpito dal fiorentino Domenico Fancelli tra il 1511 e il 1512, ispirato ai sepolcri reali di Granada.',
            pt: 'Por expresso desejo da rainha Isabel, seus restos repousam aqui em um sarcófago renascentista em mármore talhado pelo florentino Domenico Fancelli entre 1511 e 1512, inspirado nos túmulos reais de Granada.',
            fr: 'Par volonté expresse de la reine Isabelle, ses restes reposent ici dans un sarcophage renaissance en marbre sculpté par le Florentin Domenico Fancelli entre 1511 et 1512, inspiré des tombeaux royaux de Grenade.',
          }),
          text({
            en: 'The prince is portrayed as a serene young warrior, surrounded by virtues, allegories, and saints; although several reliefs were damaged during the Peninsular War and the silver grille disappeared, the monument still radiates the dynasty\'s unfulfilled hopes.',
            es: 'El príncipe aparece representado como un joven guerrero sereno, rodeado de virtudes, alegorías y santos; aunque varios relieves fueron dañados durante la Guerra de la Independencia y la verja de plata desapareció, el monumento sigue irradiando la esperanza truncada de la dinastía.',
            it: 'Il principe è raffigurato come un giovane guerriero sereno, circondato da virtù, allegorie e santi; sebbene diversi rilievi siano stati danneggiati durante la Guerra d\'Indipendenza e la cancellata d\'argento sia scomparsa, il monumento irradia ancora la speranza interrotta della dinastia.',
            pt: 'O príncipe é representado como um jovem guerreiro sereno, rodeado de virtudes, alegorias e santos; embora vários relevos tenham sido danificados durante a Guerra da Independência e a grade de prata tenha desaparecido, o monumento ainda irradia a esperança interrompida da dinastia.',
            fr: 'Le prince est représenté como un jeune guerrier serin, entouré de vertus, d\'allégories et de saints ; bien que plusieurs reliefs aient été endommagés pendant la guerre d\'Indépendance et que la grille d\'argent ait disparu, le monument continue d\'irradier l\'espérance interrompue de la dynastie.',
          }),
        ],
      },
      {
        title: text({
            en: 'The Three Storytelling Cloisters',
            es: 'Los tres claustros que cuentan una historia',
            it: 'I tre chiostri che raccontano una storia',
            pt: 'Os três claustros que contam uma história',
            fr: 'Les trois cloîtres qui racontent une histoire',
          }),
        paragraphs: [
          text({
            en: 'A visit to the Monastery of Santo Tomás unfolds across three cloisters, each with its own personality and tales still etched in stone.',
            es: 'La visita al Monasterio de Santo Tomás se articula en tres claustros, cada uno con personalidad propia y relatos que se siguen leyendo en sus muros.',
            it: 'La visita al Monastero di Santo Tomás si articola in tre chiostri, ognuno con una propria personalità e storie ancora scritte tra le sue pietre.',
            pt: 'A visita ao Mosteiro de Santo Tomás se organiza em três claustros, cada um com personalidade própria e narrativas que ainda se leem nas suas paredes.',
            fr: 'La visite du monastère de Santo Tomás s\'articule autour de trois cloîtres, chacun avec sa personnalité et des récits encore gravés dans la pierre.',
          }),
        ],
        listItems: [
          text({
            en: 'Novitiate Cloister: the oldest and most intimate, Tuscan in style, measuring 12.70 by 14.40 meters, with a sober two-storey granite structure and a well curiously set to one side.',
            es: 'Claustro del Noviciado: el más antiguo y recogido, de estilo toscano, mide 12,70 por 14,40 metros, luce una sobria estructura de granito de dos pisos y sorprende por su pozo desplazado hacia un lateral.',
            it: 'Chiostro del Noviziato: il più antico e raccolto, di stile toscano, misura 12,70 per 14,40 metri, presenta una sobria struttura in granito a due livelli e sorprende per il pozzo spostato su un lato.',
            pt: 'Claustro do Noviciado: o mais antigo e acolhedor, de estilo toscano, mede 12,70 por 14,40 metros, exibe uma sóbria estrutura de granito de dois pisos e surpreende pelo poço deslocado para uma das laterais.',
            fr: 'Cloître du Noviciat : le plus ancien et intime, de style toscan, mesure 12,70 sur 14,40 mètres, offre une sobre structure en granit à deux niveaux et surprend par son puits décalé sur un côté.',
          }),
          text({
            en: 'Cloister of Silence (or of the Departed): once the friars\' burial place, it measures 19.40 by 20.90 meters, displays Gothic ribbed vaults, seven doorways leading to different rooms, and a small washing corner before the refectory; the upper gallery gleams with the symbols of the Catholic Monarchs.',
            es: 'Claustro del Silencio (o de los Difuntos): antaño lugar de enterramiento de los frailes, mide 19,40 por 20,90 metros, muestra bóvedas góticas de crucería, siete portadas que conectan con distintas dependencias y un rincón de abluciones previo al refectorio; en la arquería superior brillan los símbolos de los Reyes Católicos.',
            it: 'Chiostro del Silenzio (o dei Defunti): un tempo luogo di sepoltura dei frati, misura 19,40 per 20,90 metri, presenta volte gotiche a crociera, sette ingressi che conducono a varie dipendenze e un angolo per le abluzioni prima del refettorio; nella galleria superiore risplendono i simboli dei Re Cattolici.',
            pt: 'Claustro do Silêncio (ou dos Defuntos): antigo local de sepultamento dos frades, mede 19,40 por 20,90 metros, exibe abóbadas góticas de ogivas, sete portas que ligam a diferentes dependências e um cantinho de abluções antes do refeitório; na galeria superior brilham os símbolos dos Reis Católicos.',
            fr: 'Cloître du Silence (ou des Défunts) : autrefois lieu d\'inhumation des frères, il mesure 19,40 sur 20,90 mètres, présente des voûtes gothiques d\'ogives, sept portes menant à diverses dépendances et un petit espace d\'ablutions avant le réfectoire ; dans la galerie supérieure scintillent les symboles des Rois Catholiques.',
          }),
          text({
            en: 'Cloister of the Monarchs: at 35 by 37.5 meters, it is the largest and brightest; it served as the royal summer palace and stands out for arches studded with Ávila\'s characteristic spheres and for having housed, on its south wing, the classrooms of the now-vanished University of Santo Tomás.',
            es: 'Claustro de los Reyes: con 35 por 37,5 metros, es el más amplio y luminoso; sirvió como palacio de verano para la corte y destaca por sus arcos adornados con bolas característicamente abulenses y por haber alojado, en su ala sur, las aulas de la desaparecida Universidad de Santo Tomás.',
            it: 'Chiostro dei Re: con i suoi 35 per 37,5 metri è il più ampio e luminoso; servì da palazzo estivo per la corte e si distingue per gli archi ornati dalle caratteristiche sfere abulensi e per aver ospitato, nell\'ala sud, le aule dell\'ormai scomparsa Università di Santo Tomás.',
            pt: 'Claustro dos Reis: com 35 por 37,5 metros, é o mais amplo e luminoso; serviu de palácio de verão para a corte e destaca-se pelos arcos adornados com as esferas características de Ávila e por ter abrigado, na ala sul, as salas da extinta Universidade de Santo Tomás.',
            fr: 'Cloître des Rois : avec ses 35 sur 37,5 mètres, c\'est le plus vaste et lumineux ; il servit de palais d\'été à la cour et se distingue par ses arcs ornés des sphères caractéristiques d\'Ávila et par avoir abrité, dans son aile sud, les salles de la défunte Université de Santo Tomás.',
          }),
        ],
      },
      {
        title: text({
            en: 'Treasures and Sacred Art in the Church',
            es: 'Tesoros y arte sacro en la iglesia',
            it: 'Tesori e arte sacra nella chiesa',
            pt: 'Tesouros e arte sacra na igreja',
            fr: 'Trésors et art sacré dans l\'église',
          }),
        paragraphs: [
          text({
            en: 'The church of the monastery, in flamboyant Gothic style, preserves a dazzling artistic program.',
            es: 'La iglesia del monasterio, de estilo gótico flamígero, preserva un programa artístico deslumbrante.',
            it: 'La chiesa del monastero, in stile gotico fiammeggiante, custodisce un programma artistico abbagliante.',
            pt: 'A igreja do mosteiro, de estilo gótico flamejante, preserva um programa artístico deslumbrante.',
            fr: 'L\'église du monastère, de style gothique flamboyant, conserve un programme artistique éblouissant.',
          }),
        ],
        listItems: [
          text({
            en: 'The Facade: a monumental portal with a depressed arch and two robust buttresses that trace an \"H\" for Hispanidad, lavishly decorated with spheres and flanked by ten Burgos-style statues attributed to Gil de Siloé and Diego de la Cruz.',
            es: 'La fachada: una portada monumental con arco escarzano y dos machones robustos que dibujan una \"H\" de Hispanidad, profusamente decorada con bolas y flanqueada por diez esculturas burgalesas atribuidas a Gil de Siloé y Diego de la Cruz.',
            it: 'La facciata: un portale monumentale con arco ribassato e due robusti pilastri che disegnano una \"H\" di Hispanidad, riccamente decorato da sfere e affiancato da dieci statue burgalesi attribuite a Gil de Siloé e Diego de la Cruz.',
            pt: 'A fachada: um portal monumental com arco abatido e dois maciços robustos que desenham um \"H\" de Hispanidade, profusamente decorado com bolas e ladeado por dez esculturas burgalesas atribuídas a Gil de Siloé e Diego de la Cruz.',
            fr: 'La façade : un portail monumental à arc surbaissé et deux puissants contreforts dessinant un \"H\" d\'Hispanidad, richement décoré de boules et flanqué de dix statues de style burgalais attribuées à Gil de Siloé et Diego de la Cruz.',
          }),
          text({
            en: 'The High Altarpiece: a masterpiece by the painter Pedro Berruguete, begun in 1494, rising 21 meters high with nineteen panels that narrate episodes from the life of Saint Thomas Aquinas.',
            es: 'El retablo mayor: obra maestra del pintor Pedro Berruguete, iniciado en 1494, se eleva 21 metros con diecinueve tablas que narran episodios de la vida de Santo Tomás de Aquino.',
            it: 'Il retablo maggiore: capolavoro del pittore Pedro Berruguete, iniziato nel 1494, si alza per 21 metri con diciannove tavole che narrano episodi della vita di San Tommaso d\'Aquino.',
            pt: 'O retábulo-mor: obra-prima do pintor Pedro Berruguete, iniciada em 1494, ergue-se 21 metros com dezenove painéis que narram episódios da vida de São Tomás de Aquino.',
            fr: 'Le retable majeur : chef-d\'oeuvre du peintre Pedro Berruguete, commencé en 1494, culmine à 21 mètres avec dix-neuf panneaux relatant des épisodes de la vie de Saint Thomas d\'Aquin.',
          }),
          text({
            en: 'The Choir: a wide ensemble of flamboyant Gothic walnut stalls by Martín Sánchez de Valladolid, with forty-five upper seats and thirty-four lower ones, where every backrest unfurls unique geometric and fantastic motifs.',
            es: 'El coro: un amplio conjunto de sillería de nogal gótico flamígero de Martín Sánchez de Valladolid, con cuarenta y cinco asientos altos y treinta y cuatro bajos, donde cada respaldo despliega motivos geométricos y fantásticos únicos.',
            it: 'Il coro: un ampio complesso di stalli in noce gotico fiammeggiante di Martín Sánchez de Valladolid, con quarantacinque sedili superiori e trentaquattro inferiori, in cui ogni schienale sfoggia motivi geometrici e fantastici unici.',
            pt: 'O coro: um amplo conjunto de cadeiras de nogueira em estilo gótico flamejante de Martín Sánchez de Valladolid, com quarenta e cinco assentos superiores e trinta e quatro inferiores, em que cada espaldar exibe motivos geométricos e fantásticos únicos.',
            fr: 'Le chœur : un vaste ensemble de stalles en noyer de style gothique flamboyant, œuvre de Martín Sánchez de Valladolid, avec quarante-cinq sièges supérieurs et trente-quatre inférieurs, où chaque dossier déploie des motifs géométriques et fantastiques uniques.',
          }),
          text({
            en: 'The Christ of Saint Teresa: in the homonymous chapel stands a striking sculpture attributed to Gil de Siloé; it was the spiritual refuge of Saint Teresa of Ávila, who prayed, confessed, and experienced some of her most intense visions here.',
            es: 'El Cristo de Santa Teresa: en la capilla homónima se venera una sobrecogedora talla atribuida a Gil de Siloé; fue refugio espiritual de Santa Teresa de Jesús, que aquí oraba, se confesaba y vivió algunas de sus visiones más intensas.',
            it: 'Il Cristo di Santa Teresa: nella cappella omonima si venera una suggestiva scultura attribuita a Gil de Siloé; fu il rifugio spirituale di Santa Teresa di Gesù, che qui pregava, si confessava e visse alcune delle sue visioni più intense.',
            pt: 'O Cristo de Santa Teresa: na capela homônima venera-se uma impressionante escultura atribuída a Gil de Siloé; foi o refúgio espiritual de Santa Teresa de Jesus, que aqui rezava, se confessava e viveu algumas de suas visões mais intensas.',
            fr: 'Le Christ de Sainte Thérèse : dans la chapelle éponyme se vénère une saisissante sculpture attribuée à Gil de Siloé ; ce fut le refuge spirituel de Sainte Thérèse d\'Avila, qui y priait, se confessait et y vécut certaines de ses visions les plus intenses.',
          }),
        ],
      },
      {
        title: text({
            en: 'Museums and Studies',
            es: 'Museos y estudios',
            it: 'Musei e studi',
            pt: 'Museus e estudos',
            fr: 'Musées et études',
          }),
        paragraphs: [
          text({
            en: 'The intellectual and exploratory legacy of the Dominican order is preserved in the museums housed in the Cloister of the Monarchs.',
            es: 'El legado intelectual y explorador de la orden dominica se conserva en los museos instalados en el Claustro de los Reyes.',
            it: 'L\'eredità intellettuale ed esplorativa dell\'ordine domenicano si conserva nei musei ospitati nel Chiostro dei Re.',
            pt: 'O legado intelectual e explorador da ordem dominicana preserva-se nos museus instalados no Claustro dos Reis.',
            fr: 'L\'héritage intellectuel et explorateur de l\'ordre dominicain est conservé dans les musées installés dans le cloître des Rois.',
          }),
        ],
        listItems: [
          text({
            en: 'Museum of Oriental Art: opened in 1964, it gathers Filipino ivories, ceramics, and objects from Japan, Vietnam, the Philippines, and China, collected by Dominican missionaries.',
            es: 'Museo de Arte Oriental: inaugurado en 1964, reúne marfiles filipinos, cerámicas y objetos procedentes de Japón, Vietnam, Filipinas y China, reunidos por misioneros dominicos.',
            it: 'Museo d\'Arte Orientale: inaugurato nel 1964, raccoglie avori filippini, ceramiche e oggetti provenienti da Giappone, Vietnam, Filippine e Cina, raccolti da missionari domenicani.',
            pt: 'Museu de Arte Oriental: inaugurado em 1964, reúne marfins filipinos, cerâmicas e objetos vindos do Japão, Vietnã, Filipinas e China, recolhidos por missionários dominicanos.',
            fr: 'Musée d\'Art Oriental : inauguré en 1964, il réunit des ivoires philippins, des céramiques et des objets venus du Japon, du Vietnam, des Philippines et de Chine, rapportés par des missionnaires dominicains.',
          }),
          text({
            en: 'Museum of Natural Sciences: adjacent to the first, it offers an outstanding collection of zoological specimens from the five continents, the fruit of decades of taxidermy and study.',
            es: 'Museo de Ciencias Naturales: contiguo al anterior, ofrece una notable colección de ejemplares zoológicos de los cinco continentes, fruto de décadas de taxidermia y estudio.',
            it: 'Museo di Scienze Naturali: adiacente al precedente, propone una notevole collezione di esemplari zoologici dei cinque continenti, frutto di decenni di tassidermia e ricerca.',
            pt: 'Museu de Ciências Naturais: adjacente ao anterior, apresenta uma notável coleção de espécimes zoológicos dos cinco continentes, fruto de décadas de taxidermia e estudo.',
            fr: 'Musée des Sciences Naturelles : attenant au premier, il présente une remarquable collection de spécimens zoologiques des cinq continents, fruit de décennies de taxidermie et d\'étude.',
          }),
        ],
      },
      {
        title: text({
            en: 'Practical Information for Your Visit',
            es: 'Información práctica para la visita',
            it: 'Informazioni pratiche per la visita',
            pt: 'Informações práticas para a visita',
            fr: 'Informations pratiques pour la visite',
          }),
        paragraphs: [
          text({
            en: 'The tour covers the cloisters, the church, the choir, the royal rooms, and the two museums, all accessible with the general admission ticket.',
            es: 'El recorrido abarca los claustros, la iglesia, el coro, los salones reales y los dos museos, todos accesibles con la entrada general.',
            it: 'Il percorso comprende i chiostri, la chiesa, il coro, le sale reali e i due musei, tutti visitabili con il biglietto generale.',
            pt: 'O percurso abrange os claustros, a igreja, o coro, os salões reais e os dois museus, todos acessíveis com o bilhete geral.',
            fr: 'Le parcours comprend les cloîtres, l\'église, le chœur, les salons royaux et les deux musées, tous accessibles avec le billet général.',
          }),
          text({
            en: 'The full price is 4 €, including an audio guide—an ideal companion to explore at your own pace.',
            es: 'La tarifa completa es de 4 €, e incluye audioguía, una invitación perfecta para profundizar a tu propio ritmo.',
            it: 'Il biglietto intero costa 4 € e include l\'audioguida: il compagno ideale per approfondire al tuo ritmo.',
            pt: 'A tarifa integral é de 4 €, com audioguia incluída — o companheiro ideal para aprofundar no seu ritmo.',
            fr: 'Le tarif plein est de 4 €, audioguide incluse, l\'alliée idéale pour approfondir à votre rythme.',
          }),
          text({
            en: 'Usual opening hours: daily from 10:30 to 14:00 and from 15:30 to 19:30; summer schedules tend to be extended, so it is worth checking in advance.',
            es: 'Horario habitual: todos los días de 10:30 a 14:00 y de 15:30 a 19:30; conviene comprobar los horarios de verano, que se amplían.',
            it: 'Orario abituale: tutti i giorni dalle 10:30 alle 14:00 e dalle 15:30 alle 19:30; conviene verificare gli orari estivi, solitamente prolungati.',
            pt: 'Horário habitual: todos os dias das 10h30 às 14h00 e das 15h30 às 19h30; vale a pena confirmar os horários de verão, que costumam ser ampliados.',
            fr: 'Horaires habituels : tous les jours de 10 h 30 à 14 h et de 15 h 30 à 19 h 30 ; les horaires d\'été étant prolongés, pensez à les vérifier à l\'avance.',
          }),
        ],
      },
    ],
    coordinates: [40.6528, -4.6945],
    images: [
      'https://monasteriosantotomas.com/wp-content/uploads/claustro-del-noviciado-monasterio-de-santo-tomas-1.jpg',
      'https://www.unaventanadesdemadrid.com/objetos/avilaii/sepulcro-principe-juan.jpg',
    ],
    audioUrl: text({
      en: 'https://ia801001.us.archive.org/16/items/santo-tomas-en/SantoTomasEN.m4a',
      es: 'https://ia902801.us.archive.org/29/items/santo-tomas/SantoTomas.mp3',
      it: 'https://ia902806.us.archive.org/3/items/santo-tomas-it/SantoTomasIT.m4a',
      pt: 'https://ia902801.us.archive.org/29/items/santo-tomas/SantoTomas-pt.mp3',
      fr: 'https://ia902801.us.archive.org/29/items/santo-tomas/SantoTomas-fr.mp3',
    }),
    category: 'church',
    duration: 35,
    order: 7,
  },
  {
    id: 'puerta-alcazar',
    name: text({
      en: 'Puerta del Alcázar',
      es: 'Puerta del Alcázar',
      it: 'Puerta del Alcázar',
      pt: 'Puerta del Alcázar',
      fr: 'Puerta del Alcázar',
    }),
    description: text({
      en: 'One of the nine monumental gates of the medieval walls. This imposing entrance showcases the military architecture of medieval Ávila with its twin towers.',
      es: 'Una de las nueve puertas monumentales de las murallas. Esta imponente entrada muestra la arquitectura militar medieval de Ávila con sus torres gemelas.',
      it: 'Una delle nove porte monumentali delle mura. Questo imponente ingresso mostra l\'architettura militare medievale di Ávila con le sue torri gemelle.',
      pt: 'Uma das nove portas monumentais das muralhas. Esta entrada imponente revela a arquitetura militar medieval de Ávila com suas torres gêmeas.',
      fr: 'L\'une des neuf portes monumentales des remparts. Cette imposante entrée illustre l\'architecture militaire médiévale d\'Ávila avec ses tours jumelles.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'One of the nine monumental gates of the medieval walls. This imposing entrance showcases the military architecture of medieval Ávila with its twin towers.',
            es: 'Una de las nueve puertas monumentales de las murallas. Esta imponente entrada muestra la arquitectura militar medieval de Ávila con sus torres gemelas.',
            it: 'Una delle nove porte monumentali delle mura. Questo imponente ingresso mostra l\'architettura militare medievale di Ávila con le sue torri gemelle.',
            pt: 'Uma das nove portas monumentais das muralhas. Esta entrada imponente revela a arquitetura militar medieval de Ávila com suas torres gêmeas.',
            fr: 'L\'une des neuf portes monumentales des remparts. Cette imposante entrée illustre l\'architecture militaire médiévale d\'Ávila avec ses tours jumelles.',
          }),
        ],
      },
    ],
    coordinates: [40.6569, -4.7012],
    images: [
      'https://www.terranostrum.es/images/content/full/Muralla-avila-4.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/puerta-alcazar-en.mp3',
      es: 'https://example.com/audio/puerta-alcazar-es.mp3',
      it: 'https://example.com/audio/puerta-alcazar-it.mp3',
      pt: 'https://example.com/audio/puerta-alcazar-pt.mp3',
      fr: 'https://example.com/audio/puerta-alcazar-fr.mp3',
    }),
    category: 'monument',
    duration: 15,
    order: 8,
  },
  {
    id: 'plaza-mercado-grande',
    name: text({
      en: 'Plaza del Mercado Grande',
      es: 'Plaza del Mercado Grande',
      it: 'Plaza del Mercado Grande',
      pt: 'Plaza del Mercado Grande',
      fr: 'Plaza del Mercado Grande',
    }),
    description: text({
      en: 'A spacious historic square that was once the site of the largest market in Ávila. Surrounded by noble houses and traditional architecture, it offers a glimpse into daily life through the centuries.',
      es: 'Amplia plaza histórica que albergó el mayor mercado de Ávila. Rodeada de casas nobiliarias y arquitectura tradicional, ofrece una ventana a la vida cotidiana a lo largo de los siglos.',
      it: 'Ampia piazza storica che ospitava il più grande mercato di Ávila. Circondata da palazzi nobiliari e architettura tradizionale, offre uno sguardo sulla vita quotidiana nei secoli.',
      pt: 'Ampla praça histórica que abrigou o maior mercado de Ávila. Cercada por casas nobres e arquitetura tradicional, revela o cotidiano de outras épocas.',
      fr: 'Vaste place historique qui accueillait autrefois le plus grand marché d\'Ávila. Entourée de demeures nobles et d\'architecture traditionnelle, elle offre un aperçu de la vie quotidienne au fil des siècles.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'A spacious historic square that was once the site of the largest market in Ávila. Surrounded by noble houses and traditional architecture, it offers a glimpse into daily life through the centuries.',
            es: 'Amplia plaza histórica que albergó el mayor mercado de Ávila. Rodeada de casas nobiliarias y arquitectura tradicional, ofrece una ventana a la vida cotidiana a lo largo de los siglos.',
            it: 'Ampia piazza storica che ospitava il più grande mercato di Ávila. Circondata da palazzi nobiliari e architettura tradizionale, offre uno sguardo sulla vita quotidiana nei secoli.',
            pt: 'Ampla praça histórica que abrigou o maior mercado de Ávila. Cercada por casas nobres e arquitetura tradicional, revela o cotidiano de outras épocas.',
            fr: 'Vaste place historique qui accueillait autrefois le plus grand marché d\'Ávila. Entourée de demeures nobles et d\'architecture traditionnelle, elle offre un aperçu de la vie quotidienne au fil des siècles.',
          }),
        ],
      },
    ],
    coordinates: [40.6572, -4.6972],
    images: [
      'https://www.terranostrum.es/images/content/full/Roman-avila-mercado-grande-2.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/plaza-mercado-grande-en.mp3',
      es: 'https://example.com/audio/plaza-mercado-grande-es.mp3',
      it: 'https://example.com/audio/plaza-mercado-grande-it.mp3',
      pt: 'https://example.com/audio/plaza-mercado-grande-pt.mp3',
      fr: 'https://example.com/audio/plaza-mercado-grande-fr.mp3',
    }),
    category: 'square',
    duration: 15,
    order: 9,
  },
  {
    id: 'monasterio-encarnacion',
    name: text({
      en: 'Monasterio de la Encarnación',
      es: 'Monasterio de la Encarnación',
      it: 'Monasterio de la Encarnación',
      pt: 'Monasterio de la Encarnación',
      fr: 'Monasterio de la Encarnación',
    }),
    description: text({
      en: 'Where Saint Teresa lived for 27 years as a Carmelite nun. This austere convent preserves her cell and numerous relics, offering intimate insight into her spiritual journey.',
      es: 'Aquí vivió Santa Teresa durante 27 años como monja carmelita. Este sobrio convento conserva su celda y numerosas reliquias, ofreciendo una mirada íntima a su camino espiritual.',
      it: 'Qui Santa Teresa visse per 27 anni come monaca carmelitana. Questo austero convento conserva la sua cella e numerose reliquie, offrendo uno sguardo intimo sul suo percorso spirituale.',
      pt: 'Foi aqui que Santa Teresa viveu por 27 anos como freira carmelita. Este convento austero preserva sua cela e diversas relíquias, revelando de perto sua trajetória espiritual.',
      fr: 'Sainte Thérèse y vécut pendant 27 ans comme carmélite. Ce couvent austère conserve sa cellule et de nombreuses reliques, offrant un aperçu intime de son chemin spirituel.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'Where Saint Teresa lived for 27 years as a Carmelite nun. This austere convent preserves her cell and numerous relics, offering intimate insight into her spiritual journey.',
            es: 'Aquí vivió Santa Teresa durante 27 años como monja carmelita. Este sobrio convento conserva su celda y numerosas reliquias, ofreciendo una mirada íntima a su camino espiritual.',
            it: 'Qui Santa Teresa visse per 27 anni come monaca carmelitana. Questo austero convento conserva la sua cella e numerose reliquie, offrendo uno sguardo intimo sul suo percorso spirituale.',
            pt: 'Foi aqui que Santa Teresa viveu por 27 anos como freira carmelita. Este convento austero preserva sua cela e diversas relíquias, revelando de perto sua trajetória espiritual.',
            fr: 'Sainte Thérèse y vécut pendant 27 ans comme carmélite. Ce couvent austère conserve sa cellule et de nombreuses reliques, offrant un aperçu intime de son chemin spirituel.',
          }),
        ],
      },
    ],
    coordinates: [40.6585, -4.7008],
    images: [
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/castilla-leon/monasterio_encarnacion_avila_t0500642.jpg_1014274486.jpg',
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/castilla-leon/la-encarnacion-avila-c-grupo-ciudades-patrimonio-humanidad.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/monasterio-encarnacion-en.mp3',
      es: 'https://example.com/audio/monasterio-encarnacion-es.mp3',
      it: 'https://example.com/audio/monasterio-encarnacion-it.mp3',
      pt: 'https://example.com/audio/monasterio-encarnacion-pt.mp3',
      fr: 'https://example.com/audio/monasterio-encarnacion-fr.mp3',
    }),
    category: 'church',
    duration: 30,
    order: 10,
  },
  {
    id: 'plaza-italia',
    name: text({
      en: 'Plaza de Italia',
      es: 'Plaza de Italia',
      it: 'Plaza de Italia',
      pt: 'Plaza de Italia',
      fr: 'Plaza de Italia',
    }),
    description: text({
      en: 'A charming modern square with beautiful gardens and fountains, offering views of the medieval walls. A peaceful spot to rest and admire the contrast between old and new Ávila.',
      es: 'Encantadora plaza moderna con jardines y fuentes desde la que se contemplan las murallas medievales. Un rincón tranquilo para descansar y apreciar el contraste entre la Ávila antigua y la moderna.',
      it: 'Incantevole piazza moderna con giardini e fontane da cui si ammirano le mura medievali. Un luogo tranquillo per riposare e osservare il contrasto tra l\'Ávila antica e quella contemporanea.',
      pt: 'Charmosa praça moderna com jardins e fontes, de onde se avistam as muralhas medievais. Um recanto tranquilo para descansar e apreciar o contraste entre a Ávila antiga e a atual.',
      fr: 'Charmante place moderne aux jardins et fontaines offrant une vue sur les remparts médiévaux. Un lieu paisible pour se reposer et apprécier le contraste entre l\'Ávila ancienne et contemporaine.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: "Plaza de Italia represents one of Ávila's most charming and tranquil spaces, an elegant extramuros square that seamlessly blends history, art, and culture. Located just outside the medieval walls near the Puerta del Peso de la Harina (also called Puerta de la Catedral), this intimate plaza serves as a refined cultural hub where Renaissance palaces, Romanesque churches, and contemporary cultural institutions converge to create a uniquely atmospheric corner of the historic city.",
            es: "La Plaza de Italia representa uno de los espacios más encantadores y tranquilos de Ávila, una elegante plaza extramuros que fusiona a la perfección historia, arte y cultura. Situada junto a la muralla medieval, cerca de la Puerta del Peso de la Harina (también llamada Puerta de la Catedral), esta plaza íntima es un refinado centro cultural donde palacios renacentistas, iglesias románicas e instituciones culturales contemporáneas se unen para crear un rincón de atmósfera única en la ciudad histórica.",
            it: "Plaza de Italia rappresenta uno degli spazi più affascinanti e tranquilli di Ávila, una elegante piazza fuori le mura medievali che fonde perfettamente storia, arte e cultura. Situata appena fuori dalle mura, vicino alla Puerta del Peso de la Harina (detta anche Puerta de la Catedral), questa piazza intima è un raffinato polo culturale dove palazzi rinascimentali, chiese romaniche e istituzioni culturali contemporanee si incontrano per creare un angolo dal fascino unico nella città storica.",
            pt: "A Plaza de Italia representa um dos espaços mais encantadores e tranquilos de Ávila, uma elegante praça extramuros que integra de forma harmoniosa história, arte e cultura. Localizada junto às muralhas medievais, perto da Puerta del Peso de la Harina (também chamada Puerta de la Catedral), esta praça intimista funciona como um sofisticado polo cultural onde palácios renascentistas, igrejas românicas e instituições culturais contemporâneas se encontram, criando um canto de atmosfera única na cidade histórica.",
            fr: "La Plaza de Italia représente l'un des espaces les plus charmants et paisibles d'Ávila, une élégante place extra-muros qui mêle harmonieusement histoire, art et culture. Située juste à l'extérieur des remparts médiévaux, près de la Puerta del Peso de la Harina (également appelée Puerta de la Catedral), cette place intime sert de centre culturel raffiné où palais Renaissance, églises romanes et institutions culturelles contemporaines se rejoignent pour créer un coin unique dans la ville historique.",
          }),
          text({
            en: "The square forms part of a larger cultural complex that also includes Plaza de Nalvillos. Renaissance buildings like the Palacio de los Serrano, the Romanesque church of Santo Tomé el Viejo, and the Casa de los Deanes—now home to the Provincial Museum—surround the square. Their facades, tranquil gardens, and outdoor sculptures reflect centuries of architectural evolution and artistic activity in Ávila.",
            es: "La plaza forma parte de un complejo cultural más amplio que incluye también la Plaza de Nalvillos. A su alrededor destacan edificios renacentistas como el Palacio de los Serrano, la iglesia románica de Santo Tomé el Viejo y la Casa de los Deanes, actualmente sede del Museo Provincial. Sus fachadas, jardines apacibles y esculturas al aire libre son reflejo de siglos de evolución arquitectónica y actividad artística en Ávila.",
            it: "La piazza fa parte di un più ampio complesso culturale che comprende anche Plaza de Nalvillos. Intorno ad essa si trovano edifici rinascimentali come il Palacio de los Serrano, la chiesa romanica di Santo Tomé el Viejo e la Casa de los Deanes, oggi sede del Museo Provinciale. Le loro facciate, i giardini tranquilli e le sculture all'aperto riflettono secoli di evoluzione architettonica e attività artistica nella città.",
            pt: "A praça integra um complexo cultural maior que inclui também a Plaza de Nalvillos. Ao seu redor destacam-se edifícios renascentistas como o Palácio dos Serrano, a igreja românica de Santo Tomé el Viejo e a Casa dos Deanes, atualmente sede do Museu Provincial. Suas fachadas, jardins tranquilos e esculturas ao ar livre refletem séculos de evolução arquitetônica e vida artística em Ávila.",
            fr: "La place fait partie d'un complexe culturel plus vaste incluant également la Plaza de Nalvillos. L'entourent des bâtiments Renaissance tels que le palais des Serrano, l'église romane de Santo Tomé el Viejo et la Casa de los Deanes, aujourd'hui siège du musée provincial. Leurs façades, les jardins paisibles et les sculptures en plein air témoignent de siècles d'évolution architecturale et d'activité artistique à Ávila.",
          }),
          text({
            en: "Today, Plaza de Italia is a hub for contemporary culture as well as historical appreciation. The Palacio de los Serrano is home to exhibitions, concerts, and lectures, while the Museum and the church of Santo Tomé el Viejo display archaeology and artworks spanning two millennia. The plaza’s peaceful environment, set against remarkable art and heritage, makes it a place where visitors can reflect on Ávila’s rich past and its creative present.",
            es: "Hoy, la Plaza de Italia es un hervidero tanto de cultura contemporánea como de valoración histórica. El Palacio de los Serrano acoge exposiciones, conciertos y conferencias; el museo y la iglesia de Santo Tomé el Viejo muestran restos arqueológicos y obras de arte que abarcan dos milenios. El ambiente sosegado de la plaza, enmarcado por arte y patrimonio, la convierte en un lugar ideal para reflexionar sobre el rico pasado de Ávila y su presente creativo.",
            it: "Oggi Plaza de Italia è un vivace centro sia di cultura contemporanea che di valorizzazione storica. Il Palacio de los Serrano ospita mostre, concerti e conferenze, mentre il museo e la chiesa di Santo Tomé el Viejo espongono reperti archeologici e opere che attraversano due millenni. Il clima sereno della piazza, circondata da arte e patrimonio, la rende un luogo dove i visitatori possono riflettere sul ricco passato di Ávila e sulla sua vitalità creativa attuale.",
            pt: "Hoje, a Plaza de Italia é um núcleo tanto para a cultura contemporânea quanto para a valorização histórica. O Palácio dos Serrano acolhe exposições, concertos e palestras, enquanto o museu e a igreja de Santo Tomé el Viejo exibem achados arqueológicos e obras de arte de dois mil anos. A atmosfera serena da praça, emoldurada por arte e património, faz dela um espaço propício à reflexão sobre o vasto passado de Ávila e sua criatividade presente.",
            fr: "Aujourd'hui, la Plaza de Italia est à la fois un centre de culture contemporaine et de valorisation patrimoniale. Le palais des Serrano accueille expositions, concerts et conférences, tandis que le musée et l'église de Santo Tomé el Viejo proposent des vestiges archéologiques et des œuvres couvrant deux millénaires. L'environnement paisible de la place, entouré d'art et de patrimoine, en fait un lieu privilégié pour réfléchir sur le passé riche d'Ávila et sa créativité actuelle.",
          }),
        ],
      },
    ],
    coordinates: [40.6547, -4.6952],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Avila_Santo_Tome_el_Viejo.JPG/760px-Mapcarta.jpg',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/plaza-italia-en.mp3',
      es: 'https://example.com/audio/plaza-italia-es.mp3',
      it: 'https://example.com/audio/plaza-italia-it.mp3',
      pt: 'https://example.com/audio/plaza-italia-pt.mp3',
      fr: 'https://example.com/audio/plaza-italia-fr.mp3',
    }),
    category: 'square',
    duration: 10,
    order: 11,
  },
  {
    id: 'puerta-carnicerias',
    name: text({
      en: 'Puerta de las Carnicerías',
      es: 'Puerta de las Carnicerías',
      it: 'Puerta de las Carnicerías',
      pt: 'Puerta de las Carnicerías',
      fr: 'Puerta de las Carnicerías',
    }),
    description: text({
      en: 'An elegant Renaissance-style gate built in the 16th century. Named after the meat markets that once operated nearby, it features classical columns and refined stonework.',
      es: 'Elegante puerta de estilo renacentista construida en el siglo XVI. Debe su nombre a los mercados de carne cercanos y luce columnas clásicas y una piedra trabajada con delicadeza.',
      it: 'Elegante porta rinascimentale costruita nel XVI secolo. Deve il nome alle antiche macellerie vicine e presenta colonne classiche e una raffinata lavorazione della pietra.',
      pt: 'Elegante porta de estilo renascentista erguida no século XVI. Recebeu o nome das antigas carnicerias e exibe colunas clássicas e cantaria refinada.',
      fr: 'Élégante porte de style Renaissance construite au XVIe siècle. Elle doit son nom aux boucheries voisines et présente des colonnes classiques ainsi qu\'une pierre finement sculptée.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'An elegant Renaissance-style gate built in the 16th century. Named after the meat markets that once operated nearby, it features classical columns and refined stonework.',
            es: 'Elegante puerta de estilo renacentista construida en el siglo XVI. Debe su nombre a los mercados de carne cercanos y luce columnas clásicas y una piedra trabajada con delicadeza.',
            it: 'Elegante porta rinascimentale costruita nel XVI secolo. Deve il nome alle antiche macellerie vicine e presenta colonne classiche e una raffinata lavorazione della pietra.',
            pt: 'Elegante porta de estilo renascentista erguida no século XVI. Recebeu o nome das antigas carnicerias e exibe colunas clássicas e cantaria refinada.',
            fr: 'Élégante porte de style Renaissance construite au XVIe siècle. Elle doit son nom aux boucheries voisines et présente des colonnes classiques ainsi qu\'une pierre finement sculptée.',
          }),
        ],
      },
    ],
    coordinates: [40.6559, -4.6958],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Murallas_de_%C3%81vila%2C_Puerta_del_Peso_de_la_Harina%2C_Casa_de_las_Carnicer%C3%ADas_45.JPG',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/puerta-carnicerias-en.mp3',
      es: 'https://example.com/audio/puerta-carnicerias-es.mp3',
      it: 'https://example.com/audio/puerta-carnicerias-it.mp3',
      pt: 'https://example.com/audio/puerta-carnicerias-pt.mp3',
      fr: 'https://example.com/audio/puerta-carnicerias-fr.mp3',
    }),
    category: 'monument',
    duration: 10,
    order: 12,
  },
  {
    id: 'paseo-rastro',
    name: text({
      en: 'Paseo del Rastro',
      es: 'Paseo del Rastro',
      it: 'Paseo del Rastro',
      pt: 'Paseo del Rastro',
      fr: 'Paseo del Rastro',
    }),
    description: text({
      en: 'A scenic promenade running along the southern walls, offering stunning panoramic views of the Adaja Valley and the Gredos mountains. Perfect for photography and contemplative walks.',
      es: 'Paseo panorámico que bordea la muralla sur y ofrece vistas espectaculares del valle del Adaja y la sierra de Gredos. Ideal para fotografías y paseos contemplativos.',
      it: 'Passeggiata panoramica lungo il lato sud delle mura con viste spettacolari sulla valle dell\'Adaja e i monti della Gredos. Perfetta per fotografie e passeggiate contemplative.',
      pt: 'Passeio panorâmico ao longo do lado sul das muralhas, com vistas impressionantes do vale do Adaja e da serra de Gredos. Perfeito para fotos e caminhadas contemplativas.',
      fr: 'Promenade panoramique longeant le versant sud des remparts, offrant des vues spectaculaires sur la vallée de l\'Adaja et la Sierra de Gredos. Parfait pour la photographie et les balades contemplatives.',
    }),
    extendedSections: [
      {
        paragraphs: [
          text({
            en: 'A scenic promenade running along the southern walls, offering stunning panoramic views of the Adaja Valley and the Gredos mountains. Perfect for photography and contemplative walks.',
            es: 'Paseo panorámico que bordea la muralla sur y ofrece vistas espectaculares del valle del Adaja y la sierra de Gredos. Ideal para fotografías y paseos contemplativos.',
            it: 'Passeggiata panoramica lungo il lato sud delle mura con viste spettacolari sulla valle dell\'Adaja e i monti della Gredos. Perfetta per fotografie e passeggiate contemplative.',
            pt: 'Passeio panorâmico ao longo do lado sul das muralhas, com vistas impressionantes do vale do Adaja e da serra de Gredos. Perfeito para fotos e caminhadas contemplativas.',
            fr: 'Promenade panoramique longeant le versant sud des remparts, offrant des vues spectaculaires sur la vallée de l\'Adaja et la Sierra de Gredos. Parfait pour la photographie et les balades contemplatives.',
          }),
        ],
      },
    ],
    coordinates: [40.6542, -4.6978],
    images: [
      'https://media.traveler.es/photos/61376b6efd8ea62e2db314a2/master/w_1600%2Cc_limit/149072.jpg',
      'https://images.unsplash.com/photo-1583224964902-d5a96d9e0a89?w=1200&q=80',
    ],
    audioUrl: text({
      en: 'https://example.com/audio/paseo-rastro-en.mp3',
      es: 'https://example.com/audio/paseo-rastro-es.mp3',
      it: 'https://example.com/audio/paseo-rastro-it.mp3',
      pt: 'https://example.com/audio/paseo-rastro-pt.mp3',
      fr: 'https://example.com/audio/paseo-rastro-fr.mp3',
    }),
    category: 'viewpoint',
    duration: 20,
    order: 13,
  },
];
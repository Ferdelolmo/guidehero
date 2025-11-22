import type { LocalizedText } from '@/types/i18n';
import { Palace } from '@/types/tour';

const text = (values: LocalizedText): LocalizedText => values;

export const palaces: Palace[] = [
  {
    id: 'superunda',
    name: text({
      en: 'Palace of Superunda',
      es: 'Palacio de Superunda',
      it: 'Palazzo di Superunda',
      pt: 'Palácio de Superunda',
      fr: 'Palais de Superunda',
    }),
    description: text({
      en: 'Built between 1580 and 1595 in Renaissance style with Italian influence, this square-plan palace has a semi-basement, two floors and two towers at the ends of the main facade. Its first owner was the alderman Ochoa de Aguirre, and later it was inherited by the Count of Superunda and Marquis of Bermudo in the 19th century, from whom it takes its current name. The building presents a symmetrical facade organization with three balconies on the upper part, barred windows and a doorway located under one of the side towers. The decoration is reduced to simple moldings and coats of arms topping the windows. Inside it has a central square patio with two closed wings and two open architraved ones with Doric columns. It currently houses the Guido Caprotti Museum, dedicated to the Italian painter who acquired and inhabited the palace from 1916. It was declared an Asset of Cultural Interest in 1992.',
      es: 'Construido entre 1580 y 1595 de estilo renacentista con influencia italiana, este palacio de planta cuadrada cuenta con semisótano, dos plantas y dos torreones en los extremos de la fachada principal. Su primer propietario fue el regidor Ochoa de Aguirre, y posteriormente lo heredó el Conde de Superunda y Marqués de Bermudo en el siglo XIX, de quien toma su nombre actual. El edificio presenta una organización de fachada simétrica con tres balcones en la parte superior, ventanas enrejadas y una portada situada bajo uno de los torreones laterales. La decoración se reduce a sencillas molduras y escudos rematando las ventanas. Interiormente posee un patio central cuadrado con dos alas cerradas y otras dos abiertas arquitrabadas con columnas dóricas. Actualmente alberga el Museo Guido Caprotti, dedicado al pintor italiano que adquirió y habitó el palacio desde 1916. Fue declarado Bien de Interés Cultural en 1992.',
      it: 'Costruito tra il 1580 e il 1595 in stile rinascimentale con influenza italiana, questo palazzo a pianta quadrata presenta un seminterrato, due piani e due torri alle estremità della facciata principale. Il suo primo proprietario fu il consigliere Ochoa de Aguirre, e successivamente fu ereditato dal Conte di Superunda e Marchese di Bermudo nel XIX secolo, da cui prende il nome attuale. L\'edificio presenta un\'organizzazione simmetrica della facciata con tre balconi nella parte superiore, finestre con inferriate e un portale situato sotto una delle torri laterali. La decorazione è ridotta a semplici modanature e stemmi che sormontano le finestre. All\'interno presenta un patio centrale quadrato con due ali chiuse e due aperte architravate con colonne doriche. Attualmente ospita il Museo Guido Caprotti, dedicato al pittore italiano che acquisì e abitò il palazzo dal 1916. È stato dichiarato Bene di Interesse Culturale nel 1992.',
      pt: 'Construído entre 1580 e 1595 em estilo renascentista com influência italiana, este palácio de planta quadrada possui um semi-subsolo, dois andares e duas torres nas extremidades da fachada principal. Seu primeiro proprietário foi o vereador Ochoa de Aguirre, e posteriormente foi herdado pelo Conde de Superunda e Marquês de Bermudo no século XIX, de quem leva o nome atual. O edifício apresenta uma organização de fachada simétrica com três varandas na parte superior, janelas gradeadas e uma porta localizada sob uma das torres laterais. A decoração é reduzida a simples molduras e brasões que adornam as janelas. Internamente, possui um pátio central quadrado com duas alas fechadas e duas abertas arquitravadas com colunas dóricas. Atualmente, abriga o Museu Guido Caprotti, dedicado ao pintor italiano que adquiriu e habitou o palácio a partir de 1916. Foi declarado Bem de Interesse Cultural em 1992.',
      fr: 'Construit entre 1580 et 1595 dans un style Renaissance avec une influence italienne, ce palais de plan carré comprend un demi-sous-sol, deux étages et deux tours aux extrémités de la façade principale. Son premier propriétaire fut l\'échevin Ochoa de Aguirre, et il fut ensuite hérité par le comte de Superunda et marquis de Bermudo au XIXe siècle, dont il tire son nom actuel. Le bâtiment présente une organisation de façade symétrique avec trois balcons sur la partie supérieure, des fenêtres grillagées et un portail situé sous l\'une des tours latérales. La décoration se limite à de simples moulures et blasons surmontant les fenêtres. À l\'intérieur, il possède un patio central carré avec deux ailes fermées et deux autres ouvertes à architraves avec des colonnes doriques. Il abrite actuellement le musée Guido Caprotti, dédié au peintre italien qui acquit et habita le palais à partir de 1916. Il a été déclaré Bien d\'Intérêt Culturel en 1992.',
    }),
    address: text({
      en: 'Plaza Corral de las Campanas, 3',
      es: 'Plaza Corral de las Campanas, 3',
      it: 'Plaza Corral de las Campanas, 3',
      pt: 'Plaza Corral de las Campanas, 3',
      fr: 'Plaza Corral de las Campanas, 3',
    }),
    publicAccess: 'public',
    entryType: 'ticket',
    image: 'https://placehold.co/600x400?text=Palacio+de+Superunda'
  },
  {
    id: 'polentinos',
    name: text({
      en: 'Palace of Polentinos',
      es: 'Palacio de Polentinos',
      it: 'Palazzo di Polentinos',
      pt: 'Palácio de Polentinos',
      fr: 'Palais de Polentinos',
    }),
    description: text({
      en: 'Located on Calle Vallespín, this 16th-century Renaissance palace was built by the important Castilian family of the Contreras. It owes its current name to Francisco J. de Colmenares y Fernández de Córdova, Count of Polentinos, who inherited it at the beginning of the 18th century when he married María A. de Contreras y Santisteban. Its Plateresque facade is one of the most important in Ávila, with a facade decorated with grotesques, crowns, Greek palms and military trophies. The building is developed around a square patio of slender proportions with two heights, five monolithic columns topped by shoes and architraved friezes with Plateresque decoration of shields and vegetables. The hall of tributes stands out with an important coffered ceiling with coffers and wooden beams supported on carved corbels. It currently houses the General Military Archive of Ávila and since July 2011 also houses the Intendancy Museum.',
      es: 'Situado en la calle Vallespín, este palacio renacentista del siglo XVI fue construido por la importante familia castellana de los Contreras. Debe su nombre actual a Francisco J. de Colmenares y Fernández de Córdova, conde de Polentinos, quien lo heredó a principios del siglo XVIII al casarse con María A. de Contreras y Santisteban. Su portada plateresca es una de las más importantes de Ávila, con fachada decorada por grutescos, coronas, palmas griegas y trofeos militares. El edificio se desarrolla en torno a un patio cuadrado de esbeltas proporciones con dos alturas, cinco columnas monolíticas rematadas por zapatos y frisos adintelados con decoración plateresca de escudos y vegetales. Destaca la sala de homenajes con un importante artesonado con casetones y vigas de madera apoyados sobre ménsulas labradas. Actualmente es sede del Archivo General Militar de Ávila y desde julio de 2011 alberga también el Museo de Intendencia.',
      it: 'Situato in Calle Vallespín, questo palazzo rinascimentale del XVI secolo fu costruito dall\'importante famiglia castigliana dei Contreras. Deve il suo nome attuale a Francisco J. de Colmenares y Fernández de Córdova, Conte di Polentinos, che lo ereditò all\'inizio del XVIII secolo sposando María A. de Contreras y Santisteban. La sua facciata plateresca è una delle più importanti di Ávila, con una facciata decorata con grottesche, corone, palme greche e trofei militari. L\'edificio si sviluppa attorno a un patio quadrato di proporzioni slanciate con due altezze, cinque colonne monolitiche sormontate da scarpe e fregi architravati con decorazioni plateresche di scudi e vegetali. La sala degli omaggi spicca con un importante soffitto a cassettoni con cassettoni e travi in legno sostenute da mensole scolpite. Attualmente ospita l\'Archivio Generale Militare di Ávila e da luglio 2011 ospita anche il Museo dell\'Intendenza.',
      pt: 'Localizado na Calle Vallespín, este palácio renascentista do século XVI foi construído pela importante família castelhana dos Contreras. Deve seu nome atual a Francisco J. de Colmenares y Fernández de Córdova, Conde de Polentinos, que o herdou no início do século XVIII ao se casar com María A. de Contreras y Santisteban. Sua fachada plateresca é uma das mais importantes de Ávila, com uma fachada decorada com grotescos, coroas, palmas gregas e troféus militares. O edifício se desenvolve em torno de um pátio quadrado de proporções esbeltas com duas alturas, cinco colunas monolíticas encimadas por sapatas e frisos arquitravados com decoração plateresca de escudos e vegetais. Destaca-se o salão de homenagens com um importante teto em caixotões e vigas de madeira apoiadas em mísulas esculpidas. Atualmente, abriga o Arquivo Geral Militar de Ávila e desde julho de 2011 também o Museu da Intendência.',
      fr: 'Situé dans la Calle Vallespín, ce palais Renaissance du XVIe siècle a été construit par l\'importante famille castillane des Contreras. Il doit son nom actuel à Francisco J. de Colmenares y Fernández de Córdova, comte de Polentinos, qui en hérita au début du XVIIIe siècle en épousant María A. de Contreras y Santisteban. Sa façade plateresque est l\'une des plus importantes d\'Ávila, avec une façade décorée de grotesques, de couronnes, de palmes grecques et de trophées militaires. Le bâtiment s\'articule autour d\'un patio carré aux proportions élancées avec deux niveaux, cinq colonnes monolithiques surmontées de chapiteaux et des frises à architraves avec une décoration plateresque de blasons et de motifs végétaux. La salle des hommages se distingue par un important plafond à caissons et des poutres en bois soutenues par des corbeaux sculptés. Il abrite actuellement les Archives Générales Militaires d\'Ávila et, depuis juillet 2011, également le Musée de l\'Intendance.',
    }),
    address: text({
      en: 'Calle de Vallespín, s/n',
      es: 'Calle de Vallespín, s/n',
      it: 'Calle de Vallespín, s/n',
      pt: 'Calle de Vallespín, s/n',
      fr: 'Calle de Vallespín, s/n',
    }),
    publicAccess: 'public',
    entryType: 'free',
    image: 'https://placehold.co/600x400?text=Palacio+de+Polentinos'
  },
  {
    id: 'verdugo',
    name: text({
      en: 'Palace of the Verdugo',
      es: 'Palacio de los Verdugo',
      it: 'Palazzo dei Verdugo',
      pt: 'Palácio dos Verdugo',
      fr: 'Palais des Verdugo',
    }),
    description: text({
      en: 'Commissioned in 1531 by Suero de Águila, equerry to Infante Fernando (brother of Charles I), this palace responds to the city\'s boom in the 16th century due to the growth of the wool textile industry. It is located on Calle de Lope Núñez (formerly called del Lomo). The sober stone facade, Plateresque in style and defensive in character, lacks low-level windows and features two wide towers on each side. The doorway is flanked by highly decorated pilasters and outlined with the cord of San Francisco. The grotesque decoration of the main window stands out. Inside, an unfinished porticoed patio opens with lowered arches and a magnificent coffered ceiling on the staircase. To the left of its facade there is a Vetonian stone boar, similar to the famous bulls of Guisando. It was declared a historical-artistic monument of national character in 1979 and since 2008, after years of restoration, it has been the permanent headquarters of the General Secretariat of the Group of World Heritage Cities of Spain.',
      es: 'Mandado construir en 1531 por Suero de Águila, caballerizo del infante Fernando (hermano de Carlos I), este palacio responde al auge de la ciudad en el siglo XVI por el crecimiento de la industria textil lanar. Se encuentra en la calle de Lope Núñez (antes llamada del Lomo). La fachada sobria de piedra, de estilo plateresco y carácter defensivo, carece de ventanas a baja altura y presenta dos anchas torres a cada lado. La portada está flanqueada por pilastras muy decoradas y perfilada con el cordón de San Francisco. Destaca la decoración de grutescos de la ventana principal. En el interior se abre un patio porticado inacabado con arcos rebajados y un magnífico artesonado en la escalera. A la izquierda de su fachada hay un verraco de piedra de época vettona, similar a los famosos toros de Guisando. Fue declarado monumento histórico-artístico de carácter nacional en 1979 y desde 2008, tras años de restauración, es sede permanente de la Secretaría General del Grupo de Ciudades Patrimonio de la Humanidad de España.',
      it: 'Commissionato nel 1531 da Suero de Águila, scudiero dell\'Infante Fernando (fratello di Carlo I), questo palazzo risponde al boom della città nel XVI secolo dovuto alla crescita dell\'industria tessile della lana. Si trova in Calle de Lope Núñez (precedentemente chiamata del Lomo). La sobria facciata in pietra, in stile plateresco e di carattere difensivo, è priva di finestre a bassa quota e presenta due ampie torri su ciascun lato. Il portale è fiancheggiato da pilastri molto decorati e delineato con il cordone di San Francisco. Spicca la decorazione grottesca della finestra principale. All\'interno si apre un patio porticato incompiuto con archi ribassati e un magnifico soffitto a cassettoni sulla scala. A sinistra della sua facciata si trova un cinghiale in pietra di epoca vettona, simile ai famosi tori di Guisando. È stato dichiarato monumento storico-artistico di carattere nazionale nel 1979 e dal 2008, dopo anni di restauro, è la sede permanente della Segreteria Generale del Gruppo delle Città Patrimonio dell\'Umanità della Spagna.',
      pt: 'Encomendado em 1531 por Suero de Águila, escudeiro do Infante Fernando (irmão de Carlos I), este palácio responde ao boom da cidade no século XVI devido ao crescimento da indústria têxtil da lã. Está localizado na Calle de Lope Núñez (anteriormente chamada del Lomo). A sóbria fachada de pedra, em estilo plateresco e de caráter defensivo, carece de janelas baixas e apresenta duas amplas torres em cada lado. A porta é ladeada por pilastras altamente decoradas e delineada com o cordão de São Francisco. Destaca-se a decoração grotesca da janela principal. No interior, abre-se um pátio porticado inacabado com arcos rebaixados e um magnífico teto em caixotões na escadaria. À esquerda de sua fachada, há um javali de pedra da época vetona, semelhante aos famosos touros de Guisando. Foi declarado monumento histórico-artístico de caráter nacional em 1979 e, desde 2008, após anos de restauração, é a sede permanente da Secretaria Geral do Grupo de Cidades Patrimônio da Humanidade da Espanha.',
      fr: 'Commandé en 1531 par Suero de Águila, écuyer de l\'Infant Fernando (frère de Charles Ier), ce palais responde à l\'essor de la ville au XVIe siècle grâce à la croissance de l\'industrie textile de la laine. Il est situé dans la Calle de Lope Núñez (anciennement appelée del Lomo). La sobre façade en pierre, de style plateresque et de caractère défensif, est dépourvue de fenêtres basses et présente deux larges tours de chaque côté. Le portail est flanqué de pilastres très décorées et souligné par le cordon de San Francisco. La décoration grotesque de la fenêtre principale se distingue. À l\'intérieur, un patio portique inachevé s\'ouvre avec des arcs surbaissés et un magnifique plafond à caissons sur l\'escalier. À gauche de sa façade se trouve un verrat en pierre de l\'époque vettona, similaire aux célèbres taureaux de Guisando. Il a été déclaré monument historique-artistique de caractère national en 1979 et, depuis 2008, après des années de restauration, il est le siège permanent du Secrétariat Général du Groupe des Villes du Patrimoine Mondial d\'Espagne.',
    }),
    address: text({
      en: 'Calle Lope Núñez, s/n',
      es: 'Calle Lope Núñez, s/n',
      it: 'Calle Lope Núñez, s/n',
      pt: 'Calle Lope Núñez, s/n',
      fr: 'Calle Lope Núñez, s/n',
    }),
    publicAccess: 'partial',
    entryType: 'free',
    image: 'https://placehold.co/600x400?text=Palacio+de+los+Verdugo'
  },
  {
    id: 'valderrabanos',
    name: text({
      en: 'Palace of Valderrábanos',
      es: 'Palacio de Valderrábanos',
      it: 'Palazzo di Valderrábanos',
      pt: 'Palácio de Valderrábanos',
      fr: 'Palais de Valderrábanos',
    }),
    description: text({
      en: 'Also known as "Gonzalo Dávila\'s house", it is a 14th-century building located in the Plaza de la Catedral. It belonged to Gonzalo Dávila de Ágreda, a knight who was master of the hall of the Catholic Monarchs, governor of the Maestrazgo de Calatrava and corregidor of Jerez. On the main facade, it preserves a relief above the entrance, supported by a young nobleman under a trilobed arch, which shows a helmet with a plume and a Moorish standard with a crescent moon. It is surrounded by a Latin inscription: "Non nobis Domine, non nobis. Sed nomini tuo da gloriam" ("Not to us, Lord, not to us; but to your name give glory"), from Psalm 113:9, motto of the Knights Templar. The building has a large tower built of brick and rammed earth, and preserves mullioned windows, some of them geminated. The wooden ceilings and the coffered ceiling of the old palace are exhibited in the Ávila Museum. It currently functions as a 4-star hotel.',
      es: 'También conocido como "casa de Gonzalo Dávila", es un edificio del siglo XIV situado en la Plaza de la Catedral. Perteneció a Gonzalo Dávila de Ágreda, caballero que fue maestre sala de los Reyes Católicos, gobernador del Maestrazgo de Calatrava y corregidor de Jerez. En la fachada principal conserva un relieve sobre la entrada, sostenido por un doncel bajo un arco trilobulado, que muestra un yelmo con penacho y un estandarte moro con media luna. Está rodeado de una inscripción en latín: "Non nobis Domine, non nobis. Sed nomini tuo da gloriam" ("No a nosotros Señor, no a nosotros; sino la gloria para tu nombre"), del Salmo 113:9, lema de los Caballeros Templarios. El edificio cuenta con una gran torre construida de ladrillo y tapial, y conserva ajimeces, algunos de ellos geminados. Los techos de madera y el alfarje del antiguo palacio se exponen en el Museo de Ávila. Actualmente funciona como hotel de 4 estrellas.',
      it: 'Conosciuto anche come "casa di Gonzalo Dávila", è un edificio del XIV secolo situato in Plaza de la Catedral. Appartenne a Gonzalo Dávila de Ágreda, un cavaliere che fu maestro di sala dei Re Cattolici, governatore del Maestrazgo de Calatrava e corregidor di Jerez. Sulla facciata principale, conserva un rilievo sopra l\'ingresso, sostenuto da un giovane nobile sotto un arco trilobato, che mostra un elmo con pennacchio e uno stendardo moresco con una mezzaluna. È circondato da un\'iscrizione latina: "Non nobis Domine, non nobis. Sed nomini tuo da gloriam" ("Non a noi, Signore, non a noi; ma al tuo nome dai gloria"), dal Salmo 113:9, motto dei Cavalieri Templari. L\'edificio ha una grande torre costruita in mattoni e terra battuta, e conserva finestre a bifora, alcune delle quali geminate. I soffitti in legno e il soffitto a cassettoni dell\'antico palazzo sono esposti nel Museo di Ávila. Attualmente funziona come hotel a 4 stelle.',
      pt: 'Também conhecido como "casa de Gonzalo Dávila", é um edifício do século XIV localizado na Plaza de la Catedral. Pertenceu a Gonzalo Dávila de Ágreda, um cavaleiro que foi mestre de sala dos Reis Católicos, governador do Maestrazgo de Calatrava e corregedor de Jerez. Na fachada principal, preserva um relevo acima da entrada, sustentado por um jovem nobre sob um arco trilobado, que mostra um capacete com pluma e um estandarte mouro com uma lua crescente. É cercado por uma inscrição em latim: "Non nobis Domine, non nobis. Sed nomini tuo da gloriam" ("Não a nós, Senhor, não a nós; mas ao teu nome dá glória"), do Salmo 113:9, lema dos Cavaleiros Templários. O edifício possui uma grande torre construída de tijolo e taipa, e preserva janelas geminadas, algumas delas duplas. Os tetos de madeira e o teto em caixotões do antigo palácio estão expostos no Museu de Ávila. Atualmente funciona como um hotel 4 estrelas.',
      fr: 'Également connue sous le nom de "maison de Gonzalo Dávila", c\'est un bâtiment du XIVe siècle situé sur la Plaza de la Catedral. Il appartint à Gonzalo Dávila de Ágreda, un chevalier qui fut maître de salle des Rois Catholiques, gouverneur du Maestrazgo de Calatrava et corregidor de Jerez. Sur la façade principale, il conserve un relief au-dessus de l\'entrée, soutenu par un jeune homme sous un arc trilobé, qui montre un casque avec un panache et un étendard maure avec un croissant de lune. Il est entouré d\'une inscription latine : "Non nobis Domine, non nobis. Sed nomini tuo da gloriam" ("Non à nous, Seigneur, non à nous ; mais à ton nom donne la gloire"), du Psaume 113:9, devise des Templiers. Le bâtiment possède une grande tour construite en briques et en pisé, et conserve des fenêtres à meneaux, certaines d\'entre elles géminées. Les plafonds en bois et le plafond à caissons de l\'ancien palais sont exposés au musée d\'Ávila. Il fonctionne actuellement comme un hôtel 4 étoiles.',
    }),
    address: text({
      en: 'Plaza de la Catedral, 9',
      es: 'Plaza de la Catedral, 9',
      it: 'Plaza de la Catedral, 9',
      pt: 'Plaza de la Catedral, 9',
      fr: 'Plaza de la Catedral, 9',
    }),
    publicAccess: 'partial',
    entryType: 'ticket',
    image: 'https://placehold.co/600x400?text=Palacio+de+Valderrabanos'
  },
  {
    id: 'velada',
    name: text({
      en: 'Palace of the Velada',
      es: 'Palacio de los Velada',
      it: 'Palazzo dei Velada',
      pt: 'Palácio dos Velada',
      fr: 'Palais des Velada',
    }),
    description: text({
      en: 'Built during the first third of the 16th century, it was the imperial lodging of Charles I, Empress Isabella and Philip II. It is erected in the Plaza de la Catedral and its construction is very heterogeneous, dating from the late 15th-early 16th century. A slender masonry tower decorated with chamfered shields, which was formerly crenellated, stands out. The facade, facing east, consists of a semicircular arch access with large voussoirs, and above it a cusped arch window framed by an alfiz. Inside, the central porticoed patio stands out with three heights, of which only the northern wing is preserved. The two lower galleries have lowered arches on Tuscan columns, and the upper one is lintelled. After its rehabilitation, it has become a 4-star hotel with 143 rooms. It was declared an Asset of Cultural Interest in 1992.',
      es: 'Edificado durante el primer tercio del siglo XVI, fue alojamiento imperial de Carlos I, de la emperatriz Isabel y de Felipe II. Se encuentra erigido en la Plaza de la Catedral y su fábrica es muy heterogénea, datando de finales del siglo XV-principios del XVI. Destaca sobre el conjunto un esbelto torreón de mampostería decorado con escudos achaflanados, que antiguamente estaba almenado. La portada, orientada al este, consta de acceso en arco de medio punto de gran dovelaje, y sobre ella una ventana de arco conopial enmarcada por un alfiz. En el interior destaca el patio central porticado con tres alturas, del que sólo se conserva el ala septentrional. Las dos galerías inferiores presentan arcos rebajados sobre columnas toscanas, y el superior es adintelado. Tras su rehabilitación, se ha convertido en hotel de 4 estrellas con 143 habitaciones. Fue declarado Bien de Interés Cultural en 1992.',
      it: 'Costruito durante il primo terzo del XVI secolo, fu la residenza imperiale di Carlo I, dell\'Imperatrice Isabella e di Filippo II. Si trova in Plaza de la Catedral e la sua costruzione è molto eterogenea, risalente alla fine del XV-inizio del XVI secolo. Spicca una slanciata torre in muratura decorata con scudi smussati, che anticamente era merlata. La facciata, rivolta a est, è composta da un accesso ad arco a tutto sesto con grandi conci, e sopra di esso una finestra ad arco conopiale incorniciata da un alfiz. All\'interno, spicca il patio centrale porticato a tre altezze, di cui si conserva solo l\'ala settentrionale. Le due gallerie inferiori presentano archi ribassati su colonne toscane, e quella superiore è architravata. Dopo la sua riabilitazione, è diventato un hotel a 4 stelle con 143 camere. È stato dichiarato Bene di Interesse Culturale nel 1992.',
      pt: 'Construído durante o primeiro terço do século XVI, foi o alojamento imperial de Carlos I, da Imperatriz Isabel e de Filipe II. Encontra-se erguido na Plaza de la Catedral e a sua construção é muito heterogénea, datando do final do século XV-início do século XVI. Destaca-se sobre o conjunto um esbelto torreão de alvenaria decorado com escudos chanfrados, que antigamente era ameado. A portada, orientada a leste, consiste num acesso em arco de meio ponto de grande aduela, e sobre ela uma janela de arco conopial emoldurada por um alfiz. No interior destaca-se o pátio central porticado com três alturas, do qual apenas se conserva a ala setentrional. As duas galerias inferiores apresentam arcos rebaixados sobre colunas toscanas, e a superior é adintelada. Após a sua reabilitação, tornou-se um hotel de 4 estrelas com 143 quartos. Foi declarado Bem de Interesse Cultural em 1992.',
      fr: 'Construit durant le premier tiers du XVIe siècle, il fut la résidence impériale de Charles Ier, de l\'impératrice Isabelle et de Philippe II. Il est érigé sur la Plaza de la Catedral et sa construction est très hétérogène, datant de la fin du XVe-début du XVIe siècle. Une tour élancée en maçonnerie décorée de blasons chanfreinés, qui était autrefois crénelée, se distingue. La façade, orientée à l\'est, se compose d\'un accès en arc en plein cintre à grands claveaux, et au-dessus une fenêtre à arc conopial encadrée par un alfiz. À l\'intérieur, le patio central portique à trois niveaux se distingue, dont seule l\'aile septentrionale est conservée. Les deux galeries inférieures présentent des arcs surbaissés sur des colonnes toscanes, et la supérieure est à linteaux. Après sa réhabilitation, il est devenu un hôtel 4 étoiles avec 143 chambres. Il a été déclaré Bien d\'Intérêt Culturel en 1992.',
    }),
    address: text({
      en: 'Plaza de la Catedral, 10',
      es: 'Plaza de la Catedral, 10',
      it: 'Plaza de la Catedral, 10',
      pt: 'Plaza de la Catedral, 10',
      fr: 'Plaza de la Catedral, 10',
    }),
    publicAccess: 'partial',
    entryType: 'ticket',
    image: 'https://placehold.co/600x400?text=Palacio+de+los+Velada'
  },
  {
    id: 'davila',
    name: text({
      en: 'Palace of the Dávila',
      es: 'Palacio de los Dávila',
      it: 'Palazzo dei Dávila',
      pt: 'Palácio dos Dávila',
      fr: 'Palais des Dávila',
    }),
    description: text({
      en: 'Considered the best example of a fortified medieval palace in Ávila, it is attached to the southern wall. Built in the 13th century with the same granite material as the wall, elements were added until the 16th century. The western facade, with twin windows on the upper floor, dates from the 13th century with a Gothic ogival doorway. The machicolations and merlons of the northern facade denote the defensive character of the palace. Two semicircular arch doors with large voussoirs stand out; above the westernmost one, reliefs with two chained savages flanked by two knights with trumpets are developed. To the south, from the 16th century, the gallery-viewpoint open in the wall above the Puerta del Rastro stands out. In the patio, where two Vetonian zoomorphic sculptures are located, the importance of the Mudejar tradition in architecture is noted.',
      es: 'Considerado el mejor ejemplo de palacio medieval fortificado en Ávila, está adosado al lienzo meridional de la muralla. Construido en el siglo XIII en el mismo material granítico que la muralla, se le fueron añadiendo elementos hasta el siglo XVI. La fachada occidental, con ventanas geminadas en la planta superior, data del siglo XIII con una portada gótica ojival. Los matacanes y merlones de la fachada septentrional denotan el carácter defensivo del palacio. Destacan dos puertas en arco de medio punto de gran dovelaje; sobre la más occidental se desarrollan relieves con dos salvajes encadenados flanqueados por dos caballeros con trompetas. Incluye una ventana renacentista de 1541 mandada construir por Pedro Dávila con la inscripción: "Donde una puerta se cierra, otra se abre". Esta ventana se abrió en represalia después de que le ordenaran cerrar una puerta no autorizada en la muralla. Al mediodía destaca, del siglo XVI, la galería-mirador abierta en la muralla sobre la Puerta del Rastro. En el patio, donde se ubican dos esculturas zoomorfas vettonas, se advierte la importancia de la tradición mudéjar en la arquitectura.',
      it: 'Considerato il miglior esempio di palazzo medievale fortificato ad Ávila, è addossato alla parete meridionale della muraglia. Costruito nel XIII secolo con lo stesso materiale granitico della muraglia, vi furono aggiunti elementi fino al XVI secolo. La facciata occidentale, con finestre geminate al piano superiore, risale al XIII secolo con un portale gotico ogivale. I merli e i merloni della facciata settentrionale denotano il carattere difensivo del palazzo. Spiccano due porte ad arco a tutto sesto con grandi conci; sopra quella più occidentale, si sviluppano rilievi con due selvaggi incatenati affiancati da due cavalieri con trombe. A sud, del XVI secolo, spicca la galleria-belvedere aperta nella muraglia sopra la Puerta del Rastro. Nel patio, dove si trovano due sculture zoomorfe vettoniche, si nota l\'importanza della tradizione mudéjar nell\'architettura.',
      pt: 'Considerado o melhor exemplo de palácio medieval fortificado em Ávila, está anexo à muralha sul. Construído no século XIII com o mesmo material granítico da muralha, elementos foram adicionados até o século XVI. A fachada ocidental, com janelas geminadas no andar superior, data do século XIII com uma porta ogival gótica. As ameias e merlões da fachada norte denotam o caráter defensivo do palácio. Duas portas em arco de meio ponto com grandes aduelas se destacam; acima da mais ocidental, relevos com dois selvagens acorrentados ladeados por dois cavaleiros com trombetes são desenvolvidos. Ao sul, do século XVI, destaca-se a galeria-mirante aberta na muralha acima da Puerta del Rastro. No pátio, onde duas esculturas zoomórficas vetônicas estão localizadas, a importância da tradição mudéjar na arquitetura é notada.',
      fr: 'Considéré comme le meilleur exemple de palais médiéval fortifié à Ávila, il est adossé au mur sud. Construit au XIIIe siècle avec le même material granitique que le mur, des éléments ont été ajoutés jusqu\'au XVIe siècle. La façade ouest, avec des fenêtres géminées à l\'étage supérieur, date du XIIIe siècle avec un portail ogival gothique. Les mâchicoulis et les merlons de la façade nord dénotent le caractère défensif du palais. Deux portes en arc en plein cintre à grands claveaux se distinguent ; au-dessus de la plus occidentale, des reliefs avec deux sauvages enchaînés flanqués de deux chevaliers avec des trompettes sont développés. Au sud, du XVIe siècle, la galerie-belvédère ouverte dans le mur au-dessus de la Puerta del Rastro se distingue. Dans le patio, où se trouvent deux sculptures zoomorphes vettoniennes, l\'importance de la tradition mudéjare dans l\'architecture est notée.',
    }),
    address: text({ en: '', es: '', it: '', pt: '', fr: '' }),
    publicAccess: 'private',
    entryType: 'ticket',
    image: 'https://placehold.co/600x400?text=Palacio+de+los+Davila'
  },
  {
    id: 'nunezvela',
    name: text({
      en: 'Palace of Núñez Vela (Blasco Núñez Vela)',
      es: 'Palacio de Núñez Vela (Blasco Núñez Vela)',
      it: 'Palazzo di Núñez Vela (Blasco Núñez Vela)',
      pt: 'Palácio de Núñez Vela (Blasco Núñez Vela)',
      fr: 'Palais de Núñez Vela (Blasco Núñez Vela)',
    }),
    description: text({
      en: 'Commissioned around 1541 in Renaissance style by Blasco Núñez Vela, first viceroy of Peru, together with his wife Brianda de Acuña. It is attached intramuros to the southern wall in the Plaza de la Santa. The Plateresque facade is executed in granite ashlar, with a semicircular arch access with large voussoirs. The windows are framed by fine and smooth weightless columns topped with the family coats of arms and flamers. The central porticoed patio is lintelled with a double gallery based on Doric columns with capital shoes. The upper gallery has an elegant balustrade. It was declared an architectural-artistic monument in 1923 and since 1941 it has been the headquarters of the Provincial Court of Ávila (Palace of Justice).',
      es: 'Mandado construir hacia 1541 en estilo renacentista por Blasco Núñez Vela, primer virrey del Perú, junto con su esposa Brianda de Acuña. Está adosado intramuros al lienzo meridional de la muralla en la Plaza de la Santa. La fachada plateresca está ejecutada en sillería de granito, con acceso en arco de medio punto de gran dovelaje. Las ventanas están enmarcadas por finas y lisas columnas ingrávidas rematadas con los blasones de la familia y flameros. El patio porticado central es adintelado con doble galería a base de columnas dóricas con capiteles de zapatas. La galería superior dispone de una elegante balaustrada. Fue declarado monumento arquitectónico-artístico en 1923 y desde 1941 es la sede de la Audiencia Provincial de Ávila (Palacio de Justicia).',
      it: 'Commissionato intorno al 1541 in stile rinascimentale da Blasco Núñez Vela, primo viceré del Perù, insieme alla moglie Brianda de Acuña. È addossato intramuros alla parete meridionale della muraglia in Plaza de la Santa. La facciata plateresca è realizzata in bugnato di granito, con accesso ad arco a tutto sesto con grandi conci. Le finestre sono incorniciate da colonne sottili e lisce senza peso sormontate dagli stemmi di famiglia e da fiamme. Il patio centrale porticato è architravato con una doppia galleria basata su colonne doriche con capitelli a scarpa. La galleria superiore ha un\'elegante balaustra. È stato dichiarato monumento architettonico-artistico nel 1923 e dal 1941 è la sede del Tribunale Provinciale di Ávila (Palazzo di Giustizia).',
      pt: 'Encomendado por volta de 1541 em estilo renascentista por Blasco Núñez Vela, primeiro vice-rei do Peru, juntamente com sua esposa Brianda de Acuña. Está anexo intramuros à muralha sul na Plaza de la Santa. A fachada plateresca é executada em silharia de granito, com acesso em arco de meio ponto de grande aduela. As janelas são emolduradas por finas e lisas colunas ingrávidas encimadas pelos brasões da família e flamulas. O pátio central porticado é adintelado com dupla galeria baseada em colunas dóricas com capitéis de sapatas. A galeria superior possui uma elegante balaustrada. Foi declarado monumento arquitetônico-artístico em 1923 e desde 1941 é a sede da Audiência Provincial de Ávila (Palácio da Justiça).',
      fr: 'Commandé vers 1541 dans un style Renaissance par Blasco Núñez Vela, premier vice-roi du Pérou, avec son épouse Brianda de Acuña. Il est adossé intramuros au mur sud de la Plaza de la Santa. La façade plateresque est exécutée en pierre de taille de granit, avec un accès en arc en plein cintre à grands claveaux. Les fenêtres sont encadrées par de fines et lisses colonnes sans poids surmontées des blasons de la famille et de flammes. Le patio central portique est à linteaux avec une double galerie basée sur des colonnes doriques à chapiteaux en forme de sabot. La galerie supérieure possède une élégante balustrade. Il a été déclaré monument architectural et artistique en 1923 et, depuis 1941, il est le siège du tribunal provincial d\'Ávila (Palais de Justice).',
    }),
    address: text({
      en: 'Plaza de la Santa, s/n',
      es: 'Plaza de la Santa, s/n',
      it: 'Plaza de la Santa, s/n',
      pt: 'Plaza de la Santa, s/n',
      fr: 'Plaza de la Santa, s/n',
    }),
    publicAccess: 'partial',
    entryType: 'free',
    image: 'https://placehold.co/600x400?text=Palacio+de+Nunez+Vela'
  },
  {
    id: 'serrano',
    name: text({
      en: 'Palace of the Serrano',
      es: 'Palacio de los Serrano',
      it: 'Palazzo dei Serrano',
      pt: 'Palácio dos Serrano',
      fr: 'Palais des Serrano',
    }),
    description: text({
      en: 'Built in 1557 by Pedro Álvarez Serrano, alderman of Ávila, and his wife Leonor Zapata, as stated in the inscription on the facade. This Renaissance palace is located outside the walls, in the Plaza de Italia, in front of two quiet squares united by the Romanesque church of Santo Tomé el Viejo. It was built in the mid-16th century in Renaissance style, with granite stone construction, masonry on the facade and ashlar in openings, doorway and corners. It has three heights. Inside, the lintelled patio (which was not completed) stands out and preserves an interior garden or "orchard" called Jardín del Mediodía, as well as a splendid barrel vault in the old cellars that today form an exhibition hall. After different uses over time (Sección Femenina, headquarters of the Civil Government, Savings Bank, Provincial Council), it is currently the Cultural Space of the Fundación Ávila, where training workshops, exhibitions and cultural activities are held. It was declared an Asset of Cultural Interest in 2022.',
      es: 'Construido en 1557 por Pedro Álvarez Serrano, regidor de Ávila, y su mujer Leonor Zapata, según consta en la inscripción de la fachada. Este palacio renacentista se encuentra extramuros, en la Plaza de Italia, frente a dos tranquilas plazas unidas por la iglesia románica de Santo Tomé el Viejo. Fue levantado a mediados del siglo XVI en estilo renacentista, con construcción en piedra granítica, mampostería en la fachada y sillería en vanos, portada y esquinas. Tiene tres alturas. En su interior destaca el patio adintelado (que no llegó a completarse) y conserva un jardín interior o "vergel" llamado jardín del Mediodía, además de una espléndida bóveda de medio cañón en las antiguas bodegas que hoy conforman una sala de exposiciones. Tras diferentes usos a lo largo del tiempo (Sección Femenina, sede del Gobierno Civil, Caja de Ahorros, Diputación), actualmente es Espacio Cultural de la Fundación Ávila, donde se realizan talleres de formación, exposiciones y actividades culturales. Fue declarado Bien de Interés Cultural en 2022.',
      it: 'Costruito nel 1557 da Pedro Álvarez Serrano, consigliere di Ávila, e sua moglie Leonor Zapata, come indicato nell\'iscrizione sulla facciata. Questo palazzo rinascimentale si trova fuori le mura, in Plaza de Italia, di fronte a due tranquille piazze unite dalla chiesa romanica di Santo Tomé el Viejo. Fu costruito a metà del XVI secolo in stile rinascimentale, con costruzione in pietra granitica, muratura sulla facciata e bugnato in aperture, portale e angoli. Ha tre altezze. All\'interno, spicca il patio architravato (che non fu completato) e conserva un giardino interno o "frutteto" chiamato Jardín del Mediodía, oltre a una splendida volta a botte nelle antiche cantine che oggi costituiscono una sala espositiva. Dopo diversi usi nel tempo (Sección Femenina, sede del Governo Civile, Cassa di Risparmio, Deputazione), è attualmente lo Spazio Culturale della Fundación Ávila, dove si tengono laboratori di formazione, mostre e attività culturali. È stato dichiarato Bene di Interesse Culturale nel 2022.',
      pt: 'Construído em 1557 por Pedro Álvarez Serrano, vereador de Ávila, e sua esposa Leonor Zapata, conforme consta na inscrição da fachada. Este palácio renascentista está localizado fora das muralhas, na Plaza de Italia, em frente a duas praças tranquilas unidas pela igreja românica de Santo Tomé el Viejo. Foi erguido em meados do século XVI em estilo renascentista, com construção em pedra granítica, alvenaria na fachada e silharia em vãos, portada e cantos. Possui três alturas. No interior, destaca-se o pátio adintelado (que não foi concluído) e preserva um jardim interior ou "pomar" chamado Jardín del Mediodía, bem como uma esplêndida abóbada de berço nas antigas adegas que hoje formam uma sala de exposições. Após diferentes usos ao longo do tempo (Sección Femenina, sede do Governo Civil, Caixa Econômica, Deputação), é atualmente o Espaço Cultural da Fundação Ávila, onde são realizados workshops de formação, exposições e atividades culturais. Foi declarado Bem de Interesse Cultural em 2022.',
      fr: 'Construit en 1557 par Pedro Álvarez Serrano, échevin d\'Ávila, et son épouse Leonor Zapata, comme indiqué sur l\'inscription de la façade. Ce palais Renaissance est situé hors les murs, sur la Plaza de Italia, en face de deux places tranquilles unies par l\'église romane de Santo Tomé el Viejo. Il fut érigé au milieu du XVIe siècle dans un style Renaissance, avec une construction en pierre de granit, de la maçonnerie sur la façade et de la pierre de taille dans les ouvertures, le portail et les angles. Il a trois niveaux. À l\'intérieur, le patio à linteaux (qui ne fut pas achevé) se distingue et conserve un jardin intérieur ou "verger" appelé Jardín del Mediodía, ainsi qu\'une splendide voûte en berceau dans les anciennes caves qui forment aujourd\'hui une salle d\'exposition. Après différentes utilisations au fil du temps (Section Féminine, siège du Gouvernement Civil, Caisse d\'Épargne, Députation), il est actuellement l\'Espace Culturel de la Fundación Ávila, où sont organisés des ateliers de formation, des expositions et des activités culturelles. Il a été déclaré Bien d\'Intérêt Culturel en 2022.',
    }),
    address: text({
      en: 'Plaza de Italia, 1',
      es: 'Plaza de Italia, 1',
      it: 'Plaza de Italia, 1',
      pt: 'Plaza de Italia, 1',
      fr: 'Plaza de Italia, 1',
    }),
    publicAccess: 'public',
    entryType: 'free',
    image: 'https://placehold.co/600x400?text=Palacio+de+los+Serrano'
  },
  {
    id: 'bracamonte',
    name: text({
      en: 'Palace of Bracamonte (or of the Holy Cross)',
      es: 'Palacio de Bracamonte (o de la Santa Cruz)',
      it: 'Palazzo di Bracamonte (o della Santa Croce)',
      pt: 'Palácio de Bracamonte (ou da Santa Cruz)',
      fr: 'Palais de Bracamonte (ou de la Sainte Croix)',
    }),
    description: text({
      en: 'Commissioned at the beginning of the 16th century by the descendants of the Bracamonte family, of French origin, settled in Ávila since the Repopulation. Attached intramuros to the northern wall, its first construction dates from the 15th century when Álvaro Dávila, Marshal of Castile, commissioned it. The building has a square plan built in ashlar, masonry and rammed earth, a symbiosis of late Gothic elements with others from the beginning of the Renaissance. It has two heights, the lower one with a simple access door with a depressed arch flanked by windows, and the upper one with balconies. The best preserved is the central square patio with two floors of galleries. The lower one has three arches per side with fine Tuscan columns that receive depressed arches, decorated in the spandrels with noble coats of arms of the owning families: Bracamonte, Velasco, Guzmán, Dávila, Águila and Valderrábanos. The upper gallery is architraved with columns with capital shoes, rich parapets with Gothic tracery and the typical Ávila ball motif from the beginning of the 16th century. It is currently the headquarters of the Territorial Service of Culture of the Junta de Castilla y León.',
      es: 'Mandado construir a comienzos del siglo XVI por los descendientes de la familia Bracamonte, de origen francés instalada en Ávila desde la Repoblación. Adosado intramuros al lienzo septentrional de la muralla, su primera construcción data del siglo XV cuando lo mandó construir Álvaro Dávila, mariscal de Castilla. El edificio es de planta cuadrada construido en sillería, mampostería y tapial, simbiosis de elementos tardogóticos con otros de principios del Renacimiento. Tiene dos alturas, la inferior con puerta de acceso sencilla con arco escarzano flanqueada por ventanas, y en la superior se abren balcones. Lo mejor conservado es el patio central cuadrado con dos pisos de galerías. El inferior tiene tres arcos por panda con finas columnas toscanas que reciben arcos escarzanos, decorados en las enjutas con escudos nobiliarios de las familias propietarias: Bracamonte, Velasco, Guzmán, Dávila, Águila y Valderrábanos. La galería superior es arquitrabada con columnas de capitel en forma de zapata, ricos antepechos con tracería gótica y el típico motivo de bolas abulenses de comienzos del siglo XVI. Actualmente es la sede del Servicio Territorial de Cultura de la Junta de Castilla y León.',
      it: 'Commissionato all\'inizio del XVI secolo dai discendenti della famiglia Bracamonte, di origine francese, stabilitasi ad Ávila dalla Ripopolazione. Addossato intramuros alla parete settentrionale della muraglia, la sua prima costruzione risale al XV secolo quando Álvaro Dávila, Maresciallo di Castiglia, lo commissionò. L\'edificio ha una pianta quadrata costruita in bugnato, muratura e terra battuta, una simbiosi di elementi tardo gotici con altri dell\'inizio del Rinascimento. Ha due altezze, quella inferiore con una semplice porta di accesso con arco ribassato fiancheggiata da finestre, e quella superiore con balconi. Il meglio conservato è il patio centrale quadrato con due piani di gallerie. Quello inferiore ha tre archi per lato con sottili colonne toscane che ricevono archi ribassati, decorati nelle lunette con stemmi nobiliari delle famiglie proprietarie: Bracamonte, Velasco, Guzmán, Dávila, Águila e Valderrábanos. La galleria superiore è architravata con colonne con capitelli a scarpa, ricchi parapetti con trafori gotici e il tipico motivo a palla di Ávila dell\'inizio del XVI secolo. Attualmente è la sede del Servizio Territoriale di Cultura della Junta de Castilla y León.',
      pt: 'Encomendado no início do século XVI pelos descendentes da família Bracamonte, de origem francesa, estabelecida em Ávila desde a Repopulação. Anexo intramuros à muralha norte, sua primeira construção data do século XV, quando Álvaro Dávila, Marechal de Castela, o encomendou. O edifício tem planta quadrada construída em silharia, alvenaria e taipa, uma simbiose de elementos góticos tardios com outros do início do Renascimento. Possui duas alturas, a inferior com uma simples porta de acesso com arco rebaixado ladeada por janelas, e a superior com varandas. O melhor preservado é o pátio central quadrado com dois andares de galerias. O inferior tem três arcos por lado com finas colunas toscanas que recebem arcos rebaixados, decorados nos tímpanos com brasões nobiliários das famílias proprietárias: Bracamonte, Velasco, Guzmán, Dávila, Águila e Valderrábanos. A galeria superior é arquitravada com colunas com capitéis em forma de sapata, ricos parapeitos com tracery gótico e o típico motivo de bola de Ávila do início do século XVI. Atualmente, é a sede do Serviço Territorial de Cultura da Junta de Castilla y León.',
      fr: 'Commandé au début du XVIe siècle par les descendants de la famille Bracamonte, d\'origine française, installée à Ávila depuis la Repopulation. Adossé intramuros au mur nord, sa première construction date du XVe siècle lorsque Álvaro Dávila, maréchal de Castille, le commanda. Le bâtiment a un plan carré construit en pierre de taille, maçonnerie et pisé, une symbiose d\'éléments gothiques tardifs avec d\'autres du début de la Renaissance. Il a deux niveaux, le niveau inférieur avec une simple porte d\'accès à arc surbaissé flanquée de fenêtres, et le niveau supérieur avec des balcons. Le mieux conservé est le patio central carré avec deux étages de galeries. Le niveau inférieur a trois arcs par côté avec de fines colonnes toscanes qui reçoivent des arcs surbaissés, décorés dans les écoinçons avec les blasons nobles des familles propriétaires : Bracamonte, Velasco, Guzmán, Dávila, Águila et Valderrábanos. La galerie supérieure est à architraves avec des colonnes à chapiteaux en forme de sabot, de riches parapets avec des entrelacs gothiques et le motif typique des boules d\'Ávila du début du XVIe siècle. Il est actuellement le siège du Service Territorial de la Culture de la Junta de Castilla y León.',
    }),
    address: text({
      en: 'Plaza de la Santa Cruz, 1',
      es: 'Plaza de la Santa Cruz, 1',
      it: 'Plaza de la Santa Cruz, 1',
      pt: 'Plaza de la Santa Cruz, 1',
      fr: 'Plaza de la Santa Cruz, 1',
    }),
    publicAccess: 'partial',
    entryType: 'free',
    image: 'https://placehold.co/600x400?text=Palacio+de+Bracamonte'
  },
  {
    id: 'almarza',
    name: text({
      en: 'Palace of the Almarza',
      es: 'Palacio de los Almarza',
      it: 'Palazzo degli Almarza',
      pt: 'Palácio dos Almarza',
      fr: 'Palais des Almarza',
    }),
    description: text({
      en: 'Built in the 16th century with granite masonry, it is currently the convent of the Congregation of the Servants of Mary. Its architecture shows elements of Islamic tradition. The facade is Renaissance in style and on its sides there are noble coats of arms. It was declared a National Monument in 1992.',
      es: 'Construido en el siglo XVI con mampostería granítica, es actualmente el convento de la Congregación de las Siervas de María. En su arquitectura se muestran elementos de tradición islámica. La portada es de estilo renacentista y en sus laterales hay blasones nobiliarios. Fue declarado Monumento Nacional en 1992.',
      it: 'Costruito nel XVI secolo con muratura granitica, è attualmente il convento della Congregazione delle Serve di Maria. Nella sua architettura si mostrano elementi di tradizione islamica. La facciata è in stile rinascimentale e ai suoi lati ci sono stemmi nobiliari. È stato dichiarato Monumento Nazionale nel 1992.',
      pt: 'Construído no século XVI com alvenaria de granito, é atualmente o convento da Congregação das Servas de Maria. Em sua arquitetura, elementos da tradição islâmica são mostrados. A fachada é em estilo renascentista e em seus lados há brasões nobiliários. Foi declarado Monumento Nacional em 1992.',
      fr: 'Construit au XVIe siècle avec de la maçonnerie en granit, c\'est actuellement le couvent de la Congrégation des Servantes de Marie. Son architecture présente des éléments de tradition islamique. La façade est de style Renaissance et sur ses côtés se trouvent des blasons nobles. Il a été déclaré Monument National en 1992.',
    }),
    address: text({ en: '', es: '', it: '', pt: '', fr: '' }),
    publicAccess: 'private',
    entryType: 'ticket',
    image: 'https://placehold.co/600x400?text=Palacio+de+los+Almarza'
  }
];

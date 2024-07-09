let currentQuery = "world";
let currentpage = 1;

const fetchNews = async (page, q) => {
  console.log(`FetchNews for ${q} ,currently on page number ${page}...`);
  let url =
    "https://newsapi.org/v2/everything?" +
    "q=" +q+
    "&from=2024-04-05&" +
    "pageSize=16&" +
    "language=en&" +
    "page=" +page +
    "&sortBy=popularity&" +
    "apiKey=3a51c8678ea74b4da76b1a2c521ecf1b";

  let req = new Request(url);

  let news = await fetch(req)
  let response = await news.json();

//    let response = {
//     status: "ok",
//     totalResults: 777,
//     articles: [
//       {
//         source: { id: null, name: "MacRumors" },
//         author: "Juli Clover",
//         title: "Apple Lays Off 600+ Employees After Canceling Car Project",
//         description:
//           "Apple this week filed a required notice with the state of California, confirming plans to permanently lay off more than 600 employees. Under California law, employers must give employees and state representatives a 60-day notice before a mass layoff event.\n\n\n…",
//         url: "https://www.macrumors.com/2024/04/04/apple-employee-layoffs-car-project/",
//         urlToImage:
//           "https://images.macrumors.com/t/GcgGD7Q3KvIhV0-Ji8FFxLlhLog=/2500x/article-new/2020/12/Apple-car-wheel-icon-feature-yellow.jpg",
//         publishedAt: "2024-04-05T00:02:47Z",
//         content:
//           "Apple this week filed a required notice with the state of California, confirming plans to permanently lay off more than 600 employees. Under California law, employers must give employees and state re… [+1125 chars]",
//       },
//       {
//         source: { id: null, name: "Hipertextual" },
//         author: "Quelian Sanz",
//         title:
//           "Apple despide a cientos de empleados tras dos proyectos fallidos",
//         description:
//           "Parece que el proyecto Apple Car ha dejado más de un agujero en la compañía. Se estima que el plan para lanzar un coche eléctrico y autónomo congregó a más de 2.000 empleados enfocados en el desarrollo, los cuales, han tenido que buscar una nueva vía tras la …",
//         url: "http://hipertextual.com/2024/04/apple-despide-a-cientos-de-empleados-tras-dos-proyectos-fallidos",
//         urlToImage:
//           "https://imgs.hipertextual.com/wp-content/uploads/2024/03/apple-eeuu-scaled.jpg",
//         publishedAt: "2024-04-05T10:01:35Z",
//         content:
//           "Parece que el proyecto Apple Car ha dejado más de un agujero en la compañía. Se estima que el plan para lanzar un coche eléctrico y autónomo congregó a más de 2.000 empleados enfocados en el desarrol… [+2680 chars]",
//       },
//       {
//         source: { id: null, name: "MacRumors" },
//         author: "Hartley Charlton",
//         title: "Two More New iPads Spotted in Regulatory Database",
//         description:
//           "Yesterday, two unreleased Apple devices were discovered in Indian regulatory filings. A further two models have now been spotted ahead of the expected announcement of new iPad models next month. \n\n\n\n\n\nThe second wave of listings, spotted by MySmartPrice, appe…",
//         url: "https://www.macrumors.com/2024/04/05/two-more-new-ipads-spotted-in-database/",
//         urlToImage:
//           "https://images.macrumors.com/t/y9oCs9lf7Jb8ZChMrEm63IsNs6A=/1600x/article-new/2024/02/iPad-Air-5.jpg",
//         publishedAt: "2024-04-05T10:45:19Z",
//         content:
//           "Yesterday, two unreleased Apple devices were discovered in Indian regulatory filings. A further two models have now been spotted ahead of the expected announcement of new iPad models next month. \r\nTh… [+741 chars]",
//       },
//       {
//         source: { id: null, name: "9to5Mac" },
//         author: "Benjamin Mayo",
//         title:
//           "Apple TV+ shows and movies: Everything to watch on Apple TV Plus",
//         description:
//           "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month. Here’s every Apple original television show and movie avai…",
//         url: "https://9to5mac.com/2024/04/05/apple-tv-plus-tv-shows-movies-guide/",
//         urlToImage:
//           "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//         publishedAt: "2024-04-05T09:43:48Z",
//         content:
//           "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month… [+80700 chars]",
//       },
//       {
//         source: { id: null, name: "AppleInsider" },
//         author: "news@appleinsider.com (Andrew Orr)",
//         title: "Apple lays off 600 employees, mostly from Apple Car project",
//         description:
//           "After Apple killed its ambitious Apple Car project and microLED Apple Watch display dreams, the company has laid off over 600 employees.Apple lays off employees from car and display projectsA recent report reveals a significant reduction in the workforce at A…",
//         url: "https://appleinsider.com/articles/24/04/05/apple-lays-off-600-employees-mostly-from-apple-car-project",
//         urlToImage:
//           "https://photos5.appleinsider.com/gallery/59214-120843-apple-logo-02-xl.jpg",
//         publishedAt: "2024-04-05T01:25:06Z",
//         content:
//           "Apple lays off employees from car and display projects\r\nAfter Apple killed its ambitious Apple Car project and microLED Apple Watch display dreams, the company has laid off over 600 employees.\r\nA rec… [+5049 chars]",
//       },
//       {
//         source: { id: null, name: "9to5Mac" },
//         author: "Filipe Espósito",
//         title:
//           "Apple confirms upcoming layoffs affecting 700+ workers, including Apple Car and microLED teams",
//         description:
//           "Apple is laying off more than 700 employees as the company has just canceled its Apple Car project and is also reconsidering the project to develop in-house Micro-LED displays. The layoffs became known after the company filed WARN notices in the state of Cali…",
//         url: "https://9to5mac.com/2024/04/04/apple-confirms-upcoming-layoffs-affecting-700-workers-including-apple-car-and-microled-teams/",
//         urlToImage:
//           "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/wwdc-23-walking-in-apple-park.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//         publishedAt: "2024-04-05T00:08:04Z",
//         content:
//           "Apple is laying off more than 700 employees as the company has just canceled its Apple Car project and is also reconsidering the project to develop in-house Micro-LED displays. The layoffs became kno… [+1614 chars]",
//       },
//       {
//         source: { id: null, name: "9to5Mac" },
//         author: "Filipe Espósito",
//         title:
//           "Apple confirms upcoming layoffs affecting 700+ workers, including Apple Car and Micro-LED teams",
//         description:
//           "Apple is laying off more than 700 employees as the company has just canceled its Apple Car project and is also reconsidering the project to develop in-house Micro-LED displays. The layoffs became known after the company filed WARN notices in the state of Cali…",
//         url: "https://9to5mac.com/2024/04/04/apple-layoffs-700-workers-car-microled/",
//         urlToImage:
//           "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/wwdc-23-walking-in-apple-park.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//         publishedAt: "2024-04-05T00:08:04Z",
//         content:
//           "Apple is laying off more than 700 employees as the company has just canceled its Apple Car project and is also reconsidering the project to develop in-house Micro-LED displays. The layoffs became kno… [+2509 chars]",
//       },
//       {
//         source: { id: null, name: "Hipertextual" },
//         author: "Luis Miranda",
//         title:
//           "Esta patente busca inyectar anuncios por HDMI cuando juegas PS5 o miras Netflix",
//         description:
//           "Una nueva patente quiere arruinarte la vida con anuncios que se activarán cuando juegas PS5 o miras una serie en tu Apple TV. La patente más reciente de Roku apuesta por un sistema que inyecta publicidad a través de HDMI, la cual se mostrará cuando pauses tu …",
//         url: "http://hipertextual.com/2024/04/hdmi-anuncios-tv-patente-roku",
//         urlToImage:
//           "https://imgs.hipertextual.com/wp-content/uploads/2024/04/hdmi-cable.jpg",
//         publishedAt: "2024-04-05T00:05:57Z",
//         content:
//           "Una nueva patente quiere arruinarte la vida con anuncios que se activarán cuando juegas PS5 o miras una serie en tu Apple TV. La patente más reciente de Roku apuesta por un sistema que inyecta public… [+3351 chars]",
//       },
//       {
//         source: { id: null, name: "AppleInsider" },
//         author: "news@appleinsider.com (William Gallagher)",
//         title:
//           "Samsung overtakes Apple to become world's leading smartphone vendor",
//         description:
//           "It's less a case of popularity, and more about release cycles, but Samsung is again the number one smartphone manufacturer in the world.Apple's iPhone 15 Pro (left) and Samsung's Galaxy S24Apple took the global top spot for smartphone sales inSeptember 2023, …",
//         url: "https://appleinsider.com/articles/24/04/05/samsung-overtakes-apple-to-become-worlds-leading-smartphone-vendor",
//         urlToImage:
//           "https://photos5.appleinsider.com/gallery/59217-120847-000-lede-iPhone-and-Galaxy-xl.jpg",
//         publishedAt: "2024-04-05T10:48:52Z",
//         content:
//           "Apple's iPhone 15 Pro (left) and Samsung's Galaxy S24\r\nIt's less a case of popularity, and more about release cycles, but Samsung is again the number one smartphone manufacturer in the world.\r\nApple … [+1638 chars]",
//       },
//       {
//         source: { id: null, name: "AppleInsider" },
//         author: "news@appleinsider.com (Wesley Hilliard)",
//         title:
//           "Google's Apple-friendly Find My Devices network launching in April",
//         description:
//           "Apple and Google have worked together to get an interoperability standard off the ground for tracking devices, and Google's Find My Devices network is ready to launch.Apple and Android devices will be able to detect most trackersAfter stalking and abusive beh…",
//         url: "https://appleinsider.com/articles/24/04/05/googles-apple-friendly-find-my-devices-network-launching-in-april",
//         urlToImage:
//           "https://photos5.appleinsider.com/gallery/59215-120841-15-Find-My-xl.jpg",
//         publishedAt: "2024-04-05T00:34:49Z",
//         content:
//           "Apple and Android devices will be able to detect most trackers\r\nApple and Google have worked together to get an interoperability standard off the ground for tracking devices, and Google's Find My Dev… [+1545 chars]",
//       },
//       {
//         source: { id: null, name: "9to5Mac" },
//         author: "Benjamin Mayo",
//         title:
//           "Colin Farrell stars in new mystery drama Sugar, streaming now on Apple TV+",
//         description:
//           "Colin Farrell stars in a new drama series ‘Sugar‘, streaming now on Apple TV+. Farrell plays the titular John Sugar, who is a private detective tasked with investigating the mysterious disappearance of Olivia Siegel, the daughter of a famous Hollywood produce…",
//         url: "https://9to5mac.com/2024/04/05/colin-farrell-mystery-drama-sugar-apple-tv/",
//         urlToImage:
//           "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/apple-tv-sugar.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//         publishedAt: "2024-04-05T10:05:43Z",
//         content:
//           "Colin Farrell stars in a new drama series ‘Sugar‘, streaming now on Apple TV+. Farrell plays the titular John Sugar, who is a private detective tasked with investigating the mysterious disappearance … [+1572 chars]",
//       },
//       {
//         source: { id: null, name: "Gizmodo.jp" },
//         author: "武者良太",
//         title: "アップルのiPhone 15アピールはAndroid移行予備軍へのメッセージ？",
//         description:
//           "Apple（アップル）がiPhone 11/12シリーズとiPhone 15シリーズを比較する「Reasons to Upgrade」というページを公開しました。なお英語版のみのコンテンツです。",
//         url: "https://www.gizmodo.jp/2024/04/iphone-15-appeal.html",
//         urlToImage:
//           "https://media.loom-app.com/gizmodo/dist/images/2024/04/05/shutterstock_2366197445.jpg?w=1280&h=630&f=jpg",
//         publishedAt: "2024-04-05T01:00:00Z",
//         content:
//           "45\r\nSNS45\r\nImage: Apple\r\nAppleiPhone 11/12iPhone 15Reasons to Upgrade\r\nImage: Apple\r\niPhone 15\r\n1/\r\niPhone 11/12 iPhone SE \r\nAppleiPhone 15\r\nSNSAndroid\r\nSource: Apple",
//       },
//       {
//         source: { id: null, name: "Applesfera.com" },
//         author: "Guille Lomener",
//         title:
//           "Apple se ha tropezado en China con un rival imparable, pero tiene un plan maestro para recuperar el trono",
//         description:
//           "Muchas veces, desde Europa, Estados Unidos o Latinoamérica, no somos conscientes de lo grande que es el mercado chino. Y no solo grande, sino diferente. Una sociedad y país muy desarrollado al margen de servicios como los de Google y con una industria y softw…",
//         url: "https://www.applesfera.com/apple-1/apple-se-ha-tropezado-china-rival-imparable-tiene-plan-maestro-para-recuperar-trono",
//         urlToImage: "https://i.blogs.es/063d57/apple-china/840_560.jpeg",
//         publishedAt: "2024-04-05T10:01:09Z",
//         content:
//           "Muchas veces, desde Europa, Estados Unidos o Latinoamérica, no somos conscientes de lo grande que es el mercado chino. Y no solo grande, sino diferente. Una sociedad y país muy desarrollado al margen… [+5190 chars]",
//       },
//       {
//         source: { id: null, name: "Journal du geek" },
//         author: "tristan carballeda",
//         title:
//           "Ce brevet d’Apple veut transformer nos écrans avec “l’informatique spatiale”",
//         description:
//           "Apple a présenté en juin dernier le Vision Pro et l'informatique spatiale. Mais la pomme ne veut pas s'arrêter à cela.",
//         url: "https://www.journaldugeek.com/2024/04/05/apple-veut-faire-de-linformatique-spatiale-une-nouvelle-norme/",
//         urlToImage:
//           "https://www.journaldugeek.com/app/uploads/2024/04/apple-spatial-computing-vision-pro.jpg",
//         publishedAt: "2024-04-05T08:58:13Z",
//         content:
//           "Apple compte beaucoup sur l’informatique spatiale dans les prochaines années. Si la présentation du Vision Pro l’an dernier a été un véritable tour de force pour la marque à la pomme, elle ne compte … [+2477 chars]",
//       },
//       {
//         source: { id: null, name: "Applesfera.com" },
//         author: "Jesús Quesada",
//         title:
//           "Muchos dispositivos Apple rebajadísimos en el outlet de MediaMarkt, como iPhone, iPad, Mac y más: Cazando Gangas",
//         description:
//           "La Semana Santa ha terminado, pero las ofertas continúan, y como es viernes en Applesfera traemos la sección Cazando Gangas, que es el espacio dedicado a recopilar los mejores chollos de dispositivos Apple. Estos son algunos de los más llamativos.\n<!-- BREAK …",
//         url: "https://www.applesfera.com/seleccion/muchos-dispositivos-apple-rebajadisimos-outlet-mediamarkt-como-iphone-ipad-mac-cazando-gangas",
//         urlToImage: "https://i.blogs.es/3af671/cazando-gangas/840_560.jpeg",
//         publishedAt: "2024-04-05T06:01:04Z",
//         content:
//           "La Semana Santa ha terminado, pero las ofertas continúan, y como es viernes en Applesfera traemos la sección Cazando Gangas, que es el espacio dedicado a recopilar los mejores chollos de dispositivos… [+4920 chars]",
//       },
//       {
//         source: { id: null, name: "Applesfera.com" },
//         author: "Álvaro García M.",
//         title:
//           "Más de 500 días sin ver un nuevo iPad. Apple tiene una razón muy especial para habernos hecho esperar tanto",
//         description:
//           'Si sigues con regularidad las noticias relacionadas con Apple, habrás leído y/o escuchado ya varias veces en los últimos meses eso de que "los nuevos iPad son inminentes". Como mínimo, unas dos o tres. Y no es que sean un invento de los medios o los filtrador…',
//         url: "https://www.applesfera.com/ipad/500-dias-ver-nuevo-ipad-apple-tiene-razon-muy-especial-para-habernos-hecho-esperar",
//         urlToImage: "https://i.blogs.es/66281f/ipad/840_560.jpeg",
//         publishedAt: "2024-04-05T07:06:56Z",
//         content:
//           'Si sigues con regularidad las noticias relacionadas con Apple, habrás leído y/o escuchado ya varias veces en los últimos meses eso de que "los nuevos iPad son inminentes". Como mínimo, unas dos o tre… [+5548 chars]',
//       },
//       {
//         source: { id: null, name: "AppleInsider" },
//         author: "news@appleinsider.com (William Gallagher)",
//         title: "Two more new iPads spotted in regulatory database",
//         description:
//           "Another two unannounced iPads have now been listed on an Indian regulator's database, meaning the expected iPad Pro and iPad Air models are likely to be released soon.iPad ProsAll new devices such as iPads must go through regulatory testing before they are al…",
//         url: "https://appleinsider.com/articles/24/04/05/two-more-new-ipads-spotted-in-regulatory-database",
//         urlToImage:
//           "https://photos5.appleinsider.com/gallery/59001-120414-57781-117663-iPad-Pros-xl-xl.jpg",
//         publishedAt: "2024-04-05T10:07:22Z",
//         content:
//           "iPad Pros\r\nAnother two unannounced iPads have now been listed on an Indian regulator's database, meaning the expected iPad Pro and iPad Air models are likely to be released soon.\r\nAll new devices suc… [+1825 chars]",
//       },
//       {
//         source: { id: null, name: "Hipertextual" },
//         author: "Aglaia Berlutti",
//         title:
//           "‘Sugar’, crítica: Colin Farrell se pasa al género noir en una historia tramposa",
//         description:
//           "Las historias de detectives, suelen tener un conflicto muy parecido entre sí. En especial, cuando enfocan su interés en un personaje con un pasado turbulento, en busca de la redención, mientras intenta resolver un crimen especialmente tortuoso. Por lo que Sug…",
//         url: "http://hipertextual.com/2024/04/sugar-critica-colin-farrell-se-pasa-al-genero-noir-en-una-historia-tramposa",
//         urlToImage:
//           "https://imgs.hipertextual.com/wp-content/uploads/2024/04/Sugar-serie-Apple-TV-Hipertextual-scaled.jpg",
//         publishedAt: "2024-04-05T08:48:41Z",
//         content:
//           "Las historias de detectives, suelen tener un conflicto muy parecido entre sí. En especial, cuando enfocan su interés en un personaje con un pasado turbulento, en busca de la redención, mientras inten… [+5491 chars]",
//       },
//       {
//         source: { id: null, name: "Theregister.com" },
//         author: "Matthew Connatser",
//         title:
//           "Academics probe Apple's privacy settings and get lost and confused",
//         description:
//           "Just disabling Siri requires visits to five submenus\nA study has concluded that Apple's privacy practices aren't particularly effective, because default apps on the iPhone and Mac have limited privacy settings and confusing configuration options.…",
//         url: "https://www.theregister.com/2024/04/05/apple_apps_privacy_study/",
//         urlToImage:
//           "https://regmedia.co.uk/2024/04/04/shutterstock_confused_smartphone_user.jpg",
//         publishedAt: "2024-04-05T05:34:12Z",
//         content:
//           "A study has concluded that Apple's privacy practices aren't particularly effective, because default apps on the iPhone and Mac have limited privacy settings and confusing configuration options.\r\nThe … [+5378 chars]",
//       },
//       {
//         source: { id: null, name: "Caschys Blog" },
//         author: "Olli",
//         title: "Apple Arcade: Puyo Puyo Puzzle Pop und mehr hinzugefügt",
//         description:
//           "Apple hat seinem Spiele-Service Apple Arcade neue Spiele hinzugefügt. Der Frontrunner in diesem Monat ist der Sega-Titel Puyo Puyo Puzzle Pop. Dabei versucht ihr Puyos derselben Farbe miteinander zu verbinden, um das Spielbrett zu säubern. Wie auch bei Tetris…",
//         url: "https://stadt-bremerhaven.de/apple-arcade-puyo-puyo-puzzle-pop-und-mehr-hinzugefuegt/",
//         urlToImage:
//           "https://stadt-bremerhaven.de/wp-content/uploads/2024/04/GKXRUlJawAADhMV.jpg",
//         publishedAt: "2024-04-05T06:20:41Z",
//         content:
//           "Apple hat seinem Spiele-Service Apple Arcade neue Spiele hinzugefügt. Der Frontrunner in diesem Monat ist der Sega-Titel Puyo Puyo Puzzle Pop. Dabei versucht ihr Puyos derselben Farbe miteinander zu … [+2364 chars]",
//       },
//       {
//         source: { id: null, name: "Applesfera.com" },
//         author: "Guille Lomener",
//         title:
//           "Los Apple Beats Solo 4 ya son una realidad: se filtran todos los datos antes de su anuncio",
//         description:
//           "Apple compró la empresa Beats en el año 2014 por muchas razones. Una de ellas era su servicio musical y así poder convertirlo en Apple Music. Otra era hacerse con una de las marcas de auriculares más reconocidas del mundo. Diez años después, Beats está comple…",
//         url: "https://www.applesfera.com/accesorios/apple-beats-solo-4-realidad-se-filtran-todos-datos-antes-su-anuncio",
//         urlToImage: "https://i.blogs.es/313fbd/beats-solo-4/840_560.jpeg",
//         publishedAt: "2024-04-05T08:01:09Z",
//         content:
//           "Apple compró la empresa Beats en el año 2014 por muchas razones. Una de ellas era su servicio musical y así poder convertirlo en Apple Music. Otra era hacerse con una de las marcas de auriculares más… [+3526 chars]",
//       },
//       {
//         source: { id: null, name: "01net.com" },
//         author: "Florian Bayard",
//         title: "Pourquoi Apple licencie des centaines d’employés",
//         description:
//           "Apple a été obligé de licencier des centaines d'employés. Le géant de Cupertino a annulé coup sur coup plusieurs programmes d'envergure, dont le projet Titan.",
//         url: "https://www.01net.com/actualites/pourquoi-apple-licencie-des-centaines-demployes.html",
//         urlToImage:
//           "https://www.01net.com/app/uploads/2024/03/Design-sans-titre122.jpg",
//         publishedAt: "2024-04-05T10:22:14Z",
//         content:
//           "Apple a été obligé de licencier des centaines d’employés. Le géant de Cupertino a annulé coup sur coup plusieurs programmes d’envergure, dont le projet Titan. Apple vient d’annoncer une centaine de l… [+3368 chars]",
//       },
//       {
//         source: { id: null, name: "Android Authority" },
//         author: "Aamir Siddiqui",
//         title:
//           "These iPhone 16 and iPhone 16 Pro dummy units give us iPhone X vibes",
//         description:
//           "New leaked images are showing off all four phones in the upcoming iPhone 16 lineup, and we can't help get iPhone X flashbacks. Read on!",
//         url: "https://www.androidauthority.com/apple-iphone-16-pro-dummy-unit-leaks-3431630/",
//         urlToImage:
//           "https://www.androidauthority.com/wp-content/uploads/2024/04/iPhone-16-series-dummy-units_1_1.jpeg",
//         publishedAt: "2024-04-05T07:07:05Z",
//         content:
//           "<ul><li>Images of dummy units of all four phones in the upcoming iPhone 16 series have leaked.</li><li>From these images, the iPhone 16 and iPhone 16 Plus look a lot like the erstwhile iPhone X, than… [+2184 chars]",
//       },
//       {
//         source: { id: null, name: "Frandroid" },
//         author: "Hugo Bernard",
//         title: "Apple licencie aussi : plus de 700 employés remerciés",
//         description:
//           "Après dix ans de travail sur l'Apple Car, l'entreprise abandonne finalement son projet. Apple veut également repenser son projet de développement d'écrans MicroLED. Ce qui fait que la firme va licencier plus de 700 salariés.",
//         url: "https://www.frandroid.com/marques/apple/1987590_apple-licencie-aussi-plus-de-700-employes-remercies",
//         urlToImage:
//           "https://images.frandroid.com/wp-content/uploads/2020/08/laurenz-heymann-waygsck20h8-unsplash-scaled-e1598055248825.jpg",
//         publishedAt: "2024-04-05T08:46:26Z",
//         content:
//           "Après dix ans de travail sur l'Apple Car, l'entreprise abandonne finalement son projet. Apple veut également repenser son projet de développement d'écrans MicroLED. Ce qui fait que la firme va licenc… [+3790 chars]",
//       },
//       {
//         source: { id: null, name: "Applesfera.com" },
//         author: "Álvaro García M.",
//         title:
//           "La fórmula del éxito de Apple se llama DRI. Y es también la mejor técnica para encontrar culpables si algo falla",
//         description:
//           "Individuos Directamente Responsables es el significado en castellano de las siglas DRI (Directly Responsible Individuals). Y probablemente se cuenten por cientos los DRI que hay en el inmenso Apple Park. Se trata de un término acuñado por la propia compañía e…",
//         url: "https://www.applesfera.com/apple-1/formula-exito-apple-se-llama-dri-tecnica-para-encontrar-culpables-algo-falla",
//         urlToImage: "https://i.blogs.es/87772c/apple-1/840_560.jpeg",
//         publishedAt: "2024-04-05T09:01:11Z",
//         content:
//           "Individuos Directamente Responsables es el significado en castellano de las siglas DRI (Directly Responsible Individuals). Y probablemente se cuenten por cientos los DRI que hay en el inmenso Apple P… [+7749 chars]",
//       },
//       {
//         source: { id: null, name: "CNET" },
//         author: "Zachary McAuliffe （CNET News） 翻訳校正： 編集部",
//         title:
//           "「iOS 17.5」で何が変わる？--最初のベータ版に登場した新機能まとめ",
//         description:
//           "アップルは米国時間4月4日、「iOS 17.5」の最初のベータ版をパブリックベータテスター向けに公開した。開発者向けベータ版の公開から2日後、「iOS 17.4」の公開から約1カ月後というタイミングだ。",
//         url: "https://japan.cnet.com/article/35217396/",
//         urlToImage:
//           "https://japan.cnet.com/storage/2024/04/05/de6bf1869b93e510db1470d8d3817cb4/ios-17-name-tri_1280x960.jpg",
//         publishedAt: "2024-04-05T02:59:00Z",
//         content:
//           "Apple44iOS 17.52iOS 17.41\r\niOS 17.5\r\niOS 17.51\r\nEU\r\nMacRumorsiOS 17.51App StoreEUApple312EU\r\niOS 17.51\r\niOS 17.4\r\nApple Books\r\nApple BooksReading GoalsExplore the Book StoreBook Store\r\nBooks151144024… [+39 chars]",
//       },
//       {
//         source: { id: null, name: "Xataka.com" },
//         author: "Roberto Méndez",
//         title:
//           "En abril, los chollos no se marchitan gracias a descuentazos en smart TVs, altavoces, móviles, ordenadores y más: Cazando Gangas",
//         description:
//           "Después de una Semana Santa pasada por agua, abril comienza a florecer con ofertas de todo tipo en tecnología. A continuación, repasaremos algunas de las mejores ofertas que te puedes a lo largo de este fin de semana en smart TVs, altavoces inalámbricos, telé…",
//         url: "https://www.xataka.com/seleccion/abril-chollos-no-se-marchitan-gracias-a-descuentazos-smart-tvs-altavoces-moviles-ordenadores-cazando-gangas",
//         urlToImage:
//           "https://i.blogs.es/e41e87/cazando-gangas-primera-semana-abril-mejores-ofertas/840_560.jpeg",
//         publishedAt: "2024-04-05T08:15:10Z",
//         content:
//           "Después de una Semana Santa pasada por agua, abril comienza a florecer con ofertas de todo tipo en tecnología. A continuación, repasaremos algunas de las mejores ofertas que te puedes a lo largo de e… [+9236 chars]",
//       },
//       {
//         source: { id: null, name: "Les Numériques" },
//         author: "Julien Vercoutère",
//         title:
//           "Actualité : Apple iPad : de nouveaux modèles de tablettes apparaissent dans les bases de données indiennes",
//         description:
//           "Les nouvelles tablettes d'Apple sont particulièrement attendues. Si de nombreuses informations avaient déjà fuité, leur introduction dans les dépôts réglementaires indiens confirme une commercialisation imminente.",
//         url: "https://www.lesnumeriques.com/tablette-tactile/apple-ipad-de-nouveaux-modeles-de-tablettes-apparaissent-dans-les-bases-de-donnees-indiennes-n220446.html",
//         urlToImage:
//           "https://cdn.lesnumeriques.com/optim/news/22/220446/c99ecba5-ipad-de-nouveaux-modeles-apparaissent-dans-les-bases-de-donnees-indiennes__1200_630__0-144-3000-1719_wtmk.jpg",
//         publishedAt: "2024-04-05T08:41:00Z",
//         content:
//           "Aux diverses rumeurs entourant les prochains iPad d'Apple s'ajoutent de récentes découvertes dans la base de données du Bureau of Indian Standards (BIS). Les numéros de modèle A2836 et A2837 ont été … [+1790 chars]",
//       },
//       {
//         source: { id: "business-insider", name: "Business Insider" },
//         author: "insider@insider.com (Meghan Morris)",
//         title:
//           "Apple cut more than 600 California employees after retreating from its car and screen projects",
//         description:
//           "Tech giant Apple downsizes workforce tied to two major projects.",
//         url: "https://www.businessinsider.com/apple-cuts-600-california-jobs-after-electric-vehicle-screen-retreats-2024-4",
//         urlToImage:
//           "https://i.insider.com/65bcdd0543bb77284ba2e94c?width=1200&format=jpeg",
//         publishedAt: "2024-04-05T02:14:44Z",
//         content:
//           "As Apple retreats from two ambitious projects, the tech giant has cut more than 600 employees in California, per filings with the state.\r\nOn Tuesday, Apple filed a series of notices with the state ab… [+1270 chars]",
//       },
//       {
//         source: { id: null, name: "Frandroid" },
//         author: "Hugo Clery",
//         title:
//           "Apple s’intéresse à la robotique, la fin de Google Podcasts et record du monde de recharge pour cette voiture électrique – Tech’spresso",
//         description:
//           "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le jeudi 4 avril : Apple est au travail sur son premier robot, Google met fin à son applications Podcasts et record du monde de recharge. Pour ne manquer aucune actualité, pensez à…",
//         url: "https://www.frandroid.com/actualites-generales/1987410_apple-sinteresse-a-la-robotique-la-fin-de-google-podcasts-et-record-du-monde-de-recharge-pour-cette-voiture-electrique-techspresso",
//         urlToImage:
//           "https://images.frandroid.com/wp-content/uploads/2024/03/apple-store-chicago-michigan-avenue-scaled.jpg",
//         publishedAt: "2024-04-05T05:02:09Z",
//         content:
//           "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le jeudi 4 avril : Apple est au travail sur son premier robot, Google met fin à son applications Podcasts et record du mond… [+1913 chars]",
//       },
//       {
//         source: { id: null, name: "Yahoo Entertainment" },
//         author: "Associated Press",
//         title:
//           "Apple lays off more than 600 workers in California in its first major round of post-pandemic cuts",
//         description:
//           "Apple is laying off more than 600 workers in California, marking the company's first big wave of post-pandemic job cuts amid a broader wave of tech industry ...",
//         url: "https://finance.yahoo.com/news/apple-lays-off-more-600-102012318.html",
//         urlToImage:
//           "https://s.yimg.com/ny/api/res/1.2/_zNPGDYBV9AIpaigEtc38w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/bcee9e4bf67cea508bca32d114e129f0",
//         publishedAt: "2024-04-05T10:20:12Z",
//         content:
//           "Apple is laying off more than 600 workers in California, marking the company's first big wave of post-pandemic job cuts amid a broader wave of tech industry consolidation.\r\nThe iPhone maker notified … [+1352 chars]",
//       },
//       {
//         source: { id: null, name: "La Vanguardia" },
//         author: "Christian Collado",
//         title:
//           "Las primeras consecuencias tras la cancelación del Apple Car: más de 700 empleados podrían ser despedidos",
//         description:
//           "No es demasiado frecuente ver a Apple cancelando proyectos. Pero cuando sucede, las consecuencias pueden ser catastróficas para parte de la plantilla de la empresa más valiosa del mundo. Más de 700 empleados pueden dar fe de ello, pues después de haber abando…",
//         url: "https://www.lavanguardia.com/andro4all/apple/las-primeras-consecuencias-tras-la-cancelacion-del-apple-car-mas-de-700-empleados-podrian-ser-despedidos",
//         urlToImage:
//           "https://www.lavanguardia.com/andro4all/hero/2024/04/sede-de-apple-en-cupertino.jpg?width=1200",
//         publishedAt: "2024-04-05T07:05:14Z",
//         content:
//           "Apple Park en Cupertino, California\r\nNo es demasiado frecuente ver a Apple cancelando proyectos. Pero cuando sucede, las consecuencias pueden ser catastróficas para parte de la plantilla de la empres… [+1799 chars]",
//       },
//       {
//         source: { id: null, name: "Frandroid" },
//         author: "Marie Lizak",
//         title:
//           "Pourquoi Tesla et Apple sont au coeur d’un procès autour de l’Autopilot",
//         description:
//           "Dans le collimateur de la justice américaine à la suite d'un accident mortel impliquant son système de conduite semi-autonome Autopilot, Tesla passera devant le juge avec ses voitures électriques et son Autopilot. Mais la firme ne compte pas y aller seule et …",
//         url: "https://www.frandroid.com/marques/tesla/1987730_pourquoi-tesla-et-apple-sont-au-coeur-dun-proces-autour-de-lautopilot",
//         urlToImage:
//           "https://images.frandroid.com/wp-content/uploads/2021/03/tesla-navigation-autopilot.jpg",
//         publishedAt: "2024-04-05T10:22:34Z",
//         content:
//           "Dans le collimateur de la justice américaine à la suite d'un accident mortel impliquant son système de conduite semi-autonome Autopilot, Tesla passera devant le juge avec ses voitures électriques et … [+4207 chars]",
//       },
//       {
//         source: { id: null, name: "Xataka.com" },
//         author: "Javier Pastor",
//         title:
//           "Dos palés llenos de PlayDate han desaparecido en una gasolinera. Es un desastre para el futuro de esta consola",
//         description:
//           "Aunque se anunció en 2019, la simpática y original consola portátil PlayDate acabó retrasándose y llegando en 2022. Desde entonces se ha convertido en un pequeño objeto de culto para sus fans. El pequeño proyecto tuvo un éxito notable en su primer año de anda…",
//         url: "https://www.xataka.com/videojuegos/dos-pales-llenos-playdate-han-desaparecido-gasolinera-desastre-para-futuro-esta-consola",
//         urlToImage: "https://i.blogs.es/8ca942/pl1/840_560.jpeg",
//         publishedAt: "2024-04-05T09:31:09Z",
//         content:
//           "Aunque se anunció en 2019, la simpática y original consola portátil PlayDate acabó retrasándose y llegando en 2022. Desde entonces se ha convertido en un pequeño objeto de culto para sus fans. El peq… [+2833 chars]",
//       },
//       {
//         source: { id: null, name: "Xataka.com" },
//         author: "Javier Pastor",
//         title:
//           "Diez años después, ya sabemos cuánto dinero ha perdido Meta con la realidad virtual. Una absoluta burrada",
//         description:
//           "El 25 de marzo de 2014 Facebook anunciaba por sorpresa la adquisición de Oculus por 2.000 millones de dólares. Las gafas de realidad virtual de Palmer Luckey habían generado una expectación asombrosa, pero si alguien se creyó la promesa de los mundos virtuale…",
//         url: "https://www.xataka.com/realidad-virtual-aumentada/diez-anos-despues-sabemos-cuanto-dinero-ha-perdido-meta-realidad-virtual-absoluta-burrada",
//         urlToImage: "https://i.blogs.es/9803fb/mark/840_560.jpeg",
//         publishedAt: "2024-04-05T07:07:27Z",
//         content:
//           "El 25 de marzo de 2014 Facebook anunciaba por sorpresa la adquisición de Oculus por 2.000 millones de dólares. Las gafas de realidad virtual de Palmer Luckey habían generado una expectación asombrosa… [+2763 chars]",
//       },
//       {
//         source: { id: null, name: "Touchlab.jp" },
//         author: "Nakimo",
//         title:
//           "【6%還元】楽天Rebatesが「Appleの学割キャンペーン」にポイント上乗せ中",
//         description:
//           'Apple公式サイトの「学割キャンペーン」にあわせて、楽天Rebates(リベーツ)でさらに最大6%のポイント還元を上乗せするイベントが開催中です。 【リンク】楽天Rebates – 対象のMacまたはiPa […]©2019 "Touch Lab - タッチ ラボ".',
//         url: "https://touchlab.jp/2024/04/rebates_apple_2024apr5/",
//         urlToImage:
//           "https://touchlab.jp/wp-content/uploads/2024/04/rebates_2024apr6_0.jpg",
//         publishedAt: "2024-04-05T03:15:02Z",
//         content:
//           "Apple公式サイトの「学割キャンペーン」にあわせて、楽天Rebates(リベーツ)でさらに最大6%のポイント還元を上乗せするイベントが開催中です。\n【リンク】楽天Rebates – 対象のMacまたはiPadを学割で買うと6%還元\n\nAppleの「学割キャンペーン」とは\nAppleは、学生・教職員向けに「学割制度」設けており、MacやiPad等が割引価格で購入できるほか、AppleCare+が… [+870 chars]",
//       },
//       {
//         source: { id: null, name: "Xataka Android" },
//         author: "Iván Ramírez",
//         title:
//           "El esperado 'Encontrar mi dispositivo sin conexión' de Android llegará en cuestión de días y con un año de retraso",
//         description:
//           "El año pasado Google tenía ya lista su red de Encontrar mi dispositivo para móviles Android, equivalente a la red de SmartThings Find de Samsung o el Find My de Apple, pero todavía mayor pues hay más de 3.000 millones de móviles Android en el mundo. Sin embar…",
//         url: "https://www.xatakandroid.com/sistema-operativo/encontrar-mi-dispositivo-conexion-android-llegara-cuestion-dias",
//         urlToImage: "https://i.blogs.es/632b9d/encontrar/840_560.jpeg",
//         publishedAt: "2024-04-05T06:01:04Z",
//         content:
//           "El año pasado Google tenía ya lista su red de Encontrar mi dispositivo para móviles Android, equivalente a la red de SmartThings Find de Samsung o el Find My de Apple, pero todavía mayor pues hay más… [+2965 chars]",
//       },
//       {
//         source: { id: null, name: "Yahoo Entertainment" },
//         author: null,
//         title:
//           "Apple cuts over 700 jobs following its car and display project closures",
//         description: null,
//         url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_556d2e50-badc-448b-9efd-178843da111c",
//         urlToImage: null,
//         publishedAt: "2024-04-05T06:15:24Z",
//         content:
//           "If you click 'Accept all', we and our partners (including 240 who are part of the IAB Transparency &amp; Consent Framework) will also store and/or access information on a device (in other words, use … [+678 chars]",
//       },
//     ],
//   };

  console.log(response);
    
  resultCount.innerHTML = response.totalResults;
  let str = "";
  let count=0;
  for (let item of response.articles) {
    if(count==0){
        count=1;
        continue;
    }
    str =
      str +
      `<div class="card my-4 mx-2 " style="width: 15rem">
        <img height="175" src="${item.urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.title.slice(0,50)}...</h5>
          <p class="card-text">
            ${item.description.slice(0,30)}...
          </p>
        
          <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>    
        </div>
      </div>`;
  }

  document.querySelector(".content").innerHTML = str;
};
fetchNews(1, currentQuery);

search.addEventListener("click" , (e) =>{
    e.preventDefault();
    let query = searchInput.value;
    currentQuery = query;
    fetchNews(1, currentQuery);
})

prev.addEventListener("click" , (e) =>{
    e.preventDefault();
    if(currentpage > 1){
        currentpage = currentpage-1;
        fetchNews(currentpage, currentQuery);
    }
})

next.addEventListener("click" , (e) =>{
    e.preventDefault();
    currentpage = currentpage + 1;
    fetchNews(currentpage, currentQuery);
})
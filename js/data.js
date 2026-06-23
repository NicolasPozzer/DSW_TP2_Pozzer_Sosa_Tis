


const GAMES = [
  {
    id: 1,
    title: "GTA: San Andreas",
    studio: "Rockstar Games",
    authors: ["Rockstar Games", "Rockstar North"],
    price: 2999,
    category: "Acción",
    year: 2004,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Grand Theft Auto: San Andreas es un videojuego de acción-aventura desarrollado por Rockstar North. Ambientado en el estado ficticio de San Andreas, el juego sigue al protagonista Carl 'CJ' Johnson que regresa a su ciudad natal tras la muerte de su madre.",
    reviews: [
      { user: "GamerX", stars: 5, text: "Un clásico absoluto, no pasa de moda." },
      { user: "RetroFan", stars: 4, text: "Excelente juego, mucho contenido." }
    ]
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    studio: "Rockstar Games",
    authors: ["Rockstar Games"],
    price: 7999,
    category: "Acción",
    year: 2018,
    stock: true,
    currency: "ARS",
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    description: "Red Dead Redemption 2 es un juego de acción-aventura de mundo abierto desarrollado y publicado por Rockstar Games. La historia sigue a Arthur Morgan, un forajido miembro de la banda Van der Linde en 1899.",
    reviews: [
      { user: "CowboyFan", stars: 5, text: "La mejor historia de videojuegos de la última década." }
    ]
  },
  {
    id: 3,
    title: "Resident Evil (1996)",
    studio: "Capcom",
    authors: ["Takahiro Arimitsu", "Isao Oishi"],
    price: 12999,
    category: "Terror",
    year: 1996,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Resident Evil es un videojuego de survival horror desarrollado por Capcom. Los jugadores controlan a miembros del S.T.A.R.S. que investigan una mansión llena de criaturas mutantes en los Montes Arklay.",
    reviews: [
      { user: "HorrorLover", stars: 5, text: "El juego que definió el survival horror. Imprescindible." }
    ]
  },
  {
    id: 4,
    title: "Street Fighter II",
    studio: "Capcom",
    authors: ["Takashi Nishiyama", "Hiroshi Matsumoto"],
    price: 10999,
    category: "Peleas",
    year: 1991,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Street Fighter II es el videojuego de lucha que revolucionó el género y los arcades. Con ocho personajes seleccionables, cada uno con movimientos únicos, estableció el estándar para todos los juegos de pelea posteriores.",
    reviews: [
      { user: "FighterPro", stars: 5, text: "El rey de los juegos de pelea. Hadouken!" }
    ]
  },
  {
    id: 5,
    title: "Final Fight",
    studio: "Capcom",
    authors: ["Akira Nishitani", "Akira Yasuda"],
    price: 22999,
    category: "Acción",
    year: 1989,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Final Fight es un videojuego de beat 'em up desarrollado por Capcom. El alcalde Mike Haggar y sus aliados deben rescatar a la hija del alcalde de las garras de la banda Mad Gear en Metro City.",
    reviews: [
      { user: "ArcadeLegend", stars: 5, text: "Clásico del arcade que nunca pasa de moda." }
    ]
  },
  {
    id: 6,
    title: "Super Mario Bros",
    studio: "Nintendo",
    authors: ["Shigeru Miyamoto", "Takashi Tezuka"],
    price: 8999,
    category: "Plataformas",
    year: 1985,
    stock: true,
    currency: "ARS",
    img: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
    description: "Super Mario Bros es uno de los videojuegos más influyentes de la historia. Mario debe rescatar a la Princesa Peach del malvado Bowser recorriendo el Reino Champiñón.",
    reviews: [
      { user: "NintendoFan", stars: 5, text: "El juego que me hizo amar los videojuegos." }
    ]
  },
  {
    id: 7,
    title: "Pac-Man",
    studio: "Namco",
    authors: ["Toru Iwatani"],
    price: 3999,
    category: "Arcade",
    year: 1980,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Pac-Man es el icónico videojuego arcade de Namco. Controlá al simpático Pac-Man por laberintos, comé todos los puntos y evitá a los fantasmas. ¡Un clásico atemporal!",
    reviews: [
      { user: "ArcadeKing", stars: 5, text: "El juego más reconocible del mundo." }
    ]
  },
  {
    id: 8,
    title: "Mortal Kombat II",
    studio: "Midway",
    authors: ["Ed Boon", "John Tobias"],
    price: 9999,
    category: "Peleas",
    year: 1993,
    stock: false,
    currency: "ARS",
    img: "",
    description: "Mortal Kombat II es la segunda entrega de la legendaria saga de juegos de pelea. Con sus brutales fatalities y personajes icónicos, marcó una generación entera de jugadores.",
    reviews: [
      { user: "FatalityFan", stars: 5, text: "FINISH HIM! El mejor MK de la saga original." }
    ]
  },
  {
    id: 9,
    title: "Sonic the Hedgehog",
    studio: "Sega",
    authors: ["Yuji Naka", "Hirokazu Yasuhara"],
    price: 6999,
    category: "Plataformas",
    year: 1991,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Sonic the Hedgehog es el juego que presentó al erizo azul más veloz del mundo. Corre a velocidades increíbles, coleccioná anillos y enfrentá al Dr. Robotnik.",
    reviews: [
      { user: "BlueSpeed", stars: 4, text: "GOTTA GO FAST! Un clásico de Sega Genesis." }
    ]
  },
  {
    id: 10,
    title: "Castlevania: Symphony of the Night",
    studio: "Konami",
    authors: ["Toru Hagihara", "Koji Igarashi"],
    price: 15999,
    category: "Acción",
    year: 1997,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Castlevania: Symphony of the Night es uno de los mejores videojuegos de la historia. Controlá a Alucard, hijo de Drácula, en un inmenso castillo lleno de secretos.",
    reviews: [
      { user: "VampireHunter", stars: 5, text: "What is a man? ¡Una obra maestra!" }
    ]
  },
  {
    id: 11,
    title: "Mega Man 2",
    studio: "Capcom",
    authors: ["Akira Kitamura"],
    price: 5999,
    category: "Plataformas",
    year: 1988,
    stock: true,
    currency: "ARS",
    img: "",
    description: "Mega Man 2 es considerado el mejor juego de la serie Mega Man. Con 8 Robot Masters únicos y una banda sonora legendaria, es un must-have para cualquier coleccionista.",
    reviews: [
      { user: "MegaFan", stars: 5, text: "La mejor banda sonora de NES. ¡Un clásico!" }
    ]
  },
  {
    id: 12,
    title: "FIFA 98",
    studio: "EA Sports",
    authors: ["EA Canada"],
    price: 4999,
    category: "Deportes",
    year: 1997,
    stock: true,
    currency: "ARS",
    img: "",
    description: "FIFA 98: Road to World Cup es uno de los mejores juegos de fútbol de su época. Con licencias oficiales del Mundial de Francia 98 y 172 equipos nacionales.",
    reviews: [
      { user: "FutbolRetro", stars: 4, text: "Recuerdos de la infancia. ¡Qué juego!" }
    ]
  }
];

const CATEGORIES = ["Todos", "Acción", "Deportes", "Terror", "Peleas", "Plataformas", "Arcade"];


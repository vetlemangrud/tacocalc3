export type Ingredient = {
  entallsform: string;
  flertallsform: string;
  antall: number;
  enhet?: number;
};
const ingredients = {
  main: [
    //Grønnsakshylla
    {
      entallsform: "rødløk",
      flertallsform: "rødløk",
      antall: 1 / 12,
    },
    { entallsform: "paprika", flertallsform: "paprikaer", antall: 1 / 12 },
    {
      entallsform: "isbergsalathode",
      flertallsform: "isbergsalathoder",
      antall: 1 / 15,
    },
    { entallsform: "tomat", flertallsform: "tomater", antall: 2 / 5 },
    { entallsform: "agurk", flertallsform: "agurker", antall: 1 / 12 },
    {
      entallsform: "pakke druer",
      flertallsform: "pakker druer",
      antall: 1 / 25,
    },

    //Tacohylla
    { entallsform: "tacolefse", flertallsform: "tacolefser", antall: 2.5 },
    {
      entallsform: "pakke tacokrydder",
      flertallsform: "pakke tacokrydder",
      antall: 1 / 4,
    },
    {
      entallsform: "pakke tortillachips",
      flertallsform: "pakker tortillachips",
      antall: 1 / 15,
    },
    {
      entallsform: "glass chunky salsa",
      flertallsform: "glass chunky salsa",
      antall: 1 / 12,
    },
    {
      entallsform: "glass jalapeños",
      flertallsform: "glass jalapeños",
      antall: 1 / 25,
    },

    //Kjøtt
    {
      entallsform: "pakke kjøttdeig",
      flertallsform: "pakker kjøttdeig",
      antall: 1 / 4,
    },
    {
      entallsform: "gram bacon",
      flertallsform: "gram bacon",
      antall: 1 / 8,
      enhet: 400,
    },

    //Og så videre
    {
      entallsform: "boks kidneybønner",
      flertallsform: "bokser kidneybønner",
      antall: (150 / 400) * (2 / 3),
    },
    { entallsform: "gram mais", flertallsform: "gram mais", antall: 25 },
    {
      entallsform: "boks rømme",
      flertallsform: "bokser rømme",
      antall: 1 / 10,
    },
    {
      entallsform: "gram hummus",
      flertallsform: "gram hummus",
      antall: 1 / 25,
      enhet: 250,
    },
    {
      entallsform: "pakker revet ost",
      flertallsform: "pakker revet ost",
      antall: 1 / 10,
    },
    {
      entallsform: "pakke sprøstekt løk",
      flertallsform: "pakker sprøstekt løk",
      antall: 1 / 25,
    },
    {
      entallsform: "pakke cashewnøtter",
      flertallsform: "pakker cashewnøtter",
      antall: 1 / 12,
    },
    {
      entallsform: "boks ananas",
      flertallsform: "bokser ananas",
      antall: 1 / 25,
    },
  ],
  guacamole: [
    { entallsform: "avokado", flertallsform: "avokadoer", antall: 1 / 2 },
    {
      entallsform: "fedd hvitløk",
      flertallsform: "fedd hvitløk",
      antall: 1 / 2,
    },
    { entallsform: "dl løk", flertallsform: "dl løk", antall: 1 / 4 },
    { entallsform: "ss chili", flertallsform: "ss chili", antall: 1 / 2 },
    {
      entallsform: "ss hakket koriander",
      flertallsform: "ss hakket koriander",
      antall: 1 / 2,
    },
    { entallsform: "ss limesaft", flertallsform: "ss limesaft", antall: 3 / 4 },
    { entallsform: "ts salt", flertallsform: "ts salt", antall: 1 / 4 },
    { entallsform: "ts pepper", flertallsform: "ts pepper", antall: 1 / 4 },
  ],
};

export default ingredients;

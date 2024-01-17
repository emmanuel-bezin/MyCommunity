import theme from "/src/theme";

const posts = [
  {
    pseudo: "@JohnDoe",
    id: "38493729",
    category: "Tips",
    likesNbr: 274293,
    color: `${theme.yellow}`,
    comments: [
      {
        comment: "Looks super yummy !",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "I'll try at home !",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Can you add salt in the guanciale ?",
        pseudo: "@OscarTarby",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    date: "04/11/2024",
    time: "11h05",
    title: "How to make good carbonara pasta",
    message:
      "To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops. To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops. To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops. To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops. To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops. To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops.",
  },
  {
    pseudo: "@RyanBob",
    id: "38499029",
    likesNbr: 34,
    date: "05/10/2024",
    time: "17h12",
    color: `${theme.orange}`,
    comments: [
      {
        comment: "I'll bring chips, count me in.",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Great, can I come ?",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    category: "Events",
    title: "The best party of the 21st century.",
    message:
      "Hey everyone ! You are all invited to the best party of the 21st century. If you want to join, just dree casually and bring some snacks. Here is the address : 24953 non-existent rd.",
  },
  {
    pseudo: "@JohnDoe",
    category: "Tips",
    likesNbr: 23,
    id: "38480229",
    date: "04/11/2024",
    color: `${theme.yellow}`,
    time: "11h05",
    comments: [
      {
        comment: "Looks super yummy !",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "I'll try at home !",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Can you add salt in the guanciale ?",
        pseudo: "@OscarTarby",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    title: "How to make good carbonara pasta",
    message:
      "To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops.",
  },
  {
    pseudo: "@RyanBob",
    likesNbr: 34,
    id: "30493729",
    date: "05/10/2024",
    comments: [
      {
        comment: "I'll bring chips, count me in.",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Great, can I come ?",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    time: "17h12",
    color: `${theme.orange}`,
    category: "Events",
    title: "The best party of the 21st century.",
    message:
      "Hey everyone ! You are all invited to the best party of the 21st century. If you want to join, just dree casually and bring some snacks. Here is the address : 24953 non-existent rd.",
  },
  {
    pseudo: "@JohnDoe",
    category: "Tips",
    likesNbr: 23,
    id: "38302729",
    date: "04/11/2024",
    color: `${theme.yellow}`,
    time: "11h05",
    comments: [
      {
        comment: "Looks super yummy !",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "I'll try at home !",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Can you add salt in the guanciale ?",
        pseudo: "@OscarTarby",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    title: "How to make good carbonara pasta",
    message:
      "To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops.",
  },
  {
    pseudo: "@RyanBob",
    likesNbr: 34,
    date: "05/10/2024",
    time: "17h12",
    color: `${theme.orange}`,
    id: "22393729",
    comments: [
      {
        comment: "I'll bring chips, count me in.",
        pseudo: "@PaulScholes",
        date: "05/10/2024",
        time: "11h24",
      },
      {
        comment: "Great, can I come ?",
        pseudo: "@ArthurHendrick",
        date: "05/10/2024",
        time: "11h24",
      },
    ],
    category: "Events",
    title: "The best party of the 21st century.",
    message:
      "Hey everyone ! You are all invited to the best party of the 21st century. If you want to join, just dree casually and bring some snacks. Here is the address : 24953 non-existent rd.",
  },
  {
    pseudo: "@JohnDoe",
    category: "Tips",
    id: "9973729",
    likesNbr: 23,
    color: `${theme.yellow}`,
    comments: [],
    date: "04/11/2024",
    hour: "11h05",
    title: "How to make good carbonara pasta",
    message:
      "To make good carbonara pasta, you must not use pancetta, nor bacon, but guanciale. You can find some in special italian shops.",
  },
  {
    pseudo: "@RyanBob",
    likesNbr: 34,
    date: "05/10/2024",
    id: "39043729",
    time: "17h12",
    color: `${theme.orange}`,
    comments: [],
    category: "Events",
    title: "The best party of the 21st century.",
    message:
      "Hey everyone ! You are all invited to the best party of the 21st century. If you want to join, just dree casually and bring some snacks. Here is the address : 24953 non-existent rd.",
  },
];

export default posts;

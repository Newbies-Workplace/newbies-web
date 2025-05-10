import dayjs from "dayjs";

interface Badge {
  tooltip: string;
  img: string;
}

export interface TeamMember {
  name: string;
  level: number;
  img: string;
  stats: {
    hp: number;
    mana: number;
  };
  badges: Badge[];
}

const badges = {
  jeteoHackathon: {
    tooltip: "Hackathon 2k23",
    img: "content/images/badge/jeteo-hackathon.svg",
  },
  practices: {
    tooltip: "Praktykant",
    img: "content/images/badge/practices.svg",
  },
  funny: {
    tooltip: "Konfident",
    img: "content/images/badge/funny.svg",
  },
  retromachina: {
    tooltip: "Retromachina enjoyer",
    img: "content/images/badge/retromachina.svg",
  },
  designer: {
    tooltip: "Designer",
    img: "content/images/badge/designer.svg",
  },
  leaker: {
    tooltip: "Leaker",
    img: "content/images/badge/leaker.svg",
  },
  prodBreaker: {
    tooltip: "Prod breaker",
    img: "content/images/badge/prod-breaker.svg",
  },
  unityBeliever: {
    tooltip: "Unity believer",
    img: "content/images/badge/unity-believer.svg",
  },
};

const calculateLevel = (birthDate: string): number => {
  return dayjs().diff(dayjs(birthDate), "y").valueOf();
};

export const teamMembers: TeamMember[] = [
  {
    name: "Wiktor",
    level: calculateLevel("2000-09-01"),
    img: "image/wiktor.png",
    stats: {
      hp: 20,
      mana: 70,
    },
    badges: [
      badges.jeteoHackathon,
      badges.practices,
      badges.retromachina,
      badges.prodBreaker,
    ],
  },
  {
    name: "Kamil",
    level: calculateLevel("2000-06-01"),
    img: "image/kamil.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [badges.jeteoHackathon, badges.practices],
  },
  {
    name: "Oskar",
    level: calculateLevel("2004-08-01"),
    img: "image/oskar.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [badges.jeteoHackathon, badges.practices, badges.unityBeliever],
  },
  {
    name: "Rafał",
    level: calculateLevel("2004-08-01"),
    img: "image/rafal.png",
    stats: {
      hp: 21,
      mana: 12,
    },
    badges: [badges.jeteoHackathon, badges.practices, badges.leaker],
  },
  {
    name: "Damian",
    level: calculateLevel("2003-04-01"),
    img: "image/damian.png",
    stats: {
      hp: 15,
      mana: 100,
    },
    badges: [badges.designer],
  },
  {
    name: "Piotr",
    level: calculateLevel("2004-01-01"),
    img: "image/piotr.png",
    stats: {
      hp: 69,
      mana: 69,
    },
    badges: [
      badges.jeteoHackathon,
      badges.practices,
      badges.retromachina,
      badges.funny,
    ],
  },
];

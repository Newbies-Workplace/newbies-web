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
    tooltip: "Hackathon 2k21",
    img: "content/images/badge/jeteo-hackathon.svg",
  },
  practices: {
    tooltip: "Praktyki",
    img: "content/images/badge/practices.svg",
  },
};

export const teamMembers: TeamMember[] = [
  {
    name: "Wiktor",
    level: 23,
    img: "image/placeholder.png",
    stats: {
      hp: 20,
      mana: 70,
    },
    badges: [badges.jeteoHackathon, badges.practices],
  },
  {
    name: "Kamil",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [badges.jeteoHackathon],
  },
  {
    name: "Oskar",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [],
  },
  {
    name: "Rafał",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [],
  },
  {
    name: "Ty",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [],
  },
  {
    name: "Ja",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    badges: [],
  },
];

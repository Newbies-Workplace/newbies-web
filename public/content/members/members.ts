interface Achievement {
  tooltip: string;
  img: string;
}

interface Technology {
  name: string;
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
  technologies: Technology[];
  achievements: Achievement[];
}

const technologies: { [key: string]: Technology } = {
  react: {
    name: "React",
    img: "image/placeholder.png",
  },
};
const achievements: { [key: string]: Achievement } = {
  hackathon2021: {
    tooltip: "Hackathon 2k21",
    img: "image/placeholder.png",
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
    technologies: [technologies.react],
    achievements: [achievements.hackathon2021],
  },
  {
    name: "Kamil",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    technologies: [technologies.react],
    achievements: [achievements.hackathon2021],
  },
  {
    name: "Oskar",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    technologies: [],
    achievements: [],
  },
  {
    name: "Rafał",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    technologies: [],
    achievements: [],
  },
  {
    name: "Ty",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    technologies: [],
    achievements: [],
  },
  {
    name: "Ja",
    level: 24,
    img: "image/placeholder.png",
    stats: {
      hp: 35,
      mana: 20,
    },
    technologies: [],
    achievements: [],
  },
];

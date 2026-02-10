export interface Prompt {
  id: number;
  question: string;
  corners: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const prompts: Prompt[] = [
  {
    id: 1,
    question:
      "If you suddenly had a completely free day with no responsibilities, would you most likely…",
    corners: {
      A: "Spend it relaxing alone",
      B: "Hang out with friends or family",
      C: "Go out and explore (city, nature, events)",
      D: "Work on a personal project or hobby",
    },
  },
  {
    id: 2,
    question:
      "If your teacher let you design the perfect class for one day, would you choose to…",
    corners: {
      A: "Do hands-on activities or experiments",
      B: "Have a discussion/debate on interesting topics",
      C: "Work independently on something you care about",
      D: "Go on a field trip or do something outside the classroom",
    },
  },
  {
    id: 3,
    question:
      "If you were put in charge of improving your school, your first priority would be to…",
    corners: {
      A: "Improve mental health and wellbeing supports",
      B: "Improve school facilities (cafeteria, gym, lockers, tech)",
      C: "Improve teaching and learning (less homework, more projects, etc.)",
      D: "Improve clubs, teams, and student events",
    },
  },
  {
    id: 4,
    question:
      "If you could instantly become really good at one type of skill, you would choose…",
    corners: {
      A: "Creative skills (art, music, writing, design)",
      B: "Physical skills (sports, dance, fitness)",
      C: "Academic/technical skills (math, science, coding, languages)",
      D: "Social/leadership skills (public speaking, leading groups, networking)",
    },
  },
  {
    id: 5,
    question:
      "If you were planning a fun weekend with no school work, you would mainly…",
    corners: {
      A: "Stay in and watch shows, play games, or read",
      B: "Go out to social events or see friends",
      C: "Do something active (sports, walking, gym, dance)",
      D: "Work on a goal or project that matters to you",
    },
  },
  {
    id: 6,
    question:
      "If you could choose how group projects are usually done, you would prefer…",
    corners: {
      A: "Everyone has assigned roles from the start",
      B: "People choose roles based on what they're good at",
      C: "The group plans together and shares all tasks",
      D: "People work mostly alone and then combine their parts",
    },
  },
  {
    id: 7,
    question:
      "If you were joining a brand-new club or team, what would matter most to you at first?",
    corners: {
      A: "Feeling welcomed and included right away",
      B: "Having clear goals and expectations",
      C: "Having fun and not feeling too much pressure",
      D: "Having chances to improve and challenge yourself",
    },
  },
  {
    id: 8,
    question:
      "If you could change how breaks/lunch work at school, you would want…",
    corners: {
      A: "Longer breaks but fewer of them",
      B: "More frequent short breaks",
      C: "The option to go outside more often",
      D: "More spaces/activities indoors to relax or socialize",
    },
  },
  {
    id: 9,
    question:
      "If you had extra money saved up, your first choice would be to…",
    corners: {
      A: "Spend it on experiences (trips, concerts, events)",
      B: "Spend it on things you want (clothes, games, tech)",
      C: "Save it for the future",
      D: "Use some of it to help others or a cause you care about",
    },
  },
  {
    id: 10,
    question:
      "If you could choose the type of challenge you face in life (knowing you'd grow from it), you'd choose…",
    corners: {
      A: "Academic/intellectual challenge (hard class, big project)",
      B: "Social challenge (meeting new people, public speaking)",
      C: "Physical challenge (sport, race, fitness goal)",
      D: "Creative challenge (performance, artwork, big creative project)",
    },
  },
];

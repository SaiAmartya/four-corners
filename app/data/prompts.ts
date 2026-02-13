export interface Prompt {
  id: string;
  prompt: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const prompts: Prompt[] = [
  {
    id: "P01",
    prompt:
      "There are three trolleys about to run over the players of these football clubs — you can only save one. Which do you save?",
    options: {
      A: "Arsenal",
      B: "Real Madrid",
      C: "Barcelona",
      D: "Liverpool",
    },
  },
  {
    id: "P02",
    prompt:
      "Three trolleys are about to run over all backup files of these games, deleting three of these four games. You can only save one. Which do you save?",
    options: {
      A: "Fortnite",
      B: "Minecraft",
      C: "Roblox",
      D: "Call of Duty",
    },
  },
  {
    id: "P03",
    prompt:
      "Alien technology is erasing all memory of three of these four sports. You can only save one. Which do you save?",
    options: {
      A: "Soccer",
      B: "Volleyball",
      C: "Tennis",
      D: "Basketball",
    },
  },
  {
    id: "P04",
    prompt:
      "You have four tickets, but three trolleys are about to run over three of them. You can only save one. Which do you save?",
    options: {
      A: "Paris",
      B: "Tokyo",
      C: "New York City",
      D: "Dubai",
    },
  },
  {
    id: "P05",
    prompt:
      "Three of these four fast food chains are about to run out of business. You can only save one. Which do you save?",
    options: {
      A: "Chick-fil-A",
      B: "McDonald's",
      C: "KFC",
      D: "Tim Hortons",
    },
  },
  {
    id: "P06",
    prompt:
      "Three of these four drinks are about to be removed from existence. You can only save one. Which do you save?",
    options: {
      A: "Coke",
      B: "Iced coffee",
      C: "Bubble tea",
      D: "Water",
    },
  },
  {
    id: "P07",
    prompt:
      "Three of these four genres are being removed from existence. You can only save one. Which do you save?",
    options: {
      A: "Rap",
      B: "Hip Hop",
      C: "Pop",
      D: "Classical (DO NOT SAVE THIS ONE)",
    },
  },
  {
    id: "P08",
    prompt:
      "Three trolleys are about to run over three parts of the big school event. You can only save one. Which do you save?",
    options: {
      A: "Music/DJ",
      B: "Food table",
      C: "Games/activities",
      D: "Photo booth",
    },
  },
  {
    id: "P09",
    prompt:
      "You have to sacrifice three of these before finals week. You can only save one. Which do you save?",
    options: {
      A: "Sleep",
      B: "Your notes",
      C: "Your calculator",
      D: "Your Wi-Fi",
    },
  },
  {
    id: "P10",
    prompt:
      "Idk why but three of these are being sacrificed and you can only save one to be your activity during free time. Which do you save?",
    options: {
      A: "Gym / sports",
      B: "Catch up on homework",
      C: "Hang with friends (eg: videogames)",
      D: "Nap + recharge",
    },
  },
];

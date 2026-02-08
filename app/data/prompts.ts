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
      "If you suddenly had a completely free weekend with no homework or obligations, would you...",
    corners: {
      A: "Binge-watch an entire show/series you've been meaning to see",
      B: "Go out and do something active (hiking, sports, adventure)",
      C: "Work on a personal project or creative hobby",
      D: "Hang out with friends doing absolutely nothing productive",
    },
  },
  {
    id: 2,
    question:
      "If you could restart high school knowing everything you know now, would you...",
    corners: {
      A: "Take completely different courses and explore new interests",
      B: "Join different clubs and friend groups",
      C: "Change nothing \u2014 you like where you ended up",
      D: "Focus way less on grades and way more on experiences",
    },
  },
  {
    id: 3,
    question:
      "If you had to give a 20-minute presentation tomorrow, which topic would you choose?",
    corners: {
      A: "Something you're genuinely passionate about (even if niche)",
      B: "A controversial topic that would spark debate",
      C: "Something entertaining that would make people laugh",
      D: "A practical \u201Clife hack\u201D topic everyone would find useful",
    },
  },
  {
    id: 4,
    question:
      "If you could design your ideal learning environment for the rest of high school, would you pick...",
    corners: {
      A: "Fully online/self-paced (learn anywhere, anytime)",
      B: "Traditional classroom but with way more hands-on projects",
      C: "Apprenticeship-style learning with real professionals",
      D: "Small discussion-based seminars (10\u201315 students max)",
    },
  },
  {
    id: 5,
    question:
      "If you won $5,000 but had to spend it within one week, would you...",
    corners: {
      A: "Upgrade all your tech (laptop, phone, setup)",
      B: "Take a spontaneous trip somewhere you've never been",
      C: "Invest in a business idea or personal project",
      D: "Throw an absolutely legendary party/experience for friends",
    },
  },
  {
    id: 6,
    question:
      "If you could master one competitive activity/game instantly, which would you choose?",
    corners: {
      A: "A popular esport or video game (League, Valorant, etc.)",
      B: "A traditional sport (basketball, soccer, etc.)",
      C: "Chess, poker, or another strategy game",
      D: "A performing art (dance, music, debate)",
    },
  },
  {
    id: 7,
    question:
      "If you had to spend an entire month with only one form of entertainment, what would you keep?",
    corners: {
      A: "Music and podcasts only",
      B: "Video games only",
      C: "Books and articles only",
      D: "Social media and messaging only",
    },
  },
  {
    id: 8,
    question:
      "If you could guarantee one skill that would impress people at parties/social events, would you choose...",
    corners: {
      A: "Being incredibly funny and quick-witted",
      B: "Telling amazing stories from personal experiences",
      C: "Having deep knowledge about interesting topics",
      D: "Being able to connect with anyone and make them comfortable",
    },
  },
  {
    id: 9,
    question:
      "If you had to choose your post-graduation path right now, which appeals most?",
    corners: {
      A: "University for 4 years (traditional route, broaden options)",
      B: "Gap year traveling/working, then figure it out",
      C: "Jump straight into a career/trade/startup",
      D: "Online learning/certificates while working part-time",
    },
  },
  {
    id: 10,
    question:
      "If you could change one thing about how school/society measures success, what would it be?",
    corners: {
      A: "Focus on creativity and original thinking over memorization",
      B: "Value collaboration and teamwork over individual competition",
      C: "Measure growth and improvement rather than absolute performance",
      D: "Recognize different types of intelligence equally (not just academic)",
    },
  },
];

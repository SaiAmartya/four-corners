export interface Prompt {
  id: string;
  prompt: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  images: {
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
      "There are three trolleys about to run over the players of these football clubs. You can only save one. Which do you save?",
    options: {
      A: "Arsenal",
      B: "Real Madrid",
      C: "Barcelona",
      D: "Liverpool",
    },
    images: {
      A: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/330px-Arsenal_FC.svg.png",
      B: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/330px-Real_Madrid_CF.svg.png",
      C: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/330px-FC_Barcelona_%28crest%29.svg.png",
      D: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/330px-Liverpool_FC.svg.png",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/500px-FortniteLogo.svg.png",
      B: "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Roblox_%282025%29_%28App_Icon%29.svg/500px-Roblox_%282025%29_%28App_Icon%29.svg.png",
      D: "https://upload.wikimedia.org/wikipedia/en/f/f6/MWIII_Cover_Art.png",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/330px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Brasil_vence_a_Fran%C3%A7a_no_v%C3%B4lei_masculino_1037987-15.08.2016_ffz-6369.jpg/330px-Brasil_vence_a_Fran%C3%A7a_no_v%C3%B4lei_masculino_1037987-15.08.2016_ffz-6369.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg/330px-2013_Australian_Open_-_Guillaume_Rufin.jpg",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Steph_Curry_%2851915116957%29.jpg/330px-Steph_Curry_%2851915116957%29.jpg",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/330px-Skyscrapers_of_Shinjuku_2009_January.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
      D: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Burj_Khalifa_2021.jpg/330px-Burj_Khalifa_2021.jpg",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chick-fil-A.jpg/330px-Chick-fil-A.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/330px-McDonald%27s_Golden_Arches.svg.png",
      C: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/KFC_logo-image.svg/330px-KFC_logo-image.svg.png",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tim_Hortons_%2830341105726%29.jpg/330px-Tim_Hortons_%2830341105726%29.jpg",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/330px-Coca_Cola_Flasche_-_Original_Taste.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Affogato_al_Caffe.jpg/330px-Affogato_al_Caffe.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bubble_Tea.png/330px-Bubble_Tea.png",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Multi-use_water_bottle.JPG/330px-Multi-use_water_bottle.JPG",
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
      D: "Classical",
    },
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/50_cent_en_concierto.jpg/330px-50_cent_en_concierto.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Turntables_and_mixer.jpg/500px-Turntables_and_mixer.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rolling_stones_-_11_luglio_2006_-_san_siro.jpg/500px-Rolling_stones_-_11_luglio_2006_-_san_siro.jpg",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/330px-BJO_Konzert_Phil_MR_098.jpg",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pete_Rock_%40_The_Brookyln_Bowl_in_2016.jpg/330px-Pete_Rock_%40_The_Brookyln_Bowl_in_2016.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Swedish_buffet-Sm%C3%B6rg%C3%A5sbord-01.jpg/330px-Swedish_buffet-Sm%C3%B6rg%C3%A5sbord-01.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Playing_mafia_game.jpg/330px-Playing_mafia_game.jpg",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Photobooth_in_Bicester_2001.JPG/330px-Photobooth_in_Bicester_2001.JPG",
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
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hammock_nap_on_patio.jpg/330px-Hammock_nap_on_patio.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Truckee_Meadows_Community_College_%2810075995964%29.jpg/330px-Truckee_Meadows_Community_College_%2810075995964%29.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg/330px-Casio_calculator_JS-20WK_in_201901_002.jpg",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/330px-WiFi_Logo.svg.png",
    },
  },
  {
    id: "P10",
    prompt:
      "Three of these free-time activities are being sacrificed. You can only save one. Which do you save?",
    options: {
      A: "Gym / sports",
      B: "Catch up on homework",
      C: "Hang with friends (eg: videogames)",
      D: "Nap + recharge",
    },
    images: {
      A: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Small_group_fitness_sessions_bundall.jpg/330px-Small_group_fitness_sessions_bundall.jpg",
      B: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Homework_-_vector_maths.jpg/330px-Homework_-_vector_maths.jpg",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png/330px-Black_and_white_Playstation_5_base_edition_with_controller.png",
      D: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hammock_nap_on_patio.jpg/330px-Hammock_nap_on_patio.jpg",
    },
  },
];

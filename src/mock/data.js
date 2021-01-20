import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hiba Tamimi | Front End Developer', // e.g: 'Name | Developer'
  lang: 'React.js', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Hiba',
  subtitle:"I'am a Front End Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'download.png',
  paragraphOne: 'I am 24 Front End developer interested in code and design ,  graduate from RBK(Boot camp) with a high level of commitment , organizing and communication skills  ',
  paragraphTwo: 'With experiens in Html , Css , JavaScript and React ',
  paragraphThree: 'Always and always hard work with creativity is the secret of success',
  resume: 'https://drive.google.com/drive/folders/1UI_lO6Ln_WKMrDKgJya9W4DD9TC657e0?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'profile.PNG',
    title: 'LiLY',
    info: 'Event web site , to help people find all the events in their places and book ticket to join it. ',
    info2: ' Build with MERN technology (Mongodb , Express , React and Node.js',
    url: '',
    repo: 'https://github.com/lily-event-planner/lily', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'SHARKONA',
     info: 'Event planing website , to help the couples in the planning and organizing process for their weeding day',
    info2: ' Build with MERN technology (Mongodb , Express , React and Node.js',
    url: '',
    repo: 'https://github.com/greenfield-sharkona/sharkona_v2', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [


    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hiba-tamimi-b6511b1b1',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hibtmimi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

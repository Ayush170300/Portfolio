import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nn.jpeg',
    title: 'STRENGTH',
    info: "She’s battling things, her smile will never tell you about. A women is unyielding and fierce as a panther. She rules the track. She cuts through in the dark with silence, she knows that hope is always what she has to believe in. she knows her worth, She knows she is strong enough to put herself in the race of the society to prove her worth. Her eyes glare with flame they yell that she is worth the best of it.",
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ne.jpeg',
    title: 'INNOCENCE',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpeg',
    title: 'PERCEPTION',
    info: 'Let the eyes do the talking.“Faith is the birth that feels the light when the dawn is too dark quotes Rabindranath Tagore”.',
    info2: "Let her fly to her dreams, cut her chains loose, let her dream her heart out. A Society can never be free without women’s liberation.Let her fly because she is born to lift everyone up with her.",
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: 'https://instagram.com/tejaswini_vantigodi/',
    // },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:tejaswinivantigodi@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tejaswini-vantigodi-b446411b5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tejaswinivantigodi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Joseph Lee',
  subtitle: "I'm a software developer and video game connoisseur 👾",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot-joe.png',
  paragraphOne:
    'My pursuit of software development started in Quality Assurance. With over five years of professional QA testing at venture-backed startups to large corporations, I worked closely across all disciplines to deliver high quality software across multiple industries.',
  paragraphTwo:
    'As I spent more and more time working with engineers and learning from them, I decided to take a leap forward into my career as a software engineer. Over the last couple of months, I quickly picked up several technologies and built several projects. While each project is built on unique tech stacks, I immensely enjoy working with React, Ruby on Rails, PostgreSQL, and MongoDB.',
  paragraphThree:
    "I am always looking to improve my code and learn new technologies. Currently, I'm volunteering as a software engineer for a great social cause - check out my projects below!",
  resume: 'test', // if no resume, the button will not show up
  // 'https://docs.google.com/document/d/11Ng_LIi43YJKF4XAgreNEDjHV3JPsLrOdFnAwaIVoVI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'prosparity_project.png',
    title: 'The Prosp(a)rity Project',
    info:
      'The Prosp(a)rity Project is a not for profit organization that empowers Black women, notably through economic initiatives.',
    info2:
      'We are currently building most of the frontend using React Hooks with a Firebase backend setup.',
    url: 'https://theprosparityproject.org/',
    // repo: 'https://github.com/lee-joseph-i/maru', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'maru-portfolio.png',
    title: 'Maru',
    info:
      'Maru is an Asana-inspired project management web application. Users can create projects with interactable kanban boards to organize their work.',
    info2:
      'This is a solo project built from scratch using React, Redux, PostgreSQL, Ruby on Rails, Webpack, and more.',
    url: 'https://maru-sana.herokuapp.com/',
    repo: 'https://github.com/lee-joseph-i/maru', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'space-ball-screenshot.png',
    title: 'Space Ball',
    info:
      'Built on HTML5 canvas, Space Ball combines the Matter.js physics engine with Socket.io connectivity to simulate a multiplayer game.',
    info2: 'This project was created by a team of four super-cool engineers.',
    url: 'https://space-ball.herokuapp.com/#/',
    repo: 'https://github.com/Matthew-SA/spaceJam', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gotta-type-em-all_screenshot.png',
    title: 'Gotta-Type-em-All!',
    info:
      'A Pokemon-themed typing game built from scratch with Canvas HTML5, programmed with vanilla JavaScript, and styled with CSS3. To demonstrate mastery of JavaScript and front-end development, no other major technologies or libraries were used.',
    info2: '',
    url: 'https://lee-joseph-i.github.io/gotta-type-em-all/',
    repo: 'https://github.com/lee-joseph-i/gotta-type-em-all', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'View Resume',
  email: 'test',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'envelope',
      url: 'mailto:josephinlee91@gmail.com',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josephinlee/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lee-joseph-i',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

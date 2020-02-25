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
    'Through eight years of software Quality Assurance, I have refined test plans, mastered manual testing, and coordinated release schedules with all disciplines across the production team. Over time, I realized that understanding code became a pivotal step in advancing my skills.',
  paragraphTwo:
    'I believed that knowing how to analyze error logs, understanding DOM manipulation, and reading source code would tremendously improve my reports and reduce test time. This is what led me to start and ultimately expand my skills as a software developer.',
  paragraphThree:
    'Over the last few months, I quickly picked up several technologies and built three projects, each with unique tech stacks. I am proud to have designed a kanban board on my full stack project that feels very familiar to my own work experiences using Asana and JIRA. Currently, I am working with a small group of engineers in creating an original multiplayer game - take a look below!',
  resume:
    'https://docs.google.com/document/d/11Ng_LIi43YJKF4XAgreNEDjHV3JPsLrOdFnAwaIVoVI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'dietsana-screenshot.png',
    title: 'Dietsana',
    info:
      'Dietsana is a pixel-perfect rendition of Asana, a project management web application designed for teams. Users can create projects and associated tasks with descriptions, assignments, and due dates to organize their work. Dietsana provides both a List and Kanban Board to enhance user experience and accessibility.',
    info2: '',
    url: 'https://dietsana.herokuapp.com/',
    repo: 'https://github.com/lee-joseph-i/dietsana', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'space-ball-screenshot.png',
    title: 'Space Ball',
    info:
      'Built on HTML5 canvas, Space Ball combines the Matter.js physics engine with Socket.io connectivity to simulate a multiplayer game. This project was created by a team of four engineers.',
    info2: '',
    url: 'http://space-ball.herokuapp.com/',
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
  email:
    'https://docs.google.com/document/d/11Ng_LIi43YJKF4XAgreNEDjHV3JPsLrOdFnAwaIVoVI/edit?usp=sharing',
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

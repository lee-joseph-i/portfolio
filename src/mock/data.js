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
    'My pursuit of software development started in Quality Assurance. Through eight years of professional QA, I have refined test plans, mastered manual testing, and coordinated release schedules with all disciplines across the production team.',
  paragraphTwo:
    'Though I was recognized for my abilities as a tester, I realized that being able to read and write code changes was a pivotal step in advancing my skills, understanding intricacies of our product, and pushing stable, quality releases.',
  paragraphThree:
    'Over the last few months, I quickly picked up several technologies and built three projects. While each project is built on unique tech stacks, I have primarily enjoyed and focused on mastery of React, Redux, Ruby on Rails, PostgreSQL, and MongoDB - take a look at my projects below!',
  resume: 'test', // if no resume, the button will not show up
  // 'https://docs.google.com/document/d/11Ng_LIi43YJKF4XAgreNEDjHV3JPsLrOdFnAwaIVoVI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'dietsana-screenshot.png',
    title: 'Dietsana',
    info:
      'Dietsana is a pixel-perfect rendition of Asana, a project management web application designed for teams. Users can create projects and associated tasks with descriptions, assignments, and due dates to organize their work.',
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

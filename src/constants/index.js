const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Modern Development",
    desc: "Crafting interfaces with up-to-date, evolving technologies.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Ensuring smooth updates and easy collaboration.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Delivering work efficiently and meeting deadlines.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Gerrard consistently brought clarity and strong problem-solving skills to our team. His attention to detail and ability to refine the front-end experience made a noticeable impact on the quality of our product.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "September 2022 - Present",
    responsibilities: [
      "Built and refined modern user interfaces with a focus on clarity and usability.",
      "Collaborated with designers and stakeholders to translate concepts into smooth digital experiences.",
      "Improved site performance through efficient architectures and best UI/UX practices.",
    ],
  },
  {
    review:
      "Gerrard played a key role in strengthening our MERN-based platforms. His ability to handle both frontend and backend tasks made development faster and more reliable.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack MERN Developer",
    date: "January 2024 - Present",
    responsibilities: [
      "Developed and maintained full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "Built reusable components and optimized frontend performance for better user experience.",
      "Designed and implemented RESTful APIs and integrated them with React-based clients.",
      "Improved database queries and backend logic for faster response times and scalability.",
      "Collaborated with teams to deploy and monitor applications using modern DevOps tools.",
    ],
  },
  {
    review:
      "Gerrard delivered solid, efficient mobile solutions that elevated our app’s quality. His work consistently improved performance and helped us ship features faster.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Mobile Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Developed cross-platform mobile apps using React Native with clean and maintainable architecture.",
      "Enhanced app performance through optimization, debugging, and improved state management.",
      "Integrated backend APIs and ensured smooth data flow across key app features.",
      "Collaborated with designers and product teams to deliver intuitive user experiences.",
      "Implemented testing and QA processes to boost app stability and reliability.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Aje Dourado",
    mentions: "@ajedourado",
    review:
      "Working with Gerrard on RealNFake.co was an exceptional experience. He delivered a clean, fast, and reliable platform that perfectly supports our legit-check workflow. The attention to detail and consistency truly set his work apart.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nararya Nanda Raditya",
    mentions: "@nararyananda",
    review:
      "Collaborating with Gerrard as a fullstack partner has always been smooth and productive. His ability to turn complex ideas into functional, user-friendly features made our development process incredibly efficient.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Basudewa Suputra",
    mentions: "@basudewas",
    review:
      "As a frontend collaborator, I’ve seen firsthand how Gerrard approaches problems with clarity and precision. His commitment to quality and clean architecture consistently elevates the final product. Truly a dependable teammate.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Arya",
    mentions: "@aryaprojects",
    review:
      "Gerrard built a professional and easy-to-manage website for our foundation. He understood our needs quickly and delivered a design that feels modern, trustworthy, and impactful. Highly recommended.",
    imgPath: "/images/client4.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/gerrard.stdio/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/gerry-geraldy-latupeirissa/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

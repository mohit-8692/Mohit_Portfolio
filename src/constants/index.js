import {
  backend,
  c,
  cppImg,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  cpp,
  mobile,
  mongodb,
  nodejs,
  python,
  reactjs,
  mySQL,
  tailwind,
  // threejs,
  weatherImg,
  weConnect,
  web,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "C++ Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "PYTHON",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "mySQL",
      icon: mySQL,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WeConnect",
      description:
      "A university department website with authentication using MongoDB, Nodejs, and Authentication.The platform is a centralized hub for departmental updates, including job opportunities, hackathons.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },   
      ],
      image: weConnect,
      source_code_link: "https://github.com/mohit-8692",
    },
    {
      name: "Weather App",
      description:
        "A weather App that provides information on the weather using Vite, MapBox and weather API, javascript It will provide the location of your city on the map. All important info will be provided by this app like sea level, and wind speed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: weatherImg,
      source_code_link: "https://github.com/mohit-8692",
    },
    {
      name: "Grammar and syntax checker",
      description:
      "The Grammer and Syntax checker is a console application to help users efficiently check whether the sentence is correct or not if there is any error this shows a specific error at run time it was a little bit tough in C++.",
      
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: cppImg,
      source_code_link: "https://github.com/mohit-8692",
    },
  ];
  
  export { projects, services, technologies, testimonials };
  
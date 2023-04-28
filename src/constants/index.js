import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  python, 
  bootstrap, 
  aws, 
  sql, 
  java, 
  linux, 
  code,
  rb1,
  rb2,
  rb3,
  // certificate
  certificate,
  linkedin,
  maps,
  microsoft,
  hackerank,
  harvard,
  achievement,
  // company
  dxc,
  internshala,
  // proeject
  hotstar_clone,
  mandalashop,
  portfolio,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "connect",
    title: "Connect",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "DXC Technologies",
    icon: dxc,
    iconBg: "#383E56",
    date: "Upcoming",
    points: [
      "Offer In Hand",,
    ],
  },
  {
    title: "Campus Ambassador Intern: WFH",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "March 2020 - May 2020",
    points: [
      "Created Awareness about Internshala throughout the campus.",
      "Promoted Internshala training and internships among the students.",
      "Encouraged students to skill themselves via internshala.",
    ],
  },
];

const extracurricular = [
  {
    title: "6K+ Connections on LinkedIn",
    type: "Achievements",
    icon: linkedin,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Credential ID: rishabhbaghel",
    ],
    credential: "https://www.linkedin.com/in/rishabhbaghel/",
  },
  {
    title: "Problem Solving (Intermediate)- HackerRank",
    type: "Certification",
    icon: hackerank,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "Credential ID: 1c7f58e3cef9",
    ],
    credential: "https://www.hackerrank.com/certificates/1c7f58e3cef9",
  },
  {
    title: "Intro to Computer Science- Harvard University",
    type: "Certification",
    icon: harvard,
    iconBg: "#383E56",
    date: "Dec 2021",
    points: [
      "Credential ID: 9f5bdcb3-550f-4482-8c25-a0ef16cdc009",
    ],
    credential: "https://certificates.cs50.io/9f5bdcb3-550f-4482-8c25-a0ef16cdc009.pdf?size=letter",
  },
  {
    title: "Programming for Everybody- University of Michigan",
    type: "Certification",
    icon: certificate,
    iconBg: "#383E56",
    date: "Oct 2021",
    points: [
      "Credential ID: A37CFW9F8QHJ",
    ],
    credential: "https://www.coursera.org/account/accomplishments/verify/A37CFW9F8QHJ",
  },
  {
    title: "Problem Solving Using Computational Thinking- University of Michigan",
    type: "Certification",
    icon: certificate,
    iconBg: "#383E56",
    date: "Dec 2021",
    points: [
      "Credential ID: V5HL8D6VP7UP",
    ],
    credential: "https://www.coursera.org/account/accomplishments/verify/V5HL8D6VP7UP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Indian Innovation Entrepreneurship Community- IIEC",
    type: "Certification",
    icon: achievement,
    iconBg: "#383E56",
    date: "March 2020",
    points: [
      "Credential ID: 20202126",
    ],
    credential: "https://www.linkedin.com/feed/update/urn:li:activity:6655915353438326784/",
  },
  {
    title: "Microsoft Technical Associate",
    type: "Certification",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Dec 2019",
    points: [
      "Credential ID: be02bff1-bb2a-45a1-80c5-9effe0a9f15d",
    ],
    credential: "https://www.credly.com/badges/be02bff1-bb2a-45a1-80c5-9effe0a9f15d/linked_in_profile",
  },
  {
    title: "Local Guide Level 8- Google Maps",
    type: "Achievements ",
    icon: maps,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "4M+ Views on Photos ",
    ],
    credential: "https://drive.google.com/file/d/1-hDX7dpAE_h1_FLNALvrbthIvew4hm0q/view?usp=sharing",
  },
  
];

const education = [
  {
    title: "Bachelors in Information and Technology",
    company_name: "Oriental Institute Of Science And Technology,Bhopal",
    icon: code,
    iconBg: "#383E56",
    date: "2019-2023",
    points: [
      "Courses undertaken: Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Data Science, Internet of Things.",
      "CGPA: 8.4/10",
    ],
  },
  {
    title: "JEE Preparation",
    company_name: "Allen Institute",
    icon: code,
    iconBg: "#E6DEDD",
    date: "2018-2019",
    points: [
      "Courses undertaken: STEM",
      "Skills Gained: Problem Solving, Discipline, Persistence, Patience, Never GiveUp Attitude.",
    ],
  },
  {
    title: "HSC",
    company_name: "New Shanti Niketan School- State Board",
    icon: code,
    iconBg: "#E6DEDD",
    date: "2016-2018",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
      "Grade: 77.8%",
      ,
    ],
  },
  {
    title: "SSC",
    company_name: "Agrawal Academy School-CBSE",
    icon: code,
    iconBg: "#383E56",
    date: "2014-2016",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "CGPA: 9.4/10",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Learn to sell. Learn to build. If you can do both, you will be unstoppable!",
    name: "Rishabh Baghel 🇮🇳",
    designation: "Linkedin",
    link: "https://www.linkedin.com/in/rishabhbaghel",
    image: rb1,
  },
  {
    testimonial:
      "Seek Wealth not money or status. Stay Hungry Stay Foolish!",
    name: "curious_rishabh",
    designation: "Twitter",
    link: "https://twitter.com/curious_rishabh",
    image: rb2,
  },
  {
    testimonial:
      "Engineering is the closest thing to magic that exists in the world.",
    name: "Curious-Rishabh",
    designation: "Github",
    link: "https://github.com/curious-rishabh",
    image: rb3,
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content into life. The website is divided into several main sections, including an about, education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/curious-rishabh/Rishabh-Portfolio",
    live_project_link: "https://curious-rishabh.tech",
  },
  {
    name: "Mandala Shop",
    description:
      "An eCommerce web application that provides a seamless and secure online shopping experience for customers, It have a robust product catalog and search functionality, with the ability to filter and sort products based on attributes such as category. It also include features such as fully automated delivery service, and order tracking.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: mandalashop,
    source_code_link: "https://github.com/curious-rishabh/Mandala-Shop",
    live_project_link: "https://mandalashop.in/",
  },
  {
    name: "Hotstar Clone",
    description:
      "The goal of this project is to develop a web application that functions as a clone of the popular Indian streaming platform, Hotstar. It also have a user-friendly interface that allows users to browse and search for their favorite content easily. The application is designed with a responsive web design approach, ensuring that it works smoothly across all devices, including desktops, laptops, tablets, and mobile devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: hotstar_clone,
    source_code_link: "https://github.com/curious-rishabh/Hotstar-Clone",
    live_project_link: "https://rf2rhk.csb.app/",
  },
  // {
  //   name: "Basic Portfolio",
  //   description:
  //     "",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: hotstar_clone,
  //   source_code_link: "https://github.com/curious-rishabh/basic-portfolio",
  //   live_project_link: "https://3ib2uq.csb.app/",
  // },
];

export { services, technologies, experiences, education, extracurricular, testimonials, projects };

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Soil-Online",
    description:
      "This full stack web application is designed to enhance the online experience for customers of SOIL, an organic food grocer.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "GraphQL" },
    ],
    image: "/assets/work/project1.png",
    live: "https://soil-online.vercel.app/",
    github: "https://github.com/sandalu95/Soil-Online",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Music Subsciption App",
    description:
      "This online music subscription application allows users to discover and subscribe to music from a vast library of music.",
    stack: [
      { name: "React.js" },
      { name: "AWS Lambda" },
      { name: "AWS S3" },
      { name: "Dynamo DB" },
    ],
    image: "/assets/work/project2.png",
    live: "https://music-subscription.vercel.app/",
    github: "https://github.com/sandalu95/Music-Subscription-App",
  },
  {
    num: "03",
    category: "frontend",
    title: "Tiktok Clone",
    description:
      "This TikTok clone is a front-end project that replicates the popular social media app's user interface and features.",
    stack: [{ name: "Nuxt" }, { name: "Vue" }, { name: "Tailwind CSS" }],
    image: "/assets/work/project3.png",
    live: "https://tiktok-clone-henna.vercel.app/",
    github: "https://github.com/sandalu95/tiktok-clone",
  },
];

export const about = {
  title: "About me",
  description:
    "I am a passionate software developer with a knack for crafting elegant digital experiences. With a strong foundation in both front-end and back-end technologies, I strive to deliver high-quality solutions that are not only functional but also aesthetically pleasing.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Umesha Sandalu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+61) 451 051 433",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "sandykiara1995@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "sandalu kalpanee",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
    {
      fieldName: "Availability",
      fieldValue: "Immediately",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My experience",
  description:
    "With over 4 years of professional experience, I have honed my skills in software development, working on various projects across multiple industries. My roles have involved designing, developing, and deploying high-quality software solutions that meet clients' needs and exceed their expectations.",
  items: [
    {
      company: "WSO2 Lanka (pvt) Ltd.",
      position: "Software Engineer",
      duration: "2021-2023",
    },
    {
      company: "WSO2 Lanka (pvt) Ltd.",
      position: "Trainee Software Engineer",
      duration: "2018-2019",
    },
    {
      company: "Cambio Software Engineering (pvt) Ltd.",
      position: "Software Engineer",
      duration: "2020-2021",
    },
  ],
};

export const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "My education",
  description:
    "I have a solid educational background in information technology, holding advanced degrees from renowned institutions. My academic journey has equipped me with the knowledge and skills necessary to excel in the fast-paced field of software development.",
  items: [
    {
      institute: "RMIT University",
      degree: "Master of Information Technology",
      duration: "2023-2024",
      gpa: "3.8/4.0",
    },
    {
      institute: "University of Kelaniya",
      degree: "Bachelor of Management and Information Technology",
      duration: "2016-2020",
      gpa: "3.84/4.0",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "I possess a diverse skill set that spans various technologies and tools essential for modern software development. From front-end to back-end development, I am proficient in creating efficient and scalable applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We create robust, scalable, and high-performing websites using cutting-edge technologies. Our team ensures your website is optimized for speed, security, and user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "We develop intuitive and responsive mobile applications for both Android and iOS platforms. Our apps are designed to provide a seamless user experience and high performance.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on creating visually appealing and user-friendly interfaces. We ensure that your digital products are easy to use and provide a great user experience.",
    href: "",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "We craft unique and memorable logos that represent your brand’s identity. Our design process involves understanding your vision and creating a logo that stands out in the market.",
    href: "",
  },
];

export const testimonials = [
  {
    name: "Chanaka Jayasena",
    designation: "Technical Lead Engineer, WSO2",
    testimonial:
      "Ridiculously efficient is the phrase that comes to mind when I think about Sandalu. I had the pleasure of working with Sandalu for six months as her mentor at WSO2, collaborating with WSO2 API Manager team. Her project was to implement the analytics from the ground up for WSO2 API Manager. I was particularly impressed by Sandalu's ability to handle the steep learning curve on multiple technologies. APIM, Siddhi, Stream Processor, React, Webpack, Babel, Javascript, Java, Databases are the main technologies she had to expertise in a short period of time. It was a bonus for us when she showed her artistic skills with the dashboards she designed. That skill often takes years to develop among developers, but it seemed to come perfectly naturally to her. She was able to bring positive energy to the team with her positive attitude and enthusiasm. I can remember she did a rocking final presentation. As a team member and a mentor, Sandalu earns my highest recommendation.",
  },
  {
    name: "Lakshan Karunathilake",
    designation: "Software Engineer, WSO2",
    testimonial:
      "I worked with Sandalu as a fellow intern at wso2 in 2018. She is a self-motivated, supportive, methodical and a dedicated worker. It was fantastic to work with Sandalu and I believe her presence at work had a positive impact to our work place and my individual experience working there as well.",
  },
];

export const blogs = [
  {
    title: "Writing Unit Tests for React Using Jest",
    description:
      "A guide to setting up Jest for a React project and writing unit tests to ensure your components work as intended.",
    href: "https://medium.com/@sandalukalpanee/writing-unit-tests-for-react-using-jest-2c15e0737f5e",
    image: "/assets/blog/blog5.jpeg",
  },
  {
    title: "Exploring New React-Based Frameworks: A Look at the Tops of 2024",
    description:
      "A review and discussion of the top new React-based frameworks of 2024 and their potential applications.",
    href: "https://medium.com/@sandalukalpanee/exploring-new-react-based-frameworks-a-look-at-the-tops-of-2024-8ccdaf43d082",
    image: "/assets/blog/blog4.jpeg",
  },
  {
    title: "Building Scalable Web Applications with GraphQL",
    description:
      "An introduction to GraphQL and its advantages over traditional REST APIs, along with a guide to building scalable applications.",
    href: "https://medium.com/@sandalukalpanee/building-scalable-web-applications-with-graphql-ec9c16a9cf83",
    image: "/assets/blog/blog3.jpeg",
  },
  {
    title: "The Ultimate SP Dashboard to track your API Manager Analytics",
    description:
      "This article focuses on the Publisher dashboard of APIM Analytics 3.0.0 and provides a brief overview of its features.",
    href: "https://medium.com/@sandalukalpanee/the-ultimate-sp-dashboard-to-track-your-api-manager-analytics-99b36de65021",
    image: "/assets/blog/blog2.jpeg",
  },
  {
    title: "What is Serverless?",
    description:
      "This article explains the basics of Serverless Architecture and its benefits for our studies.",
    href: "https://medium.com/@sandalukalpanee/what-is-serverless-2470a24db2ea",
    image: "/assets/blog/blog1.jpeg",
  },
];

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+61) 451 051 433",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sandykiara1995@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "9/36, Ulupna Road, Ormond, Victoria 3204, Australia",
  },
];

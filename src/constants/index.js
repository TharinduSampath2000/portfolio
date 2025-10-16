import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  police,
  springboot,
  mysql,
  PostgreSQL,
  mui,
  Linux,
  ims,
  pgpr,
  chilaw,
  storeIt,
  jwa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Tech Enthusiast",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: Linux,
  },
];

const experiences = [
  {
    company_name: "JWare Automation (pvt) Ltd",
    icon: jwa,
    iconBg: "#ffe4e1",
    date: "December 2024 - present",
    roles: [
      {
        title: "Associate Software Engineer",
        date: "July 2025 - Present",
        points: [
          "Developed a court management platform with reservation scheduling, member engagement, and real-time light control.",
          "Utilized Home Assistant OS, MQTT, WebSockets, and Socket.IO for seamless real-time operations.",
          "Integrated Playtomic and Syltek APIs for enhanced booking and match functionality.",
          "Enabled secure payments with Stripe API.",
          "Implemented WhatsApp signup, email notifications, and match boosting features.",
          "Improved booking efficiency by 30%, increased player participation by 25%, and reduced manual lighting operations by 90%.",
          "Currently overseeing 2 trainee-led teams as an associate, providing guidance, mentorship, and technical support.",
        ],
      },
      {
        title: "Trainee Software Engineer",
        date: "May 2025 - July 2025",
        points: [
          "Contributed to the development of an AI-powered chatbot integration to enhance user interaction with intelligent conversational features.",
          "Implemented CRUD operations for function and parameter management to enable dynamic chatbot behavior.",
          "Developed secure authentication and authorization using JWT tokens for protected access and data security.",
          "Led a team of 2 interns during my trainee period, managing development tasks and ensuring timely delivery.",
        ],
      },
      {
        title: "Intern Software Engineer",
        date: "December 2024 - May 2025",
        points: [
          "Contributed to the development of a customizable dashboard solution for industrial workspaces.",
          "Integrated real-time data from MQTT brokers and InfluxDB for efficient monitoring.",
          "Implemented interactive drag-and-drop widgets and dynamic settings for enhanced user control.",
          "Built real-time alarm notifications, reducing monitoring response time by 40%.",
          "Integrated Stripe API for secure payment processing.",
          "Enabled fully automated billing workflows, achieving 100% payment automation.",
        ],
      },
    ],
  },
  {
    company_name: "Sri Lanka Police - IT Division",
    icon: police,
    iconBg: "#ffe4e1",
    date: "January 2024 - June 2024",
    roles: [
      {
        title: "Intern Software Engineer",
        date: "January 2024 - June 2024",
        points: [
          "Developed an Incident Management System to streamline complaint management for the Sri Lanka Police, improving case tracking and response times.",
          "Enhanced case follow-up capabilities for higher-ranking officers, enabling better oversight and progress monitoring on investigations.",
          "Optimized communication channels between complainants and police officers, ensuring efficient and transparent handling of complaints.",
          "Utilized software development skills to contribute to a real-world project, improving law enforcement processes and operations through technology.",
        ],
      },
    ],
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
    name: "Incident Management System",
    description:
      "A comprehensive Incident Management System for the Sri Lanka Police to efficiently manage and track complaints.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "orange-text-gradient",
      },
    ],
    image: ims,
    source_code_link: "",
    site_link: "",
  },
  {
    name: "Postgraduate Program Review",
    description:
      "A web application to make the Postgraduate Program review process, which is conducted under the Quality assurance council of University Grants commission.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "orange-text-gradient",
      },
    ],
    image: pgpr,
    source_code_link: "",
    site_link: "",
  },
  {
    name: "Website and Online system for Chilaw Pradeshiya sabha",
    description:
      "A website for Chilaw Pradeshiya sabha and web system to manage the complaint system as well as the sabha library.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: chilaw,
    source_code_link: "https://github.com/Pubudu-Anuradha/ChilawSabha.git",
    site_link: "",
  },
  {
    name: "StoreIt",
    description:
      "A web application to manage files in our own storage efficiently and securely.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: storeIt,
    source_code_link: "https://github.com/TharinduSampath2000/StoreIt.git",
    site_link: "https://store-it-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

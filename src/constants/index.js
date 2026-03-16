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
  mongodb,
  terracartCover,
  interviewAICover,
  dashboardCover,
  deploymentCover,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  education: "education",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.education,
    title: "Education",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Full Stack Development",
    icon: web,
  },
  {
    title: "REST API and Authentication",
    icon: backend,
  },
  {
    title: "Responsive React Frontend",
    icon: mobile,
  },
  {
    title: "AWS EC2 Deployment",
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
    name: "JavaScript (ES6+)",
    icon: javascript,
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
    name: "MongoDB",
    icon: mongodb,
  },
];

const additionalTechnologies = [
  "Express.js",
  "REST API Development",
  "Authentication",
  "AWS EC2",
  "Nginx",
  "SSL",
  "Linux",
  "Git",
  "GitHub",
  "Responsive Design",
];

const quickStats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "UI Performance Boost", value: "25%" },
  { label: "Degree", value: "MCA" },
];

const highlights = [
  "Production-ready MERN applications",
  "Secure authentication and API architecture",
  "Accessibility and voice-assisted UX focus",
  "Cloud deployment with AWS EC2 and Nginx",
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Inventors Pvt Ltd, Nashik",
    company_website: "https://github.com/sahilshaikh7454",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2026",
    points: [
      "Developed and deployed full-stack MERN applications for real-world business use cases.",
      "Built reusable React components and improved UI performance by 25%.",
      "Designed and implemented secure RESTful APIs with authentication and middleware.",
      "Deployed and maintained production apps on AWS EC2 using Nginx and SSL.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Netleap Training Solution",
    company_website: "https://github.com/sahilshaikh7454",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Developed responsive UI components using modern frontend technologies.",
      "Improved user experience and optimized interface performance.",
      "Collaborated with mentors and peers to deliver pixel-accurate screens.",
      "Supported component reuse and consistency across training projects.",
    ],
  },
  {
    title: "Freelance MERN Developer",
    company_name: "Independent Projects",
    company_website: "https://github.com/sahilshaikh7454",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Built business websites and dashboards with React, Node.js, and MongoDB.",
      "Implemented login/authentication flows and role-based access for admin users.",
      "Improved API response performance with query and middleware optimization.",
      "Handled deployment, domain setup, SSL, and basic Linux server operations.",
    ],
  },
  {
    title: "Academic Project Developer",
    company_name: "MCA Capstone and Team Projects",
    company_website: "https://github.com/sahilshaikh7454",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2023 - 2025",
    points: [
      "Built inclusive and AI-assisted web applications as part of MCA project work.",
      "Delivered voice-enabled and accessibility-focused user experiences.",
      "Worked on end-to-end architecture from UI to API to cloud deployment.",
      "Presented working prototypes and documentation with measurable outcomes.",
    ],
  },
];

const projects = [
  {
    name: "TerraCart - Inclusive Smart Ordering Platform",
    description:
      "Accessibility-first ordering platform built with MERN. Features voice-based ordering, assistive UI patterns, multi-language support, and cloud deployment.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "accessibility",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: terracartCover,
    hosted_link: "https://github.com/sahilshaikh7454",
  },
  {
    name: "AI-Based Interview Preparation Platform",
    description:
      "Full-stack interview prep platform with voice-based mock interviews, real-time feedback workflows, authentication, and scalable API architecture.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "speech-recognition",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: interviewAICover,
    hosted_link: "https://github.com/sahilshaikh7454",
  },
  {
    name: "Business Operations Dashboard",
    description:
      "Admin dashboard for operational tracking with secure login, role-based modules, analytics cards, and optimized backend endpoints.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dashboardCover,
    hosted_link: "https://github.com/sahilshaikh7454",
  },
  {
    name: "Portfolio and Deployment Toolkit",
    description:
      "Production-ready portfolio setup with CI-friendly build flow, server configuration guidance, Nginx reverse proxy, and SSL-ready deployment notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
      {
        name: "aws-ec2",
        color: "pink-text-gradient",
      },
    ],
    image: deploymentCover,
    hosted_link: "https://github.com/sahilshaikh7454",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "SPPU University",
    year: "2023 - 2025",
    score: "CGPA: 8.14 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "SPPU University",
    year: "2020 - 2023",
    score: "CGPA: 8.10 / 10",
  },
];

const personalInfo = {
  name: "Sahil",
  fullName: "Sahil Shaikh",
  email: "sahilshaikh7454@gmail.com",
  mobile: "+91 9970967486",
  location: "Nashik, Maharashtra",
  role: "Full Stack MERN Developer",
  availability: "Open to full-time and freelance opportunities",
  about: `I am a Full Stack MERN Developer with 1+ year of experience building scalable and user-focused web applications. I work across React.js, Node.js, Express.js, and MongoDB, with hands-on deployment experience on AWS EC2 using Nginx and SSL. I enjoy building secure APIs, improving performance, and delivering clean responsive interfaces for real-world products. I completed my MCA from SPPU University with a CGPA of 8.14 and continue to build practical, high-impact solutions.`,
  projectsIntro: `These projects reflect my MERN stack development experience, from accessibility-focused product design to AI-assisted interview workflows. They highlight practical work in frontend engineering, backend API development, authentication, cloud deployment, and performance optimization.`,
};

const publicUrls = {
  resume: "/Sahil_Shaikh_Resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/sahil-shaikh/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/sahilshaikh7454",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  additionalTechnologies,
  quickStats,
  highlights,
  experiences,
  projects,
  education,
  navigationPaths,
  personalInfo,
  publicUrls,
};

export const profile = {
  name: "Ishant Pathak",
  firstName: "ISHANT PATHAK",
  role: "Software Developer",
  tagline:
    "I am a Computer Science (Cloud & DevOps) student at GLA University passionate about software development, cloud technologies, DevOps, and problem-solving.",
  email: "ishantpathak25@gmail.com",
  availability: "Open to building something great",
  heroImage:
    "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788704878/Screenshot_2026-09-06_195740_v5dtqv.png",
  portrait:
    "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788701224/Screenshot_2026-09-06_185647_gyskzt.png",
};

export const navLinks = [
  { id: "hero", label: "Intro", testid: "nav-hero-link" },
  { id: "about", label: "About", testid: "nav-about-link" },
  { id: "skills", label: "Skills", testid: "nav-skills-link" },
  { id: "projects", label: "Projects", testid: "nav-projects-link" },
  { id: "contact", label: "Contact", testid: "nav-contact-link" },
];

export const chapters = [
  {
    id: "01",
    testid: "about-chapter-01",
    title: "Philosophy",
    heading: "Problem-solving is the foundation.",
    body:
      "I believe every great product starts with a problem worth solving. I enjoy turning complex challenges into simple, efficient, and reliable solutions through code. From building applications to solving DSA problems, I focus on understanding the problem first, choosing the right approach, and continuously improving the solution.",
  },
  {
    id: "02",
    testid: "about-chapter-02",
    title: "Architecture",
    heading: "Systems that scale.",
    body:
      "I believe good software is more than what users see on the screen. I’m interested in building systems that are reliable, scalable, and easy to maintain. From backend development and cloud infrastructure to automation and DevOps, I focus on understanding how different components work together.",
  },
  {
    id: "03",
    testid: "about-chapter-03",
    title: "Craft",
    heading: "Code is built, not just written.",
    body:
      "I believe good code should be clean, efficient, and easy to understand. I focus on writing solutions that are not only correct but also optimized and maintainable. Whether I’m solving a DSA problem or building a real-world project, I keep learning, refining my approach, and improving the quality of my work.",
  },
  {
    id: "04",
    testid: "about-chapter-04",
    title: "Vision",
    heading: "Build. Scale. Keep learning.",
    body:
      "My goal is to become a well-rounded software engineer who can build solutions from the ground up and understand what happens behind the scenes. I want to combine software development, Cloud & DevOps, and problem-solving to create reliable systems. I’m constantly learning, experimenting with new technologies, and turning ideas into real-world projects.",
  },
];

export const metrics = [
  { value: 600, suffix: "+", label: "LEETCODE PROBLEMS" },
  { value: 10, suffix: "+", label: "PROJECTS BUILT" },
  { value: 2, suffix: "+", label: "CERTIFICATIONS" },
];

export const meters = [
  {
    label: "Frontend Engineering",
    value: 90,
    testid: "skills-meter-frontend",
  },
  {
    label: "Programming & DSA",
    value: 90,
    testid: "skills-meter-webgl",
  },
  {
    label: "Backend & Systems",
    value: 75,
    testid: "skills-meter-backend",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    name: "Programming & DSA",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "STL",
      "LeetCode",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    name: "Cloud / DevOps",
    skills: [
      "Linux",
      "Google Cloud",
      "Git",
      "GitHub",
    ],
  },
];

export const marqueeItems = [
  "C++ & DSA",
  "React Development",
  "Backend Development",
  "Cloud Computing",
  "DevOps",
  "Linux",
  "Google Cloud",
  "Problem Solving",
];

export const projects = [
  {
    id: 1,
    testid: "project-card-1",
    title: "My Portfolio",
    category: "Portfolio",
    year: "2025",
    description:
      "A personal developer portfolio showcasing my projects, technical skills, DSA journey, and interests in software development and Cloud & DevOps. Built with a modern, responsive interface and smooth interactions.",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788696718/Screenshot_2026-09-06_174129_x1xtsn.png",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://ishantpathak01.netlify.app/signature.html",
  },

  {
    id: 2,
    testid: "project-card-2",
    title: "ConvoX",
    category: "Web Application",
    year: "2026",
    description:
      "A real-time video calling and chat application that allows users to communicate without traditional login or account setup. Built with WebRTC and Socket.io for real-time communication.",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788703997/Screenshot_2026-09-06_194303_g17ylv.png",
    tags: ["React", "Node.js", "WebRTC", "Socket.io"],
    link: "https://convox-final.onrender.com/",
  },

  {
    id: 3,
    testid: "project-card-3",
    title: "Weather App",
    category: "Web Application",
    year: "2026",
    description:
      "A responsive weather application that provides real-time weather information using a weather API. Built with React, Vite, and Tailwind CSS with a simple and user-friendly interface.",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788703922/Screenshot_2025-09-07_155100_gmx7ac.png",
    tags: ["React", "Vite", "Tailwind CSS", "API"],
    link: "https://ishant01-weatherr.netlify.app/",
  },

  {
    id: 4,
    testid: "project-card-4",
    title: "YouTube-Helper",
    category: "Chrome Extension",
    year: "2025",
    description:
      "A Chrome extension designed to improve the YouTube experience with useful video controls and productivity-focused features, making video interaction faster and more convenient.",
    image:
      "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788703845/Screenshot_2026-09-06_194019_taigkx.png",
    tags: ["JavaScript", "HTML", "CSS"],
    link:
      "https://chromewebstore.google.com/detail/youtube-helper/nmjemcpdnknbdppbmacgmehofemomfjm",
  },
 {
  id: 5,
  testid: "project-card-5",
  title: "Electroride",
  category: "Web Application",
  year: "2025",
  description:
    "An electric vehicle-focused web application designed to provide a modern and user-friendly experience for exploring electric mobility solutions.",
  image:
    "https://res.cloudinary.com/df6t1dmcs/image/upload/v1788704439/Electroride_ddn8lm.png",
  tags: ["HTML", "CSS", "JavaScript"],
  link: "https://ridebookinggg.netlify.app/",
},
];

export const projectFilters = [
  "All",
  "Portfolio",
  "Web Application",
  "Chrome Extension",
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ishantpathak01",
    key: "GITHUB",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    key: "LINKEDIN",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Ishantpathak01/",
    key: "LEETCODE",
  },
];
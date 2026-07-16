import { Code2, GitBranch, Phone, Send, ServerCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  demo: string;
};

export type Milestone = {
  title: string;
  detail: string;
  status: string;
  finished: boolean;
  accent: "emerald" | "cyan" | "amber";
  icon: LucideIcon;
};

export type ContactLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const words = [
  "Building Modern Web Experiences",
  "Crafting React & Next.js Interfaces",
  "Learning DevOps with Git & CI/CD",
] as const;

export const skillGroups = [
  {
    title: "Core web stack",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "PHP",
    ],
  },
  {
    title: "Workflow & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Linux basics",
      "Docker",
      "CI/CD",
      "Deployment workflows",
    ],
  },
] as const;

export const projects: Project[] = [
  {
    title: "KarMuqabla",
    description:
      "Built the frontend and backend for a competition platform using modern web architecture, responsive UI, and reliable server logic.",
    stack: ["Wordpress", "Css", "bootstrap CSS", "javaScript", "php"],
    image: "karMuqabla.png",
    github: "#",
    demo: "https://www.karmuqabla.com/",
  },
  {
    title: "Syalani Projects",
    description:
      "Built the Syalani Projects portfolio site to showcase every project in one place, with polished UI, responsive layouts, and seamless navigation across the portfolio.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "syalani.png",
    github: "#",
    demo: "https://portfolio-assigment-js-elahi.netlify.app/",
  },
  {
    title: "KarMuqabla App",
    description:
      "Created the KarMuqabla mobile app with Next.js, Capacitor, and Tailwind, plus backend integration using Laravel. Website preview is work in progress.",
    stack: ["Next.js", "Capacitor", "Tailwind CSS", "Laravel", "Redux"],
    image: "/karmuqabla-app.svg",
    github: "#",
    demo: "#",
  },
];

export const milestones: Milestone[] = [
  {
    title: "Web Development",
    detail:
      "HTML, CSS, JavaScript, PHP, WordPress, and MySQL database architecture mastery.",
    status: "Complete",
    finished: true,
    accent: "emerald",
    icon: Code2,
  },
  {
    title: "Version Control",
    detail: "Git, GitHub, code reviews, and branching workflows.",
    status: "Mastered & Utilized",
    finished: true,
    accent: "cyan",
    icon: GitBranch,
  },
  {
    title: "DevOps Horizon",
    detail:
      "Docker containerization, server scripting, CI/CD pipelines, and cloud concepts.",
    status: "Currently Scaling",
    finished: false,
    accent: "amber",
    icon: ServerCog,
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/elahihuzaifa",
  },
  {
    icon: Send,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huzaifa-elahi-63101427a/",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me/03341823245?text=Hi%20Huzaifa%2C%20I%20want%20to%20connect.",
  },
];

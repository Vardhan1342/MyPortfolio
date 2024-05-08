import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AIplatform from "@/public/AIplatform.png";
import sociopedia from "@/public/sociopedia.jpg";
import prompts from "@/public/prompts.png";
import devfinder from "@/public/devfinder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "Dev-Xp",
    description:
      "Innovated a platform for real-time collaboration among developers, facilitating seamless pairing for joint coding projects. Key contributions include room creation, video streaming, and chat features. Empowered global developer community, enhancing productivity and fostering collaboration culture. Led future development initiatives, including code version control integration and mobile platform expansion.",
    tags: ["Nextjs", "MongoDB", "Tailwind","Node js","TypeScript"],
    imageUrl: devfinder,
    visiturl:"https://dev-finder-ruby-six.vercel.app/",
    code:"https://github.com/Vardhan1342/dev-finder"
  },
  {
    title: "Saas AI Platform",
    description:
      "Elevate creativity and efficiency with our all-in-one SAAS AI platform, offering seamless text-to-image, text-to-video, and text-to-music capabilities  unlocking a world of possibilities at your fingertips.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ZusStand","Prisma","Stripe"],
    imageUrl: AIplatform,
    visiturl:"https://ai-saas-platform-sb4k.vercel.app/",
    code:"https://github.com/Vardhan1342/AI-saas-platform.git"
  },
  {
    title: "Promptops",
    description:
      "Discover endless inspiration on our Promtops website, your go-to source for the latest and most captivating prompts – fueling creativity and sparking innovation with every visit.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: prompts,
    visiturl:"https://promptops.vercel.app/",
    code:"https://github.com/Vardhan1342/ai-prompts.git"
  },
  {
    title: "Sociopedia",
    description:
      "Explore a new era of photo-sharing on Sociopedia, your dedicated social platform where simplicity meets creativity – share moments, connect, and express yourself through captivating visuals",
    tags: ["React", "MongoDB", "Tailwind","Redux"],
    imageUrl: sociopedia,
    visiturl:"https://github.com/Vardhan1342/Sociopedia-Frontend.git",
    code:"https://github.com/Vardhan1342/Sociopedia-Frontend.git"
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Java",
  "Framer Motion",
] as const;

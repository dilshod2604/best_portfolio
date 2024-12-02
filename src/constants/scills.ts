import javascript from "../assets/skills/logo-javascript.svg";
import typescript from "../assets/skills/typescript.svg";
import react from "../assets/skills/react-1.svg";
import vite from "../assets/skills/icons8-vite.svg";
import next from "../assets/skills/next-js.svg";
import antd from "../assets/skills/ant-design.svg";
import framer from "../assets/skills/icons8-framer-logo.svg";
import html from "../assets/skills/icons8-html.svg";
import css from "../assets/skills/icons8-css3.svg";
import scss from "../assets/skills/icons8-sass-avatar.svg";
import prisma from "../assets/skills/icons8-prisma-orm.svg";
import supabase from "../assets/skills/icons8-supabase.svg";
import redux from "../assets/skills/icons8-redux.svg";
import git from "../assets/skills/icons8-git.svg";
import gitHub from "../assets/skills/icons8-github.svg";
import figma from "../assets/skills/icons8-figma.svg";
import vscode from "../assets/skills/icons8-visual-studio-code.svg";
import pixso from "../assets/skills/pixso.png";
import insomnia from "../assets/skills/insomnia-logo.svg";
import gsap from "../assets/skills/gsap.png";
import mui from "../assets/skills/icons8-material-ui.svg";
import react_hook_form from "../assets/skills/react-hook-form.svg";
import tailwind from "../assets/pngwing.com.png";
import { StaticImageData } from "next/image";

interface ISkills {
  name: string;
  image: StaticImageData;
}

export const skills: ISkills[] = [
  {
    name: "Java-Script",
    image: javascript,
  },
  {
    name: "Type-Script",
    image: typescript,
  },
  {
    name: "React.JS",
    image: react,
  },
  {
    name: "Vite",
    image: vite,
  },
  {
    name: "Next.JS",
    image: next,
  },
  {
    name: "Ant-design",
    image: antd,
  },
  {
    name: "Framer-motion",
    image: framer,
  },
  {
    name: "Gsap",
    image: gsap,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS3",
    image: css,
  },
  {
    name: "SCSS",
    image: scss,
  },
  {
    name: "Prisma",
    image: prisma,
  },
  {
    name: "Supabase",
    image: supabase,
  },
  {
    name: "MaterialUI",
    image: mui,
  },
  {
    name: "Git",
    image: git,
  },

  {
    name: "Redux",
    image: redux,
  },
  {
    name: "React-hook-form",
    image: react_hook_form,
  },
];
///designTools

export const designTools: ISkills[] = [
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Pixso",
    image: pixso,
  },
];
///productivityTools

export const productivityTools: ISkills[] = [
  {
    name: "Visual Studio Code",
    image: vscode,
  },
  {
    name: "Github",
    image: gitHub,
  },
  {
    name: "Insomnia",
    image: insomnia,
  },
];

/// about portfolio
export const portfolio: ISkills[] = [
  {
    name: "Pixso",
    image: pixso,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "Next.Js",
    image: next,
  },
  {
    name: "TailwindCss",
    image: tailwind,
  },
  {
    name: "React-hook-form",
    image: react_hook_form,
  },
];

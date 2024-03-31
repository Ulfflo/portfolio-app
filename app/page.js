"use client"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import Ulf from "../public/Ulf.JPG";
import { useTheme } from "../contexts/ThemeContext";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Card from "../components/Card";

export default function Home() {
  const { state, toggleTheme } = useTheme();
  const isDarkMode = state.theme === "dark";
  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <header className="flex fixed w-full h-16 text-black bg-white justify-between items-center px-6 dark:text-white dark:bg-black">
        <nav>
          <ul className="flex items-center gap-32 px-20 font-mono">
            <a>Home</a>
            <a>About</a>
            <a>Tech Stack</a>
            <a>Projects</a>
            <a>Contact</a>
          </ul>
        </nav>

        <div className="flex items-center gap-6 px-6 ">
          <button onClick={toggleTheme}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
      </header>

      <div className="flex mb-20 ">
        <div className="flex items-center justify-center pl-32 mt-36 w-1/2">
          <p className="text-4xl font-serif text-blue-950 dark:text-white">
            My name is Ulf Flodén and I build things for the web
          </p>
        </div>
        <div className="flex items-center justify-center mt-36 w-1/2">
          <Image
            src={Ulf}
            className="placeholder:blur w-80 h-80 rounded-full border-4 border-solid"
            alt="Ulf's Picture"
          />
        </div>
      </div>
      <div className="mb-20">
        <div className="flex flex-col text-center mb-16">
          <h2 className="text-2xl text-blue-950 dark:text-white font-bold">
            My Tech Stach
          </h2>
          <p>Technologies I've been working with recently</p>
        </div>
        <div className="flex justify-center gap-12 mb-12">
          <FaHtml5 className="text-orange-500 w-20 h-20" />
          <IoLogoCss3 className="text-blue-500 w-20 h-20" />
          <IoLogoJavascript className="text-yellow-400 w-20 h-20" />
        </div>
        <div className="flex justify-center gap-12">
          <FaReact className="text-cyan-300 w-20 h-20" />
          <SiTailwindcss className="text-cyan-500 w-20 h-20" />
          <TbBrandVscode className="text-blue-600 w-20 h-20" />
          <FaGithub className="w-20 h-20" />
        </div>
      </div>
      <div>
        <div className="flex flex-col text-center mb-16">
          <h2 className="text-2xl text-blue-950 dark:text-white font-bold">
            Projects
          </h2>
          <p>Things I've built so far</p>
        </div>
        <div>
          <div className="flex justify-center gap-16 mb-12">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center gap-16">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}

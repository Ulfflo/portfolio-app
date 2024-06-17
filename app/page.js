"use client";

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
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const { state, toggleTheme } = useTheme();
  const isDarkMode = state.theme === "dark";

  const handleLinkClick = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main id="home" className="dark:bg-gray-900 dark:text-white">
      <header className="flex fixed w-full h-16 text-black bg-white justify-between items-center px-6 dark:text-white dark:bg-black">
        <nav>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="block bg-black text-yellow-50 border-none md:hidden cursor-pointer"
            >
              {" "}
              <GiHamburgerMenu />{" "}
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-32 px-20 font-mono">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#tech">Tech Stack</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </ul>
          </div>
        </nav>
        {show && (
          <div className="absolute bg-white top-full left-0 mt-2 z-10">
            <a
              href="#home"
              className="no-underline text-black block p-2"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="no-underline text-black block p-2"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a
              href="#tech"
              className="no-underline text-black block p-2"
              onClick={handleLinkClick}
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="no-underline text-black block p-2"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="no-underline text-black block p-2"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        )}

        <div className="flex items-center gap-6 px-6 ">
          <button onClick={toggleTheme}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <a
            href="https://github.com/ulfflo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
      </header>

      <div
        id="about"
        className="flex flex-col items-center justify-center mb-20 md:flex-row"
      >
        <div className="flex items-center justify-center md:pl-32 mt-36 md:w-1/2">
          <p className="text-4xl font-serif text-blue-950 dark:text-white">
            My name is Ulf Flodén and I build things for the web
          </p>
        </div>
        <div className="flex items-center justify-center mt-36 md:w-1/2">
          <Image
            src={Ulf}
            className="placeholder:blur w-80 h-80 rounded-full border-4 border-solid"
            alt="Ulf's Picture"
          />
        </div>
      </div>
      <div id="tech" className="mb-20">
        <div className="flex flex-col text-center mb-16">
          <h2 className="text-2xl text-blue-950 dark:text-white font-bold">
            My Tech Stach
          </h2>
          <p>Technologies I've been working with recently</p>
        </div>
        <div id="projects">
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
      </div>
      <div>
        <div id="project" className="flex flex-col text-center mb-16">
          <h2 className="text-2xl text-blue-950 dark:text-white font-bold">
            Projects
          </h2>
          <p>Things I've built so far</p>
        </div>
        <div>
          <div className="flex justify-center gap-16 mb-12">
            <Card
              title="Quiz"
              description="A quiz made with Next.js and Redux"
              git="https://github.com/Ulfflo/quiz-redux"
              link="https://quiz-redux-rdziuy51p-ulf-flodens-projects.vercel.app/"
            />
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

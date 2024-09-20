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
import arbetarbanken from "../public/arbetarbanken.jpg";
import quiz from "../public/quiz.jpg";
import zoombild from "../public/zoombild.jpg";
import cookbook from "../public/cookbook.jpg";
import fairy from "../public/fairy.jpg";
import grodan from "../public/grodan.jpg";

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
      <header className="flex fixed w-full h-16 text-black bg-white justify-between items-center px-4 md:px-6 dark:text-white dark:bg-black">
        <nav>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="block bg-black text-yellow-50 border-none md:hidden cursor-pointer"
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 md:gap-32 px-4 md:px-20 font-mono">
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

        <div className="flex items-center gap-4 md:gap-6 px-4 md:px-6 ">
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
          <a
            href="https://www.linkedin.com/in/ulf-flod%C3%A9n-139714327/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center mb-12 md:mb-40 md:flex-row">
        <div className="flex items-center justify-center px-4 md:pl-32 mt-24 md:mt-36 md:w-1/2">
          <p className="text-xl md:text-4xl font-serif text-blue-950 dark:text-white text-center md:text-left">
            My name is Ulf Flodén and I build things for the web
          </p>
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-36 md:w-1/2">
          <Image
            src={Ulf}
            className="placeholder:blur w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-solid"
            alt="Ulf's Picture"
          />
        </div>
      </div>

      <div id="about" className="mb-12 md:mb-40 scroll-mt-32">
        <div className="flex flex-col text-center mb-8 md:mb-16 mx-4 md:ml-60 md:mr-60">
          <h2 className="text-xl md:text-2xl text-blue-950 dark:text-white font-bold mb-4 md:mb-10">
            About me
          </h2>
          <p className="text-base md:text-xl">
            I’m a full-stack student with a strong emphasis on frontend
            development. I have a passion for building engaging and intuitive
            web and mobile applications. I love turning ideas into reality and
            constantly seek new challenges to enhance my skills. Whether it's
            crafting responsive layouts, optimizing user experiences or
            developing mobile apps, I thrive on creating solutions that enhance
            usability and engagement.
          </p>
        </div>
      </div>

      <div id="tech" className="mb-12 md:mb-40 scroll-mt-24">
        <div className="flex flex-col text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl text-blue-950 dark:text-white font-bold mb-3">
            My Tech Stack
          </h2>
          <p className="text-sm md:text-base">
            Technologies I've been working with recently
          </p>
        </div>

        <div>
          <div className="flex justify-center gap-4 md:gap-12 mb-6 md:mb-12">
            <FaHtml5 className="text-orange-500 w-12 h-12 md:w-20 md:h-20" />
            <IoLogoCss3 className="text-blue-500 w-12 h-12 md:w-20 md:h-20" />
            <IoLogoJavascript className="text-yellow-400 w-12 h-12 md:w-20 md:h-20" />
          </div>

          <div className="flex justify-center gap-4 md:gap-12">
            <FaReact className="text-cyan-300 w-12 h-12 md:w-20 md:h-20" />
            <SiTailwindcss className="text-cyan-500 w-12 h-12 md:w-20 md:h-20" />
            <TbBrandVscode className="text-blue-600 w-12 h-12 md:w-20 md:h-20" />
            <FaGithub className="w-12 h-12 md:w-20 md:h-20" />
          </div>
        </div>
      </div>

      <div>
        <div id="projects" className="flex flex-col text-center mb-8 md:mb-16 scroll-mt-36">
          <h2 className="text-xl md:text-2xl text-blue-950 dark:text-white font-bold mb-3">
            Projects
          </h2>
          <p className="text-sm md:text-base">
            Some of the things I've built so far
          </p>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8 md:mb-12">
            <Card
              picture={quiz}
              title="Quiz"
              description="A fun quiz, built with Next.js, Redux and Tailwind CSS."
              git="https://github.com/Ulfflo/quiz-redux"
              link="https://quiz-redux-rdziuy51p-ulf-flodens-projects.vercel.app/"
            />
            <Card
              picture={arbetarbanken}
              title="Bank"
              description="An application where you can deposit your money, built with Next.js, Express and Tailwind CSS."
              git="https://github.com/Ulfflo/bank"
            />
            <Card
              picture={zoombild}
              title="Zoom"
              description="An alternative design for Zoom, created with Vite and Tailwind CSS."
              git="https://github.com/Ulfflo/zoom2"
              link="https://zoom2-9kewox9k7-ulf-flodens-projects.vercel.app/"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <Card
              picture={cookbook}
              title="Cookbook"
              description="Keep your recipes in this Cookbook, built with Reactive Native and Expo."
              git="https://github.com/Ulfflo/recept-app"
            />
            <Card
              picture={fairy}
              title="FairyTailor"
              description="Brings you AI-generated fairytales. Built with Next.js, Express and MySQL."
              git="https://github.com/Ulfflo/FairyTailor"
            />
            <Card
              picture={grodan}
              title="Store"
              description="Shop 'til you drop in this store, built with Next.js, Redux and Tailwind CSS."
              git="https://github.com/Ulfflo/shop"
              link="https://shop-rf25renvz-ulf-flodens-projects.vercel.app/"
            />
          </div>
        </div>
      </div>

      <div id="contact" className="mt-20 md:mt-40">
        <div className="flex flex-col text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl text-blue-950 dark:text-white font-bold mb-3">
            Contact
          </h2>
          <p className="text-sm md:text-base">phone: +46 760 185 007</p>
          <p className="text-sm md:text-base">mail: ulf_floden@hotmail.com</p>
        </div>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import HTML from "/public/skills/html.png";
import CSS from "/public/skills/css.png";
import JS from "/public/skills/javascript.png";
import REACT from "/public/skills/react.png";
import AWS from "/public/skills/aws.png";
import Node from "/public/skills/node.png";
import Tailwind from "/public/skills/tailwind.png";
import Github from "/public/skills/github1.png";
import Vite from "/public/skills/vite.svg";
import Redux from "/public/skills/redux.svg";
import Next from "/public/skills/nextjs.png";
import MySQL from "/public/skills/mysql.webp";
import Express from "/public/skills/express-js.svg";
import SkillsCard from "./SkillsCard";

function Skills() {
  const skillsData = [
    { id: "Front-End", src: HTML, alt: "HTML" },
    { id: "Front-End", src: CSS, alt: "CSS" },
    { id: "Front-End", src: JS, alt: "JavaScript" },
    { id: "Front-End", src: REACT, alt: "React" },
    { id: "Front-End", src: Next, alt: "Next.js" },
    { id: "Front-End", src: Redux, alt: "Redux" },
    { id: "Front-End", src: Tailwind, alt: "Tailwind" },
    { id: "Front-End", src: Vite, alt: "Vite" },
    { id: "DevOps", src: Github, alt: "Github" },
    { id: "DevOps", src: AWS, alt: "AWS" },
    { id: "Back-end", src: Express, alt: "Express" },
    { id: "Back-end", src: Node, alt: "Node.js" },
    { id: "Database", src: MySQL, alt: "MySQL" },
  ];

  return (
    <div
      id="skills"
      className="w-full px-8 sm:px-16 xl:max-w-[90rem] mx-auto h-auto justify-center"
    >
      <div className="mx-auto flex flex-col justify-center h-full">
        <div className="flex flex-wrap justify-center mx-auto gap-4">
          {skillsData.map((skill, index) => (
            <SkillsCard
              key={index}
              src={skill.src}
              alt={skill.alt}
              title={skill.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

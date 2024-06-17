import colours from "../public/colours.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Card({ title, description, git, link }) {
  return (
    <div className="border border-solid rounded-md w-48 h-72 flex flex-col">
      <Image src={colours} className="rounded-t-md" />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow p-4">
          <h2 className="text-lg font-bold text-blue-950 dark:text-white">
            {title}
          </h2>
          <p className="text-sm mt-2 dark:text-white">{description}</p>
        </div>
        <div className="flex items-end justify-between p-2">
          <a
            href={git}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
          </a>
          <a
            href={link}
            className="dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to site
          </a>
        </div>
      </div>
    </div>
  );
}

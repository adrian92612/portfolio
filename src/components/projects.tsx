import { MdArrowOutward } from "react-icons/md";
import { PiCodeLight } from "react-icons/pi";
import { InView } from "react-intersection-observer";
import PreviewVideo from "./project-video";
import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line, RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandPrisma, TbBrandTypescript, TbBrandVite } from "react-icons/tb";
import { SiCypress, SiExpress, SiPostgresql } from "react-icons/si";
import { AuthJSIcon } from "./svgs";
import rentalApp from "../assets/rental-property-dashboard.png";
import shoppingCart from "../assets/shopping-cart.png";
import battleship from "../assets/battleship.png";
import memoryCard from "../assets/memory-card.png";
import calculator from "../assets/calculator.png";
import etchASketch from "../assets/etch-a-sketch.png";

const techStack = [
  {
    name: "HTML5",
    icon: <AiOutlineHtml5 />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Typescript",
    icon: <TbBrandTypescript />,
  },
  {
    name: "NextJS",
    icon: <RiNextjsLine />,
  },
  {
    name: "Vite",
    icon: <TbBrandVite />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    name: "Prisma",
    icon: <TbBrandPrisma />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "AuthJS",
    icon: <AuthJSIcon />,
  },
  {
    name: "Cypress",
    icon: <SiCypress />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];

type projectProps = {
  name: string;
  description: string;
  image: string;
  stack: string[];
  videoId: string;
  code: string;
  demo: string;
};

const projects: projectProps[] = [
  {
    name: "Rental Property Dashboard",
    description:
      "A simple CRUD (Create, Read, Update, Delete) application for managing rental properties. Features include property listing, tenant management, and financial tracking for rental income and expenses. This app also has an end-to-end testing.",
    image: rentalApp,
    stack: [
      "TypeScript",
      "TailwindCSS",
      "NextJS",
      "PostgreSQL",
      "Prisma",
      "AuthJS",
      "Cypress",
    ],
    videoId: "CXIkbMa5cpU",
    code: "https://github.com/adrian92612/rental-property-app",
    demo: "https://rental-property-app.vercel.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "A basic e-commerce application where users can browse products, add them to their shopping cart, and proceed to checkout. It includes essential features like item quantity updates, dynamic total calculation, and user-friendly cart management.",
    image: shoppingCart,
    stack: ["React", "Vite", "HTML5", "CSS", "JavaScript"],
    videoId: "0Yxno9tfAg0",
    code: "https://github.com/adrian92612/odin-shopping-cart",
    demo: "https://odin-shopping-cart-sigma.vercel.app/",
  },
  {
    name: "Battleship",
    description:
      "A browser-based implementation of the classic Battleship game. Players can set up ships on their grid and take turns guessing their opponent's ship locations. It combines logic, strategy, and basic animation for an interactive experience.",
    image: battleship,
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "G2A8TBR8Q0A",
    code: "https://github.com/adrian92612/battleship-odin",
    demo: "https://battleship-odin-x2y3.vercel.app/#",
  },
  {
    name: "Memory Card Game",
    description:
      "A memory game where players must select each card only once while avoiding duplicate selections. After every selection, the deck is shuffled, making it a challenging test of memory and strategy.",
    image: memoryCard,
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "3ysDjs1w5KI",
    code: "https://github.com/adrian92612/odin-memory-game",
    demo: "https://odin-memory-game-nine.vercel.app/",
  },
  {
    name: "Calculator",
    description:
      "A functional calculator app built to perform basic arithmetic operations. The app focuses on simplicity and ease of use with a clean UI and responsive layout.",
    image: calculator,
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "M-hz1y0IvH4",
    code: "https://github.com/adrian92612/calculator",
    demo: "https://adrian92612.github.io/calculator/",
  },
  {
    name: "Etch-a-Sketch",
    description:
      "A web-based recreation of the classic Etch-a-Sketch toy, allowing users to 'draw' by moving their cursor across a grid. The app includes options to adjust the grid size and clear the canvas for new drawings.",
    image: etchASketch,
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "l5xF0apyMYc",
    code: "https://github.com/adrian92612/etch-a-sketch",
    demo: "https://adrian92612.github.io/etch-a-sketch/",
  },
];

const ProjectsSection = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  const openVideoPlayer = (id: string) => {
    setVideoId(id);
    setShowVideo(true);
  };
  const closeVideoPlayer = () => setShowVideo(false);

  return (
    <section
      className="ml-2 mt-5 sm:ml-[50%] max-w-60 border-y border-textColor2"
      aria-labelledby="projects-heading"
    >
      {showVideo && (
        <PreviewVideo videoId={videoId} closeVideoPlayer={closeVideoPlayer} />
      )}
      <h3
        id="projects-heading"
        className="text-3xl inline-flex items-center gap-2 my-2 animate-fadeInSlideRight"
      >
        / Projects
      </h3>
      <ul>
        {projects.map((project) => (
          <li
            key={project.name}
            className="animate-fadeInSlideUp mb-8 grid gap-2"
          >
            <h4>{project.name}</h4>
            <div>
              <img
                src={project.image}
                alt={`Image of ${project.name}`}
                loading="lazy"
              />
            </div>
            <p className="text-sm">{project.description}</p>
            <div>{project.stack.join(" | ")}</div>
            <div className="flex items-center justify-end gap-1 text-textColor font-bold">
              <button
                onClick={() => openVideoPlayer(project.videoId)}
                className="flex items-center relative video-btn"
                aria-label={`Play video for ${project.name}`}
              >
                Video <IoPlayOutline />
              </button>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center relative"
                aria-label={`View code for ${project.name} (opens in a new tab)`}
              >
                Code
                <MdArrowOutward />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center relative"
                aria-label={`View demo of ${project.name} (opens in a new tab)`}
              >
                Demo
                <MdArrowOutward />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const TechSection = () => {
  return (
    <section
      className="sticky top-[20%] ml-auto sm:ml-[15%] max-w-60 px-5 text-right border-y border-textColor2"
      aria-labelledby="tech-heading"
    >
      <h3
        id="tech-heading"
        className="text-lg mt-2 inline-flex items-center gap-2 animate-fadeInSlideRight "
      >
        <PiCodeLight /> Technologies
      </h3>
      <ul className="my-2 flex flex-col items-end">
        {techStack.map((tech) => (
          <InView key={tech.name} triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <li
                key={tech.name}
                ref={ref}
                className={`${
                  inView ? "animate-fadeInSlideRight" : ""
                } inline-flex items-center gap-1`}
              >
                {tech.name} {tech.icon}
              </li>
            )}
          </InView>
        ))}
      </ul>
    </section>
  );
};

export default function Projects() {
  return (
    <>
      <div className="grid  sm:grid-cols-2 mb-5 gap-5 min-h-full">
        <div className=" border-black ">
          <ProjectsSection />
        </div>
        <div className="border-black">
          <TechSection />
        </div>
      </div>
    </>
  );
}

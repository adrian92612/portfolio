import { MdArrowOutward } from "react-icons/md";
import { PiCodeLight } from "react-icons/pi";
import { InView } from "react-intersection-observer";
import PreviewVideo from "./work-video";
import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";

const techStack = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Typescript",
  "React",
  "NextJS",
  "TailwindCSS",
  "Vite",
  "AuthJS",
  "NodeJS",
  "ExpressJS",
  "Prisma",
  "PostgreSQL",
  "Git",
  "Cypress",
];

type WorkProps = {
  name: string;
  description: string;
  stack: string[];
  videoId: string;
  code: string;
  demo: string;
};

const works: WorkProps[] = [
  {
    name: "Rental Property Dashboard",
    description:
      "A simple CRUD (Create, Read, Update, Delete) application for managing rental properties. Features include property listing, tenant management, and financial tracking for rental income and expenses. This app also has an end-to-end testing.",
    stack: [
      "TypeScript",
      "TailwindCSS",
      "NextJS",
      "PostgreSQL",
      "Prisma",
      "AuthJS",
      "Cypress",
    ],
    videoId: "zXYb1OMhwBA",
    code: "https://github.com/adrian92612/rental-property-app",
    demo: "https://rental-property-app.vercel.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "A basic e-commerce application where users can browse products, add them to their shopping cart, and proceed to checkout. It includes essential features like item quantity updates, dynamic total calculation, and user-friendly cart management.",
    stack: ["React", "Vite", "HTML5", "CSS", "JavaScript"],
    videoId: "-vbraa31zNI",
    code: "https://github.com/adrian92612/odin-shopping-cart",
    demo: "https://odin-shopping-cart-sigma.vercel.app/",
  },
  {
    name: "Battleship",
    description:
      "A browser-based implementation of the classic Battleship game. Players can set up ships on their grid and take turns guessing their opponent's ship locations. It combines logic, strategy, and basic animation for an interactive experience.",
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "zXYb1OMhwBA",
    code: "https://github.com/adrian92612/battleship-odin",
    demo: "https://battleship-odin-x2y3.vercel.app/#",
  },
  {
    name: "Memory Card Game",
    description:
      "A memory game where players must select each card only once while avoiding duplicate selections. After every selection, the deck is shuffled, making it a challenging test of memory and strategy.",
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "zXYb1OMhwBA",
    code: "https://github.com/adrian92612/odin-memory-game",
    demo: "https://odin-memory-game-nine.vercel.app/",
  },
  {
    name: "Calculator",
    description:
      "A functional calculator app built to perform basic arithmetic operations. The app focuses on simplicity and ease of use with a clean UI and responsive layout.",
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "zXYb1OMhwBA",
    code: "https://github.com/adrian92612/calculator",
    demo: "https://adrian92612.github.io/calculator/",
  },
  {
    name: "Etch-a-Sketch",
    description:
      "A web-based recreation of the classic Etch-a-Sketch toy, allowing users to 'draw' by moving their cursor across a grid. The app includes options to adjust the grid size and clear the canvas for new drawings.",
    stack: ["HTML5", "CSS", "JavaScript"],
    videoId: "zXYb1OMhwBA",
    code: "https://github.com/adrian92612/etch-a-sketch",
    demo: "https://adrian92612.github.io/etch-a-sketch/",
  },
];

const WorksSection = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  const openVideoPlayer = (id: string) => {
    setVideoId(id);
    setShowVideo(true);
  };
  const closeVideoPlayer = () => setShowVideo(false);

  return (
    <section className="ml-2 mt-5 sm:ml-[50%] max-w-60 border-y border-textColor2">
      {showVideo && (
        <PreviewVideo videoId={videoId} closeVideoPlayer={closeVideoPlayer} />
      )}
      <h3 className="text-3xl inline-flex items-center gap-2 my-2 animate-fadeInSlideRight">
        / Works
      </h3>
      <ul>
        {works.map((work) => (
          <li key={work.name} className="animate-fadeInSlideUp mb-8 grid gap-2">
            <h4>{work.name}</h4>
            <p className="text-sm">{work.description}</p>
            <div>{work.stack.join(" | ")}</div>
            <div className="flex items-center justify-end gap-1 text-textColor font-bold">
              <button
                onClick={() => openVideoPlayer(work.videoId)}
                className="flex items-center relative video-btn"
              >
                Video <IoPlayOutline />
              </button>
              <a
                href={work.code}
                target="_blank"
                className="inline-flex items-center relative"
              >
                Code
                <MdArrowOutward />
              </a>
              <a
                href={work.demo}
                target="_blank"
                className="inline-flex items-center relative"
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
    <section className="sm:fixed sm:ml-[10%] ml-auto mr-2 mt-[10%] max-w-60 px-5 text-right border-y border-textColor2 ">
      <h3 className="text-lg mt-2 inline-flex items-center gap-2 animate-fadeInSlideRight ">
        <PiCodeLight /> Technologies
      </h3>
      <ul className="my-2">
        {techStack.map((tech) => (
          <InView key={tech} triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <li
                key={tech}
                ref={ref}
                className={`${inView ? "animate-fadeInSlideRight" : ""}`}
              >
                {tech}
              </li>
            )}
          </InView>
        ))}
      </ul>
    </section>
  );
};

export default function Works() {
  return (
    <>
      <div className="grid  sm:grid-cols-2 mb-5 gap-5 min-h-full">
        <div className=" border-black ">
          <WorksSection />
        </div>
        <div className="border-black">
          <TechSection />
        </div>
      </div>
    </>
  );
}

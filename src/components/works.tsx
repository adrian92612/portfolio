import { MdArrowOutward } from "react-icons/md";
import { PiCodeLight } from "react-icons/pi";

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
];

type WorkProps = {
  name: string;
  description: string;
  stack: string[];
  code: string;
  demo: string;
};

const works: WorkProps[] = [
  {
    name: "Rental Property Dashboard",
    description:
      "A simple CRUD (Create, Read, Update, Delete) application for managing rental properties. This tool allows landlords to manage properties, tenants, and rental payments efficiently. Features include property listing, tenant management, and financial tracking for rental income and expenses.",
    stack: [
      "TypeScript",
      "TailwindCSS",
      "NextJS",
      "PostgreSQL",
      "Prisma",
      "AuthJS",
    ],
    code: "https://github.com/adrian92612/rental-property-app",
    demo: "https://rental-property-app.vercel.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "A basic e-commerce application where users can browse products, add them to their shopping cart, and proceed to checkout. It includes essential features like item quantity updates, dynamic total calculation, and user-friendly cart management.",
    stack: ["React", "Vite", "HTML5", "CSS", "JavaScript"],
    code: "https://github.com/adrian92612/odin-shopping-cart",
    demo: "https://odin-shopping-cart-sigma.vercel.app/",
  },
  {
    name: "Battleship",
    description:
      "A browser-based implementation of the classic Battleship game. Players can set up ships on their grid and take turns guessing their opponent's ship locations. It combines logic, strategy, and basic animation for an interactive experience.",
    stack: ["HTML5", "CSS", "JavaScript"],
    code: "https://github.com/adrian92612/battleship-odin",
    demo: "https://battleship-odin-x2y3.vercel.app/#",
  },
  {
    name: "Memory Card Game",
    description:
      "A memory game where players must select each card only once while avoiding duplicate selections. After every selection, the deck is shuffled, making it a challenging test of memory and strategy.",
    stack: ["HTML5", "CSS", "JavaScript"],
    code: "https://github.com/adrian92612/odin-memory-game",
    demo: "https://odin-memory-game-nine.vercel.app/",
  },
  {
    name: "Calculator",
    description:
      "A functional calculator app built to perform basic arithmetic operations. The app focuses on simplicity and ease of use with a clean UI and responsive layout.",
    stack: ["HTML5", "CSS", "JavaScript"],
    code: "https://github.com/adrian92612/calculator",
    demo: "https://adrian92612.github.io/calculator/",
  },
  {
    name: "Etch-a-Sketch",
    description:
      "A web-based recreation of the classic Etch-a-Sketch toy, allowing users to 'draw' by moving their cursor across a grid. The app includes options to adjust the grid size and clear the canvas for new drawings.",
    stack: ["HTML5", "CSS", "JavaScript"],
    code: "https://github.com/adrian92612/etch-a-sketch",
    demo: "https://adrian92612.github.io/etch-a-sketch/",
  },
];

export default function Works() {
  return (
    <>
      <div className="grid  md:grid-cols-2 mb-5 gap-5">
        <div className=" relative overflow-y-auto border-black">
          <div className="absolute top-[15%] right-1/4 max-w-60 border-y border-textColor2">
            <h3 className="text-xl inline-flex items-center gap-2 mt-2">
              / Works
            </h3>
            <ul>
              {works.map((work) => (
                <li key={work.name}>
                  <h4>{work.name}</h4>
                  <p className="text-sm mb-2">{work.description}</p>
                  <div>{work.stack.join(" | ")}</div>
                  <div className="flex items-center justify-end gap-2 my-4">
                    <a
                      href={work.code}
                      target="_blank"
                      className="inline-flex items-center"
                    >
                      Code
                      <MdArrowOutward />
                    </a>
                    <a
                      href={work.demo}
                      target="_blank"
                      className="inline-flex items-center"
                    >
                      Demo
                      <MdArrowOutward />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" border-black relative overflow-y-auto">
          <div className="absolute top-1/4 left-1/3 max-w-60 px-5 text-right border-y border-textColor2">
            <h3 className="text-lg inline-flex items-center gap-2">
              <PiCodeLight /> Technologies
            </h3>
            <ul className="mb-2">
              {techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

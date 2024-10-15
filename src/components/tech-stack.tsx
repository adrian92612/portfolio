import { PiCodeLight } from "react-icons/pi";
import { InView } from "react-intersection-observer";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line, RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandPrisma, TbBrandTypescript, TbBrandVite } from "react-icons/tb";
import { SiCypress, SiExpress, SiPostgresql } from "react-icons/si";
import { AuthJSIcon } from "./svgs";

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

export function TechStackSection() {
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
}

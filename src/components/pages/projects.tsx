import { ProjectsSection } from "../projects-section";
import { TechStackSection } from "../tech-stack";

export default function Projects() {
  return (
    <>
      <div className="grid  sm:grid-cols-2 mb-5 gap-5 min-h-full">
        <div className="">
          <ProjectsSection />
        </div>
        <div className="">
          <TechStackSection />
        </div>
      </div>
    </>
  );
}

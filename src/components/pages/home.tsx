import profilePic from "../../assets/pic.jpeg";

const ImageCard = () => {
  return (
    <div className="flex items-center justify-center sm:pr-5 sm:justify-end w-full h-full">
      <div className="border p-5 border-white bg-white shadow-lg shadow-slate-600 rotate-2 rounded-sm hover:scale-110 hover:-rotate-1 hover:z-[5] transform duration-500">
        <div className="w-52 mb-5 animate-fadeInSlow">
          <img
            src={profilePic}
            alt="Picture of myself"
            className="grayscale-[20%] hover:grayscale-0 rounded-sm"
          />
        </div>
        <p className="text-center text-xs animate-fadeInSlideRight">
          @ Mt. Pulag
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section
      className="h-full grid sm:grid-cols-2 gap-10 pt-10"
      aria-label="About Me Section"
    >
      <ImageCard />
      <div className="animate-fadeIn flex items-center pl-5 h-full w-full">
        <div className="max-w-64">
          <h1 className="text-3xl mb-2">/ About Me</h1>
          <p>
            Hey, I’m Adrian — a software engineer who enjoys building clean,
            fast, and responsive web interfaces. I work mainly with TypeScript,
            Next.js, and modern frontend tools to craft smooth user experiences.
            Right now, I’m working as a Junior Software Engineer, building
            real-world frontend features and collaborating with a team. Before
            that, I focused on personal projects, learning by doing and leveling
            up my skills along the way. Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
}

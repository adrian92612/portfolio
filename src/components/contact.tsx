import { AiOutlineMail } from "react-icons/ai";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

const socials = [
  {
    link: "https://github.com/adrian92612",
    name: "Github",
    icon: <FiGithub />,
  },
  {
    link: "https://www.linkedin.com/in/adrian-villamin-831817236/",
    name: "LinkedIn",
    icon: <RiLinkedinLine />,
  },
  {
    link: "https://www.instagram.com/advil120692/",
    name: "Instagram",
    icon: <CiInstagram />,
  },
];

export default function Contact() {
  return (
    <section className="flex border-black h-full items-center">
      <div className="max-w-64 ml-5 md:ml-[50%] mt-10">
        <h2 className="text-3xl mb-2">/ Contact</h2>

        <div>
          <p className="inline-flex items-center gap-1">
            <CiLocationOn /> Manila, Philippines
          </p>
          <h3>Interested in working together?</h3>
          <p>Feel free to send me an email or DM me on my socials</p>
          <ul className="my-5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 relative"
                >
                  {social.name} {social.icon}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-end gap-5">
            <li>
              <a
                href="mailto:adrianvillamin0612@gmail.com"
                className="inline-flex items-center gap-1 relative"
              >
                Email <AiOutlineMail />
              </a>
            </li>
            <li>
              <a href="" className="inline-flex items-center gap-1 relative">
                Resume <IoDocumentTextOutline />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

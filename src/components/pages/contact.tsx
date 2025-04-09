import { AiOutlineMail } from "react-icons/ai";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

const resumeLink =
  "https://drive.google.com/file/d/1oxJYVrJ-aTYYe3dYsGn7j2zN9mNNMvFT/view?usp=sharing";

const emailAddress = "adrvil.code@gmail.com";

const socials = [
  {
    link: "https://github.com/adrian92612",
    name: "Github",
    icon: <FiGithub aria-hidden="true" />,
  },
  {
    link: "https://www.linkedin.com/in/adrian-villamin-831817236/",
    name: "LinkedIn",
    icon: <RiLinkedinLine aria-hidden="true" />,
  },
  {
    link: "https://www.instagram.com/adrvil126/",
    name: "Instagram",
    icon: <CiInstagram aria-hidden="true" />,
  },
];

export default function Contact() {
  return (
    <section
      className="flex border-black h-full items-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-64 ml-5 md:ml-[50%] mt-10 animate-fadeIn">
        <h2 id="contact-heading" className="text-3xl mb-2">
          / Contact
        </h2>

        <div>
          <p className="inline-flex items-center gap-1">
            <CiLocationOn aria-hidden="true" /> Manila, Philippines
          </p>
          <h3 className="text-lg">Let&apos;s work together!</h3>
          <p>
            Have a project idea? Feel free to send me an email or DM me on my
            socials
          </p>
          <ul className="my-5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 relative"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  {social.name} {social.icon}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-end gap-5">
            <li>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-1 relative"
                aria-label="Send me an email"
              >
                Email <AiOutlineMail aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 relative"
                aria-label="View my resume"
              >
                Resume <IoDocumentTextOutline aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

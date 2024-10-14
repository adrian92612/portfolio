import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="h-16 sticky text-lg top-0 px-5 flex items-center justify-between bg-bgColor z-[1]"
      aria-label="Main Navigation"
    >
      <h1>
        <NavLink to="/" className="hover:underline">
          Adrian Villamin
        </NavLink>
      </h1>

      <nav className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : ""
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : "text-textColor2"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

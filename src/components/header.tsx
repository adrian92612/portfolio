import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 sticky text-lg top-0 px-5 flex items-center justify-between bg-bgColor z-[1]">
      <h1>Adrian Villamin</h1>

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
          to="/works"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : ""
          }
        >
          Works
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

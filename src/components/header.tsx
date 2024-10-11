import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 fixed text-lg top-0 px-2 flex items-center justify-between w-full">
      <h1>Adrian Villamin</h1>

      <nav className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : "text-textColor2"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "underline text-textColor" : "text-textColor2"
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

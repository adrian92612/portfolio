import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Layout() {
  return (
    <>
      <div className="grainy-overlay"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="flex items-center justify-end p-2">
        <p>©️ 2024 All Rights Reserved.</p>
      </footer>
    </>
  );
}

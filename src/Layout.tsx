import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="grid min-h-screen">
        <Outlet />
      </main>
      <footer className="flex items-center justify-end p-2">
        <p>©️ 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

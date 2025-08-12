// src/layouts/PortfolioLayout.jsx
import Sidebar from "../components/Home/Sidebar";
import { Outlet } from "react-router";

export default function PortfolioLayout() {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle for mobile */}
      <input id="portfolio-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile navbar */}
        <div className="w-full navbar bg-base-100 px-4 lg:hidden shadow-md">
          <label htmlFor="portfolio-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <span className="ml-2 font-bold text-lg">Portfolio</span>
        </div>

        <main className="p-4">
          <Outlet />
        </main>
      </div>

      {/* Sidebar (mobile & desktop) */}
      <div className="drawer-side">
        <label htmlFor="portfolio-drawer" className="drawer-overlay"></label>
        <div className="w-80 bg-base-200 min-h-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#BAC095] p-4 shadow-lg sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-[#3D4127]">
          Bookavida
        </NavLink>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#3D4127] font-semibold border-b-2 border-[#636B2F]"
                : "text-[#3D4127] hover:text-[#636B2F] transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-[#3D4127] font-semibold border-b-2 border-[#636B2F]"
                : "text-[#3D4127] hover:text-[#636B2F] transition-colors"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              isActive
                ? "text-[#3D4127] font-semibold border-b-2 border-[#636B2F]"
                : "text-[#3D4127] hover:text-[#636B2F] transition-colors"
            }
          >
            Recommendations
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
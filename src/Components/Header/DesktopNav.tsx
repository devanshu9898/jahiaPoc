"use client";

import { HEADER_MENU } from "../../constants/headerData";
// import { HEADER_MENU } from "@/constants/headerData";
import MegaMenu from "./MegaMenu";
import { ChevronDown, Search } from "lucide-react";

export default function DesktopNav({
  openMenu,
  setOpenMenu,
  searchOpen,
  setSearchOpen,
}: any) {
  return (
    <div className="hidden lg:block relative ">
      <div className="flex items-center justify-between px-21 py-4 border-b border-gray-200 shadow-md text-[#22272D]">
        {/* Nav */}
        <nav className="flex gap-12 items-center ">
          {/* Logo */}
          <div className="text-2xl font-bold text-teal-600">Medica.</div>
          {HEADER_MENU.map((item) => (
            <button
              key={item.key}
              onClick={() =>
                setOpenMenu(openMenu === item.key ? null : item.key)
              }
              className="flex items-center gap-1"
            >
              {item.label}
              <ChevronDown size={16} />
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-10 h-10 rounded-full bg-[#F8F3F2] flex items-center justify-center hover:bg-gray-200 transition"
          >
            <Search size={18} />
          </button>

          <button className="text-[#22272D]">Contact us</button>

          <button className="bg-pink-600 text-white px-5 py-2 rounded-full">
            Sign in
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {HEADER_MENU.map(
        (item) =>
          openMenu === item.key && <MegaMenu key={item.key} data={item} />,
      )}
    </div>
  );
}

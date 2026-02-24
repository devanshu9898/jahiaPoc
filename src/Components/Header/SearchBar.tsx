"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ setSearchOpen }: any) {
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchOpen]);

  return (
    <div className="absolute left-0 w-full bg-gray-50 px-10 py-6 shadow-md z-50">
      <div ref={ref} className="relative max-w-5xl mx-auto flex w-full">
        <div className="flex w-full items-center border rounded-full px-5 py-3 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search"
            autoFocus
            className="flex-1 outline-none text-gray-700"
          />
          <Search className="text-gray-400 mr-3" size={20} />
        </div>
        <button
          onClick={() => setSearchOpen(false)}
          className="ml-3 text-gray-400 hover:text-black"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">
      <TopBar />

      <DesktopNav
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      <MobileNav
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {searchOpen && (
        <SearchBar setSearchOpen={setSearchOpen} />
      )}
    </header>
  );
}
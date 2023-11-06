"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";
import { NavLinks } from "./NavLinks";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  return (
    <div className="flex items-center justify-between fixed bg-blue text-lightGray left-0 top-0 w-full p-5 md:px-20 md:py-10">
      {/* Company's Logo */}
      <div className="flex-1 font-medium cursor-pointer">Trust Capital</div>

      {/* The Navigation Links */}

      <div className="flex justify-end flex-1 space-x-4 max-md:hidden">
        <NavLinks />
      </div>

      {/* The Hamburger Icon */}
      <div onClick={() => setNavClick(!navClick)}>
        <Bars3Icon className="h-6 w-6 md:hidden cursor-pointer" />
      </div>

      {/* The Popup SideNav when the hamburger Icon gets clicked on. */}
      <SideNav clicked={navClick} setClicked={setNavClick} />
    </div>
  );
};

export default NavBar;

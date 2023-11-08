"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";
import { NavLinks } from "./NavLinks";
import Link from "next/link";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  return (
    <div
      className="flex max-md:items-center justify-between fixed text-lightGray left-0 right-0 top-0 w-full h-16 px-5 md:h-16
      border-b border-b-gold 
    "
    >
      {/* Company's Logo */}
      <div className=" flex items-center font-medium cursor-pointer max-md:flex-1 pr-10 w-auto relative">
        <Link href="/">Trust Capital</Link>
        <div className=" max-md:hidden absolute top-0 right-0 w-[1px] bg-gold h-full" />
      </div>

      {/* The Navigation Links */}

      <div className="flex items-center justify-end flex-1 space-x-4 max-md:hidden">
        <NavLinks />
      </div>

      {/* The Hamburger Icon only shows on Mobile Devices */}
      <div onClick={() => setNavClick(!navClick)}>
        <Bars3Icon className="h-6 w-6 md:hidden cursor-pointer" />
      </div>

      {/* The Popup the SideNav when the hamburger Icon gets clicked on. */}
      <SideNav clicked={navClick} setClicked={setNavClick} />
    </div>
  );
};

export default NavBar;

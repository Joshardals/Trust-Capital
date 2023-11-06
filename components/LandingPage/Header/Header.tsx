"use client";
import { NavLinks } from "./NavLinks";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navClick, setNavClick] = useState(false);
  return (
    <main className="h-screen w-full md:py-10 p-5 md:px-20">
      <div className="flex items-center justify-between  w-full">
        {/* Company's Logo */}
        <div className="flex-1 font-medium cursor-pointer">Trust Capital</div>

        {/* The Navigation Links */}

        <div className="flex justify-end flex-1 space-x-4 max-md:hidden">
          <NavLinks />
        </div>

        {/* The Hamburger Icon */}
        <div onClick={() => setNavClick(!navClick)}>
          <Bars3Icon className="h-6 w-6 text-darkGray md:hidden cursor-pointer" />
        </div>

        {/* The Popup SideNav when the hamburger Icon gets clicked on. */}
        <SideNav clicked={navClick} setClicked={setNavClick} />
      </div>

      <div className=" mt-32 flex justify-between">
        <div className="flex-1 bg-green">Hey</div>
        <div className="flex-1">
          <Image
            src="/header-img.png"
            alt="header image"
            width={600}
            height={200}
            className=""
          />
        </div>
      </div>
    </main>
  );
};

export default Header;

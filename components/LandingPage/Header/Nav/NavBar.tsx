"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import Login from "../Buttons/Login";
import SignUp from "../Buttons/SignUp";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  return (
    <div
      className="flex max-md:items-center justify-between fixed text-lightGray left-0 right-0 top-0 w-full h-16 px-5 md:h-16
      border-b border-b-gold
    "
    >
      <div className="flex max-md:flex-1 w-auto space-x-8">
        {/* Company's Logo */}
        <div className=" flex items-center font-medium max-md:flex-1 pr-10 w-auto relative">
          <Link href="/">Trust Capital</Link>
          <div className=" max-md:hidden absolute top-0 right-0 w-[1px] bg-gold h-full" />
        </div>

        {/* The Navigation Links */}

        <div className="flex items-center justify-end  space-x-8 max-md:hidden">
          <NavLinks />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end space-x-4 font-sans font-semibold text-xs">
        {/* Login Button */}
        <Login />

        {/* Sign Up Button */}
        <SignUp />
      </div>

      <div className="md:hidden cursor-pointer text-lightGray">
        {/* The Hamburger and X Icon only shows on Mobile Devices */}
        {navClick ? (
          <div onClick={() => setNavClick(!navClick)}>
            <XMarkIcon className="h-6 w-6 " />
          </div>
        ) : (
          <div onClick={() => setNavClick(!navClick)}>
            <Bars3Icon className="h-6 w-6" />
          </div>
        )}
      </div>

      {/* The Popup the SideNav when the hamburger Icon gets clicked on. */}
      <SideNav clicked={navClick} setClicked={setNavClick} />
    </div>
  );
};

export default NavBar;

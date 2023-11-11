"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import Login from "../Buttons/Login";
import SignUp from "../Buttons/SignUp";
import { useNavStore } from "@/lib/store/store";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  const { navBar, setNavBar } = useNavStore();
  return (
    <div
      className="flex max-md:items-center justify-between fixed text-lightGray left-0 right-0 top-0 w-full h-16 px-5 md:h-16
      border-b border-b-babyblue bg-navyblue
    "
    >
      <div className="flex text-purewhite max-md:flex-1 w-full md:w-auto space-x-8">
        {/* Company's Logo */}
        <div className=" flex items-center text-md md:text-lg max-md:flex-1 pr-10 w-auto relative">
          <Link href="/" className="">
            TrustCapital
          </Link>
          <div className="max-md:hidden absolute top-0 right-0 border-r border-r-gold h-full" />
        </div>

        {/* The Navigation Links */}

        <div className="flex items-center justify-end  space-x-8 max-md:hidden">
          <NavLinks />
        </div>
      </div>

      <div className="flex w-full md:flex-1 md:w-full items-center space-x-5">
        <div className="flex flex-1 items-center justify-end md:space-x-4 font-sans font-semibold text-xs">
          {/* Login Button */}
          <Login />

          {/* Sign Up Button */}
          <SignUp />
        </div>

        <div className="md:hidden cursor-pointer text-purewhite">
          {/* The Hamburger and X Icon only shows on Mobile Devices */}
          {navClick ? (
            <div onClick={setNavBar}>
              <XMarkIcon className="h-8 w-8 max-xs:h-8" />
            </div>
          ) : (
            <div onClick={setNavBar}>
              <Bars3Icon className="h-8 w-8 max-xs:h-8" />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default NavBar;

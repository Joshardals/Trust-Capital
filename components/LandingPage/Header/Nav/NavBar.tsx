"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import Login from "../Buttons/Login";
import SignUp from "../Buttons/SignUp";
import { useNavStore } from "@/lib/store/store";
import SideNav from "./SideNav";
import clsx from "clsx";

const NavBar = () => {
  const { navBar, setNavBar } = useNavStore();

  return (
    <div className="relative">
      <div
        className={clsx(
          `flex max-md:items-center justify-between fixed left-0 right-0 top-0 w-full h-16 md:h-16
      px-5 lg:px-10 transition-all duration-300 bg-navyblue z-30 select-none`,
          {}
        )}
      >
        <div className="flex text-pureblack max-md:flex-1 w-full md:w-auto space-x-8">
          {/* Company's Logo */}
          <div className=" flex items-center text-md md:text-lg max-md:flex-1 pr-10 w-auto relative text-babyblue">
            <Link href="/" className="w-full flex">
              Trust <span>-</span>Capital
            </Link>
            {/* <div className="max-md:hidden absolute top-0 right-0 border-r border-r-gold h-full" /> */}
          </div>

          {/* The Navigation Links */}

          <div className="flex items-center justify-end  space-x-8 max-md:hidden">
            <NavLinks />
          </div>
        </div>

        <div className="flex w-full md:flex-1 md:w-full items-center">
          <div className="flex flex-1 items-center justify-end md:space-x-4 font-sans font-semibold text-xs">
            {/* Login Button */}
            <Login />

            {/* Sign Up Button */}
            <SignUp />
          </div>

          <div className="md:hidden cursor-pointer text-babyblue">
            {/* The Hamburger and X Icon only shows on Mobile Devices */}
            {navBar ? (
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
      {/* The Popup the SideNav when the hamburger Icon gets clicked on. */}
      <SideNav />
    </div>
  );
};

export default NavBar;

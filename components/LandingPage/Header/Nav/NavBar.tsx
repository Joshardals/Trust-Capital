"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import Login from "../Buttons/Login";
import { useNavStore } from "@/lib/store/store";
import SideNav from "./SideNav";
import Image from "next/image";
import { auth } from "@/firebase";
import SignUp from "../Buttons/SignUp";
// import { googleTranslateElementInit } from "@/lib/googleTranslate";
import GoogleTrans from "@/components/dashboard/content/GoogleTrans";

const NavBar = () => {
  const { navBar, setNavBar } = useNavStore();
  return (
    <div className="relative max-md:mt-10 mt-12">
      <div className="flex max-md:items-center justify-between fixed left-0 right-0 top-0 bottom-0 w-full h-28 px-5 lg:px-10 bg-navyblue z-30 select-none">
        <div className="flex  max-md:flex-1 w-full md:w-auto space-x-8">
          {/* Company's Logo */}
          <Link
            href="/"
            className=" flex items-center space-x-1 md:space-x-2 text-md md:text-lg max-md:flex-1 pr-10 w-auto relative text-babyblue font-serif"
          >
            <Image alt="Logo" src="/logo.png" width={30} height={30} />
            <p className="w-full flex font-bold">
              Trust <span>-</span>Capital
            </p>
            {/* <div className="max-md:hidden absolute top-0 right-0 border-r border-r-gold h-full" /> */}
          </Link>

          {/* The Navigation Links */}

          <div className="flex items-center justify-end  space-x-8 max-md:hidden">
            <NavLinks />
          </div>
        </div>

        <div className="flex w-full md:flex-1 md:w-full items-center space-x-2">
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

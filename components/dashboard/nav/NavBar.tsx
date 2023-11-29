"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useNavStore, usesideBarStore } from "@/lib/store/store";
import SideNav from "./SideNav";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const { sideBar, setSideBar } = usesideBarStore();

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-3 items-center fixed left-0 right-0 top-0 bottom-0 w-full h-16 px-5 bg-navyblue z-10 select-none
     border-b border-b-goldenrod`}
      >
        <div className="flex flex-1 w-full items-center">
          <div className="md:hidden cursor-pointer text-babyblue">
            {/* The Hamburger and X Icon only shows on Mobile Devices */}
            {sideBar ? null : (
              <div onClick={setSideBar}>
                <Bars3Icon className="h-8 w-8" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row col-span-2 justify-end">
          <Link
            href="/"
            className=" flex items-center space-x-1 md:space-x-2 text-md w-auto relative text-babyblue"
          >
            <Image alt="Logo" src="/logo.png" width={35} height={35} />
            <p className="w-full flex font-bold text-center">
              Trust <span>-</span>Capital
            </p>
            {/* <div className="max-md:hidden absolute top-0 right-0 border-r border-r-gold h-full" /> */}
          </Link>
        </div>
      </div>
      {/* The Popup the SideNav when the hamburger Icon gets clicked on. */}
      <SideNav />
    </div>
  );
};

export default NavBar;
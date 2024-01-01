"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useNavStore, usesideBarStore } from "@/lib/store/store";
import SideNav from "./SideNav";
import Image from "next/image";
import { useState } from "react";
import { auth } from "@/firebase";
import GoogleTrans from "../content/GoogleTrans";

const NavBar = () => {
  const { sideBar, setSideBar } = usesideBarStore();
  // auth.onAuthStateChanged((user) => {
  //   console.log(user);
  // })

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-5 items-center relative left-0 right-0 top-0 bottom-0 w-full h-16 px-5 bg-navyblue z-20 select-none
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

        <div>
          <GoogleTrans />
        </div>

        <div className="flex flex-row justify-end space-x-4 col-span-3">
          <Link
            href="/dashboard"
            className=" flex items-center font-serif font-bold space-x-1 md:space-x-2 text-md w-auto relative text-babyblue"
          >
            <Image alt="Logo" src="/logo.png" width={35} height={35} />
            <p className="w-full flex font-bold text-center">
              Trust <span>-</span>Capital
            </p>
          </Link>
        </div>

        {/* <GoogleTrans /> */}
      </div>
      {/* The Popup the SideNav when the hamburger Icon gets clicked on. */}
      <SideNav />
    </div>
  );
};

export default NavBar;

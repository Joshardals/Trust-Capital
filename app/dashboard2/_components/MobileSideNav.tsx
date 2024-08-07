"use client";
import React from "react";
import { SidebarLinks } from "./nav-links2";
import { usesideBarStore } from "@/lib/store/store";
import { XMarkIcon } from "@heroicons/react/20/solid";

const MobileSideNav = () => {
  const { sideBar, setSideBar } = usesideBarStore();
  return (
    <div className="md:hidden">
      <div
        className={`absolute top-0 ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } overflow-auto z-30 left-0 w-72 transition-all duration-300 bg-navyblue h-full text-babyblue font-sans
        p-5
    `}
      >
        <div className="space-y-6">
          <div onClick={setSideBar} className=" w-8">
            <XMarkIcon className="h-8 w-8" />
          </div>
          <div className="space-y-4 relative mt-5">
            <SidebarLinks />
          </div>
        </div>
      </div>

      {sideBar && (
        <div
          className=" bg-pureblack bg-opacity-40 h-screen w-full fixed top-0 transition-all duration-500 ease-in z-20"
          onClick={setSideBar}
        />
      )}
    </div>
  );
};

export default MobileSideNav;

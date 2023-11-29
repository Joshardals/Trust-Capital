"use client";
import React from "react";
import { SidebarLinks } from "./nav-links";
import { usesideBarStore } from "@/lib/store/store";
import { XMarkIcon } from "@heroicons/react/20/solid";

const MobileSideNav = () => {
  const { sideBar, setSideBar } = usesideBarStore();
  return (
    <div>
      <div
        className={`fixed ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } z-30 left-0 w-55 transition-all duration-300 bg-navyblue h-screen text-babyblue font-sans
        p-5
    `}
      >
        <div className="space-y-6">
          <div onClick={setSideBar}>
            <XMarkIcon className="h-7 w-7" />
          </div>
          <div className="space-y-4 relative mt-5">
            <SidebarLinks />
          </div>
        </div>
      </div>

      {sideBar && (
        <div
          className="bg-pureblack bg-opacity-40 h-screen w-full fixed top-0 transition-all duration-500 ease-in"
          onClick={setSideBar}
        />
      )}
    </div>
  );
};

export default MobileSideNav;

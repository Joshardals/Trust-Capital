import { SideBar } from "./NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";
import { useState, useEffect } from "react";

const SideNav = () => {
  const { navBar, setNavBar } = useNavStore();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let timer: any;

    if (navBar) {
      // Show the overlay after a delay (e.g., 300 milliseconds)
      timer = setTimeout(() => {
        setShowOverlay(true);
      }, 300);
    } else {
      // Hide the overlay immediately when navBar is false
      setShowOverlay(false);
    }

    return () => clearTimeout(timer); // Clear the timer on component unmount or when navBar changes
  }, [navBar]);

  return (
    <div className="md:hidden">
      <div className="w-full fixed z-20 md:hidden -mt-4">
        <div
          className={clsx(
            "py-4 w-full text-babyblue bg-navyblue transition-all duration-300 ease-in-out",
            { "translate-x-0": navBar, "translate-x-full": !navBar }
          )}
        >
          <div className="w-full space-y-6 px-5 h-full">
            {/* Contains the Navigation Links */}
            <SideBar />
          </div>
        </div>
      </div>

      {showOverlay && (
        <div
          className="bg-pureblack bg-opacity-40 h-screen w-full fixed top-0 z-10 transition-all duration-500 ease-in"
          onClick={setNavBar}
        />
      )}
    </div>
  );
};

export default SideNav;

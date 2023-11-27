import { SideBar } from "./NavLinks";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";
import clsx from "clsx";

const SideNav = () => {
  const { navBar, setNavBar } = useNavStore();

  return (
    <div className="md:hidden">
      <div className="w-full fixed z-20 md:hidden -mt-4">
        {navBar && (
          <div className="py-4 w-full text-babyblue bg-navyblue transition-all duration-300 ease-in-out">
            <div className="w-full space-y-6 px-5 h-full">
              {/* Contains the Navigation Links */}
              <SideBar />
            </div>
          </div>
        )}
      </div>

      {navBar && (
        <div
          className="bg-pureblack bg-opacity-40 h-screen w-full fixed top-0 z-10 transition-all duration-500 ease-in"
          onClick={setNavBar}
        />
      )}
    </div>
  );
};

export default SideNav;

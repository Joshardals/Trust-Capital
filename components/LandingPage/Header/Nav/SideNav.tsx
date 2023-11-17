import { SideBar } from "./NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";

const SideNav = () => {
  const { navBar, setNavBar } = useNavStore();

  return (
    <div className="md:hidden">
      <div className={clsx(` w-full h-auto absolute z-20 md:hidden`, {})}>
        {navBar && (
          <div className=" h-auto py-8 bg-navyblue w-full text-babyblue transition-all duration-300 ease-in-out">
            <div className="mt-4 w-full space-y-6 px-5 h-full">
              {/* Contains the Navigation Links */}
              <SideBar />
            </div>
          </div>
        )}
      </div>

      {navBar && (
        <div
          className="bg-pureblack bg-opacity-40 h-screen w-full absolute top-0 z-10"
          onClick={setNavBar}
        />
      )}
    </div>
  );
};

export default SideNav;

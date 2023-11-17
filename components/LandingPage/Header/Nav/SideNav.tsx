import { SideBar } from "./NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";

const SideNav = () => {
  const { navBar } = useNavStore();

  return (
    <div
      className={clsx(`overflow-hidden w-full h-screen absolute z-20 `, {
        "bg-pureblack bg-opacity-20": navBar,
      })}
    >
      {navBar && (
        <div className=" h-auto bg-navyblue w-full md:hidden text-babyblue transition-all duration-300 ease-in-out">
          <div className="mt-4 w-full space-y-4 px-5 h-full">
            {/* Contains the Navigation Links */}
            <SideBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;

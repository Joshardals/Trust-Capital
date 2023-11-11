import { SideBar } from "./NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";

const SideNav = () => {
  const { navBar, setNavBar } = useNavStore();

  return (
    <div className="overflow-hidden h-full">
      <div
        className={clsx(
          `fixed bg-navyblue left-0 h-full -bottom-16 w-full md:hidden text-lightGray transition-all duration-300 ease-in-out`,
          {
            block: navBar,
            hidden: !navBar,
          }
        )}
      >
        <div className="mt-8 w-full space-y-4 px-5 h-full">
          {/* Contains the Navigation Links */}
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

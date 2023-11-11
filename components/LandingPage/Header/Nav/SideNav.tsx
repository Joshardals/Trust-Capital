import { SideBar } from "./NavLinks";
import clsx from "clsx";
import Link from "next/link";
import { useNavStore } from "@/lib/store/store";

const SideNav = () => {
  const { navBar, setNavBar } = useNavStore();

  return (
    <div className="h-full overflow-hidden">
      <div
        className={clsx(
          `fixed -bottom-16 left-0 h-screen bg-navyblue w-full md:hidden text-lightGray transition-all duration-300 ease-in-out`,
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

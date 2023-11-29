import Image from "next/image";
import Link from "next/link";
import { SidebarLinks } from "./nav-links";

const SideNav = () => {
  return (
    <div>
      <div
        className=" max-md:hidden fixed left-0 top-0 bottom-0 bg-navyblue max-md:px-2 max-md:py-4 md:p-5 text-babyblue 
        h-full md:w-80 font-sans space-y-10"
      >
        <Link
          href="/dashboard"
          className="flex items-center space-x-1 md:space-x-2 max-md:justify-center"
        >
          <Image alt="Logo" src="/logo.png" width={30} height={30} />
          <p className=" font-serif text-md md:text-lg font-bold max-w-[9rem] max-md:hidden">
            Trust-Capital
          </p>
        </Link>

        <div className="space-y-4 relative">
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

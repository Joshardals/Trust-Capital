import { NavLinks } from "./NavLinks";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <main className="h-screen w-full md:py-10 p-5 md:px-20 bg-blue text-lightGray">
      <div className="flex items-center justify-between  w-full">
        {/* Company Logo */}
        <div className="flex-1 font-medium">Trust Capital</div>

        {/* The Navigation Links */}

        <div className="flex justify-end flex-1 space-x-4 max-md:hidden">
          <NavLinks />
        </div>

        {/* The Hamburger Icon */}
        <div>
          <Bars3Icon className="h-6 w-6 text-lightGray md:hidden cursor-pointer" />
        </div>

        {/* The Popup SideNav when the hamburger Icon gets clicked on. */}
        <SideNav />
      </div>
    </main>
  );
};

export default Header;

import { SideBar } from "./NavLinks";
import clsx from "clsx";
import { NavTypings } from "@/lib/typings";
import Link from "next/link";

const SideNav = ({ clicked, setClicked }: NavTypings) => {
  // This function closes the sidebar when the gray background gets clicked
  function handleClick() {
    if (clicked) {
      setClicked(!clicked);
    }
    return false;
  }

  return (
    <div className="h-full overflow-hidden">
      <div
        className={clsx(
          `fixed -bottom-16 left-0 h-full bg-green w-full md:hidden text-lightGray transition-all duration-300 ease-in-out`,
          {
            block: clicked,
            hidden: !clicked,
          }
        )}
      >
        <div className="mt-10 w-full px-4 space-y-4 h-full">
          {/* Contains the Navigation Links */}
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

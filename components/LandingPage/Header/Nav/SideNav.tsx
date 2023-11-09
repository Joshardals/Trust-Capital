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
          `fixed bottom-0 left-0 h-[89.5%] w-full md:hidden bg-blue text-lightGray transition-all duration-300 ease-in-out`,
          {
            "translate-x-0 overflow-y-auto": clicked,
            "-translate-x-full overflow-y-hidden": !clicked,
          }
        )}
      >
        <div className="mt-10 w-full bg-green">
          {/* Contains the Navigation Links */}
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

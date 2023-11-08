import { XMarkIcon } from "@heroicons/react/24/solid";
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
          `fixed top-0 left-0 h-screen w-full md:hidden p-5 bg-blue text-lightGray transition-all duration-300 ease-in-out`,
          {
            "translate-x-0 overflow-y-auto": clicked,
            "-translate-x-full overflow-y-hidden": !clicked,
          }
        )}
      >
        <div>
          <div className="flex justify-end items-center">
            {/* Company's Logo */}
            {/* <div className="flex-1 font-medium px-2 cursor-pointer">
              <Link href="/">Trust Capital</Link>
            </div> */}

            {/* The Mark Icon */}
            <div>
              <XMarkIcon
                className="h-6 w-6 text-lightGray md:hidden cursor-pointer"
                onClick={() => setClicked(!clicked)}
              />
            </div>
          </div>

          <div className="mt-10 w-full">
            {/* Contains the Navigation Links */}
            <SideBar />
          </div>
        </div>
      </div>

      {/* <div
        onClick={() => handleClick()}
        className={clsx(
          `bg-darkGray absolute top-0 right-0 h-screen w-[100%] z-10 md:hidden p-5 transition-all ease-in-out duration-200`,
          {
            hidden: !clicked,
            "bg-opacity-50": clicked,
          }
        )}
      ></div> */}
    </div>
  );
};

export default SideNav;

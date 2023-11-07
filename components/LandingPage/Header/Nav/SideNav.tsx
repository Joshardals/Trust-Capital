import { XMarkIcon } from "@heroicons/react/24/solid";
import { SideBar } from "./NavLinks";
import clsx from "clsx";
import { NavTypings } from "@/lib/typings";

const SideNav = ({ clicked, setClicked }: NavTypings) => {
  return (
    <div>
      <div
        className={clsx(
          `absolute top-0 left-0 h-screen w-[60%] md:hidden z-10 p-5 bg-blue text-lightGray transition-all duration-300 ease-in-out`,
          {
            "translate-x-0": clicked,
            "-translate-x-full": !clicked,
          }
        )}
      >
        <div>
          <div className="flex justify-between items-center">
            {/* Company's Logo */}
            <div className="flex-1 font-medium px-2 cursor-pointer">
              Trust Capital
            </div>

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

      <div
        className={clsx(
          `bg-darkGray absolute top-0 right-0 h-screen w-[100%] -z-10 md:hidden p-5 transition-all ease-in-out duration-200`,
          {
            "bg-opacity-0": !clicked,
            "bg-opacity-50": clicked,
          }
        )}
      ></div>
    </div>
  );
};

export default SideNav;

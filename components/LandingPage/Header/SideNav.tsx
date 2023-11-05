import { XMarkIcon } from "@heroicons/react/24/solid";
import { SideBar } from "./NavLinks";

const SideNav = () => {
  return (
    <div className="absolute top-0 right-0 h-screen w-full p-5 bg-blue">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-medium px-2">Trust Capital</div>
          <div>
            <XMarkIcon className="h-6 w-6 text-lightGray md:hidden cursor-pointer" />
          </div>
        </div>

        <div className="mt-10 w-full">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

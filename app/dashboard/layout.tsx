import MobileSideNav from "@/components/dashboard/nav/MobileSideNav";
import NavBar from "@/components/dashboard/nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";
import { auth } from "@/firebase";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-md:flex-col">
      <div className="md:hidden">
        <NavBar />
      </div>
      <SideNav />
      <MobileSideNav />
      <div className=" w-full h-full md:h-screen bg-babyblue max-md:pt-14 md:ml-80">
        {children}
      </div>
    </div>
  );
}

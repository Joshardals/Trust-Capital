import NavBar from "@/components/LandingPage/Header/Nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* <NavBar /> */}
      <SideNav />
      <div className=" w-full h-full">{children}</div>
    </div>
  );
}

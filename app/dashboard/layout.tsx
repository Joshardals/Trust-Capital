import NavBar from "@/components/LandingPage/Header/Nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-navyblue p-0 m-0 h-full w-full scroll-smooth">
      <body className="scroll-smooth bg-purewhite">
        <div className="flex">
          {/* <NavBar /> */}
          <SideNav />
          <div className=" w-full h-full md:h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}

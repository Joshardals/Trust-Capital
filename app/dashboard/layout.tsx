import MobileSideNav from "@/components/dashboard/nav/MobileSideNav";
import NavBar from "@/components/dashboard/nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-navyblue p-0 m-0 h-screen w-full scroll-smooth"
    >
      <body className="bg-navyblue h-screen p-0 m-0 w-full scroll-smooth">
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
      </body>
    </html>
  );
}

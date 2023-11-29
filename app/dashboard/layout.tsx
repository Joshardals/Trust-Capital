import NavBar from "@/components/LandingPage/Header/Nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-navyblue p-0 m-0 h-screen w-full scroll-smooth"
    >
      <body className="bg-navyblue h-screen p-0 m-0 w-full scroll-smooth">
        <div className="flex">
          {/* <NavBar /> */}
          <SideNav />
          <div className=" w-full h-full md:h-screen bg-babyblue">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

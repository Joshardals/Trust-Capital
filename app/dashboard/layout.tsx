"use client";
import MobileSideNav from "@/components/dashboard/nav/MobileSideNav";
import NavBar from "@/components/dashboard/nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isUser = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setAuthUser(true);
        } else {
          setAuthUser(false);
          router.push("/");
        }
      } catch (error: any) {
        console.log(`no user: ${error.message}`);
      }
    };

    isUser();
  });
  return (
    <div>
      {authUser ? (
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
      ) : null}
    </div>
  );
}

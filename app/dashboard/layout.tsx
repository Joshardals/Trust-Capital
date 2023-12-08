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
    if (!authUser) {
      router.push("/");
    }
  });
  
  useEffect(() => {
    const isUser = () => {
      try {
        auth.onAuthStateChanged((user) => {
          if (user) {
            console.log("There is a user", user.providerData);
            setAuthUser(true);
          }
        });
      } catch (error: any) {
        console.log(`no user: ${error.message}`);
      }
    };

    isUser();
  });

  return (
    <div className="flex max-md:flex-col">
      <div className="md:hidden">
        <NavBar />
      </div>
      <SideNav />
      <MobileSideNav />
      <div className=" w-full h-full md:h-screen bg-babyblue max-md:pt-14 md:ml-80">
        {authUser ? <div>{children}</div> : null}
      </div>
    </div>
  );
}

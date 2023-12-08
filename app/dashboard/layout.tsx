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
          console.log("There is a user: ", user.providerData);
        } else {
          setAuthUser(false);
          console.log("There is no user, sign up!");
          router.push("/");
        }
        // auth.onAuthStateChanged((user) => {
        //   if (user) {
        //     console.log("There is a user", user.providerData);
        //     setAuthUser(true);
        //   }
        // });
      } catch (error: any) {
        console.log(`no user: ${error.message}`);
      }
    };

    isUser();
  });

  // useEffect(() => {
  //   // if (!authUser) {
  //   //   router.push("/");
  //   // }
  //   console.log(authUser);
  // }, [authUser]);
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

"use client";
import GoogleTrans from "@/components/dashboard/content/GoogleTrans";
import NavBar from "@/components/dashboard/nav/NavBar";
import SideNav from "./_components/SideNav";
import Loading from "@/components/ui/Loading";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileSideNav from "./_components/MobileSideNav";
import { account } from "@/appwrite";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const user = (await account.get()).email;
        if (user) {
          setAuthUser(true);
        } else {
          setAuthUser(false);
          router.push("/login2");
        }
      } catch (error: any) {
        console.log(`Error, ${error.message}`);
        router.push("/login2");
      }
    };

    unsubscribe();
  }, [router]);
  return (
    <div>
      {authUser ? null : <Loading />}
      {authUser ? (
        <div className="flex max-md:flex-col">
          <div className="md:hidden">
            <NavBar />
          </div>
          <SideNav />
          <MobileSideNav />
          {/* removed max-md:pt-14 */}
          <div className=" w-full h-full md:h-screen bg-babyblue md:ml-80">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}

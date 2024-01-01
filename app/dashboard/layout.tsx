"use client";
import GoogleTrans from "@/components/dashboard/content/GoogleTrans";
import MobileSideNav from "@/components/dashboard/nav/MobileSideNav";
import NavBar from "@/components/dashboard/nav/NavBar";
import SideNav from "@/components/dashboard/nav/SideNav";
import Loading from "@/components/ui/Loading";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
        router.push("/");
      }
    });

    // Cleanup the subscription to avoid memory leaks
    return () => unsubscribe();
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

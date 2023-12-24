"use client";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import GoogleTrans from "../dashboard/content/GoogleTrans";

export default function Onboarding() {
  const [authUser, setAuthUser] = useState(false);
  const [userId, setUserId] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const details = user?.providerData[0];
        const uid = details.uid || "";
        setUserId(uid);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="block">
      <>
        {/* Start of code for Desktop Users */}
        <div className="flex max-md:hidden">
          <div
            className="h-screen relative w-full bg-[url('/signup.jpg')] bg-cover
        border-r border-r-pureblack overflow-hidden
      "
          >
            <div className="relative z-10 space-y-32 p-10 h-full">
              <div className="text-md md:text-lg w-auto text-babyblue">
                <div className="flex items-center space-x-2 max-md:space-x-1 font-serif font-bold">
                  <Image alt="Logo" src="/logo.png" width={30} height={30} />
                  Trust-Capital
                </div>
              </div>

              <div className="font-sans flex flex-col  justify-center space-y-10 text-babyblue">
                <h1 className="text-3xl text-babyblue">
                  Start your <br /> journey
                </h1>

                <p>
                  Never share your passwords, PINs, or any other security
                  information with anyone, including friends or family. Keep
                  this information private and secure.
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 h-full w-full bg-navyblue/70" />
          </div>
          <div className="h-screen w-full flex items-center justify-center p-10 bg-babyblue md:overflow-auto">
            <UserAuthForm userId={userId || ""} />
          </div>
        </div>
        {/* End Of Code */}
        {/* Start Of Code for Mobile Users */}
        <div className="md:hidden relative h-screen">
          {/* for the next div, h-28 and a fixed */}
          <div className="relative top-0 left-0 w-full bg-navyblue text-white h-16 px-5 z-20">
            <div className="flex items-center justify-center text-xl font-serif h-full w-full">
              <Image alt="Logo" src="/logo.png" width={30} height={30} />
            </div>
            <GoogleTrans />
          </div>
          <div className=" bg-navyblue h-screen">
            <div className=" px-5 py-10 relative bg-[url('/mobile-signup-bg.jpg')] w-full h-[35rem] bg-cover">
              <div className=" relative z-10 space-y-4 flex flex-col h-full justify-end">
                <h1 className="text-2xl text-babyblue font-serif font-bold">
                  Start Your Journey
                </h1>

                <p className="text-babyblue font-sans">
                  Never share your passwords, PINs, or any other security
                  information with anyone, including friends or family. Keep
                  this information private and secure.
                </p>
              </div>
              <div className="absolute top-0 left-0 h-full w-full bg-navyblue/70" />
            </div>

            <div className="p-5 bg-babyblue">
              <UserAuthForm userId={userId || ""} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

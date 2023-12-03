import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create your login | Trust-Capital Investment",
  description: "Create your login for Trust-Capital",
};

export default function Page() {
  return (
    <div className="block">
      {/* Start of code for Desktop Users */}
      <div className="flex max-md:hidden">
        <div
          className="h-screen relative w-full bg-[url('/signup.jpg')] bg-cover
        border-r border-r-pureblack overflow-hidden
      "
        >
          <div className="relative z-10 space-y-32 p-10 h-full">
            <div className="text-md md:text-lg w-auto text-babyblue">
              <Link
                href="/"
                className="flex items-center space-x-2 max-md:space-x-1"
              >
                <Image alt="Logo" src="/logo.png" width={30} height={30} />
                Trust-Capital
              </Link>
            </div>

            <div className="font-sans flex flex-col  justify-center space-y-10 text-babyblue">
              <h1 className="text-3xl text-babyblue">
                Start your <br /> journey
              </h1>

              <p>
                We&apos;ll need your name, email address, and a unique password.
                You&apos;ll use this login to access Trust-Capital next time.
              </p>
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-navyblue/70" />
        </div>
        <div className="h-screen w-full flex items-center justify-center p-10 bg-babyblue md:overflow-auto">
          <UserAuthForm />
        </div>
      </div>
      {/* End Of Code */}
      {/* Start Of Code for Mobile Users */}
      <div className="md:hidden relative h-screen">
        <div className="fixed top-0 left-0 w-full bg-navyblue text-white h-16 px-5 z-20">
          <div className="flex items-center justify-center text-xl font-serif h-full w-full">
            <Link href="/">
              <Image alt="Logo" src="/logo.png" width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className="py-6 bg-navyblue h-screen">
          <div className=" px-5 py-10 relative bg-[url('/mobile-signup-bg.jpg')] w-full h-[35rem] bg-cover">
            <div className=" relative z-10 space-y-4 flex flex-col h-full justify-end">
              <h1 className="text-2xl text-babyblue font-serif font-bold">
                Grow Your Savings
              </h1>

              <p className="text-babyblue font-sans">
                Trust-Capital Investment unlocks financial potential, converting
                your deposits into seeds for future prosperity. Entrust your
                wealth to a legacy of reliability and embark on a journey
                towards security and growth.
              </p>
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-navyblue/70" />
          </div>

          <div className="p-5 bg-babyblue">
            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}

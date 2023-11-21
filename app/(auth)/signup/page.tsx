import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";

export const metadata: Metadata = {
  title: "Create your login | TrustCapital",
  description: "Create your login for TrustCapital",
};

export default function Page() {
  return (
    <div>
      {/* Start of code for Desktop Users */}
      <div className="flex overflow-hidden max-md:hidden">
        <div
          className="h-screen relative w-full bg-[url('/signup.jpg')] bg-cover
        border-r border-r-pureblack
      "
        >
          <div className="relative z-10 space-y-32 p-10 h-full">
            <div className="text-md md:text-lg w-auto text-babyblue">
              <Link href="/" className="">
                TrustCapital
              </Link>
            </div>

            <div className="font-sans flex flex-col  justify-center space-y-10 text-babyblue">
              <h1 className="text-3xl text-babyblue">
                Start your <br /> journey
              </h1>

              <p>
                We&apos;ll need your name, email address, and a unique password.
                You&apos;ll use this login to access TrustCapital next time.
              </p>
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-navyblue bg-opacity-70" />
        </div>
        <div className="h-screen w-full flex items-center justify-center p-10 bg-babyblue">
          <UserAuthForm />
        </div>
      </div>

      {/* End Of Code */}

      {/* Start Of Code for Mobile Users */}
      <div className="md:hidden">Hey there</div>
    </div>
    // <>
    //   <div className="md:hidden">
    //     <Image
    //       src="/examples/authentication-light.png"
    //       width={1280}
    //       height={843}
    //       alt="Create your login Image"
    //       className=""
    //     />
    //   </div>
    //   <div className="container bg-pureblack relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    //     <Link
    //       href="/examples/authentication"
    //       className={cn(
    //         buttonVariants({ variant: "ghost" }),
    //         "absolute right-4 top-4 md:right-8 md:top-8"
    //       )}
    //     >
    //       Login
    //     </Link>
    //     <div className="relative bg-goldenrod font-serif hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
    //       <div className="absolute inset-0 bg-navyblue" />
    //       <div className="relative z-20 flex bg-purered items-center text-lg font-medium">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="mr-2 h-6 w-6"
    //         >
    //           <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    //         </svg>
    //         TrustCapital
    //       </div>
    //       <div className="relative z-20 mt-auto">
    //         <blockquote className="space-y-2">
    //           <p className="text-lg">
    //             &ldquo;This library has saved me countless hours of work and
    //             helped me deliver stunning designs to my clients faster than
    //             ever before.&rdquo;
    //           </p>
    //           <footer className="text-sm">Sofia Davis</footer>
    //         </blockquote>
    //       </div>
    //     </div>
    //     <div className="lg:p-8 bg-navyblue">
    //       <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    //         <div className="flex flex-col space-y-2 text-center">
    //           <h1 className="text-2xl font-semibold tracking-tight">
    //             Create an account
    //           </h1>
    //           <p className="text-sm text-muted-foreground">
    //             Enter your email below to create your account
    //           </p>
    //         </div>
    //         <UserAuthForm />
    //         <p className="px-8 text-center text-sm text-muted-foreground">
    //           By clicking continue, you agree to our{" "}
    //           <Link
    //             href="/terms"
    //             className="underline underline-offset-4 hover:text-primary"
    //           >
    //             Terms of Service
    //           </Link>{" "}
    //           and{" "}
    //           <Link
    //             href="/privacy"
    //             className="underline underline-offset-4 hover:text-primary"
    //           >
    //             Privacy Policy
    //           </Link>
    //           .
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

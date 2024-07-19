"use client";

import GoogleTrans from "@/components/dashboard/content/GoogleTrans";
import { UserSignInForm } from "./Form";

export default function LoginContainer() {
  return (
    <div className="bg-navyblue">
      {/* Start of code for Desktop Users */}
      <div className="flex overflow-hidden max-md:hidden h-screen">
        <div className=" w-full p-5 bg-babyblue md:flex md:items-center md:justify-center">
          <UserSignInForm />
        </div>
      </div>
      {/* End of code for Desktop Users */}

      {/* Start of code for Mobile Users  */}
      <div className="md:hidden bg-babyblue w-full py-2 px-10">
        <GoogleTrans />
        <UserSignInForm />
      </div>
      {/* End of code for Mobile Users */}
    </div>
  );
}

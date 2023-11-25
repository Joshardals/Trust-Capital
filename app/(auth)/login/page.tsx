import { UserSignInForm } from "@/components/forms/user-sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | TrustCapital",
  description: "Create your login for TrustCapital",
};
const page = () => {
  return (
    <div className="bg-navyblue">
      {/* Start of code for Desktop Users */}
      <div className="flex overflow-hidden max-md:hidden">
        <div className="h-screen relative w-full bg-[url('/login.jpg')] bg-cover border-r border-r-pureblack"></div>
        <div className=" w-full p-5 bg-babyblue">
          <UserSignInForm />
        </div>
      </div>
      {/* End of code for Desktop Users */}

      {/* Start of code for Mobile Users  */}
      <div className="md:hidden bg-babyblue h-screen w-full py-2 px-10">
        <UserSignInForm />
      </div>
      {/* End of code for Mobile Users */}
    </div>
  );
};

export default page;

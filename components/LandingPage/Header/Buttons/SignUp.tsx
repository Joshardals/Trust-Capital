import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/sign-up"
      className="bg-goldenrod text-navyblue hover:text-babyblue hover:bg-opacity-50 
      button max-md:mr-4 border hover:border-goldenrod"
    >
      Sign up
    </Link>
  );
};

export default SignUp;

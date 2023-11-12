import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/sign-up"
      className="bg-pureblack text-purewhite hover:bg-pureblack hover:text-purewhite hover:bg-opacity-50 
      button max-md:mr-4"
    >
      Sign up
    </Link>
  );
};

export default SignUp;

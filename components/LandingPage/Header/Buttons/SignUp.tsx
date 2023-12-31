import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/signup"
      className="bg-babyblue text-navyblue  hover:border-babyblue 
      button max-md:mr-2 border"
    >
      Sign up
    </Link>
  );
};

export default SignUp;

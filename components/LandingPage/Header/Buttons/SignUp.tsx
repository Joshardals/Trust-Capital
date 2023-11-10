import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/sign-up"
      className="h-12 flex items-center w-auto bg-gold text-green px-8 text-center rounded-full"
    >
      Sign up
    </Link>
  );
};

export default SignUp;

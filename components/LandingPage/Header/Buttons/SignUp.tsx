import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/sign-up"
      className="bg-darkblue text-purewhite hover:bg-purewhite hover:text-darkblue button"
    >
      Sign up
    </Link>
  );
};

export default SignUp;

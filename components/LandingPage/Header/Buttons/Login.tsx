import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Link
      href="/sign-in"
      className="max-md:hidden button border border-babyblue text-babyblue
       hover:bg-opacity-50 hover:bg-darkblue "
    >
      Log in
    </Link>
  );
};

export default Login;

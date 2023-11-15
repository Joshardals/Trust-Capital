import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Link
      href="/login"
      className="max-md:hidden button border border-goldenrod text-babyblue
       hover:bg-opacity-50  hover:text-goldenrod focus:text-goldenrod "
    >
      Log in
    </Link>
  );
};

export default Login;

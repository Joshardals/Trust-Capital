import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Link
      href="/login"
      className="max-md:hidden flex items-center h-12 w-auto border border-gold px-8 text-center rounded-full"
    >
      Log in
    </Link>
  );
};

export default Login;

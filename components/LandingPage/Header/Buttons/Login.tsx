import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Link
      href="/login"
      className="max-md:hidden button border border-purewhite text-purewhite hover:bg-darkblue "
    >
      Log in
    </Link>
  );
};

export default Login;

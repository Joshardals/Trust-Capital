"use client";

import Link from "next/link";

const Login = () => {
  return (
    <Link
      href="/login"
      className="button border transition-all duration-300 border-babyblue text-babyblue
        bg-navyblue rounded-full px-6 max-md:text-xs max-md:h-10 max-md:hidden"
    >
      Login
    </Link>
  );
};

export default Login;

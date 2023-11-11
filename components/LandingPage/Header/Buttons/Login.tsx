import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Link href="/login" className="max-md:hidden button border border-gold">
      Log in
    </Link>
  );
};

export default Login;

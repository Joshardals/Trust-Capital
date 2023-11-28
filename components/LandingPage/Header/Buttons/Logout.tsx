import Link from "next/link";

const Logout = () => {
  return (
    <Link
      href="/signup"
      className="bg-babyblue text-navyblue  hover:border-babyblue hover:bg-babyblue/70
      button max-md:mr-2 border"
    >
      Logout
    </Link>
  );
};

export default Logout;

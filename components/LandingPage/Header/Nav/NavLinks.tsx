import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Support", href: "#support" },
];

export const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-sans relative text-sm transition-all hover:mb-1 hover:text-gold"
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
};

export const SideBar = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-sans text-xl flex mt-3 rounded-sm transition duration-300 hover:mb-1 hover:text-gold"
        >
          <p>{link.name}</p>
        </Link>
      ))}
      <div>
        <Link
          href="/login"
          className="font-sans text-xl flex mt-3 rounded-sm transition duration-300 hover:mb-1 hover:text-gold"
        >
          Log in
        </Link>
      </div>
    </>
  );
};

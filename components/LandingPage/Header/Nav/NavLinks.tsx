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
          className="font-sans flex px-2 py-2 mt-3 rounded-sm transition duration-300 hover:bg-gold hover:text-darkGray"
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
};

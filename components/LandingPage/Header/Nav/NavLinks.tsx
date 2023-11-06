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
          className="font-sans relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
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

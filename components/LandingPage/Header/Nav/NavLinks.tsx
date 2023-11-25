import Link from "next/link";

const links = [
  { name: "Home", href: "/#" },
  { name: "Learn More", href: "/#" },
  { name: "FAQ", href: "/#" },
  { name: "Support", href: "#" },
];

export const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-sans relative text-sm transition-all hover:mb-1 text-babyblue hover:text-opacity-50"
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
};

export const FooterLinks = () => {
  return (
    <div className="space-y-2 flex flex-col justify-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className=" font-sans text-sm transition-all text-babyblue hover:text-babyblue/50"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export const SideBar = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="sidebar-links">
          <p>{link.name}</p>
        </Link>
      ))}
      <div>
        <Link href="/login" className="sidebar-links">
          Log in
        </Link>
      </div>
    </>
  );
};

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Learn More", href: "/learn-more" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "#support" },
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

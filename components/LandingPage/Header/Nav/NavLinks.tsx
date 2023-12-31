"use client";
import Link from "next/link";

const links = [
  { name: "Home", href: "/#home" },
  { name: "Learn More", href: "/#learn-more" },
  { name: "FAQ", href: "/#faq" },
  { name: "Support", href: "#" },
];

const footerLinks = [
  { name: "Home", href: "/#home" },
  { name: "Learn More", href: "/#learn-more" },
  { name: "FAQ", href: "/#faq" },
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
      {footerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className=" font-sans text-sm transition-all text-babyblue hover:text-babyblue/50 max-w-[6rem]"
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </div>
  );
};
export const SideBar = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="sidebar-links max-w-[6rem]"
        >
          <p>{link.name}</p>
        </Link>
      ))}

      <Link href="/login" className="sidebar-links max-w-[6rem]">
        Login
      </Link>
    </>
  );
};

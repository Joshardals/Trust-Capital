"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "Make A Deposit",
    href: "/deposit",
    icon: "deposit",
  },
  {
    name: "Your Deposits",
    href: "/your-deposit",
    icon: "your-deposit",
  },
  {
    name: "Withdraw Funds",
    href: "/withdraw",
    icon: "withdraw",
  },
  {
    name: "Referrals",
    href: "/referrals",
    icon: "referrals",
  },
  {
    name: "Edit Account",
    href: "/edit-account",
    icon: "settings",
  },
];

export const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <div className=" max-md:space-y-4 relative space-y-6 text-xs h-screen">
      {links.map((link) => (
        <div key={link.name}>
          <Link
            href={link.href}
            className={`flex items-center space-x-4 uppercase p-2 transition-all duration-200 hover:bg-darkblue ${
              pathname === link.href ? "bg-darkblue" : "bg-transparent"
            } rounded-lg`}
          >
            <Image
              src={`/dashboard/${link.icon}.svg`}
              width={30}
              height={30}
              className=""
              alt={link.name}
            />
            <p className="max-md:hidden">{link.name}</p>
          </Link>
        </div>
      ))}

      <div className="w-full flex items-center cursor-pointer space-x-4 uppercase p-2 rounded-lg transition-all duration-200 hover:bg-darkblue ">
        <Image
          src="/dashboard/logout.svg"
          width={30}
          height={30}
          alt="Logout"
        />
        <p className="max-md:hidden">logout</p>
      </div>
    </div>
  );
};

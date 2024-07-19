"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEditStore, usesideBarStore } from "@/lib/store/store";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { account } from "@/appwrite";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard2",
    icon: "dashboard",
  },
  {
    name: "Make A Deposit",
    href: "/dashboard2/deposit",
    icon: "deposit",
  },
  {
    name: "Your Deposits",
    href: "/dashboard2/your-deposit",
    icon: "your-deposit",
  },
  {
    name: "Withdraw Funds",
    href: "/dashboard2/withdraw",
    icon: "withdraw",
  },
  {
    name: "Withdrawal History",
    href: "/dashboard2/your-withdrawal",
    icon: "your-withdrawal",
  },
  {
    name: "Referrals",
    href: "#",
    icon: "referrals",
  },
  {
    name: "Edit Account",
    href: "#",
    icon: "settings",
  },
];

export const SidebarLinks = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { sideBar, setSideBar } = usesideBarStore();
  const { editAcct, setEditAcct } = useEditStore();

  const handleClick = () => {
    if (sideBar) {
      setSideBar();
    }
  };

  const logout = async () => {
    if (sideBar) {
      setSideBar();
    }
    try {
      await account.deleteSession("current");
      router.push("/login2");
    } catch (error: any) {
      console.log(`Error logging out user ${error.message}`);
    }
  };

  return (
    <div className=" max-md:space-y-4 relative space-y-6 text-xs h-screen">
      {links.map((link) => (
        <div
          key={link.name}
          onClick={() => {
            if (link.name === "Edit Account") {
              setEditAcct();
            }
          }}
        >
          <Link
            href={link.href}
            onClick={handleClick}
            className={`flex items-center space-x-4 uppercase p-2 transition-all duration-200 hover:bg-darkblue ${
              pathname === link.href ? "bg-darkblue" : "bg-transparent"
            } rounded-lg`}
          >
            <Image
              src={`/dashboard/${link.icon}.svg`}
              width={30}
              height={30}
              className="h-5 w-5"
              alt={link.name}
            />
            <p className="text-sm">{link.name}</p>
          </Link>
        </div>
      ))}

      <div
        onClick={logout}
        className="w-full flex items-center cursor-pointer space-x-4 uppercase p-2 rounded-lg transition-all duration-200 hover:bg-darkblue "
      >
        <Image
          src="/dashboard/logout.svg"
          width={30}
          height={30}
          alt="Logout"
          className="h-5 w-5"
        />
        <p className="text-sm">logout</p>
      </div>
    </div>
  );
};

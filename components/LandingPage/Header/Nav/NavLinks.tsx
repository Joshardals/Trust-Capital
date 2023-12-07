"use client";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const handleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);

      const result = userCredential;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (user) {
        console.log(user);
        const creationTime = user.metadata.creationTime;
        if (creationTime) {
          const currentTime: any = new Date();
          const creationTimeStamp = new Date(creationTime).getTime();
          const timeDifference = currentTime - creationTimeStamp;

          const isNewAccount = timeDifference < 60000;

          if (isNewAccount) {
            console.log("This is a new account!!");
            router.push("/onboarding");
          } else {
            console.log("This is an existing account!");
            router.push("/dashboard");
          }
        }
      }
    } catch (error: any) {
      console.log(`Error Creating Account: ${error.message}`);
    }
  };
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
      <div onClick={handleSignup}>
        <p className="sidebar-links max-w-[6rem]">Get Started</p>
      </div>
    </>
  );
};

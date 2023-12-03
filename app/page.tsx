import Body from "@/components/LandingPage/Body/Body";
import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Footer from "@/components/LandingPage/Footer/Footer";
import Header from "@/components/LandingPage/Header/Header";
import { UserButton } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

export default async function Home() {
  return (
    <main className=" w-full p-0">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}

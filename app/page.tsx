import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Header from "@/components/LandingPage/Header/Header";
import { Link } from "lucide-react";

export default async function Home() {
  return (
    <main className=" w-full p-0">
      <Header />
      <CryptoPrice />
    </main>
  );
}

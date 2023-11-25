import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Footer from "@/components/LandingPage/Footer/Footer";
import Header from "@/components/LandingPage/Header/Header";
import { Link } from "lucide-react";

export default async function Home() {
  return (
    <main className=" w-full p-0 bg-navyblue">
      <Header />
      <CryptoPrice />
      {/* <div className="h-screen"></div> */}
      <Footer />
    </main>
  );
}

import { Suspense } from "react";
import CryptoPrice from "../Crypto/CryptoPrice";
import HeroSection from "./HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full">
      {/* mb-16 for the empty className below */}
      <div className="">
        <NavBar />
      </div>
      <Suspense fallback={<p>Loading Crypto Price...</p>}>
        <CryptoPrice />
      </Suspense>
      <HeroSection />
    </main>
  );
};
export default Header;

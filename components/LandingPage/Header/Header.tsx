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
      <CryptoPrice />
      <HeroSection />
    </main>
  );
};
export default Header;

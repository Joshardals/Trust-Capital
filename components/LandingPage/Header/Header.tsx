import CryptoPrice from "../Crypto/CryptoPrice";
import HeroSection from "./HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full">
      <div className=" mb-16">
        <NavBar />
      </div>
      <CryptoPrice />
      <HeroSection />
    </main>
  );
};
export default Header;

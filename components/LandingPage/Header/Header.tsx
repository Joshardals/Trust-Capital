import CryptoPrice from "../Crypto/CryptoPrice";
import HeroSection from "./HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full mx-auto">
      <NavBar />
      <HeroSection />
      <CryptoPrice />
    </main>
  );
};
export default Header;

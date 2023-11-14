import CryptoPrice from "../CryptoPrice";
import HeroSection from "./HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full h-[75%] mx-auto  max-md:space-y-32 md:space-y-40">
      <NavBar />
      <HeroSection />
      <CryptoPrice />
    </main>
  );
};
export default Header;

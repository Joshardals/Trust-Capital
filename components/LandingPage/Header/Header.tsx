import HeroSection from "../HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full h-[75%] mx-auto">
      <NavBar />
      <HeroSection />
    </main>
  );
};
export default Header;

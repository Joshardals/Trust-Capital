import HeroSection from "../HeroSection/HeroSection";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="w-full p-5 h-[75%]">
      <NavBar />
      <HeroSection />
    </main>
  );
};
export default Header;

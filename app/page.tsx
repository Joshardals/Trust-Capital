import Body from "@/components/LandingPage/Body/Body";
import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Footer from "@/components/LandingPage/Footer/Footer";
import Header from "@/components/LandingPage/Header/Header";

export default async function Home() {
  return (
    <main className=" w-full p-0">
      <Header />
      <Body />

      <Footer />
    </main>
  );
}

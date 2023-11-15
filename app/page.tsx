import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Header from "@/components/LandingPage/Header/Header";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-b from-navyblue to-babyblue">
      <div className="h-auto">
        <Header />
      </div>
      <CryptoPrice />
    </main>
  );
}

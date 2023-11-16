import CryptoPrice from "@/components/LandingPage/Crypto/CryptoPrice";
import Header from "@/components/LandingPage/Header/Header";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="h-auto">
        <Header />
      </div>
      <CryptoPrice />
    </main>
  );
}

import Header from "@/components/LandingPage/Header/Header";
import HeaderBody from "@/components/LandingPage/HeaderBody/HeaderBody";

export default function Home() {
  return (
    <main className="h-full">
      <div className="bg-gold h-full">
        <Header />
        <HeaderBody />
      </div>
      <div>Hey there</div>
    </main>
  );
}

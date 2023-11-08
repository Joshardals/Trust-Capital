import Header from "@/components/LandingPage/Header/Header";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="min-h-screen h-[calc(100vh - 250px)] bg-green w-full"></div>
    </main>
  );
}

"use client";
import Header from "@/components/LandingPage/Header/Header";
import SideNav from "@/components/LandingPage/Header/Nav/SideNav";
import { useNavStore } from "@/lib/store/store";
export default function Home() {
  const { navBar } = useNavStore();
  return (
    <main className="h-full bg-purewhite">
      <div className="h-[75%] bg-navyblue">
        <Header />
      </div>
      <div className="">Hey there</div>
    </main>
  );
}

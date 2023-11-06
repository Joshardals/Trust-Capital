"use client";
import Image from "next/image";
import NavBar from "./Nav/NavBar";

const Header = () => {
  return (
    <main className="h-screen w-full md:py-10 p-5 md:px-20">
      <NavBar />

      <div className=" mt-32 flex justify-between">
        <div className="flex-1 bg-green">Hey</div>
        <div className="flex-1 bg-gold"></div>
      </div>
    </main>
  );
};

export default Header;

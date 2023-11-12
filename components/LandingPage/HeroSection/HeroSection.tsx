import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" mt-16 h-full w-full bg-[url('/hero-img.png')] bg-cover bg-center
    "
    >
      <div className="h-[30rem]">
        <div className="">
          <h1 className="text-purewhite text-xl">Hey</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="mt-16 h-full w-full bg-[url('/hero-img.png')] bg-cover bg-center
    "
    >
      <div className=" bg-navyblue bg-opacity-60 h-[30rem] flex items-center justify-center">
        <div className="text-center text-purewhite max-w-sm  md:max-w-md p-5">
          <h1 className="text-purewhite text-xl md:text-2xl leading-tight">
            Empower Your Wealth Journey
          </h1>
          <p className="font-sans">
            Where trust meets opportunity. Trust Capital Investment is your
            partner in financial growth. Secure your future with confidence,
            backed by a legacy of trustworthiness. Start your investment journey
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

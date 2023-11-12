import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" mt-40 max-md:px-5 md:px-20 lg:px-40 max-md:space-y-4 lg:space-x-4 flex items-center md:flex-row flex-col
    "
    >
      <div className="h-auto w-full flex-1">
        <h1 className="text-2xl leading-tight">
          Grow Your Wealth <br /> With Us
        </h1>
        <p className="font-sans block">
          Invest with confidence. Trust Capital Investment is your gateway to
          financial success.
        </p>
      </div>
      <div className="h-full w-full bg-babyblue flex-1">
        <Image
          src="/hero-img.png"
          width={1600}
          height={800}
          className="w-full max-sm:h-60 max-md:h-72"
          alt="Hero-Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

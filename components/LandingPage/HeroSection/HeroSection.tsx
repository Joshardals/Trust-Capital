import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="bg-navyblue mt-20 max-md:space-y-4 lg:space-x-4 flex md:flex-row flex-col
      items-center
    "
    >
      <div className=" h-full w-full flex-1 bg-goldenrod">
        <h1 className="text-2xl">
          Grow Your <br /> Wealth With Us
        </h1>
        <p className="font-sans block max-w-sm ">
          Invest with confidence. Trust Capital Investment is your gateway to
          financial success.
        </p>
      </div>
      <div className="h-full w-full bg-babyblue flex-1">
        <Image
          src="/heroimg2.png"
          width={500}
          height={500}
          className="w-full max-sm:h-60 max-md:h-72"
          alt="Hero-Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

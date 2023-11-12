import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="text-navyBlue mt-20 max-sm:space-y-4 md:space-x-4 flex md:flex-row flex-col">
      <div className=" h-full flex-1 bg-goldenrod">
        <h1 className="text-2xl">
          Grow Your <br /> Wealth With Us
        </h1>
        <p className="font-sans block max-w-sm ">
          Invest with confidence. Trust Capital Investment is your gateway to
          financial success.
        </p>
      </div>
      <div className="bg-babyblue flex-1 h-full w-full p-5 rounded-lg">
        <img
          src="/hero-img.png"
          className="w-fit max-sm:h-[4%] h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;

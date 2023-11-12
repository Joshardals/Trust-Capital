import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" mt-16 bg-goldenrod h-1/2 w-full
    "
    >
      <div className="h-full w-full">
        <Image
          src="/hero-img.png"
          width={1600}
          height={500}
          className=" md:w-[1600px] md:h-[500px]"
          alt="Hero-Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

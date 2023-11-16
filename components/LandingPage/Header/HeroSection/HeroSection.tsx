import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className=" max-md:px-5 md:px-20 lg:px-40 max-md:space-y-8 md:space-x-8 flex items-center md:flex-row flex-col
        bg-gradient-to-br max-md:bg-gradient-to-tr from-navyblue to-babyblue max-md:mt-10 mt-12 max-md:py-20 md:py-40 h-full
      "
    >
      <div className=" space-y-4 flex-1 w-full">
        <h1 className="text-2xl  leading-tight lg:max-w-md max-md:max-w-md text-navyblue">
          <span className="text-goldenrod max-md:text-navyblue">Empower</span>{" "}
          Your Wealth Journey
        </h1>
        <p className="font-sans lg:max-w-lg text-navyblue leading-7 text-sm">
          Where trust meets opportunity. Trust Capital Investment is your
          partner in financial growth. Secure your future with confidence,
          backed by a legacy of trustworthiness. Start your investment journey
          today.
        </p>
      </div>

      <div className="relative aspect-video w-full rounded-lg flex-1 shadow-lg">
        <Image
          src="/hero-img.jpg"
          fill
          alt="Hero-Image"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg shadow-2xl shadow-darkblue"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-navyblue bg-opacity-30 rounded-md" />
      </div>
    </div>
  );
};

export default HeroSection;

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="max-md:mt-20 md:mt-40 max-md:px-5 md:px-20 lg:px-40 max-md:space-y-8 md:space-x-8 flex items-center md:flex-row flex-col
    "
    >
      <div className=" text-pureblack md:max-w-md space-y-4">
        <h1 className="text-2xl leading-tight">Empower Your Wealth Journey</h1>
        <p className="font-sans">
          Where trust meets opportunity. Trust Capital Investment is your
          partner in financial growth. Secure your future with confidence,
          backed by a legacy of trustworthiness. Start your investment journey
          today.
        </p>
        <div className="md:max-w-[7rem]">
          <Link
            href="/sign-up"
            className="button justify-center bg-pureblack text-purewhite hero-section-button"
          >
            Get started
          </Link>
        </div>
      </div>

      <div className="h-full w-full">
        <Image
          src="/hero-img.jpg"
          width={1600}
          height={800}
          className="w-full max-sm:h-[500x] max-md:h-72"
          alt="Hero-Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

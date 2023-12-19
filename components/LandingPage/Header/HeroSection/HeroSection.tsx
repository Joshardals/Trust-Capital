import GoogleTrans from "@/components/dashboard/content/GoogleTrans";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" max-md:px-5 md:px-20 lg:px-20 max-md:space-y-8 md:space-x-8 flex items-center md:flex-row flex-col
        bg-gradient-to-br max-md:bg-gradient-to-tr from-navyblue to-babyblue max-md:py-20 md:py-40 h-full "
    >
      <div className=" space-y-4 flex-1 w-full">
        
      <GoogleTrans />
        <h1 className="text-2xl font-serif font-medium  leading-tight lg:max-w-md max-md:max-w-md text-navyblue">
          <span className="text-purewhite ">Empower</span> Your Wealth Journey
        </h1>
        <p className="font-sans lg:max-w-lg text-navyblue leading-7 text-sm">
          Where trust meets opportunity. Trust-Capital Investment is your
          partner in financial growth. Secure your future with confidence,
          backed by a legacy of trustworthiness. Start your investment journey
          today.
        </p>
      </div>

      <div className="relative w-full select-none rounded-lg flex-1 shadow-lg">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src="/hero-img-3.jpg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <div className="absolute top-0 left-0 h-full w-full bg-navyblue bg-opacity-30 rounded-md" />
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { Icons } from "@/components/icons";

const Features = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <h1 className=" text-md font-bold md:text-xl md:font-semibold font-sans text-darkblue">
          Features
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 select-none">
        <div className="rounded-2xl bg-gradient-to-tr from-darkblue/30 to-babyblue h-auto p-5 md:p-10 text-navyblue">
          <div className="space-y-4">
            <Icons.rocket className="w-10 h-10" />
            <h1 className="text-lg font-serif font-bold">User Friendly</h1>
            <p className="font-sans">
              In addition to your web browser, our well-known wallet is
              compatible with your Android or iPhone.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-tr from-puregreen/40 to-babyblue w-full  p-5 md:p-10 text-navyblue h-100">
          <div className="space-y-4">
            <Icons.shield className="w-10 h-10" />
            <h1 className="text-lg font-serif font-bold">
              Insurance Protection
            </h1>
            <p className="font-sans">
              We have insurance coverage for digital money kept on our servers.
            </p>
          </div>
        </div>
        <div className=" rounded-2xl bg-gradient-to-tr from-goldenrod/40 to-babyblue w-full  p-5 md:p-10 text-navyblue">
          <div className="space-y-4">
            <Icons.lock className="w-10 h-10" />
            <h1 className="text-lg font-serif font-bold">Safe Storage</h1>
            <p className="font-sans">
              Most of the digital materials are kept in safe offline storage by
              us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

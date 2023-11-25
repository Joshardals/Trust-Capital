import { Icons } from "@/components/icons";
import React from "react";

const FooterIcons = () => {
  return (
    <div className=" grid grid-cols-6 gap-4 w-full max-md:grid-cols-3 select-none">
      {/* Usdt */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.usdt className="h-6 w-6" />
        <p className="ml-2 md:text-lg">USDT</p>
      </div>

      {/* Ethereum */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.bitcoin className="h-6 w-6" />
        <p className="ml-2 md:text-lg">BTC</p>
      </div>

      {/* Eth */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.eth className="h-6 w-6" />
        <p className="ml-2 md:text-lg">ETH</p>
      </div>

      {/* Litecoin */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.ltc className="h-6 w-6" />
        <p className="ml-2 md:text-lg">LTC</p>
      </div>

      {/* Doge */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.doge className="h-6 w-6" />
        <p className="ml-2 md:text-lg">DOGE</p>
      </div>

      {/* Tron */}
      <div className="flex w-full items-center md:justify-center">
        <Icons.tron className="h-6 w-6" />
        <p className="ml-2 md:text-lg">TRON</p>
      </div>
    </div>
  );
};

export default FooterIcons;

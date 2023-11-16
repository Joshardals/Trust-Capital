import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { coinsDetails, coinsList } from "@/lib/typings";
import Image from "next/image";

const CryptoCard = ({ name, image, price, priceChange }: coinsDetails) => {
  return (
    <div className=" text-navyblue font-sans text-xs bg-purewhite space-y-2  p-2 border border-navyblue">
      <div className=" ">
        <Image
          src={image}
          height={20}
          width={20}
          alt="cryptoImage"
          className="rounded-full"
        />
        <p className=" font-semibold capitalize">{name}</p>
        <div className="flex items-center">
          <ChevronDownIcon className="text-purered h-6 w-6" />
          <p>{priceChange}</p>
        </div>
      </div>
      <p className="">${price}</p>
    </div>
  );
};

export default CryptoCard;

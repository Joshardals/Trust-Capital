import React from "react";

const CryptoCard = () => {
  return (
    <div className="h-auto text-pureblack bg-purewhite w-40 p-5 border border-navyblue">
      <div className="flex items-center space-x-4">
        <img
          src=" https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          alt="Bitcoin"
          className="h-6 w-6"
        />
        <p className=" font-semibold">Bitcoin</p>
      </div>
      <p>35,768</p>
    </div>
  );
};

export default CryptoCard;

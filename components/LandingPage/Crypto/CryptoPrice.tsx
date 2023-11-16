import { fetchCoins } from "@/lib/action/coins.action";
import CryptoCard from "./CryptoCard";
import { useEffect, useState } from "react";
import { coinsList } from "@/lib/typings";

const CryptoPrice = async () => {
  const coins: coinsList[] = await fetchCoins();

  return (
    <div className="flex overflow-x-hidden space-x-4 items-center lg:px-10 py-5 w-full">
      {coins.map((coin) => (
        <CryptoCard
          key={coin.id}
          name={coin.symbol}
          image={coin.image}
          price={coin.current_price}
          priceChange={coin.price_change_24h}
        />
      ))}
    </div>
  );
};

export default CryptoPrice;

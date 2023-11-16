"use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export const fetchCoins = async () => {
  try {
    noStore();
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en&price_change_percentage=24h"
    );

    const data = await res.json();
    revalidatePath("/");

    return data;
  } catch (error: any) {
    console.log(`Error fetching coins: ${error.message}`);
  }
};

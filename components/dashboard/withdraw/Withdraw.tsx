"use client";

import { auth, db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Address from "./Address";

interface walletDetails {
  btcAddress: string;
  usdtAddress: string;
  ethereumAddress: string;
  litecoinAddress: string;
  dogeAddress: string;
  tronAddress: string;
  bnbAddress: string;
  shibaAddress: string;
}

const Withdraw = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [wallet, setWallet] = useState<walletDetails>();

  useEffect(() => {
    const walletDocRef = doc(db, "wallets", userId);
    onSnapshot(walletDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        setWallet(res as walletDetails);
      } else {
        console.log("no-data");
      }
    });
  }, [userId]);

  return (
    <div className="">
      <div className=" border border-navyblue w-full overflow-x-auto">
        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            Account Balance:
          </p>
          <p className="font-semibold md:py-2 col-span-2">$0.00</p>
        </div>

        <Address label="USDT" address={wallet?.usdtAddress} />
        <Address label="BITCOIN" address={wallet?.btcAddress} />
        <Address label="ETHEREUM" address={wallet?.ethereumAddress} />
        <Address label="LITECOIN" address={wallet?.litecoinAddress} />
        <Address label="DOGECOIN" address={wallet?.dogeAddress} />
        <Address label="TRON" address={wallet?.tronAddress} />
        <Address label="BNB" address={wallet?.bnbAddress} />
        <Address label="SHIBA" address={wallet?.shibaAddress} />
      </div>
    </div>
  );
};

export default Withdraw;

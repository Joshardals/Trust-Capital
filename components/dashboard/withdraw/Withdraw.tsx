"use client";

import { auth, db } from "@/firebase";
import { fetchWallets } from "@/lib/action/wallet.action";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

interface walletDetails {
  btcAddress: string;
  // usdtAddress: string;
  // ethereumAddress: string;
  // litecoinAddress: string;
  // dogeAddress: string;
  // tronAddress: string;
  // bnbAddress: string;
  // shibaAddress: string;
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
  }, []);

  return (
    <div className="">
      <div className=" border border-navyblue w-full overflow-x-auto">
        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            Account Balance:
          </p>
          <p className="font-semibold md:py-2 col-span-2">$0.00</p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            USDT Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            BITCOIN Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            {wallet?.btcAddress}
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            ETHEREUM Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            LITECOIN Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            DOGECOIN Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            TRON Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            BNB Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            SHIBA INU Wallet Address:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            majesticwaterfall222299
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

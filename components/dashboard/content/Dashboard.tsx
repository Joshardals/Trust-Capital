"use client";

import TradingViewChart from "@/components/dashboard/content/Chart";
import Referral from "@/components/dashboard/content/Referral";
import StartTrade from "@/components/dashboard/content/StartTrade";
import { auth, db } from "@/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

interface AccountProp {
  accountBalance: string;
  currentPlan: string;
  activeDeposit: string;
  earnedTotal: string;
}

export function Dashboard() {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [firstName, setFirstName] = useState();
  const [code, setCode] = useState();
  const [account, setAccount] = useState<AccountProp>();

  useEffect(() => {
    const getUser = async () => {
      const userDocRef = doc(db, "users", userId);

      onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const res = doc.data();
          setCode(res?.referralCode);
          const name = res?.name.split(" ")[0];
          setFirstName(name);
        } else {
          console.log("no-data");
        }
      });
    };

    const getAccount = async () => {
      const accountDocRef = doc(db, "accountInfo", userId);

      onSnapshot(accountDocRef, (doc) => {
        if (doc.exists()) {
          const res = doc.data();
          setAccount({
            accountBalance: res.accountBalance,
            currentPlan: res.currentPlan,
            activeDeposit: res.activeDeposit,
            earnedTotal: res.earnedTotal,
          });
        } else {
          console.log("no-data");
        }
      });
    };

    getUser();
    getAccount();
  }, [userId]);

  const convertAmount = (amount: string) => {
    return Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className=" h-full font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue overflow-y-auto">
      <div className="flex max-md:flex-col justify-center items-center md:justify-between md:items-center max-md:space-y-4">
        <div>
          <h1 className="text-lg md:text-xl font-semibold capitalize text-puregreen max-md:text-center">
            Hi, {firstName}
          </h1>
          <p className="capitalize max-md:text-xs">
            welcome to trust-capital investment
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <StartTrade />
      </div> */}

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-md">
        {/* -----  Row 1   -------*/}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">active deposit</h1>
            <p className="font-bold">
              {convertAmount(account?.activeDeposit || "")}
            </p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">earned total</h1>
            <p className=" font-bold">
              {convertAmount(account?.earnedTotal || "")}
            </p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">account balance</h1>
            <p className=" font-bold">
              {convertAmount(account?.accountBalance || "")}
            </p>
          </div>
          <p></p>
        </div>

        {/* ------ Row 2 ------- */}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">current plan</h1>
            <p className=" font-bold uppercase">{account?.currentPlan}</p>
          </div>
          <p></p>
        </div>
      </div>
      <TradingViewChart />

      {/* Referral Tab */}

      <Referral referralCode={code || ""} />
    </div>
  );
}

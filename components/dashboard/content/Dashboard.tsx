"use client";

import TradingViewChart from "@/components/dashboard/content/Chart";
import Referral from "@/components/dashboard/content/Referral";
import StartTrade from "@/components/dashboard/content/StartTrade";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
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
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const details = userDocSnap.data();
        setCode(details?.referralCode);
        const name = details?.name.split(" ")[0];
        setFirstName(name);
      }
    };

    const getAccount = async () => {
      const accountDocRef = doc(db, "accountInfo", userId);
      const accountDocSnap = await getDoc(accountDocRef);

      if (accountDocSnap.exists()) {
        const details = accountDocSnap.data();
        setAccount({
          accountBalance: details.accountBalance,
          currentPlan: details.currentPlan,
          activeDeposit: details.activeDeposit,
          earnedTotal: details.earnedTotal,
        });
      }
    };

    getUser();
    getAccount();
  }, [userId]);

  useEffect(() => {
    console.log(account);
  }, [account]);

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

      <div className="flex justify-center">
        <StartTrade />
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-md">
        {/* -----  Row 1   -------*/}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">active deposit</h1>
            <p className="font-bold">${account?.activeDeposit}.00</p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">earned total</h1>
            <p className=" font-bold">${account?.earnedTotal}.00</p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">account balance</h1>
            <p className=" font-bold">${account?.accountBalance}.00</p>
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

      {/* Referral Tab */}

      <Referral referralCode={code || ""} />

      <TradingViewChart />
    </div>
  );
}

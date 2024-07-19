"use client";
import { account, databases } from "@/appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TradingViewChart from "@/components/dashboard/content/Chart";
import { Query } from "appwrite";
import { emailState } from "@/lib/store/store";

interface AccountProp {
  accountBalance: string;
  currentPlan: string;
  activeDeposit: string;
  earnedTotal: string;
}

export default function Dashboard() {
  const [userId, setUserId] = useState<null | string>(null);
  const [firstName, setFirstName] = useState();
  const { email } = emailState();
  const [account1, setAccount1] = useState<AccountProp>();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = (await account.get()).email;
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID as string,
          process.env.NEXT_PUBLIC_USER_COLLECTION_ID as string,
          [Query.equal("userId", user)]
        );
        const name = response.documents[0].name.split(" ")[0];
        setFirstName(name);
        console.log(user);
      } catch (error: any) {
        console.log(`Error: ${error.message}`);
      }
    };

    const getAccount = async () => {
      try {
        const user = (await account.get()).email;

        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID as string,
          process.env.NEXT_PUBLIC_ACCOUNTINFO_ID as string,
          [Query.equal("userId", user)]
        );

        const res = response.documents[0];

        setAccount1({
          accountBalance: res.accountBalance,
          currentPlan: res.currentPlan,
          activeDeposit: res.activeDeposit,
          earnedTotal: res.earnedTotal,
        });

        console.log(res);
      } catch (error: any) {
        console.log(`Error: ${error.message}`);
      }
    };

    // const getAccount = async () => {
    //   console.log(result);
    // };

    getUser();
    getAccount();
    // getAccount();
  }, [router]);

  // useEffect(() => {

  // });

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
              {convertAmount(account1?.activeDeposit || "")}
            </p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">earned total</h1>
            <p className=" font-bold">
              {convertAmount(account1?.earnedTotal || "")}
            </p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">account balance</h1>
            <p className=" font-bold">
              {convertAmount(account1?.accountBalance || "")}
            </p>
          </div>
          <p></p>
        </div>

        {/* ------ Row 2 ------- */}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">current plan</h1>
            <p className=" font-bold uppercase">{account1?.currentPlan}</p>
          </div>
          <p></p>
        </div>
      </div>
      <TradingViewChart />

      {/* Referral Tab */}

      {/* <Referral referralCode={code || ""} /> */}
    </div>
  );
}

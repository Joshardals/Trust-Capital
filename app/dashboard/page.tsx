import TradingViewChart from "@/components/dashboard/content/Chart";
import Referral from "@/components/dashboard/content/Referral";
import StartTrade from "@/components/dashboard/content/StartTrade";
import { auth } from "@/firebase";
import { checkAuth } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};
const page = async () => {
  const user = checkAuth();
  console.log(user);
  return (
    <div className=" h-full font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue overflow-y-auto">
      <div className="flex max-md:flex-col justify-center items-center md:justify-between md:items-center max-md:space-y-4">
        <div>
          <h1 className="text-lg md:text-xl font-semibold capitalize text-puregreen">
            Hi, Tommy Shelby
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
            <p className="font-bold">$0.00</p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">earned total</h1>
            <p className=" font-bold">$0.00</p>
          </div>
          <p></p>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">account balance</h1>
            <p className=" font-bold">$0.00</p>
          </div>
          <p></p>
        </div>

        {/* ------ Row 2 ------- */}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">current plan</h1>
            <p className=" font-bold">NONE</p>
          </div>
          <p></p>
        </div>
      </div>

      {/* Referral Tab */}

      <Referral />

      <TradingViewChart />
    </div>
  );
};

export default page;

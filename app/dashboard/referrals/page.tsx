import { RefStatistic } from "@/components/dashboard/referrals/RefStatistics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals | Trust-Capital Investment",
};

const page = () => {
  return (
    <div className=" font-sans space-y-10 text-navyblue md:p-5 max-md:p-5 bg-babyblue max-md:h-full">
      <div className="space-y-8 h-full">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          Your Referrals:
        </h1>

        <div className="max-md:text-xs">
          <div className="flex flex-col border-r border-r-babyblue rounded-full text-babyblue w-full">
            <div className=" grid max-md:grid-cols-3 bg-darkblue grid-cols-2 gap-4 items-center">
              <p className=" max-md:col-span-2 font-semibold border-r border-r-babyblue px-5 py-2">
                Referrals:
              </p>
              <p className="">0</p>
            </div>
            <div className="grid max-md:grid-cols-3 grid-cols-2 bg-navyblue gap-4 items-center">
              <p className=" max-md:col-span-2 font-semibold border-r border-r-babyblue px-5 py-2">
                Active Referrals:
              </p>
              <p className="">0</p>
            </div>
            <div className="grid bg-darkblue max-md:grid-cols-3  grid-cols-2 gap-4 items-center">
              <p className="max-md:col-span-2 font-semibold border-r border-r-babyblue px-5 py-2">
                Total Commission:
              </p>
              <p className="">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          referral statistics:
        </h1>

        <div>
          <RefStatistic />
        </div>
      </div>
    </div>
  );
};

export default page;

import Withdraw from "@/components/dashboard/withdraw/Withdraw";
import { Withdrawals } from "@/components/dashboard/your-withdrawal/Withdrawals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdraw | Trust-Capital Investment",
};

const page = () => {
  return (
    <div className=" font-sans space-y-8 max-md:text-xs text-navyblue md:p-5 max-md:p-5 bg-babyblue max-md:h-full">
      <div className="space-y-8 h-full">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          request a withdrawal
        </h1>

        <div className="space-y-4">
          <p className="font-semibold text-purered">
            Note: Before making any withdrawals, kindly confirm your withdrawal
            address by getting in touch with support.
          </p>

          <Withdraw />
        </div>
      </div>
    </div>
  );
};

export default page;

import { Withdrawals } from "@/components/dashboard/your-withdrawal/Withdrawals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdrawal History | Trust-Capital Investment",
};

const page = () => {
  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue max-md:h-full">
      <div className="space-y-8 h-full">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          withdrawal history
        </h1>
        <div>
          <Withdrawals />
        </div>
      </div>
    </div>
  );
};

export default page;

import { Metadata } from "next";
import { DepositHistory } from "../_components/your-deposit/DepositHistory";

export const metadata: Metadata = {
  title: "Deposit History | Trust-Capital Investment",
};

const page = () => {
  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue max-md:h-full">
      <div className="space-y-8 h-full">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          deposit history
        </h1>
        <div>
          <DepositHistory />
        </div>
      </div>
    </div>
  );
};

export default page;

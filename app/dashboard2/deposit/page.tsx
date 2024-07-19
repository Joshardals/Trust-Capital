import Plans from "../_components/deposit/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposit | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = () => {
  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue">
      <div className="space-y-8">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          select a plan
        </h1>
        <div className="space-y-8">
          <Plans />
        </div>
      </div>
    </div>
  );
};

export default page;

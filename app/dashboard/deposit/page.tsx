import Plans from "@/components/dashboard/deposit/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposit | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = () => {
  return (
    <div className="h-full font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue overflow-y-auto">
      <div className="space-y-8">
        <h1 className="capitalize text-lg font-semibold">pick a plan</h1>
        <div className="space-y-4">
          <Plans />
          <Plans />
          <Plans />
        </div>
      </div>
    </div>
  );
};

export default page;

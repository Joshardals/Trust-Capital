import { Icons } from "@/components/icons";
import React from "react";
import PlansItem from "./PlansItem";

const Plans = () => {
  return (
    <div className="space-y-6 font-sans text-navyblue">
      <div className="flex flex-col items-center space-y-2 w-full text-darkblue">
        <p>INVESTMENT PLANS</p>
        <h1 className="text-md font-bold md:text-xl md:font-semibold max-w-xl text-center capitalize">
          We provide you with the greatest investment plans available.
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <PlansItem
          plan="beginner plan"
          percentage="5"
          term="20"
          minMax="$100/$699"
          referral="2"
        />
        <PlansItem
          plan="advance trade plan"
          percentage="7"
          term="24"
          minMax="$700/$1499"
          referral="3"
        />
        <PlansItem
          plan="professional plan"
          percentage="12"
          term="36"
          minMax="$1500/$15000"
          referral="4"
        />

        {/* Row 2 */}

        <PlansItem
          plan="promo plan"
          percentage="9"
          term="7"
          minMax="$3000/$12000"
          referral="5"
        />
        <PlansItem
          plan="master trade plan"
          percentage="30"
          term="86"
          minMax="$15000/$Unlimited"
          referral="6"
        />
        <PlansItem
          plan="special plan"
          percentage="90"
          term="72"
          minMax="$7000/$Unlimited"
          referral="6"
        />
      </div>
    </div>
  );
};

export default Plans;

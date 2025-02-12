import { Shield, Check, Star } from "lucide-react";
import { PlanProps } from "@/typings";

const PlansItem = ({
  plan,
  percentage,
  term,
  minMax,
  referral,
  perks,
}: PlanProps) => {
  return (
    <div className="group relative p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Highlight badge for premium plans */}
      {Number(percentage) >= 10 && (
        <div className="absolute -top-3 -right-3 bg-puregreen text-white text-xs font-semibold px-3 py-1 rounded-full">
          Premium
        </div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Shield className="w-12 h-12 text-puregreen" />
          {Number(percentage) >= 12 && (
            <Star className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 fill-yellow-400" />
          )}
        </div>
        <div className="text-center">
          <p className="uppercase text-sm font-semibold tracking-wider text-gray-600">
            {plan}
          </p>
          <h1 className="text-4xl font-bold text-navyblue mt-2">
            {percentage}%
            <span className="text-base font-normal text-gray-500">
              {" "}
              /return
            </span>
          </h1>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-puregreen flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Plan Terms:</span>{" "}
            <span className="text-navyblue">
              {term} {`Hour${Number(term) > 1 ? "s" : ""}`}
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-puregreen flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Investment Range:</span>{" "}
            <span className="text-navyblue">{minMax}</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-puregreen flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Withdrawal:</span>{" "}
            <span className="text-navyblue">Instant</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-puregreen flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Referral Commission:</span>{" "}
            <span className="text-navyblue">{referral}%</span>
          </p>
        </div>

        {perks && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-gray-700">
              <span className="font-medium">Exclusive Perks:</span>{" "}
              <span className="text-navyblue">{perks}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlansItem;

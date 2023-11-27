import { Icons } from "@/components/icons";
import { PlanProps } from "@/typings";

const PlansItem = ({ plan, percentage, term, minMax, referral }: PlanProps) => {
  return (
    <div className="p-5 md:py-10 md:px-5 shadow-lg shadow-navyblue/40 flex flex-col space-y-6 rounded-2xl select-none">
      <div className="flex flex-col items-center space-y-2">
        <Icons.shield className="w-10 h-10" />
        <p className=" uppercase">{plan}</p>
        <h1 className="text-2xl font-semibold">{percentage}%</h1>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Icons.check className="h-4 w-4" />
          <p>
            Plan Terms: <span className="font-semibold">{term} Hours</span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Icons.check className="h-4 w-4" />
          <p>
            Minimum/Maximum: <span className="font-semibold">{minMax}</span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Icons.check className="h-4 w-4" />
          <p>
            Withdrawal: <span className="font-semibold">Instant</span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Icons.check className="h-4 w-4" />
          <p>
            Referral Commision:{" "}
            <span className="font-semibold">{referral}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlansItem;

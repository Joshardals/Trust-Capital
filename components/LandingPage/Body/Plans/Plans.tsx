import PlansItem from "./PlansItem";

const Plans = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-4 mb-12">
        <span className="px-4 py-1.5 bg-puregreen/10 text-puregreen font-semibold rounded-full text-sm">
          INVESTMENT PLANS
        </span>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-navyblue text-center max-w-2xl">
          We provide you with the greatest investment plans available.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PlansItem
          plan="starter plan"
          percentage="4"
          term="12"
          minMax="$50 - $999"
          referral="2"
        />
        <PlansItem
          plan="Basic Growth Plan"
          percentage="6"
          term="24"
          minMax="$1000 - $4,999"
          referral="3"
        />
        <PlansItem
          plan="Premium Trade Plan"
          percentage="8"
          term="24"
          minMax="$5000 - $14,999"
          referral="4"
        />
        <PlansItem
          plan="Advanced Investor Plan"
          percentage="10"
          term="36"
          minMax="$15,000 - $34,999"
          referral="5"
          perks="Priority withdrawal and trading insights."
        />
        <PlansItem
          plan="Elite Investor Plan"
          percentage="12"
          term="48"
          minMax="$35,000 - $74,999"
          referral="6"
          perks="Personalized investment support and exclusive portfolio strategies."
        />
        <PlansItem
          plan="retirement plan"
          percentage="30"
          term="1"
          minMax="$75,000 - $99,999"
          referral="6"
          perks="Complimentary portfolio review and trading insights."
        />
        <div className="md:col-span-2 lg:col-span-3">
          <PlansItem
            plan="Exclusive Fortune Plan"
            percentage="18"
            term="72"
            minMax="$100,000 and above"
            referral="7"
            perks="Direct account manager and premium investment advisory services."
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;

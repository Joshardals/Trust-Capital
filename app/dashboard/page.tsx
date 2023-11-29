import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};
const page = () => {
  return (
    <div className=" h-screen max-md:ml-[3.75rem] ml-80 font-sans space-y-8 text-navyblue md:p-5 max-md:p-4 bg-babyblue">
      <div>
        <h1 className="text-lg md:text-xl font-semibold capitalize text-puregreen">
          Hi, Tommy Shelby
        </h1>
        <p className="capitalize max-md:text-xs">
          welcome to trust-capital investment
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-md">
        {/* Row 1 */}
        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">active deposit</h1>
            <p className="font-bold">$0.00</p>
          </div>
          <p></p>
          <Link href="/deposit">
            <Button
              variant={"form"}
              className="w-full max-md:text-xs max-md:h-8"
            >
              Deposit Funds
            </Button>
          </Link>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">earned total</h1>
            <p className=" font-bold">$0.00</p>
          </div>
          <p></p>
          <Link href="/withdraw">
            <Button
              variant={"form"}
              className="w-full bg-goldenrod max-md:text-xs max-md:h-8"
            >
              Withdraw Funds
            </Button>
          </Link>
        </div>

        <div className="w-full h-full rounded-lg p-5 space-y-4 text-babyblue bg-navyblue">
          <div className="space-y-1">
            <h1 className="font-semibold uppercase">account balance</h1>
            <p className=" font-bold">$0.00</p>
          </div>
          <p></p>
          <Link href="/deposit">
            <Button
              variant={"form"}
              className="w-full max-md:text-xs max-md:h-8"
            >
              Withdrawal History
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

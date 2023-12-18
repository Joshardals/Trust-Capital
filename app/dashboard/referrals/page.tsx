import RefContainer from "@/components/dashboard/referrals/RefContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals | Trust-Capital Investment",
};

const page = () => {
  return (
    <div>
      <RefContainer />
    </div>
  );
};

export default page;

import ConfirmDeposit from "@/components/dashboard/deposit/ConfirmDeposit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Deposit | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

export default function page() {
  return <ConfirmDeposit />;
}

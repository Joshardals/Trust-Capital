import Onboarding from "@/components/onboarding/Onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding | Trust-Capital Investment",
  description: "Create your Account Informaiton for Trust-Capital",
};

export default async function Page() {
  return (
    <div className="block">
      <Onboarding />
    </div>
  );
}

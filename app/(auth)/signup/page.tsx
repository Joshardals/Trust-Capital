import SignUpContainer from "@/components/auth/SignUpContainer";
import Onboarding from "@/components/onboarding/Onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your login | Trust-Capital Investment",
  description: "Create your login for Trust-Capital",
  openGraph: {
    images: "https://i.ibb.co/BgKjLSK/store-Online.jpg",
  },
};

export default function page() {
  return (
    // <SignUpContainer />
    <div>
      <Onboarding />
    </div>
  );
}

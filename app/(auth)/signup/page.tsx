import SignUpContainer from "@/components/auth/SignUpContainer";
import Onboarding from "@/components/onboarding/Onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your login | Trust-Capital Investment",
  description: "Create your login for Trust-Capital",
  openGraph: {
    images:
      "https://images.deepai.org/machine-learning-models/0c7ba850aa2443d7b40f9a45d9c86d3f/text2imgthumb.jpeg",
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

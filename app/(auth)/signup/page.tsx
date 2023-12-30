import SignUpContainer from "@/components/auth/SignUpContainer";
import Onboarding from "@/components/onboarding/Onboarding";
import { Metadata } from "next";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Create your login | Trust-Capital Investment",
//   description: "Create your login for Trust-Capital",
// };

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Create your login | Trust-Capital Investment",
    image:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
    description: "Create your login for Trust-Capital",
  };
  return (
    // <SignUpContainer />
    <div>
       <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Onboarding />
    </div>
  );
}

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen  bg-navyblue">
      <SignUp
      afterSignUpUrl="/onboarding"
        appearance={{
          elements: {
            headerTitle: "text-navyblue",
            headerSubtitle: "text-navyblue",
            socialButtonsBlockButton:
              "transition-all duration-300 hover:bg-navyblue/10",
            socialButtonsBlockButtonText__google: "text-navyblue",
            dividerText: "text-navyblue",
            footerActionText: "text-navyblue",
            footerActionLink:
              "text-navyblue font-bold transition-all duration-300 hover:text-navyblue/50 focus:appearance-none",
            formFieldLabel: "text-navyblue",
            formButtonPrimary:
              "bg-goldenrod text-navyblue hover:bg-goldenrod/90 transition-all duration-300",
          },
        }}
      />
      ;
    </div>
  );
}

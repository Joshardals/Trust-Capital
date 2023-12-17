"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { fetchUser } from "@/lib/action/user.action";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithPopup(auth, provider);

      const result = userCredential;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (user) {
        const userId = user.providerData[0].uid;
        const details = await fetchUser(userId);

        if (details) {
          const onboardedStatus = details.onboarded;

          if (onboardedStatus) {
            router.push("/dashboard");
          }
        } else {
          router.push("/onboarding");
        }
      }
    } catch (error: any) {
      console.log(`Error Creating Account: ${error.message}`);
    }
  };
  return (
    <Button
      onClick={handleSignup}
      className="button border transition-all duration-300 border-babyblue text-navyblue
        bg-babyblue hover:bg-babyblue/70 rounded-full px-6 max-md:text-xs max-md:h-10 "
    >
      Login
    </Button>
  );
};

export default Login;

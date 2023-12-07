"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const handleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);

      const result = userCredential;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (user) {
        console.log(user);
        const creationTime = user.metadata.creationTime;
        if (creationTime) {
          const currentTime: any = new Date();
          const creationTimeStamp = new Date(creationTime).getTime();
          const timeDifference = currentTime - creationTimeStamp;

          const isNewAccount = timeDifference < 60000;

          if (isNewAccount) {
            console.log("This is a new account!!");
            router.push("/onboarding");
          } else {
            console.log("This is an existing account!");
            router.push("/dashboard");
          }
        }
      }
    } catch (error: any) {
      console.log(`Error Creating Account: ${error.message}`);
    }
  };
  return (
    <Button
      onClick={handleSignup}
      className="max-md:hidden button border border-babyblue text-babyblue
       hover:bg-opacity-50 hover:bg-darkblue rounded-full px-6 "
    >
      Get Started
    </Button>
  );
};

export default Login;

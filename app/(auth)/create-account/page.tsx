"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {

  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase";

const page = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const handleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);

      const result = userCredential;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (user) {
        console.log(user);
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log("Error Signing Up: ", error);
    }
  };
  return (
    <div className="bg-babyblue h-screen">
      <div className="flex flex-col bg-goldenrod justify-center p-5 items-center space-y-10">
        <h1>Sign Up</h1>
        
        <button className="p-4 bg-puregreen" onClick={handleSignUp}>
          Sign Up with google
        </button>

        {/* <button onClick={handleSignup} className="p-4 bg-puregreen">
          Sign Up
        </button> */}
      </div>
    </div>
  );
};

export default page;

// pages/signinWithEmailLink.js
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "@/firebase";
// import { sendSignInLinkToEmail } from "firebase/auth";

// const SignInWithEmailLink = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");

//   const handleSendSignInLink = async () => {
//     try {
//       // Construct ActionCodeSettings object
//       const actionCodeSettings = {
//         url: "http://localhost:3000/create-account",
//         handleCodeInApp: true,
//         // iOS: {
//         //   bundleId: "com.example.ios",
//         // },
//         // android: {
//         //   packageName: "com.example.android",
//         //   installApp: true,
//         //   minimumVersion: "12",
//         // },
//         // dynamicLinkDomain: "example.page.link",
//       };

//       // Send the authentication link to the user's email
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);

//       // Save the email locally for use after completing the email sign-in
//       window.localStorage.setItem("emailForSignIn", email);

//       // Inform the user that the link was successfully sent
//       // You may want to display a message or redirect the user
//       // ...
//       console.log("Link sent succesfully!");
//     } catch (error: any) {
//       console.error("Send sign-in link error:", error.message);
//     }
//   };

//   return (
//     <div className="p-5 bg-goldenrod flex flex-col items-center space-y-10">
//       <h1>Sign In with Email Link</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSendSignInLink} className="bg-puregreen px-5 py-2">
//         Send Sign-In Link
//       </button>
//     </div>
//   );
// };

// export default SignInWithEmailLink;

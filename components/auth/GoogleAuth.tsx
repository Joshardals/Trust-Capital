// import { Button } from "@/components/ui/button";
// import { auth, db } from "@/firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// export default function GoogleAuth() {
// const provider = new GoogleAuthProvider();
//   const router = useRouter();

//   const handleGoogle = async (e: any) => {
//     e.preventDefault();
//     alert("Signing in with Google");
//     try {
//       const userCredential = await signInWithPopup(auth, provider);
//       const user = userCredential.user;

//       console.log("User created", user);

//       // const { providerData } = user;

//       const userDocRef = doc(db, "users", user.email!);
//       const userSnap = await getDoc(userDocRef);

//       if (!userSnap.exists) {
//         await setDoc(
//           userDocRef,
//           {
//             userId: user.email,
//             name: user?.displayName || "",
//             email: user?.email || "",
//             onboarded: true || "",
//             // phoneNumber: values.phoneNumber,
//             trade: false,
//             createdAt: new Date(),
//           },
//           { merge: true }
//         );

//         // Creating Wallets Start

//         const walletDocRef = doc(db, "wallets", user.email!);
//         await setDoc(
//           walletDocRef,
//           {
//             walletId: user.email,
//             secretKey: "1234",
//             usdtAddress: "",
//             btcAddress: "",
//             ethereumAddress: "",
//             litecoinAddress: "",
//             dogeAddress: "",
//             tronAddress: "",
//             bnbAddress: "",
//             shibaAddress: "",
//           },
//           { merge: true }
//         );

//         // Creating Wallets End

//         console.log("Wallet document created in firebase");

//         // Creating Wallets End

//         // Creating Account Information Start

//         const detailsDocRef = doc(db, "accountInfo", user.email!);

//         await setDoc(
//           detailsDocRef,
//           {
//             userId: user.email,
//             accountBalance: 0.0,
//             currentPlan: "none",
//             activeDeposit: 0.0,
//             earnedTotal: 0.0,
//           },
//           { merge: true }
//         );

//         console.log("Details document created in firebase");

//         // Creating Account Information End
//       }

//       router.push("/dashboard");
//     } catch (error: any) {
//       console.error(`Login Failed: ${error.message}`);
//     }
//   };
//   return (
//     <Button
//       className="border border-goldenrod bg-transparent text-navyblue px-10 rounded-full hover:bg-goldenrod"
//       onClick={handleGoogle}
//     >
//       Sign In With Google
//     </Button>
//   );
// }

import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.alert("User created Successfully");
    } catch (error: any) {
      setError(error.message);
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogle}
        className="border border-goldenrod bg-transparent py-2 text-navyblue px-10 rounded-full hover:bg-goldenrod"
      >
        Sign In With Google
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default GoogleAuth;

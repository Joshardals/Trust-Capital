// "use server";
// import {
//   doc,
//   getDoc,
//   serverTimestamp,
//   setDoc,
//   onSnapshot,
// } from "firebase/firestore";
// import { db } from "@/firebase";
// import { revalidatePath } from "next/cache";

// const bcrypt = require("bcrypt");

// interface params {
//   id: string;
//   secretKey: string;
//   usdtAddress: string;
//   btcAddress: string;
//   ethereumAddress: string;
//   litecoinAddress: string;
//   dogeAddress: string;
//   tronAddress: string;
//   bnbAddress: string;
//   shibaAddress: string;
// }

// interface secret {
//   id: string;
//   providedKey: string;
// }

// export async function createWallet({
//   id,
//   secretKey,
//   usdtAddress,
//   btcAddress,
//   ethereumAddress,
//   litecoinAddress,
//   dogeAddress,
//   tronAddress,
//   bnbAddress,
//   shibaAddress,
// }: params) {
//   try {
//     const hashedSecretKey = await bcrypt.hash(secretKey, 10);
//     const walletDocRef = doc(db, "wallets", id);
//     setDoc(
//       walletDocRef,
//       {
//         walletId: id,
//         secretKey: hashedSecretKey,
//         usdtAddress,
//         btcAddress,
//         ethereumAddress,
//         litecoinAddress,
//         dogeAddress,
//         tronAddress,
//         bnbAddress,
//         shibaAddress,
//         createdAt: serverTimestamp(),
//       },
//       { merge: true }
//     );
//     console.log("Wallet Succesfully Updated!");
//   } catch (error: any) {
//     console.log(`Error creating wallets! ${error.message}`);
//   }
// }

// export async function fetchWallets(id: string) {
//   try {
//     const walletDocRef = doc(db, "wallets", id);
//     const walletDocSnap = await getDoc(walletDocRef);

//     if (walletDocSnap.exists()) {
//       const walletData = walletDocSnap.data();

//       revalidatePath("/dashboard/withdraw");
//       return walletData;
//     }
//   } catch (error: any) {
//     console.log(`Error retrieving Wallets; ${error.message}`);
//   }
// }

// export async function checkSecretKey({ id, providedKey }: secret) {
//   try {
//     const walletDocRef = doc(db, "wallets", id);
//     const walletDocSnap = await getDoc(walletDocRef);

//     if (walletDocSnap.exists()) {
//       const storedHashSecretKey = walletDocSnap.data()?.secretKey;

//       //Compare the provided secret key with the stored hashed secretkey
//       const isMatch = await bcrypt.compare(providedKey, storedHashSecretKey);

//       if (isMatch) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } catch (error: any) {
//     console.log(`Error checking secret key: ${error.message}`);
//   }
// }

"use server";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";

interface params {
  id: string;
  usdtAddress: string;
  btcAddress: string;
  ethereumAddress: string;
  litecoinAddress: string;
  dogeAddress: string;
  tronAddress: string;
  bnbAddress: string;
  shibaAddress: string;
}

export async function createWallet({
  id,
  usdtAddress,
  btcAddress,
  ethereumAddress,
  litecoinAddress,
  dogeAddress,
  tronAddress,
  bnbAddress,
  shibaAddress,
}: params) {
  try {
    const walletDocRef = doc(db, "wallets", id);
    setDoc(
      walletDocRef,
      {
        walletId: id,
        usdtAddress,
        btcAddress,
        ethereumAddress,
        litecoinAddress,
        dogeAddress,
        tronAddress,
        bnbAddress,
        shibaAddress,
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
    console.log("Wallet Succesfully Updated!");
  } catch (error: any) {
    console.log(`Error creating wallets! ${error.message}`);
  }
}

export async function fetchWallets(id: string) {
  try {
    const walletDocRef = doc(db, "wallets", id);
    const walletDocSnap = await getDoc(walletDocRef);

    if (walletDocSnap.exists()) {
      const walletData = walletDocSnap.data();
      return walletData;
    }
  } catch (error: any) {
    console.log(`Error retrieving Wallets; ${error.message}`);
  }
}

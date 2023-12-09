"use server";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
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

export async function updateWallet({
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
    setDoc(walletDocRef, {
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
    });
    console.log("Wallet Succesfully Updated!");
  } catch (error: any) {
    console.log(`Error creating wallets! ${error.message}`);
  }
}

"use server";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

interface params {
  id: string;
  name: string;
  email: string;
  onboarded: boolean;
  referralCode: string;
}

export async function updateUser({
  id,
  name,
  email,
  onboarded,
  referralCode,
}: params) {
  try {
    const userDocRef = doc(db, "users", id);
    setDoc(
      userDocRef,
      {
        userId: id,
        name,
        email,
        onboarded: onboarded,
        referralCode,
        referralCount: 0,
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
    console.log("User successfully updated!");
  } catch (error: any) {
    console.log(`Error creating users! ${error.message}`);
  }
}

export async function fetchUser(id: string) {
  try {
    const userDocRef = doc(db, "users", id);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      return userData;
    }
  } catch (error: any) {
    console.log(`Error retrieving Users: ${error.message}`);
  }
}

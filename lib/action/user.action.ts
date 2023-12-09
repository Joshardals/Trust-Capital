"use server";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

interface params {
  id: string;
  name: string;
  email: string;
  onboarded: boolean;
}

export async function updateUser({ id, name, email, onboarded }: params) {
  try {
    const userDocRef = doc(db, "users", id);
    setDoc(
      userDocRef,
      {
        userId: id,
        name,
        email,
        onboarded: onboarded,
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

import { auth } from "@/firebase";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkAuth() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("Current User:", user);
    } else {
      console.log("No user signed in");
    }
  });
}

import { auth } from "@/firebase";
import { type ClassValue, clsx } from "clsx";
import { onAuthStateChanged } from "firebase/auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

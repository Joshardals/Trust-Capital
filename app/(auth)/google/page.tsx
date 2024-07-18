"use client";

import GoogleAuth from "@/components/auth/GoogleAuth";
import { Toaster } from "@/components/ui/toaster";

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <Toaster />
      <GoogleAuth />
    </div>
  );
}

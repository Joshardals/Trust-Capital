"use client";

import GoogleAuth from "@/components/auth/GoogleAuth";

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <GoogleAuth />
    </div>
  );
}

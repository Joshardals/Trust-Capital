"use client";
import "./globals.css";
import { open_sans, playfair } from "@/components/ui/font";
import Script from "next/script";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${open_sans.variable} ${playfair.variable} bg-navyblue p-0 m-0 h-full w-full scroll-smooth`}
    >
      <body className="bg-purewhite">{children}</body>
     
    </html>
  );
}

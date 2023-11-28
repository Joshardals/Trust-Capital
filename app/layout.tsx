import type { Metadata } from "next";
import "./globals.css";
import { open_sans, playfair } from "@/components/ui/font";

export const metadata: Metadata = {
  title: "Home | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-navyblue p-0 m-0 h-full w-full scroll-smooth">
      <body
        className={`${open_sans.variable} ${playfair.variable} scroll-smooth bg-purewhite`}
      >
        {children}
      </body>
    </html>
  );
}

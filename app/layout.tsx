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
    <html lang="en">
      <body
        className={`${open_sans.variable} ${playfair.variable} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}

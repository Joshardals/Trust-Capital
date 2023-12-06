import type { Metadata } from "next";
import "./globals.css";
import { open_sans, playfair } from "@/components/ui/font";
import { ClerkProvider } from "@clerk/nextjs";

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
    <html
      lang="en"
      className={` ${open_sans.variable} ${playfair.variable} bg-navyblue p-0 m-0 h-full w-full scroll-smooth`}
    >
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#D8A31A",
            colorText: "#001F3F",
            colorInputText: "#001F3F",
          },
        }}
      >
        <body className="bg-purewhite">{children}</body>
      </ClerkProvider>
    </html>
  );
}

import SignUpContainer from "@/components/auth/SignUpContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your login | Trust-Capital Investment",
  description: "Create your login for Trust-Capital",
};

export default function page() {
  return (
    <SignUpContainer />
  )
}

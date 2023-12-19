import LoginContainer from "@/components/auth/LoginContainer";
import { UserSignInForm } from "@/components/forms/user-sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Trust-Capital Investment",
  description: "Create your login for Trust-Capital",
};
const page = () => {
  return <LoginContainer />;
};

export default page;

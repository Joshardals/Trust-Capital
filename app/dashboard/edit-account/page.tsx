import { Metadata } from "next";
import EditAccount from "@/components/forms/EditAccount";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Edit Account | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = async () => {
  return (
    <div>
      <EditAccount />

      <Toaster />
    </div>
  );
};

export default page;

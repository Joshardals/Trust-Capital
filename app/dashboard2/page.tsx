import { Metadata } from "next";
import Dashboard from "./_components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = async () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;

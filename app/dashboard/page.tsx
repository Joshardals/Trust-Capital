import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import { fetchUser } from "@/lib/action/user.action";
import { Dashboard } from "@/components/dashboard/content/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = async () => {

  // if (userId) {
  //   const userDetails = await fetchUser(userId);

  //   console.log(userDetails);
  // }
  return (
   <div>
    <Dashboard />
   </div>
  );
};

export default page;

import React from "react";
import { Icons } from "@/components/icons";
import Features from "./Features/Features";
import Plans from "./Plans/Plans";

const Body = () => {
  return (
    <div className="px-5 md:px-20 py-10 space-y-10">
      <Features />
      <Plans />
    </div>
  );
};

export default Body;

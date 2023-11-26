import React from "react";
import { Icons } from "@/components/icons";
import Features from "./Features/Features";
import Plans from "./Plans/Plans";

const Body = () => {
  return (
    <div className="px-5 md:px-20 py-10 ">
      <div className="py-20">
        <Features />
      </div>
      <div id="learn-more" className="py-20">
        <Plans />
      </div>
    </div>
  );
};

export default Body;

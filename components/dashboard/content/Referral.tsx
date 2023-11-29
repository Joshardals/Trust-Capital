import { Button } from "@/components/ui/button";
import React from "react";

const Referral = () => {
  return (
    <div className="space-y-2 max-md:text-xs">
      <h1 className="text-lg md:text-xl font-semibold capitalize text-puregreen">
        YOUR REFERRAL LINK
      </h1>
      <div className="space-y-2">
        <p>To copy your referral link, click the button below.</p>
        <div className="w-full bg-black/10 py-2 px-5 rounded-lg cursor-pointer">
          <p>http://localhost:3000/signup?ref=tommy</p>
        </div>
      </div>

      <Button
        variant={"form"}
        className="max-md:text-xs max-md:h-8 border-none bg-puregreen hover:bg-puregreen/90 text-babyblue"
      >
        Copy Link
      </Button>
    </div>
  );
};

export default Referral;
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StartTrade = () => {
  const [started, setStarted] = useState(false);
  return (
    <div className="flex md:items-center md:space-x-4 max-md:flex-col space-y-2">
      <Button
        variant={"form"}
        onClick={() => setStarted(true)}
        className="rounded-lg bg-darkblue hover:bg-darkblue/80 text-purewhite"
      >
        Start
      </Button>
      <div className=" bg-navyblue shadow-inner shadow-goldenrod p-4 h-32 w-32 rounded-full flex items-center justify-center">
        <div className=" rounded-full h-24 w-24 shadow-2xl shadow-goldenrod"></div>
      </div>
      <Button
        variant={"form"}
        onClick={() => setStarted(true)}
        className="rounded-lg bg-darkblue hover:bg-darkblue/80 text-purewhite"
      >
        Trade
      </Button>
    </div>
  );
};

export default StartTrade;

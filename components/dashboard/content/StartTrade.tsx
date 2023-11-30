"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StartTrade = () => {
  const [started, setStarted] = useState(false);
  return (
    <Button
      variant={"form"}
      onClick={() => setStarted(true)}
      className="max-md:text-xs h-20 w-20 bg-puregreen text-babyblue border border-goldenrod
       transition-all duration-300 hover:bg-puregreen/80 border-none rounded-full"
    >
      {started ? "Trade Begin" : "Start Trade"}
    </Button>
  );
};

export default StartTrade;

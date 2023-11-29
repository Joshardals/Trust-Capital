"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StartTrade = () => {
  const [started, setStarted] = useState(false);
  return (
    <Button
      variant={"form"}
      onClick={() => setStarted(true)}
      className="max-md:text-xs max-md:h-8 bg-puregreen text-babyblue
       transition-all duration-300 hover:bg-puregreen/80 border-none"
    >
      {started ? "Trade Begin" : "Start Trade"}
    </Button>
  );
};

export default StartTrade;

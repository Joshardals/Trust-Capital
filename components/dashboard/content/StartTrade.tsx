"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { start } from "repl";

const StartTrade = () => {
  const [started, setStarted] = useState(false);
  return (
    <div className="flex select-none md:items-center md:space-x-4 max-md:flex-col space-y-2 text-babyblue">
      <div
        onClick={() => setStarted(!started)}
        className={`transition-all duration-300 ${
          started ? "bg-purered" : "bg-puregreen"
        } shadow-2xl border cursor-pointer border-goldenrod shadow-goldenrod p-4 h-32 w-32 rounded-full flex items-center justify-center`}
      >
        <p className="font-bold">{started ? "Stop Trade" : "Start Trade"}</p>
      </div>
    </div>
  );
};

export default StartTrade;

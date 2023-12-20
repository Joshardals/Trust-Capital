"use client";
import { Button } from "@/components/ui/button";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { start } from "repl";

const StartTrade = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [started, setStarted] = useState(false);
  const [accountBalance, setAccountBalance] = useState("0");
  const [trade, setTrade] = useState(false);

  useEffect(() => {
    const getAccount = async () => {
      const accountDocRef = doc(db, "accountInfo", userId);
      const accountDocSnap = await getDoc(accountDocRef);

      if (accountDocSnap.exists()) {
        const details = accountDocSnap.data();
        setAccountBalance(details.accountBalance);
      }
    };

    getAccount();
  }, [userId]);

  const handleStartTrade = async () => {
    if (Number(accountBalance) !== 0) {
      console.log("Trade begin");

      const userDocSnap = await getDoc(doc(db, "users", userId));

      if (userDocSnap.exists()) {
        const details = userDocSnap.data();
        setTrade(details.trade);
        console.log(details.trade);
      }
    } else {
      alert("Before you can start trading, you must first make a deposit.");
    }
  };

  return (
    <div className="flex select-none md:items-center md:space-x-4 max-md:flex-col space-y-2 text-babyblue">
      <div
        onClick={handleStartTrade}
        className={`transition-all duration-300 ${
          trade ? "bg-purered" : "bg-puregreen"
        } shadow-2xl border cursor-pointer border-goldenrod shadow-goldenrod p-4 h-32 w-32 rounded-full flex items-center justify-center`}
      >
        <p className="font-bold">{trade ? "Stop Trade" : "Start Trade"}</p>
      </div>
    </div>
  );
};

export default StartTrade;

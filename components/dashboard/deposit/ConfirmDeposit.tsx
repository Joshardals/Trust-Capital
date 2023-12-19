"use client";
import { Button } from "@/components/ui/button";
import { ConfirmDepositValidation } from "@/lib/validations/form";
import { ConfirmDepositType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ConfirmDepositForm from "@/components/forms/ConfirmDepositForm";
import { useEffect, useState } from "react";

export default function ConfirmDeposit() {
  const [amount, setAmount] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const tradePlan = searchParams.get("plantype");

  const setPrice = (tradePlan: string) => {
    switch (tradePlan) {
      case "beginners":
        return "$100 - $699";
      case "advanced trade":
        return "$700 - $1499";
      case "professional":
        return "$1500 - $3999";
      case "promo":
        return "$4000 - $8999";
      case "master trade":
        return "$9000 - $15000";
      case "retirement":
        return "$15000 - $unlimited";
    }
  };

  useEffect(() => {
    setAmount(setPrice(tradePlan || ""));
  }, []);
  return (
    <div className=" bg-babyblue max-md:h-screen text-navyblue w-full p-5 space-y-6 max-md:text-xs">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold text-lg text-darkblue">Deposit Crypto</h1>
          <p className="text-purered font-bold">
            Send the appropriate amount to any listed crypto wallet address of
            your choice:
          </p>
        </div>

        <div className="space-y-4">
          <div className="font-bold">
            <p className="text-darkblue">- USDT ADDRESS:</p>
            <p>TYXG7tqURwCpb9EZTyqpQ3SuYkyyhEb5ei</p>
          </div>

          <div className="font-bold">
            <p className="text-darkblue">- BITCOIN ADDRESS:</p>
            <p> bc1qek4azk79ulmy3mukx84nzfksackdcuq7fjlez2</p>
          </div>

          <div className="font-bold">
            <p className="text-darkblue"> - TRON ADDRESS:</p>
            <p> TYXG7tqURwCpb9EZTyqpQ3SuYkyyhEb5ei</p>
          </div>
          <div className="font-bold">
            <p className="text-darkblue"> - LITECOIN ADDRESS</p>
            <p> ltc1qgqhehdn6wlvunzpd8qrhyrzhqqn3499hmgydgk</p>
          </div>
          <div className="font-bold">
            <p className="text-darkblue"> - SHIBA INU ADDRESS</p>
            <p> 0x0339538e08DeC6C8d368B2BE562A12Db57a98fb1</p>
          </div>
          <div className="font-bold">
            <p className="text-darkblue"> - BNB ADDRESS</p>
            <p>0x0339538e08DeC6C8d368B2BE562A12Db57a98fb1</p>
          </div>
          <div className="font-bold">
            <p className="text-darkblue"> - DOGE ADDRESS</p>
            <p>DN7qU9xMHfqYpRPPXLPTFs6bf17DgHtJd4</p>
          </div>
        </div>

        <div className="">
          <p>
            Selected Plan:{" "}
            <span className="text-puregreen capitalize font-bold">
              {tradePlan}
            </span>
          </p>
          <p>
            Amount to deposit:{" "}
            <span className="text-puregreen font-bold">
              Between {setPrice(tradePlan || "")}
            </span>
          </p>
        </div>
      </div>

      <ConfirmDepositForm plan={tradePlan || ""} />
    </div>
  );
}

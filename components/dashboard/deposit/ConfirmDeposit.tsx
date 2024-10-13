"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import ConfirmDepositForm from "@/components/forms/ConfirmDepositForm";
import { useEffect, useState } from "react";
import ConfirmDetails from "./ConfirmDetails";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConfirmDeposit() {
  const [amount, setAmount] = useState<string | undefined>();
  const [walletAddress, setWalletAddress] = useState("");
  const searchParams = useSearchParams();
  const tradePlan = searchParams.get("plantype");
  const depositAmount = searchParams.get("amount");
  const email = searchParams.get("userEmail");
  const method = searchParams.get("planMethod");

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
  const convertAmount = (amount: string) => {
    return Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const checkMethodSetPrice = (method: string | "") => {
    switch (method) {
      case "usdt":
        setWalletAddress("TTrB7EPWBc82NSpGa57kcJeFZ3Hqnmkiv4");
        break;
      case "bitcoin":
        setWalletAddress("bc1qek4azk79ulmy3mukx84nzfksackdcuq7fjlez2");
        break;
      case "ethereum":
        setWalletAddress("0x0339538e08DeC6C8d368B2BE562A12Db57a98fb1");
        break;
      case "litecoin":
        setWalletAddress("ltc1qgqhehdn6wlvunzpd8qrhyrzhqqn3499hmgydgk");
        break;
      case "doge":
        setWalletAddress("0xa3C99F287350026705eB37091B8795820cB5B8ff");
        break;
      case "tron":
        setWalletAddress("TYXG7tqURwCpb9EZTyqpQ3SuYkyyhEb5ei");
        break;
      case "bnb":
        setWalletAddress("0x0339538e08DeC6C8d368B2BE562A12Db57a98fb1");
        break;
      case "shiba":
        setWalletAddress("0x0339538e08DeC6C8d368B2BE562A12Db57a98fb1");
        break;
    }
  };

  useEffect(() => {
    setAmount(setPrice(tradePlan || ""));
    checkMethodSetPrice(method || "");
  }, []);

  return (
    <div className=" bg-babyblue text-navyblue w-full p-5 space-y-6 max-md:text-xs">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold text-lg text-darkblue">
            Confirm your Deposit
          </h1>
          <p className="text-purered font-bold">
            Warning: Before depositing, please confirm the wallet address by
            contacting the support system.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            {" "}
            <h1 className="text-md max-md:text-xs text-darkblue font-semibold">
              Kindly transfer your funds to this account.
            </h1>
            <p className="font-bold text-lg max-md:text-xs">{walletAddress}</p>
            <CopyToClipboard
              text={walletAddress}
              onCopy={() => toast("Address Copied")}
            >
              <Button variant={"form"} className="text-xs p-2 h-auto">
                Copy Address
              </Button>
            </CopyToClipboard>
            <ToastContainer />
          </div>

          <div className="border-t border-t-navyblue">
            <ConfirmDetails
              label="Selected Plan:"
              info={tradePlan?.toUpperCase() + " PLAN" || ""}
            />
            <ConfirmDetails label="Principal Return:" info="Yes" />
            <ConfirmDetails
              label="Principal Withdraw:"
              info="Available with 0.00% Fee"
            />
            <ConfirmDetails
              label="Amount:"
              info={convertAmount(depositAmount || "")}
            />
            <ConfirmDetails label="Payer Email:" info={email || ""} />
            <ConfirmDetails
              label="Preferred Method:"
              info={method?.toUpperCase() || ""}
            />
          </div>
        </div>
      </div>

      <ConfirmDepositForm
        amount={depositAmount || ""}
        method={method || ""}
        plan={tradePlan || ""}
      />
    </div>
  );
}

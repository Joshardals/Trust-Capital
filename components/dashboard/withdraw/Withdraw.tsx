"use client";

import { auth, db } from "@/firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Address from "./Address";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { WithdrawalType } from "@/typings";
import { WithdrawValidation } from "@/lib/validations/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { sendMail } from "@/lib/mail";

interface walletDetails {
  btcAddress: string;
  usdtAddress: string;
  ethereumAddress: string;
  litecoinAddress: string;
  dogeAddress: string;
  tronAddress: string;
  bnbAddress: string;
  shibaAddress: string;
}

const method = [
  { method: "usdt" },
  { method: "bitcoin" },
  { method: "ethereum" },
  { method: "litecoin" },
  { method: "doge" },
  { method: "tron" },
  { method: "bnb" },
  { method: "shiba" },
];

const Withdraw = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [wallet, setWallet] = useState<walletDetails>();
  const [accountBalance, setAccountBalance] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const form = useForm<WithdrawalType>({
    resolver: zodResolver(WithdrawValidation),
  });

  useEffect(() => {
    const walletDocRef = doc(db, "wallets", userId);
    onSnapshot(walletDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        setWallet(res as walletDetails);
      } else {
        console.log("no-data");
      }
    });
  }, [userId]);

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

  const convertAmount = (amount: string) => {
    return Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const userDocRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const res = userDocSnap.data();
        setUsername(res.name);
      }
    };

    getUsers();
  }, []);

  const onSubmit = async (values: WithdrawalType) => {
    if (
      Number(values.amount) <= Number(accountBalance) &&
      Number(values.amount) > 0
    ) {
      setIsLoading(true);
      setIsDisabled(true);

      try {
        const withdrawDocRef = doc(db, "withdrawals", userId);
        const docSnapshot = await getDoc(withdrawDocRef);

        if (docSnapshot.exists()) {
          const currentWithdrawals = docSnapshot.data()?.withdrawals || [];
          const updatedWithdrawls = arrayUnion(
            {
              status: "pending",
              method: values.method,
              created: new Date(),
              amount: values.amount,
              userId: userId,
            },
            ...currentWithdrawals
          );

          await setDoc(withdrawDocRef, { withdrawals: updatedWithdrawls });

          await sendMail({
            to: "jahrulemyla@gmail.com",
            name: "Jahrule",
            subject: "Withdrawal Request",
            body: `<p>${userId}, ${username.toUpperCase()} has requested a withdrawal of the sum of ${convertAmount(
              values.amount
            )} using the ${values.method.toUpperCase()} payment method.</p>`,
          });

          await sendMail({
            to: `${userId}`,
            name: `${username}`,
            subject: "Processing Withdrawal",
            body: `<p>Your ${convertAmount(
              values.amount
            )} withdrawal is being processed and is awaiting confirmation.
             It will directly be sent to your specified wallet address upon confirmation; please review your withdrawal history to ascertain the status.</p>`,
          });

          router.push("/dashboard/your-withdrawal");
        } else {
          await setDoc(withdrawDocRef, {
            withdrawals: arrayUnion({
              status: "pending",
              method: values.method,
              created: new Date(),
              amount: values.amount,
              userId: userId,
            }),
          });

          await sendMail({
            to: "joshardalsgates@gmail.com",
            name: "Joshua",
            subject: "Withdrawal Request",
            body: `<p>${userId}, ${username.toUpperCase()} has requested a withdrawal of the sum of ${convertAmount(
              values.amount
            )} using the ${values.method.toUpperCase()} payment method.</p>`,
          });

          await sendMail({
            to: `${userId}`,
            name: `${username}`,
            subject: "Processing Withdrawal",
            body: `<p>Your ${convertAmount(
              values.amount
            )} withdrawal is being processed and is awaiting confirmation.
             It will directly be sent to your specified wallet address upon confirmation; please review your withdrawal history to ascertain the status.</p>`,
          });
          router.push("/dashboard/your-withdrawal");
        }
      } catch (error: any) {
        console.log("Error: ", error.message);
      }

      alert("Withdrawal request is successful, Kindly check your mail inbox.");
      setIsLoading(false);
      setIsDisabled(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="space-y-4">
      <div className=" border-x border-x-navyblue border-t border-t-navyblue w-full overflow-x-auto">
        <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
          <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
            Account Balance:
          </p>
          <p className="font-semibold md:py-2 col-span-2">
            {" "}
            {convertAmount(accountBalance)}
          </p>
        </div>

        <Address label="USDT" address={wallet?.usdtAddress} />
        <Address label="BITCOIN" address={wallet?.btcAddress} />
        <Address label="ETHEREUM" address={wallet?.ethereumAddress} />
        <Address label="LITECOIN" address={wallet?.litecoinAddress} />
        <Address label="DOGECOIN" address={wallet?.dogeAddress} />
        <Address label="TRON" address={wallet?.tronAddress} />
        <Address label="BNB" address={wallet?.bnbAddress} />
        <Address label="SHIBA" address={wallet?.shibaAddress} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" max-md:text-xs w-full space-y-4 h-full select-none"
        >
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className=" relative">
                      <div className="space-y-6">
                        {method.map((item, index) => (
                          <FormItem key={index}>
                            <div className="flex items-center space-x-4">
                              <FormControl>
                                <RadioGroupItem value={item.method} />
                              </FormControl>
                              <FormLabel className="max-md:text-xs">{`Withdraw funds to ${item.method.toUpperCase()}`}</FormLabel>
                            </div>
                          </FormItem>
                        ))}
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="md:space-x-4 flex max-md:flex-col md:items-center space-y-4">
                <Label htmlFor="amount" className="">
                  Amount to withdraw ($):
                </Label>
                <FormControl className="no-focus">
                  <div className=" relative">
                    <Input
                      id="amount"
                      type="number"
                      className={`py-2 ${
                        isDisabled ? "disableForm" : null
                      }  px-5 border border-navyblue text-sm transition-all duration-500 w-48`}
                      {...field}
                    />
                    {/* <div className={`${isDisabled ? "disableInput" : null}`} /> */}
                    <div
                      className={`${
                        isDisabled &&
                        "absolute top-0 left-0 h-full bg-darkblue/20 w-48"
                      }`}
                    ></div>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-purered" />
                {error && (
                  <p className="text-xs text-purered">
                    Withdrawal amount exceeding account balance
                  </p>
                )}
              </FormItem>
            )}
          />
          <Button
            variant={"form"}
            type="submit"
            disabled={isLoading}
            className="w-48 max-md:text-xs max-md:h-8"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Withdraw
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Withdraw;

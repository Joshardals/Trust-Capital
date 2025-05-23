"use client";
import { PlansValidation } from "@/lib/validations/form";
import { PlansType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const plan = [
  {
    plan: "starter plan",
    amount: "$50 - $999",
    term: "12",
    percentage: "4",
  },
  {
    plan: "Basic Growth Plan",
    amount: "$1000 - $4,999",
    term: "24",
    percentage: "6",
  },
  {
    plan: "Premium Trade Plan",
    amount: "$5000 - $14,999",
    term: "24",
    percentage: "8",
  },
  {
    plan: "Advanced Investor Plan",
    amount: "$15,000 - $34,999",
    term: "36",
    percentage: "10",
  },
  {
    plan: "Elite Investor Plan",
    amount: "$35,000 - $74,999",
    term: "48",
    percentage: "12",
  },
  {
    plan: "retirement plan",
    amount: "$75,000 - $99,999",
    term: "1",
    percentage: "30",
  },
  {
    plan: "Exclusive Fortune Plan",
    amount: "$100,000 and above",
    term: "72",
    percentage: "18",
  },
];


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

const Plans = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const [accountBalance, setAccountBalance] = useState("0");
  const [minAmount, setMinAmount] = useState(0);
  const router = useRouter();

  const form = useForm<PlansType>({
    resolver: zodResolver(PlansValidation),
  });

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

 const checkPlan = (plan: string) => {
  switch (plan) {
    case "starter plan":
      return 50;
    case "Basic Growth Plan":
      return 1000;
    case "Premium Trade Plan":
      return 5000;
    case "Advanced Investor Plan":
      return 15000;
    case "Elite Investor Plan":
      return 35000;
    case "retirement plan":
      return 75000;
    case "Exclusive Fortune Plan":
      return 100000;
    default:
      throw new Error(`Unknown plan: ${plan}`);
  }
};


  const onSubmit = async (values: PlansType) => {
    setIsLoading(true);

    const res = checkPlan(values?.plan);
    setMinAmount(res);

    if (Number(values.amount) >= res) {
      router.push(
        `/dashboard/deposit/confirm-deposit?plantype=${
          values.plan
        }&planMethod=${values.method}&userEmail=${user?.email!}&amount=${
          values.amount
        }`
      );
    } else {
      setError(true);
    }

    setIsLoading(false);
  };

  const convertAmount = (amount: string) => {
    return Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-md:text-xs w-full space-y-6 h-full select-none"
      >
        <div className=" space-y-10">
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className=" relative">
                      {isLoading ? (
                        <div className="absolute bg-darkblue/20 cursor-not-allowed h-full w-full" />
                      ) : null}

                      <div className="space-y-6">
                        {plan.map((item, index) => (
                          <FormItem
                            className=" w-full space-y-0 border border-goldenrod"
                            key={index}
                          >
                            <div
                              className="flex items-center space-x-4
                       bg-black/10 px-5 py-2"
                            >
                              <div className="space-x-4 flex items-center">
                                <FormControl>
                                  <RadioGroupItem value={item.plan} />
                                </FormControl>
                                <FormLabel className="text-navyblue max-md:text-xs">
                                  {item.percentage}% in {item.term} Hours
                                </FormLabel>
                              </div>
                            </div>
                            <div className="grid max-md:gap-1 md:grid-cols-3 justify-items-center">
                              <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                                <div className="py-2">
                                  <p className="font-semibold">Plan</p>
                                </div>
                                <div className="bg-darkblue w-full text-center py-2 capitalize font-bold">
                                  {item.plan}
                                </div>
                              </div>
                              <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                                <div className="py-2">
                                  <p className="font-semibold">
                                    Spent Amount($)
                                  </p>
                                </div>
                                <div className="bg-darkblue w-full text-center py-2">
                                  <p className="font-bold">{item.amount}</p>
                                </div>
                              </div>
                              <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                                <div className="py-2">
                                  <p className="font-semibold">Profit(%)</p>
                                </div>
                                <div className="bg-darkblue w-full text-center py-2 font-bold">
                                  {item.percentage}
                                </div>
                              </div>
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
          <div className="bg-darkblue p-4 text-babyblue capitalize font-bold">
            <p>Your account balance: {convertAmount(accountBalance)}</p>
          </div>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="md:space-x-4 flex max-md:flex-col md:items-center space-y-4">
                <Label htmlFor="amount" className="">
                  Amount to spend ($):
                </Label>
                <FormControl className="no-focus">
                  <div className=" space-x-2">
                    <Input
                      id="amount"
                      type="number"
                      className={`py-2 ${
                        isDisabled ? "disableForm" : null
                      }  px-5 border border-navyblue text-sm transition-all duration-500 w-48`}
                      {...field}
                    />
                    <div className={`${isDisabled ? "disableInput" : null}`} />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-purered" />
                {error && (
                  <p className="text-xs text-purered">
                    {`Minimum Deposit: ${minAmount} `}
                  </p>
                )}
              </FormItem>
            )}
          />
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
                              <FormLabel className="max-md:text-xs">{`Spend funds from ${item.method.toUpperCase()}`}</FormLabel>
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
        </div>
        <Button
          variant={"form"}
          type="submit"
          disabled={isLoading}
          className="w-48 max-md:text-xs max-md:h-8"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Spend
        </Button>
      </form>
    </Form>
  );
};

export default Plans;

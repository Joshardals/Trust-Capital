"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ConfirmDepositValidation } from "@/lib/validations/form";
import { ConfirmDepositType } from "@/typings";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useRouter } from "next/navigation";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

interface props {
  plan: string;
}

export default function ConfirmDepositForm({ plan }: props) {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [minDeposit, setMinDeposit] = useState<number>(0);
  const [maxDeposit, setMaxDeposit] = useState<number>(0);
  const [error, setError] = useState(false);
  const form = useForm<ConfirmDepositType>({
    resolver: zodResolver(ConfirmDepositValidation),
  });

  const setMinThreshold = (plan: string) => {
    switch (plan) {
      case "beginners":
        setMinDeposit(100);
        setMaxDeposit(699);
        break;
      case "advanced trade":
        setMinDeposit(700);
        setMaxDeposit(1499);
        break;
      case "professional":
        setMinDeposit(1500);
        setMaxDeposit(3999);
        break;
      case "promo":
        setMinDeposit(4000);
        setMaxDeposit(8999);
        break;
      case "master trade":
        setMinDeposit(9000);
        setMaxDeposit(15000);
        break;
      case "retirement":
        setMinDeposit(15000);
        setMaxDeposit(99999999999);
        break;
    }
  };

  useEffect(() => {
    setMinThreshold(plan);
  }, []);

  const onSubmit = async (values: ConfirmDepositType) => {
    setIsLoading(true);

    if (parseInt(values.amount, 10) >= minDeposit) {
      try {
        // Email Functionality Start

        const data = {
          id: userId,
          amount: values.amount,
          method: values.method,
        };

        await fetch("/api/details", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          console.log("Response Received");
          if (res.status === 200) {
            console.log("Response Successful");
          }
        });

        // Email Functionality End

        const depositDocRef = doc(db, "deposits", userId);
        const docSnapshot = await getDoc(depositDocRef);

        if (docSnapshot.exists()) {
          const currentDeposits = docSnapshot.data()?.deposits || [];
          const updatedDeposits = arrayUnion(
            {
              status: "pending",
              method: values.method,
              created: new Date(),
              amount: values.amount,
              userId: userId,
            },
            ...currentDeposits
          );

          await setDoc(depositDocRef, { deposits: updatedDeposits });
          router.push("/dashboard/your-deposit");
        } else {
          await setDoc(depositDocRef, {
            deposits: arrayUnion({
              status: "pending",
              method: values.method,
              created: new Date(),
              amount: values.amount,
              userId: userId,
            }),
          });
          router.push("/dashboard/your-deposit");
        }
      } catch (error: any) {
        console.log("Error: ", error.message);
      }
    } else {
      console.log(
        `Error, Minimum deposit for your selected plan is : ${minDeposit} while yours is ${values.amount}`
      );
      setError(true);
    }

    setIsLoading(false);
  };
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="amount" className="">
                  Amount ($)
                </Label>
                <FormControl className="no-focus">
                  <div className=" space-x-2">
                    <Input
                      id="amount"
                      type="number"
                      placeholder={
                        minDeposit.toString() + " - " + maxDeposit.toString()
                      }
                      className={`py-2 ${
                        isDisabled ? "disableForm" : null
                      }  px-5 border border-navyblue text-sm transition-all duration-500 w-48`}
                      {...field}
                    />
                    <div className={`${isDisabled ? "disableInput" : null}`} />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-purered" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Payment Method</FormLabel> */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className=" w-48 border-navyblue border no-focus">
                    <SelectTrigger>
                      <SelectValue placeholder="Payment Method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Usdt">Usdt</SelectItem>
                    <SelectItem value="Bitcoin">Bitcoin</SelectItem>
                    <SelectItem value="Tron">Tron</SelectItem>
                    <SelectItem value="Litecoin">Litecoin</SelectItem>
                    <SelectItem value="Shiba">Shiba</SelectItem>
                    <SelectItem value="Bnb">Bnb</SelectItem>
                    <SelectItem value="Doge">Doge</SelectItem>
                  </SelectContent>
                </Select>
                {field.value ? (
                  <FormDescription className="text-purered font-semibold max-md:text-xs max-md:font-bold">
                    Warning: Please only send {field.value} to the
                    above-mentioned {field.value} crypto address.
                  </FormDescription>
                ) : null}
                <FormMessage className="text-purered font-bold text-xs" />
                {error && (
                  <p className="text-purered text-xs font-bold">{`Error, Your chosen plan's minimum deposit is: ${minDeposit} `}</p>
                )}
              </FormItem>
            )}
          />
          <Button variant={"form"} className="max-md:text-xs" type="submit">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            I have sent the money
          </Button>
        </form>
      </Form>
    </div>
  );
}

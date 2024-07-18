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
import { sendMail } from "@/lib/mail";

interface props {
  amount: string;
  method: string;
  plan: string;
}

interface dataProps {
  email: string;
  amount: string;
  method: string;
}

export default function ConfirmDepositForm({ amount, method, plan }: props) {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<dataProps>();
  const form = useForm<ConfirmDepositType>({
    resolver: zodResolver(ConfirmDepositValidation),
  });

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

  const onSubmit = async (values: ConfirmDepositType) => {
    setIsLoading(true);

    try {
      const depositDocRef = doc(db, "deposits", user?.email!);
      const docSnapshot = await getDoc(depositDocRef);

      if (docSnapshot.exists()) {
        const currentDeposits = docSnapshot.data()?.deposits || [];
        const updatedDeposits = arrayUnion(
          {
            status: "pending",
            method: method,
            created: new Date(),
            amount: amount,
            userId: user?.email!,
          },
          ...currentDeposits
        );

        await setDoc(depositDocRef, { deposits: updatedDeposits });

        await sendMail({
          to: "companynotify00@gmail.com",
          name: "Jahrule",
          subject: "Confirmation Of Deposit",
          body: `<p>${user?.email!}, ${username.toUpperCase()} has deposited a sum of ${convertAmount(
            amount
          )} for the ${plan} PLAN from wallet address - ${
            values.address
          } using the ${method.toUpperCase()} payment method.</p>
          <p>Regards; Trustcapital Investment limited</p>
          `,
        });

        await sendMail({
          to: `${user?.email!}`,
          name: `${username}`,
          subject: "Processing Deposit",
          body: `<p>Your ${convertAmount(
            amount
          )} ${plan} PLAN deposit is being processed and is awaiting confirmation.
           It will be directly deposited into your account upon confirmation; please review your deposit history to ascertain the status.
           </p>
           <p>Regards; Trustcapital Investment limited</p>
           `,
        });

        router.push("/dashboard/your-deposit");
      } else {
        await setDoc(depositDocRef, {
          deposits: arrayUnion({
            status: "pending",
            method: method,
            created: new Date(),
            amount: amount,
            userId: user?.email!,
          }),
        });

        await sendMail({
          to: "companynotify00@gmail.com",
          name: "Jahrule",
          subject: "Confirmation Of Deposit",
          body: `<p>${user?.email!}, ${username.toUpperCase()} has deposited a sum of ${convertAmount(
            amount
          )}  for the ${plan} PLAN from wallet address - ${
            values.address
          } using the ${method.toUpperCase()} payment method.</p>
          <p>Regards; Trustcapital Investment limited</p>
          `,
        });

        await sendMail({
          to: `${user?.email!}`,
          name: `${username}`,
          subject: "Processing Deposit",
          body: `<p>Your ${convertAmount(
            amount
          )} ${plan} PLAN deposit is being processed and is awaiting confirmation.
           It will be directly deposited into your account upon confirmation; please review your deposit history to ascertain the status.</p>
           <p>Regards; Trustcapital Investment limited</p>
           `,
        });

        router.push("/dashboard/your-deposit");
      }
    } catch (error: any) {
      console.log("Error: ", error.message);
    }

    alert("Deposit request is successful, Kindly check your mail inbox.");
    setIsLoading(false);
  };
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <p className="font-bold text-sm">Required Information</p>
                <div className="flex md:items-center max-md:flex-col md:space-x-4 max-md:space-y-4">
                  <Label htmlFor="amount" className="">
                    Your Wallet Address:
                  </Label>
                  <FormControl className="no-focus">
                    <div className="relative">
                      <Input
                        id="amount"
                        type="text"
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500 w-64`}
                        {...field}
                      />
                      <div
                        className={`${
                          isDisabled &&
                          "absolute top-0 left-0 h-full bg-darkblue/20 w-48"
                        }`}
                      ></div>
                    </div>
                  </FormControl>
                </div>
                <FormMessage className="text-xs text-purered" />
              </FormItem>
            )}
          />

          <div className="md:space-x-4 max-md:flex max-md:flex-col max-md:space-y-4">
            <Button
              variant={"form"}
              className="max-md:text-xs w-40 bg-purered hover:bg-purered/90 text-babyblue"
              disabled={isLoading}
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              variant={"form"}
              className="max-md:text-xs w-40"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

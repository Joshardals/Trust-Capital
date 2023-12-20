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
}

interface dataProps {
  email: string;
  amount: string;
  method: string;
}

export default function ConfirmDepositForm({ amount, method }: props) {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<dataProps>();
  const form = useForm<ConfirmDepositType>({
    resolver: zodResolver(ConfirmDepositValidation),
  });

  const onSubmit = async (values: ConfirmDepositType) => {
   
    setIsLoading(true);

    try {
      const depositDocRef = doc(db, "deposits", userId);
      const docSnapshot = await getDoc(depositDocRef);

      if (docSnapshot.exists()) {
        const currentDeposits = docSnapshot.data()?.deposits || [];
        const updatedDeposits = arrayUnion(
          {
            status: "pending",
            method: method,
            created: new Date(),
            amount: amount,
            userId: userId,
          },
          ...currentDeposits
        );

        await setDoc(depositDocRef, { deposits: updatedDeposits });

        await sendMail({
          to: "joshardalsgates@gmail.com",
          name: "Joshua",
          subject: "Deposit Request",
          body: "<h1>Hello World!!</h1>",
        });

        // const response = await fetch("/api/send", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "applications/json",
        //   },
        //   body: JSON.stringify(data),
        // });

        // if (response.status === 200) {
        //   setData({
        //     email: userId,
        //     amount: amount,
        //     method: method,
        //   });
        //   console.log(`Hey ${userId} your message was sent successfully!`);
        // }

        router.push("/dashboard/your-deposit");
      } else {
        await setDoc(depositDocRef, {
          deposits: arrayUnion({
            status: "pending",
            method: method,
            created: new Date(),
            amount: amount,
            userId: userId,
          }),
        });

        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "applications/json",
          },
          body: JSON.stringify(data),
        });

        if (response.status === 200) {
          setData({
            email: userId,
            amount: amount,
            method: method,
          });
          console.log(`Hey ${userId} your message was sent successfully!`);
        }

        router.push("/dashboard/your-deposit");
      }
    } catch (error: any) {
      console.log("Error: ", error.message);
    }

    alert("Deposit request is successful");
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
                    <div className=" space-x-2">
                      <Input
                        id="amount"
                        type="text"
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500 w-64`}
                        {...field}
                      />
                      <div
                        className={`${isDisabled ? "disableInput" : null}`}
                      />
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

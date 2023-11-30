"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { EditValidation } from "@/lib/validations/form";
import { EditValidationType } from "@/typings";
import { useState } from "react";

const EditAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<EditValidationType>({
    resolver: zodResolver(EditValidation),
    defaultValues: {
      bitcoinAddress: "",
      ethereumAddress: "",
      litecoinAddress: "",
      usdtAddress: "",
      dogeAddress: "",
      tronAddress: "",
      bnbAddress: "",
      shibaAddress: "",
    },
  });
  const onSubmit = async (values: EditValidationType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className=" space-y-6 cursor-default ">
          <div className="grid md:grid-cols-2 max-md:gap-4 items-center">
            <Label htmlFor="firstName" className=" font-semibold">
              FirstName:
            </Label>

            <div
              className=" py-2 px-5 bg-darkblue/10 border border-navyblue rounded-lg opacity-60"
              id="firstName"
            >
              <p>Tommy</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 max-md:gap-4 items-center">
            <Label htmlFor="lastName" className="flex-1 font-semibold">
              LastName:
            </Label>

            <div
              className=" py-2 px-5 bg-darkblue/10 opacity-60 border border-navyblue rounded-lg"
              id="lastName"
            >
              <p>Shelby</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 max-md:gap-4 items-center">
            <Label htmlFor="email" className=" font-semibold">
              Email:
            </Label>

            <div
              className=" py-2 px-5 flex-1 bg-darkblue/10 opacity-60 border border-navyblue rounded-lg"
              id="email"
            >
              <p>tommyshelby@gmail.com</p>
            </div>
          </div>

          {/* Crypto Wallet Addresses Form */}

          {/* <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  USDT WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  BITCOIN WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  ETHEREUM WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  LITECOIN WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  DOGECOIN WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  TRON WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  BNB WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usdtAddress"
            render={({ field }) => (
              <FormItem className="grid grid-cols-2 items-center">
                <Label htmlFor="usdt" className="flex-1">
                  SHIBA INU WALLET ADDRESS:
                </Label>
                <FormControl className="no-focus flex-1">
                  <Input
                    id="usdt"
                    className="py-2 px-5 text-navyblue border border-navyblue"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          /> */}
        </div>
        <Button
          variant="form"
          disabled={isLoading}
          className=" w-full text-xs flex items-center rounded-lg font-bold"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Update
        </Button>
      </form>
    </Form>
  );
};

export default EditAccount;

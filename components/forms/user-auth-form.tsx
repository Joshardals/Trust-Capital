"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/action/user.action";
import { createWallet } from "@/lib/action/wallet.action";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      secretKey: "",
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

  const user = auth.currentUser?.providerData[0];

  const onSubmit = async (values: SignUpValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    await updateUser({
      id: user?.uid || "",
      name: user?.displayName || "",
      email: user?.email || "",
      onboarded: true || "",
    });

    await createWallet({
      id: user?.uid || "",
      secretKey: values.secretKey,
      usdtAddress: values.usdtAddress,
      btcAddress: values.bitcoinAddress,
      ethereumAddress: values.ethereumAddress,
      litecoinAddress: values.litecoinAddress,
      dogeAddress: values.dogeAddress,
      tronAddress: values.tronAddress,
      bnbAddress: values.bnbAddress,
      shibaAddress: values.shibaAddress,
    });

    form.setValue("secretKey", "");
    form.setValue("usdtAddress", "");
    form.setValue("bitcoinAddress", "");
    form.setValue("ethereumAddress", "");
    form.setValue("litecoinAddress", "");
    form.setValue("dogeAddress", "");
    form.setValue("tronAddress", "");
    form.setValue("bnbAddress", "");
    form.setValue("shibaAddress", "");

    setIsLoading(false);
    setIsDisabled(false);

    router.push("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 font-sans w-full flex flex-col md:h-screen"
      >
        {/*-------------------------------- Account Information ----------------------------*/}

        <div>
          <div className="flex space-y-4 flex-col">
            <h1 className="max-md:text-lg text-xl text-navyblue font-bold">
              Account Information
            </h1>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="secretKey"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="SECRET KEY min (3 chars)"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="usdtAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="USDT WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="bitcoinAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="BITCOIN WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="ethereumAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="ETHEREUM WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="litecoinAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="LITECOIN WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="dogeAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="DOGECOIN WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="tronAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="TRON WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="bnbAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="BNB WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="shibaAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <div className="relative">
                        <Input
                          placeholder="SHIBA INU WALLET ADDRESS"
                          disabled={isDisabled}
                          className={`py-2 ${
                            isDisabled ? "disableForm" : null
                          }  px-5 border border-navyblue text-sm transition-all duration-500`}
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-purered text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-navyblue">
            By continuing, you agree to the{" "}
            <Link
              href="#"
              className=" text-xs font-bold underline underline-offset-4"
            >
              Trust-Capital Investment User Account Agreement
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline text-xs font-bold underline-offset-4"
            >
              {" "}
              Privacy Policy
            </Link>{" "}
            .
          </p>
        </div>
        <Button
          variant="form"
          disabled={isLoading}
          className="w-full text-xs flex items-center rounded-lg"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign Up
        </Button>
      </form>
    </Form>
  );
}

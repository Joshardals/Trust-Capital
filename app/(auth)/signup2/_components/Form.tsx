"use client";

import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  OnboardingValidation,
  OnboardingValidation2,
} from "@/lib/validations/form";
import { OnboardingValidationType, OnboardingValidationType2 } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { emailState, useRefState } from "@/lib/store/store";
import { account, databases } from "@/appwrite";
import { ID } from "appwrite";

interface params {
  userId: string;
}

export function UserAuth2Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorExist, setErrorExist] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm<OnboardingValidationType2>({
    resolver: zodResolver(OnboardingValidation2),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
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

  const onSubmit = async (values: OnboardingValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    try {
      await account.create(ID.unique(), values.email, values.password);

      // Creating User Document in db

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_USER_COLLECTION_ID as string,
        ID.unique(),
        {
          createdAt: new Date(),
          email: values.email,
          name: `${values.firstName} ${values.lastName}`,
          onboarded: true,
          phoneNumber: values.phoneNumber,
          userId: values.email,
        }
      );

      // Creating User Document in DB End

      console.log("User document created in db");

      // Creating Wallets Document In the DB Start

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_WALLETS_ID as string,
        ID.unique(),
        {
          walletId: values.email,
          secretKey: values.secretKey,
          usdtAddress: values.usdtAddress,
          btcAddress: values.bitcoinAddress,
          ethereumAddress: values.ethereumAddress,
          tronAddress: values.tronAddress,
        }
      );

      console.log("wallet document created in db.");

      // Creating Wallets Document In the DB End

      // Creating User Account Info Start

      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_ACCOUNTINFO_ID as string,
        ID.unique(),
        {
          userId: values.email,
          accountBalance: 0.0,
          currentPlan: "none",
          activeDeposit: 0.0,
          earnedTotal: 0.0,
        }
      );

      console.log("Account Info document created in db.");
      // Creating User Account Info End

      await account.createEmailPasswordSession(values.email, values.password);
      router.push("/dashboard2");
    } catch (error: any) {
      console.log(`Error ${error.message}`);
      setErrorExist(true);
      setError(error.message);
    }

    form.setValue("firstName", "");
    form.setValue("lastName", "");
    form.setValue("email", "");
    form.setValue("password", "");
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
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 font-sans w-full flex flex-col md:h-screen"
      >
        {/* ------------------- Personal Information --------------- */}

        <div className="flex space-y-4 flex-col">
          <h1 className="max-md:text-lg text-xl text-navyblue font-bold">
            Personal Information
          </h1>
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <div className="relative">
                      <Input
                        placeholder="Firstname"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );
                          form.setValue("firstName", valueWithoutSpaces);
                        }}
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <div className="relative">
                      <Input
                        placeholder="Lastname"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );
                          form.setValue("lastName", valueWithoutSpaces);
                        }}
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <div className="relative">
                      <Input
                        placeholder="Your Email"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );
                          form.setValue("email", valueWithoutSpaces);
                        }}
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <div className="relative">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );

                          const sanitizedValue = valueWithoutSpaces.replace(
                            /[^0-9+]/g,
                            ""
                          );
                          form.setValue("phoneNumber", sanitizedValue);
                        }}
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

        {/* Security Information */}

        <div className="flex space-y-4 flex-col">
          <h1 className="max-md:text-lg text-xl text-navyblue font-bold">
            Security Information
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
                        type="number"
                        placeholder="SECRET KEY min (4 chars)"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );
                          form.setValue("secretKey", valueWithoutSpaces);
                        }}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <div className="relative">
                      <Input
                        placeholder="Password"
                        type="password"
                        disabled={isDisabled}
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500`}
                        {...field}
                        onChange={(e) => {
                          // Remove spaces as the user types
                          const valueWithoutSpaces = e.target.value.replace(
                            /\s/g,
                            ""
                          );
                          form.setValue("password", valueWithoutSpaces);
                        }}
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

        {/*-------------------------------- Account Information ----------------------------*/}

        <div>
          <div className="flex space-y-4 flex-col">
            <h1 className="max-md:text-lg text-xl text-navyblue font-bold">
              Account Information
            </h1>

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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("usdtAddress", valueWithoutSpaces);
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("bitcoinAddress", valueWithoutSpaces);
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue(
                              "ethereumAddress",
                              valueWithoutSpaces
                            );
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue(
                              "litecoinAddress",
                              valueWithoutSpaces
                            );
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("dogeAddress", valueWithoutSpaces);
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("tronAddress", valueWithoutSpaces);
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("bnbAddress", valueWithoutSpaces);
                          }}
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
                          onChange={(e) => {
                            // Remove spaces as the user types
                            const valueWithoutSpaces = e.target.value.replace(
                              /\s/g,
                              ""
                            );
                            form.setValue("shibaAddress", valueWithoutSpaces);
                          }}
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

        {errorExist && (
          <div className="text-xs font-bold text-puregreen">{error}</div>
        )}
        <div className=" font-sans">
          <p className="text-xs">
            Have an account? {""}
            <Link
              href="/login2"
              className=" text-xs text-navyblue font-bold underline underline-offset-4"
            >
              Login here
            </Link>
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

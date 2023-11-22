"use client";

import { SyntheticEvent, useState } from "react";
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
import { Label } from "../ui/label";
import Link from "next/link";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: SignUpValidationType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 font-sans mt-8 w-full md:pt-80"
      >
        <div className="flex space-y-4 flex-col">
          <h1 className="text-xl text-navyblue">Personal Information</h1>
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      placeholder="First Name"
                      className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                      {...field}
                      onChange={(e) => {
                        const capitalizedValue =
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1);
                        form.setValue("firstName", capitalizedValue);
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      placeholder="Last Name"
                      disabled={isLoading}
                      className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                      {...field}
                      onChange={(e) => {
                        const capitalizedValue =
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1);
                        form.setValue("lastName", capitalizedValue);
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="no-focus text-xs">
                <Input
                  type="email"
                  placeholder="Email Address"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-purered text-xs" />
            </FormItem>
          )}
        />
        <div className="flex max-md:flex-col max-md:space-y-4 md:space-x-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      type="password"
                      placeholder="Password (min. 8 Characters)"
                      disabled={isLoading}
                      className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      disabled={isLoading}
                      className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                      {...field}
                    />
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
            <h1 className="text-xl text-navyblue">Account Information</h1>
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="bitcoinAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="no-focus text-xs">
                      <Input
                        placeholder="BITCOIN WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="ETHEREUM WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="LITECOIN WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="USDT WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="DOGECOIN WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="TRON WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="BNB WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
                      <Input
                        placeholder="SHIBA WALLET ADDRESS"
                        className="border border-navyblue max-md:focus:text-sm transition-all duration-500"
                        {...field}
                        onChange={(e) => {
                          const capitalizedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          form.setValue("firstName", capitalizedValue);
                        }}
                      />
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
              Trust-Capital-Investment User Account Agreement
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
          className="w-full text-xs flex items-center rounded-full"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign Up
        </Button>
      </form>
    </Form>
  );
}

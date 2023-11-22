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
        className="space-y-5 font-sans mt-8 w-full"
      >
        <div className="flex md:space-x-4 max-md:space-y-4 max-md:flex-col">
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

        <div>
          <p className="text-xs text-navyblue">
            By continuing, you agree to the{" "}
            <Link
              href="#"
              className=" text-xs font-bold underline underline-offset-4"
            >
              TrustCapital Investment User Account Agreement
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
          Sign In with Email
        </Button>
      </form>
    </Form>
  );
}


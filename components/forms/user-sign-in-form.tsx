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
import { SignInValidation, SignUpValidation } from "@/lib/validations/form";
import { SignInValidationType, SignUpValidationType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Icons } from "@/components/icons";
import { Label } from "../ui/label";
import Link from "next/link";

export function UserSignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values: SignInValidationType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const form = useForm<SignInValidationType>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <div className="">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-5 font-sans mt-8 w-full text-navyblue md:flex md:flex-col md:items-center md:justify-center min-h-screen "
        >
          <h2 className=" font-bold text-navyblue">Login to Trust-Capital</h2>{" "}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <FormControl className="no-focus">
                  <Input
                    id="email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="border border-navyblue transition-all duration-500 md:w-80"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="password" className="">
                  Password
                </Label>
                <FormControl className="no-focus">
                  <Input
                    id="password"
                    type="password"
                    className="border border-navyblue transition-all duration-500 md:w-80"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div>
            <Link
              href="#"
              className=" text-xs text-navyblue font-bold underline underline-offset-4"
            >
              Forgot your password?
            </Link>
          </div>
          <Button
            variant="form"
            disabled={isLoading}
            className=" w-full text-xs flex items-center rounded-full font-bold"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </form>
      </div>
      <div className="absolute bottom-5 font-sans">
        <p className="text-xs">
          Have no account? {""}
          <Link
            href="signup"
            className=" text-xs text-navyblue font-bold underline underline-offset-4"
          >
            Create an account
          </Link>
        </p>
      </div>
    </Form>
  );
}

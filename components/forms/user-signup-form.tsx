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
import { Label } from "../ui/label";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export default function UserSignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const router = useRouter();
  const onSubmit = async (values: SignUpValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;
      router.push("/login");
    } catch (error: any) {
      console.log("Error creating account!");
      setEmailExist(true);
    }

    form.setValue("email", "");
    form.setValue("password", "");

    setIsLoading(false);
    setIsDisabled(false);
  };
  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
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
          className=" space-y-10 font-sans mt-8 w-full text-navyblue md:flex md:flex-col md:items-center md:justify-center min-h-screen "
        >
          <h2 className=" font-semibold text-darkblue max-md:text-md text-lg">
            Create your Account
          </h2>{" "}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email" className="">
                    Email
                  </Label>
                  <FormControl className="no-focus">
                    <div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your-email@example.com"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className={`py-2 ${
                          isDisabled ? "disableForm" : null
                        }  px-5 border border-navyblue text-sm transition-all duration-500 md-w-80`}
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
                    <div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password Min (6 characters)"
                        className="py-2 px-5 border border-navyblue transition-all duration-500 md:w-80"
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
                  <FormMessage className="text-xs text-purered font-bold" />
                </FormItem>
              )}
            />

            {emailExist && (
              <div className="text-xs font-bold text-puregreen">
                Email already exists
              </div>
            )}
            <div className=" font-sans">
              <p className="text-xs">
                Have an account? {""}
                <Link
                  href="/login"
                  className=" text-xs text-navyblue font-bold underline underline-offset-4"
                >
                  Login here
                </Link>
              </p>
            </div>
            <Button
              variant="form"
              disabled={isLoading}
              className=" w-full text-xs flex items-center rounded-lg font-bold"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}

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
import { SignInValidation } from "@/lib/validations/form";
import { SignInValidationType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Icons } from "@/components/icons";
import { Label } from "../ui/label";
import Link from "next/link";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/firebase";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import GoogleTrans from "../dashboard/content/GoogleTrans";

export function UserSignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const referralParams = useSearchParams();

  const referral = referralParams.get("ref");

  const onSubmit = async (values: SignInValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      if (user) {
        const userId = user.providerData[0].uid;
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const details = userDocSnap.data();

          if (details) {
            const onboardedStatus = details?.onboarded;

            if (onboardedStatus) {
              router.push("/dashboard");
            }
          }
        } else {
          if (referral) {
            router.push(`/onboarding/?ref=${referral}`);
          } else {
            router.push("/onboarding");
          }
        }
      }
    } catch (error: any) {
      console.log(`Error logging in. ${error.message}`);
      setError(true);
    }

    if (!error) {
      form.setValue("email", "");
      form.setValue("password", "");
    }
    setIsLoading(false);
    setIsDisabled(false);
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
          className=" space-y-10 font-sans mt-8 w-full text-navyblue md:flex md:flex-col md:items-center md:justify-center min-h-screen "
        >
          <h2 className=" font-semibold text-darkblue max-md:text-md text-lg">
            Login to Trust-Capital
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
                </FormItem>
              )}
            />
            <div>
              {error ? (
                <p className="text-purered text-xs font-bold">
                  Invalid Email or Password
                </p>
              ) : null}
            </div>
            <div className=" font-sans">
              <p className="text-xs">
                Have no account? {""}
                <Link
                  href="/signup"
                  className=" text-xs text-navyblue font-bold underline underline-offset-4"
                >
                  Create an account
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
              Login
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}

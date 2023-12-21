"use client";
import { SecretValidation } from "@/lib/validations/form";
import { SecretType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
// import { checkSecretKey } from "@/lib/action/wallet.action";

interface params {
  id: string;
  setSecret: any;
}

export default function SecretForm({ id, setSecret }: params) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<SecretType>({
    resolver: zodResolver(SecretValidation),
    defaultValues: {
      secretKey: "",
    },
  });

  const onSubmit = async (values: SecretType) => {
    if (values.secretKey === "") {
      setError(true);
    } else {
      setIsLoading(true);
      setIsDisabled(true);
    }

    const walletDocRef = doc(db, "wallets", id);
    const walletDocSnap = await getDoc(walletDocRef);

    if (walletDocSnap.exists()) {
      const userSecret = walletDocSnap.data()?.secretKey;

      if (values.secretKey === userSecret) {
        setError(false);
        setSecret(true);
      } else {
        setError(true);
      }
    }

    setIsLoading(false);
    setIsDisabled(false);
  };
  return (
    <div className="bg-navyblue/50 z-10 h-full w-full absolute top-0 left-0 bottom-0 ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-babyblue absolute left-5 right-5 p-5 border border-navyblue shadow-sm shadow-navyblue text-navyblue">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="secretKey"
                render={({ field }) => (
                  <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                    <Label
                      htmlFor="secret"
                      className="flex-1 capitalize font-semibold"
                    >
                      enter secret key
                    </Label>
                    <FormControl className="no-focus flex-1">
                      <div className="relative">
                        <Input
                          id="secret"
                          className={`py-2 px-5 ${
                            isDisabled ? "disableForm" : null
                          } text-navyblue border border-navyblue`}
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
              {error ? (
                <p className="text-purered text-xs">
                  Incorrect secret key; try again, please. If you can&apos;t
                  remember, get in touch with support.
                </p>
              ) : null}
              <Button
                variant="form"
                disabled={isLoading}
                className=" w-full text-xs flex items-center rounded-lg font-bold"
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

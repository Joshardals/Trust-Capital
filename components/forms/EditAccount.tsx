"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { EditValidation } from "@/lib/validations/form";
import { EditValidationType } from "@/typings";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { updateWallet } from "@/lib/action/wallet.action";

const EditAccount = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const displayName = user?.displayName || "";
  const firstName = displayName.split(" ")[0];
  const lastName = displayName.split(" ")[1];

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

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

  useEffect(() => {
    const walletDocRef = doc(db, "wallets", userId);
    onSnapshot(walletDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        form.setValue("usdtAddress", res?.usdtAddress);
        form.setValue("bitcoinAddress", res?.btcAddress);
        form.setValue("ethereumAddress", res?.ethereumAddress);
        form.setValue("litecoinAddress", res?.litecoinAddress);
        form.setValue("dogeAddress", res?.dogeAddress);
        form.setValue("tronAddress", res?.tronAddress);
        form.setValue("bnbAddress", res?.bnbAddress);
        form.setValue("shibaAddress", res?.shibaAddress);
      } else {
        console.log("no-data");
      }
    });
  }, []);

  const onSubmit = async (values: EditValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);
    console.log(user);

    await updateWallet({
      id: user?.uid || "",
      usdtAddress: values.usdtAddress,
      btcAddress: values.bitcoinAddress,
      ethereumAddress: values.ethereumAddress,
      litecoinAddress: values.litecoinAddress,
      dogeAddress: values.dogeAddress,
      tronAddress: values.tronAddress,
      bnbAddress: values.bnbAddress,
      shibaAddress: values.shibaAddress,
    });

    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue">
      <div className="space-y-8 h-full">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          edit account
        </h1>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className=" space-y-4 cursor-default ">
                <div className="grid md:grid-cols-2 max-md:gap-2 items-center">
                  <Label htmlFor="firstName" className=" font-semibold">
                    FirstName:
                  </Label>

                  <div
                    className=" py-2 px-5 bg-darkblue/10 border border-navyblue rounded-lg opacity-60"
                    id="firstName"
                  >
                    <p>{firstName}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 max-md:gap-2 items-center">
                  <Label htmlFor="lastName" className="flex-1 font-semibold">
                    LastName:
                  </Label>

                  <div
                    className=" py-2 px-5 bg-darkblue/10 opacity-60 border border-navyblue rounded-lg"
                    id="lastName"
                  >
                    <p>{lastName}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 max-md:gap-2 items-center">
                  <Label htmlFor="email" className=" font-semibold">
                    Email:
                  </Label>

                  <div
                    className=" py-2 px-5 flex-1 bg-darkblue/10 opacity-60 border border-navyblue rounded-lg"
                    id="email"
                  >
                    <p>{user?.email}</p>
                  </div>
                </div>

                {/* Crypto Wallet Address Form */}

                <FormField
                  control={form.control}
                  name="usdtAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="usdt" className="flex-1">
                        USDT Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="usdt"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="bitcoinAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="btc" className="flex-1">
                        BITCOIN Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="btc"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="ethereumAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="eth" className="flex-1">
                        ETHEREUM Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="eth"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="litecoinAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="ltc" className="flex-1">
                        LITECOIN Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="ltc"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="dogeAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="doge" className="flex-1">
                        DOGE Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="doge"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="tronAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="tron" className="flex-1">
                        TRON Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="tron"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="bnbAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="bnb" className="flex-1">
                        BNB Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="bnb"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
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
                  name="shibaAddress"
                  render={({ field }) => (
                    <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                      <Label htmlFor="shiba" className="flex-1">
                        SHIBA Wallet Address:
                      </Label>
                      <FormControl className="no-focus flex-1">
                        <div className="relative">
                          <Input
                            id="shiba"
                            className={`py-2 px-5 ${
                              isDisabled ? "disableForm" : null
                            } text-navyblue border border-navyblue`}
                            {...field}
                          />
                          <div
                            className={`${isDisabled ? "disableInput" : null}`}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                variant="form"
                disabled={isLoading}
                className=" w-full text-xs flex items-center rounded-lg font-bold"
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Update
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;

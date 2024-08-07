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
import { EditValidation } from "@/lib/validations/form";
import { EditValidationType } from "@/typings";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
// import { useToast } from "../ui/use-toast";
import { useEditStore } from "@/lib/store/store";
import SecretForm from "./SecretForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditAccount = () => {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  // const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { editAcct } = useEditStore();
  const [secret, setSecret] = useState(false);

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
    const userDocRef = doc(db, "users", user?.email!);
    onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        setFirstName(res.name.split(" ")[0]);
        setLastName(res.name.split(" ")[1]);
      }
    });
    const walletDocRef = doc(db, "wallets", user?.email!);
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
  }, [form]);

  const onSubmit = async (values: EditValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {
      await delay(1000);

      const walletDocRef = doc(db, "wallets", user?.email!);
      setDoc(
        walletDocRef,
        {
          walletId: user?.email!,
          usdtAddress: values.usdtAddress,
          btcAddress: values.bitcoinAddress,
          ethereumAddress: values.ethereumAddress,
          litecoinAddress: values.litecoinAddress,
          dogeAddress: values.dogeAddress,
          tronAddress: values.tronAddress,
          bnbAddress: values.bnbAddress,
          shibaAddress: values.shibaAddress,
          updatedAt: new Date(),
        },
        { merge: true }
      );
      toast("Your Information has been successfully updated.");
    } catch (error: any) {
      console.log(`Error updating wallet details: ${error.message}`);
    }

    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <div className="relative overflow-hidden">
      {secret ? null : <SecretForm id={user?.email!} setSecret={setSecret} />}

      <div
        className={` font-sans space-y-8 ${
          !secret ? "blur-sm select-none" : null
        } text-navyblue md:p-5 max-md:p-5 bg-babyblue`}
      >
        <ToastContainer />
        <div className="space-y-8 h-full">
          <h1 className="capitalize text-lg font-semibold text-darkblue">
            edit account
          </h1>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                        <Label htmlFor="usdt" className="flex-1 font-semibold">
                          USDT Wallet Address:
                        </Label>
                        <div>
                          <FormControl className="no-focus flex-1">
                            <div className="relative">
                              <Input
                                id="usdt"
                                className={`py-2 px-5 ${
                                  isDisabled ? "disableForm" : null
                                } text-navyblue border border-navyblue`}
                                {...field}
                                onChange={(e) => {
                                  // Remove spaces as the user types
                                  const valueWithoutSpaces =
                                    e.target.value.replace(/\s/g, "");
                                  form.setValue(
                                    "usdtAddress",
                                    valueWithoutSpaces
                                  );
                                }}
                              />
                              <div
                                className={`${
                                  isDisabled ? "disableInput" : null
                                }`}
                              />
                            </div>
                          </FormControl>

                          <FormMessage className="text-purered text-xs mt-2" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bitcoinAddress"
                    render={({ field }) => (
                      <FormItem className="grid md:grid-cols-2 max-md:gap-2 items-center">
                        <Label htmlFor="btc" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "bitcoinAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="eth" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "ethereumAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="ltc" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "litecoinAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="doge" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "dogeAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="tron" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "tronAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="bnb" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue("bnbAddress", valueWithoutSpaces);
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
                        <Label htmlFor="shiba" className="flex-1 font-semibold">
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
                              onChange={(e) => {
                                // Remove spaces as the user types
                                const valueWithoutSpaces =
                                  e.target.value.replace(/\s/g, "");
                                form.setValue(
                                  "shibaAddress",
                                  valueWithoutSpaces
                                );
                              }}
                            />
                            <div
                              className={`${
                                isDisabled ? "disableInput" : null
                              }`}
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
    </div>
  );
};

export default EditAccount;

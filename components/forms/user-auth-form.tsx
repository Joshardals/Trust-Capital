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
import { OnboardingValidation } from "@/lib/validations/form";
import { OnboardingValidationType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Icons } from "@/components/icons";
import { auth, db } from "@/firebase";
import { useRouter, useSearchParams } from "next/navigation";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { customAlphabet } from "nanoid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import { useRefState } from "@/lib/store/store";

interface params {
  userId: string;
}

export function UserAuthForm({ userId }: params) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const router = useRouter();
  const referralParams = useSearchParams();
  const { updateRefCode } = useRefState();

  const form = useForm<OnboardingValidationType>({
    resolver: zodResolver(OnboardingValidation),
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

  const user = auth.currentUser?.providerData[0];

  const generateReferralCode = (): string => {
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const nanoid = customAlphabet(alphabet, 8); // You can adjust the length of the code as needed
    return nanoid();
  };

  const onSubmit = async (values: OnboardingValidationType) => {
    setIsLoading(true);
    setIsDisabled(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const referralCode = generateReferralCode();
      updateRefCode(referralCode);

      const user = userCredential.user;
      console.log("User Created", user);

      const { providerData } = user;
      const uid = providerData[0]?.uid;

      const userDocRef = doc(db, "users", uid);

      await setDoc(
        userDocRef,
        {
          userId: uid,
          name: values.firstName + " " + values.lastName || "",
          email: user?.email || "",
          onboarded: true || "",
          phoneNumber: values.phoneNumber,
          referralCode,
          referralCount: 0,
          trade: false,
          createdAt: new Date(),
          referredBy: referralParams.get("ref") ?? "none",
        },
        { merge: true }
      );
      console.log("user document created in firebase");

      // Creating Wallets Start

      const walletDocRef = doc(db, "wallets", uid);

      await setDoc(
        walletDocRef,
        {
          walletId: uid,
          secretKey: values.secretKey,
          usdtAddress: values.usdtAddress,
          btcAddress: values.bitcoinAddress,
          ethereumAddress: values.ethereumAddress,
          litecoinAddress: values.litecoinAddress,
          dogeAddress: values.dogeAddress,
          tronAddress: values.tronAddress,
          bnbAddress: values.bnbAddress,
          shibaAddress: values.shibaAddress,
        },
        { merge: true }
      );

      console.log("Wallet document created in firebase");

      // Creating Wallets End

      // Creating Account Information Start

      const detailsDocRef = doc(db, "accountInfo", uid);

      await setDoc(
        detailsDocRef,
        {
          userId: uid,
          accountBalance: 0.0,
          currentPlan: "none",
          activeDeposit: 0.0,
          earnedTotal: 0.0,
        },
        { merge: true }
      );

      console.log("Details document created in firebase");

      // Creating Account Information End

      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
      } catch (error: any) {
        console.log("Error Logging In : ", error.message);
      }
      console.log("User signed in after sign up");

      // Referrals Functionality Start
      try {
        const refCode = referralParams.get("ref");
        if (refCode) {
          const referringUserDoc = query(
            collection(db, "users"),
            where("referralCode", "==", refCode)
          );
          const querySnapshot = await getDocs(referringUserDoc);
          if (querySnapshot.docs.length > 0) {
            const referringUser = querySnapshot.docs[0];
            const referringUserId = referringUser.id;
            const referralRef = doc(db, "referrals", referringUserId);
            // onSnapshot(referralRef, (doc) => {
            //   if (doc.exists()) {
            //     const currentReferrals = doc.data()?.referrals || [];
            //     const updatedReferrals = arrayUnion(
            //       {
            //         username: user?.displayName?.split(" ")[0],
            //         email: user?.email,
            //         referred: userId,
            //       },
            //       ...currentReferrals
            //     );
            //     setDoc(referralRef, { referrals: updatedReferrals });
            //     setDoc(
            //       referralRef,
            //       {
            //         referrals: {
            //           username: user?.displayName?.split(" ")[0],
            //           email: user?.email,
            //           referred: userId,
            //         },
            //       },
            //       { merge: true }
            //     );
            //     console.log(doc.data());
            //   } else {
            //     setDoc(referralRef, {
            //       referrals: arrayUnion({
            //         username: user?.displayName?.split(" ")[0],
            //         email: user?.email,
            //         referred: userId,
            //       }),
            //     });
            //     setDoc(
            //       referralRef,
            //       {
            //         referrals: {
            //           username: user?.displayName?.split(" ")[0],
            //           email: user?.email,
            //           referred: userId,
            //         },
            //       },
            //       { merge: true }
            //     );
            //     console.log(doc.data());
            //   }
            // });
            await updateDoc(doc(db, "users", referringUserId), {
              referralCount: referringUser.data().referralCount + 1,
            });
          }
        }
      } catch (error: any) {
        console.log("Error Referring User", error.message);
      }

      // Referrals Functionality End ------------

      router.push("/dashboard");
    } catch (error: any) {
      console.log(`Error creating account!: ${error.message}`);
      setEmailExist(true);
    }

    // Referrals Functionality ------------

    // const refCode = referralParams.get("ref");

    // if (refCode) {
    //   const referringUserDoc = query(
    //     collection(db, "users"),
    //     where("referralCode", "==", refCode)
    //   );
    //   const querySnapshot = await getDocs(referringUserDoc);

    //   if (querySnapshot.docs.length > 0) {
    //     const referringUser = querySnapshot.docs[0];
    //     const referringUserId = referringUser.id;

    //     // Storing information about referral start.

    //     const referralRef = doc(db, "referrals", referringUserId);

    //     onSnapshot(referralRef, (doc) => {
    //       if (doc.exists()) {
    //         const currentReferrals = doc.data()?.referrals || [];
    //         const updatedReferrals = arrayUnion(
    //           {
    //             username: user?.displayName?.split(" ")[0],
    //             email: user?.email,
    //             referred: userId,
    //           },
    //           ...currentReferrals
    //         );
    //         setDoc(referralRef, { referrals: updatedReferrals });

    //         console.log(doc.data());
    //       } else {
    //         setDoc(referralRef, {
    //           referrals: arrayUnion({
    //             username: user?.displayName?.split(" ")[0],
    //             email: user?.email,
    //             referred: userId,
    //           }),
    //         });
    //       }
    //     });
    //   }
    // }

    //     // Storing information about the referral end.

    // await updateDoc(doc(db, "users", referringUserId), {
    //   referralCount: referringUser.data().referralCount + 1,
    // });
    //   }
    // }

    // Referrals Functionality End ------------

    // Updating Users //

    // const uid = user?.uid || "";
    // const userDocRef = doc(db, "users", uid);

    // await setDoc(
    //   userDocRef,
    //   {
    //     userId: uid,
    //     name: values.firstName + " " + values.lastName || "",
    //     email: user?.email || "",
    //     onboarded: true || "",
    //     referralCode,
    //     referralCount: 0,
    //     trade: false,
    //     createdAt: new Date(),
    //   },
    //   { merge: true }
    // );

    // Updating Users End

    // Creating Wallets Start

    // const walletDocRef = doc(db, "wallets", uid);

    // await setDoc(
    //   walletDocRef,
    //   {
    //     walletId: uid,
    //     secretKey: values.secretKey,
    //     usdtAddress: values.usdtAddress,
    //     btcAddress: values.bitcoinAddress,
    //     ethereumAddress: values.ethereumAddress,
    //     litecoinAddress: values.litecoinAddress,
    //     dogeAddress: values.dogeAddress,
    //     tronAddress: values.tronAddress,
    //     bnbAddress: values.bnbAddress,
    //     shibaAddress: values.shibaAddress,
    //   },
    //   { merge: true }
    // );

    // Creating Wallets End

    // Creating Account Information Start

    // const detailsDocRef = doc(db, "accountInfo", uid);

    // await setDoc(
    //   detailsDocRef,
    //   {
    //     userId: uid,
    //     accountBalance: 0.0,
    //     currentPlan: "none",
    //     activeDeposit: 0.0,
    //     earnedTotal: 0.0,
    //   },
    //   { merge: true }
    // );

    // Creating Account Information End

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

    // router.push("/dashboard");
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

        {/* <div>
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
        </div> */}

        {emailExist && (
          <div className="text-xs font-bold text-puregreen">
            Email already in use by another account
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
          className="w-full text-xs flex items-center rounded-lg"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign Up
        </Button>
      </form>
    </Form>
  );
}

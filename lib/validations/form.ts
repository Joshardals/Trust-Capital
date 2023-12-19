import * as z from "zod";
import {
  ConfirmDepositType,
  EditValidationType,
  FeedBackFormType,
  OnboardingValidationType,
  PlanItemProps,
  SecretType,
  SignInValidationType,
  SignUpValidationType,
} from "@/typings";

export const OnboardingValidation: z.ZodType<OnboardingValidationType> =
  z.object({
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    secretKey: z
      .string()
      .min(3, {
        message:
          "Ensure you safeguard your secret key, min of 3 characters and a max of 12 characters.",
      })
      .max(12, {
        message:
          "Ensure you safeguard your secret key, min of 3 characters and a max of 12 characters.",
      }),
    bitcoinAddress: z.string().max(100),
    ethereumAddress: z.string().max(100),
    litecoinAddress: z.string().max(100),
    usdtAddress: z
      .string()
      .min(1, { message: "USDT Address is required" })
      .max(100),
    dogeAddress: z.string().max(100),
    tronAddress: z.string().max(100),
    bnbAddress: z.string().max(100),
    shibaAddress: z.string().max(100),
  });

export const SignInValidation: z.ZodType<SignInValidationType> = z.object({
  email: z.string().email().min(10).max(100),
  password: z.string().min(6).max(20),
});

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  email: z.string().email().min(10).max(100),
  password: z
    .string()
    .min(6, {
      message: "Password should be a minimum of 6 characters",
    })
    .max(20),
});

export const FeedbackValidation: z.ZodType<FeedBackFormType> = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().min(10).max(100),
  message: z.string().min(5).max(200),
});

export const SecretValidation: z.ZodType<SecretType> = z.object({
  secretKey: z.string(),
});

// Dashboard/Deposit

const planOptions = [
  "beginners",
  "advanced trade",
  "professional",
  "promo",
  "master trade",
  "retirement",
] as const;

export const PlansValidation: z.ZodType<PlanItemProps> = z.object({
  plan: z.enum(planOptions),
});

// Dashboard/Deposit/ConfirmDeposit

export const ConfirmDepositValidation: z.ZodType<ConfirmDepositType> = z.object(
  {
    method: z.string({
      required_error: "Please Select a payment method",
    }),
    amount: z.string().min(1, {
      message: "required",
    }),
  }
);

//Dashboard/Edit Account

export const EditValidation: z.ZodType<EditValidationType> = z.object({
  bitcoinAddress: z.string().max(100),
  ethereumAddress: z.string().max(100),
  litecoinAddress: z.string().max(100),
  usdtAddress: z
    .string()
    .min(1, {
      message: "USDT is required",
    })
    .max(100),
  dogeAddress: z.string().max(100),
  tronAddress: z.string().max(100),
  bnbAddress: z.string().max(100),
  shibaAddress: z.string().max(100),
});

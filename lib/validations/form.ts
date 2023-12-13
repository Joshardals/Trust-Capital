import * as z from "zod";
import {
  EditValidationType,
  FeedBackFormType,
  PlanItemProps,
  SecretType,
  SignInValidationType,
  SignUpValidationType,
} from "@/typings";

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
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
  password: z.string().min(8).max(20),
});

export const FeedbackValidation: z.ZodType<FeedBackFormType> = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().min(10).max(100),
  message: z.string().min(5).max(200),
});

export const SecretValidation: z.ZodType<SecretType> = z.object({
  secretKey: z
    .string()
    .min(3, {
      message: "Enter the security key you used during the onboarding process.",
    })
    .max(12),
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

//Dashboard/Edit Account

export const EditValidation: z.ZodType<EditValidationType> = z.object({
  bitcoinAddress: z.string().max(100),
  ethereumAddress: z.string().max(100),
  litecoinAddress: z.string().max(100),
  usdtAddress: z.string().max(100),
  dogeAddress: z.string().max(100),
  tronAddress: z.string().max(100),
  bnbAddress: z.string().max(100),
  shibaAddress: z.string().max(100),
});

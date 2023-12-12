import * as z from "zod";
import {
  EditValidationType,
  FeedBackFormType,
  PlanItemProps,
  PlansType,
  SignInValidationType,
  SignUpValidationType,
} from "@/typings";

// const isStrongPassword = (password: string) => {
//   // Add your password strength criteria here
//   // For example: minimum length, uppercase, lowercase, numbers, and special characters
//   const minLength = 8;
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /\d/.test(password);
//   const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

//   return (
//     password.length >= minLength &&
//     hasUppercase &&
//     hasLowercase &&
//     hasNumber &&
//     hasSpecialChar
//   );
// };

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  // firstName: z.string().min(3).max(100),
  // lastName: z.string().min(3).max(100),
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

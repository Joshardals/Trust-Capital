import * as z from "zod";
import {
  EditValidationType,
  FeedBackFormType,
  PlanItemProps,
  PlansType,
  SignInValidationType,
  SignUpValidationType,
} from "@/typings";

const isStrongPassword = (password: string) => {
  // Add your password strength criteria here
  // For example: minimum length, uppercase, lowercase, numbers, and special characters
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
};

export const Password = z
  .string()
  .min(8)
  .max(20)
  .refine((password) => isStrongPassword(password), {
    message:
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
  });

export const SignUpValidation: z.ZodType<SignUpValidationType> = z
  .object({
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    email: z.string().email().min(10).max(100),
    password: z
      .string()
      .min(8)
      .max(20)
      .refine((password) => isStrongPassword(password), {
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      }),
    confirmPassword: z.string().max(20),
    bitcoinAddress: z.string().max(100),
    ethereumAddress: z.string().max(100),
    litecoinAddress: z.string().max(100),
    usdtAddress: z.string().max(100),
    dogeAddress: z.string().max(100),
    tronAddress: z.string().max(100),
    bnbAddress: z.string().max(100),
    shibaAddress: z.string().max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
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
  firstName: z.string().min(3).max(100),
  lastName: z.string().min(3).max(100),
  email: z.string().email().min(10).max(100),
  bitcoinAddress: z.string().max(100),
  ethereumAddress: z.string().max(100),
  litecoinAddress: z.string().max(100),
  usdtAddress: z.string().max(100),
  dogeAddress: z.string().max(100),
  tronAddress: z.string().max(100),
  bnbAddress: z.string().max(100),
  shibaAddress: z.string().max(100),
});

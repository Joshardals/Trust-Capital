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
import Link from "next/link";
import { EditValidation } from "@/lib/validations/form";
import { EditValidationType } from "@/typings";
import { useState } from "react";
import { Metadata } from "next";
import EditAccount from "@/components/forms/EditAccount";

export const metadata: Metadata = {
  title: "Edit Account | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = () => {
  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue">
      <div className="space-y-8">
        <h1 className="capitalize text-lg font-semibold text-darkblue">
          edit account
        </h1>
        <div>
          <EditAccount />
        </div>
      </div>
    </div>
  );
};

export default page;

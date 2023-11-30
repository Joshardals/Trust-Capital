"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { FeedbackValidation } from "@/lib/validations/form";
import { FeedBackFormType } from "@/typings";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values: FeedBackFormType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const form = useForm<FeedBackFormType>({
    resolver: zodResolver(FeedbackValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <div className="">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="">
                      Name:
                    </Label>
                    <FormControl className="no-focus">
                      <Input
                        id="name"
                        type="text"
                        className="border min-w-full border-navyblue/30 transition-all duration-500 md:w-80"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="space-y-4">
                    <Label htmlFor="email" className="">
                      Email:
                    </Label>
                    <FormControl className="no-focus">
                      <Input
                        id="email"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="border min-w-full border-navyblue/30 transition-all duration-500 md:w-80 focus:outline-none focus:focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="space-y-4">
                    <Label htmlFor="message" className="">
                      Message:
                    </Label>
                    <FormControl className="no-focus">
                      <Textarea
                        id="message"
                        className="border border-navyblue/30"
                        placeholder="Your Message Here"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-purered text-xs" />
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
            Submit
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default FeedbackForm;

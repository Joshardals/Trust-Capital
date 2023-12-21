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
import { contactSupport } from "@/lib/mail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const onSubmit = async (values: FeedBackFormType) => {
    setIsLoading(true);
    setIsDisabled(true);

    await contactSupport({
      from: values.email,
      text: `Name: ${values.name}\nEmail: ${values.email} \nMessage: ${values.message}`,
    });

    toast("Complaint Sent");
    form.setValue("name", "");
    form.setValue("email", "");
    form.setValue("message", "");

    setIsLoading(false);
    setIsDisabled(false);
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
                      <div className="relative">
                        <Input
                          id="name"
                          type="text"
                          className="border min-w-full border-navyblue/30 transition-all duration-500 md:w-80"
                          {...field}
                        />
                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        />
                      </div>
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
                      Your Email:
                    </Label>
                    <FormControl className="no-focus">
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          className="border min-w-full border-navyblue/30 transition-all duration-500 md:w-80 focus:outline-none focus:focus-visible:ring-0"
                          {...field}
                        />

                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        ></div>
                      </div>
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
                      <div className="relative">
                        <Textarea
                          id="message"
                          className="border border-navyblue/30"
                          placeholder="Your Message Here"
                          {...field}
                        />

                        <div
                          className={`${isDisabled ? "disableInput" : null}`}
                        ></div>
                      </div>
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

          <ToastContainer />
        </form>
      </div>
    </Form>
  );
};

export default FeedbackForm;

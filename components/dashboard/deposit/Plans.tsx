"use client";
import { PlansValidation } from "@/lib/validations/form";
import { PlansType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const plan = [
  {
    plan: "beginners",
    amount: "$100 - $699",
    term: "5",
    percentage: "5",
  },
  {
    plan: "advanced trade",
    amount: "$700 - $1499",
    term: "5",
    percentage: "7",
  },
  {
    plan: "professional",
    amount: "$1500 - $3999",
    term: "Every 5",
    percentage: "12",
  },
  {
    plan: "promo",
    amount: "$4000 - $8999",
    term: "Every 5",
    percentage: "15",
  },
  {
    plan: "master trade",
    amount: "$9000 - $15000",
    term: "Every 5",
    percentage: "30",
  },
  {
    plan: "retirement",
    amount: "$15000 - $Unlimited",
    term: "Every 5",
    percentage: "40",
  },
];

const Plans = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<PlansType>({
    resolver: zodResolver(PlansValidation),
  });

  const onSubmit = async (values: PlansType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    console.log({
      title: "You submitted the following values:",
      description: values.plan,
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-md:text-xs w-full space-y-6 h-full select-none"
      >
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className=" relative">
                    {isLoading ? (
                      <div className="absolute bg-darkblue/20 cursor-not-allowed h-full w-full" />
                    ) : null}

                    <div className="space-y-6">
                      {plan.map((item, index) => (
                        <FormItem
                          className=" w-full space-y-0 border border-goldenrod"
                          key={index}
                        >
                          <div
                            className="flex items-center space-x-4
                       bg-black/10 px-5 py-2"
                          >
                            <div className="space-x-4 flex items-center">
                              <FormControl>
                                <RadioGroupItem value={item.plan} />
                              </FormControl>
                              <FormLabel className="text-navyblue max-md:text-xs">
                                {item.percentage}% in {item.term} Hours
                              </FormLabel>
                            </div>
                          </div>
                          <div className="grid max-md:gap-1 md:grid-cols-3 justify-items-center">
                            <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                              <div className="py-2">
                                <p className="font-semibold">Plan</p>
                              </div>
                              <div className="bg-darkblue w-full text-center py-2 capitalize font-bold">
                                {item.plan}
                              </div>
                            </div>
                            <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                              <div className="py-2">
                                <p className="font-semibold">Spent Amount($)</p>
                              </div>
                              <div className="bg-darkblue w-full text-center py-2">
                                <p className="font-bold">{item.amount}</p>
                              </div>
                            </div>
                            <div className="flex flex-col bg-navyblue border-r border-r-babyblue text-babyblue w-full items-center">
                              <div className="py-2">
                                <p className="font-semibold">Profit(%)</p>
                              </div>
                              <div className="bg-darkblue w-full text-center py-2 font-bold">
                                {item.percentage}
                              </div>
                            </div>
                          </div>
                        </FormItem>
                      ))}
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"form"}
          type="submit"
          disabled={isLoading}
          className="w-full max-md:text-xs max-md:h-8"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Deposit
        </Button>
      </form>
    </Form>
  );
};

export default Plans;

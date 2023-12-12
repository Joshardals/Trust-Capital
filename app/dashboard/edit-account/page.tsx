import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Metadata } from "next";
import EditAccount from "@/components/forms/EditAccount";

export const metadata: Metadata = {
  title: "Edit Account | Trust-Capital Investment",
  description:
    "Trust-Capital website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
};

const page = async () => {
  return (
    <div className=" font-sans space-y-8 text-navyblue md:p-5 max-md:p-5 bg-babyblue">
      <div className="space-y-8 h-full">
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

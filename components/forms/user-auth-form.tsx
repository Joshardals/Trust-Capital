// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";
// import { Icons } from "./icons";
// import { Button } from "../ui/button";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   async function onSubmit(event: React.SyntheticEvent) {
//     event.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }

//   return (
//     <div className={cn("grid gap-6", className)} {...props}>
//       <form onSubmit={onSubmit}>
//         <div className="grid gap-2">
//           <div className="grid gap-1">
//             <Label className="sr-only" htmlFor="email">
//               Email
//             </Label>
//             <Input
//               id="email"
//               placeholder="name@example.com"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               disabled={isLoading}
//             />
//           </div>
//           <Button disabled={isLoading}>
//             {isLoading && (
//               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//             )}
//             Sign In with Email
//           </Button>
//         </div>
//       </form>
//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>
//       </div>
//       <Button variant="outline" type="button" disabled={isLoading}>
//         {isLoading ? (
//           <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//         ) : (
//           <Icons.gitHub className="mr-2 h-4 w-4" />
//         )}{" "}
//         Github
//       </Button>
//     </div>

//     <div>hey</div>
//   );
// }

"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validations/signup";
import { SignUpValidationType } from "@/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

export const UserAuthForm = () => {
  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: SignUpValidationType) => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 font-sans mt-8"
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="bg-navyblue text-purewhite placeholder:text-purewhite placeholder:text-opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="bg-navyblue text-purewhite placeholder:placeholder:text-opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="bg-navyblue text-purewhite placeholder:text-purewhite placeholder:text-opacity-50"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-purered text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  className="bg-navyblue text-purewhite placeholder:text-purewhite placeholder:text-opacity-50"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-purered text-xs" />
            </FormItem>
          )}
        />
        <Button variant={"destructive"} type="submit">
          {/* {isPending ? "Adding News..." : "Add News"} */}
          Continue
        </Button>
      </form>
    </Form>
  );
};

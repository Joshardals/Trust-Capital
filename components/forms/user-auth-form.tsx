"use client";

import { SyntheticEvent, useState } from "react";
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
import { Icons } from "@/components/icons";
import { Label } from "../ui/label";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: SignUpValidationType) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 font-sans mt-8 w-full"
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      placeholder="First Name"
                      className="border border-navyblue"
                      {...field}
                      onChange={(e) => {
                        const capitalizedValue =
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1);
                        form.setValue("firstName", capitalizedValue);
                      }}
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
                  <FormControl className="no-focus text-xs">
                    <Input
                      placeholder="Last Name"
                      disabled={isLoading}
                      className="border border-navyblue"
                      {...field}
                      onChange={(e) => {
                        const capitalizedValue =
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1);
                        form.setValue("lastName", capitalizedValue);
                      }}
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
              <FormControl className="no-focus text-xs">
                <Input
                  type="email"
                  placeholder="Email Address"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="border border-navyblue"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-purered text-xs" />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      type="password"
                      placeholder="Password"
                      disabled={isLoading}
                      className="border border-navyblue"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="no-focus text-xs">
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      disabled={isLoading}
                      className="border border-navyblue"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-purered text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button disabled={isLoading} className="w-full">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign In with Email
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-t-navyblue" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-babyblue px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="form"
          type="button"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
      </form>
    </Form>
  );
  // return (
  //   <div className="w-full">
  //     {" "}
  //     <div className="grid gap-6">
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
  // autoCapitalize="none"
  // autoComplete="email"
  // autoCorrect="off"
  // disabled={isLoading}
  //             />
  //           </div>
  // <Button disabled={isLoading}>
  //   {isLoading && (
  //     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
  //   )}
  //   Sign In with Email
  // </Button>
  //         </div>
  //       </form>
  // <div className="relative">
  //   <div className="absolute inset-0 flex items-center">
  //     <span className="w-full border-t border-t-navyblue" />
  //   </div>
  //   <div className="relative flex justify-center text-xs uppercase">
  //     <span className="bg-babyblue px-2 text-muted-foreground">
  //       Or continue with
  //     </span>
  //   </div>
  // </div>
  // <Button variant="form" type="button" disabled={isLoading}>
  //   {isLoading ? (
  //     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
  //   ) : (
  //     <Icons.google className="mr-2 h-4 w-4" />
  //   )}{" "}
  //   Google
  // </Button>
  // </div>
  //   </div>
  // );
}

// "use client";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { SignUpValidation } from "@/lib/validations/signup";
// import { SignUpValidationType } from "@/typings";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "../ui/button";

// export const UserAuthForm = () => {
// const form = useForm<SignUpValidationType>({
//   resolver: zodResolver(SignUpValidation),
//   defaultValues: {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   },
// });
// const onSubmit = async (values: SignUpValidationType) => {};
// return (
//   <Form {...form}>
//     <form
//       onSubmit={form.handleSubmit(onSubmit)}
//       className="space-y-5 font-sans mt-8"
//     >
//       <div className="flex space-x-4">
//         <div className="flex-1">
//           <FormField
//             control={form.control}
//             name="firstName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl className="no-focus">
//                   <Input
//                     placeholder="First Name"
//                     {...field}
//                     onChange={(e) => {
//                       const capitalizedValue =
//                         e.target.value.charAt(0).toUpperCase() +
//                         e.target.value.slice(1);
//                       form.setValue("firstName", capitalizedValue);
//                     }}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-purered text-xs" />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="flex-1">
//           <FormField
//             control={form.control}
//             name="lastName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl className="no-focus">
//                   <Input
//                     placeholder="Last Name"
//                     {...field}
//                     onChange={(e) => {
//                       const capitalizedValue =
//                         e.target.value.charAt(0).toUpperCase() +
//                         e.target.value.slice(1);
//                       form.setValue("lastName", capitalizedValue);
//                     }}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-purered text-xs" />
//               </FormItem>
//             )}
//           />
//         </div>
//       </div>
//       <FormField
//         control={form.control}
//         name="email"
//         render={({ field }) => (
//           <FormItem>
//             <FormControl className="no-focus">
//               <Input type="email" placeholder="Email" {...field} />
//             </FormControl>
//             <FormMessage className="text-purered text-xs" />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="password"
//         render={({ field }) => (
//           <FormItem>
//             <FormControl className="no-focus">
//               <Input type="password" placeholder="Password" {...field} />
//             </FormControl>
//             <FormMessage className="text-purered text-xs" />
//           </FormItem>
//         )}
//       />
//       <Button variant={"destructive"} type="submit">
//         {/* {isPending ? "Adding News..." : "Add News"} */}
//         Continue
//       </Button>
//     </form>
//   </Form>
// );
// };

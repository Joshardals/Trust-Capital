"use client";
import { account, databases } from "@/appwrite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Models, Query } from "appwrite";
import { I18NProvider } from "next/dist/server/future/helpers/i18n-provider";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

interface InvoicesProp extends Models.Document {
  status: string;
  method: string;
  created: string;
  amount: string;
}

const convertTimestampToDate = (timestamp: string): string => {
  const date = new Date(timestamp); // Parse ISO 8601 string
  const year = date.getFullYear().toString().slice(2); // Get last two digits
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Month is 0-indexed
  const day = ("0" + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export function DepositHistory() {
  const [depositInfo, setDepositInfo] = useState<InvoicesProp[]>([]);
  const router = useRouter();

  // useEffect(() => {
  //   const depositDocRef = doc(db, "deposits", user?.email!);
  //   // const q = query(depositDocRef, orderBy("created", "asc"));

  //   onSnapshot(depositDocRef, (doc) => {
  //     // doc.docs.forEach((doc) => {
  //     //   console.log(doc.data());
  //     if (doc.exists()) {
  //       const res = doc.data();
  //       const sortedDeposits = [...res.deposits].sort((a: any, b: any) => {
  //         const timeA = a.created.toMillis(); // Convert Timestamp to milliseconds
  //         const timeB = b.created.toMillis();
  //         return timeA - timeB;
  //       });
  //       setDepositInfo(sortedDeposits);
  //     } else {
  //       console.log("no-data");
  //     }
  //   });
  // }, [userId]);

  useEffect(() => {
    const getDeposits = async () => {
      try {
        const user = (await account.get()).email;

        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID as string,
          process.env.NEXT_PUBLIC_DEPOSITS_ID as string,
          [Query.equal("userId", user)] // Filter by user ID
        );

        const deposits = response.documents; // Get deposits

        setDepositInfo(deposits as any);
      } catch (error: any) {
        console.log(`Error: ${error.message}`);
      }
    };

    getDeposits();
  }, [router]);

  const totalAmount = depositInfo?.reduce(
    (acc, value) => acc + Number(value.amount),
    0
  );

  return (
    <div className="h-screen flex">
      <Table className="text-navyblue bg-darkblue/20 max-md:text-xs">
        <TableCaption className="text-darkblue max-md:text-xs">
          A list of your recent deposits.
        </TableCaption>
        <TableHeader className="hover:bg-darkblue/10">
          <TableRow className="border-b border-b-navyblue">
            <TableHead className="w-[100px] font-semibold text-darkblue">
              Invoice
            </TableHead>
            <TableHead className="font-semibold text-darkblue">
              Status
            </TableHead>
            <TableHead className="font-semibold text-darkblue">
              Method
            </TableHead>
            <TableHead className="font-semibold text-darkblue">
              Created
            </TableHead>
            <TableHead className="text-right font-semibold text-darkblue">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {depositInfo?.map((value, index) => (
            <TableRow
              key={index}
              className="font-bold border-t border-navyblue"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{value.status}</TableCell>
              <TableCell>{value.method}</TableCell>
              <TableCell>{convertTimestampToDate(value.created)}</TableCell>
              <TableCell className="text-right" colSpan={2}>
                {Number(value.amount).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="border-t border-t-navyblue">
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">
              {totalAmount?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

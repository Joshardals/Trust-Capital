"use client";
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
import { auth, db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Successful",
    totalAmount: "$250.00",
    paymentMethod: "Bitcoin",
    paymentDate: "02/07/23",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "Ethereum",
    paymentDate: "21/02/23",
  },
  {
    invoice: "INV003",
    paymentStatus: "Failed",
    totalAmount: "$350.00",
    paymentMethod: "USDT",
    paymentDate: "14/09/23",
  },
];

interface InvoicesProp {
  status: string;
  method: string;
  created: string;
  amount: string;
}

const convertTimestampToDate = (timestamp: any): string => {
  const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
  const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Month is 0-indexed
  const day = ("0" + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export function DepositHistory() {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [depositInfo, setDepositInfo] = useState<InvoicesProp[]>([]);

  useEffect(() => {
    const depositDocRef = doc(db, "deposits", userId);

    onSnapshot(depositDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        setDepositInfo(res.deposits);
      } else {
        console.log("no-data");
      }
    });
  }, [userId]);

  useEffect(() => {
    console.log(depositInfo);
  }, [depositInfo]);

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

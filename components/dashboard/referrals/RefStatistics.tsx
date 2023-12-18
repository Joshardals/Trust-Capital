"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";

interface ReferralInfo {
  username: string;
  email: string;
}

const referrals = [
  {
    id: "1",
    email: "adashelby@gmail.com",
    totalAmount: "$250.00",
    userName: "Ada",
  },
];

export function RefStatistic() {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [referralsInfo, setReferralsInfo] = useState<ReferralInfo[]>();

  useEffect(() => {
    const referralDocRef = doc(db, "referrals", userId);

    onSnapshot(referralDocRef, (doc) => {
      if (doc.exists()) {
        const res = doc.data();
        console.log("Referrals Info", res);
        setReferralsInfo([
          {
            username: res?.username,
            email: res?.email,
          },
        ]);
        // setReferrals(res);
      } else {
        console.log("no-data");
      }
    });
  }, [userId]);

  useEffect(() => {
    console.log(referralsInfo);
  }, [referralsInfo]);

  return (
    <div className="h-screen flex">
      <Table className="text-navyblue bg-darkblue/20 max-md:text-xs">
        <TableCaption className="text-darkblue max-md:text-xs">
          A list of your referred users
        </TableCaption>
        <TableHeader className="hover:bg-darkblue/10">
          <TableRow className="border-b border-b-navyblue">
            <TableHead className="w-[100px] font-semibold text-darkblue">
              S/N
            </TableHead>
            <TableHead className="font-semibold text-darkblue">Email</TableHead>
            <TableHead className="font-semibold text-darkblue">
              Username
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {referralsInfo?.map((user, index) => (
            <TableRow
              key={index}
              className="font-bold border-t border-navyblue"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

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
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useRefState } from "@/lib/store/store";

interface ReferralInfo {
  username: string;
  email: string;
}

export function RefStatistic() {
  const user = auth.currentUser?.providerData[0];
  const userId = user?.uid || "";
  const [referralsInfo, setReferralsInfo] = useState<ReferralInfo[]>([]);
  const { refCode, updateRefCode } = useRefState();

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch the current user document to get the referralCode
        const userDocRef = doc(db, "users", userId);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();

        if (userData && userData.referralCode) {
          const referralCode = userData.referralCode;

          // Query users where the referredBy field matches the referralCode
          const referringUserQuery = query(
            collection(db, "users"),
            where("referredBy", "==", referralCode)
          );

          const querySnapshot = await getDocs(referringUserQuery);
          const referralsData: ReferralInfo[] = querySnapshot.docs.map(
            (doc) => {
              // Extract the firstName and lastName fields from the document data
              const { name, email } = doc.data();
              // Compute the username by concatenating firstName and lastName
              const username = name;
              return { username, email };
            }
          );

          // Update the state with the extracted referral info
          setReferralsInfo(referralsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [userId]); // Add userId to the dependency array

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

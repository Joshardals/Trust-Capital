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

const referrals = [
  {
    id: "1",
    email: "adashelby@gmail.com",
    totalAmount: "$250.00",
    userName: "Ada",
  },
];

export function RefStatistic() {
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
          {referrals.map((user) => (
            <TableRow
              key={user.id}
              className="font-bold border-t border-navyblue"
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.userName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

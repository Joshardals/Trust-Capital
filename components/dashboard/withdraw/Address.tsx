import Link from "next/link";

interface walletProps {
  label: string;
  address: string | undefined;
}

export default function Address({ label, address }: walletProps) {
  return (
    <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
      <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
        {label} Wallet Address:
      </p>
      <p className="font-semibold md:py-2 col-span-2">
        {!address ? (
          <Link
            href="/dashboard/edit-account"
            className="bg-darkblue text-babyblue py-1 px-4"
          >
            Set
          </Link>
        ) : (
          address
        )}
      </p>
    </div>
  );
}

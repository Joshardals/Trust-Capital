interface props {
  label: string;
  info: string;
}

export default function ConfirmDetails({ label, info }: props) {
  return (
    <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-navyblue border-x border-x-navyblue max-md:py-2 max-md:px-5 max-md:space-y-2">
      <p className="md:border-r md:border-r-navyblue md:px-5 md:py-2">
        {label}
      </p>
      <p className="font-semibold md:py-2 col-span-2">{info}</p>
    </div>
  );
}

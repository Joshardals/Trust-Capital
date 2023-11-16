import Link from "next/link";

const CryptoPrice = async () => {
  return (
    <div className="h-62 overflow-hidden rounded-md text-right leading-14 block-size-62 text-sm font-normal text-black shadow-inner inset-y-5 box-border p-0 m-0 w-full">
      <div className="h-auto p-0 m-0 w-full relative">
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
          width="100%"
          height="36px"
          className="p-0 m-0"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-navyblue  bg-opacity-20"></div>
      </div>
    </div>
  );
};

export default CryptoPrice;

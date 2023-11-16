import Link from "next/link";

const CryptoPrice = async () => {
  return (
    <div className="h-62 overflow-hidden border border-solid border-gray-300 rounded-md text-right leading-14 block-size-62 text-sm font-normal text-black shadow-inner inset-y-5 box-border p-0 m-0 w-full">
      <div className="h-auto p-0 m-0 w-full">
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
          width="100%"
          height="36px"
          className="p-0 m-0"
        ></iframe>
      </div>
    </div>
  );
};

export default CryptoPrice;

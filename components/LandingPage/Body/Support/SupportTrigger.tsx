"use client";

import { Icons } from "@/components/icons";
import { useSupportStore } from "@/lib/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SupportTrigger = () => {
  const router = useRouter();
  const { support, setSupport } = useSupportStore();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setSupport();
    if (support) {
      setActive(false)
      router.push("#");
    } else {
      setActive(true);
      router.push("#support");
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-5 rounded-full p-3 cursor-pointer transition-all duration-300
     ${active ? "bg-goldenrod" : "bg-puregreen"}
   `}
      onClick={handleClick}
    >
      <Icons.chat className=" w-6 h-6 text-babyblue" />
    </div>
  );
};

export default SupportTrigger;

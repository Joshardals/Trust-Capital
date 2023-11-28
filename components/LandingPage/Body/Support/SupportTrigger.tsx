"use client";

import { Icons } from "@/components/icons";
import { useSupportStore } from "@/lib/store/store";
import { useRouter } from "next/navigation";

const SupportTrigger = () => {
  const router = useRouter();
  const { support, setSupport } = useSupportStore();

  const handleClick = () => {
    setSupport();
    if (support) {
      router.push("#");
    } else {
      router.push("#support");
    }
  };
  return (
    <div
      className="fixed bottom-5 right-5 bg-puregreen rounded-full p-3 cursor-pointer"
      onClick={handleClick}
    >
      <Icons.chat className="md:h-10 md:w-10 w-6 h-6 text-babyblue" />
    </div>
  );
};

export default SupportTrigger;

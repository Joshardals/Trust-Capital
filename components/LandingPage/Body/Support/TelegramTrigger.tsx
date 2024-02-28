import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function TelegramTrigger() {
  return (
    <Link
      href="https://wa.link/lcvnqw"
      className="fixed bottom-5 right-5 z-50 cursor-pointer transition-all duration-300 bg-babyblue rounded-full"
    >
      {/* <Image
        src="/telegram.svg"
        height={10}
        width={10}
        className="w-10 h-10"
        alt="Telegram Logo"
      /> */}
      <Icons.whatsappIcon className="w-10 h-10" />
    </Link>
  );
}

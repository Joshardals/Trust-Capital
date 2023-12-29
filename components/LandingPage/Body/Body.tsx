"use client";
import { Icons } from "@/components/icons";
import Features from "./Features/Features";
import Plans from "./Plans/Plans";
import Questions from "./Faqs/Questions";
import Support from "./Support/Support";
import SupportTrigger from "./Support/SupportTrigger";
import { useSupportStore } from "@/lib/store/store";
import TelegramTrigger from "./Support/TelegramTrigger";

const Body = () => {
  const { support } = useSupportStore();
  return (
    <div className="px-5 md:px-20 py-10 relative">
      <div className="py-20">
        <Features />
      </div>
      <div id="learn-more" className="py-20">
        <Plans />
      </div>

      <div className="py-20" id="faq">
        <Questions />
      </div>

      {support && (
        <div id="support" className="py-20">
          <Support />
        </div>
      )}

      <div className="flex items-center">
        <SupportTrigger />
        <TelegramTrigger />
      </div>
    </div>
  );
};

export default Body;

"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleTrans() {
  useEffect(() => {
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    if ((window as any).google && (window as any).google.translate) {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: "true",

          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .HORIZONTAL,
        },
        "google_translate_element"
      );
    }
  };

  return (
    <div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />
      <div id="google_translate_element"></div>
    </div>
  );
}

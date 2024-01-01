"use client";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleTrans() {
  // useEffect(() => {
  //   (window as any).googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // const googleTranslateElementInit = () => {
  //   if ((window as any).google && (window as any).google.translate) {
  //     new (window as any).google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         autoDisplay: "true",

  //         layout: (window as any).google.translate.TranslateElement.InlineLayout
  //           .HORIZONTAL,
  //       },
  //       "google_translate_element"
  //     );
  //   }
  // };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(addScript);
    };
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
    <div key="google" className=" py-4 relative overflow-hidden w-40">
      {/* <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="beforeInteractive"
      /> */}
      <div
        id="google_translate_element"
        className="w-0 h-0 absolute top-0 -left-40"
      ></div>
    </div>
  );
}

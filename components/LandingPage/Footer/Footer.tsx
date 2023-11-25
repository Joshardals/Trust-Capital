import { Icons } from "@/components/icons";
import Image from "next/image";
import React from "react";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="h-full bg-navyblue text-babyblue">
      <div className="bg-darkblue p-10 max-md:p-5 font-sans space-y-4">
        <h1 className="text-center text-md font-sans uppercase font-bold">
          We accept various payment processors
        </h1>

        <FooterIcons />
      </div>
    </div>
  );
};

export default Footer;

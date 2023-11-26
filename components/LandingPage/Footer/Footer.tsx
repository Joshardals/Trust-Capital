import { Icons } from "@/components/icons";
import Image from "next/image";
import React from "react";
import FooterIcons from "./FooterIcons";
import Link from "next/link";
import { FooterLinks, NavLinks } from "../Header/Nav/NavLinks";
import { Flags } from "./FlagIcons";

const Footer = () => {
  return (
    <div className="h-full bg-navyblue text-babyblue">
      <div className="bg-darkblue p-10 max-md:p-5 font-sans space-y-4">
        <h1 className="text-center text-md font-sans uppercase font-bold">
          We accept various payment method
        </h1>

        <FooterIcons />
      </div>
      <div className="bg-navyblue h-full w-full px-5 md:px-20 py-10 max-md:py-5">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="flex flex-col space-y-4 font-sans text-xs max-md:border-b max-md:border-b-babyblue max-md:py-6">
              <Link
                href="/"
                className=" font-serif text-md md:text-lg font-bold max-w-[9rem]"
              >
                Trust-Capital
              </Link>

              <p className=" text-xs flex items-center">
                <span>
                  <Icons.map className="w-4 h-4 mr-1" />
                </span>{" "}
                18a/20 King Street, Maidenhead, Berkshire, United Kingdom, SL6
                1EF
              </p>

              <p className="max-md:hidden">
                Copyright © 2023 | Trust-Capital Investment.
              </p>
            </div>
          </div>
          <div className="w-full max-md:hidden max-md:col-span-2 max-md:py-2">
            <FooterLinks />
          </div>
          <div className="col-span-2 space-y-4">
            <p className="font-sans">Our Users All Over The World</p>
            <Flags />
          </div>
          <p className="md:hidden col-span-2 text-xs font-sans">
            Copyright © 2023 | Trust-Capital Investment.
          </p>
          <div className="w-full md:hidden max-md:col-span-2 max-md:py-2">
            <FooterLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

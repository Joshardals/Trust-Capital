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
      <div className="max-md:hidden bg-darkblue p-10 max-md:p-5 font-sans space-y-6">
        <h1 className="text-center text-md font-sans uppercase font-bold">
          We accept various payment method
        </h1>

        <FooterIcons />
        <p className="md:hidden col-span-2 text-xs font-sans">
          Copyright © 2023 | Trust-Capital Investment.
        </p>
      </div>
      <div className="bg-navyblue h-full w-full px-5 md:px-20 py-10 max-md:py-5">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="flex flex-col space-y-6 font-sans text-xs max-md:border-b max-md:border-b-babyblue max-md:py-6">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Image alt="Logo" src="/logo.png" width={30} height={30} />
                <Link
                  href="/"
                  className=" font-serif text-md md:text-lg font-bold max-w-[9rem]"
                >
                  Trust-Capital
                </Link>
              </div>

              {/* <div className="space-y-2">
                <p className=" text-xs flex items-center">
                  <span>
                    <Icons.map className="w-4 h-4 mr-1 text-puregreen" />
                  </span>{" "}
                  18a/20 King Street, Maidenhead, Berkshire, United Kingdom.
                </p>

                <p className=" text-xs flex items-center">
                  <span>
                    <Icons.map className="w-4 h-4 mr-1 text-puregreen" />
                  </span>{" "}
                  Asia Square Tower 1, Tanjong Pagar, Singapore.
                </p>

                <p className=" text-xs flex items-center">
                  <span>
                    <Icons.map className="w-4 h-4 mr-1 text-puregreen" />
                  </span>{" "}
                  156 2nd St, San Francisco, California, USA.
                </p>
              </div> */}

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
        </div>
      </div>

      <div className="md:hidden bg-darkblue p-10 max-md:p-5 font-sans space-y-6">
        <h1 className="text-center text-md font-sans uppercase font-bold">
          We accept various payment method
        </h1>

        <FooterIcons />
        <p className="md:hidden col-span-2 text-xs font-sans">
          Copyright © 2023 | Trust-Capital Investment.
        </p>
      </div>
    </div>
  );
};

export default Footer;

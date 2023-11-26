import Image from "next/image";
import { countries } from "country-flag-icons";
import { Icons } from "@/components/icons";
import { FlagIconsProp } from "@/typings";
import clsx from "clsx";

export const FlagIcons = ({
  code,
  name,
  percentage,
  up,
  percentageChange,
}: FlagIconsProp) => {
  return (
    <div className="grid grid-cols-2 gap-4 select-none max-md:pb-4">
      <div className="flex space-x-4 items-center font-sans text-xs min-w-[10rem]">
        <Image
          width={6}
          height={6}
          alt={name}
          className="w-6 h-6"
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
        />

        <div className="flex flex-col">
          <p>{name}</p>
          <div
            className={clsx("flex items-center text-babyblue space-x-2", {
              "text-purered": !up,
              "text-puregreen": up,
            })}
          >
            <p className=" text-babyblue font-bold">{percentage}</p>
            <div className="flex items-center">
              {up ? (
                <Icons.arrowUp className="h-4 w-4 font-bold" />
              ) : (
                <Icons.arrowDown className="h-4 w-4 font-bold" />
              )}
              <p className="font-semibold">{percentageChange}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Flags = () => {
  return (
    <div className="md:grid md:gap-4 md:grid-cols-2 max-md:py-6 max-md:border-b max-md:border-b-babyblue select-none">
      <FlagIcons
        code="GB"
        name="United Kingdom"
        percentage="18%"
        up={true}
        percentageChange="5%"
      />
      <FlagIcons
        code="US"
        name="United States"
        percentage="17%"
        up={false}
        percentageChange="3%"
      />
      <FlagIcons
        code="IR"
        name="Iran"
        percentage="15%"
        up={true}
        percentageChange="4%"
      />
      <FlagIcons
        code="RU"
        name="Russia"
        percentage="9%"
        up={true}
        percentageChange="8%"
      />
      <FlagIcons
        code="MX"
        name="Mexico"
        percentage="7%"
        up={false}
        percentageChange="2%"
      />
      <FlagIcons
        code="BR"
        name="Brazil"
        percentage="4%"
        up={true}
        percentageChange="6%"
      />
      <div className="flex space-x-4 items-center font-sans text-xs">
        <div className="flex flex-col">
          <p>Others</p>
          <div className="flex items-center text-babyblue space-x-2">
            <p className="font-bold">18%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

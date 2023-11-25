import Image from "next/image";
import { countries } from "country-flag-icons";

const FlagIcons = () => {
  const selectedCountries = [
    "US",
    "CA",
    "GB",
    "FR",
    "DE",
    "AU",
    "BR",
    "IN",
    "CN",
    "RU",
    "NG",
    "KR",
    "MX",
    "ID",
    "TR",
    "AR",
    "IT",
    "ES",
    "NL",
    "SE",
    "NO",
    "CH",
    "AT",
    "DK",
    "FI",
    "SG",
    "MY",
    "TH",
    "CL",
    "CO",
    "EG",
    "SA",
    "AE",
    "IL",
    "PL",
    "CZ",
    "HU",
    "GR",
    "JP",
    "VN",
  ];

  return (
    <div className="grid grid-cols-10 gap-4 select-none">
      {selectedCountries.map((countryCode) => (
        <div key={countryCode}>
          <Image
            width={20}
            height={20}
            alt={countryCode}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        </div>
      ))}
    </div>
  );
};

export default FlagIcons;

import { getData } from "../../_api/getData";
import BackButton from "./BackButton";
import CountryFlag from "./CountryFlag";
import CountryProperties from "./CountryProperties";

const CountryDetails = async ({ country }) => {
  const countryData = await getData(
    `https://restcountries.com/v3.1/alpha/${country}?fields=name,capital,flags,population,region,languages,currencies,borders,subregion,tld,cca3,cca2`
  );

  return (
    <div className="flex flex-col mt:5 sm:mt-14 w-full">
      <div>
        <BackButton />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full  mt-12 h-full
    "
      >
        {countryData && <CountryFlag flag={countryData?.flags} />}
        {countryData && <CountryProperties properties={countryData} />}
      </div>
    </div>
  );
};

export default CountryDetails;

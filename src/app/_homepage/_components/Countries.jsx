import { getData } from "../../_api/getData";
import CountryCard from "./CountryCard";
import CountryList from "./CountryList";

const Countries = async () => {
  const countries = await getData(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,borders,cca3"
  );

  return (
    <div data-testid="Countries">
      {countries.length > 1 && <CountryList countries={countries} />}
    </div>
  );
};

export default Countries;

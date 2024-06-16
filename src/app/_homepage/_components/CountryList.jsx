"use client";

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

const CountryList = ({ countries = [] }) => {
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("All");

  const searchedCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value.toLowerCase());
  });
  const getFilteredCountries = () => {
    if (region === "All") {
      return searchedCountries;
    } else {
      return searchedCountries.filter((country) => country.region === region);
    }
  };

  return (
    <div
      data-testid="CountryList"
      className="flex flex-col w-full
    "
    >
      <div
        className="mb-8 flex justify-between w-full   flex-col md:flex-row  
      "
      >
        <Search value={value} setValue={setValue} />

        <Filter region={region} setRegion={setRegion} />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mt-28 sm:mt-14
    "
      >
        {getFilteredCountries().map((country) => {
          return (
            <div key={country?.cca3}>
              <CountryCard country={country} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;

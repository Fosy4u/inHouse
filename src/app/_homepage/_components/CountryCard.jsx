import Image from "next/image";
import Link from "next/link";

const CountryCard = ({ country }) => {
  return (
    <Link href={`/detail/${country?.cca3}`}>
      <div
        data-testid="CountryCard"
        className="w-full sm:w-64 border-0  rounded-lg shadow-md z-10 dark:bg-darkBlueElement hover:bg-gray-100  dark:hover:bg-gray-700 
      "
      >
        <Image
          className="object-cover w-full h-40 rounded-t-lg"
          src={`${country?.flags?.svg}`}
          alt={country?.flags?.alt || "Country Flag"}
          quality={100}
          width={440}
          height={220}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />

        <div className="p-8 pt-4 mb-3  h-full  ">
          <h3 className="mb-2 text-base font-bold ">{country?.name?.common}</h3>
          <span className="mb-4 font-normal text-sm flex-col pb-4 ">
            <p className="mt-1">
              Population :{" "}
              <span
                className="font-semibold dark:text-darkWhite text-lightDarkWhite
          "
              >
                {country?.population.toLocaleString()}
              </span>
            </p>
            <p className="mt-1 ">
              Region :{" "}
              <span
                className="font-semibold dark:text-darkWhite text-lightDarkWhite
          "
              >
                {country?.region}
              </span>
            </p>
            <p className="mt-1">
              Capital :{" "}
              <span
                className="font-semibold  dark:text-darkWhite text-lightDarkWhite
          "
              >
                {country?.capital[0]}
              </span>
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

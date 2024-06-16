import Border from "./Border";

const CountryProperties = ({ properties }) => {
  const nativeNames = Object.values(properties?.name?.nativeName);
  const languages = Object.values(properties?.languages)
    .map((lang) => lang)
    .join(", ");

  return (
    <div
      data-testid="CountryProperties"
      className="flex flex-col gap-4 w-full h-full sm:py-16 "
    >
      <h1 className="text-3xl font-bold">{properties?.name?.common}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p>
            Native Name:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${
              nativeNames[nativeNames?.length - 1].common
            }`}</span>
          </p>
          <p className="mt-2">
            Population:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${properties?.population?.toLocaleString()}`}</span>
          </p>
          <p className="mt-2">
            Region:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${properties?.region}`}</span>
          </p>
          <p className="mt-2">
            Sub Region:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${properties?.subregion}`}</span>
          </p>
          <p className="mt-2">
            Capital:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${properties?.capital}`}</span>
          </p>
        </div>
        <div>
          <p>
            Top Level Domain:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${properties?.tld}`}</span>
          </p>
          <p className="mt-2">
            Currencies:
            <span className="dark:text-darkWhite text-lightDarkWhite">{` ${
              Object.values(properties?.currencies)[0]?.name
            }`}</span>
          </p>
          <p className="mt-2">
            Languages:
            <span className="dark:text-darkWhite text-lightDarkWhite">
              {languages}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center">
        <div className="sm:mr-4 shrink-none">
          <p>Border Countries:</p>
        </div>
        <div className="flex flex-1 flex-wrap shrink-1">
          {properties?.borders?.map((border) => (
            <div key={border}>
              <Border code={border} />
            </div>
          ))}
          {properties?.borders?.length === 0 && (
            <p className="dark:text-darkWhite text-lightDarkWhite">
              No Borders
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryProperties;

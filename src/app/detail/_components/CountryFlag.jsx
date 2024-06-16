import Image from "next/image";

const CountryFlag = ({ flag }) => {
  return (
    <div
      data-testid="CountryFlag"
      className=" flex justify-center w-fit border-1  rounded-lg shadow-md z-10  
    "
    >
      <Image
        src={flag?.svg}
        alt={flag?.alt || "Country Flag"}
        quality={100}
        width={620}
        height={300}
        className=" p-6"
      />
    </div>
  );
};

export default CountryFlag;

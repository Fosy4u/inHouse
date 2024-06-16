import lookup from "country-code-lookup";
import Link from "next/link";

const Border = ({ code }) => {
  const borderName = lookup.byIso(code)?.country || code;
  return (
    <Link data-testid="Border" href={`/detail/${code}`}>
      <div className="min-w-24 sm:min-w-28 dark:text-darkWhite text-lightDarkWhite dark:bg-darkBlueElement  hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-sm text-sm p-0 sm:py-1 mt-2 text-center  items-center  dark:hover:bg-[#050708]/30 mr-1  sm:mr-0 sm:ml-2 shadow-md z-20">
        {borderName}
      </div>
    </Link>
  );
};

export default Border;

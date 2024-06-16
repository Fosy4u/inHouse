import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ value, setValue }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <form className="flex fixed top-28 sm:top-32 z-20 h-fit items-center w-4/5 md:max-w-md border-0 shadow-md">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="h-14 dark:bg-darkBlueElement  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5     dark:focus:ring-blue-500"
          placeholder="Search for a country..."
          value={value}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Search;

"use client";
import { useEffect, useRef, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = ({ region, setRegion }) => {
  const ref = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // close dropdown when clicked outside
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="w-1/2 sm:w-2/12 fixed z-20 sm:right-40  top-48 sm:top-32 
    "
    >
      <button
        id="dropdownHoverButton"
        data-testid="dropdown"
        type="button"
        onClick={toggle}
        ref={buttonRef}
        className="flex text-sm rounded-md flex-row justify-between items-center  w-full border-0 shadow-md p-4 h-14 dark:bg-darkBlueElement"
      >
        <span> {region === "All" ? "Filter by Region" : region}</span>
        <span className=" flex items-center pointer-events-none ">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
      {isOpen && (
        <div
          ref={ref}
          id="dropdownHover"
          className=" bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 mt-1"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
            data-testid="select"
          >
            {regions.map((area) => (
              <li
                key={area}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => setRegion(area)}
              >
                {area}
              </li>
            ))}
            <li
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              onClick={() => {
                setRegion("All");
                setIsOpen(false);
              }}
            >
              None
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;

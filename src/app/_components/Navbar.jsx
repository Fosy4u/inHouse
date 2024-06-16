"use client";
import { useContext } from "react";
import { ThemeContext } from "../_store/themeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={` dark:bg-darkBlueElement flex  justify-between items-center p-8 w-full border-1  z-20 top-0 start-0 fixed   border-opacity-50 shadow-md
      `}
    >
      <h3
        className="text-md md:text-xl font-bold dark:text-white
      "
      >
        Where in the world?
      </h3>

      <button className="flex items-center space-x-2">
        <span>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </span>
        <span className="cursor-pointer" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;

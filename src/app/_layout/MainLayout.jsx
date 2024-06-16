"use client";

import { useContext } from "react";
import Navbar from "../_components/Navbar";
import { ThemeContext } from "../_store/themeContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <div
        className="flex flex-col min-h-screen items-stretch dark:bg-veryDarkBlueBg dark:text-white light:bg-veryLightGrayBg light:text-veryDarkBlueText
"
      >
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default MainLayout;

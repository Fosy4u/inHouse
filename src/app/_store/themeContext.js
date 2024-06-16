"use client";
import { createContext, ReactElement, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      return setTheme(localTheme);
    }
    setTheme("light");
  }, []);

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

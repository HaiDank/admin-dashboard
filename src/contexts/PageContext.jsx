import React, { useContext, useState, createContext, useEffect } from "react";

const PageContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setIsDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    const currentMode = !isDarkMode;
    setIsDarkMode(currentMode);
    if (currentMode) localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");
  };

  return (
    <PageContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

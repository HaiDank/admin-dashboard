import React, { useContext, useState, createContext } from "react";

const PageContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <PageContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

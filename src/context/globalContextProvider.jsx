import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);


  











  return (
    <AppContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

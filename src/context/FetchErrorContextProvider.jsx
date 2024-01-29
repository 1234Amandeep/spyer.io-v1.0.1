import React, { useState } from "react";
import fetchErrorContext from "./fetchErrorContext";

function FetchErrorContextProvider({ children }) {
  const [isError, setIsError] = useState(false);

  return (
    <fetchErrorContext.Provider value={{ isError, setIsError }}>
      {children}
    </fetchErrorContext.Provider>
  );
}

export default FetchErrorContextProvider;

import React, { useState } from "react";
import loaderContext from "./loaderContext";

function LoaderContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <loaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </loaderContext.Provider>
  );
}

export default LoaderContextProvider;

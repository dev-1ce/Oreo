import React, { useState } from "react";
import { DataHome } from "../data/home";

export const DetailsContext = React.createContext();

export function DetailsProvider({ children }) {
  const initialState = {
    home: DataHome,
  };
  const [state, setState] = useState(initialState);
  return (
    <DetailsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

"use client";

import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

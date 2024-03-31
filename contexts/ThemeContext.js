"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import Home from "@/app/page";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export const ThemeProvider = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const htmlTag = document.documentElement;
    if (state.theme === "dark") {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.remove("dark");
    }
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

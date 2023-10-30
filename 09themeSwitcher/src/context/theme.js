import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  temeMode:"Light",
  darTheme:() => {},
  lightTheme:() => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
  return useContext(ThemeContext)
}
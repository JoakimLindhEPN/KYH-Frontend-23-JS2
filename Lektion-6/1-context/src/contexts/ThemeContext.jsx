import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

  const [isLightTheme, setIsLightTheme] = useState(false)

  const toggleTheme = () => {
    setIsLightTheme(state => !state)
  }

  const value = {
    isLightTheme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider







export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if(!context) throw new Error('useThemeContext must be called within a ThemeContextProvider')

  return context
}
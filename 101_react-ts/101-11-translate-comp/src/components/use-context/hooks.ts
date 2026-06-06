import { useContext } from "react";
import { ThemeContext } from ".";


// 4. Create a custom hook for easy and safe consumption
export const useTheme =()=> {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
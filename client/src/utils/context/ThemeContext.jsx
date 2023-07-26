import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    
    //Get Theme mode from localStorage
    const initialTheme = () => localStorage.getItem("makeItGrow_color_mode");
    const [theme, setTheme] = useState(initialTheme);
    
    const toggleTheme = () => setTheme((theme) => (theme === "light" ? "dark" : "light"));
    
    useLayoutEffect(() => {
        if(!theme){
            setTheme("light")
        } 
        localStorage.setItem("makeItGrow_color_mode", theme);

        if (theme === "light") {
            document.documentElement.classList.remove("dark_mode");
            document.documentElement.classList.add("light_mode");
        } else {
            document.documentElement.classList.remove("light_mode");
            document.documentElement.classList.add("dark_mode");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
}

return context;
};

export { ThemeProvider, useTheme };
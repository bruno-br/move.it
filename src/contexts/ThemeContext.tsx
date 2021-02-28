import { createContext, ReactNode, useState } from "react";
import styles from "../styles/themes/themes.module.css";

export enum Theme {
    LIGHT,
    DARK
}

interface ThemeProviderData {
    theme: Theme;
    switchTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeProviderData);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(Theme.LIGHT);

    function switchTheme() {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                switchTheme
            }}
        >
            <div
                className={
                    theme == Theme.LIGHT ? styles.lightMode : styles.darkMode
                }
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

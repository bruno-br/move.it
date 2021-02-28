import { log } from "console";
import { createContext, ReactNode, useEffect, useState } from "react";
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

    function restoreTheme() {
        if (typeof window !== "undefined") {
            const storedTheme = Number(localStorage.getItem("theme") as string);
            if (theme != storedTheme) {
                setTheme(storedTheme);
            }
        }
        return null;
    }

    function switchTheme() {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme.toString());
        console.log(localStorage.getItem("theme"));
    }

    useEffect(() => {
        restoreTheme();
    }, []);

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

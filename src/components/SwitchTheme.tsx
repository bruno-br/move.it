import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext, Theme } from "../contexts/ThemeContext";
import styles from "../styles/components/SwitchTheme.module.css";

export default function SwitchTheme() {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <div className={styles.switchContainer}>
            <Switch
                onChange={switchTheme}
                checked={theme === Theme.DARK}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={"#5965e0"}
            />
        </div>
    );
}

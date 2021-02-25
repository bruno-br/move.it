import { useEffect, useState } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
    const startingTime = 0.05 * 60;

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(startingTime);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    function startCoundown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(startingTime);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            onClick={resetCountdown}
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            onClick={startCoundown}
                            type="button"
                            className={styles.countdownButton}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

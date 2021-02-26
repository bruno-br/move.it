import { useContext } from "react";
import {
    ChallengesContext,
    ChallengesProvider
} from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img
                src="http://github.com/bruno-br.png"
                alt="bruno-br's profile picture"
            />
            <div>
                <strong>Bruno Brasil</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}

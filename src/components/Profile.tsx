import styles from "../styles/components/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img
                src="http://github.com/bruno-br.png"
                alt="bruno-br's profile picture"
            />
            <div>
                <strong>Bruno Brasil</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}

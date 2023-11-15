import styles from "./style.module.css"

export default function Card({ children }) {
    return (
        <div className={styles.container_card}>
            {children}
        </div>
    )
}

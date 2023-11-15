import styles from "./loading.module.css";

export default function Loading() {
    return(
        <div className={styles.spinner_container}>
            <h1 className={styles.title}>Carregando...</h1>
            <div className={styles.spinner}></div>
        </div>
    )
}
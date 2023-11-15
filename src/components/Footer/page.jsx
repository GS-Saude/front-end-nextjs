import Link from "next/link"
import styles from "./style.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://www.linkedin.com/feed/">
                <div className={styles.user_box}>
                    <p className={styles.p}>Carlos Eduardo Mendonça da Silva</p>
                    <p className={styles.p}>552164 - 1TDSPV</p>
                    <p className={styles.p}>Back End</p>
                </div>
            </Link>
            <Link href="https://www.linkedin.com/feed/">
                <div className={styles.user_box}>
                    <p className={styles.p}>Eduardo Toshio Rocha Okubo</p>
                    <p className={styles.p}>551763 - 1TDSPV</p>
                    <p className={styles.p}>Front End</p>
                </div>
            </Link>
            <Link href="https://www.linkedin.com/feed/">
                <div className={styles.user_box}>
                    <p className={styles.p}>Kauê Alexandre de Oliveira</p>
                    <p className={styles.p}>551812 - 1TDSPV</p>
                    <p className={styles.p}>Banco de Dados</p>
                </div>
            </Link>
            <Link href="https://www.linkedin.com/feed/">
                <div className={styles.user_box}>
                    <p className={styles.p}>Mateus Vinicius da Conceição Silva</p>
                    <p className={styles.p}>551692 - 1TDSPV</p>
                    <p className={styles.p}>Back End</p>
                </div>
            </Link>
            <Link href="https://www.linkedin.com/feed/">
                <div className={styles.user_box}>
                    <p className={styles.p}>Vitor Machado Miranda</p>
                    <p className={styles.p}>551451 - 1TDSPV</p>
                    <p className={styles.p}>Back End</p>
                </div>
            </Link>
        </footer>
    )
}
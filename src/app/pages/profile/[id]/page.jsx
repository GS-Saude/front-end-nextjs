import Link from "next/link"
import styles from "./styles.module.css"


export default function Profile({ params }) {
    const { id } = params;


    return (
        <div className={styles.background}>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li className={styles.selected_item}><Link href="/">Usuário</Link></li>
                        <li className={styles.link_dieta}><Link href="/pages/auth/login">Dieta</Link></li>
                        <li className={styles.link_treino}><Link href="/pages/auth/register">Treino</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <h1 className={styles.teste}>Profile</h1>
            </main>
        </div>
    )
}
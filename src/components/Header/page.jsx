'use client'
import styles from "./style.module.css"
import { useMemo } from "react";
import renderIcon from "../../utils/iconGallery";
import ButtonPrimary from "../Button/variants/primary";
import ButtonSecondary from "../Button/variants/secondary";

export default function Header() {
    const icons = useMemo(() => ({
        login: renderIcon({ name: "login", size: 18, color: "#fff" }),
        hamburguer: renderIcon({ name: 'hamburguer', size: 18, color: "#fff" }),
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
    }), []);

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}><ButtonSecondary redirect="/">Home</ButtonSecondary></li>
                    <li className={styles.li}><ButtonPrimary redirect="/pages/auth/login">{icons.login}Login</ButtonPrimary></li>
                </ul>
            </nav>
        </header>
    )
}

'use client'
import styles from "./style.module.css"
import { useMemo } from "react";
import renderIcon from "../../utils/iconGallery";
import ButtonPrimary from "../Button/variants/primary";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const icons = useMemo(() => ({
        login: renderIcon({ name: "login", size: 18, color: "#fff" }),
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
    }), []);

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <Link href="/"><Image src="/logo.png" width={40} height={40} alt="Logo" /></Link>
                    <li className={styles.li}><ButtonPrimary redirect="/pages/auth/login">{icons.login}Login</ButtonPrimary></li>
                </ul>
            </nav>
        </header>
    )
}

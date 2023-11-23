'use client'
import styles from "./style.module.css"
import { useMemo, useEffect, useState } from "react";
import renderIcon from "../../utils/iconGallery";
import ButtonPrimary from "../Button/variants/primary";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [hasToken, setHasToken] = useState(false);
    const icons = useMemo(() => ({
        login: renderIcon({ name: "login", size: 18, color: "#fff" }),
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
    }), []);

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (token) {
            const firstChar = token.split("")[0];
            setHasToken(firstChar);
        } else {
            setHasToken(false);
        }
    }, [])

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <Link href="/"><Image src="/logo.png" width={40} height={40} alt="Logo" /></Link>
                    {!hasToken ? (
                        <li className={styles.li}><ButtonPrimary redirect="/auth/login">{icons.login}Login</ButtonPrimary></li>
                    ) : (
                        <li className={styles.li}><ButtonPrimary redirect={"/profile/" + hasToken}>{icons.login}Perfil</ButtonPrimary></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

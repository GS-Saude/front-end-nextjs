'use client'

import styles from "./style.module.css"
import Link from "next/link";
import { useMemo } from "react";
import renderIcon from "../../utils/iconGallery";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "../Button/variants/primary";
import ButtonSecondary from "../Button/variants/secondary";
import ButtonDanger from "../Button/variants/danger";
import ButtonSuccess from "../Button/variants/success";
import ButtonLink from "../Button/variants/link";


export default function Header() {
    const [isToken, setIsToken] = useState(false);
    const route = useRouter();

    const icons = useMemo(() => ({
        login: renderIcon({ name: "login", size: 18, color: "#fff" }),
        hamburguer: renderIcon({ name: 'hamburguer', size: 18, color: "#fff" }),
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
    }), []);

    useEffect(() => {
       
    }, []);

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <ButtonSecondary redirect="/">Home</ButtonSecondary>
                    <ButtonPrimary redirect="/pages/auth/login">{icons.login}Login</ButtonPrimary>
                </ul>
            </nav>
        </header>
    )
}

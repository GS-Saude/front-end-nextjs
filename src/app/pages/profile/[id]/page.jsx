'use client'
import { useMemo } from "react"
import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image";
import ButtonSecondary from "@/components/Button/variants/secondary";
import ButtonDanger from "@/components/Button/variants/danger";
import renderIcon from "@/utils/iconGallery";

export default function Profile({ params }) {
    const { id } = params;


    const icons = useMemo(() => ({
        logout: renderIcon({ name: "logout", size: 18, color: "#fff" }),
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
        edit: renderIcon({ name: "edit", size: 18, color: "#fff" }),
    }), []);


    return (
        <div className={styles.background}>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li className={styles.selected_item}><Link href="/pages/profile/0">Usuário</Link></li>
                        <li className={styles.not_selected_item}><Link href="">Dieta</Link></li>
                        <li className={styles.not_selected_item}><Link href="">Treino</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <div className={styles.top_profile}>
                    <Image className={styles.profile_picture} priority={true} src="/woman_and_string.jpg" width={100} height={100} alt="Foto de perfil" />
                    <div className={styles.profile_info}>
                        <div className={styles.user_info}>
                            <h1>Rodrigo Silva</h1>
                            <div className={styles.user_desc_info}>
                                <p>18 Anos</p>
                                <p>175 cm</p>
                                <p>70.5 kg</p>
                                <p>3150 Kcal</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}
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
        halter: renderIcon({ name: "halter", size: 28, color: "#fff" }),
        comida: renderIcon({ name: "comida", size: 28, color: "#fff" }),
        energia: renderIcon({ name: "energia", size: 28, color: "#fff" }),
        pessoa: renderIcon({ name: "pessoa", size: 28, color: "#fff" }),
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
                        <div className={styles.divButtons}>
                            <ButtonDanger className={styles.delete_button}>{icons.logout}Logout</ButtonDanger>
                            <ButtonSecondary className={styles.edit_button}>{icons.edit}Editar</ButtonSecondary>
                        </div>
                    </div>
                </div>

                <div className={styles.bar}>
                    <div className={styles.dieta_info}>
                        {icons.comida}
                        <div>
                            <h6>Dieta</h6>
                            <h6>Completa</h6>
                        </div>
                    </div>
                    <div className={styles.treino_info}>
                        {icons.halter}
                        <div>
                            <h6>Treino Avançado</h6>
                            <h6>Foco em Peitoral</h6>
                        </div>
                    </div>
                    <div className={styles.biotipo_info}>
                        {icons.pessoa}
                        <div>
                            <h6>Biotipo</h6>
                            <h6>Ectomorfo</h6>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
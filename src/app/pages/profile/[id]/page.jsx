'use client'
import { useMemo } from "react"
import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image";
import ButtonSecondary from "@/components/Button/variants/secondary";
import ButtonDanger from "@/components/Button/variants/danger";
import renderIcon from "@/utils/iconGallery";
import ButtonLink from "@/components/Button/variants/link";

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
        correndo: renderIcon({ name: "correndo", size: 28, color: "#fff" }),
        add: renderIcon({ name: "add", size: 18, color: "#fff" }),
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
                    <div className={styles.acessar_treino}>
                        <ButtonLink onClick={() => console.log("acessando página de treino")}>{icons.correndo}Acessar Treino</ButtonLink>
                    </div>
                </div>

                <div className={styles.bottom_profile}>
                    <div className={styles.left_container}>
                        <div className={styles.left_container_header}>
                            <h1>Medidas</h1>
                            <ButtonSecondary>{icons.add}Alterar</ButtonSecondary>
                        </div>
                        <div className={styles.medidas_container}>
                            <div className={styles.medidas_info}>
                                <h6>Peitoral:</h6>
                                <h5>100 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Braços:</h6>
                                <h5>R 40 cm | L 40 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Cintura:</h6>
                                <h5>80 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Coxas:</h6>
                                <h5>R 55 cm | L 55 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Panturrilhas:</h6>
                                <h5>R 35 cm | L 35 cm</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_container}>
                        <div className={styles.right_container_header}>
                            <h1>Objetivo</h1>
                            <ButtonSecondary>{icons.add}Alterar</ButtonSecondary>
                        </div>
                        <div className={styles.objetivo_container}>
                            <div className={styles.objetivo_info}>
                                <h6>Objetivo</h6>
                                <h5>Emagrecimento</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Tempo</h6>
                                <h5>3 meses</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Calorias</h6>
                                <h5>2500 Kcal</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
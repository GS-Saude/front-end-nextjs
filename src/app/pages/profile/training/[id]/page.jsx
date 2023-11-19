'use client'
import styles from "./styles.module.css";
import React, { useMemo, useEffect, useState } from "react";
import renderIcon from "@/utils/iconGallery";
import Link from "next/link";
import Card from "@/components/Card/page";
import Image from "next/image";

export default function Training({ params }) {
    const { id } = params;
    const [seletedTraining, setSeletedTraining] = useState();
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
        <main className={styles.background}>
            <div className={styles.sidebar}>
                <h1 className={styles.title}>Treino A</h1>
                <div className={styles.cards}>
                    <Card
                        backgroundImage="/treino_costas.jpg"
                        title="Puxada Alta"
                        onClick={() => setSeletedTraining(1)}
                    />
                    <Card
                        backgroundImage="/treino_bracos.jpg"
                        title="Rosca Unilateral"
                        onClick={() => setSeletedTraining(2)}
                    />
                    <Card
                        backgroundImage="/remada_curvada.jpg"
                        title="Remada Curvada"
                        onClick={() => setSeletedTraining(3)}
                    />
                </div>
            </div>
            <div className={styles.container}>
                {!seletedTraining && (
                    <div className={styles.centered}>
                        <h1>Selecione um treino</h1>
                    </div>
                )}
                {seletedTraining == 1 && (
                    <div className={styles.body_container}>
                        <Image className={styles.image_container} priority={true} src="/treino_costas.jpg" width={500} height={300} alt="Imagem do exercício" />
                        <h1 className={styles.title_info}>Puxada Alta na Polia</h1>
                        <div className={styles.body_info}>
                            <div className={styles.series_info}>
                                <h4>Séries e Repetições</h4>
                                <h6>3x - 12 a 15</h6>
                            </div>
                            <div className={styles.descanso}>
                                <h4>Descanso entre as séries</h4>
                                <h6>1 a 2 minutos</h6>
                            </div>
                        </div>
                    </div>
                )}
                {seletedTraining == 2 && (
                    <div className={styles.body_container}>
                        <Image className={styles.image_container} priority={true} src="/treino_bracos.jpg" width={500} height={300} alt="Imagem do exercício" />
                        <h1 className={styles.title_info}>Rosca Unilateral com Halter</h1>
                        <div className={styles.body_info}>
                            <div className={styles.series_info}>
                                <h4>Séries e Repetições</h4>
                                <h6>3x - 8 a 10</h6>
                            </div>
                            <div className={styles.descanso}>
                                <h4>Descanso entre as séries</h4>
                                <h6>1 a 2 minutos</h6>
                            </div>
                        </div>
                    </div>
                )}
                {seletedTraining == 3 && (
                    <div className={styles.body_container}>
                        <Image className={styles.image_container} priority={true} src="/remada_curvada.jpg" width={500} height={300} alt="Imagem do exercício" />
                        <h1 className={styles.title_info}>Remada Curvada</h1>
                        <div className={styles.body_info}>
                            <div className={styles.series_info}>
                                <h4>Séries e Repetições</h4>
                                <h6>3x - 10 a 12</h6>
                            </div>
                            <div className={styles.descanso}>
                                <h4>Descanso entre as séries</h4>
                                <h6>1 a 2 minutos</h6>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
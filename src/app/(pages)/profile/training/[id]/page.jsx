'use client'
import styles from "./styles.module.css";
import React, { useMemo, useEffect, useState } from "react";
import renderIcon from "@/utils/iconGallery";
import Card from "@/components/Card/page";
import Image from "next/image";

export default function Training({ params }) {
    const { id } = params;
    const [seletedTraining, setSeletedTraining] = useState();
    const [exercise, setExercise] = useState([]);
    const [trainings, setTrainings] = useState([]);
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

    const fetchTraining = async () => {
        const responseApi = await fetch(`/api/treino/tipo/${id}`)
        const data = await responseApi.json()
        setTrainings(data)
    }

    const fetchExercise = async (id) => {
        const responseAPI = await fetch(`/api/treino/exercicios/${id}`)
        const data = await responseAPI.json()
        setExercise(data)
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push("/auth/login");
        } else {
            fetchTraining();
        }
    }, []);

    return (
        <main className={styles.background}>
            <div className={styles.sidebar}>
                <h1 className={styles.title}>Treino</h1>
                <div className={styles.cards}>
                    {trainings.map((training) => (
                        <Card
                            key={training.id}
                            backgroundImage="/treino_costas.jpg"
                            title={training.nome}
                            train_page={true}
                            onClick={() => {
                                fetchExercise(training.id)
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.container}>
                {exercise.map((exercicio) => (
                    <div key={exercicio.id} className={styles.body_container}>
                        <div className={styles.exercise_header}>
                            <Image priority={true} src="/woman_and_string.jpg" width={100} height={100} alt={"Imagem de " + exercicio.nome} />
                            <h1>{exercicio.nome}</h1>
                        </div>
                        <div className={styles.exercise_body}>
                            <div className={styles.exercise_reps}>
                                <div className={styles.exercise_info_item}>
                                    <h3>{exercicio.series} Séries</h3>
                                </div>
                                <div className={styles.exercise_info_item}>
                                    <h3>{exercicio.repeticoes} Repetições</h3>
                                </div>
                            </div>
                            <div className={styles.exercise_info_item_descanso}>
                                <h3>{exercicio.tempoDescanso} min descanso</h3>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}
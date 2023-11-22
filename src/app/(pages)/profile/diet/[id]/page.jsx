'use client'
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Diet({ params }) {
    const router = useRouter();
    const { id } = params;
    const [dieta, setDieta] = useState([]);

    const fetchDieta = async () => {
        try {
            const response = await fetch(`/api/dieta/${id}`);
            const data = await response.json();
            const descricaoObj = JSON.parse(data.descricao);
            const descJson = { ...data, descricao: descricaoObj };
            setDieta(descJson);
        } catch (error) {
            console.error('Erro ao buscar dieta:', error);
        }
    };
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push("/auth/login");
        } else {
            fetchDieta();
        }
    }, []);

    return (
        <main className={styles.background}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1>Plano da Dieta</h1>
                    <h5>{dieta.nome}</h5>
                </header>
                <section>
                    {dieta.nome && (
                        <h2 className={styles.subtitle}>
                            {dieta.nome === "Emagrecimento"
                                ? "Reduzir a quantidade de carboidratos e aumentar a ingestão de proteínas"
                                : "Aumentar a ingestão de carboidratos e proteínas"}
                        </h2>
                    )}
                    <div className={styles.dieta_body}>
                        {['cafe_da_manha', 'almoco', 'lanche_da_tarde', 'jantar'].map((refeicao, index) => (
                            <div key={index} className={styles.refeicao}>
                                <h3 className={styles.titulo_refeicao}>
                                    {refeicao === 'cafe_da_manha' && 'Café da Manhã'}
                                    {refeicao === 'almoco' && 'Almoço'}
                                    {refeicao === 'lanche_da_tarde' && 'Lanche da Tarde'}
                                    {refeicao === 'jantar' && 'Jantar'}
                                </h3>
                                {dieta?.descricao?.dieta_musculo?.[refeicao]?.map((item, i) => (
                                    <div key={i} className={styles.description}>
                                        <h5 className={styles.nome_refeicao}>Opção {i+1} - {item.opcao}</h5>
                                        <div className={styles.info_dieta}>
                                            <h4>Calorias: </h4>
                                            <h5>{item.calorias} cal</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Proteínas: </h4>
                                            <h5>{item.proteinas} g</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Carboidratos: </h4>
                                            <h5>{item.carboidratos} g</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Gorduras: </h4>
                                            <h5>{item.gorduras} g</h5>
                                        </div>
                                    </div>
                                ))}
                                {dieta?.descricao?.dieta_emagrecimento?.[refeicao]?.map((item, i) => (
                                    <div key={i} className={styles.description}>
                                        <h5 className={styles.nome_refeicao}>Opção {i+1} - {item.opcao}</h5>
                                        <div className={styles.info_dieta}>
                                            <h4>Calorias: </h4>
                                            <h5>{item.calorias} cal</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Proteínas: </h4>
                                            <h5>{item.proteinas} g</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Carboidratos: </h4>
                                            <h5>{item.carboidratos} g</h5>
                                        </div>
                                        <div className={styles.info_dieta}>
                                            <h4>Gorduras: </h4>
                                            <h5>{item.gorduras} g</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

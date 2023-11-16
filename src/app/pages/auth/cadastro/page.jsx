'use client'
import styles from "./style.module.css"
import Button from "@/components/Button/variants/primary"
import ButtonLink from "@/components/Button/variants/link"
import ButtonSecondary from "@/components/Button/variants/secondary"
import Input from "@/components/Input/page"
import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Select from "@/components/Select/page"
import renderIcon from "@/utils/iconGallery"
import Card from "@/components/Card/page"
import Modal from "@/components/Modal/page"

export default function Cadastro() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        idade: "",
        genero: "",
        senha: "",
    });
    const [metabolismo, setMetabolismo] = useState({
        peso: "",
        altura: "",
        nivelAtividade: "",
    })
    const [biotipo, setBiotipo] = useState({
        nm_biotipo: "",
        desc_biotipo: "",
    });

    const [dieta, setDieta] = useState({
        nm_dieta: "",
        desc_dieta: "",
    })


    const icons = useMemo(() => ({
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        back: renderIcon({ name: "back", size: 18, color: "#fff" }),
    }), []);

    const handleClienteChange = (value, fieldName) => {
        setCliente({ ...cliente, [fieldName]: value });
    };

    const handleMetabolismoChange = (value, fieldName) => {
        setMetabolismo({ ...metabolismo, [fieldName]: value });
    }

    const calcularMetabolismoBasal = () => {
        if (cliente.genero.toLowerCase() === "masculino") {
            const calculo = (66.5 + (13.75 * metabolismo.peso) + (5.003 * metabolismo.altura) - (6.75 * cliente.idade)) * metabolismo.nivelAtividade;
            return calculo;
        } else if (cliente.genero.toLowerCase() === "feminino") {
            const calculo = (655.1 + (9.563 * metabolismo.peso) + (1.850 * metabolismo.altura) - (4.676 * cliente.idade)) * metabolismo.nivelAtividade
            return calculo;
        } else {
            throw new Error("Gênero inválido");
        }
    };

    const onSubmit = () => {
        if (!cliente.nome || !cliente.email || !cliente.idade || !cliente.genero || !cliente.senha) {
            alert("Preencha todos os campos")
            return;
        }

        try {
            console.log(cliente);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <main className={styles.main}>
                <div className={step == 1 ? styles.cadastro_container : styles.display_none}>
                    <div className={styles.image_container}>
                        <h1 className={styles.title}>Crie sua conta</h1>
                        <Image src="/personal_trainer.svg" width={200} height={200} alt="Ilustração de Login" />
                        <p className={styles.description}>Seja um de nós, para ser melhor a cada dia</p>
                    </div>
                    <form className={styles.form_box}>
                        <h1>Cadastro</h1>
                        <Input
                            label="Nome Completo"
                            onChange={(e) => handleClienteChange(e.target.value, "nome")}
                        />
                        <Input
                            label="Email"
                            type="email"
                            onChange={(e) => handleClienteChange(e.target.value, "email")}
                        />
                        <Input
                            label="Idade"
                            type="number"
                            onChange={(e) => handleClienteChange(parseInt(e.target.value), "idade")}
                        />
                        <Select
                            label="Gênero"
                            options={[{ label: "", value: "" }, { label: "Masculino", value: "Masculino" }, { label: "Feminino", value: "Feminino" }]}
                            onChange={(e) => handleClienteChange(e.target.value, "genero")}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            onChange={(e) => handleClienteChange(e.target.value, "senha")}
                        />
                        <Button onClick={() => {
                            // if (!cliente.nome || !cliente.email || !cliente.idade || !cliente.genero || !cliente.senha) {
                            //     alert("Preencha todos os campos")
                            //     return;
                            // }
                            setStep(2)
                        }}>Próximo {icons.next}</Button>
                        <ButtonLink redirect="/pages/auth/login">Já Possui Cadastro ?</ButtonLink>
                    </form>
                </div>
                <div className={step == 2 ? styles.metabolismo_container : styles.display_none}>
                    <div>
                        <Input
                            label="Peso (kg)"
                            placeholder="Digite seu peso em kg"
                            type="number"
                            onChange={(e) => handleMetabolismoChange(parseFloat(e.target.value), "peso")}
                        />
                        <Input
                            label="Estatura (cm)"
                            type="number"
                            placeholder="Digite sua altura em cm"
                            onChange={(e) => handleMetabolismoChange(parseInt(e.target.value), "altura")}
                        />
                        <Select
                            label="Nível de Atividade"
                            options={[{ label: "", value: "" }, { label: "Sedentário", value: 1.2 }, { label: "Levemente Ativo (1x por semana)", value: 1.375 }, { label: "Moderadamente Ativo (3x por semana)", value: 1.55 }, { label: "Altamente Ativo (5x na semana)", value: 1.725 }, { label: "Extremamente Ativo (todos os dias)", value: 1.9 }]}
                            onChange={(e) => handleMetabolismoChange(parseFloat(e.target.value), "nivelAtividade")}
                        />
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(1)}>{icons.back}</Button>
                        <Button onClick={() => setStep(3)}>{icons.next}</Button>
                    </div>
                </div>

                <div className={step == 3 ? styles.biotipo_container : styles.display_none}>
                    <h1>Selecione seu Biotipo</h1>
                    <div className={styles.biotipo_box}>
                        <Card
                            backgroundImage="/ectomorfo.png"
                            title="Endomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo({ nm_biotipo: "Ectomorfo", desc_biotipo: "Ectomorfos são pessoas com metabolismo acelerado, que tem dificuldade em ganhar massa muscular e peso." })
                                setTimeout(() => {
                                    setStep(4)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/mesomorfo.png"
                            title="Endomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo({ nm_biotipo: "Mesomorfo", desc_biotipo: "Mesomorfos são pessoas com metabolismo normal, que ganham massa muscular com facilidade e não acumulam tanta gordura corporal." })
                                setTimeout(() => {
                                    setStep(4)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/endomorfo.png"
                            title="Endomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo({ nm_biotipo: "Endomorfo", desc_biotipo: "Endomorfos são pessoas com metabolismo lento, que tem facilidade em ganhar peso e massa muscular." })
                                setTimeout(() => {
                                    setStep(4)
                                }, 500)
                            }}
                        />
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(2)}>{icons.back}</Button>
                        <ButtonSecondary onClick={() => setIsModalOpen(true)}>Descobrir Biotipo</ButtonSecondary>
                        <Button onClick={() => setStep(4)}>{icons.next}</Button>
                    </div>
                </div>

                <div className={step == 4 ? styles.dieta_container : styles.display_none}>
                    <h1>Selecione sua Dieta</h1>
                    <div className={styles.dieta_box}>
                        <Card
                            backgroundImage="/dieta_ectomorfo.png"
                            title="Dieta Básica"
                            color="#000"
                            cardSize="horizontal"
                            onClick={() => {
                                setDieta({ nm_dieta: "Dieta Ectomorfo", desc_dieta: "A dieta para ectomorfo deve ser rica em carboidratos e proteínas, pois são os nutrientes que ajudam no ganho de massa muscular e peso." })
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/dieta_mesomorfo.png"
                            title="Dieta Intermediária"
                            color="#000"
                            cardSize="horizontal"
                            onClick={() => {
                                setDieta({ nm_dieta: "Dieta Mesomorfo", desc_dieta: "A dieta para mesomorfo deve ser rica em proteínas e carboidratos, pois são os nutrientes que ajudam no ganho de massa muscular e peso." })
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/dieta_mesomorfo.png"
                            title="Dieta Avançada"
                            color="#000"
                            cardSize="horizontal"
                            onClick={() => {
                                setDieta({ nm_dieta: "Dieta Mesomorfo", desc_dieta: "A dieta para mesomorfo deve ser rica em proteínas e carboidratos, pois são os nutrientes que ajudam no ganho de massa muscular e peso." })
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(3)}>{icons.back}</Button>
                        <Button onClick={() => setStep(5)}>{icons.next}</Button>
                    </div>
                </div>
            </main>
            {isModalOpen && (
                <Modal title="Descubra seu biotipo" closeModal={() => setIsModalOpen(false)}>
                    <div className={styles.modal_container_biotipo}>
                        <Image src="/teste_biotipo.png" width={500} height={300} alt="Ilustração do teste de biotipo" />
                    </div>
                </Modal>
            )}
        </>
    );
}
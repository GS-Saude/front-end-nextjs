'use client'
import styles from "./style.module.css"
import Button from "@/components/Button/variants/primary"
import ButtonLink from "@/components/Button/variants/link"
import Input from "@/components/Input/page"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Cadastro() {
    const [cadastro, setCadastro] = useState({
        email: "", 
        senha: ""
    });

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setCadastro({ ...cadastro, [fieldName]: value });
    };

    const onSubmit = () => {
        try {
            console.log(cadastro);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.cadastro_container}>
                <div className={styles.image_container}>
                    <h1 className={styles.title}>Crie sua conta</h1>
                    <Image src="/personal_trainer.svg" width={200} height={200} alt="Ilustração de Login" />
                    <p className={styles.description}>Seja um de nós, para ser melhor a cada dia</p>
                </div>
                <form className={styles.form_box}>
                    <h1>Cadastro</h1>
                    <Input
                        label="Email"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <Input
                        label="Senha"
                        onChange={(e) => handleChange(e, "senha")}
                    />
                    <Button onClick={onSubmit}>Cadastrar</Button>
                    <ButtonLink redirect="/pages/auth/login">Já Possui Cadastro ?</ButtonLink>
                </form>
            </div>
        </main>
    );
}
'use client'
import styles from "./style.module.css"
import Button from "@/components/Button/variants/primary"
import ButtonLink from "@/components/Button/variants/link"
import Input from "@/components/Input/page"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Login() {
    const [login, setLogin] = useState({ email: "", senha: "" });

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setLogin({ ...login, [fieldName]: value });
    };

    const onSubmit = () => {
        try {
            console.log(login);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.login_container}>
                <div className={styles.image_container}>
                    <h1 className={styles.title}>VivaBem</h1>
                    <Image src="/illustration_login.svg" width={200} height={200} alt="Ilustração de Login" />
                    <p className={styles.description}>Seja uma pessoa mais saudável</p>
                </div>
                <form className={styles.form_box}>
                    <h1>Login</h1>
                    <Input
                        label="Email"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <Input
                        label="Senha"
                        onChange={(e) => handleChange(e, "senha")}
                    />
                    <Button onClick={onSubmit}>Entrar</Button>
                    <ButtonLink redirect="/pages/auth/cadastro">Cadastrar</ButtonLink>
                </form>
            </div>
        </main>
    );
}
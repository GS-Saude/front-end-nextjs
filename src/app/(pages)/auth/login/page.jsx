'use client'
import styles from "./style.module.css"
import Button from "@/components/Button/variants/primary"
import ButtonLink from "@/components/Button/variants/link"
import Input from "@/components/Input/page"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Login() {
    const route = useRouter();
    const [login, setLogin] = useState({ email: "", senha: "" });

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setLogin({ ...login, [fieldName]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!login.email || !login.senha) return alert("Preencha todos os campos");
        try {
            const response = await fetch("/api/cliente/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            });

            if (response.ok) {
                const responseAPI = await response.json();
                const token = Math.random().toString(36).substring(2);
                const id = responseAPI.id;
                sessionStorage.setItem("token", id+token);
                route.push(`/profile/${id}`)
            } else {
                console.log("Erro ao realizar o login");
                alert("Email ou senha Inválidos");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <main className={styles.main}>
            <div className={styles.login_container}>
                <div className={styles.image_container}>
                    <h1 className={styles.title}>VivaBem</h1>
                    <Image src="/illustration_login.svg" priority={true} width={200} height={200} alt="Ilustração de Login" />
                    <p className={styles.description}>Seja uma pessoa mais saudável</p>
                </div>
                <form className={styles.form_box} onSubmit={(e) => onSubmit(e)}>
                    <h1>Login</h1>
                    <Input
                        label="Email"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        onChange={(e) => handleChange(e, "senha")}
                    />
                    <Button type="submit">Entrar</Button>
                    <ButtonLink redirect="/auth/cadastro">Cadastrar</ButtonLink>
                </form>
            </div>
        </main>
    );
}
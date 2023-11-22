'use client'
import styles from "./style.module.css"
import Button from "@/components/Button/variants/primary"
import ButtonLink from "@/components/Button/variants/link"
import ButtonSecondary from "@/components/Button/variants/secondary"
import ButtonSuccess from "@/components/Button/variants/success"
import Input from "@/components/Input/page"
import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Select from "@/components/Select/page"
import renderIcon from "@/utils/iconGallery"
import Card from "@/components/Card/page"
import Modal from "@/components/Modal/page"
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [isModalBiotipoOpen, setIsModalBiotipoOpen] = useState(false);
    const [smallerImage, setSmallerImage] = useState(false);
    const [step, setStep] = useState(1);
    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        idade: "",
        genero: "",
        metabolismo: "",
        senha: "",
    });
    const [objetivo, setObjetivo] = useState({
        nome: "",
        tempo: 0,
        peso: 0,
    });
    const [dieta, setDieta] = useState(0);
    const [medida, setMedida] = useState({
        peso: 0,
        altura: 0,
    });
    const [nivelAtividade, setNivelAtividade] = useState("");
    const [biotipo, setBiotipo] = useState(0);
    const [treino, setTreino] = useState(0);

    const icons = useMemo(() => ({
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        back: renderIcon({ name: "back", size: 18, color: "#fff" }),
        check: renderIcon({ name: "check", size: 18, color: "#fff" }),
    }), []);

    const calcularMetabolismoBasal = () => {
        if (!cliente.idade || !cliente.genero || !medida.peso || !medida.altura || !nivelAtividade) {
            return "Dados Incompletos";
        }

        if (cliente.genero.toLowerCase() === "masculino") {
            const calculo = (66.5 + (13.75 * medida.peso) + (5.003 * medida.altura) - (6.75 * cliente.idade)) * nivelAtividade;
            if (objetivo.nome.toLowerCase() === "perder gordura") {
                setCliente({ ...cliente, metabolismo: parseInt(calculo - 500) })
            }
            if (objetivo.nome.toLowerCase() === "ganhar músculo") {
                setCliente({ ...cliente, metabolismo: parseInt(calculo + 400) })
            }
        }

        if (cliente.genero.toLowerCase() === "feminino") {
            const calculo = (655.1 + (9.563 * medida.peso) + (1.850 * medida.altura) - (4.676 * cliente.idade)) * nivelAtividade
            if (objetivo.nome.toLowerCase() === "perder gordura") {
                setCliente({ ...cliente, metabolismo: parseInt(calculo - 500) })
            }
            if (objetivo.nome.toLowerCase() === "ganhar músculo") {
                setCliente({ ...cliente, metabolismo: parseInt(calculo + 400) })
            }
        }
    };

    const onSubmit = async () => {
        if (!cliente.nome || !cliente.email || !cliente.idade || !cliente.genero || !cliente.senha || !cliente.metabolismo) {
            alert("Preencha todos os campos do cliente")
            return;
        }
        if (!objetivo.nome || !objetivo.tempo || !objetivo.peso) {
            alert("Preencha todos os campos do objetivo")
            return;
        }
        if (!nivelAtividade) {
            alert("Campo de nível de atividade não preenchido")
            return;
        }
        if (!medida.peso || !medida.altura) {
            alert("Preencha todos os campos de medida")
            return;
        }
        if (!biotipo) {
            alert("Preencha todos os campos de biotipo")
            return;
        }
        if (!treino) {
            alert("Preencha todos os campos de treino")
            return;
        }

        try {
            const responseObjetivo = await fetch("http://localhost:8080/api/objetivo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objetivo),
            });
            const responseObjetivoJson = await responseObjetivo.json();

            const schemaMedida = {
                altura: medida.altura,
                bracoDireito: 0,
                bracoEsquerdo: 0,
                cintura: 0,
                coxaDireita: 0,
                coxaEsquerda: 0,
                panturrilhaDireita: 0,
                panturrilhaEsquerda: 0,
                peso: medida.peso,
                torax: 0
            }
            const responseMedida = await fetch("http://localhost:8080/api/medida", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(schemaMedida),
            });
            const responseMedidaJson = await responseMedida.json();

            const shemaCliente = {
                medida: { id: responseMedidaJson.id },
                objetivo: { id: responseObjetivoJson.id },
                biotipo: { id: biotipo },
                dieta: { id: dieta },
                treino: { id: treino },
                nome: cliente.nome,
                email: cliente.email,
                idade: cliente.idade,
                genero: cliente.genero,
                metabolismo: cliente.metabolismo,
                senha: cliente.senha,
            };
            const responseCliente = await fetch("http://localhost:8080/api/cliente", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(shemaCliente),
            });
            const responseClienteJson = await responseCliente.json();

            if (responseClienteJson.id) {
                alert("Cadastro realizado com sucesso");
                route.push("/auth/login")
            }
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
                        <Image src="/personal_trainer.svg" priority={true} width={200} height={200} alt="Ilustração de Login" />
                        <p className={styles.description}>Seja um de nós, para ser melhor a cada dia</p>
                    </div>
                    <form className={styles.form_box}>
                        <h1>Cadastro</h1>
                        <Input
                            label="Nome Completo"
                            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                        />
                        <Input
                            label="Email"
                            type="email"
                            onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                        />
                        <Input
                            label="Idade"
                            type="number"
                            onChange={(e) => setCliente({ ...cliente, idade: parseInt(e.target.value) })}
                        />
                        <Select
                            label="Gênero"
                            options={[{ label: "", value: "" }, { label: "Masculino", value: "Masculino" }, { label: "Feminino", value: "Feminino" }]}
                            onChange={(e) => setCliente({ ...cliente, genero: e.target.value })}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            onChange={(e) => setCliente({ ...cliente, senha: e.target.value })}
                        />
                        <Button onClick={() => {
                            if (!cliente.nome || !cliente.email || !cliente.idade || !cliente.genero || !cliente.senha) {
                                alert("Preencha todos os campos do cliente")
                                return;
                            }
                            setStep(2)
                        }}>Continuar {icons.next}</Button>
                        <ButtonLink redirect="/auth/login">Já Possui Cadastro ?</ButtonLink>
                    </form>
                </div>
                <div className={step == 2 ? styles.objetivo_container : styles.display_none}>
                    <h1>Selecione seu Objetivo</h1>
                    <div className={styles.objetivo_box}>
                        <div className={styles.cards}>
                            <Card
                                backgroundImage="/perder_peso.jpg"
                                title="Perder Gordura"
                                color="#fff"
                                onClick={() => {
                                    setObjetivo({ ...objetivo, nome: "Perder Gordura" });
                                    setDieta(1);
                                }}
                            />
                            <Card
                                backgroundImage="/ganhar_peso.jpg"
                                title="Ganhar Músculo"
                                color="#fff"
                                onClick={() => {
                                    setObjetivo({ ...objetivo, nome: "Ganhar Músculo" });
                                    setDieta(2);
                                }}
                            />
                        </div>
                        <div className={styles.inputs}>
                            <Input
                                label="Peso objetivo"
                                type="number"
                                placeholder="Digite o tempo em meses"
                                onChange={(e) => setObjetivo({ ...objetivo, peso: e.target.value })}
                            />
                            <Input
                                label="Data limite"
                                placeholder="Digite o tempo em meses"
                                value={objetivo.tempo}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const formattedValue = inputValue.replace(/\D/g, '').slice(0, 8).replace(/(\d{2})(\d{2})?(\d{4})?/, (_, dia, mes, ano) => {
                                        let result = dia;
                                        if (mes) result += `/${mes}`;
                                        if (ano) result += `/${ano}`;
                                        return result;
                                    });
                                    setObjetivo({ ...objetivo, tempo: formattedValue });
                                }}
                            />
                        </div>
                    </div>
                    {objetivo.nome && (
                        <div className={styles.selected_objetivo}>
                            <h5>Objetivo selecionado:</h5>
                            <h4>{objetivo.nome.toUpperCase()}</h4>
                            <h4>{objetivo.peso.length > 0 && "Atingir " + objetivo.peso + " kg"} </h4>
                            <h4>{objetivo.tempo.length > 0 && "Até " + objetivo.tempo} </h4>
                        </div>
                    )}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(1)}>{icons.back}Voltar</Button>
                        {objetivo.nome && objetivo.tempo && objetivo.peso ? <Button onClick={() => setStep(3)}>Avançar {icons.next}</Button> : ""}
                    </div>
                </div>
                <div className={step == 3 ? styles.metabolismo_container : styles.display_none}>
                    <h2>Calcule seu Metabolismo Basal</h2>
                    <div className={styles.metabolismo_box}>
                        <Input
                            label="Peso (kg)"
                            placeholder="Digite seu peso em kg"
                            type="number"
                            onChange={(e) => setMedida({ ...medida, peso: parseFloat(e.target.value) })}
                        />
                        <Input
                            label="Estatura (cm)"
                            type="number"
                            placeholder="Digite sua altura em cm"
                            onChange={(e) => setMedida({ ...medida, altura: parseInt(e.target.value) })}
                        />
                        <Select
                            label="Nível de Atividade"
                            options={[{ label: "", value: "" }, { label: "Sedentário", value: 1.2 }, { label: "Levemente Ativo (1x por semana)", value: 1.375 }, { label: "Moderadamente Ativo (3x por semana)", value: 1.55 }, { label: "Altamente Ativo (5x na semana)", value: 1.725 }, { label: "Extremamente Ativo (todos os dias)", value: 1.9 }]}
                            onChange={(e) => setNivelAtividade(e.target.value)}
                        />
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(2)}>{icons.back} Voltar</Button>
                        {medida.peso && medida.altura && nivelAtividade && (
                            <Button onClick={() => {
                                if (!medida.peso || !medida.altura || !nivelAtividade) {
                                    alert("Preencha todos os campos")
                                    return;
                                }
                                setStep(4)
                            }}>Avançar {icons.next}</Button>
                        )}
                    </div>
                </div>
                <div className={step == 4 ? styles.biotipo_container : styles.display_none}>
                    <h1>Selecione seu Biotipo</h1>
                    <div className={styles.biotipo_box}>
                        <Card
                            backgroundImage="/ectomorfo.png"
                            title="Ectomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo(1)
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/mesomorfo.png"
                            title="Mesomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo(2)
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/endomorfo.png"
                            title="Endomorfo"
                            color="#000"
                            cardSize="vertical"
                            onClick={() => {
                                setBiotipo(3)
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                    </div>
                    {biotipo && (
                        <div className={styles.selected_biotipo}>
                            <h5>Biotipo selecionado:</h5>
                            <h4>{biotipo == 1 ? "ECTOMORFO" : (biotipo == 2 ? "MESOMORFO" : (biotipo == 3 && "ENDOMORFO"))}</h4>
                        </div>
                    )}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(3)}>{icons.back}Voltar</Button>
                        <ButtonSecondary onClick={() => {
                            if (window.innerWidth < 768) {
                                setSmallerImage(true)
                                setIsModalBiotipoOpen(true)
                            } else {
                                setSmallerImage(false)
                                setIsModalBiotipoOpen(true)
                            }
                        }}>Descobrir Biotipo</ButtonSecondary>
                        {biotipo && <Button onClick={() => setStep(5)}>Avançar {icons.next}</Button>}
                    </div>
                </div>
                <div className={step == 5 ? styles.treino_container : styles.display_none}>
                    <h1>Selecione seu Treino</h1>
                    <div className={styles.treino_box}>
                        <Card
                            backgroundImage="/treino_iniciante.jpg"
                            title="Treino Básico"
                            color="#fff"
                            onClick={() => {
                                setTreino(1);
                                calcularMetabolismoBasal();
                                setTimeout(() => {
                                    setStep(6)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/treino_intermediario.jpg"
                            title="Treino Intermediário"
                            color="#fff"
                            onClick={() => {
                                setTreino(2);
                                calcularMetabolismoBasal();
                                setTimeout(() => {
                                    setStep(6)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/treino_avancado.png"
                            title="Treino Avançado"
                            color="#fff"
                            onClick={() => {
                                setTreino(3);
                                calcularMetabolismoBasal();
                                setTimeout(() => {
                                    setStep(6)
                                }, 500)
                            }}
                        />
                    </div>
                    {treino ? (
                        <div className={styles.selected_treino}>
                            <h5>Treino selecionado:</h5>
                            <h4>{treino == 1 ? "INICIANTE" : (treino == 2 ? "INTERMEDIÁRIO" : (treino == 3 && "AVANÇADO"))}</h4>
                        </div>
                    ) : ""}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(4)}>{icons.back}Voltar</Button>
                        {treino ? <Button onClick={() => { setStep(6); calcularMetabolismoBasal(); }}>Finalizar {icons.check}</Button> : ""}
                    </div>
                </div>
                <div className={step == 6 ? styles.fim_container : styles.display_none}>
                    <h1>Finalizar Cadastro</h1>
                    <div className={styles.fim_box}>
                        <div className={styles.box_left}>
                            <div className={styles.fim_boxes}>
                                <h2>Seus Dados</h2>
                                <div className={styles.informacao}><h4>Nome:</h4> {cliente?.nome}</div>
                                <div className={styles.informacao}><h4>Email:</h4> {cliente?.email}</div>
                                <div className={styles.informacao}><h4>Idade:</h4> {cliente?.idade}</div>
                                <div className={styles.informacao}><h4>Gênero:</h4> {cliente?.genero}</div>
                                <div className={styles.informacao}><h4>Senha:</h4> {cliente.senha}</div>
                            </div>

                            <div className={styles.fim_boxes}>
                                <h2>Medidas</h2>
                                <div className={styles.informacao}><h4>Peso:</h4> {medida?.peso} kg</div>
                                <div className={styles.informacao}><h4>Altura:</h4> {medida?.altura} cm</div>
                                <div className={styles.informacao}><h4>Consumir ao dia:</h4>{cliente.metabolismo + " calorias"}</div>
                            </div>
                        </div>
                        <div className={styles.box_right}>
                            <div className={styles.fim_boxes}>
                                <h2>Sua Dieta</h2>
                                <div className={styles.informacao}><h4>Dieta:</h4> {dieta == 1 ? "Dieta para emagrecimento e perca de gordura corporal" : (dieta == 2 && "Dieta para ganho de massa muscular")}</div>
                                <h2>Seu Treino</h2>
                                <div className={styles.informacao}><h4>Treino:</h4> {treino == 1 ? "INICIANTE" : (treino == 2 ? "INTERMEDIÁRIO" : (treino == 3 && "AVANÇADO"))}</div>
                                <div className={styles.informacao}><h4>Biotipo:</h4>{biotipo == 1 ? "ECTOMORFO" : (biotipo == 2 ? "MESOMORFO" : (treino == 3 && "ENDOMORFO"))}</div>
                            </div>

                            <div className={styles.fim_boxes}>
                                <h2>Objetivo</h2>
                                <div className={styles.informacao}><h4>Objetivo: </h4>{objetivo?.nome}</div>
                                <div className={styles.informacao}><h4>Peso objetivo:</h4> {objetivo?.peso + " kg até " + objetivo?.tempo}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(5)}>{icons.back}</Button>
                        <ButtonSuccess onClick={() => onSubmit()}>Cadastrar</ButtonSuccess>
                    </div>
                </div>
            </main>
            {isModalBiotipoOpen && (
                <Modal title="Descubra seu biotipo" closeModal={() => setIsModalBiotipoOpen(false)}>
                    <div className={styles.modal_container_biotipo}>
                        {smallerImage ? (
                            <Image src="/teste_biotipo.png" priority={true} width={300} height={150} alt="Ilustração do teste de biotipo" />
                        ) : (
                            <Image src="/teste_biotipo.png" priority={true} width={500} height={300} alt="Ilustração do teste de biotipo" />
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
}
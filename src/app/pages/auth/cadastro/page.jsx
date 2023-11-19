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

export default function Cadastro() {
    const [isModalBiotipoOpen, setIsModalBiotipoOpen] = useState(false);
    const [isModalTreinoBasicoOpen, setIsModalTreinoBasicoOpen] = useState(false);
    const [isModalTreinoIntermediarioOpen, setIsModalTreinoIntermediarioOpen] = useState(false);
    const [isModalTreinoAvancadoOpen, setIsModalTreinoAvancadoOpen] = useState(false);
    const [smallerImage, setSmallerImage] = useState(false);
    const [step, setStep] = useState(1);
    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        idade: "",
        genero: "",
        senha: "",
    });
    const [objetivo, setObjetivo] = useState({
        nm_objetivo: "",
        tempo_objetivo: 0,
        peso_objetivo: 0,
    })
    const [metabolismo, setMetabolismo] = useState({
        peso: "",
        altura: "",
        nivelAtividade: "",
    })
    const [biotipo, setBiotipo] = useState({
        nm_biotipo: "",
        desc_biotipo: "",
    });
    const [treino, setTreino] = useState({
        nm_treino: "",
        desc_treino: "",
    })
    const [tipoTreino, setTipoTreino] = useState({
        nm_tipo_treino: "",
        desc_tipo_treino: "",
    })
    const [dieta, setDieta] = useState({
        nm_dieta: "",
        desc_dieta: "",
    })

    const icons = useMemo(() => ({
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        back: renderIcon({ name: "back", size: 18, color: "#fff" }),
        check: renderIcon({ name: "check", size: 18, color: "#fff" }),
    }), []);

    const handleClienteChange = (value, fieldName) => {
        setCliente({ ...cliente, [fieldName]: value });
    };

    const handleMetabolismoChange = (value, fieldName) => {
        setMetabolismo({ ...metabolismo, [fieldName]: value });
    }

    const calcularMetabolismoBasal = () => {
        if (!cliente.idade || !cliente.genero || !metabolismo.peso || !metabolismo.altura || !metabolismo.nivelAtividade) {
            return "Dados Incompletos";
        }

        if (cliente.genero.toLowerCase() === "masculino") {
            const calculo = (66.5 + (13.75 * metabolismo.peso) + (5.003 * metabolismo.altura) - (6.75 * cliente.idade)) * metabolismo.nivelAtividade;
            if (objetivo.nm_objetivo.toLowerCase() === "perder gordura") {
                return parseInt(calculo - 500);
            }
            if (objetivo.nm_objetivo.toLowerCase() === "ganhar músculo") {
                return parseInt(calculo + 400)
            }
            return parseInt(calculo);
        }
        if (cliente.genero.toLowerCase() === "feminino") {
            const calculo = (655.1 + (9.563 * metabolismo.peso) + (1.850 * metabolismo.altura) - (4.676 * cliente.idade)) * metabolismo.nivelAtividade
            if (objetivo.nm_objetivo.toLowerCase() === "perder gordura") {
                return parseInt(calculo - 500);
            }
            if (objetivo.nm_objetivo.toLowerCase() === "ganhar músculo") {
                return parseInt(calculo + 400)
            }
            return parseInt(calculo);
        }
    };

    const onSubmit = () => {
        if (!cliente.nome || !cliente.email || !cliente.idade || !cliente.genero || !cliente.senha) {
            alert("Preencha todos os campos do cliente")
            return;
        }
        if (!metabolismo.peso || !metabolismo.altura || !metabolismo.nivelAtividade) {
            alert("Preencha todos os campos do metabolismo")
            return;
        }
        if (!biotipo.nm_biotipo || !biotipo.desc_biotipo) {
            alert("Selecione um biotipo")
            return;
        }
        if (!treino.nm_treino || !treino.desc_treino) {
            alert("Selecione um treino")
            return;
        }
        if (!tipoTreino.nm_tipo_treino || !tipoTreino.desc_tipo_treino) {
            alert("Selecione um tipo de treino")
            return;
        }
        if (!dieta.nm_dieta || !dieta.desc_dieta) {
            alert("Selecione uma dieta")
            return;
        }

        try {
            console.log(cliente);
            console.log(metabolismo);
            console.log(biotipo);
            console.log(treino);
            console.log(tipoTreino);
            console.log(dieta);
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
                        }}>Continuar {icons.next}</Button>
                        <ButtonLink redirect="/pages/auth/login">Já Possui Cadastro ?</ButtonLink>
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
                                    setObjetivo({ ...objetivo, nm_objetivo: "Perder Gordura" })
                                    // setTimeout(() => {
                                    //     setStep(3)
                                    // }, 500)
                                }}
                            />
                            <Card
                                backgroundImage="/ganhar_peso.jpg"
                                title="Ganhar Músculo"
                                color="#fff"
                                onClick={() => {
                                    setObjetivo({ ...objetivo, nm_objetivo: "Ganhar Músculo" })
                                    // setTimeout(() => {
                                    //     setStep(3)
                                    // }, 500)
                                }}
                            />
                        </div>
                        <div className={styles.inputs}>
                            <Input
                                label="Peso objetivo"
                                type="number"
                                placeholder="Digite o tempo em meses"
                                onChange={(e) => setObjetivo({ ...objetivo, peso_objetivo: e.target.value })}
                            />
                            <Input
                                label="Meses para o Objetivo"
                                type="number"
                                placeholder="Digite o tempo em meses"
                                onChange={(e) => setObjetivo({ ...objetivo, tempo_objetivo: e.target.value })}
                            />
                        </div>
                    </div>
                    {objetivo.nm_objetivo && (
                        <div className={styles.selected_objetivo}>
                            <h5>Objetivo selecionado:</h5>
                            <h4>{objetivo.nm_objetivo.toUpperCase()}</h4>
                            <h4>{objetivo.peso_objetivo.length > 0 && "Atingir " + objetivo.peso_objetivo + " kg"} </h4>
                            <h4>{objetivo.tempo_objetivo.length > 0 && "Em " + objetivo.tempo_objetivo + " meses"} </h4>
                        </div>
                    )}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(1)}>{icons.back}Voltar</Button>
                        {objetivo.nm_objetivo && objetivo.tempo_objetivo && objetivo.peso_objetivo ? <Button onClick={() => setStep(3)}>Avançar {icons.next}</Button> : ""}
                    </div>
                </div>
                <div className={step == 3 ? styles.metabolismo_container : styles.display_none}>
                    <h2>Calcule seu Metabolismo Basal</h2>
                    <div className={styles.metabolismo_box}>
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
                        <Button onClick={() => setStep(2)}>{icons.back} Voltar</Button>
                        {metabolismo.peso && metabolismo.altura && metabolismo.nivelAtividade && (
                            <Button onClick={() => {
                                // if(!metabolismo.peso || !metabolismo.altura || !metabolismo.nivelAtividade){
                                //     alert("Preencha todos os campos do metabolismo")
                                //     return;
                                // }
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
                                setBiotipo({ nm_biotipo: "Ectomorfo", desc_biotipo: "Ectomorfos são pessoas com metabolismo acelerado, que tem dificuldade em ganhar massa muscular e peso." })
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
                                setBiotipo({ nm_biotipo: "Mesomorfo", desc_biotipo: "Mesomorfos são pessoas com metabolismo normal, que ganham massa muscular com facilidade e não acumulam tanta gordura corporal." })
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
                                setBiotipo({ nm_biotipo: "Endomorfo", desc_biotipo: "Endomorfos são pessoas com metabolismo lento, que tem facilidade em ganhar peso e massa muscular." })
                                setTimeout(() => {
                                    setStep(5)
                                }, 500)
                            }}
                        />
                    </div>
                    {biotipo.nm_biotipo && (
                        <div className={styles.selected_biotipo}>
                            <h5>Biotipo selecionado:</h5>
                            <h4>{biotipo.nm_biotipo.toUpperCase()}</h4>
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
                        {biotipo.nm_biotipo && <Button onClick={() => setStep(5)}>Avançar {icons.next}</Button>}
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
                                setTreino({ nm_treino: "Treino Básico", desc_treino: "Treino básico para iniciantes, com exercícios simples, para começar a ter uma vida mais saudável." })
                                setIsModalTreinoBasicoOpen(true);
                            }}
                        />
                        {isModalTreinoBasicoOpen && (
                            <Modal title="Treinos Básicos" closeModal={() => setIsModalTreinoBasicoOpen(false)}>
                                <div className={styles.modal_treino}>
                                    <Card
                                        title="Foco em Superiores"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_superiores.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Superiores", desc_tipo_treino: "Treino focado em superiores" })
                                            setIsModalTreinoBasicoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Inferiores"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_inferiores.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Inferiores", desc_tipo_treino: "Treino focado em inferiores" })
                                            setIsModalTreinoBasicoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Full Body"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_fullbody.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Full Body", desc_tipo_treino: "Treino focado no todo o corpo" })
                                            setIsModalTreinoBasicoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                </div>
                            </Modal>
                        )}

                        <Card
                            backgroundImage="/treino_intermediario.jpg"
                            title="Treino Intermediário"
                            color="#fff"
                            onClick={() => {
                                setTreino({ nm_treino: "Treino Intermediário", desc_treino: "Treino intermediário para quem já tem uma certa experiência com exercícios físicos, com exercícios mais complexos." })
                                setIsModalTreinoIntermediarioOpen(true);
                            }}
                        />
                        {isModalTreinoIntermediarioOpen && (
                            <Modal title="Treinos Intermediários" closeModal={() => setIsModalTreinoIntermediarioOpen(false)}>
                                <div className={styles.modal_treino}>
                                    <Card
                                        title="Foco em Peitoral"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_peitoral.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Peitoral", desc_tipo_treino: "Treino focado em peitoral" })
                                            setIsModalTreinoIntermediarioOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Costas"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_costas.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Costas", desc_tipo_treino: "Treino focado em costas" })
                                            setIsModalTreinoIntermediarioOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Pernas"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_pernas.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Pernas", desc_tipo_treino: "Treino focado em pernas" })
                                            setIsModalTreinoIntermediarioOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                </div>
                            </Modal>
                        )}

                        <Card
                            backgroundImage="/treino_avancado.png"
                            title="Treino Avançado"
                            color="#fff"
                            onClick={() => {
                                setTreino({ nm_treino: "Treino Avançado", desc_treino: "Treino avançado para quem já tem uma boa experiência com exercícios físicos, com exercícios complexos." })
                                setIsModalTreinoAvancadoOpen(true);
                            }}
                        />
                        {isModalTreinoAvancadoOpen && (
                            <Modal title="Treinos Avançados" closeModal={() => setIsModalTreinoAvancadoOpen(false)}>
                                <div className={styles.modal_treino}>
                                    <Card
                                        title="Foco em Peitoral"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_peitoral.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Peitoral", desc_tipo_treino: "Treino focado em peitoral" })
                                            setIsModalTreinoAvancadoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Costas"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_costas.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Costas", desc_tipo_treino: "Treino focado em costas" })
                                            setIsModalTreinoAvancadoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Pernas"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_pernas.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Pernas", desc_tipo_treino: "Treino focado em pernas" })
                                            setIsModalTreinoAvancadoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                    <Card
                                        title="Foco em Braços"
                                        color="#fff"
                                        cardSize="vertical"
                                        backgroundImage="/treino_bracos.jpg"
                                        onClick={() => {
                                            setTipoTreino({ nm_tipo_treino: "Braços", desc_tipo_treino: "Treino focado em braços" })
                                            setIsModalTreinoAvancadoOpen(false);
                                            setTimeout(() => {
                                                setStep(6)
                                            }, 500)
                                        }}
                                    />
                                </div>
                            </Modal>
                        )}
                    </div>
                    {treino.nm_treino && tipoTreino.nm_tipo_treino && (
                        <div className={styles.selected_treino}>
                            <div>
                                <h5>Treino selecionado:</h5>
                                <h4>{treino.nm_treino.toUpperCase()}</h4>
                                <h4>{tipoTreino.nm_tipo_treino.toUpperCase()}</h4>
                            </div>
                        </div>
                    )}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(4)}>{icons.back}Voltar</Button>
                        {treino.nm_treino && tipoTreino.nm_tipo_treino && <Button onClick={() => setStep(6)}>Avançar {icons.next}</Button>}
                    </div>
                </div>
                <div className={step == 6 ? styles.dieta_container : styles.display_none}>
                    <h1>Selecione sua Dieta</h1>
                    <div className={styles.dieta_box}>
                        <Card
                            backgroundImage="/dieta_basica.jpg"
                            title="Dieta Básica"
                            color="#fff"
                            onClick={() => {
                                setDieta({ nm_dieta: "Dieta Básica", desc_dieta: "A dieta básica para iniciar uma alimentação saudável, evitando produtos industrializados e processados" })
                                setTimeout(() => {
                                    setStep(7)
                                }, 500)
                            }}
                        />
                        <Card
                            backgroundImage="/dieta_completa.jpg"
                            title="Dieta Completa"
                            color="#fff"
                            onClick={() => {
                                setDieta({ nm_dieta: "Dieta Completa", desc_dieta: "A dieta ideal para manter o corpo nutrido e saudável, com frutas, verduras, legumes, proteínas e carboidratos" })
                                setTimeout(() => {
                                    setStep(7)
                                }, 500)
                            }}
                        />
                    </div>
                    {dieta.nm_dieta && (
                        <div className={styles.selected_dieta}>
                            <h5>Dieta selecionada:</h5>
                            <h4>{dieta.nm_dieta.toUpperCase()}</h4>
                        </div>
                    )}
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(5)}>{icons.back}Voltar</Button>
                        {dieta.nm_dieta && <Button onClick={() => setStep(7)}>Finalizar {icons.check}</Button>}
                    </div>
                </div>
                <div className={step == 7 ? styles.fim_container : styles.display_none}>
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
                                <div className={styles.informacao}><h4>Peso:</h4> {metabolismo?.peso} kg</div>
                                <div className={styles.informacao}><h4>Altura:</h4> {metabolismo?.altura} cm</div>
                                <div className={styles.informacao}><h4>Consumir ao dia:</h4> {calcularMetabolismoBasal() == "Dados Incompletos" ? "" : parseInt(calcularMetabolismoBasal()) + " calorias"}</div>
                            </div>
                        </div>
                        <div className={styles.box_right}>
                            <div className={styles.fim_boxes}>
                                <h2>Sua Dieta</h2>
                                <div className={styles.informacao}><h4>Dieta:</h4> {dieta?.nm_dieta}</div>
                                <div className={styles.informacao}><h4>Descrição:</h4> {dieta?.desc_dieta}</div>
                                <h2>Seu Treino</h2>
                                <div className={styles.informacao}><h4>Treino:</h4> {treino?.nm_treino}</div>
                                <div className={styles.informacao}><h4>Tipo de Treino:</h4> {tipoTreino?.nm_tipo_treino}</div>
                                <div className={styles.informacao}><h4>Biotipo:</h4>{biotipo?.nm_biotipo}</div>
                            </div>

                            <div className={styles.fim_boxes}>
                                <h2>Objetivo</h2>
                                <div className={styles.informacao}><h4>Objetivo: </h4>{objetivo?.nm_objetivo} em {objetivo?.tempo_objetivo + " meses"}</div>
                                <div className={styles.informacao}><h4>Peso objetivo:</h4> {objetivo?.peso_objetivo + " kg"}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divButton}>
                        <Button onClick={() => setStep(6)}>{icons.back}</Button>
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
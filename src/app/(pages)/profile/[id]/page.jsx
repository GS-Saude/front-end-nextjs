'use client'
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image";
import ButtonPrimary from "@/components/Button/variants/primary";
import ButtonSecondary from "@/components/Button/variants/secondary";
import ButtonLink from "@/components/Button/variants/link";
import ButtonDanger from "@/components/Button/variants/danger";
import renderIcon from "@/utils/iconGallery";
import Card from "@/components/Card/page";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/page";
import Input from "@/components/Input/page";
import Select from "@/components/Select/page";
import { formatDate } from "@/utils/Date";

export default function Profile({ params }) {
    const router = useRouter();
    const { id } = params;
    const [isChangeClient, setIsChangeClient] = useState(false);
    const [updateClient, setUpdateClient] = useState({});
    const [cliente, setCliente] = useState({});
    const [isChangeMeasures, setIsChangeMeasures] = useState(false);
    const [medidas, setMedidas] = useState({
        torax: "",
        bracoDireito: "",
        bracoEsquerdo: "",
        cintura: "",
        coxaDireita: "",
        coxaEsquerda: "",
        panturrilhaDireita: "",
        panturrilhaEsquerda: "",
        peso: "",
        altura: "",
    })
    const [isChangeObjective, setIsChangeObjective] = useState(false);
    const [objetivo, setObjetivo] = useState({
        nome: "",
        tempo: "",
        peso: "",
    })
    const [isChangeTraining, setIsChangeTraining] = useState(false);
    const [isChangeDiet, setIsChangeDiet] = useState(false);
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

    const fetchUser = async () => {
        const response = await fetch(`/api/cliente/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseAPI = await response.json();
        setCliente(responseAPI);
    }

    const updateCliente = async () => {
        const schema = {
            nome: updateClient?.nome ? updateClient?.nome : cliente.nome,
            idade: updateClient?.idade ? updateClient?.idade : cliente.idade,
            email: updateClient?.email ? updateClient?.email : cliente.email,
            senha: updateClient?.senha ? updateClient?.senha : cliente.senha,
            metabolismo: updateClient?.metabolismo ? updateClient?.metabolismo : cliente.metabolismo,
            genero: updateClient?.genero ? updateClient?.genero : cliente.genero,
            objetivo: { id: cliente.objetivo.id },
            treino: { id: cliente.treino.id },
            dieta: { id: cliente.dieta.id },
            biotipo: { id: cliente.biotipo.id },
            medida: { id: cliente.medida.id },
        }
        await fetch(`/api/cliente/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schema),
        });
        fetchUser();
        setIsChangeClient(false);
    }

    const updateTraining = async (idParam) => {
        const schema = {
            nome: cliente.nome,
            idade: cliente.idade,
            email: cliente.email,
            senha: cliente.senha,
            metabolismo: cliente.metabolismo,
            genero: cliente.genero,
            objetivo: { id: cliente.objetivo.id },
            treino: { id: idParam },
            dieta: { id: cliente.dieta.id },
            biotipo: { id: cliente.biotipo.id },
            medida: { id: cliente.medida.id },
        }
        await fetch(`/api/treino/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schema),
        });
        fetchUser();
        setIsChangeTraining(false);
    }

    const updateDiet = async (idParam) => {
        const schema = {
            nome: cliente.nome,
            idade: cliente.idade,
            email: cliente.email,
            senha: cliente.senha,
            metabolismo: cliente.metabolismo,
            genero: cliente.genero,
            objetivo: { id: cliente.objetivo.id },
            treino: { id: cliente.treino.id },
            dieta: { id: idParam },
            biotipo: { id: cliente.biotipo.id },
            medida: { id: cliente.medida.id },
        }
        await fetch(`/api/dieta/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schema),
        });
        fetchUser();
        setIsChangeDiet(false);
    }

    const updateMeasures = async () => {
        const schema = {
            torax: medidas.torax ? medidas.torax : cliente?.medida?.torax,
            bracoDireito: medidas.bracoDireito ? medidas.bracoDireito : cliente?.medida?.bracoDireito,
            bracoEsquerdo: medidas.bracoEsquerdo ? medidas.bracoEsquerdo : cliente?.medida?.bracoEsquerdo,
            cintura: medidas.cintura ? medidas.cintura : cliente?.medida?.cintura,
            coxaDireita: medidas.coxaDireita ? medidas.coxaDireita : cliente?.medida?.coxaDireita,
            coxaEsquerda: medidas.coxaEsquerda ? medidas.coxaEsquerda : cliente?.medida?.coxaEsquerda,
            panturrilhaDireita: medidas.panturrilhaDireita ? medidas.panturrilhaDireita : cliente?.medida?.panturrilhaDireita,
            panturrilhaEsquerda: medidas.panturrilhaEsquerda ? medidas.panturrilhaEsquerda : cliente?.medida?.panturrilhaEsquerda,
            peso: medidas.peso ? medidas.peso : cliente?.medida?.peso,
            altura: medidas.altura ? medidas.altura : cliente?.medida?.altura,
        }
        await fetch(`/api/medida/${cliente?.medida?.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schema),
        });
        fetchUser();
        setIsChangeMeasures(false);
    }

    const updateObjetivo = async () => {
        const schema = {
            nome: objetivo.nome ? objetivo.nome : cliente?.objetivo?.nome,
            tempo: objetivo.tempo ? objetivo.tempo : formatDate(cliente?.objetivo?.tempo),
            peso: objetivo.peso ? objetivo.peso : cliente?.objetivo?.peso,
        }
        await fetch(`/api/objetivo/${cliente?.objetivo?.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schema),
        });
        fetchUser();
        setIsChangeObjective(false);
    }

    useEffect(() => {
        sessionStorage.getItem("token") ? fetchUser() : router.push("/auth/login");
    }, [])

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <h1 className={styles.selected_item}>Perfil do Usuário</h1>
            </div>
            <main className={styles.main}>
                <div className={styles.top_profile}>
                    <Image className={styles.profile_picture} priority={true} src="/treino_superiores.jpg" width={100} height={100} alt="Foto de perfil" />
                    <div className={styles.profile_info}>
                        <div className={styles.user_info}>
                            <h1>{cliente?.nome}</h1>
                            <div className={styles.user_desc_info}>
                                <p>{cliente?.idade} Anos</p>
                                <p>{cliente?.medida?.altura} cm</p>
                                <p>{cliente?.medida?.peso} kg</p>
                                <p>{cliente?.metabolismo} Kcal</p>
                            </div>
                        </div>
                        <div className={styles.divButtons}>
                            <ButtonDanger className={styles.delete_button} onClick={() => {
                                sessionStorage.removeItem("token");
                                router.push("/auth/login");
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1500);
                            }}>{icons.logout}</ButtonDanger>
                            <ButtonSecondary className={styles.edit_button} onClick={() => setIsChangeClient(true)}>{icons.edit}</ButtonSecondary>
                            {isChangeClient && (
                                <Modal title="Atualizar Cliente" closeModal={() => setIsChangeClient(false)}>
                                    <div className={styles.modal_client}>
                                        <Input
                                            label="Nome"
                                            placeholder="Novo nome"
                                            onChange={(e) => setUpdateClient({ ...updateClient, nome: e.target.value })}
                                        />
                                        <Input
                                            label="Idade"
                                            placeholder="Nova idade"
                                            type="number"
                                            onChange={(e) => setUpdateClient({ ...updateClient, idade: parseInt(e.target.value) })}
                                        />
                                        <Input
                                            label="Metabolismo"
                                            placeholder="Novo metabolismo"
                                            type="number"
                                            onChange={(e) => setUpdateClient({ ...updateClient, metabolismo: parseInt(e.target.value) })}
                                        />
                                        <Select
                                            label="Gênero"
                                            options={[{ value: "", label: "" }, { value: "Masculino", label: "Masculino" }, { value: "Feminino", label: "Feminino" }]}
                                            onChange={(e) => setUpdateClient({ ...updateClient, genero: e.target.value })}
                                        />
                                        <Input
                                            label="Email"
                                            type="email"
                                            placeholder="Novo email"
                                            onChange={(e) => setUpdateClient({ ...updateClient, email: e.target.value })}
                                        />
                                        <Input
                                            label="Senha"
                                            placeholder="Nova senha"
                                            onChange={(e) => setUpdateClient({ ...updateClient, senha: e.target.value })}
                                        />

                                        <ButtonPrimary onClick={() => updateCliente()}>Atualizar</ButtonPrimary>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.bar}>
                    <div className={styles.dieta_info}>
                        {icons.comida}
                        <div>
                            <h6>Dieta</h6>
                            <h6>{cliente?.dieta?.nome}</h6>
                        </div>
                    </div>
                    <div className={styles.treino_info}>
                        {icons.halter}
                        <div>
                            <h6>Treino</h6>
                            <h6>{cliente?.treino?.nome}</h6>
                        </div>
                    </div>
                    <div className={styles.biotipo_info}>
                        {icons.pessoa}
                        <div>
                            <h6>Biotipo</h6>
                            <h6>{cliente?.biotipo?.nome}</h6>
                        </div>
                    </div>
                </div>

                <div className={styles.middle_profile}>
                    <div className={styles.trainning}>
                        <div className={styles.trainning_header}>
                            <h1>Treino</h1>
                            <ButtonLink onClick={() => setIsChangeTraining(true)}>{icons.edit}</ButtonLink>
                            {isChangeTraining && (
                                <Modal title="Mudar Treino" closeModal={() => setIsChangeTraining(false)}>
                                    <div className={styles.modal_training}>
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_iniciante.jpg"}
                                            title="Treino Iniciante"
                                            onClick={() => updateTraining(1)}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_intermediario.jpg"}
                                            title="Treino Intermediário"
                                            onClick={() => updateTraining(2)}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_avancado.png"}
                                            title="Treino Avançado"
                                            onClick={() => updateTraining(3)}
                                        />
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.cards}>
                            <Card
                                trainning={true}
                                backgroundImage={"/ganhar_peso.jpg"}
                                title={cliente?.treino?.nome}
                                onClick={() => router.push(`/profile/training/${cliente?.treino?.id}`)}
                            />
                        </div>
                    </div>
                    <div className={styles.diet}>
                        <div className={styles.diet_header}>
                            <h1>Dieta</h1>
                            <ButtonLink onClick={() => setIsChangeDiet(true)}>{icons.edit}</ButtonLink>
                            {isChangeDiet && (
                                <Modal title="Mudar Dieta" closeModal={() => setIsChangeDiet(false)}>
                                    <div className={styles.modal_diet}>
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/diet.jpg"}
                                            title="Emagrecimento"
                                            onClick={() => updateDiet(1)}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_superiores.jpg"}
                                            title="Ganho de Músculo"
                                            onClick={() => updateDiet(2)}
                                        />
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.cards}>
                            <Card
                                trainning={true}
                                backgroundImage={"/diet.jpg"}
                                title={cliente?.dieta?.nome}
                                onClick={() => router.push(`/profile/diet/${cliente?.dieta?.id}`)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.bottom_profile}>
                    <div className={styles.left_container}>
                        <div className={styles.left_container_header}>
                            <h1>Medidas</h1>
                            <ButtonLink onClick={() => setIsChangeMeasures(true)}>{icons.edit}</ButtonLink>
                            {isChangeMeasures && (
                                <Modal title="Atualizar Medidas" closeModal={() => setIsChangeMeasures(false)}>
                                    <div className={styles.medidas_modal}>
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Altura (cm)"
                                                placeholder="Nova altura"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, altura: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Peso (kg)"
                                                placeholder="Novo peso"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, peso: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <Input
                                            label="Tórax (cm)"
                                            placeholder="Nova medida tórax"
                                            type="number"
                                            onChange={(e) => setMedidas({ ...medidas, torax: parseInt(e.target.value) })}
                                        />
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Braço Direito (cm)"
                                                placeholder="Nova medida braço direito"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, bracoDireito: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Braço Esquerdo (cm)"
                                                placeholder="Nova medida braço esquerdo"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, bracoEsquerdo: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <Input
                                            label="Cintura (cm)"
                                            placeholder="Nova medida cintura (cm)"
                                            type="number"
                                            onChange={(e) => setMedidas({ ...medidas, cintura: parseInt(e.target.value) })}
                                        />
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Coxa Direita (cm)"
                                                placeholder="Nova medida coxa direita"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, coxaDireita: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Coxa Esquerda (cm)"
                                                placeholder="Nova medida coxa esquerda"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, coxaEsquerda: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Panturrilha Direita (cm)"
                                                placeholder="Nova medida panturrilha direita"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, panturrilhaDireita: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Panturrilha Esquerda (cm)"
                                                placeholder="Nova medida panturrilha esquerda"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, panturrilhaEsquerda: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <ButtonPrimary onClick={() => updateMeasures()}>Atualizar</ButtonPrimary>
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.medidas_container}>
                            <div className={styles.medidas_info}>
                                <h6>Altura:</h6>
                                <h5>{cliente?.medida?.altura ? cliente?.medida?.altura : 0} cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Peso:</h6>
                                <h5>{cliente?.medida?.peso ? cliente?.medida?.peso : 0} Kg</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Tórax:</h6>
                                <h5>{cliente?.medida?.torax ? cliente?.medida?.torax : 0} cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Braços:</h6>
                                <h5>L {cliente?.medida?.bracoEsquerdo ? cliente?.medida?.bracoEsquerdo : 0} cm | R {cliente?.medida?.bracoDireito ? cliente?.medida?.bracoDireito : 0} cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Cintura:</h6>
                                <h5>{cliente?.medida?.cintura ? cliente?.medida?.cintura : 0} cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Coxas:</h6>
                                <h5>L {cliente?.medida?.coxaEsquerda ? cliente?.medida?.coxaEsquerda : 0} cm | R {cliente?.medida?.coxaDireita ? cliente?.medida?.coxaDireita : 0} cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Panturrilhas:</h6>
                                <h5>L {cliente?.medida?.panturrilhaEsquerda ? cliente?.medida?.panturrilhaEsquerda : 0} cm | R {cliente?.medida?.panturrilhaDireita ? cliente?.medida?.panturrilhaDireita : 0} cm</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_container}>
                        <div className={styles.right_container_header}>
                            <h1>Objetivo</h1>
                            <ButtonLink onClick={() => setIsChangeObjective(true)}>{icons.edit}</ButtonLink>
                            {isChangeObjective && (
                                <Modal title="Atualizar Objetivo" closeModal={() => setIsChangeObjective(false)}>
                                    <div className={styles.objetivo_modal}>
                                        <Select
                                            label="Objetivo"
                                            options={[{ value: "", label: "" }, { value: "Perder Gordura", label: "Perder Gordura" }, { value: "Ganhar Músculo", label: "Ganhar Músculo" }]}
                                            onChange={(e) => setObjetivo({ ...objetivo, nome: e.target.value })}
                                        />
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Data limite"
                                                placeholder="Digite a data do objetivo"
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
                                            <Input
                                                label="Peso (kg)"
                                                type="number"
                                                placeholder="Novo peso objetivo"
                                                onChange={(e) => setObjetivo({ ...objetivo, peso: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <ButtonPrimary onClick={() => updateObjetivo()}>Atualizar</ButtonPrimary>
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.objetivo_container}>
                            <div className={styles.objetivo_info}>
                                <h6>Objetivo:</h6>
                                <h5>{cliente?.objetivo?.nome}</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Data:</h6>
                                <h5>{formatDate(cliente?.objetivo?.tempo)}</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Peso:</h6>
                                <h5>{cliente?.objetivo?.peso} Kg</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
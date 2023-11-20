'use client'
import { useMemo, useState } from "react"
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

export default function Profile({ params }) {
    const router = useRouter();
    const { id } = params;
    const [isChangeMeasures, setIsChangeMeasures] = useState(false);
    const [medidas, setMedidas] = useState({
        peitoral: "",
        braco_direito: "",
        braco_esquerdo: "",
        cintura: "",
        coxa_direita: "",
        coxa_esquerda: "",
        panturrilha_direita: "",
        panturrilha_esquerda: "",
    })
    const [isChangeObjective, setIsChangeObjective] = useState(false);
    const [objetivo, setObjetivo] = useState({
        nm_objetivo: "",
        tempo_objetivo: "",
        peso_objetivo: "",
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

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <h1 className={styles.selected_item}><Link href="/pages/profile/0">Perfil do Usuário</Link></h1>
            </div>
            <main className={styles.main}>
                <div className={styles.top_profile}>
                    <Image className={styles.profile_picture} priority={true} src="/woman_and_string.jpg" width={100} height={100} alt="Foto de perfil" />
                    <div className={styles.profile_info}>
                        <div className={styles.user_info}>
                            <h1>Rodrigo Silva</h1>
                            <div className={styles.user_desc_info}>
                                <p>18 Anos</p>
                                <p>175 cm</p>
                                <p>70.5 kg</p>
                                <p>3150 Kcal</p>
                            </div>
                        </div>
                        <div className={styles.divButtons}>
                            <ButtonDanger className={styles.delete_button}>{icons.logout}</ButtonDanger>
                            <ButtonSecondary className={styles.edit_button}>{icons.edit}</ButtonSecondary>
                        </div>
                    </div>
                </div>

                <div className={styles.bar}>
                    <div className={styles.dieta_info}>
                        {icons.comida}
                        <div>
                            <h6>Dieta</h6>
                            <h6>Completa</h6>
                        </div>
                    </div>
                    <div className={styles.treino_info}>
                        {icons.halter}
                        <div>
                            <h6>Treino Avançado</h6>
                            <h6>Foco em Peitoral</h6>
                        </div>
                    </div>
                    <div className={styles.biotipo_info}>
                        {icons.pessoa}
                        <div>
                            <h6>Biotipo</h6>
                            <h6>Ectomorfo</h6>
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
                                            onClick={() => console.log("oi")}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_intermediario.jpg"}
                                            title="Treino Intermediário"
                                            onClick={() => console.log("oi")}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_avancado.png"}
                                            title="Treino Avançado"
                                            onClick={() => console.log("oi")}
                                        />
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.cards}>
                            <Card
                                trainning={true}
                                backgroundImage={"/ganhar_peso.jpg"}
                                title="Treino A"
                                onClick={() => router.push("/pages/profile/training/1")}
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
                                            title="Dieta de Perda de Gordura"
                                            onClick={() => console.log("oi")}
                                        />
                                        <Card
                                            trainning={true}
                                            backgroundImage={"/treino_superiores.jpg"}
                                            title="Dieta de Ganho de Músculo"
                                            onClick={() => console.log("oi")}
                                        />
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.cards}>
                            <Card
                                trainning={true}
                                backgroundImage={"/diet.jpg"}
                                title="Dieta de Ganho de Músculo"
                                onClick={() => console.log("oi")}
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
                                        <Input
                                            label="Peitoral (cm)"
                                            placeholder="Nova medida peitoral"
                                            type="number"
                                            onChange={(e) => setMedidas({ ...medidas, peitoral: parseInt(e.target.value) })}
                                        />
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Braço Direito (cm)"
                                                placeholder="Nova medida braço direito"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, braco_direito: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Braço Esquerdo (cm)"
                                                placeholder="Nova medida braço esquerdo"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, braco_esquerdo: parseInt(e.target.value) })}
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
                                                onChange={(e) => setMedidas({ ...medidas, coxa_direita: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Coxa Esquerda (cm)"
                                                placeholder="Nova medida coxa esquerda"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, coxa_esquerda: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Panturrilha Direita (cm)"
                                                placeholder="Nova medida panturrilha direita"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, panturrilha_direita: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Panturrilha Esquerda (cm)"
                                                placeholder="Nova medida panturrilha esquerda"
                                                type="number"
                                                onChange={(e) => setMedidas({ ...medidas, panturrilha_esquerda: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <ButtonPrimary onClick={() => console.log(medidas)}>Atualizar</ButtonPrimary>
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.medidas_container}>
                            <div className={styles.medidas_info}>
                                <h6>Peitoral:</h6>
                                <h5>100 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Braços:</h6>
                                <h5>R 40 cm | L 40 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Cintura:</h6>
                                <h5>80 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Coxas:</h6>
                                <h5>R 55 cm | L 55 cm</h5>
                            </div>
                            <div className={styles.medidas_info}>
                                <h6>Panturrilhas:</h6>
                                <h5>R 35 cm | L 35 cm</h5>
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
                                            onChange={(e) => setObjetivo({ ...objetivo, nm_objetivo: e.target.value })}
                                        />
                                        <div className={styles.side_inputs}>
                                            <Input
                                                label="Tempo (meses)"
                                                type="number"
                                                placeholder="Tempo para atingir o objetivo"
                                                onChange={(e) => setObjetivo({ ...objetivo, tempo_objetivo: parseInt(e.target.value) })}
                                            />
                                            <Input
                                                label="Peso (kg)"
                                                type="number"
                                                placeholder="Novo peso objetivo"
                                                onChange={(e) => setObjetivo({ ...objetivo, peso_objetivo: parseInt(e.target.value) })}
                                            />
                                        </div>
                                        <ButtonPrimary onClick={() => console.log(objetivo)}>Atualizar</ButtonPrimary>
                                    </div>
                                </Modal>
                            )}
                        </div>
                        <div className={styles.objetivo_container}>
                            <div className={styles.objetivo_info}>
                                <h6>Objetivo</h6>
                                <h5>Emagrecimento</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Tempo</h6>
                                <h5>3 meses</h5>
                            </div>
                            <div className={styles.objetivo_info}>
                                <h6>Calorias</h6>
                                <h5>2500 Kcal</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
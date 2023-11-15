import Image from "next/image";
import styles from "./not-found.module.css";
import Button from "@/components/Button/variants/primary";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Houve um erro no caminho!</h1>
            <Image src="/lost_illustration.svg" width={350} height={350} alt="Ilustração de Perdido" />
            <Button redirect="/">Voltar ao Menu</Button>
        </div>
    )
}
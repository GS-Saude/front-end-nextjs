'use-client'
import styles from "./style.module.css"
import renderIcon from "@/utils/iconGallery"
import { useMemo } from "react";

export default function Card({
    icon = "user",
    iconSize = 18,
    iconColor = "#fff",
    backgroundImage,
    trainning,
    train_page,
    title,
    children,
    cardSize,
    onClick,
    color,
}) {

    const Icon = useMemo(() => renderIcon({ name: icon, size: iconSize, color: iconColor }), [icon])

    const cardStyle = useMemo(() => {
        return {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minWidth: "250px",
            minHeight: "150px",
            filter: "drop-shadow(0px 0px 10px rgba(11, 45, 93, 0.434))",
        };
    }, [backgroundImage]);

    const smallCard = useMemo(() => {
        return {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minWidth: "160px",
            maxWidth: "200px",
            minHeight: "175px",
            maxHeight: "200px",
            filter: "drop-shadow(0px 0px 10px rgba(11, 45, 93, 0.434))",
        };
    }, [backgroundImage]);

    const cardTrainning = useMemo(() => {
        return {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "calc(100% - 180px)",
            height: "90%",
            minWidth: "170px",
            minHeight: "120px",
            filter: "drop-shadow(0px 0px 10px rgba(39, 64, 100, 0.434))",
            border: "1px solid #4e4e4e",
        };
    }, [backgroundImage])

    const cardTrainPage = useMemo(() => {
        return {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minWidth: "100px",
            maxWidth: "1000px",
            minHeight: "110px",
            maxHeight: "110px",
            filter: "drop-shadow(0px 0px 10px rgba(39, 64, 100, 0.434))",
            border: "1px solid #4e4e4e",
        };
    }, [backgroundImage])

    return (
        <div 
            className={styles.container_card} 
            style={cardSize == "vertical" ? smallCard : (trainning ? cardTrainning : (train_page ? cardTrainPage : cardStyle))} 
            onClick={onClick}>

            {icon !== "user" && <div className={styles.icon}>{Icon}</div>}
            {title && <h3 className={styles.title} style={color && ({ color: color })}>{title}</h3>}
            {children}

        </div>
    )
}

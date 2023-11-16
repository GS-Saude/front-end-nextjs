'use-client'
import styles from "./style.module.css"
import renderIcon from "@/utils/iconGallery"
import { useMemo } from "react";

export default function Card({ 
    icon = "user", 
    iconSize = 18, 
    iconColor = "#fff", 
    backgroundImage,
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
            minWidth: "350px",
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
            minWidth: "200px",
            maxWidth: "200px",
            minHeight: "200px",
            maxHeight: "200px",
            filter: "drop-shadow(0px 0px 10px rgba(11, 45, 93, 0.434))",
        };
    }, [backgroundImage]);

    return (
        <div className={styles.container_card} style={cardSize == "vertical" ? smallCard : cardStyle} onClick={onClick}>
            {icon !== "user" && (
                <div className={styles.icon}>{Icon}</div>
            )}
            {title && (
                <h3 className={styles.title} style={color && ({ color: color })}>{title}</h3>
            )}
            {children}
        </div>
    )
}

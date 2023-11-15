'use client'

import styles from '../style.module.css'
import { useRouter } from 'next/navigation'
import PropTypes from "prop-types";

export default function Button({ children, redirect, type = "button", onClick }) {
    const router = useRouter()

    const handleButtonClick = () => {
        if (redirect) {
            router.push(redirect)
        } else if (onClick) {
            onClick();
        }
    }

    return (
        <button className={styles.success} type={type} onClick={handleButtonClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    redirect: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

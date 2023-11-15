import React from 'react';
import styles from "./style.module.css";
import ButtonSecondary from '../Button/variants/secondary';

const Modal = ({ closeModal, children, title }) => {

    const handleClose = () => {
        closeModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal_overlay} onClick={handleClose}></div>
            <div className={styles.modal_content}>
                <header>
                    <h2>{title && title}</h2>
                    <ButtonSecondary onClick={handleClose}>X</ButtonSecondary>
                </header>
                {children}
            </div>
        </div>
    )
};

export default Modal;

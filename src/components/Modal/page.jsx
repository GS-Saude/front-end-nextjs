import React from 'react';
import styles from "./style.module.css";
import ButtonLink from '../Button/variants/link';

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
                    <ButtonLink onClick={handleClose}>X</ButtonLink>
                </header>
                {children}
            </div>
        </div>
    )
};

export default Modal;

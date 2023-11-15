import styles from "./style.module.css";

export default function Select({ placeholder, onChange, value, options, label, name, error, register }) {
    return (
        <div className={styles.select_container}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                name={name}
                onChange={onChange}
                value={value}
                {...register}
            >
                <option value="" disabled>{placeholder}</option>
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}

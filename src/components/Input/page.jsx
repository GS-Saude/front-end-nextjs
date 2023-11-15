import React from "react";
import styles from "./style.module.css"

export default function Input({
  type = "text",
  placeholder,
  onChange,
  value,
  label,
  name,
  error,
  register,
  maxLength,
  step,
}) {
  const handleInput = (e) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
        min={type === "number" ? 0 : null}
        step={step && step}
        {...register}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

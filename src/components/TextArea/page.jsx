import React from "react";
import style from "./style.module.css";

export default function TextArea({
  placeholder,
  onChange,
  value,
  label,
  name,
  error,
  register,
  maxLength,
}) {
  const handleTextArea = (e) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={style.textarea_container}>
      <label className={style.label}>{label}</label>
      <textarea
        className={style.textarea}
        name={name}
        placeholder={placeholder}
        onChange={handleTextArea}
        value={value}
        {...register}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
}

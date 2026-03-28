import React from "react";
import styles from "src/styles/modules/Input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  ),
);

export default Input;

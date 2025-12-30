import { ChangeEvent } from 'react';
import styles from './form-field.module.css';

interface FormFieldProps {
  id: string;
  error?: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: 'select' | 'input' | 'text-area';
}

export function FormField({
  id,
  label,
  type = 'input',
  placeholder,
  error,
  onChange
}: FormFieldProps) {
  return (
    <div className={`form-field ${styles.formFieldContainer}`}>
      <div className={styles.fieldHeader}>
        <label
          htmlFor={id}
          className={styles.formLabel}
        >
          {label}
        </label>
        {error && <p className="error">{error}</p>}
      </div>
      <input
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.formInput}
      />
      <span aria-hidden></span>
    </div>
  );
}
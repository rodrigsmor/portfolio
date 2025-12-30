import { useTranslate } from '@/hooks/useTranslate';
import styles from './form-field.module.css';
import { FormFieldProps } from '@/types/form-field';

export function FormField<K extends string | number>(props: FormFieldProps<K>) {
  return (
    <div className={`form-field ${styles.formFieldContainer}`}>
      <div className={styles.fieldHeader}>
        <label
          htmlFor={props.id}
          className={styles.formLabel}
        >
          {props.label}
        </label>
        {props.error && <p className="error">{props.error}</p>}
      </div>
      <Input {...props} />
      <span aria-hidden></span>
    </div>
  );
}

function Input<K extends string | number>(props: FormFieldProps<K>) {
  const { t } = useTranslate();
  const { id, value, variant, placeholder, onChange } = props;

  if (variant === 'select') {
    return (
      <select
        id={id}
        value={value}
        defaultValue=""
        onChange={onChange}
        className={`${styles.formInput} ${value ?? styles.placeHolder}`}
      >
        <option className={styles.placeHolder} value="" disabled hidden>{placeholder}</option>
        {props.options.map((option) => {
          const label = t(option.label);
          return (
            <option key={option.value} value={option.value}>
              {label}
            </option>
          );
        })}
      </select>
    )
  }

  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      autoComplete="off"
      placeholder={placeholder}
      className={styles.formInput}
    />
  );
}
import styles from './form-field.module.css';
import { FormFieldProps } from '@/types/form-field';
import { Dictionary } from '@/functions/dictionaries';
import { PathToDot, useTranslate } from '@/hooks/useTranslate';

export function FormField<K extends string | number>(props: FormFieldProps<K>) {
  const { t } = useTranslate();

  return (
    <div className={`form-field ${styles.formFieldContainer}`}>
      <div className={styles.fieldHeader}>
        <label
          htmlFor={props.id}
          className={styles.formLabel}
        >
          {props.label}
        </label>
        {props.error && <p className="error">{t(props.error as PathToDot<Dictionary>)}</p>}
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
        {...props.inputProps}
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

  if (variant === 'text-area') {
    return (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...props.inputProps}
        placeholder={placeholder}
        className={styles.formInput}
      />
    );
  }

  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      autoComplete="off"
      {...props.inputProps}
      placeholder={placeholder}
      className={styles.formInput}
    />
  );
}
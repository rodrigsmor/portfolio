import { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import { PathToDot } from '../hooks/useTranslate';
import { Dictionary } from '../functions/dictionaries';

type HTMLInputProps = ComponentPropsWithoutRef<'input'>;
type HTMLTextAreaProps = ComponentPropsWithoutRef<'textarea'>;
type HTMLSelectProps = ComponentPropsWithoutRef<'select'>;

export interface SelectOption<K> {
  value: K;
  label: PathToDot<Dictionary>;
}

interface BaseProps<K> {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  value?: K;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface InputProps<K> extends BaseProps<K> {
  variant: 'input';
  inputProps?: HTMLInputProps;
}

interface TextAreaProps<K> extends BaseProps<K> {
  variant: 'text-area';
  inputProps?: HTMLTextAreaProps;
}

interface SelectProps<K> extends BaseProps<K> {
  variant: 'select';
  options: SelectOption<K>[];
  inputProps?: HTMLSelectProps;
}

export type FormFieldProps<K extends string | number> =
  | InputProps<K>
  | TextAreaProps<K>
  | SelectProps<K>;
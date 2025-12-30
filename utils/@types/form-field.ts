import { ChangeEvent } from 'react';
import { PathToDot } from '../hooks/useTranslate';
import { Dictionary } from '../functions/dictionaries';

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
  variant: 'input' | 'text-area';
}

interface SelectProps<K> extends BaseProps<K> {
  variant: 'select';
  options: SelectOption<K>[];
}

export type FormFieldProps<K extends string | number> = InputProps<K> | SelectProps<K>;
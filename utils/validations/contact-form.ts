import * as Yup from 'yup';
import { BudgetRange, Currency, ProjectDuration } from '../@types/contact';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const contactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, 'O nome deve ter pelo menos 5 caracteres')
    .required('O primeiro nome é obrigatório'),
  lastName: Yup.string()
    .min(5, 'O sobrenome deve ter pelo menos 5 caracteres')
    .optional(),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  phoneNumber: Yup.string()
    .nullable()
    .optional()
    .test(
      'is-valid-phone',
      'invalid phone',
      (value) => {
        if (!value) return true;

        return isValidPhoneNumber(value);
      }
    ),
  budgetRange: Yup.mixed<BudgetRange>()
    .oneOf(Object.values(BudgetRange) as BudgetRange[], 'Selecione um orçamento válido')
    .required('O orçamento é obrigatório'),
  currency: Yup.mixed<Currency>()
    .oneOf(Object.values(Currency) as Currency[], 'Selecione uma moeda válida')
    .required('A moeda é obrigatória'),
  estimatedDuration: Yup.mixed<ProjectDuration>()
    .oneOf(Object.values(ProjectDuration) as ProjectDuration[], 'Selecione uma duração válida')
    .required('A duração estimada é obrigatória'),
  projectDescription: Yup.string()
    .min(20, 'A descrição deve ter pelo menos 20 caracteres')
    .required('Conte-me um pouco sobre o seu projeto'),
});
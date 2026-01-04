import * as Yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { BudgetRange, Currency, ProjectDuration } from '../@types/contact';

export const contactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, 'ErrorMessages.Form.FirstName.min')
    .required('ErrorMessages.Form.FirstName.required'),
  lastName: Yup.string()
    .min(5, 'ErrorMessages.Form.LastName.min')
    .optional(),
  email: Yup.string()
    .email('ErrorMessages.Form.Email.email')
    .required('ErrorMessages.Form.Email.required'),
  phoneNumber: Yup.string()
    .nullable()
    .optional()
    .test(
      'is-valid-phone',
      'ErrorMessages.Form.PhoneNumber.isValidPhone',
      (value) => {
        if (!value) return true;

        return isValidPhoneNumber(value);
      }
    ),
  budgetRange: Yup.mixed<BudgetRange>()
    .oneOf(Object.values(BudgetRange) as BudgetRange[], 'ErrorMessages.Form.BudgetRange.required')
    .required('ErrorMessages.Form.BudgetRange.required'),
  currency: Yup.mixed<Currency>()
    .oneOf(Object.values(Currency) as Currency[], 'ErrorMessages.Form.Currency.required')
    .required('ErrorMessages.Form.Currency.required'),
  estimatedDuration: Yup.mixed<ProjectDuration>()
    .oneOf(Object.values(ProjectDuration) as ProjectDuration[], 'ErrorMessages.Form.EstimatedDuration.required')
    .required('ErrorMessages.Form.EstimatedDuration.required'),
  projectDescription: Yup.string()
    .min(20, 'ErrorMessages.Form.ProjectDescription.min')
    .required('ErrorMessages.Form.ProjectDescription.required'),
});
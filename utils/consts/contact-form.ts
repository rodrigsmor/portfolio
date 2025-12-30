import { BudgetRange } from '@/types/contact';
import { SelectOption } from '@/types/form-field';

export const budgetRangeOptions: SelectOption<BudgetRange>[] = [
  {
    label: 'Contact.Form.BudgetRange.under_100',
    value: BudgetRange.UNDER_100
  },
  {
    label: 'Contact.Form.BudgetRange.100_500',
    value: BudgetRange.BETWEEN_100_500
  },
  {
    label: 'Contact.Form.BudgetRange.500_1000',
    value: BudgetRange.BETWEEN_500_1000
  },
  {
    label: 'Contact.Form.BudgetRange.1000_2000',
    value: BudgetRange.BETWEEN_1000_2000
  },
  {
    label: 'Contact.Form.BudgetRange.2000_5000',
    value: BudgetRange.BETWEEN_2000_5000
  },
  {
    label: 'Contact.Form.BudgetRange.over_5000',
    value: BudgetRange.OVER_5000
  },
  {
    label: 'Contact.Form.BudgetRange.negotiable',
    value: BudgetRange.NEGOTIABLE
  }
];
import { BudgetRange, Currency, ProjectDuration } from '@/types/contact';
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

export const currencyOptions: SelectOption<Currency>[] = [
  {
    value: Currency.USD,
    label: 'Contact.Form.Currency.USD'
  },
  {
    value: Currency.BRL,
    label: 'Contact.Form.Currency.BRL'
  },
  {
    value: Currency.EUR,
    label: 'Contact.Form.Currency.EUR'
  },
  {
    value: Currency.GBP,
    label: 'Contact.Form.Currency.GBP'
  },
  {
    value: Currency.OTHER,
    label: 'Contact.Form.Currency.Other'
  }
];

export const durationOptions: SelectOption<ProjectDuration>[] = [
  {
    value: ProjectDuration.UNDER_ONE_WEEK,
    label: 'Contact.Form.ProjectDuration.under_1_week'
  },
  {
    value: ProjectDuration.ONE_TO_TWO_WEEKS,
    label: 'Contact.Form.ProjectDuration.1_2_week'
  },
  {
    value: ProjectDuration.TWO_TO_FOUR_WEEKS,
    label: 'Contact.Form.ProjectDuration.2_4_week'
  },
  {
    value: ProjectDuration.ONE_TO_THREE_MONTHS,
    label: 'Contact.Form.ProjectDuration.1_3_months'
  },
  {
    value: ProjectDuration.OVER_THREE_MONTHS,
    label: 'Contact.Form.ProjectDuration.over_3_months'
  },
  {
    value: ProjectDuration.LONG_TERM,
    label: 'Contact.Form.ProjectDuration.long_term'
  },
  {
    value: ProjectDuration.FIXED_CONTRACT,
    label: 'Contact.Form.ProjectDuration.fixed_contract'
  },
  {
    value: ProjectDuration.TO_BE_DEFINED,
    label: 'Contact.Form.ProjectDuration.to_be_defined'
  },
];
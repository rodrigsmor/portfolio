export enum Currency {
  USD = 'USD',
  BRL = 'BRL',
  EUR = 'EUR',
  GBP = 'GBP',
  OTHER = 'OTHER',
}

export enum ProjectDuration {
  UNDER_ONE_WEEK = 'under_1_week',
  ONE_TO_TWO_WEEKS = '1_2_weeks',
  TWO_TO_FOUR_WEEKS = '2_4_weeks',
  ONE_TO_THREE_MONTHS = '1_3_months',
  OVER_THREE_MONTHS = 'over_3_months',
  LONG_TERM = 'long_term',
  FIXED_CONTRACT = 'fixed_contract',
  TO_BE_DEFINED = 'to_be_defined',
}

export enum BudgetRange {
  UNDER_100 = 'under_100',
  BETWEEN_100_500 = '100_500',
  BETWEEN_500_1000 = '500_1000',
  BETWEEN_1000_2000 = '1000_2000',
  BETWEEN_2000_5000 = '2000_5000',
  OVER_5000 = 'over_5000',
  NEGOTIABLE = 'negotiable',
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  budgetRange?: BudgetRange;
  currency?: Currency;
  estimatedDuration?: ProjectDuration;
  projectDescription: string;
}
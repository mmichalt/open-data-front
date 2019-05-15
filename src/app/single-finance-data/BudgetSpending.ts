export interface BudgetSpending {
  spendingType: BudgetSpendingType;
  date: Date;
  amountOfMoney: number;
  description: string;
}

export enum BudgetSpendingType {
  ART,
  EDUCATION,
  GOVERNANCE,
  INTERGOVERNMENTAL_TRANSFERS,
  SOCIAL_WELFARE,
  SOCIETY_DEFENCE,
  SPORT,
  TRANSPORT_ROADS_HOUSEHOLD,
  UTILITIES
}

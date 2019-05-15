import {BudgetSpending} from './BudgetSpending';

export class FinanceData {
  private overall: number;
  budgetSpendings: BudgetSpending[];

  constructor(num, spen) {
    this.overall = num;
    this.budgetSpendings = spen;
  }
  set Overall(overall: number) {
    this.overall = overall;
  }
  get Overall(): number {
    return this.overall;
  }

  get overallSpendings(): number {
    return this.budgetSpendings.map(spending => spending.amountOfMoney).reduce((a, b) => a + b);
  }
}

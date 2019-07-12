import {Injectable} from '@angular/core';
import {FinanceData} from './FinanceData';
import {BudgetSpending, BudgetSpendingType} from './BudgetSpending';
import {Colors} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class SingleFinanceDataService {
  blobData: FinanceData;
  fillRandomData = (): BudgetSpending[] => {
    const arr = [];
    for (let i = 0; i < 10000; ++i) {
      const money = Math.floor(Math.random() * Math.floor(2000) + 1);
      const type = Math.floor(Math.random() * Math.floor(9));
      const ddate = new Date();
      arr.push({
        spendingType: type,
        date: ddate,
        amountOfMoney: money,
        description: '',
        index: i + 1,
        spendingTypeText: BudgetSpendingType[type]
      });
    }
    return arr;
  }

  makeSlices(): any[] {
    const slices = [];
    const groupedSpendings = Object.values(BudgetSpendingType).filter(value => !isNaN(value))
      .map((type) => {
        const moneySpent = this.blobData.budgetSpendings.filter((spend) => spend.spendingType === type).length === 0 ? 0 :
          this.blobData.budgetSpendings.filter((spend) => spend.spendingType === type)
            .map(s => s.amountOfMoney)
            .reduce((a, b) => a + b);
        return {
          spendingType: BudgetSpendingType[type],
          sum: moneySpent
        };
      });
    groupedSpendings.filter((spend, index) => {
      const obj = {
        start: 0,
        sweep: 0,
        color: Colors[BudgetSpendingType[spend.spendingType] * 3],
        type: spend.spendingType
      };
      obj.sweep = Math.floor(360 / this.blobData.Overall * spend.sum);
      if (index) {
        obj.start = slices[index - 1].sweep + slices[index - 1].start;
      }
      slices.push(obj);
    });
    slices.push({
      start: slices[slices.length - 1].start + slices[slices.length - 1].sweep,
      sweep: 360 - slices[slices.length - 1].start - slices[slices.length - 1].sweep,
      color: 'maroon',
      type: 'MONEY_LEFT'
    });
    return slices;
  }

  constructor() {
    this.blobData = new FinanceData(10000000, this.fillRandomData());
  }
}

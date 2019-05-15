import {Injectable} from '@angular/core';
import {FinanceData} from './FinanceData';
import {BudgetSpending} from './BudgetSpending';

@Injectable({
  providedIn: 'root'
})
export class SingleFinanceDataService {
  blobData: FinanceData;
  fillRandomData = (): BudgetSpending[] => {
    const arr = [];
    for (let i = 0; i < 10; ++i) {
      const money = Math.floor(Math.random() * Math.floor(1000000));
      const type = Math.floor(Math.random() * Math.floor(10));
      const ddate = new Date();
      arr.push({
        spendingType: type,
        date: ddate,
        amountOfMoney: money,
        description: ''
      });
    }
    return arr;
  }

  constructor() {
    this.blobData = new FinanceData(10000000, this.fillRandomData());
  }
}

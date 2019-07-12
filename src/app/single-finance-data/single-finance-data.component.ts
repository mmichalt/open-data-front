import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FinanceData} from './FinanceData';
import {SingleFinanceDataService} from './single-finance-data.service';
import {BudgetSpending, BudgetSpendingType} from './BudgetSpending';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as go from 'gojs/release/go';
import {TranslateService} from '@ngx-translate/core';
import {GOJS} from '../utils';

@Component({
  selector: 'app-single-finance-data',
  templateUrl: './single-finance-data.component.html',
  styleUrls: ['./single-finance-data.component.css']
})
export class SingleFinanceDataComponent implements OnInit, AfterViewInit {

  displayedColumns = ['index', 'spendingTypeText', 'amountOfMoney', 'description', 'date'];
  dataSource = new MatTableDataSource(this.sfds.blobData.budgetSpendings);

  constructor(private sfds: SingleFinanceDataService, private translate: TranslateService) { }
  ngOnInit() {
    GOJS.createPieChart('goDiagram', this.sfds.makeSlices(), this.translate);
  }

  ngAfterViewInit() {
  }
}

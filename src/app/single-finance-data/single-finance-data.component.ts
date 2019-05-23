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

  pageSizeOptions = [5, 10, 20, 50, 100, 200, 500];
  displayedColumns = ['index', 'sfd.spendingTypeText | translate', 'amountOfMoney', 'description', 'date'];
  dataSource = new MatTableDataSource(this.sfds.blobData.budgetSpendings);

  constructor(private sfds: SingleFinanceDataService, private translate: TranslateService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    GOJS.createPieChart('goDiagram', this.sfds.makeSlices(), this.translate);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

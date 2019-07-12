import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumns: string[];
  @Input() componentTranslatePrefix: string;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions: number[];
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.pageSizeOptions = [5, 10, 20, 50, 100, 200, 500];
  }

  getTDValue = (val) => {
    if (val instanceof Date) {
      moment.locale(!this.translate.currentLang ? this.translate.defaultLang : this.translate.currentLang);
      return moment.utc(val).local().format('lll');
    }
    if (typeof val === 'string') {
      return val === '' ? '' : this.translate.instant('sfd.' + val);
    }
    return val;
  }
}

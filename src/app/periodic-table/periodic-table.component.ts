import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PeriodicTableService} from './periodic-table.service';
import {PeriodicElement} from './periodicElement';
import {element} from 'protractor';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {
  title = 'open-data-front';
  pageSizeOptions: number[];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private periodicTableService: PeriodicTableService) { }

  ngOnInit() {
    this.pageSizeOptions = [5, 10, 20, 50, 100, 200, 500];
    this.periodicTableService.loadTable().subscribe(
      (elements: PeriodicElement[]) => {
        this.dataSource = new MatTableDataSource(elements);
        this.dataSource.sort = this.sort;
        this.pageSizeOptions = this.pageSizeOptions.filter((len) => {
          return len <= elements.length;
          });
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}

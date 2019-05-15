import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {PeriodicTableService} from './periodic-table.service';
import {PeriodicElement} from './periodicElement';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {
  title = 'open-data-front';
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;
  constructor(private periodicTableService: PeriodicTableService) { }

  ngOnInit() {
    this.periodicTableService.loadTable().subscribe(
      (elements) => {
        this.dataSource = new MatTableDataSource(elements);
        this.dataSource.sort = this.sort;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {GOJS} from '../utils';
import {IHistoricData} from './HistoricData';
import {HistoricDataService} from './historicdata.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historicdatapage',
  templateUrl: './historicdatapage.component.html',
  styleUrls: ['./historicdatapage.component.css']
})
export class HistoricDataPageComponent implements OnInit {

  data: IHistoricData[];

  constructor(private histDataService: HistoricDataService, private router: Router) {
    this.data = this.histDataService.data;
  }

  ngOnInit() {
    GOJS.createBarChart('barChart', this.data, 'historic', '', this.router, 'sfd');
  }

}

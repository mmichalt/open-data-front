import { Component, OnInit } from '@angular/core';
import {SfdPowerbiService} from './sfd-powerbi.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-single-finance-data-powerbi',
  templateUrl: './single-finance-data-powerbi.component.html',
  styleUrls: ['./single-finance-data-powerbi.component.css']
})
export class SingleFinanceDataPowerbiComponent implements OnInit {

  reportHTML: string;

  constructor(private sfdservice: SfdPowerbiService, private http: HttpClient) {
  }

  ngOnInit() {
    this.reportHTML = '';
    this.sfdservice.getReport().subscribe(data => {
      this.reportHTML = data;
      document.getElementById('reportDiv').innerHTML = this.reportHTML;
    });
  }
}

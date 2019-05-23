import { Injectable } from '@angular/core';
import {IHistoricData} from './HistoricData';

@Injectable({
  providedIn: 'root'
})
export class HistoricDataService {

  constructor() { }

  public data: IHistoricData[] = [
    {year: 2009, value: 1000000},
    {year: 2010, value: 900000},
    {year: 2011, value: 800000},
    {year: 2012, value: 1100000},
    {year: 2013, value: 1200000},
    {year: 2014, value: 1100000},
    {year: 2015, value: 1000000},
    {year: 2016, value: 1300000},
    {year: 2017, value: 1200000},
    {year: 2018, value: 700000},
    {year: 2019, value: 200000}
  ];
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeriodicElement} from './periodicElement';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {

  apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  loadTable = (): Observable<PeriodicElement[]> => {
    return this.http.get<PeriodicElement[]>(this.apiUrl);
  }
}

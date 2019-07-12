import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SfdPowerbiService {

  constructor(private http: HttpClient) { }
  getReport() {
    return this.http.get('http://localhost:8080/finance-data-overall', {responseType: 'text'});
  }
}

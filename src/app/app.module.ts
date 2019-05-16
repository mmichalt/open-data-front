import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatToolbarModule, MatChipsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleFinanceDataComponent } from './single-finance-data/single-finance-data.component';

const appRoutes: Routes = [
  { path: 'periodic', component: PeriodicTableComponent },
  { path: 'sfd', component: SingleFinanceDataComponent },
  { path: '', redirectTo: '/sfd', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    SingleFinanceDataComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'periodic', component: PeriodicTableComponent },
  { path: '', redirectTo: '/periodic', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

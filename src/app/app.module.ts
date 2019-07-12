import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatToolbarModule, MatChipsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleFinanceDataComponent } from './single-finance-data/single-finance-data.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DateLocaleFilter} from './dateLocaleFilter';
import { HistoricDataPageComponent } from './historicdatapage/historicdatapage.component';
import { TableComponent } from './customComponents/table/table.component';
import { SingleFinanceDataPowerbiComponent } from './single-finance-data-powerbi/single-finance-data-powerbi.component';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';

const appRoutes: Routes = [
  { path: 'periodic', component: PeriodicTableComponent },
  { path: 'sfd', component: SingleFinanceDataComponent },
  { path: 'hist', component: HistoricDataPageComponent },
  { path: 'sfd-pb', component: SingleFinanceDataPowerbiComponent},
  { path: '', redirectTo: '/sfd', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    SingleFinanceDataComponent,
    DateLocaleFilter,
    HistoricDataPageComponent,
    TableComponent,
    SingleFinanceDataPowerbiComponent
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
    MatChipsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

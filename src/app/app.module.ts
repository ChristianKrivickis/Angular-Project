import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/coin-api.service';
import { RowComponent } from './components/row/row.component';
import { ListComponent } from './components/list/list.component'


@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

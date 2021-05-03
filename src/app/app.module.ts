import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CoinAPIService } from './services/coin-api.service';
import { RowComponent } from './components/row/row.component';
import { ListComponent } from './components/list/list.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/';
import { environment } from "../environments/environment";
import { FavoriteComponent } from './components/favorite/favorite.component'

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    ListComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

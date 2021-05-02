import { Injectable, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ICoin, Coin } from "../interfaces/ICoin";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})


export class CoinAPIService{
  coinDataCollection: AngularFirestoreCollection<ICoin>;
  coin_data: Observable<ICoin[]>
  allCoinData: ICoin[];

  private _searchSiteURL="https://api.coingecko.com/api/v3//coins/";
   private _siteURL="https://api.coingecko.com/api/v3//coins/markets?vs_currency=eur&per_page=50/";
  private _id="";
  private handleError(err:HttpErrorResponse) {
    console.log("DataService: " + err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http:HttpClient, private _afs:AngularFirestore) { 
    this.coinDataCollection = this._afs.collection<ICoin>('coin_data');
  } 

  searchForCoin(coinName: string) : Observable<ICoin[]> {

    return this._http.get<ICoin[]>(this._searchSiteURL + coinName)
    .pipe(
      tap(data => console.log("Data" + JSON.stringify(data))
    ),
      catchError(this.handleError),
    );
  }

  getCoinData() : Observable<ICoin[]> { 
    return this._http.get<ICoin[]>(this._siteURL + this._id)
    .pipe(
      tap(data => console.log("Data" + JSON.stringify(data))
    ),
      catchError(this.handleError),
    );
  }

  addCoinData(coin: ICoin) : void {
    this.coinDataCollection.add(JSON.parse(JSON.stringify(coin)))
  }
}
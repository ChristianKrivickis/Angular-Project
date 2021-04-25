import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ICoin } from "../ICoin";


@Injectable({
  providedIn: 'root'
})


export class DataService{
  
  private _searchSiteURL="https://api.coingecko.com/api/v3//coins/";
   private _siteURL="https://api.coingecko.com/api/v3//coins/markets?vs_currency=eur&per_page=10/";
  private _id="";
  private handleError(err:HttpErrorResponse) {
    console.log("DataService: " + err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http:HttpClient) { }

  searchForCoin(coinName: string) : Observable<ICoin[]> {
    
    return this._http.get<ICoin[]>(this._searchSiteURL + coinName)
    .pipe(
      tap(data => console.log("Data" + JSON.stringify(data))
    ),
      catchError(this.handleError),
    );
  }

  getCoinData() : Observable<ICoin[]> {
    
    return this._http.get<ICoin[]>(this._siteURL)
    .pipe(
      tap(data => console.log("Data" + JSON.stringify(data) + "\tStudent ID: S00198911 | Student Name: Christian Krivickis")
    ),
      catchError(this.handleError),
    );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { APIResponse } from "../apiresponse";

@Injectable({
  providedIn: 'root'
})


export class CoinApiService {
  
  private _siteURL="https://api.coingecko.com/api/v3/coins/";
  private _id="bitcoin";
  private handleError(err:HttpErrorResponse) {
    console.log("CoinApiService: " + err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http:HttpClient) { }

  getCoinData(coinName) : Observable<APIResponse> {
    return this._http.get<APIResponse>(this._siteURL + coinName)
    .pipe(
      tap(data => console.log("Moviedata/error" + JSON.stringify(data) + "\tStudent ID: S00198911 | Student Name: Christian Krivickis")
    ),
      catchError(this.handleError),
    );
  }
}
